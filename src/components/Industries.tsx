import { Building2, Heart, Factory, ShoppingCart, Zap, Globe } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: Building2,
      title: 'Financial Services',
      description: 'Risk assessment, fraud detection, algorithmic trading, and customer analytics',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Medical imaging, drug discovery, patient care optimization, and diagnostic assistance',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Predictive maintenance, quality control, supply chain optimization, and smart factories',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: ShoppingCart,
      title: 'Retail & E-commerce',
      description: 'Personalized recommendations, inventory management, demand forecasting, and customer insights',
      color: 'from-violet-500 to-purple-600',
    },
    {
      icon: Zap,
      title: 'Energy & Utilities',
      description: 'Grid optimization, demand prediction, renewable energy management, and efficiency analysis',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Globe,
      title: 'Technology',
      description: 'Product innovation, user behavior analysis, automation systems, and platform optimization',
      color: 'from-cyan-500 to-blue-600',
    },
  ];

  return (
    <section id="industries" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Industries We Transform</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Deep industry expertise across sectors, delivering AI solutions that understand your unique challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className="relative">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300`}>
                  <industry.icon size={26} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                <p className="text-slate-400 leading-relaxed">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
