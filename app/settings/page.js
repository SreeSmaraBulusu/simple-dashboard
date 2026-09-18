import Link from "next/link";

export default function Settings() {
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
        <p className="eyebrow">SETTINGS</p>
        <h1>Settings</h1>
        <div className="panel">
          <div className="row"><span>Notifications</span><b>Enabled</b></div>
          <div className="row"><span>Theme</span><b>System</b></div>
          <div className="row"><span>Account</span><b>Student</b></div>
        </div>
      </section>
    </main>
  );
}