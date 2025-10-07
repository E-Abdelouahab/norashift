import { Lightbulb, Target, TrendingUp, Rocket } from 'lucide-react';

export default function Framework() {
  const phases = [
    {
      icon: Lightbulb,
      title: 'Novelty',
      description: 'AI Innovation that breaks new ground. We identify cutting-edge opportunities and implement breakthrough solutions that give you a competitive edge in your market.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      title: 'Optimization',
      description: 'Streamline operations with precision. We optimize your existing processes and systems to maximize efficiency, reduce costs, and eliminate bottlenecks through intelligent automation.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: TrendingUp,
      title: 'Results',
      description: 'Measurable outcomes that matter. We focus on delivering tangible ROI, performance improvements, and business value that directly impacts your bottom line and growth trajectory.',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Rocket,
      title: 'Acceleration',
      description: 'Fast-track your AI journey. We accelerate time-to-market and ensure rapid deployment without compromising quality, security, or scalability requirements.',
      color: 'from-violet-500 to-fuchsia-500',
    },
  ];

  return (
    <section id="framework" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">N.O.R.A.</span> Framework
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Our proven methodology ensures your AI transformation delivers measurable results across every phase of implementation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <div
              key={phase.title}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-800/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300`}>
                  <phase.icon size={28} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                <p className="text-slate-400 leading-relaxed">{phase.description}</p>

                <div className="mt-6 pt-6 border-t border-slate-800">
                  <span className="text-sm font-semibold text-slate-500">Phase {index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
