// FacilitySection.jsx
"use client"
import { motion } from "framer-motion";
import {
  FlaskConical,
  ShieldCheck,
  Database,
  Activity,
  Building2,
  FileSearch,
} from "lucide-react";

export default function FacilitySection() {
  return (
    <section className="w-full bg-[#08292d] py-20 px-6 md:px-16 text-gray-200">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-teal-300 mb-6"
      >
        Our Facilities
      </motion.h2>

      {/* Long Description Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-300 mb-16 text-center"
      >
        At <span className="text-teal-300 font-semibold">Ocular Pharmaceuticals</span>,
        we have built a modern healthcare ecosystem powered by advanced medical
        science, automated digital systems, and secure cloud-based architecture.
        Our facility is designed to support every stage of the medical workflow—from
        pharmaceutical product management to diagnostic processing and secure
        patient data handling. We ensure that medicines are stored, tracked, and
        managed with precision using real-time monitoring, batch verification, and
        expiry-based intelligence. Our digital laboratory facility allows faster,
        more accurate medical investigations with automated data entry, refined
        result processing, and encrypted delivery. Every patient report, medicine
        detail, and diagnostic outcome is preserved in a highly secured backend,
        ensuring confidentiality, accuracy, and complete accessibility for doctors
        and patients. With scalable server infrastructure, REST-driven APIs, and a
        clean user-friendly interface, our platform brings together reliability,
        automation, and medical excellence under one unified healthcare system.
      </motion.p>

      {/* Facility Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        {[
          {
            icon: <FlaskConical size={42} />,
            title: "Advanced Diagnostic Center",
            desc: "Digital diagnostics with automated report processing, high-precision analysis, and secure cloud storage.",
          },
          {
            icon: <Building2 size={42} />,
            title: "Pharmaceutical Management",
            desc: "Real-time medicine tracking, batch monitoring, expiry alerts, and structured drug information.",
          },
          {
            icon: <Activity size={42} />,
            title: "Digital Lab Services",
            desc: "Automated test entry, error-free result generation, and instant secure delivery of medical reports.",
          },
          {
            icon: <ShieldCheck size={42} />,
            title: "Secure Patient Records",
            desc: "Fully encrypted storage with role-based access, data integrity checks, and privacy-focused architecture.",
          },
          {
            icon: <Database size={42} />,
            title: "Smart Backend Infrastructure",
            desc: "Fast API responses, optimized databases, and scalable server architecture for healthcare workloads.",
          },
          {
            icon: <FileSearch size={42} />,
            title: "User-Friendly Healthcare Portal",
            desc: "Modern dark-teal UI, responsive design, smooth animations, and intuitive medical navigation.",
          },
        ].map((facility, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-[#0f3c41] rounded-2xl p-8 shadow-lg border border-teal-700/40 
                       hover:shadow-teal-300/20 hover:scale-[1.03] transition-all duration-300"
          >
            <div className="text-teal-300 mb-4">{facility.icon}</div>

            <h3 className="text-xl font-semibold text-teal-200 mb-2">
              {facility.title}
            </h3>

            <p className="text-gray-300">{facility.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
