"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Libongo Pay helped us launch our mobile money service in just 6 weeks. Their infrastructure is rock solid and their team is incredibly supportive.",
    author: "James Mwangi",
    role: "CEO & Founder",
    company: "PayQuick Kenya",
  },
  {
    quote: "We expanded to 5 new African markets in under 3 months using Libongo Pay's platform. What would have taken us years, they made possible in weeks.",
    author: "Sarah Okonkwo",
    role: "CTO",
    company: "AfriPay Solutions",
  },
  {
    quote: "The revenue share model is fair and transparent. We've seen our transaction volumes grow 10x since partnering with Libongo Pay.",
    author: "Emmanuel Diallo",
    role: "Managing Director",
    company: "West Africa Payments",
  },
  {
    quote: "Their POS platform transformed our retail network into a full-service financial hub. Our customers can now do everything from bill payments to remittances.",
    author: "Grace Achieng",
    role: "Operations Head",
    company: "QuickShop Network",
  },
  {
    quote: "Libongo Pay's lending platform integrated seamlessly with our existing systems. We're now offering microloans to thousands of SMEs across Angola.",
    author: "Carlos Santos",
    role: "Head of Digital Banking",
    company: "Banco Digital Angola",
  },
];

export default function Testimonials() {
  const { t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t.testimonials.title1}{" "}
            <span className="text-[#6B2D7B]">{t.testimonials.title2}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.testimonials.description}</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0"
                >
                  <div className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-shadow border border-gray-100 h-full">
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-purple-200" />
                    <p className="text-gray-700 leading-relaxed mb-6 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6B2D7B] to-purple-500 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              type="button"
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-[#6B2D7B]" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === selectedIndex
                      ? "bg-[#6B2D7B] w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={scrollNext}
              className="w-12 h-12 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-[#6B2D7B]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
