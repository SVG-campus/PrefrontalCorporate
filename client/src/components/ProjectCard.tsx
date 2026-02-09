import { Project } from "@shared/schema";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight, Brain, Activity, TrendingUp, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category.toLowerCase()) {
    case 'ai': return <Brain className="w-4 h-4" />;
    case 'health': return <Activity className="w-4 h-4" />;
    case 'economics': return <TrendingUp className="w-4 h-4" />;
    default: return <Zap className="w-4 h-4" />;
  }
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Link href={`/project/${project.slug}`}>
        <Card className="group h-full flex flex-col cursor-pointer border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-card/50 backdrop-blur-sm overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start mb-2">
              <Badge variant="outline" className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-muted-foreground border-primary/20 bg-primary/5 group-hover:bg-primary/10 transition-colors">
                <CategoryIcon category={project.category} />
                {project.category}
              </Badge>
              {project.externalUrl && (
                <div className="text-muted-foreground/50 group-hover:text-primary transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              )}
            </div>
            <CardTitle className="font-display text-xl leading-tight group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 pb-4">
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
              {project.description}
            </p>
          </CardContent>
          
          <CardFooter className="pt-0 border-t border-border/20 mt-auto pt-4 flex gap-2 overflow-hidden">
            {project.tags?.slice(0, 3).map((tag, i) => (
              <span key={i} className="text-[10px] font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded-sm">
                #{tag}
              </span>
            ))}
            {project.tags && project.tags.length > 3 && (
              <span className="text-[10px] font-mono text-muted-foreground py-1">
                +{project.tags.length - 3}
              </span>
            )}
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
