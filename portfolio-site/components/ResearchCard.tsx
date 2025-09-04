import Link from 'next/link';
import type { ResearchProject } from '@/data/research';

interface ResearchCardProps {
  project: ResearchProject;
}

const ResearchCard = ({ project }: ResearchCardProps) => {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.summary}</p>
      <Link
        href={`/research/${project.slug}`}
        className="text-blue-600 hover:underline font-semibold"
      >
        Read More &rarr;
      </Link>
    </div>
  );
};

export default ResearchCard;
