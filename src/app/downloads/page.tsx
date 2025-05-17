import Link from "next/link";
import Image from "next/image";
import { getAllResources } from "@/lib/resources";
import { ArrowRight, Star, Users, Code, Zap, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import { getFIleUrl } from "@/lib/utils";
import AnimatedImageContainer from "@/components/AnimatedImageContainer";

export default async function DownloadsPage() {
  const resources = await getAllResources();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <Navigation />

      {/* Mentorship Promotion Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-10 px-4 mt-20">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span className="font-medium text-yellow-400">
                  No Mass Courses, Real 1:1 Mentorship
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-3">AI Mentorship Program</h2>
              <p className="text-blue-100 mb-4">
                Tired of generic courses and communities where you&apos;re left
                to figure things out alone? My 1:1 mentorship provides the
                personalized guidance you need to rapidly advance your AI
                career.
              </p>
              <Link
                href="/apply"
                className="group px-6 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-opacity-90 transition-all flex items-center gap-2 inline-flex"
              >
                Get Access
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="md:w-1/3 relative h-48 w-full md:h-64">
              <AnimatedImageContainer
                src="/images/instructor.jpeg"
                alt="AI Mentorship Program"
                size="sm"
                fill
                className="h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 pb-20 px-4">
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
                      className="group px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Bottom Mentorship CTA */}
          <div className="mt-24 max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                    Struggling with generic AI courses?
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Most instructors create digital products and communities
                    where you&apos;re quickly forgotten. My 1:1 mentorship is
                    different - you get direct access to me, with highly
                    personalized education designed to accelerate your career.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Users className="h-6 w-6 text-blue-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-gray-900">
                          True 1:1 Mentorship
                        </h3>
                        <p className="text-sm text-gray-600">
                          Not just another course - direct access to expert
                          guidance
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Code className="h-6 w-6 text-blue-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Personalized Projects
                        </h3>
                        <p className="text-sm text-gray-600">
                          Build exactly what will advance your specific career
                          goals
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <X className="h-6 w-6 text-blue-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-gray-900">
                          No Abandoned Communities
                        </h3>
                        <p className="text-sm text-gray-600">
                          Unlike typical programs where you&apos;re left to fend
                          for yourself
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="h-6 w-6 text-blue-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Career Acceleration
                        </h3>
                        <p className="text-sm text-gray-600">
                          Targeted guidance to fast-track your professional
                          growth
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/apply"
                    className="group px-6 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-opacity-90 transition-all flex items-center gap-2 inline-flex"
                  >
                    Get Personalized Mentorship
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/instructor.jpeg"
                    alt="AI Mentorship Program Details"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="font-medium mb-1">
                        Limited 1:1 spots available
                      </div>
                      <div className="text-sm text-white/80">
                        Direct access, not a mass program
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
