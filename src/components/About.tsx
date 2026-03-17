"use client";

import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.about.title}</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t.about.description}</p>
            <p className="text-gray-600 mb-8">{t.about.subDescription}</p>
            <div className="space-y-4">
              {t.about.benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6B2D7B] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-semibold">{benefit.title}</span> {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "25+", label: "active PSPs and fintech companies" },
              { number: "180", label: "integrated payment channels" },
              { number: "1K+", label: "agents and merchant outlets" },
              { number: "100M+", label: "transactions processed monthly" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-purple-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-[#6B2D7B] mb-3">{stat.number}</div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
