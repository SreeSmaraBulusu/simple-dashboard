import Link from "next/link";

const cards = [
  ["Projects", "3", "Active projects"],
  ["Tasks", "12", "Tasks to review"],
  ["Progress", "78%", "Overall progress"]
];

export default function Dashboard() {
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

      <section className="page">
        <p className="eyebrow">DASHBOARD</p>
        <h1>Overview</h1>
        <p className="muted">Here is a quick view of your application.</p>

        <div className="grid">
          {cards.map(([title, value, text]) => (
            <div className="card" key={title}>
              <span>{title}</span>
              <strong>{value}</strong>
              <small>{text}</small>
            </div>
          ))}
        </div>

        <div className="panel">
          <h2>Recent activity</h2>
          <p>✓ Dashboard loaded successfully</p>
          <p>✓ Production-ready structure configured</p>
          <p>✓ Navigation routes available</p>
        </div>
      </section>
    </main>
  );
}