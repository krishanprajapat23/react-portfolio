import { fadeUp, slideUp, staggerContainer } from "../motion/variants";
import { motion } from "motion/react";

import { Button } from "../ui";
import ContactImage from "../../assets/images/contact.webp";

const Contact = () => {
  return (
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="contact" className="group w-full py-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 md:gap-5">
          <div className="space-y-4">
            <motion.h2 
              variants={slideUp}
              className="capitalize"
            >
              Let's <span className="group-hover:text-(--primary-color) transition-colors">Connect.</span>
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              className="text-xl font-semibold">
              Want to work together or have any questions?
            </motion.p>
            <motion.p
              variants={fadeUp}
            >
              If there is a project that you want to get started, think you need my help with something then don't hesitate to get in touch with me.
            </motion.p>
            <motion.div 
              variants={fadeUp}
              className="btn-wrapper w-auto">
              <Button
                href="mailto:krishanprajapat@gmail.com"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height="18px"
                    width="18px"
                    fill="currentColor"
                  >
                    <path d="M61.4 64C27.5 64 0 91.5 0 125.4 0 126.3 0 127.1 .1 128L0 128 0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256-.1 0c0-.9 .1-1.7 .1-2.6 0-33.9-27.5-61.4-61.4-61.4L61.4 64zM464 192.3L464 384c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-191.7 154.8 117.4c31.4 23.9 74.9 23.9 106.4 0L464 192.3zM48 125.4C48 118 54 112 61.4 112l389.2 0c7.4 0 13.4 6 13.4 13.4 0 4.2-2 8.2-5.3 10.7L280.2 271.5c-14.3 10.8-34.1 10.8-48.4 0L53.3 136.1c-3.3-2.5-5.3-6.5-5.3-10.7z" />
                  </svg>
                }
              >
                Get Started
              </Button>
            </motion.div>
          </div>
          <div className="relative overflow-hidden pl-5 pr-2">
            <div className="md:w-[400px] md:block hidden ml-auto overflow-hidden rounded-tl-2xl rounded-br-2xl">
                <motion.img
                  variants={fadeUp}   
                  src={ContactImage} alt="contact us" className="h-full w-full object-cover"
                />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
