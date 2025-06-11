import React from "react";
import blogPosts from "../../Data/Blog.json";
import { Link } from "react-router-dom";

function BlogGrid() {
  return (
    <section className="w-full bg-[#fafafa] py-12 flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1050px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogPosts.map((post, idx) => (
          <article
            key={idx}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden group"
          >
            {post.image && (
              <div className="w-full h-44 overflow-hidden rounded-t-lg border-b border-gray-200">
                <img
                  src={new URL(`../../assets/${post.image}`, import.meta.url).href}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
            )}

            <div className="p-6 flex flex-col flex-1">
              <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide font-semibold">
                {post.date} &nbsp;|&nbsp; {post.category}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight line-clamp-2">
                {post.title}
              </h3>

              <p className="text-gray-700 text-base mb-6 flex-1 leading-relaxed line-clamp-3">
                {post.desc}
              </p>

              <Link
                to={`/blog/${post.slug}`}
                className="self-start text-orange-600 hover:text-orange-700 font-medium underline transition-colors duration-200"
              >
                Read more &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlogGrid;
