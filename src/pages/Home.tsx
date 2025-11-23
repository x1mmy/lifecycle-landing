import React, { useEffect } from "react";
import { motion } from "framer-motion";
import checklistImg from "../assets/checklist.png";
import nodeTreeImg from "../assets/node-tree.png";
import secureWebImg from "../assets/secure-web.png";
import lossImg from "../assets/loss.png";
import usersImg from "../assets/users.png";
import paperAirplaneImg from "../assets/paper-airplane.png";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const Home: React.FC = () => {
  useEffect(() => {
    const reviewsSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "LifeCycle Inventory Management Software",
      "description": "Inventory expiration tracking software for small businesses",
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Sarah Wilson" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Since implementing LifeCycle, we've reduced inventory waste by 35% and saved thousands."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Mike Rodriguez" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "The app is so easy business tracking and prevents costly expired inventory."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Lisa Chen" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "The application alerts have transformed how we manage perishable goods. Highly recommend!"
        }
      ],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "3" }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(reviewsSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
    }
  };

  return (
    <div className="home-page overflow-hidden">
      <SEO
        title="Never Let Inventory Expire Again - LifeCycle Expiration Tracking Software"
        description="Never let inventory expire again with LifeCycle's automated expiration date tracking. Perfect for small businesses managing perishable products. Cut waste by up to 40%."
        keywords="never let inventory expire, inventory expiration tracking software, product expiration management, inventory waste reduction, small business inventory system, expiration date tracking, perishable goods management"
        canonical="https://lifecycle.cloud/"
        ogTitle="Never Let Inventory Expire Again - LifeCycle"
        ogDescription="Never let inventory expire again with LifeCycle's automated expiration date tracking. Perfect for small businesses managing perishable products."
        ogImage="https://lifecycle.cloud/package.png"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-primary-50/30 to-white overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 -left-20 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl"
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
            className="absolute top-40 right-20 w-96 h-96 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-3xl"
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
          <motion.div
            className="absolute -bottom-20 left-1/3 w-96 h-96 bg-primary-300/20 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{
              x: [0, 75, 0],
              y: [0, -50, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-5 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="flex flex-col md:flex-row items-center gap-12 md:gap-20"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="flex-1 space-y-8" variants={itemVariants}>
                <motion.div
                  className="inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold border border-primary-200">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
                    Smart Inventory Management
                  </span>
                </motion.div>

                <motion.h1
                  className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] text-gray-900"
                  variants={itemVariants}
                >
                  Never let
                  <br />
                  <span className="text-gradient">inventory</span>
                  <br />
                  expire again.
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl"
                  variants={itemVariants}
                >
                  Monitor product lifecycles and get timely alerts before items expire.
                  Perfect for small businesses managing perishable goods and optimizing inventory.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/contact"
                      className="inline-block bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-primary-700 shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40"
                    >
                      Get Started Free
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/contact"
                      className="inline-block bg-white text-primary-600 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-gray-50 border-2 border-primary-200 hover:border-primary-300"
                    >
                      See How It Works
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-6 pt-4"
                  variants={itemVariants}
                >
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-300 to-primary-500 border-2 border-white"></div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Join 500+ businesses</div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★★★★★</span>
                      <span className="text-sm font-semibold text-gray-700 ml-1">5.0</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex-1 flex justify-center items-center"
                variants={itemVariants}
              >
                <motion.div
                  className="relative"
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-emerald-400/20 rounded-3xl blur-3xl"></div>
                  <img
                    src={checklistImg}
                    alt="Inventory expiration tracking checklist"
                    className="relative max-w-full h-auto max-h-96 md:max-h-[500px] object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Smart Expiration Tracking Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            className="bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-[3rem] p-12 md:p-16 max-w-6xl mx-auto shadow-xl border border-gray-100 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
          >
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-200/30 to-transparent rounded-full blur-3xl"></div>

            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 relative z-10">
              <motion.div
                className="flex-1 space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-block px-4 py-2 bg-primary-100 rounded-full">
                  <span className="text-primary-700 font-bold text-sm">CORE FEATURE</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 leading-tight">
                  Smart expiration tracking
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Keep your inventory fresh and compliant with our advanced expiration tracking system.
                  Get automated alerts before products expire and reduce inventory waste by up to 40%
                  across your business operations.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-4"
                >
                  <Link
                    to="/contact"
                    className="inline-block bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-primary-700 shadow-lg shadow-primary-600/30"
                  >
                    Try for Free
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={nodeTreeImg}
                    alt="Product expiration management system"
                    className="max-w-full h-auto max-h-80 object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            className="text-center mb-20 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Everything you need to
              <br />
              <span className="text-gradient">succeed</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              variants={itemVariants}
            >
              Powerful features designed to help your business thrive
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Security Card */}
            <motion.div
              className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <motion.div
                  className="mb-8"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={secureWebImg}
                    alt="Secure data management"
                    className="h-48 object-contain mx-auto md:mx-0"
                  />
                </motion.div>
                <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
                  Bank-Level Security
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We understand how important data security is to your business.
                  Industry-leading encryption and security measures keep your data
                  protected and accessible only to you.
                </p>
              </div>
            </motion.div>

            {/* Cost Reduction Card */}
            <motion.div
              className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <motion.div
                  className="mb-8"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={lossImg}
                    alt="Reduce waste and save money"
                    className="h-48 object-contain mx-auto md:mx-0"
                  />
                </motion.div>
                <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
                  Slash Costs by 40%
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Stop losing money on expired products. Track expiration dates,
                  optimize inventory rotation, and cut waste. More savings,
                  less stress, better profit margins.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Get Started Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>

        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <motion.div
            className="bg-white rounded-[3rem] p-12 md:p-20 max-w-6xl mx-auto shadow-2xl border border-gray-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
          >
            <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
              {/* Left Side */}
              <motion.div
                className="flex-1 flex flex-col"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="mb-12"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={usersImg}
                    alt="Team collaboration"
                    className="max-w-xs h-auto object-contain"
                  />
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                  Get started with
                  <br />
                  <span className="text-gradient">LifeCycle</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Schedule a consultation and we'll help you set up the
                  perfect solution for your business needs.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/contact"
                    className="inline-block bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-primary-700 shadow-lg shadow-primary-600/30"
                  >
                    Sign Up Now
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Side - Steps */}
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-12">
                  {[
                    {
                      step: "01",
                      title: "Sign Up",
                      description: "Tell us about your business and inventory management needs in just a few minutes."
                    },
                    {
                      step: "02",
                      title: "Consultation",
                      description: "Our team will reach out to schedule a personalised consultation and demo session."
                    },
                    {
                      step: "03",
                      title: "Launch",
                      description: "We'll help you get set up and start optimising your inventory management right away."
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-6 group"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-emerald-500 flex items-center justify-center text-white font-display font-bold text-xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Loved by businesses
              <br />
              <span className="text-gradient">everywhere</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              variants={itemVariants}
            >
              See what our customers have to say
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Since implementing LifeCycle, we've reduced inventory waste by 35% and saved thousands.",
                author: "Sarah Wilson",
                role: "Operations Manager"
              },
              {
                quote: "The app is so easy for business tracking and prevents costly expired inventory.",
                author: "Mike Rodriguez",
                role: "Business Owner"
              },
              {
                quote: "The application alerts have transformed how we manage perishable goods. Highly recommend!",
                author: "Lisa Chen",
                role: "Inventory Director"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="text-primary-400 text-5xl font-serif mb-4">"</div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    <span className="text-yellow-400 text-xl">★★★★★</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary-600 via-primary-500 to-emerald-500 relative overflow-hidden">
        {/* Animated background elements */}
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
              <motion.div
                className="flex-1 text-center md:text-left"
                variants={itemVariants}
              >
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                  Ready to transform
                  <br />
                  your inventory?
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                  Join hundreds of businesses reducing waste and maximizing profits
                </p>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/contact"
                    className="inline-block bg-white text-primary-600 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-gray-50 shadow-2xl hover:shadow-white/20"
                  >
                    Start Free Trial
                  </Link>
                </motion.div>
                <p className="text-white/80 mt-6 text-sm">
                  No credit card required • Free 14-day trial
                </p>
              </motion.div>

              <motion.div
                className="flex-1 flex justify-center"
                variants={itemVariants}
              >
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
                    alt="Get started with LifeCycle"
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

export default Home;
