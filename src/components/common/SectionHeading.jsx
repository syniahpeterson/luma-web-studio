function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-[#b7b7be] md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
