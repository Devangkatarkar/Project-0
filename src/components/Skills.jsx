import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiSupabase, SiVite } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-500" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-300" /> },
  { name: 'Supabase', icon: <SiSupabase className="text-green-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-10 text-blue-600 dark:text-blue-400">
          Skills
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
