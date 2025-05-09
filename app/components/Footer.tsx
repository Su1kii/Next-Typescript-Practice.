import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-amber-50 text-white py-12 border-t-8 border-amber-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">About Us</h3>
            <p className="text-gray-900 mt-2">
              Let those wings fly and explore what you want. You name it, we got
              it!
            </p>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-900 hover:text-amber-600">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:3000/product/123213"
                  className="text-gray-900 hover:text-amber-600"
                >
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-amber-600">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="#">
                <FaFacebook color="#3b5998" size={24} />
              </a>
              <a href="#">
                <FaInstagram color="#e4405f" size={24} />
              </a>
              <a href="#">
                <FaGithub color="black" size={24} />
              </a>
              <a href="#">
                <FaLinkedin color="#0077b5" size={24} />
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Contact Us
            </h3>
            <p className="text-gray-900">Email: info@yourwebsite.com</p>
            <p className="text-gray-900">Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-900">ALL Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
