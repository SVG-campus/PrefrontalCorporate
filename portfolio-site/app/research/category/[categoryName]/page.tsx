import ResearchCard from '@/components/ResearchCard';
import { researchData } from '@/data/research';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function generateStaticParams() {
  const categories = new Set(researchData.map((p) => p.category));
  return Array.from(categories).map((category) => ({
    categoryName: encodeURIComponent(category),
  }));
}

interface CategoryPageProps {
  params: {
    categoryName: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = decodeURIComponent(params.categoryName);
  const projects = researchData.filter((p) => p.category === categoryName);

  if (projects.length === 0) {
    notFound();
  }

  return (
    <div className="space-y-12">
      <div className="text-center">
        <p className="text-lg text-muted-foreground">Category</p>
        <h1 className="text-4xl font-bold">{categoryName}</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ResearchCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild>
          <Link href="/research">View All Categories</Link>
        </Button>
      </div>
    </div>
  );
}
