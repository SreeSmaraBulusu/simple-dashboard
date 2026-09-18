import Link from "next/link";

export default function Home() {
  return (
    <main className="shell">
      <nav className="nav">
        <div className="brand">FlyRank Capstone</div>
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/settings">Settings</Link>
          <Link href="/health">Health</Link>
        </div>
      </nav>

      <section className="hero">
        <div>
          <p className="eyebrow">SIMPLE • FAST • PRODUCTION READY</p>
          <h1>Welcome to your dashboard.</h1>
          <p className="muted">
            A clean dashboard website built for the FlyRank capstone.
            Track projects, check application health, and manage settings
            from one simple interface.
          </p>
          <Link className="button" href="/dashboard">Open Dashboard</Link>
        </div>
      </section>
    </main>
  );
}