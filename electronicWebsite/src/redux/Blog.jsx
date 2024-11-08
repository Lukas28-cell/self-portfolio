// src/components/Blog.js
import React from "react";

const blogPosts = [
  {
    title: "Understanding React Hooks",
    excerpt: "A deep dive into React Hooks and how to use them effectively in your applications.",
    date: " February 15, 2024",
    link: "https://react.dev/reference/react/hooks", // Replace with your blog post link
  },
  {
    title: "CSS Grid vs Flexbox",
    excerpt: "A comparison of CSS Grid and Flexbox, and when to use each layout technique.",
    date: "May 10, 2024",
    link: "https://www.freecodecamp.org/news/flexbox-vs-grid-in-css/", // Replace with your blog post link
  },
  {
    title: "Building a Portfolio with React",
    excerpt: "Step-by-step guide on how to build a personal portfolio using React and Tailwind CSS.",
    date: "May 5, 2024",
    link: "https://buttercms.com/blog/build-a-portfolio-website-with-react/", // Replace with your blog post link
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-100">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">My Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-2">{post.date}</p>
                <p className="mb-4">{post.excerpt}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline hover:text-blue-500"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;