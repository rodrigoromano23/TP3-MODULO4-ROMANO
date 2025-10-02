
import React, { useState } from "react";



import { motion, AnimatePresence} from "framer-motion";



import "bootstrap-icons/font/bootstrap-icons.css";




/*const Main = () => {
  const features = ["Rápido", "Responsivo", "Moderno", "Seguro"];
  const [showFeatures, setShowFeatures] = useState(true);

  // Variantes para la UL
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, // entrada en cascada
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.2, staggerDirection: -1 }, // salida en cascada inversa
    },
  };

  // Variantes para cada LI
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <main className="container mx-auto p-8" id="main">
      <motion.h2
        className="text-3xl font-bold mb-4 text-blue-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Bienvenido a mi Landing Page
      </motion.h2>

      <button
        onClick={() => setShowFeatures(!showFeatures)}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 hover:bg-blue-500 transition-colors"
      >
        {showFeatures ? "Ocultar características" : "Mostrar características"}
      </button>

      <AnimatePresence>
        {showFeatures && (
          <motion.ul
            id="features"
            className="space-y-2"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {features.map((item, idx) => (
              <motion.li
                key={idx}
                variants={itemVariants}
                className="bg-gray-100 p-2 rounded shadow hover:bg-gray-200 flex items-center gap-2 transition-colors"
              >
                <i className="bi bi-check-circle-fill text-green-500"></i> {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Main;*/

////-----------------------------------------------------------

const Main = () => {
  const features = [
    { text: "Rápido", icon: "bi-lightning-charge-fill", color: "bg-blue-50", iconColor: "text-blue-600" },
    { text: "Responsivo", icon: "bi-phone-fill", color: "bg-green-50", iconColor: "text-green-600" },
    { text: "Moderno", icon: "bi-stars", color: "bg-purple-50", iconColor: "text-purple-600" },
    { text: "Seguro", icon: "bi-shield-lock-fill", color: "bg-red-50", iconColor: "text-red-600" },
  ];

  const [showFeatures, setShowFeatures] = useState(true);

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.2, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 10 },
    },
    exit: { opacity: 0, scale: 0.8, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <main className="container mx-auto p-8" id="main">
      <motion.h2
        className="text-3xl font-bold mb-6 text-blue-700 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Bienvenido a mi Landing Page
      </motion.h2>

      <div className="text-center mb-6">
        <button
          onClick={() => setShowFeatures(!showFeatures)}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 transition-colors"
        >
          {showFeatures ? "Ocultar características" : "Mostrar características"}
        </button>
      </div>

      <AnimatePresence>
        {showFeatures && (
          <motion.ul
            id="features"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {features.map((feature, idx) => (
              <motion.li
                key={idx}
                variants={itemVariants}
                className={`${feature.color} border rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow`}
              >
                <i className={`bi ${feature.icon} ${feature.iconColor} text-4xl mb-3`}></i>
                <span className="font-semibold text-lg">{feature.text}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Main;



