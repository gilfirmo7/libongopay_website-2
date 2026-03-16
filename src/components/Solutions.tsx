"use client";

import { CreditCard, Store, Building2, Landmark } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const icons = [CreditCard, Store, Building2, Landmark];
const colors = ["bg-[#6B2D7B]", "bg-[#F9A825]", "bg-cyan-500", "bg-emerald-500"];

export default function Solutions() {
  const { t } = useLanguage();

  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Abstract visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-orange-50 rounded-3xl overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 400 400" className="w-4/5 h-4/5">
                <circle cx="200" cy="200" r="30" fill="#6B2D7B" />
                <circle cx="200" cy="200" r="45" fill="none" stroke="#6B2D7B" strokeWidth="2" opacity="0.3" />
                <circle cx="100" cy="100" r="20" fill="#F9A825" />
                <line x1="120" y1="120" x2="180" y2="180" stroke="#6B2D7B" strokeWidth="2" opacity="0.5" />
                <circle cx="300" cy="100" r="20" fill="#06b6d4" />
                <line x1="280" y1="120" x2="220" y2="180" stroke="#6B2D7B" strokeWidth="2" opacity="0.5" />
                <circle cx="100" cy="300" r="20" fill="#10b981" />
                <line x1="120" y1="280" x2="180" y2="220" stroke="#6B2D7B" strokeWidth="2" opacity="0.5" />
                <circle cx="300" cy="300" r="20" fill="#8b5cf6" />
                <line x1="280" y1="280" x2="220" y2="220" stroke="#6B2D7B" strokeWidth="2" opacity="0.5" />
                <circle cx="200" cy="200" r="120" fill="none" stroke="#6B2D7B" strokeWidth="1" opacity="0.2" strokeDasharray="5,5" />
                <circle cx="200" cy="200" r="160" fill="none" stroke="#6B2D7B" strokeWidth="1" opacity="0.1" strokeDasharray="10,10" />
              </svg>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.solutions.title1} <span className="text-[#6B2D7B]">{t.solutions.title2}</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12">{t.solutions.description}</p>

            <div className="space-y-6">
              {t.solutions.items.map((solution, index) => {
                const Icon = icons[index];
                return (
                  <div
                    key={solution.title}
                    className="flex gap-4 p-5 rounded-xl bg-white hover:shadow-lg transition-shadow border border-gray-100"
                  >
                    <div className={`w-12 h-12 ${colors[index]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{solution.title}</h3>
                      <p className="text-gray-600 text-sm">{solution.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
