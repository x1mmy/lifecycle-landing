import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import questionMarkImg from "../assets/question-mark.png";
import paperAirplaneImg from "../assets/paper-airplane.png";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const Pricing: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does inventory expiration tracking work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LifeCycle automatically tracks product expiration dates and sends alerts before items expire, helping small businesses reduce waste and save money."
          }
        },
        {
          "@type": "Question",
          "name": "What are the benefits of using inventory management software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Benefits include reduced inventory waste (up to 40%), automated expiration alerts, better inventory rotation, cost savings, and improved compliance with food safety regulations."
          }
        },
        {
          "@type": "Question",
          "name": "Is LifeCycle difficult to use for small businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, LifeCycle is designed specifically for small businesses with an intuitive interface that requires minimal training. Most users are up and running within minutes."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get custom pricing for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer custom pricing for larger businesses or those with specific requirements. Contact our sales team to discuss your needs."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a free plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our Free tier lets you track up to 50 products at no cost. No credit card required. Upgrade to Starter or Professional when you need more."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How does inventory expiration tracking work?",
      answer: "LifeCycle automatically tracks product expiration dates and sends alerts before items expire, helping small businesses reduce waste and save money."
    },
    {
      question: "What are the benefits of using inventory management software?",
      answer: "Benefits include reduced inventory waste (up to 40%), automated expiration alerts, better inventory rotation, cost savings, and improved compliance with food safety regulations."
    },
    {
      question: "Is LifeCycle difficult to use for small businesses?",
      answer: "No, LifeCycle is designed specifically for small businesses with an intuitive interface that requires minimal training. Most users are up and running within minutes."
    },
    {
      question: "Can I get custom pricing for my business?",
      answer: "Yes, we offer custom pricing for larger businesses or those with specific requirements. Contact our sales team to discuss your needs."
    },
    {
      question: "Is there a free plan?",
      answer: "Yes, our Free tier lets you track up to 50 products at no cost. No credit card required. Upgrade to Starter or Professional when you need more."
    }
  ];

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
    <div className="pricing-page overflow-hidden">
      <SEO
        title="Pricing - LifeCycle Plans & Features"
        description="Start free with up to 50 products. Starter from $9/month for 500 products with barcode scanning & email alerts. Professional $29/month for 3,000 products, analytics & priority support."
        keywords="expiration tracking pricing, free inventory software, small business inventory pricing, lifecycle pricing plans, stop losing money expired stock"
        canonical="https://lifecycle.cloud/pricing"
        ogTitle="Pricing - LifeCycle | Free, Starter & Professional Plans"
        ogDescription="Start free (50 products). Starter from $9/month (500 products). Professional $29/month (3,000 products, analytics & priority support)."
        ogImage="https://lifecycle.cloud/package.png"
      />

      {/* Pricing Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-white via-primary-50/30 to-white overflow-hidden py-20">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 -left-20 w-72 h-72 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl"
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
            className="absolute top-20 right-10 w-72 h-72 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-3xl"
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

        <div className="max-w-7xl mx-auto px-5 relative z-10 text-center">
          <motion.div
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
                Simple, Transparent Pricing
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6">
              Choose Your <span className="text-gradient">Plan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Simple, transparent pricing tailored to your business needs.
              <br />
              Start free — no credit card required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Free Plan */}
            <motion.div
              className="group bg-white p-8 lg:p-10 rounded-3xl relative border-2 border-gray-100 hover:border-primary-200 transition-all duration-500 hover:shadow-2xl h-full flex flex-col"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-1">
                  Free
                </h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-gray-900">$0</span>
                </div>
                <p className="text-sm text-gray-500 mb-8">
                  Perfect for testing LifeCycle
                </p>

                <div className="flex flex-col gap-3.5 mb-10 flex-1">
                  {[
                    "Up to 50 products",
                    "Type barcode to autofill",
                    "Public API database access (Open Food Facts, PBS)",
                    "Email notifications",
                    "Pre-set categories",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact"
                    className="w-full bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-primary-600 hover:text-white block text-center shadow-sm hover:shadow-lg"
                  >
                    Start Free
                  </Link>
                </motion.div>
                <p className="text-xs text-gray-400 text-center mt-4">
                  No credit card required. Free forever.
                </p>
              </div>
            </motion.div>

            {/* Starter Plan */}
            <motion.div
              className="group bg-gradient-to-br from-primary-600 to-emerald-500 p-8 lg:p-10 rounded-3xl relative border-2 border-primary-600 md:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-600/30 h-full flex flex-col"
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.08 }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-primary-600 px-5 py-1.5 rounded-full text-xs font-bold shadow-lg border border-primary-100 whitespace-nowrap">
                🔥 Most Popular
              </div>

              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="text-2xl font-display font-bold text-white mb-1">Starter</h3>
                <div className="mb-2">
                  <span className="text-lg text-white/80 align-top">From </span>
                  <span className="text-5xl font-bold text-white">$12</span>
                  <span className="text-lg text-white/80">/mo</span>
                </div>
                <p className="text-sm text-white/70 mb-8">
                  For daily operations
                </p>

                <p className="text-xs font-semibold text-white/90 uppercase tracking-wide mb-4">
                  Everything in Free, plus:
                </p>
                <div className="flex flex-col gap-3.5 mb-10 flex-1">
                  {[
                    "Up to 500 products",
                    "25 camera scans a day",
                    "Community database access (products added by other businesses)",
                    "Custom categories",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-white/20 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-sm text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact"
                    className="w-full bg-white text-primary-600 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-gray-50 block text-center shadow-lg"
                  >
                    Get Started
                  </Link>
                </motion.div>
                <p className="text-xs text-white/50 text-center mt-4">
                  Less than your daily coffee
                </p>
              </div>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              className="group bg-white p-8 lg:p-10 rounded-3xl relative border-2 border-gray-100 hover:border-primary-200 transition-all duration-500 hover:shadow-2xl h-full flex flex-col"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-1">
                  Professional
                </h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-gray-900">$29</span>
                  <span className="text-lg text-gray-500">/mo</span>
                </div>
                <p className="text-sm text-gray-500 mb-8">
                  For serious waste reduction
                </p>

                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  Everything in Starter, plus:
                </p>
                <div className="flex flex-col gap-3.5 mb-10 flex-1">
                  {[
                    "Up to 3,000 products",
                    "Unlimited camera scanning",
                    "Priority community database entries (your products appear first)",
                    "Advanced analytics",
                    "Priority support",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact"
                    className="w-full bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-primary-600 hover:text-white block text-center shadow-sm hover:shadow-lg"
                  >
                    Get Started
                  </Link>
                </motion.div>
                <p className="text-xs text-gray-400 text-center mt-4">
                  Save hundreds in waste every month
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mb-8"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img
                className="w-32 h-32 mx-auto drop-shadow-lg"
                src={questionMarkImg}
                alt="Frequently asked questions"
              />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about LifeCycle
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200 last:border-b-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <motion.button
                  className="w-full py-8 text-left text-lg font-bold text-gray-900 flex justify-between items-center group"
                  onClick={() => toggleFaq(index)}
                  whileHover={{ x: 4 }}
                >
                  <span className="pr-8">{faq.question}</span>
                  <motion.span
                    className="text-primary-600 text-2xl flex-shrink-0"
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </motion.button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 text-gray-600 leading-relaxed text-lg">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
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
                  Ready to get started?
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
                    Start Free
                  </Link>
                </motion.div>
                <p className="text-white/80 mt-6 text-sm">
                  Free tier available — no credit card required
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
                    alt="Start your inventory management subscription"
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

export default Pricing;
