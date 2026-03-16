import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, Building2, Users2, Receipt, Landmark, FileCheck } from "lucide-react";

export default function GovernmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="gradient-hero pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">For Government & Public Sector</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 md:mb-8">
                Enable secure, compliant digital payments for taxes, subsidies, utilities, and government services
              </p>
              <Link href="/#contact" className="inline-flex items-center justify-center bg-[#F9A825] hover:bg-[#F9A825]/90 text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base">
                Get Started <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop" alt="Government Digital Services" className="w-full rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Digital Payment Infrastructure for Public Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Secure, transparent, and efficient payment solutions for government operations
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: ShieldCheck, title: "Tax Collection", desc: "Streamline tax payments with multi-channel collection and real-time reporting." },
              { icon: Building2, title: "Utility Payments", desc: "Enable citizens to pay for water, electricity, and other utilities easily." },
              { icon: Users2, title: "Social Subsidies", desc: "Distribute welfare payments and subsidies directly to beneficiaries." },
              { icon: Receipt, title: "License & Fees", desc: "Collect government fees, licenses, and permits digitally." },
              { icon: Landmark, title: "Transparency", desc: "Full audit trails and compliance reporting for accountability." },
              { icon: FileCheck, title: "Regulatory Compliant", desc: "Meet all local and international regulatory requirements." },
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">Trusted by Governments Across Africa</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8">
                Join government agencies leveraging our platform to serve citizens better
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Increase revenue collection by up to 40%",
                  "Reduce cash handling and associated costs",
                  "Improve transparency and reduce corruption",
                  "Enable citizens to pay from anywhere, anytime",
                  "Real-time reconciliation and reporting",
                  "Multi-currency and cross-border support",
                  "Highest security standards (ISO 27001, SOC 2)",
                  "Dedicated support and training for staff",
                  "Integration with existing government systems",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#6B2D7B] flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 aspect-video rounded-2xl md:rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop" alt="Government Services" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#6B2D7B] rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-16 text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Modernize Government Payments
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Let's discuss how Libongo Pay can help your agency serve citizens better with secure, efficient digital payments
            </p>
            <Link href="/#contact" className="inline-flex items-center justify-center bg-[#F9A825] hover:bg-[#F9A825]/90 text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base">
              Schedule a Consultation <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
