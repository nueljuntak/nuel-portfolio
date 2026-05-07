export default function IconGlow({ children }) {
  return (
    <div className="relative group">

      {/* Glow */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur opacity-40 group-hover:opacity-80 transition duration-500" />

      {/* Circle */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
        {children}
      </div>

    </div>
  );
}