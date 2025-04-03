"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Download, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
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

    // Trigger download
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
          data.fileName || resource.file_path.split("/").pop() || "download";

        // Iniciar descarga
        downloadFile(data.download_url, filename);
      } catch (err) {
        console.error("Download error:", err);
      }
    }
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
          className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all downloads
        </Link>
      </div>
    );
  }

  return (
    <div className="h-screen flex">
      {/* Left dark side */}
      <div className="w-1/2 bg-gray-900 text-white p-12 flex flex-col">
        <Link
          href="/downloads"
          className="inline-flex items-center text-gray-300 hover:text-white mb-12"
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

        <h1 className="text-5xl font-bold mb-8">Download resource</h1>

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
      <div className="w-1/2 bg-white p-12 flex flex-col">
        <div className="max-w-md mx-auto w-full flex flex-col justify-center h-full">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-2">
              Download this resource now
            </h2>
            <p className="text-gray-600">{resource.description}</p>
          </div>

          <Button
            onClick={handleDownloadClick}
            className="w-full py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg text-lg font-medium"
            size="lg"
          >
            <Download className="h-5 w-5 mr-2" />
            Download now
          </Button>

          <p className="text-gray-500 text-sm text-center mt-4">
            By downloading this resource, you agree to receive more information
            about our products and services.
          </p>
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
