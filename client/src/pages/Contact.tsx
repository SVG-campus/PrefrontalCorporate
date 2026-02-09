import { Layout } from "@/components/Layout";
import { useProfile } from "@/hooks/use-content";
import { Skeleton } from "@/components/ui/skeleton";
import { Mail, MapPin, Phone, Linkedin, Database, Copy, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { data: profile, isLoading } = useProfile();
  const { toast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(text);
    toast({
      title: "Copied to clipboard",
      description: text,
    });
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto space-y-6">
          <Skeleton className="h-12 w-64" />
          <Skeleton className="h-64 w-full rounded-2xl" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">
            Available for research collaborations, optimization consulting, and enterprise solutions.
          </p>
        </div>

        <div className="grid gap-6">
          <Card className="overflow-hidden border-primary/20 shadow-lg shadow-primary/5">
            <div className="h-2 w-full bg-primary" />
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                      <Mail className="w-5 h-5 text-primary" /> Email Addresses
                    </h3>
                    <div className="space-y-3">
                      {profile?.emails?.map((email: string) => (
                        <div key={email} className="group flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-transparent hover:border-primary/20 transition-all">
                          <span className="text-sm font-mono">{email}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => copyToClipboard(email)}
                          >
                            {copiedEmail === email ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-primary" /> Phone
                    </h3>
                    <p className="text-lg font-mono">{profile?.phone}</p>
                  </div>
                </div>

                <div className="space-y-8">
                   <div>
                    <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" /> Laboratory / Office
                    </h3>
                    <address className="not-italic text-muted-foreground leading-relaxed p-4 bg-muted/20 rounded-lg border border-border/50">
                      {profile?.address}
                    </address>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-lg mb-4">Connect</h3>
                    <div className="flex gap-4">
                      {profile?.socialLinks?.map((link: any, i: number) => (
                        <a 
                          key={i} 
                          href={link.url} 
                          target="_blank" 
                          rel="noreferrer"
                        >
                          <Button variant="outline" className="gap-2 w-full">
                            {link.platform.toLowerCase().includes('linkedin') ? <Linkedin className="w-4 h-4" /> : <Database className="w-4 h-4" />}
                            {link.platform}
                          </Button>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Artistic Scientific Element */}
        <div className="mt-20 flex justify-center opacity-30">
          <div className="grid grid-cols-8 gap-2">
            {Array.from({ length: 32 }).map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 rounded-full bg-primary"
                style={{ opacity: Math.random() }}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
