"use client";
import { useState } from "react";

export default function ReviewForm({ onAdd }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, content, slug: "admin-added" }),
      });
      if (res.ok) {
        setStatus("Review added!");
        if (onAdd) onAdd();
      } else {
        const data = await res.json();
        setStatus(`Error: ${data.error || "Failed"}`);
      }
    } catch (err) {
      setStatus("Network error");
    }
  };

  return (
    <section className="my-8 p-6 glass rounded-xl">
      <h3 className="text-xl font-bold mb-4 text-cyan-300">Add New Review</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Reviewer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="rounded-md bg-gray-800/50 text-white p-2 placeholder-gray-400"
        />
        <textarea
          placeholder="Review Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={4}
          className="rounded-md bg-gray-800/50 text-white p-2 placeholder-gray-400"
        />
        <button
          type="submit"
          className="self-start bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          Add Review
        </button>
        {status && <p className="mt-2 text-sm text-gray-300">{status}</p>}
      </form>
    </section>
  );
}
