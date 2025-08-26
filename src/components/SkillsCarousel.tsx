import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

const skills: Skill[] = [
  { name: "Figma", percentage: 98, icon: "🎨" },
  { name: "Illustrator", percentage: 95, icon: "✏️" },
  { name: "Photoshop", percentage: 92, icon: "🖼️" },
  { name: "Adobe XD", percentage: 90, icon: "📱" },
  { name: "Premiere Pro", percentage: 88, icon: "🎬" },
  { name: "After Effects", percentage: 85, icon: "✨" },
  { name: "ChatGPT", percentage: 97, icon: "🤖" },
  { name: "Adobe Firefly", percentage: 90, icon: "🔥" },
  { name: "React JS", percentage: 80, icon: "⚛️" },
];

const SkillsCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 6, // show 6 cards
      spacing: 15, // small gap between cards
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // autoplay (slow)
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 4000); // 4s delay per slide (slower than your 2s/5s)
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="keen-slider__slide flex justify-center"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100 group w-full max-w-xs">
              {/* Skill Icon */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-gray-600">
                    Proficiency
                  </span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                  <div
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-4 rounded-full transition-all duration-1000 shadow-lg relative overflow-hidden"
                    style={{ width: `${skill.percentage}%` }}
                  >
                    {/* Shine */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="text-center">
                <span
                  className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                    skill.percentage >= 95
                      ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800"
                      : skill.percentage >= 90
                      ? "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800"
                      : skill.percentage >= 85
                      ? "bg-gradient-to-r from-purple-100 to-violet-100 text-purple-800"
                      : "bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800"
                  }`}
                >
                  {skill.percentage >= 95
                    ? "Expert"
                    : skill.percentage >= 90
                    ? "Advanced"
                    : skill.percentage >= 85
                    ? "Proficient"
                    : "Intermediate"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-12 space-x-3">
        {skills.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? "bg-gradient-to-r from-blue-600 to-purple-600 scale-125 shadow-lg"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;
