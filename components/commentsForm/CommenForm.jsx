"use client";
import { useState } from "react";

const CommentForm = ({ blogId, onCommentAdded }) => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ blogId, comment }),
      });

      if (response.ok) {
        const newComment = await response.json(); // Fetch the new comment from response
        setComment("");
        onCommentAdded(newComment); // Pass new comment to the callback
      } else {
        setError("Failed to post comment");
      }
    } catch (err) {
      setError("An error occurred while posting the comment");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <textarea
        className="w-full p-2 border rounded-md"
        rows="4"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Leave a comment..."
        required
      ></textarea>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Post Comment
      </button>
    </form>
  );
};

export default CommentForm;
