"use client";

import { useEffect, useState, useRef } from "react";

export default function DirectionsMap({ storeLat, storeLng }) {
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // ✅ 1. Get user's live coordinates (client-only API)
    if (typeof navigator !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => {
          console.error("Location error:", err);
          // Don't block the UI with alerts on refresh; log instead.
        }
      );
    } else {
      console.warn("Geolocation not supported");
    }
  }, []);

  useEffect(() => {
    if (!userLocation) return;

    let map;
    let routeControl;
    let L;

    let leafletCssEl;
    let routingCssEl;

    (async () => {
      // Dynamically load Leaflet and plugin only in the browser
      const leafletModule = await import("leaflet");
      L = leafletModule?.default || leafletModule;

      // Make sure global L is available for plugins that attach to window.L
      if (typeof window !== "undefined") window.L = L;

      // Inject CSS only once
      if (!document.querySelector('link[data-leaflet-css="true"]')) {
        leafletCssEl = document.createElement("link");
        leafletCssEl.setAttribute("data-leaflet-css", "true");
        leafletCssEl.rel = "stylesheet";
        leafletCssEl.href = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css";
        document.head.appendChild(leafletCssEl);
      }

      if (!document.querySelector('link[data-routing-css="true"]')) {
        routingCssEl = document.createElement("link");
        routingCssEl.setAttribute("data-routing-css", "true");
        routingCssEl.rel = "stylesheet";
        routingCssEl.href = "https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.css";
        document.head.appendChild(routingCssEl);
      }

      // Load routing machine plugin (it expects global L)
      await import("leaflet-routing-machine");

      // Define icons using the loaded L
      const userIcon = new L.Icon({
        iconUrl:
          "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      });

      const storeIcon = new L.Icon({
        iconUrl:
          "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      });

      // ✅ 2. Initialize the map
      map = L.map("map").setView(userLocation, 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);

      // ✅ 3. Add routing between user and store
      routeControl = L.Routing.control({
        waypoints: [L.latLng(userLocation[0], userLocation[1]), L.latLng(storeLat, storeLng)],
        router: L.Routing.osrmv1({ serviceUrl: "https://router.project-osrm.org/route/v1" }),
        lineOptions: { styles: [{ color: "blue", weight: 5 }] },
        createMarker: (i, wp) =>
          L.marker(wp.latLng, { icon: i === 0 ? userIcon : storeIcon }).bindPopup(i === 0 ? "Your Location" : "Medical Store"),
        addWaypoints: false,
      }).addTo(map);

      mapRef.current = map;
    })().catch((err) => {
      // If something in dynamic import fails, log and avoid breaking the page
      // eslint-disable-next-line no-console
      console.error("DirectionsMap failed to initialize:", err);
    });

    return () => {
      try {
        if (routeControl && routeControl.getPlan) {
          routeControl.getPlan().setWaypoints([]);
        }
        if (mapRef.current) {
          mapRef.current.remove();
          mapRef.current = null;
        }
      } catch (e) {
        // ignore cleanup errors
      }
    };
  }, [userLocation, storeLat, storeLng]);

  return (
    <div
      id="map"
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "10px",
        marginTop: "1px",
      }}
    />
  );
}