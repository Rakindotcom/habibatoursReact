import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0d213f] text-[#fafcff]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Brand Description */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Habiba Tours and Travels<span className="text-[darkorange]">.</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Explore your suitable and dream places around the world. Here you can find your right destination.
          </p>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/faqs"
                className="text-sm transition duration-300 hover:text-[darkcyan]"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="text-sm transition duration-300 hover:text-[darkcyan]"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="text-sm transition duration-300 hover:text-[darkcyan]"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-sm transition duration-300 hover:text-[darkcyan]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Address</h4>
          <p className="text-sm mb-2">
            <span className="font-semibold">Address:</span>{' '}
            <span className="bangla">
              ১১ কাজী ভবন, টুকু সরণি (আনন্দরোড), কাফরুল, ঢাকা-১২০৬
            </span>
          </p>
          <p className="text-sm mb-2">
            <span className="font-semibold">Email:</span> habiba.tours24@gmail.com
          </p>
          <p className="text-sm">
            <span className="font-semibold">Phone:</span> 01912-939664
          </p>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="max-w-[1200px] mx-auto px-4 py-4 text-center text-xs border-t border-[#767268] font-mono">
        <a
          href="http://chokrobyte.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[darkorange] transition"
        >
          Developed By - <b>ChokroByte</b>
        </a>
      </div>
    </footer>
  );
};

export default Footer;