"use client";

import { useEffect } from "react";
import { LanguageProvider } from "@/lib/LanguageContext";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.className = "antialiased";
  }, []);

  return (
    <LanguageProvider>
      <div className="antialiased">{children}</div>
    </LanguageProvider>
  );
}
