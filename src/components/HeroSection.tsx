import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Database, Users, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>
      
      {/* Floating glass elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 glass-card rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-32 w-24 h-24 glass-card rounded-lg animate-float opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-20 glass-card rounded-2xl animate-float opacity-50" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="animate-fade-in mb-8">
          <Badge variant="secondary" className="glass-card px-6 py-2 text-sm font-medium border border-glass-border/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Gemini-Powered CRUD Application
          </Badge>
        </div>

        {/* Main headline */}
        <div className="animate-slide-up mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Career Quest
            <span className="block text-primary hero-glow">Job Portal</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Advanced job management system with AI-powered matching, real-time collaboration, 
            and intuitive CRUD operations for modern recruitment.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center mb-16" style={{ animationDelay: '0.2s' }}>
          <Button variant="hero" size="lg" className="group">
            Get Started Now
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="glass" size="lg">
            View Demo
          </Button>
        </div>

        {/* Feature highlights */}
        <div className="animate-slide-up grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" style={{ animationDelay: '0.4s' }}>
          <div className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all">
              <Database className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart CRUD Operations</h3>
            <p className="text-muted-foreground">Intuitive create, read, update, and delete operations with real-time validation.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all">
              <Users className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Collaborative Workspace</h3>
            <p className="text-muted-foreground">Multi-user environment with role-based access and real-time updates.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI-Powered Matching</h3>
            <p className="text-muted-foreground">Gemini AI integration for intelligent job matching and candidate recommendations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;