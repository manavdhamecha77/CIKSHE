"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 400);
    const t2 = setTimeout(() => setPhase("out"), 2200);
    const t3 = setTimeout(() => onComplete(), 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex flex-col items-center justify-center
        bg-[#fcfdfd] transition-all duration-1000 ease-in-out
        ${phase === "out" ? "opacity-0 scale-110 pointer-events-none" : "opacity-100 scale-100"}
      `}
    >
      <div className="max-w-4xl flex flex-col items-center text-center px-6 transition-all duration-1000">
        {/* 1. Sanskrit Title */}
        <h2 className="font-cormorant text-slate-900 text-2xl md:text-4xl font-black mb-4 tracking-widest">
          भारतीय ज्ञान परंपरा केन्द्र
        </h2>

        {/* 2. English Title */}
        <h1 className="text-slate-900 text-lg md:text-2xl font-black mb-16 tracking-[0.2em] uppercase opacity-40">
          Centre for Bharatiya Gyan Parampara
        </h1>

        {/* 3. Central Logo */}
        <div className="relative mb-20">
          <div className="relative z-10 w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden border-4 border-white">
            <Image
              src="/logo/svnit.png"
              alt="SVNIT Logo"
              width={144}
              height={144}
              className="w-[80%] h-[80%] object-contain relative z-10"
            />
          </div>
        </div>

        {/* 4. SVNIT Surat Label */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-blue-800 font-black text-sm md:text-base tracking-[0.5em] uppercase">
            SVNIT SURAT
          </p>

          {/* 5. Custom Progress Loader */}
          <div className="w-64 h-2 bg-slate-100 rounded-full overflow-hidden relative border border-slate-200/50 shadow-inner">
            <div
              className={`
                h-full bg-blue-800
                transition-all duration-[2200ms] ease-out
                ${phase === "in" ? "w-0" : "w-full"}
              `}
            />
          </div>
        </div>
      </div>

      {/* Background Ambience */}
      <Image
        src="/images/image1.png"
        alt="Loading Background"
        fill
        className="object-cover opacity-[0.06] pointer-events-none"
      />
    </div>
  );
}
