import Link from "next/link";
import Image from "next/image";
import { getAllResources } from "@/lib/resources";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { getFIleUrl } from "@/lib/utils";

export default async function DownloadsPage() {
  const resources = await getAllResources();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <Navigation />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
            Download Free Resources
          </h1>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Access our collection of guides, templates, and tools to help you
            build better digital products and services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {resources.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">
                  No resources available at the moment.
                </p>
              </div>
            ) : (
              resources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full transform transition-transform hover:scale-105 hover:shadow-xl"
                >
                  {/* Resource Image */}
                  <div className="relative h-48">
                    <Image
                      src={getFIleUrl(resource.image)}
                      alt={resource.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold mb-2 text-gray-900">
                      {resource.title}
                    </h2>
                    <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                      {resource.description}
                    </p>

                    <Link
                      href={`/download/${resource.id}`}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
