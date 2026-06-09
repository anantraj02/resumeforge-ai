"use client";
import jsPDF from "jspdf";
import { useState, useEffect } from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Input from "./ui/Input";

export default function Dashboard() {
  const [jobRole, setJobRole] = useState("");
  const [skills, setSkills] = useState("");
  const [message, setMessage] = useState("");
  const [summary, setSummary] = useState("");
  const [experience, setExperience] = useState("");
  const [projects, setProjects] = useState("");
  const [loading, setLoading] = useState(false);
  const [resumes, setResumes] = useState<any[]>([]);
  const [selectedResume, setSelectedResume] = useState<any>(null);
  const [editingResume, setEditingResume] = useState<any>(null);
  const [editSummary, setEditSummary] = useState("");
  const [editExperience, setEditExperience] = useState("");
  const [editProjects, setEditProjects] = useState("");
  const [atsScore, setAtsScore] = useState(0);
  const [atsSuggestions, setAtsSuggestions] = useState<string[]>([]);
  const [template, setTemplate] = useState("classic");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const response = await fetch(
        "https://ai-resume-builder-w42o.onrender.com/api/resume/my-resumes",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setResumes(data);
      }
    } catch (error) {
      console.error("Error fetching resumes:", error);
    }
  };

  const generateResume = async () => {
    if (!jobRole || !skills) {
      setMessage("Please fill in job role and skills");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://ai-resume-builder-w42o.onrender.com/api/ai/generate-resume",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ jobRole, skills }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message);
        return;
      }

      setSummary(data.summary);
      setExperience(data.experience);
      setProjects(data.projects);
      setAtsScore(data.atsScore || 0);
      setAtsSuggestions(data.atsSuggestions || []);
      setMessage("Resume generated successfully!");
    } catch (error) {
      setMessage("Error generating resume");
    } finally {
      setLoading(false);
    }
  };

  const saveResume = async () => {
    if (!jobRole || !summary) {
      alert("Please generate a resume first");
      return;
    }

    try {
      const response = await fetch(
        "https://ai-resume-builder-w42o.onrender.com/api/resume/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            title: jobRole,
            summary,
            skills,
            experience,
            education: "",
            projects,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Resume saved successfully!");
      setJobRole("");
      setSkills("");
      setSummary("");
      setExperience("");
      setProjects("");
      setAtsScore(0);
      fetchResumes();
    } catch (error) {
      alert("Error saving resume");
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    if (template === "classic") {
      doc.setFontSize(24);
      doc.setFont("helvetica", "bold");
      doc.text(jobRole || "Professional Resume", 20, 20);

      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text(`ATS Score: ${atsScore}%`, 20, 30);

      doc.line(20, 35, 190, 35);

      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("SUMMARY", 20, 50);

      doc.setFontSize(11);
      doc.setFont("helvetica", "normal");

      const summaryLines = doc.splitTextToSize(summary || "", 170);
      doc.text(summaryLines, 20, 60);

      let y = 60 + summaryLines.length * 6 + 10;

      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("EXPERIENCE", 20, y);

      y += 10;

      doc.setFontSize(11);
      doc.setFont("helvetica", "normal");

      const experienceLines = doc.splitTextToSize(
        experience || "",
        170
      );

      doc.text(experienceLines, 20, y);

      y += experienceLines.length * 6 + 10;

      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text("PROJECTS", 20, y);

      y += 10;

      doc.setFontSize(11);
      doc.setFont("helvetica", "normal");

      const projectLines = doc.splitTextToSize(
        projects || "",
        170
      );

      doc.text(projectLines, 20, y);
    }

    doc.save(`${jobRole}-resume.pdf`);
  };

  const deleteResume = async (id: string) => {
    if (!confirm("Are you sure you want to delete this resume?")) return;

    try {
      const response = await fetch(
        `https://ai-resume-builder-w42o.onrender.com/api/resume/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        alert("Error deleting resume");
        return;
      }

      alert("Resume deleted successfully!");
      fetchResumes();
      setSelectedResume(null);
    } catch (error) {
      alert("Error deleting resume");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-navy mb-2">Resume Dashboard</h1>
          <p className="text-lg text-gray-600">
            Generate, edit, and manage your professional resumes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Generator */}
          <div className="lg:col-span-2 space-y-6">
            {/* Input Card */}
            <Card padding="lg">
              <h2 className="text-2xl font-bold text-navy mb-6">
                Generate Resume
              </h2>
              <div className="space-y-4">
                <Input
                  label="Job Role"
                  placeholder="e.g., Senior Software Engineer"
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                />
                <Input
                  label="Skills"
                  placeholder="e.g., React, Node.js, TypeScript, AWS"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Template
                  </label>
                  <select
                    value={template}
                    onChange={(e) => setTemplate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-600"
                  >
                    <option value="classic">Classic</option>
                    <option value="modern">Modern</option>
                    <option value="ats">ATS-Friendly</option>
                  </select>
                </div>
                <Button
                  onClick={generateResume}
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Generating..." : "Generate with AI"}
                </Button>
              </div>
              {message && (
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-700">
                  {message}
                </div>
              )}
            </Card>

            {/* Generated Resume Preview */}
            {summary && (
              <Card padding="lg">
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Generated Resume
                </h2>

                {/* ATS Score */}
                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-navy">
                      ATS Score
                    </span>
                    <div className="text-3xl font-bold text-blue-600">
                      {atsScore}%
                    </div>
                  </div>
                  <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${atsScore}%` }}
                    ></div>
                  </div>
                </div>

                {/* Sections */}
                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-2">
                      Summary
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{summary}</p>
                  </div>

                  {experience && (
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-2">
                        Experience
                      </h3>
                      <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                        {experience}
                      </p>
                    </div>
                  )}

                  {projects && (
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-2">
                        Projects
                      </h3>
                      <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                        {projects}
                      </p>
                    </div>
                  )}
                </div>

                {/* ATS Suggestions */}
                {atsSuggestions.length > 0 && (
                  <div className="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <h3 className="font-semibold text-amber-900 mb-3">
                      ATS Optimization Tips
                    </h3>
                    <ul className="space-y-2">
                      {atsSuggestions.map((suggestion, idx) => (
                        <li key={idx} className="text-sm text-amber-800 flex items-start">
                          <span className="mr-2">•</span>
                          <span>{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-4 flex-wrap">
                  <Button
                    onClick={saveResume}
                    variant="primary"
                    size="md"
                  >
                    Save Resume
                  </Button>
                  <Button
                    onClick={downloadPDF}
                    variant="secondary"
                    size="md"
                  >
                    Download PDF
                  </Button>
                </div>
              </Card>
            )}
          </div>

          {/* Right Panel - Saved Resumes */}
          <div>
            <Card padding="lg">
              <h2 className="text-2xl font-bold text-navy mb-6">
                My Resumes
              </h2>
              <div className="space-y-3">
                {resumes.length === 0 ? (
                  <p className="text-gray-600 text-center py-8">
                    No saved resumes yet. Generate and save one!
                  </p>
                ) : (
                  resumes.map((resume) => (
                    <div
                      key={resume.id}
                      onClick={() => setSelectedResume(resume)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedResume?.id === resume.id
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <h3 className="font-semibold text-navy">{resume.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {new Date(resume.createdAt).toLocaleDateString()}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteResume(resume.id);
                        }}
                        className="mt-2 text-sm text-red-600 hover:text-red-700 font-semibold"
                      >
                        Delete
                      </button>
                    </div>
                  ))
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
