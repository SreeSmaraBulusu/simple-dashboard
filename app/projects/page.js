import Link from "next/link";

export default function Projects() {
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
        <p className="eyebrow">PROJECTS</p>
        <h1>Your Projects</h1>
        <div className="panel">
          <div className="row"><span>AI Study Buddy</span><b>Active</b></div>
          <div className="row"><span>Portfolio Website</span><b>Complete</b></div>
          <div className="row"><span>Capstone Dashboard</span><b>Active</b></div>
        </div>
      </section>
    </main>
  );
}