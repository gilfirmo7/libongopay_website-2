"use client";

import { Rocket, DollarSign, Globe2, Coins, TrendingUp, Shield, LineChart, Building } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const icons = [Rocket, DollarSign, Globe2, Coins, TrendingUp, Shield, LineChart, Building];

export default function Benefits() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t.benefits.title1} <span className="text-[#6B2D7B]">{t.benefits.title2}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.benefits.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.benefits.items.map((benefit, index) => {
            const Icon = icons[index];
            return (
              <div
                key={benefit.title}
                className="group p-6 rounded-2xl bg-gray-50 hover:bg-purple-50 transition-colors border border-gray-100 hover:border-purple-200"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-[#6B2D7B] transition-colors">
                  <Icon className="w-6 h-6 text-[#6B2D7B] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="gradient-hero rounded-3xl p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t.benefits.ctaTitle}</h3>
          <Link
            href="#contact"
            className="inline-block bg-[#F9A825] hover:bg-[#F9A825]/90 text-gray-900 font-semibold px-8 py-4 text-lg rounded-full mt-4 transition-colors"
          >
            {t.benefits.ctaButton}
          </Link>
        </div>
      </div>
    </section>
  );
}
