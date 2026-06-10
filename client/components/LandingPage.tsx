"use client";

import Link from "next/link";
import Card from "./ui/Card";
import Button from "./ui/Button";
import {
APP_NAME,
FEATURES,
HOW_IT_WORKS,
} from "@/lib/constants";

export default function LandingPage() {
  return (
<div className="min-h-screen bg-white overflow-x-hidden">

  {/* HERO SECTION */}
  <section className="w-full">
  <div className="max-w-7xl mx-auto px-8 py-20">

   <div className="grid lg:grid-cols-2 gap-24 items-center">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-4 py-2 text-sm font-medium mb-6">
            🚀 AI-Powered Resume Builder
          </div>

          <h1 className="
  text-6xl
  lg:text-7xl
  font-extrabold
  text-slate-900
  leading-tight
  max-w-4xl
  mb-6
">
  Build ATS-Optimized Resumes
  <br />
  <span className="text-blue-600">
    That Get Interviews
  </span>
</h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Create professional resumes with AI assistance, improve ATS
            scores, and stand out to recruiters. Generate job-ready resumes
            in minutes.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link href="/register">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Create Resume
              </Button>
            </Link>

            <Link href="/login">
              <Button className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50">
                Sign In
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8 max-w-md">
            <div>
              <h3 className="text-4xl font-bold text-blue-600">10K+</h3>
              <p className="text-gray-600">Resumes</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">92%</h3>
              <p className="text-gray-600">ATS Success</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">4.9★</h3>
              <p className="text-gray-600">Rating</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-gray-600">
            <span>✓ ATS Friendly</span>
            <span>✓ AI Generated</span>
            <span>✓ PDF Export</span>
            <span>✓ Secure</span>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <Card className="p-8 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">
                Resume Analysis
              </h3>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                ATS Score 92%
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Keywords Optimized</span>
                <span className="text-green-600">✓</span>
              </div>

              <div className="flex justify-between">
                <span>Formatting</span>
                <span className="text-green-600">✓</span>
              </div>

              <div className="flex justify-between">
                <span>Readability</span>
                <span className="text-green-600">✓</span>
              </div>

              <div className="flex justify-between">
                <span>Recruiter Friendly</span>
                <span className="text-green-600">✓</span>
              </div>
            </div>

            <div className="mt-8 h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[92%] bg-green-500 rounded-full"></div>
            </div>
          </Card>
        </div>

      </div>
    </div>
  </section>

  {/* TRUSTED COMPANIES */}
  <section className="py-8 border-y bg-gray-50">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p className="text-gray-500 mb-8 font-medium">
        Trusted by students and professionals from
      </p>

      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-xl md:text-3xl font-bold text-gray-700">
        <span>Google</span>
        <span>Microsoft</span>
        <span>Amazon</span>
        <span>TCS</span>
        <span>Infosys</span>
      </div>
    </div>
  </section>

  {/* FEATURES */}
  <section className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-slate-900 mb-4">
          Powerful Features
        </h2>

        <p className="text-xl text-gray-600">
          Everything you need to create an ATS-optimized resume
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((feature, idx) => (
          <Card key={idx} hoverable>
            <div className="text-4xl mb-4">{feature.icon}</div>

            <h3 className="text-2xl font-semibold mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-600">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* HOW IT WORKS */}
  <section className="max-w-7xl mx-auto px-6 py-16">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-4">
        How It Works
      </h2>

      <p className="text-xl text-gray-600">
        Four simple steps to your perfect resume
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      {HOW_IT_WORKS.map((item, idx) => (
        <div key={idx} className="text-center">
          <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-5 text-2xl font-bold">
            {item.step}
          </div>

          <h3 className="text-xl font-semibold mb-3">
            {item.title}
          </h3>

          <p className="text-gray-600">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </section>

  {/* FOOTER */}
  <footer className="bg-slate-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h3 className="text-2xl font-bold mb-4">
        {APP_NAME}
      </h3>

      <p className="text-gray-400">
        AI-powered resume generation for the modern job seeker.
      </p>
    </div>
  </footer>


with

```tsx
    </div>
  );
}
