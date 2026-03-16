import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Check, ArrowRight, Smartphone, Store, QrCode, Users, TrendingUp, Wifi } from "lucide-react";

export default function POSPlatformPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="gradient-hero pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">POS Platform</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 md:mb-8">
                Build your agent network and enable cashless payments everywhere
              </p>
              <Link href="/#contact" className="inline-flex items-center justify-center bg-[#F9A825] hover:bg-[#F9A825]/90 text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base">
                Get Started <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <img src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=600&fit=crop" alt="POS Terminal" className="w-full rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Complete POS Solution for Africa</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">Build and manage agent networks with mobile and hardware POS terminals</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Smartphone, title: "Mobile POS Solutions", desc: "Turn any smartphone into a powerful POS terminal with our mobile app." },
              { icon: Store, title: "Agent Network Management", desc: "Build and manage your entire agent network from a single dashboard." },
              { icon: QrCode, title: "QR Code Payments", desc: "Enable contactless payments with dynamic QR codes for any transaction." },
              { icon: Users, title: "Agent Commissions", desc: "Automated commission calculations and instant payouts to agents." },
              { icon: TrendingUp, title: "Business Analytics", desc: "Track sales, agent performance, and customer behavior in real-time." },
              { icon: Wifi, title: "Offline Mode", desc: "Continue accepting payments even without internet connectivity." },
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
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">Empower Your Agent Network</h2>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Cash-in and cash-out services",
                  "Bill payments and airtime top-ups",
                  "Merchant payments and collections",
                  "Real-time transaction tracking",
                  "Instant settlements to agents",
                  "Multi-level agent hierarchy",
                  "Commission management",
                  "Agent training and support",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#6B2D7B] flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 aspect-square rounded-2xl md:rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=800&fit=crop" alt="POS Agent Network" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
