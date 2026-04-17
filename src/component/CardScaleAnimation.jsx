import React, { useEffect, useState, useRef } from "react";


// // ✅ Scroll Triggered Animation - single scrolle have to load page
// export default function  CardScaleAnimation() {
//   const [showCards, setShowCards] = useState(false);
//   const sectionRef = useRef();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();

//       // Trigger when section comes into view
//       if (rect.top < window.innerHeight - 100) {
//         setShowCards(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // run once

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="bg-white">

//       {/* SECTION 1 */}
//       <section className="h-screen flex items-center justify-center text-4xl font-bold">
//         Section 1
//       </section>

//       {/* SECTION 2 (Cards Animation) */}
//       <section
//         ref={sectionRef}
//         className="h-screen flex items-center justify-center bg-gray-100"
//       >
//         <div className="flex gap-8">

//           {/* CARD 1 */}
//           <div
//             className={`w-64 h-40 bg-black text-white flex items-center justify-center rounded-xl
//             transition-all duration-700 ease-out
//             ${showCards ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
//           >
//             Card 1
//           </div>

//           {/* CARD 2 */}
//           <div
//             className={`w-64 h-40 bg-black text-white flex items-center justify-center rounded-xl
//             transition-all duration-700 delay-200 ease-out
//             ${showCards ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
//           >
//             Card 2
//           </div>

//           {/* CARD 3 */}
//           <div
//             className={`w-64 h-40 bg-black text-white flex items-center justify-center rounded-xl
//             transition-all duration-700 delay-400 ease-out
//             ${showCards ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
//           >
//             Card 3
//           </div>

//         </div>
//       </section>

//       {/* SECTION 3 */}
//       <section className="h-screen flex items-center justify-center text-4xl font-bold">
//         Section 3
//       </section>

//     </div>
//   );
// }

// import React, { useEffect, useState, useRef } from "react";

// import React, { useEffect, useRef, useState } from "react";

// without loading page evry time scroll up

export default function CardScaleAnimation(){
  const [showCards, setShowCards] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCards(true);   // animate IN
        } else {
          setShowCards(false);  // reset when out
        }
      },
      { threshold: 0.3 } // 30% visible trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white">

      {/* SECTION 1 */}
      <section className="h-screen flex items-center justify-center text-4xl font-bold">
        Section 1
      </section>

      {/* SECTION 2 */}
      <section
        ref={sectionRef}
        className="h-screen flex items-center justify-center bg-gray-100"
      >
        <div className="flex gap-8">

          {/* CARD 1 */}
          <div
            className={`w-64 h-40 bg-black text-white flex items-center justify-center rounded-xl
            transition-all duration-700 ease-out
            ${showCards ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
          >
            Card 1
          </div>

          {/* CARD 2 */}
          <div
            className={`w-64 h-40 bg-black text-white flex items-center justify-center rounded-xl
            transition-all duration-700 delay-200 ease-out
            ${showCards ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
          >
            Card 2
          </div>

          {/* CARD 3 */}
          <div
            className={`w-64 h-40 bg-black text-white flex items-center justify-center rounded-xl
            transition-all duration-700 delay-400 ease-out
            ${showCards ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
          >
            Card 3
          </div>

        </div>
      </section>

      {/* SECTION 3 */}
      <section className="h-screen flex items-center justify-center text-4xl font-bold">
        Section 3
      </section>

    </div>
  );
}