"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  Download,
  ArrowLeft,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import Link from "next/link";
import EmailModal from "@/components/EmailModal";
import { DownloadableResource } from "@/types/download";
import { getResourceById } from "@/services/resources";
import { getFIleUrl } from "@/lib/utils";

export default function DownloadPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";

  const [resource, setResource] = useState<DownloadableResource | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch resource data
    const fetchResource = async () => {
      try {
        const resourceData = await getResourceById(id);
        if (!resourceData) {
          setError("Resource not found");
        } else {
          setResource(resourceData);
        }
      } catch (error) {
        console.error("Error fetching resource:", error);
        setError("Failed to load resource");
      } finally {
        setLoading(false);
      }
    };

    fetchResource();
  }, [id]);

  const handleDownloadClick = () => {
    setIsModalOpen(true);
  };

  const handleEmailSubmit = async (email: string) => {
    if (!resource) return;

    const response = await fetch("/api/download-resource", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        resourceId: resource.file_path,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to process download");
    }

    setIsModalOpen(false);

    // Show success message instead of triggering download
    setResource({
      ...resource,
      emailSent: true,
    });
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !resource) {
    return (
      <div className="h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <h1 className="text-2xl font-bold text-red-500 mb-4">
          {error || "Resource not found"}
        </h1>
        <p className="mb-6">
          The resource you requested could not be found or an error occurred.
        </p>
        <Link
          href="/downloads"
          className="group px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all downloads
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left dark side */}
      <div className="w-full md:w-1/2 bg-gray-900 text-white p-8 md:p-12 flex flex-col">
        <Link
          href="/downloads"
          className="inline-flex items-center text-gray-300 hover:text-white mb-8 md:mb-12"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to resources
        </Link>

        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-gray-700 rounded-full p-2">
            <Download className="h-5 w-5 text-blue-400" />
          </div>
          <span className="text-lg">{resource.title}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Download resource
        </h1>

        <div className="flex items-center space-x-3 border border-gray-700 rounded-md p-4 mb-4">
          <div className="h-12 w-12 relative rounded-md overflow-hidden">
            <Image
              src={getFIleUrl(resource.image)}
              alt={resource.title}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium">{resource.title}</h3>
            <p className="text-sm text-gray-400">Digital resource</p>
          </div>
        </div>

        <div className="mt-auto">
          <p className="text-sm text-gray-400 mb-2">This resource is free</p>
          <p className="text-2xl font-bold">$0.00 USD</p>
        </div>
      </div>

      {/* Right light side */}
      <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col">
        <div className="max-w-md mx-auto w-full flex flex-col h-full">
          {resource.emailSent ? (
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Check your email</h2>
              <p className="text-gray-600 mb-6">
                We&apos;ve sent a download link to your email address. Please
                check your inbox to access your resource.
              </p>
              <Link href="/downloads">
                <button className="group px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all mt-4">
                  Browse more resources
                </button>
              </Link>

              {/* Mentorship Promo for Success State */}
              <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <h3 className="font-semibold text-blue-900">
                    Tired of learning alone with just downloadable resources?
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 text-left">
                  Unlike most instructors who create digital products and then
                  leave you on your own, my 1:1 AI Mentorship Program gives you
                  direct access to personalized guidance that will rapidly
                  advance your career.
                </p>
                <Link href="/apply">
                  <button className="group px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all w-full flex items-center justify-center gap-2">
                    Get 1:1 Mentorship Access
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold mb-2">
                  Download this resource now
                </h2>
                <p className="text-gray-600">{resource.description}</p>
              </div>

              <button
                onClick={handleDownloadClick}
                className="group px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all w-full flex items-center justify-center gap-2 text-lg"
              >
                <Download className="h-5 w-5" />
                Get download link
              </button>

              <p className="text-gray-500 text-sm text-center mt-4 mb-12">
                We&apos;ll send a download link to your email address to verify
                it&apos;s you.
              </p>

              {/* Mentorship Promo */}
              <div className="mt-auto p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <h3 className="font-semibold text-blue-900">
                    Resources are useful, but real growth needs guidance
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 text-left">
                  Free resources can only take you so far. Most instructors
                  create digital products and communities where you&apos;re
                  quickly forgotten. My 1:1 mentorship gives you direct,
                  personalized education designed for your career goals.
                </p>
                <Link href="/apply">
                  <button className="group px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all w-full flex items-center justify-center gap-2">
                    Explore 1:1 Mentorship
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Email Modal */}
      <EmailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleEmailSubmit}
      />
    </div>
  );
}
