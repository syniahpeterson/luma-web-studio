import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";

function AboutIntro() {
  return (
    <section className="border-b border-white/10">
      <Container className="py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          <SectionHeading
            eyebrow="Who We Are"
            title="Thoughtful websites for businesses ready to grow."
            description="Luma Web Studio is a modern web development studio focused on creating websites that are clear, purposeful, and built around the people who use them."
          />

          <div className="space-y-6 text-base leading-7 text-[#b7b7be] md:text-lg">
            <p>
              We believe a website should do more than look good. It should
              communicate what a business does, build trust with visitors, and
              make it easy for people to take the next step.
            </p>

            <p>
              Our approach combines thoughtful design with modern frontend
              development to create responsive, accessible, and maintainable
              websites that businesses can be proud of.
            </p>

            <p>
              Whether we're building a new website or improving an existing one,
              we focus on creating a strong digital foundation that can grow
              alongside the business.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutIntro;
