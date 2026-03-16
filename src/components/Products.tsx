"use client";

import { CreditCard, Smartphone, Wallet, BadgeDollarSign, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const icons = [CreditCard, Smartphone, Wallet, BadgeDollarSign, MessageSquare];
const colors = ["bg-[#6B2D7B]", "bg-[#F9A825]", "bg-cyan-500", "bg-emerald-500", "bg-purple-500"];

export default function Products() {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t.products.title1} <span className="text-[#6B2D7B]">{t.products.title2}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.products.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.products.items.map((product, index) => {
            const Icon = icons[index];
            return (
              <div
                key={product.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div
                  className={`w-14 h-14 ${colors[index]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{product.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.desc}</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-[#6B2D7B] font-semibold hover:text-[#8B3D9B] transition-colors"
                >
                  {t.products.learnMore}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
