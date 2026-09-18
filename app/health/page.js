import Link from "next/link";

export default function Health() {
  return (
    <main className="shell">
      <nav className="nav">
        <div className="brand">FlyRank Capstone</div>
        <div className="links">
          <Link href="/">Home</Link><Link href="/dashboard">Dashboard</Link>
          <Link href="/projects">Projects</Link><Link href="/settings">Settings</Link>
          <Link href="/health">Health</Link>
        </div>
      </nav>
      <section className="page">
        <p className="eyebrow">SYSTEM HEALTH</p>
        <h1>Application Health</h1>
        <div className="panel">
          <div className="health"><span className="dot"></span> Website — Operational</div>
          <div className="health"><span className="dot"></span> Dashboard — Operational</div>
          <div className="health"><span className="dot"></span> Navigation — Operational</div>
        </div>
      </section>
    </main>
  );
}