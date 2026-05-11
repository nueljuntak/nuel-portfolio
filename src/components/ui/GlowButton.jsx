export default function GlowButton({
  children,
  href,
}) {
  return (
    <a
      href={href}
      className="
      relative
      overflow-hidden
      px-6
      py-3
      rounded-xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-md
      text-white
      font-medium
      transition-all
      duration-500
      group
      "
    >

      {/* HOVER */}
      <span
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-blue-500
        to-purple-500
        translate-y-full
        group-hover:translate-y-0
        transition-transform
        duration-500
        "
      />

      <span className="relative z-10">
        {children}
      </span>

    </a>
  );
}