"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "Luanda, Angola (Remote)",
    type: "Full-time",
    description: "Build scalable payment infrastructure for Africa's leading fintech platform.",
  },
  {
    id: 2,
    title: "Product Manager - Payments",
    department: "Product",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description: "Lead product strategy for our payment gateway and merchant solutions.",
  },
  {
    id: 3,
    title: "Business Development Manager",
    department: "Sales",
    location: "Lagos, Nigeria",
    type: "Full-time",
    description: "Expand our partner network across West Africa and drive revenue growth.",
  },
  {
    id: 4,
    title: "Compliance & Risk Analyst",
    department: "Legal & Compliance",
    location: "Cape Town, South Africa",
    type: "Full-time",
    description: "Ensure regulatory compliance and manage risk across our operations.",
  },
  {
    id: 5,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Accra, Ghana",
    type: "Full-time",
    description: "Help our partners succeed and grow their businesses on our platform.",
  },
  {
    id: 6,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Create beautiful and intuitive user interfaces for our platforms.",
  },
];

export default function CareersPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.careersPage.title}</h1>
            <p className="text-xl text-white/80 mb-8">
              {t.careersPage.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#F9A825]">20+</div>
                <div className="text-white/70">{t.hero.stat1.split(' ').slice(-1)[0] || "Countries"}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#F9A825]">100+</div>
                <div className="text-white/70">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#F9A825]">15+</div>
                <div className="text-white/70">Nationalities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t.careersPage.openPositionsTitle}</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {t.careersPage.jobType}: {job.type}
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/careers/${job.id}`}
                    className="inline-flex items-center justify-center bg-[#F9A825] hover:bg-[#F9A825]/90 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
                  >
                    {t.careersPage.applyButton}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t.careersPage.valuesTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {t.careersPage.values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-xl font-bold text-[#6B2D7B] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
