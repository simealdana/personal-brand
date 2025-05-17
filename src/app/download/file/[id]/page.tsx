"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import {
  Download,
  ArrowLeft,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import Link from "next/link";
import { getFIleUrl } from "@/lib/utils";

export default function DirectDownloadPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";

  useEffect(() => {
    // Auto-start download after a short delay
    const timer = setTimeout(() => {
      startDownload();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const startDownload = () => {
    try {
      // Get direct URL to the file
      const downloadUrl = getFIleUrl(id);
      const fileName = id.split("/").pop() || "resource";

      // Start download
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = downloadUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Download started</h2>
          <p className="text-gray-600 mb-6">
            Your download should begin automatically. If it doesn&apos;t, please
            click the button below.
          </p>
          <button
            onClick={startDownload}
            className="group px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all flex items-center gap-2 mx-auto"
          >
            <Download className="h-5 w-5" />
            Download again
          </button>

          <div className="mt-8">
            <Link
              href="/downloads"
              className="text-blue-600 hover:text-blue-800 flex items-center justify-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Browse more resources
            </Link>
          </div>
        </div>
      </div>

      {/* Mentorship Promotion */}
      <div className="max-w-md w-full bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg shadow-lg p-8 text-white">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          <span className="font-medium text-yellow-400">
            True 1:1 Mentorship
          </span>
        </div>
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold mb-3">
            Tired of being left on your own after downloading resources?
          </h3>
          <p className="text-blue-100 mb-6">
            Unlike most digital products where you&apos;re quickly forgotten, my
            1:1 AI Mentorship Program provides direct access to personalized
            guidance that will rapidly advance your career.
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            href="/apply"
            className="group px-6 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-opacity-90 transition-all flex items-center gap-2"
          >
            Get Personalized Mentorship
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
