import { Layout } from "@/components/Layout";
import { useProject } from "@/hooks/use-content";
import { Link, useRoute } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { format } from "date-fns";

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:slug");
  const { data: project, isLoading, error } = useProject(params?.slug || "");

  if (isLoading) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto space-y-8">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-16 w-3/4" />
          <Skeleton className="h-[400px] w-full rounded-2xl" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !project) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link href="/projects">
            <Button>Back to Research</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/projects">
            <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Research
            </Button>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 border-b border-border/40 pb-12">
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge variant="secondary" className="text-primary bg-primary/10 hover:bg-primary/20">
              {project.category}
            </Badge>
            {project.createdAt && (
              <Badge variant="outline" className="text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {format(new Date(project.createdAt), "MMMM yyyy")}
              </Badge>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight text-foreground">
            {project.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
             <div className="flex flex-wrap gap-2">
               {project.tags?.map(tag => (
                 <span key={tag} className="text-sm text-muted-foreground font-mono bg-muted/30 px-2 py-1 rounded flex items-center gap-1">
                   <Tag className="w-3 h-3" /> {tag}
                 </span>
               ))}
             </div>
             
             {project.externalUrl && (
               <a href={project.externalUrl} target="_blank" rel="noopener noreferrer">
                 <Button className="shadow-lg shadow-primary/20 hover:shadow-primary/30">
                   View on Kaggle <ExternalLink className="ml-2 w-4 h-4" />
                 </Button>
               </a>
             )}
          </div>
        </header>

        {/* Hero Image if available */}
        {project.imageUrl && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-border/20">
            <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover" />
          </div>
        )}

        {/* Main Content */}
        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <ReactMarkdown>{project.fullContent}</ReactMarkdown>
        </div>
        
        {/* Footer actions */}
        <div className="mt-16 pt-8 border-t border-border/40 flex justify-between items-center">
          <p className="text-muted-foreground text-sm font-mono">
             Optimized for: {project.category}
          </p>
          <div className="flex gap-2">
             {/* Share buttons or similar could go here */}
          </div>
        </div>
      </article>
    </Layout>
  );
}
