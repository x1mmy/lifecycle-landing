import React, { useState } from "react";
import questionMarkImg from "../assets/question-mark.png";
import paperAirplaneImg from "../assets/paper-airplane.png";
import { Link } from "react-router-dom";

const Pricing: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    "How does this work?",
    "What are the benefits?",
    "Is it difficult to use?",
    "Can I have custom pricing?",
    "Is there trial version available?",
    "Where do I sign up?",
  ];

  return (
    <div className="pricing-page">
      {/* Pricing Hero Section */}
      <section className="bg-gray-200 py-20 text-center">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Pricing
          </h1>
          <p className="text-lg text-black leading-relaxed">
            Pricing tailored to your business size and
            <br />
            needs. Launch pricing coming soon.
          </p>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-gray-50 p-8 md:p-10 rounded-2xl text-center relative border-2 border-transparent transition-all duration-300">
              <div className="plan-header">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Starter
                </h3>
                <div className="mb-4">
                  <span className="text-2xl text-gray-800 align-top">$</span>
                  <span className="text-5xl font-bold text-gray-800">9</span>
                  <span className="text-base text-gray-800">/month</span>
                </div>
                <p className="text-base text-gray-800 mb-8 leading-relaxed">
                  For individuals and small
                  <br />
                  teams
                </p>
              </div>
              <Link
                to="/contact"
                className="w-full bg-transparent text-gray-800 border-2 border-gray-800 px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800 hover:text-white block"
              >
                Get Started with Basic
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-gray-50 p-8 md:p-10 rounded-2xl text-center relative border-2 border-primary-600 transform scale-105 transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-2 rounded-full text-xs font-semibold">
                Most Popular
              </div>
              <div className="plan-header">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Pro</h3>
                <div className="mb-4">
                  <span className="text-2xl text-gray-800 align-top">$</span>
                  <span className="text-5xl font-bold text-gray-800">19</span>
                  <span className="text-base text-gray-800">/month</span>
                </div>
                <p className="text-base text-gray-800 mb-8 leading-relaxed">
                  For startups and growing
                  <br />
                  businesses
                </p>
              </div>
              <Link
                to="/contact"
                className="w-full bg-primary-600 text-white border-none px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-700 hover:-translate-y-0.5 block"
              >
                Get Started with Pro
              </Link>
            </div>

            {/* Business Plan */}
            <div className="bg-gray-50 p-8 md:p-10 rounded-2xl text-center relative border-2 border-transparent transition-all duration-300">
              <div className="plan-header">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Business
                </h3>
                <div className="mb-4">
                  <span className="text-2xl text-gray-800 align-top">$</span>
                  <span className="text-5xl font-bold text-gray-800">99</span>
                  <span className="text-base text-gray-800">/month</span>
                </div>
                <p className="text-base text-gray-800 mb-8 leading-relaxed">
                  For organizations with
                  <br />
                  advanced needs
                </p>
              </div>
              <Link
                to="/contact"
                className="w-full bg-transparent text-gray-800 border-2 border-gray-800 px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800 hover:text-white block"
              >
                Get Started with Business
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Features Section */}
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-15">
            Compare Features
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Basic
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-800">
                      Track up to 100 products
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-800">Expiration alerts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-800">Email notifications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-800">Performance Metrics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-800">Basic reporting</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Pro
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-800">
                      Track up to 1,000 products
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-800">Advanced alerts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-800">Team collaboration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-800">Custom categories</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-800">Priority support</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Business
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-800">Unlimited products</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-800">Task Management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-800">API access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-800">Custom integrations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-gray-800">Dedicated support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-200 py-20 text-center">
        <div className="max-w-7xl mx-auto px-5">
          <div className="mb-8">
            <img
              className="w-50 h-50 mx-auto"
              src={questionMarkImg}
              alt="question-mark"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-15">
            Frequently asked
            <br />
            questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  className="w-full py-6 text-left text-lg font-semibold text-gray-800 flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  {faq}
                  <span
                    className={`transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {openFaq === index && (
                  <div className="pb-6 text-gray-800 leading-relaxed">
                    <p>
                      This is a placeholder answer for the FAQ question. The
                      actual content would be provided based on your specific
                      requirements.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-white rounded-2xl p-8 md:p-10 max-w-6xl mx-auto shadow-lg">
            <div className="flex items-center gap-20">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Get started with
                  <br />
                  LifeCycle today
                </h2>
                <p className="text-lg text-gray-800 mb-8">
                  Start reducing waste today
                </p>
                <Link
                  to="/contact"
                  className="bg-primary-600 text-white border-none px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-700 hover:-translate-y-0.5"
                >
                  Sign up now
                </Link>
              </div>
              <div className="flex-1 flex justify-center items-center overflow-hidden">
                <img
                  src={paperAirplaneImg}
                  alt="paper-plane"
                  className="max-w-full max-h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
