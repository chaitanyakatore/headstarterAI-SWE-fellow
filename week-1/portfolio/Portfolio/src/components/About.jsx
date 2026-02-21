import React from "react";
import { motion } from "framer-motion";

// Import images

import about2 from "../assets/about2.jpeg";
import about3 from "../assets/about3.jpeg";
import about4 from "../assets/about4.jpeg";
import about5 from "../assets/about5.jpeg";
import about6 from "../assets/about6.jpeg";

const ScrollingSection = ({ title, items, type }) => {
  return (
    <div className="py-12">
      <h3 className="text-2xl font-light mb-8 px-4 sm:px-6">
        {title} <span className="text-red-600">→</span>
      </h3>
      
      <div className="relative overflow-hidden">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex gap-6 whitespace-nowrap"
        >
          {/* Duplicate items for seamless loop */}
          {[...items, ...items].map((item, index) => (
            <motion.div
              key={index}
              className="shrink-0"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {type === 'blog' && (
                <div className="w-[300px] bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-red-600 mb-2">{item.date}</p>
                  <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                  <a href={item.link} className="text-sm text-red-600 mt-4 inline-block hover:underline">
                    Read More →
                  </a>
                </div>
              )}
              
              {type === 'book' && (
                <div className="w-[250px] bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <img src={item.cover} alt={item.title} className="w-full h-[200px] object-cover rounded-lg mb-4" />
                  <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{item.author}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`w-4 h-4 ${i < item.rating ? 'text-yellow-400' : 'text-gray-200'}`}>★</span>
                    ))}
                  </div>
                </div>
              )}
              
              {type === 'travel' && (
                <div className="w-[350px] relative group">
                  <img src={item.image} alt={item.place} className="w-full h-[250px] object-cover rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h4 className="text-xl font-medium mb-1">{item.place}</h4>
                    <p className="text-sm opacity-90">{item.country}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const About = () => {
  const blogs = [
    {
      title: "The Future of Web Development",
      date: "March 15, 2024",
      description: "Exploring the latest trends in web development and what's coming next in the world of technology.",
      link: "#"
    },
    {
      title: "Building Scalable Applications",
      date: "March 1, 2024",
      description: "Best practices and patterns for creating maintainable and scalable web applications.",
      link: "#"
    },
    {
      title: "UI/UX Design Principles",
      date: "February 20, 2024",
      description: "Essential design principles every developer should know for creating better user experiences.",
      link: "#"
    },
    // Add more blog posts...
  ];

  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      cover: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg",
      rating: 5
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      cover: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg",
      rating: 4
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      cover: "https://images-na.ssl-images-amazon.com/images/I/71r3ktfqkwL.jpg",
      rating: 5
    },
    // Add more books...
  ];

  const travelPlaces = [
    {
      place: "Mount Fuji",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      place: "Santorini",
      country: "Greece",
      image: "https://images.unsplash.com/photo-1507501336603-6e31db2be093?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      place: "Venice",
      country: "Italy",
      image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    // Add more places...
  ];

  return (
    <section className="min-h-screen pt-32 lg:pt-40 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <h1 className="text-5xl font-light mb-8 leading-tight">
            Hello! I'm{" "}
            <span className="font-normal text-red-600">
              Chaitanya Katore
            </span>
          </h1>
          
          <div className="space-y-6 text-gray-600">
            <p className="text-lg leading-relaxed">
              A passionate software developer and creative problem solver. I specialize in building beautiful, functional, and user-friendly websites and applications.
            </p>
            
            <p className="text-lg leading-relaxed">
              With a strong foundation in modern web technologies and a keen eye for design, I strive to create digital experiences that make a difference.
            </p>

            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
            </p>
          </div>

          {/* Decorative Element */}
          <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-red-50 rounded-full blur-xl opacity-60"></div>
        </motion.div>

        {/* Right Column - Image Collage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-6 lg:grid-rows-8 lg:h-[600px]">
            {/* Large Image 1 */}
            <motion.div
              className="col-span-2 row-span-2 lg:col-span-4 lg:col-start-1 lg:row-span-4 lg:row-start-1 relative overflow-hidden rounded-2xl aspect-square lg:aspect-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={about4}
                alt="About 1"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Small Image 1 */}
            <motion.div
              className="col-span-1 lg:col-span-2 lg:col-start-5 lg:row-span-2 lg:row-start-1 relative overflow-hidden rounded-2xl aspect-square lg:aspect-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={about5}
                alt="About 2"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Small Image 2 */}
            <motion.div
              className="col-span-1 lg:col-span-2 lg:col-start-5 lg:row-span-2 lg:row-start-3 relative overflow-hidden rounded-2xl aspect-square lg:aspect-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={about3}
                alt="About 3"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Medium Image 1 */}
            <motion.div
              className="col-span-1 lg:col-span-3 lg:col-start-1 lg:row-span-3 lg:row-start-5 relative overflow-hidden rounded-2xl aspect-square lg:aspect-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={about2}
                alt="About 4"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Medium Image 2 */}
            <motion.div
              className="col-span-1 lg:col-span-3 lg:col-start-4 lg:row-span-3 lg:row-start-5 relative overflow-hidden rounded-2xl aspect-square lg:aspect-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={about6}
                alt="About 5"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -right-8 top-1/2 w-32 h-32 bg-blue-50 rounded-full blur-xl opacity-60"></div>
          <div className="absolute left-1/4 top-1/3 w-16 h-16 bg-yellow-50 rounded-full blur-xl opacity-60"></div>
        </motion.div>
      </div>

      {/* Scrolling Sections */}
      <div className="relative overflow-hidden">
        {/* Blog Section - Coming Soon */}
        {/* <ScrollingSection title="Latest Blog Posts" items={blogs} type="blog" /> */}
        
        {/* Books Section - Coming Soon */}
        {/* <ScrollingSection title="Books I've Read" items={books} type="book" /> */}
        
        {/* Travel Section */}
        <ScrollingSection title="Places I've Visited" items={travelPlaces} type="travel" />
      </div>
    </section>
  );
};

export default About;