// import React from 'react';
// import { ArrowRight } from 'lucide-react';
// import  {Link}  from 'react-router-dom';

// const ImsgeSlider = () => {
//   const brandPurple = "#B53A8A";

//   // 1. Data Object for Images (Use your actual paths)
//   const galleryImages = [
//     { id: 1, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80", alt: "Exhibition" },
//     { id: 2, src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80", alt: "Networking" },
//     { id: 3, src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80", alt: "Showcase" },
//     { id: 4, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80", alt: "Conference" },
//     { id: 5, src: "https://images.unsplash.com/photo-1475721027187-40aeae77c9f3?auto=format&fit=crop&q=80", alt: "Gathering" },
//     { id: 6, src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80", alt: "Workshop" },
//     { id: 7, src: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80", alt: "Discussion" },
//     { id: 8, src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80", alt: "Summit" },
//   ];

//   const imageCount = galleryImages.length;
//   const anglePerImage = 360 / imageCount; // 45 degrees for 8 images
//   const tzDistance = 420; // Sets the "radius" of the circle

//   return (
//     <div className="font-sans bg-white min-h-screen py-20 px-6">
      
//       {/* 2. CUSTOM CSS INJECTION - Core of the Effect */}
//       <style>{`
//         /* 1. Define the 3D Perspective on the main container */
//         .stage-container {
//           perspective: 2000px; /* How far back the scene is */
//           overflow: hidden;
//           position: relative;
//         }

//         /* 2. The Carousel Container that holds all items */
//         .carousel-container {
//           position: relative;
//           width: 250px; /* Matches target image width */
//           height: 350px; /* Matches target image height */
//           margin: 0 auto;
//           transform-style: preserve-3d; /* CRITICAL: Allows items to retain their Z-position */
//           animation: spin 60s infinite linear; /* Normal continuous rotation */
//         }

//         /* Continuous rotation animation */
//         @keyframes spin {
//           from { transform: rotateY(0deg); }
//           to { transform: rotateY(-360deg); } /* Rotation direction */
//         }

//         /* 3. Base style for all carousel items */
//         .carousel-item {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           backface-visibility: hidden; /* Hide the "back" of the images as they pass */
//           border-radius: 1rem;
//           overflow: hidden;
//           transition: transform 1s, box-shadow 1s; /* smooth updates if needed */
//         }

//         /* 4. Individual positioning logic is applied inline in JSX below */

//         /* Optional: Pause spin on hover (good for UX) */
//         .carousel-container:hover {
//           animation-play-state: paused;
//         }
//       `}</style>

//       {/* Header Section */}
//       <section className="text-center max-w-4xl mx-auto mb-16 relative z-30">
//         <h1 className="text-5xl md:text-6xl font-bold text-[#B53A8A] tracking-tight leading-tight mb-8">
//           Highlights from Our Events
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
//           Explore our gallery to see moments from exhibitions, networking sessions, product showcases, and industry gatherings.
//         </p>
        
//         <Link 
//           to="/gallery"
//           className="bg-[#B53A8A] text-white font-bold px-10 py-3 rounded-full inline-flex items-center gap-2 group transition-all hover:opacity-90 active:scale-95 shadow-lg"
//         >
//           Explore
//           <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
//         </Link>
//       </section>

//       {/* 3. THE 3D CAROUSEL SECTION */}
//       <section className="stage-container w-full h-[500px] flex items-center justify-center -mt-16 -mb-16">
//         <div className="carousel-container">
          
//           {galleryImages.map((image, index) => {
//             // Calculate the angle for this image (0, 45, 90, 135...)
//             const currentAngle = anglePerImage * index;

//             return (
//               <div 
//                 key={image.id}
//                 className="carousel-item shadow-2xl group border-2 border-white/50"
//                 style={{
//                   /* Dynamic Positioning: Rotate to angle, then translateZ (push out to radius) */
//                   transform: `rotateY(${currentAngle}deg) translateZ(${tzDistance}px)`
//                 }}
//               >
//                 <img 
//                   src={image.src} 
//                   alt={image.alt}
//                   className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
//                 />
//               </div>
//             );
//           })}
          
//         </div>
//       </section>

//       {/* Footer Section */}
//       <section className="text-center max-w-xl mx-auto mt-16 relative z-30">
//         <p className="text-gray-600 leading-relaxed font-light">
//           Stay updated with the latest news, announcements, and highlights from Peppermint events and initiatives.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default ImsgeSlider;



// import React from 'react';
// import { ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const ImageSlider = () => {
//   const brandPurple = "#B53A8A";

//   const galleryImages = [
//     { id: 1, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80", alt: "Exhibition" },
//     { id: 2, src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80", alt: "Networking" },
//     { id: 3, src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80", alt: "Showcase" },
//     { id: 4, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80", alt: "Conference" },
//     { id: 5, src: "https://images.unsplash.com/photo-1475721027187-40aeae77c9f3?auto=format&fit=crop&q=80", alt: "Gathering" },
//     { id: 6, src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80", alt: "Workshop" },
//     { id: 7, src: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80", alt: "Discussion" },
//     { id: 8, src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80", alt: "Summit" },
//   ];

//   const imageCount = galleryImages.length;
//   const anglePerImage = 360 / imageCount;
  
//   // Increased radius so back-row images are clearly visible behind the front ones
//   const tzDistance = 500; 

//   return (
//     <div className="font-sans bg-white min-h-screen py-20 px-6 overflow-hidden">
      
//       <style>{`
//         .stage-container {
//           perspective: 1500px; /* Reduced for more dramatic 3D effect */
//           position: relative;
//         }

//         .carousel-container {
//           position: relative;
//           width: 280px; /* Wider images per your upload */
//           height: 420px; /* Taller aspect ratio per your upload */
//           margin: 0 auto;
//           transform-style: preserve-3d;
//           animation: spin 35s infinite linear; /* Slightly faster rotation */
//         }

//         @keyframes spin {
//           from { transform: rotateY(0deg); }
//           to { transform: rotateY(-360deg); }
//         }

//         .carousel-item {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           /* REMOVED backface-visibility: hidden to show the backside */
//           backface-visibility: visible; 
//           border-radius: 1.5rem;
//           overflow: hidden;
//           /* Subtle border to make the "back" look like a card */
//           border: 1px solid rgba(255,255,255,0.3);
//           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
//         }

//         .carousel-container:hover {
//           animation-play-state: paused;
//         }
//       `}</style>

//       {/* Content Header */}
//       <section className="text-center max-w-4xl mx-auto mb-16 relative z-30">
//         <h1 className="text-5xl md:text-6xl font-bold text-[#B53A8A] mb-6">
//           Highlights from Our Events
//         </h1>
//         <Link 
//           to="/gallery"
//           className="bg-[#B53A8A] text-white font-bold px-10 py-3 rounded-full inline-flex items-center gap-2 group transition-all hover:scale-105 shadow-lg"
//         >
//           Explore <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//         </Link>
//       </section>

//       {/* 3D Circular Stage */}
//       <section className="stage-container w-full h-[600px] flex items-center justify-center">
//         <div className="carousel-container">
//           {galleryImages.map((image, index) => {
//             const currentAngle = anglePerImage * index;

//             return (
//               <div 
//                 key={image.id}
//                 className="carousel-item bg-gray-100"
//                 style={{
//                   transform: `rotateY(${currentAngle}deg) translateZ(${tzDistance}px)`
//                 }}
//               >
//                 <img 
//                   src={image.src} 
//                   alt={image.alt}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       <section className="text-center max-w-xl mx-auto mt-12">
//         <p className="text-gray-500 font-light italic">
//           Hover to pause and inspect the event details.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default ImageSlider;


import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImageSlider = () => {
  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80", alt: "Exhibition" },
    { id: 2, src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80", alt: "Networking" },
    { id: 3, src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80", alt: "Showcase" },
    { id: 4, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80", alt: "Conference" },
    { id: 5, src: "https://images.unsplash.com/photo-1475721027187-40aeae77c9f3?auto=format&fit=crop&q=80", alt: "Gathering" },
    { id: 6, src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80", alt: "Workshop" },
    { id: 7, src: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80", alt: "Discussion" },
    { id: 8, src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80", alt: "Summit" },
  ];

  const imageCount = galleryImages.length;
  const anglePerImage = 360 / imageCount;
  const tzDistance = 500; // The radius of your circle

  return (
    <div className="font-sans bg-white min-h-screen py-20 px-6 overflow-hidden">
      
      <style>{`
        .stage-container {
          perspective: 2000px;
          position: relative;
        }

        .carousel-container {
          position: relative;
          width: 280px; 
          height: 420px;
          margin: 0 auto;
          transform-style: preserve-3d;
          animation: spin 40s infinite linear;
        }

        @keyframes spin {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(-360deg); }
        }

        .carousel-item {
          position: absolute;
          width: 100%;
          height: 100%;
          /* CRITICAL: This hides the element when its back faces the viewer */
          backface-visibility: visible; 
          -webkit-backface-visibility: visible;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      {/* 3D Circular Stage */}
      <section className="stage-container w-full h-[600px] flex items-center justify-center">
        <div className="carousel-container">
          {galleryImages.map((image, index) => {
            const currentAngle = anglePerImage * index;

            return (
              <div 
                key={image.id}
                className="carousel-item"
                style={{
                  /* 1. rotateY(${currentAngle}deg) - Places the item on the circle.
                    2. rotateY(180deg) - Flips the image to face the center.
                    3. translateZ(${tzDistance}px) - Pushes it to the edge.
                  */
                  transform: `rotateY(${currentAngle}deg) rotateY(180deg) translateZ(${tzDistance}px)`
                }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ImageSlider;

// import React from 'react';



// const ImageSlider = () => {
//   const galleryImages = [
//     { id: 1, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80", alt: "Exhibition" },
//     { id: 2, src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80", alt: "Networking" },
//     { id: 3, src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80", alt: "Showcase" },
//     { id: 4, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80", alt: "Conference" },
//     { id: 5, src: "https://images.unsplash.com/photo-1475721027187-40aeae77c9f3?auto=format&fit=crop&q=80", alt: "Gathering" },
//     { id: 6, src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80", alt: "Workshop" },
//     { id: 7, src: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80", alt: "Discussion" },
//     { id: 8, src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80", alt: "Summit" },
//   ];

//   const anglePerImage = 360 / galleryImages.length;
//   const tzDistance = 500;

//   return (
//     <div className="bg-white min-h-screen py-20 px-6 overflow-hidden">

//       <style>{`
//         .stage-container {
//           perspective: 2000px;
//         }

//         .carousel-container {
//           width: 280px;
//           height: 420px;
//           margin: auto;
//           position: relative;
//           transform-style: preserve-3d;
//           animation: spinReverse 40s infinite linear;
//         }

//         @keyframes spinReverse {
//           from { transform: rotateY(0deg); }
//           to { transform: rotateY(360deg); } /* reverse direction */
//         }

//         .carousel-item {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           border-radius: 1.5rem;
//           overflow: hidden;
//           backface-visibility: hidden;
//           transform-style: preserve-3d;
//         }
//       `}</style>

//       <section className="stage-container w-full h-[600px] flex items-center justify-center">
//         <div className="carousel-container">
//           {galleryImages.map((image, index) => {
//             const angle = anglePerImage * index;

//             return (
//               <div
//                 key={image.id}
//                 className="carousel-item"
//                 style={{
//                   transform: `rotateY(${angle}deg) translateZ(${tzDistance}px)`
//                 }}
//               >
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ImageSlider;
