"use client";

import { useEffect, useRef } from "react";

export default function WhiteLabelSearch({ showResults = false }) {
  const searchRef = useRef(null);
  const ticketsRef = useRef(null);

  useEffect(() => {
    const retrigger = () => {
      window.dispatchEvent(new PopStateEvent("popstate"));
      if (window.TPWL && typeof window.TPWL.init === "function") {
        window.TPWL.init();
      }
    };

    const timer = setTimeout(retrigger, 300);
    const timer2 = setTimeout(retrigger, 1000);
    const timer3 = setTimeout(retrigger, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div id="tpwl-search" ref={searchRef}></div>
      {showResults && (
        <div id="tpwl-tickets" ref={ticketsRef} className="mt-6"></div>
      )}
    </div>
  );
}