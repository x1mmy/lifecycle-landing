import React, { useState } from "react";
import { motion } from "framer-motion";
import usersImg from "../assets/users.png";
import SEO from "../components/SEO";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");
    setErrorMessage("");

    if (!isValidEmail(formData.email)) {
      setSubmitStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus("error");
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
      const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
      const TABLE_NAME =
        import.meta.env.VITE_AIRTABLE_TABLE_NAME || "Contact Forms";

      if (!AIRTABLE_TOKEN || !BASE_ID) {
        throw new Error(
          "Airtable credentials not found. Please check your .env file."
        );
      }

      const response = await fetch(
        `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(
          TABLE_NAME
        )}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${AIRTABLE_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            records: [
              {
                fields: {
                  Name: formData.name,
                  Email: formData.email,
                  Message: formData.message,
                  Status: "New",
                },
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "Failed to submit form");
      }

      setSubmitStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");

      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <div className="contact-page overflow-hidden">
      <SEO
        title="Contact LifeCycle - Inventory Management Support & Sales"
        description="Get in touch with LifeCycle's inventory management experts. Contact us for support, sales inquiries, or to schedule a demo of our expiration tracking software."
        keywords="contact lifecycle, inventory management support, expiration tracking software demo, small business inventory help"
        canonical="https://lifecycle.cloud/contact"
        ogTitle="Contact LifeCycle - Inventory Management Support"
        ogDescription="Get in touch with LifeCycle's inventory management experts. Contact us for support, sales inquiries, or to schedule a demo."
        ogImage="https://lifecycle.cloud/package.png"
      />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-white via-primary-50/30 to-white overflow-hidden py-20">
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
                Get In Touch
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Explore the future with us. Feel free to get in touch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-16 md:gap-20 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Image */}
            <motion.div
              className="flex-1 flex justify-center order-2 md:order-1"
              variants={itemVariants}
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  src={usersImg}
                  alt="Contact LifeCycle team"
                  className="max-w-full h-auto max-h-96 object-contain drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div className="flex-1 order-1 md:order-2 w-full" variants={itemVariants}>
              {submitStatus === "success" ? (
                <motion.div
                  className="bg-gradient-to-br from-primary-500 to-emerald-500 text-white rounded-3xl p-12 text-center shadow-2xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="text-6xl mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    ✓
                  </motion.div>
                  <h2 className="text-3xl font-display font-bold mb-4">
                    Thank You!
                  </h2>
                  <p className="text-lg mb-8 text-white/90 leading-relaxed">
                    Your message has been sent successfully.
                    <br />
                    We'll get back to you as soon as possible.
                  </p>
                  <motion.button
                    onClick={() => setSubmitStatus("idle")}
                    className="px-8 py-4 bg-white text-primary-600 rounded-xl font-bold cursor-pointer transition-all duration-300 hover:bg-gray-50 shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 md:p-12 shadow-xl border border-gray-100">
                  {submitStatus === "error" && (
                    <motion.div
                      className="p-4 mb-6 bg-red-500 text-white rounded-xl text-center font-semibold"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      ✗ {errorMessage}
                    </motion.div>
                  )}

                  <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <motion.div
                      className="flex flex-col gap-2"
                      variants={itemVariants}
                    >
                      <label
                        htmlFor="name"
                        className="text-base font-bold text-gray-900"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="p-4 border-2 border-gray-200 rounded-xl text-base font-inherit transition-all duration-300 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-200 bg-white"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={submitStatus === "loading"}
                      />
                    </motion.div>

                    <motion.div
                      className="flex flex-col gap-2"
                      variants={itemVariants}
                    >
                      <label
                        htmlFor="email"
                        className="text-base font-bold text-gray-900"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="p-4 border-2 border-gray-200 rounded-xl text-base font-inherit transition-all duration-300 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-200 bg-white"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={submitStatus === "loading"}
                        pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                        title="Please enter a valid email address"
                      />
                    </motion.div>

                    <motion.div
                      className="flex flex-col gap-2"
                      variants={itemVariants}
                    >
                      <label
                        htmlFor="message"
                        className="text-base font-bold text-gray-900"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="p-4 border-2 border-gray-200 rounded-xl text-base font-inherit transition-all duration-300 focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-200 resize-y min-h-40 bg-white"
                        placeholder="Tell us how we can help..."
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        disabled={submitStatus === "loading"}
                      ></textarea>
                    </motion.div>

                    <motion.button
                      type="submit"
                      className="mt-4 p-4 bg-primary-600 text-white rounded-xl font-bold transition-all duration-300 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40"
                      disabled={submitStatus === "loading"}
                      whileHover={submitStatus !== "loading" ? { scale: 1.02, y: -2 } : {}}
                      whileTap={submitStatus !== "loading" ? { scale: 0.98 } : {}}
                      variants={itemVariants}
                    >
                      {submitStatus === "loading" ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="inline-block"
                          >
                            ⟳
                          </motion.span>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </motion.button>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="max-w-7xl mx-auto px-5">
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Other Ways to <span className="text-gradient">Connect</span>
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
                icon: "📧",
                title: "Email Us",
                description: "team@lifecycle.cloud",
                detail: "We typically respond within 24 hours"
              },
              {
                icon: "💬",
                title: "Live Chat",
                description: "Coming Soon",
                detail: "Real-time support for urgent questions"
              },
              {
                icon: "📞",
                title: "Schedule a Call",
                description: "Book a Demo",
                detail: "Get a personalized walkthrough"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <motion.div
                    className="text-6xl mb-6"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-lg text-primary-600 font-semibold mb-2">
                    {item.description}
                  </p>
                  <p className="text-sm text-gray-600">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
