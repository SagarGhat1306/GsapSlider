import React, { useState } from 'react';

const images = [
  { id: 1, title: 'Events', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=400' },
  { id: 2, title: 'Explore', url: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=400' },
  { id: 3, title: 'Services', url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=400' },
  { id: 4, title: 'Gallery', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=400' },
  { id: 5, title: 'About', url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=400' },
];

const TwoDCarousel = () => {
  const [activeIdx, setActiveIdx] = useState(2);

  const rotate = (direction) => {
    setActiveIdx((prev) => (prev + direction + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FDF7FF] overflow-hidden">
      <h2 className="text-4xl font-bold text-[#86195F] mb-20 uppercase tracking-widest">Our Services</h2>

      <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center">
        
        {/* Nav Buttons */}
        <button onClick={() => rotate(-1)} className="absolute left-10 z-50 text-4xl text-[#86195F] hover:scale-125 transition-all">❮</button>
        <button onClick={() => rotate(1)} className="absolute right-10 z-50 text-4xl text-[#86195F] hover:scale-125 transition-all">❯</button>

        <div className="relative flex items-center justify-center w-full">
          {images.map((img, i) => {
            // Calculate Loop Offset
            let offset = i - activeIdx;
            if (offset > images.length / 2) offset -= images.length;
            if (offset < -images.length / 2) offset += images.length;

            const absOffset = Math.abs(offset);
            const isActive = i === activeIdx;

            // 2D MATH ONLY:
            const translateX = offset * 240;      // Move left/right
            const translateY = absOffset * 40;    // The "U" curve (2D depth)
            const rotateZ = offset * 15;          // The "Fan" tilt from your image
            const scale = 1 - absOffset * 0.15;   // Smaller when further away
            const opacity = 1 - absOffset * 0.4;  // Faded when further away
            const zIndex = 50 - absOffset;        // Layering

            return (
              <div
                key={img.id}
                onClick={() => setActiveIdx(i)}
                className="absolute w-64 h-80 transition-all duration-500 ease-in-out cursor-pointer"
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotateZ}deg) scale(${scale})`,
                  zIndex: zIndex,
                  opacity: opacity < 0 ? 0 : opacity,
                }}
              >
                <div className={`w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl relative transition-transform ${isActive ? 'ring-4 ring-purple-300' : ''}`}>
                  <img src={img.url} className="w-full h-full object-cover" alt="" />
                  
                  {/* Label on the active image only */}
                  <div className={`absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-6 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="text-white text-3xl font-bold italic">{img.title}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mic Footer */}
      <div className="mt-4 flex flex-col items-center">
         <div className="w-20 h-20 rounded-full bg-yellow-400 border-4 border-white flex flex-col items-center justify-center p-2 gap-1 shadow-inner">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-1">
                    {[...Array(5)].map((_, j) => <div key={j} className="w-1 h-1 bg-purple-900/40 rounded-full" />)}
                </div>
            ))}
         </div>
         <div className="w-10 h-14 bg-[#86195F] rounded-b-lg -mt-1 shadow-md"></div>
      </div>
    </div>
  );
};

export default TwoDCarousel;