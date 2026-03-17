"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="gradient-hero text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image
                src="https://ugc.same-assets.com/pi_cqxNeRDYXolxdo3xFADdk-HNf2nch.png"
                alt="Libongo Pay"
                width={48}
                height={48}
                className="w-10 h-10"
              />
              <span className="text-white font-bold text-xl">
                <span className="text-white">Libongo</span>
                <span className="text-[#F9A825]">Pay</span>
              </span>
            </Link>
            <p className="text-white/60 mb-6 max-w-sm">{t.footer.description}</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/60">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@libongopay.com" className="hover:text-white transition-colors">
                  info@libongopay.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Phone className="w-5 h-5" />
                <span className="hover:text-white transition-colors">
                  <a href="tel:+244924109903">+244 924 109 903</a> | <a href="tel:+244951107084">+244 951 107 084</a>
                </span>
              </div>
              <div className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 mt-1" />
                <span>Luanda, Angola</span>
              </div>
            </div>
          </div>

          {/* About links */}
          <div>
            <h3 className="text-white font-bold mb-6">{t.footer.aboutTitle}</h3>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-white/60 hover:text-white transition-colors">{t.nav.aboutUs}</Link></li>
              <li><Link href="#contact" className="text-white/60 hover:text-white transition-colors">{t.nav.contactUs}</Link></li>
              <li><Link href="/careers" className="text-white/60 hover:text-white transition-colors">{t.nav.careers}</Link></li>
            </ul>
          </div>

          {/* Products links */}
          <div>
            <h3 className="text-white font-bold mb-6">{t.footer.productsTitle}</h3>
            <ul className="space-y-3">
              <li><Link href="#products" className="text-white/60 hover:text-white transition-colors">{t.nav.paymentPlatform}</Link></li>
              <li><Link href="#products" className="text-white/60 hover:text-white transition-colors">{t.nav.posPlatform}</Link></li>
              <li><Link href="#products" className="text-white/60 hover:text-white transition-colors">{t.nav.walletPlatform}</Link></li>
              <li><Link href="#products" className="text-white/60 hover:text-white transition-colors">{t.nav.lendingPlatform}</Link></li>
            </ul>
          </div>

          {/* Solutions & Social */}
          <div>
            <h3 className="text-white font-bold mb-6">{t.footer.solutionsTitle}</h3>
            <ul className="space-y-3 mb-8">
              <li><Link href="#solutions" className="text-white/60 hover:text-white transition-colors">{t.nav.paymentCompanies}</Link></li>
              <li><Link href="#solutions" className="text-white/60 hover:text-white transition-colors">{t.nav.agentNetworks}</Link></li>
              <li><Link href="#solutions" className="text-white/60 hover:text-white transition-colors">{t.nav.banksMfis}</Link></li>
              <li><Link href="#solutions" className="text-white/60 hover:text-white transition-colors">{t.nav.government}</Link></li>
            </ul>

            <h3 className="text-white font-bold mb-4">{t.footer.followUs}</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap items-center gap-6 py-8 border-t border-white/10 mb-8">
          <span className="text-white/60 text-sm">{t.footer.certified}</span>
          <div className="flex flex-wrap gap-4">
            {["ISO 27001", "PCI DSS", "SOC 2"].map((cert) => (
              <span key={cert} className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium">{cert}</span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-6 text-sm text-white/60 mb-4 md:mb-0">
            <Link href="#" className="hover:text-white transition-colors">{t.footer.privacyPolicy}</Link>
            <Link href="#" className="hover:text-white transition-colors">{t.footer.termsConditions}</Link>
          </div>
          <p className="text-sm text-white/60">
            Libongo Pay, {new Date().getFullYear()}. {t.footer.allRights}
          </p>
        </div>
      </div>
    </footer>
  );
}
