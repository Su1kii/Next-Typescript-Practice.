import React from "react";

const TestimonialSection = () => {
  type Testimonial = {
    image: string;
    name: string;
    text: string;
  };

  const testimonials: Testimonial[] = [
    {
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Jane Doe",
      text: "This service completely exceeded my expectations. Highly recommended!",
    },
    {
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "John Smith",
      text: "Very professional and easy to work with. The results speak for themselves.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Emily Johnson",
      text: "I was impressed with the attention to detail and timely delivery.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      name: "Michael Brown",
      text: "Fantastic experience from start to finish. Will work with them again!",
    },
    {
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      name: "Sarah Williams",
      text: "Clear communication, great design sense, and top-notch results.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      name: "David Miller",
      text: "A game-changer for my business. Couldn't be happier with the outcome!",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-light text-center mb-8">
          Testimonies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 object-cover rounded-full mr-4"
                />
                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
