import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeMedia?: string;
  afterMedia?: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfterSlider({
  beforeMedia,
  afterMedia,
  beforeAlt = 'Before',
  afterAlt = 'After'
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - left, width));
    const percent = (x / width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] overflow-hidden select-none cursor-ew-resize group"
      onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
      onMouseMove={handleMouseMove}
      onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
      onTouchMove={handleTouchMove}
    >
      {/* After Media (Background) */}
      {afterMedia && (
        afterMedia.endsWith('.mp4') ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          >
            <source src={afterMedia} type="video/mp4" />
          </video>
        ) : (
          <img
            src={afterMedia}
            alt={afterAlt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none bg-brand-bg md:object-cover"
            draggable={false}
          />
        )
      )}

      {/* Before Media (Clipped Foreground) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        {beforeMedia && (
          beforeMedia.endsWith('.mp4') ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            >
              <source src={beforeMedia} type="video/mp4" />
            </video>
          ) : (
            <img
              src={beforeMedia}
              alt={beforeAlt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none bg-brand-bg md:object-cover"
              draggable={false}
            />
          )
        )}
      </div>

      {/* Slider Line & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center transition-opacity"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.3)]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="scale-x-[-1] absolute ml-4">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-3 py-1 backdrop-blur-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-3 py-1 backdrop-blur-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
        After
      </div>
    </div>
  );
}
