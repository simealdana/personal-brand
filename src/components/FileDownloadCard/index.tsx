"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

interface FileDownloadCardProps {
  image: string;
  title: string;
  description: string;
  file_path: string;
  isRequiredEmail: boolean;
}

export default function FileDownloadCard({
  image,
  title,
  description,
  file_path,
  isRequiredEmail,
}: FileDownloadCardProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (isRequiredEmail && !validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: isRequiredEmail ? email : "anonymous@download.com",
          file_path,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get download link");
      }

      if (isRequiredEmail) {
        setIsEmailSubmitted(true);
      }

      // Automatically trigger download if URL is available
      if (data.download_url) {
        try {
          // Crear una función para descargar archivos usando fetch + blob
          const downloadFile = async (url: string, filename: string) => {
            try {
              // Fetch el archivo como blob
              const response = await fetch(url);
              if (!response.ok) throw new Error("Network response was not ok");

              const blob = await response.blob();

              // Crear URL para el blob
              const blobUrl = window.URL.createObjectURL(blob);

              // Crear link y forzar descarga
              const a = document.createElement("a");
              a.style.display = "none";
              a.href = blobUrl;
              a.download = filename;
              document.body.appendChild(a);
              a.click();

              // Limpiar después de usar
              window.URL.revokeObjectURL(blobUrl);
              document.body.removeChild(a);
            } catch (error) {
              console.error("Error downloading file:", error);
              throw error;
            }
          };

          // Obtener nombre de archivo
          const filename =
            data.fileName || file_path.split("/").pop() || "download";

          // Iniciar descarga
          downloadFile(data.download_url, filename);
        } catch (err) {
          console.error("Download error:", err);
          setError("Download failed. Please try again.");
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md mx-auto">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 384px"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>

        {isRequiredEmail && !isEmailSubmitted ? (
          <form onSubmit={handleDownload} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Enter your email to download
              </label>
              <div className="flex rounded-md shadow-sm">
                <div className="relative flex items-stretch flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail
                      className="h-5 w-5 text-blue-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border px-3"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {isLoading ? "Processing..." : "Download Now"}
              <Download className="ml-2 h-5 w-5" />
            </Button>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        ) : (
          <Button
            onClick={handleDownload}
            disabled={isLoading}
            className="w-full flex justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            {isLoading ? "Processing..." : "Download Now"}
            <Download className="ml-2 h-5 w-5" />
          </Button>
        )}

        {error && !isRequiredEmail && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}

        {isEmailSubmitted && (
          <p className="text-green-600 text-sm mt-2">
            Thank you! Your download should start automatically.
          </p>
        )}
      </div>
    </div>
  );
}
