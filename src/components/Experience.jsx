import React from "react";
import { motion } from "framer-motion";
import intern from "../assets/intern.webp";
import resume from "../assets/AnujGusainResume.pdf";
import intern2 from "../assets/ilogo.png";

const Experience = () => {
  const experiences = [
    {
      role: "Data Analyst Intern",
      company: "Imarticus Pvt. Ltd.",
      period: "Jul 2025 - Aug 2025",
      description:
        "During my internship at Imarticus Pvt. Ltd., I developed and maintained SQL-based ETL workflows, leveraged pandas and NumPy for exploratory data analysis, and created insightful dashboards in Power BI to support data-driven strategy.",
      technologies: ["SQL", "PYTHON", "EDA", "NUMPY", "PANDAS", "POWER BI"],
      icon: intern,
      // isImage: true,
    },
    {
      role: "Frontend Developer Intern",
      company: "iStudio",
      period: "Sep 2025 - Feb 2026",
      description:
        "Completed an internship at iStudio, where I contributed to practical projects, strengthened my technical foundation, and gained hands-on experience in teamwork and problem-solving.",
      technologies: ["HTML", "CSS", "JS", "REACT", "TEAMWORK", "TailwindCSS"],
      icon: intern2,
    },
  ];

  const education = [
    {
      degree: "Bachelor of computer application",
      institution: "Tilak Maharashtra University",
      period: "2023 - 2026",
      description:
        "Specialized in web technologies and software Applications. Graduated with honors.",
      icon: "🎓",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section id="experience" className="py-20 px-4 md:px-6 bg-white/[0.025] border-y border-white/10">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-300 to-amber-300 mx-auto"></div>
          <motion.a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center border border-teal-300/40 bg-teal-300/10 px-5 py-2.5 text-sm font-semibold text-teal-100 hover:bg-teal-300 hover:text-slate-950 transition-all"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Resume
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent mr-2">
                Work Experience
              </span>
            </h3>

            <motion.div
              className="relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Timeline line */}
              <div className="absolute left-7 top-1 h-full w-0.5 bg-gradient-to-b from-teal-300 to-cyan-300"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="mb-10 ml-4 relative"
                >
                  {/* Timeline dot */}
                  {/* Timeline dot */}
                  {/* Timeline dot */}
                  <div className="absolute -left-10 top-1 w-14 h-14 bg-[#07090f] flex items-center justify-center border-2 border-teal-300">
                    <img
                      src={exp.icon}
                      alt="Intern Icon"
                      className="w-10 h-10 object-contain rounded-full"
                    />
                  </div>

                  <div className="bg-[#0c1018]/80 backdrop-blur-sm p-6 border border-white/10 border-l-4 border-l-teal-300">
                    <h4 className="text-xl font-semibold mb-1">{exp.role}</h4>
                    <div className="flex flex-wrap items-center justify-between mb-3">
                      <span className="text-cyan-300">{exp.company}</span>
                      <span className="text-slate-400 text-sm">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-slate-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-white/10 px-2 py-1 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <span className="bg-gradient-to-r from-amber-300 to-teal-300 bg-clip-text text-transparent mr-2">
                Education
              </span>
            </h3>

            <motion.div
              className="relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Timeline line */}
              <div className="absolute left-7 top-1 h-full w-0.5 bg-gradient-to-b from-amber-300 to-teal-300"></div>

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="mb-10 ml-4 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-10 top-1 w-14 h-14 bg-[#07090f] flex items-center justify-center border-2 border-amber-300">
                    <span className="text-xl">{edu.icon}</span>
                  </div>

                  <div className="bg-[#0c1018]/80 backdrop-blur-sm p-6 border border-white/10 border-l-4 border-l-amber-300">
                    <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                    <div className="flex flex-wrap items-center justify-between mb-3">
                      <span className="text-cyan-300">{edu.institution}</span>
                      <span className="text-slate-400 text-sm">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-slate-300">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
