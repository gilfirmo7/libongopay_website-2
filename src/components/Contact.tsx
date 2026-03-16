"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    businessType: "",
    message: "",
    privacyAgreed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", businessType: "", message: "", privacyAgreed: false });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24">
      {/* Top CTA Banner */}
      <div className="gradient-hero py-16 mb-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.contact.bannerTitle1}
            <br />
            <span className="text-[#F9A825]">{t.contact.bannerTitle2}</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">{t.contact.bannerDesc}</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
            <p className="text-lg text-gray-600">{t.contact.description}</p>
          </div>

          {isSubmitted ? (
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-12 text-center">
              <CheckCircle className="w-16 h-16 text-[#6B2D7B] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.contact.thankYou}</h3>
              <p className="text-gray-600">{t.contact.thankYouDesc}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#6B2D7B] focus:ring-1 focus:ring-[#6B2D7B] outline-none"
                />
                <input
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#6B2D7B] focus:ring-1 focus:ring-[#6B2D7B] outline-none"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder={t.contact.companyPlaceholder}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="h-12 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#6B2D7B] focus:ring-1 focus:ring-[#6B2D7B] outline-none"
                />
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="h-12 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#6B2D7B] focus:ring-1 focus:ring-[#6B2D7B] outline-none text-gray-700"
                >
                  <option value="">{t.contact.businessTypePlaceholder}</option>
                  {t.contact.businessTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <textarea
                placeholder={t.contact.messagePlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#6B2D7B] focus:ring-1 focus:ring-[#6B2D7B] outline-none"
              />
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={formData.privacyAgreed}
                  onChange={(e) => setFormData({ ...formData, privacyAgreed: e.target.checked })}
                  className="w-4 h-4 accent-[#6B2D7B]"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  {t.contact.privacyAgree}{" "}
                  <a href="#" className="text-[#6B2D7B] underline hover:text-[#8B3D9B]">
                    {t.contact.privacyPolicy}
                  </a>
                </label>
              </div>
              <button
                type="submit"
                disabled={!formData.privacyAgreed}
                className="w-full bg-[#F9A825] hover:bg-[#F9A825]/90 text-gray-900 font-semibold h-12 rounded-lg disabled:opacity-50 transition-colors"
              >
                {t.contact.sendRequest}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
