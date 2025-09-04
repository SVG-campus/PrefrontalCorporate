import ResearchCard from "@/components/ResearchCard";
import { researchData } from "@/data/research";
import Image from "next/image";

export default function Home() {
  const featuredProjects = researchData.filter((p) => p.featured);

  return (
    <div className="space-y-12">
      {/* Hero/About Section */}
      <section className="text-center">
        <Image
          src="https://raw.githubusercontent.com/SVG-campus/PrefrontalCorporate/refs/heads/main/Prefrontal%20Corporate.png"
          alt="Prefrontal Corporate Avatar"
          width={150}
          height={150}
          className="mx-auto mb-6 rounded-full"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to Prefrontal Corporate
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Exploring the intersection of Neuroscience and Executive Entrepreneurship. My mission is to mentor the next generation and provide access to cutting-edge technology. This is the beginning of a journey to build a community and share knowledge.
        </p>
      </section>

      {/* Featured Research Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Featured Research
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ResearchCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
