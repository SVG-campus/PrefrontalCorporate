import ResearchCard from '@/components/ResearchCard';
import { researchData } from '@/data/research';

export default function ResearchPage() {
  // Group projects by category
  const projectsByCategory = researchData.reduce((acc, project) => {
    const category = project.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(project);
    return acc;
  }, {} as Record<string, typeof researchData>);

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-center">Research Projects</h1>

      {Object.entries(projectsByCategory).map(([category, projects]) => (
        <section key={category}>
          <h2 className="text-3xl font-bold mb-8 border-b pb-4">{category}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <ResearchCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
