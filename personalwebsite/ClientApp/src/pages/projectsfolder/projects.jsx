import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { FaLink } from "react-icons/fa";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, onTagClick }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full ml-12'> 
        <div className='relative w-full h-[230px]'>
          <img src={image} alt='project_image' className='w-full h-full object-cover rounded-2xl' />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <FaLink alt='source code'/>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} cursor-pointer`}
              onClick={() => onTagClick(tag.name)}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export function Projects() {
  const [selectedTag, setSelectedTag] = useState("");
  const [uniqueTags, setUniqueTags] = useState([]);

  useEffect(() => {
    const tags = projects.flatMap(project => project.tags.map(tag => tag.name));
    setUniqueTags([...new Set(tags)]);
  }, []);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.some((tag) => tag.name === selectedTag))
    : projects;

  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={"gradient__text"}>My Projects</h1>
        <h2 className="mt-2 text-secondary text-[14px]" style={{ paddingLeft: '3.4%' }}>Click to Filter</h2>
        <div className='flex flex-wrap gap-2 mt-4' style = {{paddingLeft: '3%'}}>
          {uniqueTags.map(tag => (
            <button
              key={tag}
              className={`py-2 px-4 rounded-md ${selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-tertiary'}`}
              onClick={() => handleTagClick(tag)}
            >
              #{tag}
            </button>
          ))}
          {selectedTag && (
            <button
              className='py-2 px-4 rounded-md bg-red-500 text-white'
              onClick={() => setSelectedTag("")}
            >
              Clear Filter
            </button>
          )}
        </div>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-3'>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} onTagClick={handleTagClick} />
        ))}
      </div>
    </>
  )
}