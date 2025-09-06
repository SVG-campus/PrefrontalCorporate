import ResearchCard from '@/components/ResearchCard';
import { researchData } from '@/data/research';

// Define the custom order of categories
const categoryOrder = [
  'Medical',
  'Machine Learning Algorithms',
  'Economics',
  'Partial Differential Equations',
  'Quantum Kernel',
  'Executive Entrepreneurship',
  'Artificial Intelligence',
  'Physics',
  'Law',
  'Math',
  'Electrical Engineering',
  'Luxury Theory',
  'Hospitality',
];

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

  // Ensure all defined categories exist in the map, even if empty
  categoryOrder.forEach(category => {
    if (!projectsByCategory[category]) {
      projectsByCategory[category] = [];
    }
  });

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-center">All Research</h1>

      {categoryOrder.map((category) => {
        const projects = projectsByCategory[category];
        // We render the section even if it's empty, as requested
        return (
          <section key={category}>
            <h2 className="text-3xl font-bold mb-8 border-b pb-4">{category}</h2>
            {projects && projects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project) => (
                  <ResearchCard key={project.slug} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center text-muted-foreground italic py-8">
                <p>No projects in this category yet. Stay tuned for future research!</p>
              </div>
            )}
          </section>
        )
      })}
    </div>
  );
}
