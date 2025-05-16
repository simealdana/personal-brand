"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { Download, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <div className="h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Download started</h2>
          <p className="text-gray-600 mb-6">
            Your download should begin automatically. If it doesn&apos;t, please
            click the button below.
          </p>
          <Button
            onClick={startDownload}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            <Download className="h-5 w-5 mr-2" />
            Download again
          </Button>

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
    </div>
  );
}
