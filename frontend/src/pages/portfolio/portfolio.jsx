import React, { useState } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import { experiences } from "../../config/constants";
import "react-vertical-timeline-component/style.min.css";
 
const ExperienceCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-[60%] h-[60%] object-contain'
            />
          </div>
        }
      >
        <div>
          <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>
  
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
};

const FilterButton = ({ category, activeCategory, onClick, children }) => {
  return (
    <button
      onClick={() => onClick(category)}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
        activeCategory === category
          ? 'bg-gradient-to-r from-[#488B8A] to-[#9B75D9] text-white shadow-lg'
          : 'bg-[#1d1836] text-gray-300 hover:bg-[#2a1f4a] hover:text-white'
      }`}
    >
      {children}
    </button>
  );
};

export function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredExperiences = activeCategory === 'all' 
      ? experiences 
      : experiences.filter(experience => experience.category === activeCategory);

    const categories = [
      { key: 'all', label: 'All' },
      { key: 'education', label: 'Education' },
      { key: 'professional', label: 'Professional' },
      { key: 'research', label: 'Research' }
    ];

    return (
        <>
            <section>
                {/* Filter Buttons */}
                <div className='mt-10 flex justify-center gap-4 flex-wrap'>
                    {categories.map((category) => (
                        <FilterButton
                            key={category.key}
                            category={category.key}
                            activeCategory={activeCategory}
                            onClick={setActiveCategory}
                        >
                            {category.label}
                        </FilterButton>
                    ))}
                </div>

                <div className='mt-20 flex flex-col'>
                    <VerticalTimeline>
                        {filteredExperiences.map((experience, index) => (
                            <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                            />
                        ))}
                    </VerticalTimeline>
                </div>
            </section>
        </>
    );
  }