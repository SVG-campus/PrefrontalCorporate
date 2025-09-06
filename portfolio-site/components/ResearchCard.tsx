import Link from 'next/link';
import type { ResearchProject } from '@/data/research';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ResearchCardProps {
  project: ResearchProject;
}

const ResearchCard = ({ project }: ResearchCardProps) => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{project.summary}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline">
          <Link href={`/research/${project.slug}`}>
            Read More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResearchCard;
