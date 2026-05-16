"use client";

import { useState, useEffect } from "react";

const phdAreas = [
  "Absolute Intelligence",
  "Health and Wellbeing",
  "Ancient Scriptures and Modern Research",
  "Integrative Studies on the Levels of Existence",
  "Scientific Studies on Yoga and Meditation",
  "Shrimad Bhagvad Gita in Current Context",
  "Singularity and Artificial Intelligence: Evolutionary Awakening",
  "Intelligent Integration of Education and Science in Light of Madhyasth Darshan",
  "Vedantic Science and Life Management"
];

import { phdCoordinators, volunteers } from "@/data";

const tabs = [
  { id: "objectives", label: "Objectives" },
  { id: "vision", label: "Vision" },
  { id: "mission", label: "Mission" },
  { id: "courses", label: "Courses" },
  { id: "phd", label: "Ph. D. Programme" },
  { id: "advisors", label: "Advisors" },
  { id: "people", label: "People" }
];

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState("objectives");
  const [activePeopleSubTab, setActivePeopleSubTab] = useState("coordinators");

  useEffect(() => {
    const handleTabChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setActiveTab(customEvent.detail);
    };
    window.addEventListener('changeTab', handleTabChange);
    return () => window.removeEventListener('changeTab', handleTabChange);
  }, []);

  return (
    <>
      {/* ORNATE DIVIDER */}
      <div className="text-center pt-12 bg-light-sand overflow-hidden" id="about">
        <svg viewBox="0 0 320 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[320px] max-w-[90vw] inline-block">
          <line x1="0" y1="20" x2="120" y2="20" stroke="#C8501A" strokeWidth="0.75" strokeOpacity="0.5" />
          <circle cx="150" cy="20" r="6" fill="none" stroke="#C8501A" strokeWidth="1.2" />
          <circle cx="150" cy="20" r="2.5" fill="#C8501A" fillOpacity="0.5" />
          <circle cx="130" cy="20" r="2" fill="#D4A017" fillOpacity="0.5" />
          <circle cx="170" cy="20" r="2" fill="#D4A017" fillOpacity="0.5" />
          <line x1="200" y1="20" x2="320" y2="20" stroke="#C8501A" strokeWidth="0.75" strokeOpacity="0.5" />
          <path d="M140 20 L150 12 L160 20 L150 28 Z" stroke="#D4A017" strokeWidth="0.75" fill="none" opacity="0.6" />
        </svg>
      </div>

      {/* ABOUT STRIP */}
      <div className="bg-light-sand px-[8vw] pt-4 pb-12 flex justify-center text-center">
        <p className="font-cormorant text-[clamp(1.2rem,2.2vw,1.6rem)] lg:text-[1.8rem] font-normal leading-[1.7] text-text-mid max-w-5xl mx-auto">
          The <strong className="text-deep-navy font-semibold">Centre for Indian Knowledge Systems and Holistic Education</strong> is a multidisciplinary hub for research on all aspects of Indian Knowledge Systems.
        </p>
      </div>

      {/* TABS SECTION */}
      <section className="pt-8 pb-20 px-[8vw] bg-ivory" id="tabs-section">
        {/* <p className="text-[0.9rem] sm:text-[1rem] font-medium tracking-[0.2em] uppercase text-saffron mb-4">
          Discover
        </p> */}

        <nav className="grid grid-cols-3 sm:flex sm:flex-wrap justify-center gap-y-2 sm:gap-y-0 border-b border-warm-brown/20 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-jost text-[0.85rem] xs:text-[0.95rem] sm:text-[1.05rem] md:text-[1.2rem] font-medium tracking-tight sm:tracking-[0.1em] py-3 sm:py-[1.1rem] px-2 sm:px-8 relative transition-colors text-center flex items-center justify-center
                ${activeTab === tab.id ? 'text-saffron' : 'text-text-light hover:text-text-dark'}
              `}
            >
              <span className="leading-tight sm:leading-normal">{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="animate-fade-in-up">
          {/* OBJECTIVES */}
          {activeTab === "objectives" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {[
                "To offer a unique technical hub for research on India's scientific and cultural heritage, leading to the Doctoral Degree — Ph.D. in Indigenous Knowledge and Ancient Wisdom.",
                "To disseminate Indigenous knowledge for better perception, innovations and diverse societal applications across disciplines and communities.",
                "To design and offer credit and non-credit courses related to IKS for Holistic Education fostering overall growth and wellbeing of stakeholders.",
                "To serve the society by spreading Indigenous knowledge to the global general public for overall wellness and harmonious living."
              ].map((obj, i) => (
                <div key={i} className="bg-white border border-warm-brown/10 p-6 sm:p-8 relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(12,27,58,0.08)] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-saffron flex items-start gap-4 sm:gap-6">
                  <span className="font-cormorant text-[3.5rem] font-bold leading-none text-saffron/30 shrink-0 mt-1">0{i + 1}</span>
                  <p className="text-[1.1rem] lg:text-[1.3rem] xl:text-[1.4rem] leading-[1.8] text-text-mid relative z-10">{obj}</p>
                </div>
              ))}
            </div>
          )}

          {/* VISION */}
          {activeTab === "vision" && (
            <div className="max-w-[800px] mx-auto text-center bg-deep-navy p-10 sm:p-14 relative overflow-hidden">
              <span className="font-cormorant text-[14rem] leading-none font-bold text-gold/10 absolute -top-8 left-1/2 -translate-x-1/2 pointer-events-none">"</span>
              <p className="font-cormorant text-[clamp(1.1rem,2.5vw,1.6rem)] lg:text-[1.9rem] xl:text-[2.1rem] font-light italic leading-[1.8] text-ivory/95 relative z-10 mx-auto max-w-[92%]">
                To establish <strong className="text-gold not-italic font-semibold">SVNIT Surat</strong> as a frontier leader in disseminating Indian Knowledge Systems for Holistic Education with the aspiration of harmony with existence and the feeling of <br /> <span className="text-gold mt-3 text-[1.4rem] inline-block normal-case tracking-wide" style={{ fontFamily: "'Samarkan', sans-serif" }}>Vasudhaiva Kutumbakam</span>.
              </p>
            </div>
          )}

          {/* MISSION */}
          {activeTab === "mission" && (
            <div className="flex justify-center">
              <div className="bg-saffron text-[#FAF7F0] p-10 sm:p-14 relative max-w-[720px] w-full text-center overflow-hidden">
                <span className="text-[8rem] leading-none opacity-10 absolute -bottom-6 -right-6 transform rotate-12 pointer-events-none">☀</span>
                <p className="font-cormorant text-[clamp(1.2rem,2.5vw,1.6rem)] lg:text-[1.9rem] xl:text-[2.2rem] italic leading-[1.8] relative z-10">
                  "Facilitating the journey from head to heart by disseminating the profound ancient indigenous wisdom for integrating them into modern education for holistic advancement."
                </p>
              </div>
            </div>
          )}

          {/* COURSES */}
          {activeTab === "courses" && (
            <div className="mx-auto bg-white border border-warm-brown/10 p-8 sm:p-14 lg:p-20 relative overflow-hidden transition-all text-text-mid leading-[1.8] text-[1.1rem] sm:text-[1.25rem] lg:text-[1.45rem] xl:text-[1.6rem] max-w-5xl shadow-sm text-center">
              <span className="absolute top-0 left-0 w-[4px] h-full bg-saffron"></span>
              The centre proposes to offer courses (credit courses as well as non-credit courses) to be taught jointly by eminent experts invited from various parts of the country, along with few faculty members from SVNIT Surat which will provide students with a rare opportunity to listen to and interact with experts.
            </div>
          )}

          {/* PHD */}
          {activeTab === "phd" && (
            <div>
              <p className="text-[1rem] lg:text-[1.2rem] text-text-light italic mb-6">Broad Research Areas include (but are not limited to)</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {phdAreas.map((area, i) => (
                  <div key={i} className="group border border-warm-brown/15 p-6 bg-white flex items-start gap-3 hover:bg-deep-navy hover:border-transparent transition-all cursor-default">
                    <div className="w-[6px] h-[6px] rounded-full bg-saffron mt-2 shrink-0 group-hover:bg-gold transition-colors"></div>
                    <p className="text-[1.05rem] lg:text-[1.2rem] xl:text-[1.3rem] leading-[1.6] text-text-dark group-hover:text-[#FAF7F0] transition-colors">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ADVISORS */}
          {activeTab === "advisors" && (
            <div className="font-cormorant text-[1.2rem] italic text-text-light p-12 border border-dashed border-warm-brown/30 text-center">
              Advisor profiles to be added here.
            </div>
          )}

          {/* PEOPLE */}
          {activeTab === "people" && (
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-center gap-4 sm:gap-8 mb-10">
                <button
                  onClick={() => setActivePeopleSubTab("coordinators")}
                  className={`font-jost text-[0.9rem] sm:text-[1rem] font-medium px-4 sm:px-6 py-2 rounded-full border transition-all ${
                    activePeopleSubTab === "coordinators"
                      ? "bg-saffron text-white border-saffron shadow-md"
                      : "bg-transparent text-text-light border-warm-brown/20 hover:border-saffron/50"
                  }`}
                >
                  Ph. D. Coordinators
                </button>
                <button
                  onClick={() => setActivePeopleSubTab("volunteers")}
                  className={`font-jost text-[0.9rem] sm:text-[1rem] font-medium px-4 sm:px-6 py-2 rounded-full border transition-all ${
                    activePeopleSubTab === "volunteers"
                      ? "bg-saffron text-white border-saffron shadow-md"
                      : "bg-transparent text-text-light border-warm-brown/20 hover:border-saffron/50"
                  }`}
                >
                  Volunteers
                </button>
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                {(activePeopleSubTab === "coordinators" ? phdCoordinators : volunteers).map((person) => (
                  <div key={person.id} className="group flex flex-col items-center text-center">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-6 rounded-2xl overflow-hidden border-2 border-warm-brown/10 group-hover:border-saffron/30 transition-colors shadow-lg">
                      <div className="absolute inset-0 bg-warm-brown/5 flex items-center justify-center text-warm-brown/20">
                        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                      {/* Using a placeholder if image is missing */}
                      <img
                        src={person.photo}
                        alt={person.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:scale-105 transition-transform duration-500"
                        onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                        onError={(e) => (e.currentTarget.style.display = "none")}
                      />
                    </div>
                    <h3 className="font-cormorant text-[1.5rem] sm:text-[1.8rem] font-bold text-deep-navy mb-1">{person.name}</h3>
                    <p className="font-jost text-[0.9rem] sm:text-[1rem] uppercase tracking-widest text-saffron font-medium">{person.role}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
