import React, { useEffect, useRef, useState } from "react";

export default function BounceDrop() {
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

      {/* SECTION 2 (BOUNCE CARDS) */}
      <section
        ref={sectionRef}
        className="h-screen flex items-center justify-center bg-gray-100"
      >
        <div className="grid grid-cols-2 gap-10">

          {[1, 2, 3, 4].map((card, i) => (
            <div key={i} className="relative w-48 h-64">

              {/* BACK CARD */}
              <div className="absolute inset-0 bg-gray-300 rounded-xl z-10 translate-x-2 translate-y-2"></div>

              {/* FRONT CARD (ANIMATED) */}
              <div
                className={`absolute inset-0 bg-black text-white flex items-center justify-center rounded-xl z-20
                transition-all duration-2000 ease-out
                ${show ? "animate-bounceDrop" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.20}s` }}
              >
                Card {card}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* SECTION 3 */}
      <section className="h-screen flex items-center justify-center text-4xl font-bold">
        Section 3
      </section>

      {/* CUSTOM ANIMATION */}
      <style>
        {`
          @keyframes bounceDrop {
            0% {
              transform: translateY(-200px);
              opacity: 0;
            }
            40% {
              transform: translateY(30px);
              opacity: 1;
            }
            60% {
              transform: translateY(-15px);
            }
            80% {
              transform: translateY(10px);
            }
            100% {
              transform: translateY(0);
            }
          }

          .animate-bounceDrop {
            animation: bounceDrop 0.8s ease forwards;
          }
        `}
      </style>

    </div>
  );
}