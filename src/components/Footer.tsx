import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ['About Us', 'Careers', 'Blog', 'Press'],
    Services: ['AI Strategy', 'Development', 'Implementation', 'Consulting'],
    Resources: ['Case Studies', 'Whitepapers', 'Documentation', 'API'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Compliance'],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 inline-block">
              NoraShift
            </a>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Transforming businesses with cutting-edge AI solutions. From strategy to deployment, we deliver results at the speed of light.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-200"
                >
                  <social.icon size={18} className="text-slate-400" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            {currentYear} NoraShift. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Built with precision and passion for AI excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
