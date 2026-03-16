import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Check, ArrowRight, Smartphone, Users, TrendingUp, Lock, Database, RefreshCw } from "lucide-react";

export default function BanksPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="gradient-hero pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">For Banks & Microfinance Institutions</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 md:mb-8">
                Digitize your services and reach more customers with modern fintech infrastructure
              </p>
              <Link href="/#contact" className="inline-flex items-center justify-center bg-[#F9A825] hover:bg-[#F9A825]/90 text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base">
                Partner With Us <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
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
              Transform Your Banking Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Modernize lending, collections, and customer onboarding with our proven infrastructure
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Smartphone, title: "Digital Lending", desc: "Launch BNPL, SME loans, or microfinance products with integrated risk scoring." },
              { icon: Users, title: "Agent Banking", desc: "Build and manage agent networks for cash deposits, withdrawals, and more." },
              { icon: TrendingUp, title: "Revenue Growth", desc: "Add new revenue streams with payments, wallets, and value-added services." },
              { icon: Lock, title: "Secure & Compliant", desc: "Bank-grade security with full regulatory compliance built-in." },
              { icon: Database, title: "Customer Insights", desc: "Advanced analytics and reporting for better decision-making." },
              { icon: RefreshCw, title: "Easy Integration", desc: "API-first platform that integrates with your core banking system." },
            ].map((feature) => (
              <div key={feature.title} className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Banks Choose Libongo Pay</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8">
                Join leading financial institutions that trust us to power their digital transformation
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Reduce time-to-market for new products by 80%",
                  "Access 250+ payment channels across Africa",
                  "Lower operational costs with shared infrastructure",
                  "Increase customer reach through agent networks",
                  "Real-time transaction monitoring and reconciliation",
                  "Automated loan disbursement and collection",
                  "White-label solutions for branded experiences",
                  "24/7 technical support and training",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
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
              Ready to Modernize Your Banking Services?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 px-4">
              Schedule a demo to see how Libongo Pay can help you launch new products and reach more customers
            </p>
            <Link href="/#contact" className="inline-flex items-center justify-center bg-[#6B2D7B] hover:bg-[#6B2D7B]/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base">
              Book a Demo <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
