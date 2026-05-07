export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#070b1a]">

      {/* MAIN GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-[#0b1120] to-indigo-950" />

      {/* GLOW 1 */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />

      {/* GLOW 2 */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

    </div>
  );
}