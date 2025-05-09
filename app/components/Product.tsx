import React from "react";
import ProductCard from "./ProductCard";
const products = [
  {
    image:
      "https://www.apple.com/v/macbook-pro-14-and-16/a/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png",
    name: "Ultrabook Pro 14",
    description: "Lightweight and powerful laptop with 16GB RAM and 512GB SSD.",
    category: "Electronics",
    price: 1299.99,
  },
  {
    image:
      "https://kreafunk.com/cdn/shop/files/OrionPerspectiveKFJD89IvorySand_1080x.jpg?v=1739385525",
    name: "Noise Cancelling Headphones",
    description:
      "Over-ear headphones with active noise cancellation and deep bass.",
    category: "Audio",
    price: 199.99,
  },
  {
    image:
      "https://aviation.travelpro.com/cdn/shop/products/405205801.jpg?v=1621532312",
    name: "TravelPro Backpack",
    description:
      "Durable and water-resistant backpack ideal for travel and work.",
    category: "Accessories",
    price: 79.99,
  },
  {
    image: "https://i.ebayimg.com/images/g/W~gAAOSw-h9mSvny/s-l1200.jpg",
    name: "FitSmart Watch 3",
    description:
      "Fitness tracking smartwatch with heart rate and GPS features.",
    category: "Wearables",
    price: 149.99,
  },
  {
    image:
      "https://www.thesourcebulkfoods.ca/wp-content/uploads/2020/02/600001_UK-Coffee-Beans.jpg",
    name: "Colombian Dark Roast Coffee",
    description: "Rich, full-bodied coffee with chocolatey undertones.",
    category: "Groceries",
    price: 14.99,
  },
  {
    image:
      "https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-master-us/default/dwe5df11ef/images/large/spb10ch_sd_silo.jpg?sw=1200&sh=1200&sm=fit",
    name: "PowerBlend 600",
    description: "High-performance blender perfect for smoothies and soups.",
    category: "Kitchen",
    price: 89.99,
  },
];

const Product = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-light text-center mb-8">
          Product Section
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
