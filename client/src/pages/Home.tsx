import { Layout } from "@/components/Layout";
import { useProfile, useProjects } from "@/hooks/use-content";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "wouter";
import { ArrowRight, MapPin, Mail, Phone, Linkedin, Database } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { data: profile, isLoading: profileLoading } = useProfile();
  const { data: projects, isLoading: projectsLoading } = useProjects();

  const featuredProjects = projects?.filter(p => p.featured) || projects?.slice(0, 3) || [];

  if (profileLoading || projectsLoading) {
    return (
      <Layout>
        <div className="space-y-8 animate-pulse">
          <Skeleton className="h-[400px] w-full rounded-xl" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Skeleton className="h-64 rounded-xl" />
            <Skeleton className="h-64 rounded-xl" />
            <Skeleton className="h-64 rounded-xl" />
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 overflow-hidden rounded-3xl bg-secondary/30 border border-border/50 mb-16 px-6 md:px-12">
        <div className="relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
              Optimize <span className="text-primary">Everything</span>.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
              Applying advanced mathematical optimization, artificial intelligence, and rigorous scientific methodology to solve complex global challenges.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/projects">
                <Button size="lg" className="rounded-full px-8 font-medium">
                  View Research <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Contact Me
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract Background Element - Fixed styling */}
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-5 pointer-events-none">
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary fill-current">
             <path transform="translate(100 100)" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.4,70.5,30.6C58.9,39.8,46.9,45.4,35.6,53.2C24.3,61,13.7,71,1.9,67.7C-9.9,64.4,-22.9,47.8,-35.1,36.4C-47.3,25,-58.7,18.8,-66.1,8.9C-73.5,-1,-76.9,-14.6,-73.2,-27.1C-69.5,-39.6,-58.7,-51,-46.3,-59.1C-33.9,-67.2,-19.9,-72,-5.7,-62.1" />
           </svg>
        </div>
      </section>

      {/* Profile Summary */}
      <section className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted border-4 border-white shadow-xl"
          >
            {profile?.avatarUrl ? (
              <img src={profile.avatarUrl} alt={profile.name} className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">No Avatar</div>
            )}
          </motion.div>
          <div className="flex gap-4">
            {profile?.socialLinks?.map((link: any, i: number) => (
              <a 
                key={i} 
                href={link.url} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 flex items-center justify-center p-3 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all shadow-sm"
              >
                {link.platform.toLowerCase().includes('linkedin') ? <Linkedin className="w-5 h-5" /> : <Database className="w-5 h-5" />}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 space-y-8">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">About the Researcher</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p>{profile?.bio}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-border/50 shadow-sm">
              <div className="bg-primary/10 p-3 rounded-xl text-primary"><MapPin className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-1">Location</h4>
                <p className="font-medium">{profile?.address}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-border/50 shadow-sm">
              <div className="bg-primary/10 p-3 rounded-xl text-primary"><Mail className="w-6 h-6" /></div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-1">Contact</h4>
                {profile?.emails?.map((email: string) => (
                   <p key={email} className="text-sm font-medium">{email}</p>
                ))}
                <p className="text-sm font-medium mt-1">{profile?.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-display font-bold">Featured Research</h2>
          <Link href="/projects">
            <Button variant="ghost" className="hidden sm:flex group">
              View All Archive <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
           <Link href="/projects">
            <Button variant="outline" className="w-full">View All Research</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
