import { fadeUp, slideUp, staggerContainer } from "../motion/variants";
import { motion } from "motion/react";
import webDesignImg from "../../assets/images/web-design-img.png";
import webDevImg from "../../assets/images/web-dev-img.png";

interface SkillCard {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
};

const skillsData: SkillCard[] = [
    {
        id: 1,
        title: "Website Designing",
        description: "I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send.",
        imageSrc: webDesignImg,
    },
    {
        id: 2,
        title: "Website Developement",
        description: "I'm a developer who crafts responsive, fast, and beautiful websites, using modern tools and best practices to ensure they run flawlessly across all devices.",
        imageSrc: webDevImg,
    }
];

const Skills = () => {
  return (
    <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}        
        id="skills" 
        className="group w-full py-20"
    >
        <div className="container mx-auto px-4">
            <div className="p-2 mb-5">
                <motion.h2 
                    variants={slideUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center capitalize"
                >
                    What I can <span className="group-hover:text-(--primary-color) transition-colors">do.</span>
                </motion.h2>
            </div>
            <motion.div 
                variants={staggerContainer}            
                className="grid md:grid-cols-2 gap-10">
                {
                    skillsData.map((skill) => (
                        <motion.div 
                            variants={fadeUp}
                            key={skill.id} 
                            className="group/card card text-center hover:-translate-y-2 transition-all ease-smooth duration-300">
                            <div className="mb-2 w-[150px] h-[150px] mx-auto">
                                <img src={skill.imageSrc} alt={skill.title} className="h-full w-full object-contain"/>
                            </div>
                            <h3 className="mb-3 group-hover/card:text-(--primary-color) transition-colors">{skill.title}</h3>
                            <p className="text-base">{skill.description}</p>                            
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    </motion.section>
  )
}

export default Skills
