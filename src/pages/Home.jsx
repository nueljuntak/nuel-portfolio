import AnimatedBackground from "../components/layout/AnimatedBackground";

export default function Home() {
  return (
    <div className="min-h-screen text-white flex items-center justify-center">
      <AnimatedBackground />
      <h1 className="text-4xl">Homepage</h1>
    </div>
  );
}