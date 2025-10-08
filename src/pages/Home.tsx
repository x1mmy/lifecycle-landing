import React, { useEffect } from "react";
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
    // Add structured data for reviews/testimonials
    const reviewsSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "LifeCycle Inventory Management Software",
      "description": "Inventory expiration tracking software for small businesses",
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sarah Wilson"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Since implementing LifeCycle, we've reduced inventory waste by 35% and saved thousands."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Mike Rodriguez"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "The app is so easy business tracking and prevents costly expired inventory."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Lisa Chen"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "The application alerts have transformed how we manage perishable goods. Highly recommend!"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "3"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(reviewsSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="home-page">
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
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-800 mb-6">
                  Never let
                  <br />
                  inventory
                  <br />
                  expire again.
                </h1>
                <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                  Monitor product lifecycles and get timely alerts before
                  <br />
                  items expire. Perfect for small 
                  businesses managing 
                  <br />
                  perishable goods, reducing waste, and optimizing inventory management.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-primary-600 text-white border-none px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-700 hover:-translate-y-0.5"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-transparent text-primary-600 border-2 border-primary-600 px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-600 hover:text-white"
                  >
                    See how it works
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex justify-center items-center overflow-hidden mt-8 md:mt-0">
                <div className="relative w-40 h-48 sm:w-48 sm:h-56 md:w-64 md:h-72 lg:w-80 lg:h-96">
                  <img
                    src={checklistImg}
                    alt="Inventory expiration tracking checklist for small business management"
                    className="max-w-full max-h-48 sm:max-h-64 md:max-h-80 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Expiration Tracking Section */}
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-white rounded-2xl p-8 md:p-10 max-w-6xl mx-auto shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Smart expiration tracking
                </h2>
                <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                  Keep your inventory fresh and compliant with our advanced expiration tracking system.
                  Get automated alerts before products expire and reduce inventory waste by up to 40%
                  across your business operations.
                </p>
                <Link
                  to="/contact"
                  className="bg-primary-600 text-white border-none px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-700 hover:-translate-y-0.5"
                >
                  Try for free
                </Link>
              </div>
              <div className="flex-1 flex justify-center items-center overflow-hidden mt-8 md:mt-0">
                <img
                  src={nodeTreeImg}
                  alt="Product expiration management system workflow diagram"
                  className="max-w-full max-h-48 sm:max-h-64 md:max-h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
              <div className="flex-1 flex justify-center items-center overflow-hidden">
                  <img
                    src={secureWebImg}
                    alt="Secure cloud-based inventory data management and protection"
                    className="max-w-full max-h-48 sm:max-h-64 md:max-h-80 object-contain"
                  />
              </div>
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Secure Inventory Data Management
                </h2>
                <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                  We understand how important data and
                  <br />
                  information security is to you and your business.
                  <br />
                  That's why we've implemented industry-leading
                  <br />
                  security measures to keep your data protected
                  <br />
                  and accessible only to you.
                </p>
                <Link
                  to="/contact"
                  className="bg-transparent text-gray-800 border-2 border-gray-800 px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800 hover:text-white"
                >
                  Try now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reduce cost Section */}
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Reduce Inventory Waste, Save Money
                </h2>
                <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                  Stop losing money on expired products with our inventory expiration tracking software.
                  LifeCycle helps small businesses track expiration dates, optimise inventory rotation,
                  and cut waste by up to 40%. More savings, less stress, better profit margins.
                </p>
                <Link
                  to="/contact"
                  className="bg-transparent text-gray-800 border-2 border-gray-800 px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800 hover:text-white"
                >
                  Try now
                </Link>
              </div>
              <div className="flex-1 flex justify-center items-center overflow-hidden">
                <img
                  src={lossImg}
                  alt="Reduce inventory waste and save money with expiration tracking"
                  className="max-w-full max-h-48 sm:max-h-64 md:max-h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started Section */}
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-white rounded-2xl p-8 md:p-16 max-w-6xl mx-auto shadow-lg">
            <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-24">
              {/* LEFT SIDE: Image at top, then title/description/button below */}
              <div className="flex-1 flex flex-col items-start">
                {/* User spheres image */}
                <div className="w-full flex justify-start mb-10">
                  <img
                    src={usersImg}
                    alt="Small business team collaboration for inventory management"
                    className="max-w-xs max-h-48 sm:max-h-64 md:max-h-80 object-contain"
                  />
                </div>

                {/* Text content below image */}
                <div className="text-left w-full">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5 leading-tight">
                    How to get started with LifeCycle
                  </h2>
                  <p className="text-base text-gray-600 leading-relaxed mb-8">
                    Schedule a consultation and we'll help you set up the
                    perfect solution for your business.
                  </p>
                  <Link
                    to="/contact"
                    className="bg-primary-600 text-white border-none px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-700 hover:-translate-y-0.5"
                  >
                    Sign up now
                  </Link>
                </div>
              </div>

              {/* RIGHT SIDE: The 3 Steps */}
              <div className="flex-1 flex items-center pt-0 lg:pt-10 mt-10 lg:mt-0">
                <div className="w-full">
                  <div className="pb-10 mb-10 border-b border-gray-200">
                    <div className="text-3xl font-bold text-gray-800 mb-3">
                      Step 1
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Sign up and tell us about your
                      <br />
                      business and inventory management
                      <br />
                      needs.
                    </p>
                  </div>
                  <div className="pb-10 mb-10 border-b border-gray-200">
                    <div className="text-3xl font-bold text-gray-800 mb-3">
                      Step 2
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Our team will reach out to schedule a<br />
                      personalised consultation and demo.
                    </p>
                  </div>
                  <div className="pb-0 mb-0">
                    <div className="text-3xl font-bold text-gray-800 mb-3">
                      Step 3
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed">
                      We'll help you get set up and start
                      <br />
                      optimising your inventory
                      <br />
                      management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-200 py-20 text-center">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Testimonials
            </h2>
            <p className="text-lg text-gray-800 mb-16">
              People who think we do our job well for your brand
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl text-left shadow-lg">
                <div className="text-base text-gray-800 leading-relaxed mb-6">
                  <strong>Since implementing </strong>
                  LifeCycle, we've reduced inventory waste by 35% and saved
                  thousands.
                </div>
                <div className="mb-4">
                  <div className="text-yellow-400 text-lg">★★★★★</div>
                </div>
                <div className="font-semibold text-gray-800">Sarah Wilson</div>
              </div>
              <div className="bg-white p-8 rounded-xl text-left shadow-lg">
                <div className="text-base text-gray-800 leading-relaxed mb-6">
                  <strong>The app </strong>
                  is so easy business tracking and prevents costly expired
                  inventory.
                </div>
                <div className="mb-4">
                  <div className="text-yellow-400 text-lg">★★★★★</div>
                </div>
                <div className="font-semibold text-gray-800">
                  Mike Rodriguez
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl text-left shadow-lg">
                <div className="text-base text-gray-800 leading-relaxed mb-6">
                  <strong>The application alerts </strong>
                  have transformed how we manage perishable goods. Highly
                  recommend!
                </div>
                <div className="mb-4">
                  <div className="text-yellow-400 text-lg">★★★★★</div>
                </div>
                <div className="font-semibold text-gray-800">Lisa Chen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-white rounded-2xl p-8 md:p-10 max-w-6xl mx-auto shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  Get started with
                  <br />
                  LifeCycle today
                </h2>
                <p className="text-lg text-gray-800 mb-8">
                  Start reducing waste today
                </p>
                <Link
                  to="/contact"
                  className="bg-primary-600 text-white border-none px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-700 hover:-translate-y-0.5 inline-block"
                >
                  Sign up now
                </Link>
              </div>
              <div className="flex-1 flex justify-center items-center overflow-hidden mt-8 md:mt-0">
                <img
                  src={paperAirplaneImg}
                  alt="Get started with LifeCycle inventory tracking software today"
                  className="max-w-full max-h-48 md:max-h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
