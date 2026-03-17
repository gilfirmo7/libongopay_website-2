"use client";

import { useState, useEffect } from "react";
import { Globe, MapPin, Users, Building2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const countries = [
  { name: "Kenya", capital: "Nairobi", population: "53M", methods: ["M-Pesa", "Airtel Money", "T-Cash"], region: "East", x: 72, y: 48 },
  { name: "Nigeria", capital: "Abuja", population: "220M", methods: ["Bank Transfer", "Flutterwave", "Paystack"], region: "West", x: 38, y: 38 },
  { name: "South Africa", capital: "Pretoria", population: "60M", methods: ["SnapScan", "Zapper", "Bank Transfer"], region: "Southern", x: 55, y: 85 },
  { name: "Ghana", capital: "Accra", population: "33M", methods: ["MTN MoMo", "Vodafone Cash", "AirtelTigo"], region: "West", x: 30, y: 40 },
  { name: "Tanzania", capital: "Dodoma", population: "62M", methods: ["M-Pesa", "Tigo Pesa", "Airtel Money"], region: "East", x: 70, y: 55 },
  { name: "Uganda", capital: "Kampala", population: "46M", methods: ["MTN MoMo", "Airtel Money", "Bank Transfer"], region: "East", x: 68, y: 47 },
  { name: "Rwanda", capital: "Kigali", population: "13M", methods: ["MTN MoMo", "Airtel Money", "Bank Transfer"], region: "East", x: 66, y: 50 },
  { name: "DR Congo", capital: "Kinshasa", population: "99M", methods: ["Orange Money", "Airtel Money", "M-Pesa"], region: "Central", x: 55, y: 52 },
  { name: "Zambia", capital: "Lusaka", population: "19M", methods: ["MTN MoMo", "Airtel Money", "Zoona"], region: "Southern", x: 58, y: 70 },
  { name: "Senegal", capital: "Dakar", population: "17M", methods: ["Orange Money", "Wave", "Free Money"], region: "West", x: 22, y: 34 },
  { name: "Angola", capital: "Luanda", population: "35M", methods: ["Multicaixa", "Bank Transfer", "Mobile Money"], region: "Southern", x: 48, y: 68 },
  { name: "Mozambique", capital: "Maputo", population: "32M", methods: ["M-Pesa", "e-Mola", "Bank Transfer"], region: "Southern", x: 70, y: 75 },
];

// Particle positions for ambient animation
const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));
};

export default function Coverage() {
  const { t } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    setParticles(generateParticles(20));
  }, []);

  return (
    <section className="py-24 gradient-hero text-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.coverage.title1}{" "}
            <span className="text-[#F9A825]">{t.coverage.title2}</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">{t.coverage.description}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Country selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <label className="text-sm text-white/60 mb-2 block">{t.coverage.selectCountry}</label>
            <select
              value={selectedCountry.name}
              onChange={(e) => {
                const country = countries.find((c) => c.name === e.target.value);
                if (country) setSelectedCountry(country);
              }}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#F9A825] mb-8"
            >
              {countries.map((country) => (
                <option key={country.name} value={country.name} className="text-gray-900">
                  {country.name}
                </option>
              ))}
            </select>

            {/* Country details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCountry.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#F9A825]/20 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-[#F9A825]" />
                  </div>
                  <h3 className="text-2xl font-bold">{selectedCountry.name}</h3>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#F9A825]" />
                    <div>
                      <div className="text-sm text-white/60">{t.coverage.capital}</div>
                      <div className="font-semibold">{selectedCountry.capital}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#F9A825]" />
                    <div>
                      <div className="text-sm text-white/60">{t.coverage.population}</div>
                      <div className="font-semibold">{selectedCountry.population}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-white/60 mb-3 flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    {t.coverage.connectedMethods}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedCountry.methods.map((method, index) => (
                      <motion.span
                        key={method}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="px-3 py-1 bg-[#F9A825]/20 rounded-full text-sm text-[#F9A825] border border-[#F9A825]/30"
                      >
                        {method}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Stunning Animated Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-white/5 to-white/10 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden p-8 relative backdrop-blur-sm">
              {/* Multiple animated background glows */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.15, 0.08, 0.15],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F9A825] to-[#6B2D7B] blur-3xl"
              />

              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.1, 0.05, 0.1],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute inset-0 rounded-full bg-[#F9A825] blur-2xl"
              />

              {/* Africa Map SVG */}
              <svg viewBox="0 0 100 100" className="w-full h-full relative z-10">
                <defs>
                  {/* Gradient for the continent */}
                  <linearGradient id="africaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F9A825" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#6B2D7B" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#F9A825" stopOpacity="0.3" />
                  </linearGradient>

                  {/* Glow filter */}
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Ambient particles */}
                {particles.map((particle) => (
                  <motion.circle
                    key={particle.id}
                    cx={particle.x}
                    cy={particle.y}
                    r={particle.size}
                    fill="#F9A825"
                    opacity={0.4}
                    animate={{
                      y: [particle.y, particle.y - 20, particle.y],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: particle.duration,
                      repeat: Infinity,
                      delay: particle.delay,
                      ease: "easeInOut"
                    }}
                  />
                ))}

                {/* Africa continent with gradient fill */}
                <motion.path
                  d="M 50 10
                     C 52 10, 54 11, 56 12
                     L 60 15
                     C 63 17, 65 19, 67 22
                     L 72 28
                     C 74 31, 75 34, 76 37
                     L 78 45
                     C 79 50, 79 55, 78 60
                     L 77 68
                     C 76 73, 74 78, 71 82
                     L 66 88
                     C 63 91, 59 93, 55 94
                     L 48 95
                     C 43 96, 38 95, 34 93
                     L 28 90
                     C 24 87, 21 83, 19 79
                     L 16 72
                     C 14 66, 14 60, 15 54
                     L 17 46
                     C 18 40, 20 35, 23 31
                     L 28 25
                     C 31 21, 35 18, 39 16
                     L 44 14
                     C 46 13, 48 11, 50 10
                     Z"
                  fill="url(#africaGradient)"
                  stroke="#F9A825"
                  strokeWidth="0.3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  filter="url(#glow)"
                />

                {/* Connection lines between countries */}
                {countries.map((country, index) => {
                  if (index === 0 || !selectedCountry) return null;
                  const prevCountry = countries[index - 1];

                  return (
                    <motion.line
                      key={`line-${country.name}`}
                      x1={prevCountry.x}
                      y1={prevCountry.y}
                      x2={country.x}
                      y2={country.y}
                      stroke="#F9A825"
                      strokeWidth="0.1"
                      strokeOpacity="0.2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: index * 0.15 }}
                    />
                  );
                })}

                {/* Country markers */}
                {countries.map((country, index) => {
                  const isSelected = selectedCountry.name === country.name;
                  const isHovered = hoveredCountry === country.name;

                  return (
                    <g key={country.name}>
                      {/* Pulse animation for selected country */}
                      {isSelected && (
                        <>
                          <motion.circle
                            cx={country.x}
                            cy={country.y}
                            r={3}
                            fill="none"
                            stroke="#F9A825"
                            strokeWidth="0.5"
                            initial={{ r: 3, opacity: 0.8 }}
                            animate={{ r: 8, opacity: 0 }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          <motion.circle
                            cx={country.x}
                            cy={country.y}
                            r={3}
                            fill="none"
                            stroke="#F9A825"
                            strokeWidth="0.5"
                            initial={{ r: 3, opacity: 0.8 }}
                            animate={{ r: 8, opacity: 0 }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
                          />
                        </>
                      )}

                      {/* Outer glow ring */}
                      <motion.circle
                        cx={country.x}
                        cy={country.y}
                        r={isSelected ? 3 : 2.5}
                        fill="#F9A825"
                        opacity={0.3}
                        animate={{
                          scale: isSelected ? [1, 1.3, 1] : 1,
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />

                      {/* Country dot */}
                      <motion.circle
                        cx={country.x}
                        cy={country.y}
                        r={isSelected ? 2 : isHovered ? 1.8 : 1.5}
                        className={`cursor-pointer ${
                          isSelected ? "fill-[#F9A825]" : "fill-white/80 hover:fill-[#F9A825]"
                        }`}
                        onClick={() => setSelectedCountry(country)}
                        onMouseEnter={() => setHoveredCountry(country.name)}
                        onMouseLeave={() => setHoveredCountry(null)}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.4 }}
                        whileTap={{ scale: 0.9 }}
                        filter="url(#glow)"
                      />

                      {/* Hover tooltip */}
                      <AnimatePresence>
                        {isHovered && !isSelected && (
                          <motion.g
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <rect
                              x={country.x - 10}
                              y={country.y - 9}
                              width={20}
                              height={6}
                              fill="#F9A825"
                              rx={1.5}
                              filter="url(#glow)"
                            />
                            <text
                              x={country.x}
                              y={country.y - 4.5}
                              textAnchor="middle"
                              className="text-[2.5px] font-bold fill-gray-900"
                            >
                              {country.name}
                            </text>
                          </motion.g>
                        )}
                      </AnimatePresence>
                    </g>
                  );
                })}
              </svg>
            </div>
            <motion.p
              className="text-center text-white/60 text-sm mt-4"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Click on any country to explore markets
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
