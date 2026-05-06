import { useState } from "react";

 export const Admin = () => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const addBlog = async () => {
    const blogData = {
      title,
      caption,
      content,
      imageUrl,
      author: "Admin",
    };

    try {
      const response = await fetch("http://localhost:8080/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      const data = await response.json();

      console.log("Blog added:", data);

      // Clear form
      setTitle("");
      setCaption("");
      setContent("");
      setImageUrl("");

    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div className="p-6 space-y-4">
      <input
        type="text"
        placeholder="Title"
        className="border p-2 w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Image URL"
        className="border p-2 w-full"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <input
        type="text"
        placeholder="Caption"
        className="border p-2 w-full"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />

      <textarea
        placeholder="Content"
        className="border p-2 w-full"
        rows="5"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={addBlog}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Add Blog
      </button>
    </div>
  );
};
