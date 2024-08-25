import React, { useState } from "react";
import Button from './Button';
import Section from "./Section";
import Heading from "./Heading";
import { Link } from 'react-router-dom';

const JoinUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState([]);
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    const newErrors = {};
    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!comments) newErrors.comments = "Comments are required.";
    if (notes.length === 0) newErrors.notes = "At least one note is required.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("comments", comments);

    notes.forEach((file) => {
      formData.append("notes", file);
    });

    try {
      const response = await fetch("http://localhost:5000/join-us", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setNotes([]);
        setComments("");
        setErrors({});
        setSubmitted(true);
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <Section id="features">
      <div className="container relative z-2">
        <form onSubmit={handleSubmit} className="p-4 bg-n-8 rounded-lg">
          <Heading
            className="md:max-w-md lg:max-w-2xl"
            title="Join Us and Be a Part of Our Exciting Future!"
          />
          <div className="mb-4">
            <label className="block text-white-700">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-n-8 px-3 py-2 border border-gray-300 rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-white-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-n-8 px-3 py-2 border border-gray-300 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-white-700">Attach Notes:</label>
            <input
              type="file"
              multiple
              onChange={(e) => setNotes(Array.from(e.target.files))}
              className="w-full bg-n-8 px-3 py-2 border border-gray-300 rounded"
            />
            {errors.notes && <p className="text-red-500 text-sm">{errors.notes}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-white-700">Comments:</label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Field, Subject, Semester"
              className="w-full px-3 bg-n-8 py-2 border border-gray-300 rounded"
              rows="4"
            />
            {errors.comments && <p className="text-red-500 text-sm">{errors.comments}</p>}
          </div>
          <div className="w-full flex justify-center">
            {!submitted ? (
              <Button type="submit">
                Submit
              </Button>
            ) : (
              <Link to="/" className="w-full flex justify-center">
                <Button>
                  Back to Home
                </Button>
              </Link>
            )}
          </div>
        </form>

        {submitted && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-green-500 text-white p-4 rounded-lg">
              <p>Thank you for submitting the form!</p>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default JoinUsForm;
