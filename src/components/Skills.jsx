import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      name: "React",
      icon: "⚛️", // Atom symbol – remains best for React
      level: 75,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Node.js",
      icon: "🌿", // Leaf – represents Node's green branding
      level: 85,
      color: "from-green-400 to-green-600",
    },
    {
      name: "MongoDB",
      icon: "🟩", // Green square – represents database + Mongo green
      level: 80,
      color: "from-green-500 to-green-700",
    },
    {
      name: "JavaScript",
      icon: "✨", // Sparkles – clean and commonly used for JS
      level: 75,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Tailwind CSS",
      icon: "🌬️", // Wind face – symbolizing "Tailwind"
      level: 90,
      color: "from-teal-400 to-teal-600",
    },
    {
      name: "Git",
      icon: "🔧", // Wrench – represents tools/version control
      level: 85,
      color: "from-orange-500 to-orange-700",
    },
    {
      name: "Express.js",
      icon: "☁️", // Cloud – remains perfect for AWS
      level: 70,
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "Java",
      icon: "🧩", // Puzzle – symbolic of Java’s modular OOP structure
      level: 75,
      color: "from-red-500 to-red-700",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-white/[0.025] border-y border-white/10">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-300 to-amber-300 mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-white/10 bg-[#0c1018]/80 p-6 flex flex-col items-center group hover:border-teal-300/50 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="font-semibold mb-2 text-center">{skill.name}</h3>
              <div className="w-full bg-white/10 h-2 mt-2">
                <motion.div
                  className={`h-2 bg-gradient-to-r ${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                ></motion.div>
              </div>
              <span className="text-xs text-slate-400 mt-2">{skill.level}%</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
