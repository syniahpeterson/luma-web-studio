import Container from "./Container";

function PageHero({ eyebrow, title, description }) {
  return (
    <section className="border-b border-white/10">
      <Container className="py-20 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
            {eyebrow}
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#b7b7be]">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default PageHero;
