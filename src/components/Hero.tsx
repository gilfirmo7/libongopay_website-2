"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20">
          <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse" />
          <div className="absolute inset-8 rounded-full border border-white/15" />
          <div className="absolute inset-16 rounded-full border border-white/10" />
          <div className="absolute inset-24 rounded-full bg-gradient-to-br from-white/5 to-transparent" />
        </div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#F9A825] rounded-full animate-ping" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: "0.3s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: "0.7s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="w-2 h-2 bg-[#F9A825] rounded-full mr-2 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">{t.hero.badge}</span>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="https://ugc.same-assets.com/W36t2q9dqeMCFVFLn4FrM8SLf6O8cUrI.png"
              alt="Libongo Pay"
              width={120}
              height={120}
              className="w-24 h-24 md:w-32 md:h-32"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {t.hero.title1}
            <br />
            <span className="text-[#F9A825]">{t.hero.title2}</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            {t.hero.subtitle}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="bg-[#F9A825] hover:bg-[#F9A825]/90 text-gray-900 font-semibold px-8 py-4 text-lg rounded-full transition-colors"
            >
              {t.hero.bookDemo}
            </Link>
            <Link
              href="#about"
              className="flex items-center border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg rounded-full transition-colors"
            >
              {t.hero.seeHow}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "25+", label: t.hero.stat1 },
            { number: "180+", label: t.hero.stat2 },
            { number: "1K+", label: t.hero.stat3 },
            { number: "100M+", label: t.hero.stat4 },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Partners */}
      <div className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70">
            {["MTN", "VISA", "Mastercard", "M-Pesa", "Airtel", "Orange Money"].map((partner) => (
              <div key={partner} className="text-white/80 font-semibold text-lg md:text-xl tracking-wide">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
