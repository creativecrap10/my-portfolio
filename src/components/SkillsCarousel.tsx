import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface Skill {
  name: string;
  percentage: number;
  image: string; // use image instead of icon
}

const skills: Skill[] = [
  { name: "Figma", percentage: 98, image: "/images/figma.png" },
  { name: "Illustrator", percentage: 95, image: "/images/illustrator.png" },
  { name: "Photoshop", percentage: 92, image: "/images/photoshop.png" },
  { name: "Adobe XD", percentage: 90, image: "/images/xd.png" },
  { name: "Premiere Pro", percentage: 88, image: "/images/premiere.png" },
  { name: "After Effects", percentage: 85, image: "/images/aftereffects.png" },
  { name: "ChatGPT", percentage: 97, image: "/images/chatgpt.png" },
  { name: "Adobe Firefly", percentage: 90, image: "/images/firefly.png" },
  { name: "React JS", percentage: 80, image: "/images/react.png" },
];

const SkillsCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 6,
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="py-20 bg-white relative overflow-hidden">
      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider">
        {skills.map((skill) => (
          <div key={skill.name} className="keen-slider__slide flex justify-center">
            <div className="rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100 group w-full max-w-xs bg-white">
              {/* Skill Image */}
              <div className="text-center mb-6">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-20 h-20 mx-auto object-contain"
                />
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-bold text-gray-900 text-center mb-6">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-gray-600">
                    Proficiency
                  </span>
                  <span className="text-2xl font-bold text-blue-600">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                  <div
                    className="bg-blue-500 h-3 rounded-full transition-all duration-1000 relative overflow-hidden"
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
                  className={`inline-block px-4 py-1 rounded-full text-xs font-semibold ${
                    skill.percentage >= 95
                      ? "bg-green-100 text-green-800"
                      : skill.percentage >= 90
                      ? "bg-blue-100 text-blue-800"
                      : skill.percentage >= 85
                      ? "bg-purple-100 text-purple-800"
                      : "bg-yellow-100 text-yellow-800"
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
                ? "bg-blue-600 scale-125 shadow-lg"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;
