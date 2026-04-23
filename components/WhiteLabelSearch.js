"use client";

import { useEffect, useRef } from "react";

export default function WhiteLabelSearch({ showResults = false }) {
  const searchRef = useRef(null);
  const ticketsRef = useRef(null);

  useEffect(() => {
    // The WL script scans for #tpwl-search and #tpwl-tickets on load.
    // On SPA navigation these divs appear AFTER the script ran,
    // so we need to re-trigger the widget initialization.

    const retrigger = () => {
      // The WL widget listens for a custom event or re-scans on popstate.
      // Dispatch a popstate event to make it re-scan the DOM.
      window.dispatchEvent(new PopStateEvent("popstate"));

      // Also try re-dispatching DOMContentLoaded-like behavior
      if (window.TPWL && typeof window.TPWL.init === "function") {
        window.TPWL.init();
      }
    };

    // Small delay to let React finish rendering the divs
    const timer = setTimeout(retrigger, 300);
    // Try again after a longer delay in case script is still loading
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
      {/* WL search form mounts here */}
      <div id="tpwl-search" ref={searchRef}></div>

      {/* WL results mount here (only if showResults is true) */}
      {showResults && (
        <div id="tpwl-tickets" ref={ticketsRef} className="mt-6"></div>
      )}
    </div>
  );
}
