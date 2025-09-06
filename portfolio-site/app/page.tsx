import ResearchCard from "@/components/ResearchCard";
import { researchData, ResearchProject } from "@/data/research";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const featuredProjects = researchData.filter((p) => p.featured);

  const featuredByCategory = featuredProjects.reduce((acc, project) => {
    const category = project.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(project);
    return acc;
  }, {} as Record<string, ResearchProject[]>);


  return (
    <div className="space-y-20">
      {/* Hero/About Section */}
      <section className="text-center pt-8">
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
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          Exploring the intersection of Neuroscience and Executive Entrepreneurship. My mission is to mentor the next generation and provide access to cutting-edge technology. This is the beginning of a journey to build a community and share knowledge.
        </p>
      </section>

      {/* Featured Research Section */}
      <section className="space-y-16">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Featured Research
            </h2>
            <p className="text-muted-foreground mt-2">A selection of recent and notable projects.</p>
        </div>

        {Object.entries(featuredByCategory).map(([category, projects]) => (
            <div key={category}>
                <h3 className="text-2xl font-semibold mb-6">{category}</h3>
                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project) => (
                        <ResearchCard key={project.slug} project={project} />
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Button variant="outline" asChild>
                        <Link href={`/research/category/${encodeURIComponent(category)}`}>
                            View all in {category}
                        </Link>
                    </Button>
                </div>
            </div>
        ))}
      </section>
    </div>
  );
}
