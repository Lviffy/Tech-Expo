import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Activity, Bell, Shield, Server, CheckCircle } from 'lucide-react';

const tipCategories = [
  {
    icon: Server,
    title: "Infrastructure Monitoring",
    tips: [
      "Monitor from multiple global regions",
      "Track both availability and performance",
      "Set cascading alert thresholds",
      "Implement redundant checks"
    ],
    color: "purple"
  },
  {
    icon: Activity,
    title: "Performance Optimization",
    tips: [
      "Establish performance baselines",
      "Track page load waterfall charts",
      "Monitor third-party dependencies",
      "Set up synthetic user journeys"
    ],
    color: "blue"
  },
  {
    icon: Shield,
    title: "Security Best Practices",
    tips: [
      "Enable SSL/TLS certificate monitoring",
      "Verify security headers regularly",
      "Set up continuous DNS monitoring",
      "Track for unauthorized changes"
    ],
    color: "green"
  },
  {
    icon: Bell,
    title: "Alert Management",
    tips: [
      "Create escalation policies",
      "Use smart alert grouping",
      "Set up incident acknowledgment",
      "Implement root cause analysis"
    ],
    color: "pink"
  }
];

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const MoreFeatures = () => {
  const getColorClasses = (color) => {
    const colors = {
      purple: "bg-purple-500/10 border-purple-500/20 text-purple-400",
      blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
      green: "bg-green-500/10 border-green-500/20 text-green-400",
      pink: "bg-pink-500/10 border-pink-500/20 text-pink-400"
    };
    return colors[color] || colors.purple;
  };

  return (
    <div className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-3">
            <span className="relative">
              <span className="absolute inset-0 bg-[linear-gradient(to_left,#4d4d4d,#848484_20%,#ffffff_50%,#848484_80%,#4d4d4d_100%)] bg-clip-text text-transparent blur-[2px] brightness-150"></span>
              <span className="relative bg-[linear-gradient(to_left,#6b6b6b,#848484_20%,#ffffff_50%,#848484_80%,#6b6b6b_100%)] bg-clip-text text-transparent animate-shine-fast">
                Monitoring Best Practices
              </span>
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Expert recommendations to maximize your website monitoring effectiveness and minimize downtime.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tipCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariant}
              transition={{ duration: 0.3 }}
              className="bg-[#151524]/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:bg-[#1A1A2E]/50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-lg border ${getColorClasses(category.color)}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.tips.map((tip, tipIndex) => (
                  <motion.li
                    key={tipIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * tipIndex }}
                    className="flex items-start space-x-2 text-gray-400"
                  >
                    <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" />
                    <span className="text-sm">{tip}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-300">
            Ready to implement decentralized monitoring for your critical infrastructure?
          </p>
          <div className="flex justify-center mt-8">
            <div className="relative group">
              <div className="absolute -inset-[6px] rounded-full border border-purple-400/30 group-hover:border-purple-500/60 transition-colors duration-300"></div>
              <div className="absolute -inset-[3px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-md group-hover:from-purple-500/40 group-hover:to-pink-500/40 transition-colors duration-300"></div>
              <Link to="/sign-up">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/90 text-black px-8 py-3 rounded-full font-semibold hover:bg-white/80 transition-all duration-300 shadow-[0_0_15px_rgba(139,91,255,0.3)] group-hover:shadow-[0_0_25px_rgba(139,91,255,0.6)] relative backdrop-blur-sm"
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MoreFeatures;