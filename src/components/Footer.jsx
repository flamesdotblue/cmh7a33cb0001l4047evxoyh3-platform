export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-6 py-10 text-sm text-white/60">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
        <p>© {new Date().getFullYear()} AutoDevOps One-Click. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-white transition" href="#features">Features</a>
          <a className="hover:text-white transition" href="#workflow">How it works</a>
          <a className="hover:text-white transition" href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
