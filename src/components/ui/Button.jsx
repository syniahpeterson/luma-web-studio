import { Link } from "react-router-dom";

function Button({ children, to, href, variant = "primary" }) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors duration-200";

  const variants = {
    primary:
      "bg-[var(--color-brand)] text-[var(--color-text)] hover:bg-[var(--color-brand-hover)]",
    secondary:
      "border border-white/10 bg-white/5 hover:border-[var(--color-brand)]/40 hover:bg-white/10",
  };

  const className = `${baseStyles} ${variants[variant]}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}

export default Button;
