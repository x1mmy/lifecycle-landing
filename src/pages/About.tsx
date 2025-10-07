import React from "react";
import { Link } from "react-router-dom";
import paperAirplaneImg from "../assets/paper-airplane.png";
import chatBubbleImg from "../assets/chat-bubble.png";

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* About Hero Section */}
      <section className="bg-gray-200 py-20 text-center">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-16">
            About us
          </h1>

          <div className="max-w-4xl mx-auto text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Three students, one frustrating problem, and a solution
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Hi! We're three uni students who got tired of watching food and
              products go to waste at our part-time jobs. Whether it was a cafe
              tossing expired milk or a retail shop scrambling to find batch
              numbers, we kept seeing the same issue: nobody had a simple way to
              track what was about to expire.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              So we decided to build one.
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              LifeCycle started as our own solution to make work easier—for us,
              our managers, and our coworkers. Now we're turning it into
              something that can help small businesses everywhere stop wasting
              inventory and start saving money.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              We're not a big corporate team with decades of experience. We're
              students who work these jobs, understand these problems, and are
              building the tool we wish we'd had from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-200 py-20 text-center">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Our mission
          </h2>
          <p className="text-xl md:text-2xl font-bold text-gray-800 mb-16">
            Stop wasting stuff. It's that simple.
          </p>

          <div className="max-w-4xl mx-auto text-left">
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              We're here to help small businesses track expiration dates without
              the headache. No overcomplicated software, no unnecessary
              features—just a straightforward system that tells you what's about
              to expire so you can actually do something about it.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Whether you're running a cafe, a retail shop, or anything in
              between, we want to make managing inventory less painful and more
              practical. Less waste, less stress, more money staying in your
              pocket.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              That's it. That's the mission.
            </p>
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="bg-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center gap-10">
            <div className="flex-1 pl-10">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
                Let's talk
                <br />
                inventory.
              </h2>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                className="max-w-full max-h-80 object-contain"
                src={chatBubbleImg}
                alt="talk-bubble"
              />
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

export default About;
