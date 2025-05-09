import React from "react";

const GallerySection = () => {
  const galleryImages = [
    "https://images.pexels.com/photos/1908647/pexels-photo-1908647.jpeg?cs=srgb&dl=pexels-gantas-1908647.jpg&fm=jpg",
    "https://images.unsplash.com/photo-1549221360-456a9c197d5b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVuZ2VlJTIwanVtcHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1604748954134-457791b2ce9b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdW50YWluJTIwYmlrZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://wallpapercat.com/w/full/f/2/e/739274-2048x1213-desktop-hd-hiking-background-image.jpg",
    "https://images.unsplash.com/photo-1502224562085-639556652f33?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVufGVufDB8fDB8fHww",
    "https://images.pexels.com/photos/1168742/pexels-photo-1168742.jpeg?cs=srgb&dl=pexels-jacub-gomez-447561-1168742.jpg&fm=jpg",
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4x1 font-light text-center mb-8">
          Gallery section
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
