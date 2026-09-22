import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0b]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <Link
            to="/"
            className="text-lg font-semibold tracking-light text-white"
          >
            Luma<span className="text-purple-400">.</span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Websites built to move your business forward.
          </p>
        </div>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Luma Web Studio. All Rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
