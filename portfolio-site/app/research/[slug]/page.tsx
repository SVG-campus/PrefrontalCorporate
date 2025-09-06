import { researchData } from '@/data/research';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface ResearchDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ResearchDetailPage({ params }: ResearchDetailPageProps) {
  const { slug } = params;
  const project = researchData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
      <div className="text-lg text-muted-foreground mb-4 space-x-4">
        <span>Category: <span className="font-semibold text-foreground">{project.category}</span></span>
        <span>&bull;</span>
        <span>Date: <span className="font-semibold text-foreground">{project.date}</span></span>
      </div>

      <div className="prose lg:prose-xl max-w-none mt-8">
        <p>{project.summary}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        {project.githubUrl && (
          <Button asChild>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project on GitHub &rarr;
            </a>
          </Button>
        )}
        <Button variant="outline" disabled>
          Temp. Button For Publication Link
        </Button>
      </div>

    </article>
  );
}

// Optional: Generate static pages for each project at build time for performance
export function generateStaticParams() {
  return researchData.map((project) => ({
    slug: project.slug,
  }));
}
