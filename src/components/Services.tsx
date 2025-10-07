import { Brain, Zap, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Develop comprehensive AI roadmaps aligned with your business objectives and market opportunities.',
      features: [
        'AI Readiness Assessment',
        'Strategic Planning & Roadmapping',
        'ROI Analysis & Business Case Development',
        'Technology Stack Recommendations',
      ],
    },
    {
      icon: Zap,
      title: 'Custom AI Development',
      description: 'Build bespoke AI solutions that solve your unique business challenges and drive competitive advantage.',
      features: [
        'Machine Learning Model Development',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics Platforms',
      ],
    },
    {
      icon: Shield,
      title: 'AI Implementation & Deployment',
      description: 'Seamlessly integrate AI solutions into your existing infrastructure with enterprise-grade security.',
      features: [
        'Cloud & On-Premise Deployment',
        'API Integration & Development',
        'Security & Compliance Implementation',
        'Performance Monitoring & Optimization',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-slate-950"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive AI Services</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            End-to-end AI solutions tailored to your business needs and industry requirements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
                <service.icon size={26} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
