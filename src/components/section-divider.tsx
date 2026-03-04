export function SectionDivider() {
  return (
    <div className="flex justify-center py-12 relative">
      <div className="max-w-4xl w-full relative group">
        {/* Main divider line */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent relative overflow-hidden">
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-1000"></div>
          {/* Sweeping light effect */}
          <div className="absolute inset-0 w-full h-full divider-sweep opacity-30"></div>
          {/* Moving shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-400 to-transparent opacity-10 animate-pulse"></div>
        </div>
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-gold-400 to-electric-400 opacity-60 animate-pulse"></div>
        </div>
        
        {/* Side decorative elements */}
        <div className="absolute top-1/2 left-8 -translate-y-1/2">
          <div className="w-1 h-1 rounded-full bg-gold-400 opacity-40 animate-ping"></div>
        </div>
        <div className="absolute top-1/2 right-8 -translate-y-1/2">
          <div className="w-1 h-1 rounded-full bg-electric-400 opacity-40 animate-ping" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        {/* Subtle expanding rings on hover */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
          <div className="w-8 h-8 rounded-full border border-gold-400/30 animate-ping"></div>
        </div>
      </div>
    </div>
  );
} 