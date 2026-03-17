"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import type { Language } from "@/lib/translations";

const languages: { code: Language; name: string; flag: string }[] = [
  { code: "en", name: "English", flag: "EN" },
  { code: "pt", name: "Portugues", flag: "PT" },
  { code: "fr", name: "Francais", flag: "FR" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Timeout refs for delayed dropdown closing
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const langDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle mouse enter for navigation dropdowns
  const handleMouseEnter = useCallback((itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(itemName);
  }, []);

  // Handle mouse leave for navigation dropdowns with 300ms delay
  const handleMouseLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  }, []);

  // Handle mouse enter for language dropdown
  const handleLangMouseEnter = useCallback(() => {
    if (langDropdownTimeoutRef.current) {
      clearTimeout(langDropdownTimeoutRef.current);
      langDropdownTimeoutRef.current = null;
    }
    setLangDropdownOpen(true);
  }, []);

  // Handle mouse leave for language dropdown with 300ms delay
  const handleLangMouseLeave = useCallback(() => {
    langDropdownTimeoutRef.current = setTimeout(() => {
      setLangDropdownOpen(false);
    }, 300);
  }, []);

  const navigation = [
    {
      name: t.nav.about,
      href: "/#about",
      dropdown: [
        { name: t.nav.aboutUs, href: "/#about" },
        { name: t.nav.careers, href: "/careers" },
        { name: t.nav.contactUs, href: "/#contact" },
      ],
    },
    {
      name: t.nav.products,
      href: "/#products",
      dropdown: [
        { name: t.nav.paymentPlatform, href: "/products/payment-platform" },
        { name: t.nav.posPlatform, href: "/products/pos-platform" },
        { name: t.nav.walletPlatform, href: "/products/wallet-platform" },
        { name: t.nav.lendingPlatform, href: "/products/lending-platform" },
        { name: t.nav.communicationPlatform, href: "/products/communication-platform" },
      ],
    },
    {
      name: t.nav.solutions,
      href: "/#solutions",
      dropdown: [
        { name: t.nav.paymentCompanies, href: "/solutions/payment-companies" },
        { name: t.nav.agentNetworks, href: "/solutions/agent-networks" },
        { name: t.nav.banksMfis, href: "/solutions/banks" },
        { name: t.nav.government, href: "/solutions/government" },
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#3d1550]/95 backdrop-blur-sm">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <Image
              src="https://ugc.same-assets.com/HSe7udU0zAoT9AxwkQny_pAPFI8CDSgO.png"
              alt="Libongo Pay"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <span className="text-white font-bold text-lg md:text-xl hidden sm:block">
              <span className="text-white">Libongo</span>
              <span className="text-[#F9A825]">Pay</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className="flex items-center text-white/90 hover:text-white transition-colors text-sm font-medium"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>
                {item.dropdown && activeDropdown === item.name && (
                  <div
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Language Selector & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div
              className="relative"
              onMouseEnter={handleLangMouseEnter}
              onMouseLeave={handleLangMouseLeave}
            >
              <button
                type="button"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10"
              >
                <Globe className="w-4 h-4" />
                <span>{languages.find((l) => l.code === language)?.flag}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {langDropdownOpen && (
                <div
                  className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-xl py-2 z-50"
                  onMouseEnter={handleLangMouseEnter}
                  onMouseLeave={handleLangMouseLeave}
                >
                  {languages.map((lang) => (
                    <button
                      type="button"
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-3 text-sm transition-colors ${
                        language === lang.code
                          ? "bg-purple-50 text-purple-700 font-semibold"
                          : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                      }`}
                    >
                      <span className="font-medium">{lang.flag}</span> - {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/#contact"
              className="bg-[#F9A825] hover:bg-[#F9A825]/90 text-gray-900 font-semibold px-6 py-2.5 rounded-lg transition-colors"
            >
              {t.nav.requestDemo}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex justify-center gap-2 mb-4 pb-4 border-b border-white/10">
              {languages.map((lang) => (
                <button
                  type="button"
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    language === lang.code
                      ? "bg-[#F9A825] text-gray-900"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {lang.flag}
                </button>
              ))}
            </div>

            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => setMobileActiveDropdown(mobileActiveDropdown === item.name ? null : item.name)}
                      className="flex items-center justify-between w-full py-3 text-white/90 hover:text-white font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileActiveDropdown === item.name && (
                      <div className="pl-4 pb-2 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-2 text-sm text-white/70 hover:text-white"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 text-white/90 hover:text-white font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full mt-4 bg-[#F9A825] hover:bg-[#F9A825]/90 text-gray-900 font-semibold py-3 rounded-lg text-center"
            >
              {t.nav.requestDemo}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
