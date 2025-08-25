import React, { useEffect, useState, useRef } from 'react';

interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

const skills: Skill[] = [
  { name: 'Figma', percentage: 98, icon: '🎨' },
  { name: 'Illustrator', percentage: 95, icon: '✏️' },
  { name: 'Photoshop', percentage: 92, icon: '🖼️' },
  { name: 'Adobe XD', percentage: 90, icon: '📱' },
  { name: 'Premiere Pro', percentage: 88, icon: '🎬' },
  { name: 'After Effects', percentage: 85, icon: '✨' },
  { name: 'ChatGPT', percentage: 97, icon: '🤖' },
  { name: 'Adobe Firefly', percentage: 90, icon: '🔥' },
  { name: 'React JS', percentage: 80, icon: '⚛️' },
];

const SkillsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Ensure infinite loop by duplicating skills
  const extendedSkills = [...skills, ...skills, ...skills];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % skills.length;
        // Reset to first set of skills when reaching the end for infinite effect
        if (newIndex === 0) {
          setTimeout(() => {
            setTranslateX(0);
            setCurrentIndex(0);
          }, 1000); // Match transition duration
        }
        return newIndex;
      });
    }, 8000); // Slower timing: 8 seconds per slide

    return () => clearInterval(interval);
  }, []);

  // Handle drag start
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  // Handle drag move
  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diffX = clientX - startX;
    setTranslateX(-currentIndex * (100 / 6) + (diffX / window.innerWidth) * 100);
  };

  // Handle drag end
  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 50; // Minimum drag distance to trigger slide
    const diffX = translateX + currentIndex * (100 / 6);

    if (Math.abs(diffX) > threshold) {
      const direction = diffX > 0 ? -1 : 1;
      let newIndex = (currentIndex + direction) % skills.length;
      if (newIndex < 0) newIndex = skills.length - 1;
      setCurrentIndex(newIndex);
    }
    setTranslateX(-currentIndex * (100 / 6));
  };

  // Handle dot click
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Skills Carousel */}
        <div 
          className="relative overflow-hidden"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(${translateX - currentIndex * (100 / 6)}%)`,
              width: `${(extendedSkills.length * 100) / 6}%`,
            }}
            ref={carouselRef}
          >
            {extendedSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 px-4 flex justify-center"
                style={{ width: `${100 / 6}%` }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100 group max-w-sm w-full">
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
                      <span className="text-sm font-medium text-gray-600">Proficiency</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                      <div 
                        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-4 rounded-full transition-all duration-1000 shadow-lg relative overflow-hidden"
                        style={{ width: `${skill.percentage}%` }}
                      >
                        {/* Animated shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Skill Level Badge */}
                  <div className="text-center">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                      skill.percentage >= 95 ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800' :
                      skill.percentage >= 90 ? 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800' :
                      skill.percentage >= 85 ? 'bg-gradient-to-r from-purple-100 to-violet-100 text-purple-800' :
                      'bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800'
                    }`}>
                      {skill.percentage >= 95 ? 'Expert' :
                       skill.percentage >= 90 ? 'Advanced' :
                       skill.percentage >= 85 ? 'Proficient' : 'Intermediate'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {skills.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125 shadow-lg'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                5+
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
                25+
              </div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCarousel;
