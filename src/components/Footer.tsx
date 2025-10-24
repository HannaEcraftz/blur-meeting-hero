import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "API", "Changelog"],
  Company: ["About", "Careers", "Blog", "Press Kit", "Partners"],
  Resources: ["Documentation", "Help Center", "Community", "Contact", "Status"],
  Legal: ["Privacy", "Terms", "Security", "Cookies", "GDPR"],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@aimeeting.com", label: "Email" },
];

export const Footer = () => {
  const handleLinkClick = (link: string) => {
    console.log(`Footer link clicked: ${link}`);
  };

  const handleSocialClick = (social: string) => {
    console.log(`Social link clicked: ${social}`);
  };

  return (
    <footer className="relative overflow-hidden pt-20 pb-10"
            style={{ background: 'var(--gradient-primary)' }}>
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">AI Meeting</h3>
            <p className="text-white/80 mb-6">
              Transform your meetings with the power of AI
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  onClick={() => handleSocialClick(social.label)}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link);
                      }}
                      className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2025 AI Meeting Assistant. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleLinkClick("Privacy Policy"); }}
                className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleLinkClick("Terms of Service"); }}
                className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleLinkClick("Cookie Policy"); }}
                className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
