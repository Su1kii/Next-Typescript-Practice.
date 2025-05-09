import React from "react";
const ProductDetail = () => {
  return (
    <section className="py-16 bg-gray-100 border-t-8 border-amber-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="https://images.pexels.com/photos/1684026/pexels-photo-1684026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-full md:w-1/2 h-auto object-cover mb-6 md:mb-0"
          />
          <div className="md:ml-6 w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-2">name</h2>
            <p className="text-gray-600 mb-4">description</p>
            <p className="text-primary text-lg mb-2">category</p>
            <p className="text-gray-700 font-bold text-2xl mb-4">5.99</p>
            <div className="flex items-center space-x-4">
              <label htmlFor="quantity" className="text-gray-700">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                className="border border-gray-300 px-3 py-2 rounded-lg w-16 focus:outline-none focus:border-secondary"
              />
              <p className="text-gray-700 font-bold text-xl">Total: $6.99</p>
            </div>
            <button className="mt-6 bg-secondary text-white py-2 px-4 rounded-lg hover:bg-secondary-dark transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
