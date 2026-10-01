import Button from "../ui/Button";
import Container from "./Container";

function CTASection({
  eyebrow,
  title,
  description,
  buttonText = "Start a Project",
  buttonTo = "/contact",
}) {
  return (
    <section>
      <Container className="py-24 lg:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#161619] px-6 py-16 text-center sm:px-10 lg:px-16">
          <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.14),transparent_55%)]" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
              {eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#b7b7be] sm:text-lg">
              {description}
            </p>

            <div className="mt-8">
              <Button to={buttonTo}>{buttonText}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTASection;
