// import React from 'react';

// const StaticConcaveGallery = () => {
//   const galleryImages = [
//     { id: 1, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80" },
//     { id: 2, src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80" },
//     { id: 3, src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80" },
//     { id: 4, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80" },
//     { id: 5, src: "https://images.unsplash.com/photo-1475721027187-40aeae77c9f3?auto=format&fit=crop&q=80" },
//     { id: 6, src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80" },
//     { id: 7, src: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80" },
//     { id: 8, src: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80" },
//     { id: 9, src: "https://images.unsplash.com/photo-1475721027187-40aeae77c9f3?auto=format&fit=crop&q=80" },
//     { id: 10, src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80" },
//     { id: 11, src: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80" },
//     { id: 12, src: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80" },
//   ];

//   // We manually set the spread angle. 
//   // Lower number = tighter curve. Higher number = wider spread.
//   const spreadAngle = 25; 
//   const tzDistance = -500; // Negative pushes it AWAY to create the inner wall

//   return (
//     <div className="bg-white min-h-screen py-20 overflow-hidden flex flex-col items-center justify-center">
      
//       {/* Header Section */}
//       <div className="mb-12">
//         <button className="bg-magenta-600 hover:bg-magenta-700 text-white px-8 py-2 rounded-full flex items-center gap-2 transition-all">
//           Explore <span className="border border-white rounded-full w-5 h-5 flex items-center justify-center">→</span>
//         </button>
//       </div>

//       {/* 3D Stage */}
//       <div className="relative w-full h-[500px] flex items-center justify-center" 
//            style={{ perspective: "1500px" }}>
        
//         <div className="relative flex items-center justify-center" 
//              style={{ transformStyle: "preserve-3d" }}>
          
//           {galleryImages.map((image, index) => {
//             // Calculate the rotation so the middle image (index 3) is at 0 degrees
//             const middleIndex = Math.floor(galleryImages.length / 2);
//             const rotation = (index - middleIndex) * spreadAngle;

//             return (
//               <div 
//                 key={image.id}
//                 className="absolute w-[200px] h-[320px] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-110"
//                 style={{
//                   transform: `rotateY(${rotation}deg) translateZ(${tzDistance}px)`,
//                   // We flip the backface to hidden just in case of extreme angles
//                   backfaceVisibility: "Hidden"
//                 }}
//               >
//                 <img 
//                   src={image.src} 
//                   alt="Gallery Item"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Footer Text */}
//       <div className="mt-12 text-center max-w-2xl px-6">
//         <p className="text-gray-800 text-xl font-medium leading-relaxed">
//           Stay updated with the latest news, announcements, and highlights from 
//           our recent exhibitions and gatherings.
//         </p>
//       </div>

//       <style jsx>{`
//         .bg-magenta-600 { background-color: #b33a85; }
//         .hover\:bg-magenta-700:hover { background-color: #922b6b; }
//       `}</style>
//     </div>
//   );
// };

// export default StaticConcaveGallery;



// import React, { useState, useEffect } from 'react';

// const StaticConcaveGallery = () => {
//   const galleryImages = [
//     { id: 1, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80" },
//     { id: 2, src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80" },
//     { id: 3, src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80" },
//     { id: 4, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80" },
//     { id: 5, src: "https://images.unsplash.com/photo-1475721027187-40aeae77c9f3?auto=format&fit=crop&q=80" },
//     { id: 6, src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80" },
//     { id: 7, src: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80" },
//     { id: 8, src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80" },
//     { id: 9, src: "https://images.unsplash.com/photo-1475721027187-40aeae77c9f3?auto=format&fit=crop&q=80" },
//     { id: 10, src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80" },
//     { id: 11, src: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80" },
//     { id: 12, src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80" },
//   ];

//   const spreadAngle = 25;
//   const tzDistance = -500;

//   const [activeIndex, setActiveIndex] = useState(0);

//   // ✅ Auto Slide (optional)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex(prev => (prev + 1) % galleryImages.length);
//     }, 2500);

//     return () => clearInterval(interval);
//   }, [galleryImages.length]);

//   return (
//     <div className="bg-white min-h-screen py-20 overflow-hidden flex flex-col items-center justify-center">

//       {/* Controls */}
//       <div className="flex gap-4 mb-8">
//         <button 
//           onClick={() => setActiveIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length)}
//           className="px-4 py-2 bg-gray-800 text-white rounded"
//         >
//           Prev
//         </button>

//         <button 
//           onClick={() => setActiveIndex(prev => (prev + 1) % galleryImages.length)}
//           className="px-4 py-2 bg-gray-800 text-white rounded"
//         >
//           Next
//         </button>
//       </div>

//       {/* 3D Stage */}
//       <div 
//         className="relative w-full h-[500px] flex items-center justify-center"
//         style={{ perspective: "1500px" }}
//       >
//         <div 
//           className="relative flex items-center justify-center"
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           {galleryImages.map((image, index) => {

//             const rotation = (index - activeIndex) * spreadAngle;

//             return (
//               <div 
//                 key={image.id}
//                 className="absolute w-[200px] h-[320px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500"
//                 style={{
//                   transform: `rotateY(${rotation}deg) translateZ(${tzDistance}px) scale(${index === activeIndex ? 1.2 : 0.9})`,
//                   opacity: index === activeIndex ? 1 : 0.6,
//                   zIndex: index === activeIndex ? 10 : 1,
//                   backfaceVisibility: "hidden"
//                 }}
//               >
//                 <img 
//                   src={image.src} 
//                   alt="Gallery Item"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="mt-12 text-center max-w-2xl px-6">
//         <p className="text-gray-800 text-xl font-medium leading-relaxed">
//           Stay updated with the latest news, announcements, and highlights from 
//           our recent exhibitions and gatherings.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default StaticConcaveGallery;


import React, { useState, useEffect } from 'react';

const StaticConcaveGallery = () => {
  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80" },
    { id: 2, src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80" },
    { id: 3, src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80" },
    { id: 4, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80" },
    { id: 5, src: "https://images.unsplash.com/photo-1475721027187-40aeae77c9f3?auto=format&fit=crop&q=80" },
    { id: 6, src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80" },
    { id: 7, src: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80" },
    { id: 8, src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80" },
    { id: 9, src: "https://images.unsplash.com/photo-1475721027187-40aeae77c9f3?auto=format&fit=crop&q=80" },
    { id: 10, src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80" },
    { id: 11, src: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80" },
    { id: 12, src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80" },
  ];

  const spreadAngle = 25;
  const tzDistance = -500;

  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ AUTO SLIDER (infinite loop)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % galleryImages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <div className="bg-white min-h-screen py-20 overflow-hidden flex flex-col items-center justify-center">

      {/* Controls */}
      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => setActiveIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length)}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          Prev
        </button>

        <button 
          onClick={() => setActiveIndex(prev => (prev + 1) % galleryImages.length)}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          Next
        </button>
      </div>

      {/* 3D Stage */}
      <div 
        className="relative w-full h-[500px] flex items-center justify-center"
        style={{ perspective: "1500px" }}
      >
        <div 
          className="relative flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {galleryImages.map((image, index) => {

            const total = galleryImages.length;

            // ✅ PERFECT LOOP LOGIC
            let diff = index - activeIndex;

            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const rotation = diff * spreadAngle;

            return (
              <div 
                key={image.id}
                className="absolute w-[200px] h-[320px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500"
                style={{
                  transform: `rotateY(${rotation}deg) translateZ(${tzDistance}px) scale(${diff === 0 ? 1.2 : 0.9})`,
                  opacity: diff === 0 ? 1 : 0.6,
                  zIndex: diff === 0 ? 10 : 1,
                  backfaceVisibility: "hidden"
                }}
              >
                <img 
                  src={image.src} 
                  alt="Gallery Item"
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center max-w-2xl px-6">
        <p className="text-gray-800 text-xl font-medium leading-relaxed">
          Stay updated with the latest news, announcements, and highlights from 
          our recent exhibitions and gatherings.
        </p>
      </div>
    </div>
  );
};

export default StaticConcaveGallery;
