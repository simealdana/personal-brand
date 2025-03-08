import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Simeon Aldana | AI Instructor & Digital Product Consultant",
  description:
    "Learn about Simeon Aldana's journey from Venezuela to becoming a successful frontend engineer and AI consultant. Discover how he helps entrepreneurs build digital products with AI.",
  keywords: [
    "Simeon Aldana",
    "AI Instructor",
    "Digital Product Consultant",
    "Frontend Engineer",
    "Tech Entrepreneur",
    "AI Development",
    "Digital Business",
    "Software Development",
    "Venezuelan Developer",
    "Deel Engineer",
    "Tech Education",
    "AI Tools",
    "Digital Transformation",
  ],
  openGraph: {
    title: "About Simeon Aldana | AI Instructor & Digital Product Consultant",
    description:
      "From Venezuela to global tech success: Learn about Simeon Aldana's journey and how he helps entrepreneurs build successful digital products with AI.",
    type: "profile",
    images: [
      {
        url: "/images/logo.png",
        width: 200,
        height: 200,
        alt: "Simeon Aldana Profile Picture",
      },
    ],
    locale: "en_US",
    siteName: "Simeon Aldana",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Simeon Aldana | AI Instructor & Digital Product Consultant",
    description:
      "From Venezuela to global tech success: Learn about Simeon Aldana's journey and how he helps entrepreneurs build successful digital products with AI.",
    images: ["/images/logo.png"],
    creator: "@simeonaldana",
  },
  alternates: {
    canonical: "https://sime.dev/about",
  },
  authors: [
    {
      name: "Simeon Aldana",
      url: "https://sime.dev",
    },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Componente Schema.org para SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Simeon Aldana",
  jobTitle: "AI Instructor & Digital Product Consultant",
  description:
    "Frontend software engineer, digital creator, and passionate advocate for technological innovation, helping entrepreneurs build successful digital products.",
  image: "https://sime.dev/images/logo.png",
  url: "https://sime.dev/about",
  sameAs: [
    "https://www.youtube.com/@simeonaldana",
    "https://www.tiktok.com/@simeonaldana",
    // Agrega aquí tus otras redes sociales
  ],
  alumniOf: {
    "@type": "Organization",
    name: "Argentine Universities",
  },
  worksFor: {
    "@type": "Organization",
    name: "Deel",
    url: "https://www.deel.com",
  },
  nationality: {
    "@type": "Country",
    name: "Venezuela",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-neutral-50 min-h-screen">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-5xl font-black tracking-tighter">ABOUT ME</h1>
            <Link
              href="/#contact-me"
              className="bg-neutral-200 hover:bg-neutral-300 transition-colors px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium"
            >
              Contact Me <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Profile Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <Image
                src="/images/logo.png"
                alt="Simeon Aldana"
                width={200}
                height={200}
                className="rounded-full"
              />
              <div>
                <h2 className="text-3xl font-bold mb-4">Simeon Aldana</h2>
                <p className="text-neutral-600 text-lg mb-6">
                  Frontend Software Engineer, Digital Creator, and AI Innovation
                  Advocate
                </p>
                <div className="flex gap-4">
                  {/* Social Links */}
                  <Link
                    href="https://www.youtube.com/@simeonaldana"
                    target="_blank"
                    className="text-neutral-700 hover:text-black transition-colors"
                  >
                    YouTube
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@simeonaldana"
                    target="_blank"
                    className="text-neutral-700 hover:text-black transition-colors"
                  >
                    TikTok
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6">A Message For You</h2>
              <p className="text-neutral-600 mb-6">
                I strongly believe that in 2025, anyone can create a successful
                digital business and generate income online—even without
                advanced technical or programming skills. Today, more than ever,
                your ideas, creativity, and ability to solve everyday problems
                are your most valuable assets. If you&apos;re reading this, it
                means you already have everything it takes to build impactful
                digital products and profitable businesses. Why am I so certain?
                Because technology, digital tools, artificial intelligence (AI),
                and especially AI Agents, have dramatically lowered the barriers
                to digital creation. The world has never been as accessible and
                open as it is today, and I am here to help you unlock that
                incredible potential you already have.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6">My Journey Begins</h2>
              <p className="text-neutral-600 mb-6">
                My story began far away from the comfort and stability I now
                enjoy. Born in Venezuela, I developed a passion for technology
                at a young age. I saw clearly how digital solutions could solve
                real-world problems, but circumstances in my home country were
                challenging. Due to economic hardships and social instability, I
                was unable to complete my university studies. In 2017, I made
                one of the toughest yet most significant decisions of my life:
                emigrating from Venezuela to Argentina in search of better
                opportunities.
              </p>
              <p className="text-neutral-600 mb-6">
                Moving to Argentina was a leap into the unknown. I had very
                limited financial resources, many doubts, and absolutely no
                guarantees of success. Initially, the challenges were
                overwhelming: I had no local contacts, little money, and lacked
                a formal university degree. However, I knew one thing for sure:
                my destiny depended solely on my determination and willingness
                to learn.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6">Professional Growth</h2>
              <p className="text-neutral-600 mb-6">
                I committed myself to intense self-directed learning, spending
                countless hours studying programming through online platforms
                like Udemy, earning certifications from Argentine universities,
                and pushing myself through numerous job applications and
                interviews. Every rejection I faced was tough, but it only
                fueled my determination to keep learning and improving.
              </p>
              <p className="text-neutral-600 mb-6">
                After months of relentless perseverance, I finally landed my
                first significant job as a frontend developer at Baufest. This
                moment was life-changing—it was proof that my dedication and
                hard work were paying off.
              </p>
              <p className="text-neutral-600 mb-6">
                Shortly after, I encountered another major professional
                challenge when I joined Red Lean. I was hired to develop a home
                banking application from scratch using Angular, a technology in
                which I had very limited experience. Instead of backing down, I
                doubled down on my efforts. I stayed extra hours after work
                every single day, self-learning and mastering Angular through
                countless hours of research and practice. In just six months,
                not only did I master the framework, but I also became a key
                reference on the project, mentoring and supporting my teammates.
                This experience proved to me beyond any doubt that technical
                barriers could be overcome with dedication, passion, and
                commitment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6">
                Current Role and Achievements
              </h2>
              <p className="text-neutral-600 mb-6">
                Following several rewarding experiences, I was fortunate enough
                to join Deel, an innovative platform revolutionizing the Human
                Resources Information Systems (HRIS) space. Currently, I&apos;m
                part of the PMORG team, building what I truly believe will
                become the best platform in the world for managing digital
                talent and organizational structures. This project has allowed
                me incredible professional growth and given me immense personal
                satisfaction, knowing that our daily efforts positively impact
                thousands of lives globally.
              </p>
              <p className="text-neutral-600 mb-6">
                Yet my success goes far beyond professional achievements. Thanks
                to my acquired knowledge and relentless commitment, I have
                significantly improved my financial situation and overall
                quality of life. While I&apos;m not a millionaire, I&apos;ve
                been able to purchase properties, travel the world extensively,
                and overcome financial challenges I once faced. These
                experiences have enriched my life and broadened my perspective
                in ways that I once thought impossible.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6">
                World Travel and Personal Growth
              </h2>
              <p className="text-neutral-600 mb-6">
                In 2021, driven by a strong desire to broaden my horizons
                further, I decided to travel the world. This was an invaluable
                experience that cost me far more than just money; it demanded
                time, energy, and a willingness to embrace new perspectives,
                cultures, and innovative ideas. This journey reaffirmed my
                belief in the boundless opportunities presented by the digital
                world, and how embracing new experiences and ideas can
                dramatically accelerate personal and professional growth.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-6">My Mission Today</h2>
              <p className="text-neutral-600 mb-6">
                Today, my mission goes far beyond coding. I am deeply committed
                to teaching, empowering, and guiding entrepreneurs and creators
                like you, helping you transform your ideas into successful
                digital projects using accessible tools such as AI and AI
                Agents. My goal is to demonstrate clearly that you don&apos;t
                need advanced technical expertise to turn your concepts into
                profitable, impactful digital solutions.
              </p>
              <p className="text-neutral-600 mb-6">
                If you have an idea, a dream, or simply curiosity about how to
                start your own digital venture, let me assure you from personal
                experience: it is entirely possible. If I could overcome
                significant challenges and fundamentally transform my life,
                I&apos;m absolutely certain that you can do it too.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Ready to Start?</h2>
              <p className="text-neutral-600 mb-6">
                Now, it&apos;s your moment. Are you ready to take the first step
                with me on this incredible digital journey?
              </p>
              <Link
                href="/#contact-me"
                className="bg-black text-white px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors inline-flex items-center gap-2"
              >
                Let&apos;s Work Together <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
