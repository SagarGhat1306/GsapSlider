import React, { useEffect, useState } from "react";

export default function CombineFooter() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.body.offsetHeight;

      // trigger when near bottom
      if (scrollPosition >= pageHeight - 100) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">

      {/* CONTENT */}
      <div className="relative z-20 bg-white">
        <section className="h-screen flex items-center justify-center text-4xl font-bold">
          Section 1
        </section>

        <section className="h-screen flex items-center justify-center text-4xl font-bold bg-gray-100">
          Section 2
        </section>

        <section className="h-screen flex items-center justify-center text-4xl font-bold">
          Section 3
        </section>
      </div>

      {/* FOOTER */}
      <footer
        className={`h-screen sticky bottom-0 bg-black text-white flex flex-col items-center justify-center z-10
        transition-all duration-700 ease-out
        ${showFooter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
      >
        <h1 className="text-5xl font-bold mb-4">Footer Section</h1>
        <p className="text-lg opacity-70">Reveal + Slide + Fade Effect</p>

        <div className="mt-6 flex gap-6 text-sm">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </footer>

    </div>
  );
}