import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Edit, Trash2, Eye, Plus } from "lucide-react";

const DemoSection = () => {
  const mockData = [
    { id: "001", name: "John Doe", status: "Active", role: "Software Engineer" },
    { id: "002", name: "Jane Smith", status: "Pending", role: "Product Manager" },
    { id: "003", name: "Mike Johnson", status: "Active", role: "UX Designer" },
    { id: "004", name: "Sarah Wilson", status: "Inactive", role: "Data Analyst" },
    { id: "005", name: "David Brown", status: "Active", role: "DevOps Engineer" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="glass-card px-4 py-2 mb-6 border border-glass-border/30">
            Interactive Demo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the
            <span className="text-primary"> Power</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our intuitive interface makes job management effortless with real-time operations and beautiful design.
          </p>
        </div>

        {/* Demo interface */}
        <div className="glass-card p-8 rounded-3xl border border-glass-border/30 max-w-5xl mx-auto">
          {/* Header with search */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Career Quest Portal</h3>
              <p className="text-muted-foreground">Manage job applications and candidates</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search existing records" 
                  className="pl-10 glass-card border-glass-border/30"
                />
              </div>
              <Button variant="hero" size="default">
                <Plus className="w-4 h-4 mr-2" />
                Add New
              </Button>
            </div>
          </div>

          {/* Status filters */}
          <div className="flex gap-2 mb-6 overflow-x-auto">
            <Button variant="glass" size="sm">All Records</Button>
            <Button variant="ghost" size="sm">Active</Button>
            <Button variant="ghost" size="sm">Pending</Button>
            <Button variant="ghost" size="sm">Inactive</Button>
          </div>

          {/* Data table */}
          <div className="glass-card rounded-2xl border border-glass-border/20 overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-12 gap-4 p-4 border-b border-glass-border/20 font-semibold text-sm uppercase tracking-wide">
              <div className="col-span-2">ID</div>
              <div className="col-span-3">Name</div>
              <div className="col-span-3">Role</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Actions</div>
            </div>

            {/* Table rows */}
            {mockData.map((item, index) => (
              <div 
                key={item.id} 
                className="grid grid-cols-12 gap-4 p-4 border-b border-glass-border/10 hover:bg-glass/30 transition-colors group"
              >
                <div className="col-span-2 text-muted-foreground font-mono">{item.id}</div>
                <div className="col-span-3 font-medium">{item.name}</div>
                <div className="col-span-3 text-muted-foreground">{item.role}</div>
                <div className="col-span-2">
                  <Badge 
                    variant={item.status === 'Active' ? 'default' : item.status === 'Pending' ? 'secondary' : 'outline'}
                    className={
                      item.status === 'Active' 
                        ? 'bg-success text-success-foreground' 
                        : item.status === 'Pending'
                        ? 'bg-warning text-warning-foreground'
                        : 'bg-muted text-muted-foreground'
                    }
                  >
                    {item.status}
                  </Badge>
                </div>
                <div className="col-span-2 flex gap-1">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-success/20">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-primary/20">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-destructive/20">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Table footer */}
          <div className="flex justify-between items-center mt-6 text-sm text-muted-foreground">
            <div>Showing 5 of 847 results</div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" disabled>Previous</Button>
              <Button variant="glass" size="sm">1</Button>
              <Button variant="ghost" size="sm">2</Button>
              <Button variant="ghost" size="sm">3</Button>
              <Button variant="ghost" size="sm">Next</Button>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="mx-auto">
            Start Building Your Portal
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;