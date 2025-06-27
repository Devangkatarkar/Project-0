import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I’m a passionate full-stack developer with strong skills in React and Python.
          I enjoy building responsive frontends and integrating backend APIs.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
