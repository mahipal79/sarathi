import React, { useState } from "react";
import Button from './Button';

const JoinUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState([]);
  const [comments, setComments] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("comments", comments);

    // Append all selected files
    notes.forEach((file) => {
      formData.append("notes", file);
    });

    try {
      const response = await fetch("http://localhost:5000/join-us", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setName("");
        setEmail("");
        setNotes([]);
        setComments("");
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-black-100 rounded-lg">
      <h2 className="text-xl mb-4">Join Us</h2>
      <div className="mb-4">
        <label className="block text-white-700">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-white-700">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-white-700">Attach Notes:</label>
        <input
          type="file"
          multiple
          onChange={(e) => setNotes(Array.from(e.target.files))}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white-700">Comments:</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Field, Subject, Semester"
          className="w-full px-3 py-2 border border-gray-300 rounded"
          rows="4"
        />
      </div>
      <Button>
        Join Us
      </Button>
    </form>
  );
};

export default JoinUsForm;
