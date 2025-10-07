import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-slate-950 to-blue-600/10"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-8 backdrop-blur-sm">
          <Sparkles size={16} className="text-cyan-400" />
          <span className="text-sm text-cyan-400 font-medium">AI Transformation Specialists</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            NoraShift
          </span>
          <br />
          <span className="text-white">Transforming Business</span>
          <br />
          <span className="text-slate-300">at the Speed of Light</span>
        </h1>

        <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          From strategy to deployment, NoraShift turns complex AI into real-world results — fast.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 flex items-center gap-2"
          >
            Schedule a Discovery Call
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#framework"
            className="px-8 py-4 border border-slate-700 rounded-full font-semibold text-lg hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
          >
            Explore Our Process
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '150+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '3x', label: 'Average ROI' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
