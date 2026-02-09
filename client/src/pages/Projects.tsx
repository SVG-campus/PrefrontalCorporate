import { Layout } from "@/components/Layout";
import { useProjects } from "@/hooks/use-content";
import { ProjectCard } from "@/components/ProjectCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const { data: projects, isLoading } = useProjects();
  const [filter, setFilter] = useState<string>("All");
  const [search, setSearch] = useState("");

  if (isLoading) {
    return (
      <Layout>
        <div className="space-y-6">
          <Skeleton className="h-12 w-64 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-64 rounded-xl" />
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  const categories = ["All", ...Array.from(new Set(projects?.map(p => p.category) || []))];

  const filteredProjects = projects?.filter(p => {
    const matchesCategory = filter === "All" || p.category === filter;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="mb-12">
        <h1 className="text-4xl font-display font-bold mb-4">Research Archive</h1>
        <p className="text-muted-foreground max-w-2xl">
          Explore a collection of optimized solutions across artificial intelligence, healthcare, economics, and logistics.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-10 items-start md:items-center justify-between sticky top-20 z-40 bg-background/95 backdrop-blur py-4 border-b border-border/40">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
              className="rounded-full text-sm h-8"
              size="sm"
            >
              {cat}
            </Button>
          ))}
        </div>
        
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search projects..." 
            className="pl-9 rounded-full bg-muted/30 border-border/50 focus:bg-background transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[50vh]">
        {filteredProjects?.length === 0 ? (
          <div className="col-span-full text-center py-20 text-muted-foreground">
            No projects found matching your criteria.
          </div>
        ) : (
          filteredProjects?.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))
        )}
      </div>
    </Layout>
  );
}
