import { Video, Mail, Cloud, Database, Calendar, MessageSquare } from "lucide-react";

const integrations = [
  { name: "Google Meet", icon: Video, color: "from-green-400 to-green-600" },
  { name: "Zoom", icon: Video, color: "from-blue-400 to-blue-600" },
  { name: "Microsoft Teams", icon: MessageSquare, color: "from-purple-400 to-purple-600" },
  { name: "Slack", icon: MessageSquare, color: "from-pink-400 to-pink-600" },
  { name: "Salesforce", icon: Database, color: "from-cyan-400 to-cyan-600" },
  { name: "Dropbox", icon: Cloud, color: "from-indigo-400 to-indigo-600" },
  { name: "Google Calendar", icon: Calendar, color: "from-orange-400 to-orange-600" },
  { name: "Gmail", icon: Mail, color: "from-red-400 to-red-600" },
];

export const IntegrationsSection = () => {
  const handleIntegrationClick = (name: string) => {
    console.log(`Clicked integration: ${name}`);
    // You can add modal or navigation logic here
  };

  return (
    <section id="integrations" className="py-24 scroll-mt-16" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Seamless <span className="gradient-text">Integrations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with all your favorite tools and platforms in one click
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              onClick={() => handleIntegrationClick(integration.name)}
              className="glass-card rounded-2xl p-6 hover:shadow-hover transition-all duration-300 animate-scale-in cursor-pointer group text-center"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="mb-4 flex justify-center">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${integration.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                  <integration.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-sm">{integration.name}</h3>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            And 50+ more integrations available
          </p>
        </div>
      </div>
    </section>
  );
};
