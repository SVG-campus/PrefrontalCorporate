import { researchData } from '@/data/research';
import { notFound } from 'next/navigation';
import Link from 'next/link';

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
      <p className="text-lg text-gray-600 mb-2">
        Category: <span className="font-semibold">{project.category}</span>
      </p>

      <div className="prose lg:prose-xl max-w-none mt-8">
        <p>{project.summary}</p>
        {project.githubUrl && (
          <p>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Project on GitHub &rarr;
            </a>
          </p>
        )}
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
