import React from "react";
import checklistImg from "../assets/checklist.png";
import nodeTreeImg from "../assets/node-tree.png";
import secureWebImg from "../assets/secure-web.png";
import lossImg from "../assets/loss.png";
import usersImg from "../assets/users.png";
import paperAirplaneImg from "../assets/paper-airplane.png";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-white rounded-2xl p-8 md:p-10 max-w-6xl mx-auto">
            <div className="flex items-center gap-20">
              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-800 mb-6">
                  Never let
                  <br />
                  inventory
                  <br />
                  expire again
                </h1>
                <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                  Monitor product lifecycles and get timely alerts before
                  <br />
                  items expire. Perfect for small businesses managing
                  <br />
                  perishable goods.
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/contact"
                    className="bg-primary-600 text-white border-none px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-700 hover:-translate-y-0.5"
                  >
                    Get started
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-transparent text-primary-600 border-2 border-primary-600 px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-600 hover:text-white"
                  >
                    See how it works
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex justify-center items-center overflow-hidden">
                <div className="relative w-80 h-96">
                  <img
                    src={checklistImg}
                    alt="checklist"
                    className="max-w-full max-h-80 object-contain"
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
            <div className="flex items-center gap-20">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Smart expiration tracking
                </h2>
                <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                  Keep your inventory fresh and
                  <br />
                  compliant. Get automated alerts before
                  <br />
                  products expire and reduce waste
                  <br />
                  across your business.
                </p>
                <Link
                  to="/contact"
                  className="bg-primary-600 text-white border-none px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-700 hover:-translate-y-0.5"
                >
                  Try for free
                </Link>
              </div>
              <div className="flex-1 flex justify-center items-center overflow-hidden">
                <img
                  src={nodeTreeImg}
                  alt="node tree"
                  className="max-w-full max-h-80 object-contain"
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
            <div className="flex items-center gap-20">
              <div className="flex-1 flex justify-center items-center overflow-hidden">
                <img
                  src={secureWebImg}
                  alt="security"
                  className="max-w-full max-h-80 object-contain"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  All your work is safe with us
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
            <div className="flex items-center gap-20">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Reduce waste, save money
                </h2>
                <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                  Stop losing money on expired products. LifeCycle helps you
                  track expiration dates, optimise inventory rotation, and cut
                  waste by up to 40%. More savings, less stress.
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
                  alt="waste"
                  className="max-w-full max-h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started Section */}
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-white rounded-2xl p-12 md:p-16 max-w-6xl mx-auto shadow-lg">
            <div className="flex items-start gap-24">
              {/* LEFT SIDE: Image at top, then title/description/button below */}
              <div className="flex-1 flex flex-col items-start">
                {/* User spheres image */}
                <div className="w-full flex justify-start mb-10">
                  <img
                    src={usersImg}
                    alt="users"
                    className="max-w-xs max-h-80 object-contain"
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
              <div className="flex-1 flex items-center pt-10">
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
      <section className="py-20 text-center">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Testimonials
            </h2>
            <p className="text-lg text-gray-800 mb-15">
              People who think we do our job well for your brand
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-xl text-left">
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
              <div className="bg-gray-50 p-8 rounded-xl text-left">
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
              <div className="bg-gray-50 p-8 rounded-xl text-left">
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

export default Home;
