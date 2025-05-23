import React from "react";

const Contact = () => {
  return (
    <section className="py-16 bg-gray-100 border-t-8 border-amber-700">
      <div className="container mx-auto px-4">
        <h2 className="text-gray-600 text-3xl md:text-4xl font-bold text-center mb-8">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              Have any questions or feedback? Reach out to us using the form
              below.
            </p>
            <form className="space-y-4">
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-secondary"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-secondary"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="message" className="text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-secondary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
            <p className="text-gray-600 mb-6">
              Come by our store and say hello! We&apos;re located at:
            </p>
            <address className="text-gray-600">
              123 Shoe Street,
              <br />
              Footwear City,
              <br />
              ShoeLand, 12345
            </address>
            <h3 className="text-xl font-semibold mt-8 mb-4">Reach Out</h3>
            <p className="text-gray-600 mb-6">
              For more information, you can also contact us via email or phone:
            </p>
            <p className="text-gray-600">
              Email: info@shoestore.com
              <br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
