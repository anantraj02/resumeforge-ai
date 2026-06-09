"use client";

import Link from "next/link";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { APP_NAME, APP_TAGLINE, FEATURES, HOW_IT_WORKS, TECH_STACK } from "@/lib/constants";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
              {APP_NAME}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {APP_TAGLINE}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Login
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Card className="w-full max-w-md bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📄</div>
                <p className="text-lg font-semibold text-navy mb-2">
                  Professional Resume
                </p>
                <p className="text-gray-600">
                  AI-powered and ATS-optimized
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to create an ATS-optimized resume
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <Card key={idx} hoverable>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-32 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Four simple steps to your perfect resume
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_IT_WORKS.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-gradient-to-r from-navy to-dark-navy px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Built with Modern Tech
            </h2>
            <p className="text-xl text-blue-200">
              Powered by the latest technologies
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TECH_STACK.map((tech, idx) => (
              <Card
                key={idx}
                padding="sm"
                className="bg-white/10 border-white/20 text-center hover:bg-white/20 transition-colors"
              >
                <p className="text-3xl mb-2">{tech.icon}</p>
                <p className="text-sm font-semibold text-white">{tech.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Building Better Resumes Today
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of job seekers using ResumeForge AI to land their dream jobs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100">
                Create Account
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white/10"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-navy text-white px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">{APP_NAME}</h3>
              <p className="text-blue-200">
                AI-powered resume generation for the modern job seeker.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="hover:text-white transition-colors">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="hover:text-white transition-colors">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-900 pt-8 text-center text-blue-200">
            <p>&copy; 2026 {APP_NAME}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
