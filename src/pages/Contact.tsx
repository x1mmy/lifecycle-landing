import React, { useState } from "react";
import usersImg from "../assets/users.png";
import SEO from "../components/SEO";

const Contact: React.FC = () => {
  // State to store form data - holds the user's input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to track submission status - shows loading/success/error messages
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Updates form data when user types in any field
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validates email format using a regular expression
  const isValidEmail = (email: string): boolean => {
    // Regular expression to check for valid email format
    // Checks for: text@text.text (with various allowed characters)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handles form submission to Airtable
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page reload
    setSubmitStatus("loading"); // Shows loading state
    setErrorMessage(""); // Clears any previous errors

    // Additional email validation before sending to Airtable
    if (!isValidEmail(formData.email)) {
      setSubmitStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return; // Stop the submission
    }

    // Validate that all fields are filled
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus("error");
      setErrorMessage("Please fill in all fields.");
      return; // Stop the submission
    }

    try {
      // Get environment variables
      // These are stored in your .env file and start with VITE_
      const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
      const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
      const TABLE_NAME =
        import.meta.env.VITE_AIRTABLE_TABLE_NAME || "Contact Forms";

      // Check if environment variables are set
      if (!AIRTABLE_TOKEN || !BASE_ID) {
        throw new Error(
          "Airtable credentials not found. Please check your .env file."
        );
      }

      // Send data to Airtable API
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
                  Status: "New", // Automatically set status to "New"
                },
              },
            ],
          }),
        }
      );

      // Check if the request was successful
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "Failed to submit form");
      }

      // If successful, show success message
      setSubmitStatus("success");

      // Clear the form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      // Handle any errors that occur during submission
      console.error("Error submitting form:", error);
      setSubmitStatus("error");

      // Show user-friendly error message
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="contact-page">
      <SEO 
        title="Contact LifeCycle - Inventory Management Support & Sales"
        description="Get in touch with LifeCycle's inventory management experts. Contact us for support, sales inquiries, or to schedule a demo of our expiration tracking software."
        keywords="contact lifecycle, inventory management support, expiration tracking software demo, small business inventory help"
        canonical="https://lifecycle.cloud/contact"
        ogTitle="Contact LifeCycle - Inventory Management Support"
        ogDescription="Get in touch with LifeCycle's inventory management experts. Contact us for support, sales inquiries, or to schedule a demo."
        ogImage="https://lifecycle.cloud/package.png"
      />
      {/* Contact Section */}
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
            <div className="flex-1 flex justify-center order-2 md:order-1">
              <img
                src={usersImg}
                alt="Contact LifeCycle team for inventory management consultation and support"
                className="max-w-full max-h-48 md:max-h-80 object-contain"
              />
            </div>
            <div className="flex-1 order-1 md:order-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 text-center md:text-left">
                Contact Us
              </h1>
              <p className="text-lg text-gray-800 mb-10 leading-relaxed text-center md:text-left">
                Explore the future with us.
                <br />
                Feel free to get in touch.
              </p>

              {/* Success Message - shown when form is submitted successfully */}
              {submitStatus === "success" ? (
                <div className="p-8 md:p-12 bg-green-500 text-white rounded-2xl text-center min-h-60 md:min-h-80 flex flex-col justify-center items-center gap-4 md:gap-6">
                  <div className="text-4xl md:text-6xl">✓</div>
                  <h2 className="text-2xl md:text-3xl font-bold m-0">
                    Thank You!
                  </h2>
                  <p className="text-base md:text-lg m-0 leading-relaxed">
                    Your message has been sent successfully.
                    <br />
                    We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-4 px-6 md:px-8 py-3 bg-white text-green-500 border-none rounded-lg text-base font-semibold cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  {/* Error Message - shown if something goes wrong */}
                  {submitStatus === "error" && (
                    <div className="p-4 mb-6 bg-red-500 text-white rounded-lg text-center">
                      ✗ {errorMessage}
                    </div>
                  )}

                  <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-base font-semibold text-gray-800"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="p-4 border-2 border-gray-200 rounded-lg text-base font-inherit transition-colors duration-300 focus:outline-none focus:border-primary-600"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={submitStatus === "loading"}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-base font-semibold text-gray-800"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="p-4 border-2 border-gray-200 rounded-lg text-base font-inherit transition-colors duration-300 focus:outline-none focus:border-primary-600"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={submitStatus === "loading"}
                        pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                        title="Please enter a valid email address (e.g., name@example.com)"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="message"
                        className="text-base font-semibold text-gray-800"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="p-4 border-2 border-gray-200 rounded-lg text-base font-inherit transition-colors duration-300 focus:outline-none focus:border-primary-600 resize-y min-h-32"
                        placeholder="How can we get better?"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        disabled={submitStatus === "loading"}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="mt-4 p-4 bg-primary-600 text-white border-none rounded-lg font-semibold transition-all duration-300 hover:bg-primary-700 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={submitStatus === "loading"}
                    >
                      {submitStatus === "loading"
                        ? "Sending..."
                        : "Send message"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
