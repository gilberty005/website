import React, {useState} from "react";
import { motion } from "framer-motion";
import { github } from "../../assets";
import { blogs } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";

const BlogCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
  }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <div className='bg-tertiary p-5 rounded-2xl flex flex-col md:flex-row items-center w-full max-w-screen-xl mx-auto'>
          <div className='relative w-[1000px] h-[230px] mb-4 md:mb-0'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />
          </div>
  
          <div className='ml-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
  
            <div className='mt-4 flex flex-wrap gap-2'>
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };  

  export function Blog() {
    return (
      <>
        <motion.div variants={textVariant()}>
          <h1 className={"gradient__text"}>My Blogs</h1>
        </motion.div>
  
        <div className='mt-20 flex flex-wrap gap-7 justify-center items-center'>
          {blogs.map((project, index) => (
            <BlogCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </>
    );
  }