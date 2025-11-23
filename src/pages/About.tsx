import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import paperAirplaneImg from "../assets/paper-airplane.png";
import chatBubbleImg from "../assets/chat-bubble.png";
import SEO from "../components/SEO";

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    }
  };

  return (
    <div className="about-page overflow-hidden">
      <SEO
        title="About LifeCycle - Inventory Management Solutions for Small Businesses"
        description="Learn about LifeCycle's mission to help small businesses reduce inventory waste through smart expiration tracking software. Founded by students who understand the challenges."
        keywords="about lifecycle, inventory management company, small business solutions, expiration tracking software, inventory waste reduction"
        canonical="https://lifecycle.cloud/about"
        ogTitle="About LifeCycle - Inventory Management Solutions"
        ogDescription="Learn about LifeCycle's mission to help small businesses reduce inventory waste through smart expiration tracking software."
        ogImage="https://lifecycle.cloud/package.png"
      />

      {/* About Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-white via-primary-50/30 to-white overflow-hidden py-20">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 -left-20 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-10 w-96 h-96 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold border border-primary-200">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
                Our Story
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-16">
              About <span className="text-gradient">Us</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 md:p-16 shadow-xl border border-gray-100 mb-16"
              variants={itemVariants}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
                Three students, one frustrating problem, and a solution
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Hi! We're three uni students who got tired of watching food and
                products go to waste at our part-time jobs. Whether it was a cafe
                tossing expired milk or a retail shop scrambling to find batch
                numbers, we kept seeing the same issue: nobody had a simple way to
                track what was about to expire.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-12 md:p-16 shadow-xl border border-primary-100 mb-16"
              variants={itemVariants}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
                So we decided to build one.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                LifeCycle started as our own solution to make work easier—for us,
                our managers, and our coworkers. Now we're turning it into
                something that can help small businesses everywhere stop wasting
                inventory and start saving money.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're not a big corporate team with decades of experience. We're
                students who work these jobs, understand these problems, and are
                building the tool we wish we'd had from day one.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-8">
              Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-gray-700 max-w-3xl mx-auto leading-tight">
              Stop wasting stuff. It's that simple.
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              "We're here to help small businesses track expiration dates without the headache. No overcomplicated software, no unnecessary features—just a straightforward system that tells you what's about to expire so you can actually do something about it.",
              "Whether you're running a cafe, a retail shop, or anything in between, we want to make managing inventory less painful and more practical. Less waste, less stress, more money staying in your pocket.",
              "That's it. That's the mission."
            ].map((text, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-10 md:p-12 shadow-lg hover:shadow-2xl border border-gray-100 mb-8 last:mb-0 transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <p className="text-xl text-gray-600 leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>

        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="flex-1" variants={itemVariants}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 leading-tight">
                Let's talk
                <br />
                <span className="text-gradient">inventory.</span>
              </h2>
              <p className="text-xl text-gray-600 mt-8 leading-relaxed">
                Have questions? Want to learn more? We're always happy to chat about
                how LifeCycle can help your business.
              </p>
              <motion.div
                className="mt-10"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className="inline-block bg-primary-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-primary-700 shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex-1 flex justify-center"
              variants={itemVariants}
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  className="max-w-full h-auto max-h-96 object-contain drop-shadow-2xl"
                  src={chatBubbleImg}
                  alt="Contact LifeCycle team"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="max-w-7xl mx-auto px-5">
          <motion.h2
            className="text-5xl md:text-6xl font-display font-bold text-gray-900 text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We <span className="text-gradient">Believe</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              {
                title: "Keep it simple",
                description: "Complex problems don't always need complex solutions. We believe in building software that's easy to use and actually makes your life easier."
              },
              {
                title: "Built by users",
                description: "We're not just developers—we're users too. Every feature we build comes from real experience in real businesses."
              },
              {
                title: "Make an impact",
                description: "Every business that reduces waste is a win. We're here to help you save money while making the world a little better."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary-600 via-primary-500 to-emerald-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <motion.div className="flex-1 text-center md:text-left" variants={itemVariants}>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                  Ready to join us?
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                  Start reducing waste and saving money today
                </p>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/contact"
                    className="inline-block bg-white text-primary-600 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-gray-50 shadow-2xl hover:shadow-white/20"
                  >
                    Get Started
                  </Link>
                </motion.div>
                <p className="text-white/80 mt-6 text-sm">
                  No credit card required • Free 14-day trial
                </p>
              </motion.div>

              <motion.div className="flex-1 flex justify-center" variants={itemVariants}>
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img
                    src={paperAirplaneImg}
                    alt="Start your inventory management journey"
                    className="max-w-full h-auto max-h-96 object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
