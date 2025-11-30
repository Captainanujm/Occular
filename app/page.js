"use client";
import Image from "next/image";
import TopInfoBar from "@/components/TopInfoBar";
import HeaderBar from "@/components/HeaderBar";
import HeroCarousel from "@/components/HeroCarousel";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import {FeaturesSection} from "@/components/FeaturesSection";
import {StatsSection} from "@/components/StatsSection";
const api = process.env.NEXT_PUBLIC_API_URL;
import { useState,useEffect } from "react";
export default function Home() {
   const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch(`${api}/api/products/sections`)
      .then((res) => res.json())
      .then(setSections);
  }, []);

  return (
   <>
   <HeroCarousel/>
   <StatsSection />          
<FeaturesSection />       
<FeaturedCategories categories={sections} />
   </>
  );
}
