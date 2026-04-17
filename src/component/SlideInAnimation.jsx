import React, { useEffect, useRef, useState } from "react";

export default function SlideInAnimation() {
  const [show, setShow] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        } else {
          setShow(false); // repeat animation
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>

      {/* SECTION 1 */}
      <section className="h-screen flex items-center justify-center text-4xl font-bold">
        Section 1
      </section>

      {/* SECTION 2 (SLIDE EFFECT) */}
      <section
        ref={sectionRef}
        className="h-screen flex items-center justify-between px-20 bg-gray-100"
      >

        {/* LEFT DIV */}
        <div
          className={`w-64 h-40 bg-black text-white flex items-center justify-center rounded-xl
          transition-all duration-700 ease-out
          ${show ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"}`}
        >
          Left Card
        </div>

        {/* RIGHT DIV */}
        <div
          className={`w-64 h-40 bg-black text-white flex items-center justify-center rounded-xl
          transition-all duration-700 ease-out
          ${show ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"}`}
        >
          Right Card
        </div>

      </section>

      {/* SECTION 3 */}
      <section className="h-screen flex items-center justify-center text-4xl font-bold">
        Section 3
      </section>

    </div>
  );
}
