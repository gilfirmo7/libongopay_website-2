"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Check, ArrowRight, Smartphone, Users, TrendingUp, Lock, Database, RefreshCw } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function BanksPage() {
  const { t } = useLanguage();

  const features = [
    { icon: Smartphone, title: t.solutionPages.banks.whyChooseItems[0], desc: t.solutionPages.banks.whyChooseItems[0] },
    { icon: Users, title: t.solutionPages.banks.whyChooseItems[1], desc: t.solutionPages.banks.whyChooseItems[1] },
    { icon: TrendingUp, title: t.solutionPages.banks.whyChooseItems[2], desc: t.solutionPages.banks.whyChooseItems[2] },
    { icon: Lock, title: t.solutionPages.banks.whyChooseItems[3], desc: t.solutionPages.banks.whyChooseItems[3] },
    { icon: Database, title: t.solutionPages.banks.whyChooseItems[4], desc: t.solutionPages.banks.whyChooseItems[4] },
    { icon: RefreshCw, title: t.solutionPages.banks.whyChooseItems[5], desc: t.solutionPages.banks.whyChooseItems[5] },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="gradient-hero pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">{t.solutionPages.banks.title}</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 md:mb-8">
                {t.solutionPages.banks.subtitle}
              </p>
              <Link href="/#contact" className="inline-flex items-center justify-center bg-[#F9A825] hover:bg-[#F9A825]/90 text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base">
                {t.solutionPages.banks.ctaButton} <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <img src="https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=600&h=600&fit=crop" alt="Banking Services" className="w-full rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              {t.solutionPages.banks.section1Title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              {t.solutionPages.banks.section1Desc}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#6B2D7B] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 aspect-video rounded-2xl md:rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&h=600&fit=crop" alt="Banking Services Dashboard" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.solutionPages.banks.whyChooseTitle}</h2>
              <div className="space-y-3 sm:space-y-4">
                {t.solutionPages.banks.whyChooseItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#6B2D7B] flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              {t.solutionPages.banks.ctaTitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 px-4">
              {t.solutionPages.banks.ctaDesc}
            </p>
            <Link href="/#contact" className="inline-flex items-center justify-center bg-[#6B2D7B] hover:bg-[#6B2D7B]/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base">
              {t.solutionPages.banks.ctaButton} <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
