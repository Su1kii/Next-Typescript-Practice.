import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 border-t-8 border-amber-700">
      <div className="contaner mx-auto py-16 px-4">
        <h1 className="text-3x1 md:text-4xl text-center font-bold mb-8">
          About Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.pexels.com/photos/71104/utah-mountain-biking-bike-biking-71104.jpeg?cs=srgb&dl=pexels-pixabay-71104.jpg&fm=jpg"
              alt="About us"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="text-gray-800">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              {" "}
              Welcome to Fly Free
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque sunt, totam, itaque autem minus et corrupti dolores
              voluptatum fugit iste maiores, molestiae quibusdam recusandae
              voluptatibus aliquam quaerat dignissimos veniam. Minima.
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              veniam quia unde corporis accusamus commodi magni ipsa, ut
              obcaecati molestias sit, dolor non magnam minima recusandae ullam
              animi? Nobis, perferendis.
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              voluptates et error laboriosam. Optio magni deleniti, labore
              voluptatum illum officia placeat totam voluptatem quisquam ratione
              tenetur cupiditate, dolore maiores reprehenderit!
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque sunt, totam, itaque autem minus et corrupti dolores
              voluptatum fugit iste maiores, molestiae quibusdam recusandae
              voluptatibus aliquam quaerat dignissimos veniam. Minima.
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              veniam quia unde corporis accusamus commodi magni ipsa, ut
              obcaecati molestias sit, dolor non magnam minima recusandae ullam
              animi? Nobis, perferendis.
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              voluptates et error laboriosam. Optio magni deleniti, labore
              voluptatum illum officia placeat totam voluptatem quisquam ratione
              tenetur cupiditate, dolore maiores reprehenderit!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
