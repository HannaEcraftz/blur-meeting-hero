import { Zap, Target, FileText, TrendingUp } from "lucide-react";

const actions = [
  {
    icon: Zap,
    title: "Take Action",
    description: "Convert discussions into actionable tasks instantly",
    tags: ["#AI", "#Automation", "#Tasks"],
  },
  {
    icon: Target,
    title: "Meeting Insights",
    description: "Understand meeting dynamics and participation patterns",
    tags: ["#Analytics", "#Insights", "#Data"],
  },
  {
    icon: FileText,
    title: "Smart Notes",
    description: "Auto-generated notes with key highlights and decisions",
    tags: ["#Notes", "#Summary", "#Documentation"],
  },
  {
    icon: TrendingUp,
    title: "Project Summaries",
    description: "Track project progress across all your meetings",
    tags: ["#Projects", "#Tracking", "#Progress"],
  },
];

export const AIActionsSection = () => {
  const handleActionClick = (title: string) => {
    console.log(`Clicked on: ${title}`);
    // You can add navigation or modal logic here
  };

  return (
    <section id="actions" className="py-24 scroll-mt-16" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            AI Actions & <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Intelligent features that help you make the most of every meeting
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, index) => (
            <div 
              key={index}
              onClick={() => handleActionClick(action.title)}
              className="glass-card rounded-2xl p-6 hover:shadow-hover transition-all duration-300 animate-scale-in cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                     style={{ background: 'var(--gradient-primary)' }}>
                  <action.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{action.title}</h3>
                <p className="text-muted-foreground text-sm">{action.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {action.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
