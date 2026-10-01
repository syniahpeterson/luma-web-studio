import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-background)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <Link
            to="/"
            className="text-lg font-semibold tracking-light text-[var(--color-text)]"
          >
            Luma<span className="text-[var(--color-brand)]">.</span>
          </Link>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            Websites built to move your business forward.
          </p>
        </div>
        <p className="text-sm text-[var(--color-text-muted)]">
          &copy; {new Date().getFullYear()} Luma Web Studio. All Rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
