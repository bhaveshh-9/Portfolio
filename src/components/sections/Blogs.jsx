import { useEffect, useState } from "react";

export const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:8080/blogs");
      const data = await response.json();

      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  return (
    <div className="p-6 grid md:grid-cols-2 gap-6">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-xl overflow-hidden"
        >
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-64 object-cover"
          />

          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">
              {blog.title}
            </h2>

            <p className="text-gray-500 mb-4">
              {blog.caption}
            </p>

            <p className="text-gray-700">
              {blog.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
