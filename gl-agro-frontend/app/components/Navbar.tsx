"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto flex flex-col items-center py-10 px-6 space-y-8">
        
        {/* Logo + Company Name */}
        <div className="flex flex-col items-center space-y-6 animate-fadeIn">
          <Image
            src="/images/logo.jpeg"
            alt="GL Agro Logo"
            width={150}
            height={150}
            className="rounded-full border-4 border-green-700 shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 text-center animate-bounce">
            GL Agro Company Ltd
          </h1>
        </div>

        {/* Second rounded image + Dhamira */}
        <div className="flex flex-col items-center space-y-6 animate-slideUp">
          <Image
            src="/images/profile.jpeg"
            alt="Company Profile"
            width={150}
            height={150}
            className="rounded-full border-4 border-green-700 shadow-lg"
          />
          <p className="text-lg md:text-xl font-semibold text-gray-800 text-center max-w-2xl leading-relaxed">
            Kumwezesha mkulima na mdau wa kilimo kupata bidhaa na huduma bora
            zitakazoongeza uzalishaji, kuhakikisha usalama wa chakula,
            na kuinua kipato cha jamii.
          </p>
        </div>
      </div>
    </header>
  );
}