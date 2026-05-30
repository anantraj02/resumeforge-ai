"use client";

import { useState } from "react";

export default function Home() {
  const [jobRole, setJobRole] = useState("");
  const [skills, setSkills] = useState("");

  const [summary, setSummary] = useState("");
  const [experience, setExperience] = useState("");
  const [projects, setProjects] = useState("");

  const generateResume = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/ai/generate-resume",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            jobRole,
            skills,
          }),
        }
      );

      const data = await response.json();

      setSummary(data.summary);
      setExperience(data.experience);
      setProjects(data.projects);
    } catch (error) {
      console.log(error);
      alert("Failed to generate resume");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">

        <h1 className="text-4xl font-bold mb-8 text-center text-black">
          AI Resume Builder
        </h1>

        <div className="mb-4">
          <label className="block mb-2 text-black">
            Job Role
          </label>

          <input
            type="text"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            className="w-full border p-3 rounded text-black"
            placeholder="Full Stack Developer"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-black">
            Skills
          </label>

          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full border p-3 rounded text-black"
            rows={4}
            placeholder="React, Node.js, Express, PostgreSQL"
          />
        </div>

        <button
          onClick={generateResume}
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Generate AI Resume
        </button>

        {summary && (
          <div className="mt-10">

            <h2 className="text-2xl font-bold mb-2 text-black">
              Summary
            </h2>

            <p className="mb-6 text-black">
              {summary}
            </p>

            <h2 className="text-2xl font-bold mb-2 text-black">
              Experience
            </h2>

            <p className="mb-6 text-black">
              {experience}
            </p>

            <h2 className="text-2xl font-bold mb-2 text-black">
              Projects
            </h2>

            <p className="text-black">
              {projects}
            </p>

          </div>
        )}
      </div>
    </div>
  );
}