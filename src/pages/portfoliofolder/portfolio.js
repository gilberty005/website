import React from "react";
import { motion } from 'framer-motion';

import { styles } from '../../styles';
import { ComputersCanvas } from '../../components/canvas';
import './portfolio.css';
 
export function Portfolio() {
    return (
        <>
            <section className="relative w-full h-screen mx-auto hero">
                <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
                    <div className='flex flex-col justify-center items-center mt-5'>
                        <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                        <div className='w-1 sm:h-80 h-40 violet-gradient' />
                    </div>

                    <div >
                        <h1 className="text-4xl font-bold gradient__text">Welcome to my Portfolio</h1>
                        <p className="mt-2 text-white-100">
                            I'm currently a freshman at Columbia University majoring in <br className='sm:block hidden' />
                            computer science and economics.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
  }