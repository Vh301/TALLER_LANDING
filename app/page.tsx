import { SITE, TOKEN } from "@/lib/constants";

const utilityCards = [
  {
    title: "Club Access",
    text: "Access to community activities, updates, and early project previews.",
  },
  {
    title: "Contributor Recognition",
    text: "Recognition for testers, creators, designers, writers, developers, and early supporters.",
  },
  {
    title: "Community Participation",
    text: "Participation in non-financial community polls, feedback rounds, and creative decisions.",
  },
  {
    title: "Experimental Products",
    text: "Future use inside TALLER mini-apps, creative tools, and community experiments.",
  },
] as const;

const roadmap = [
  {
    title: "Club Landing",
    text: "Launch public information page for TALLER BC.",
  },
  {
    title: "Community Setup",
    text: "Prepare channels, contributor roles, and basic participation flow.",
  },
  {
    title: "Token Verification",
    text: "Prepare metadata, landing page, and public information for wallet/token verification.",
  },
  {
    title: "Club Activities",
    text: "Start simple community activities, feedback rounds, and creative tasks.",
  },
  {
    title: "Mini-App Experiments",
    text: "Explore future use of TALLER inside lightweight community mini-apps.",
  },
] as const;

const tokenRows = [
  ["Name", TOKEN.name],
  ["Club name", TOKEN.clubName],
  ["Symbol", TOKEN.symbol],
  ["Network", TOKEN.network],
  ["Standard", TOKEN.standard],
  ["Utility", TOKEN.utility],
  ["Investment product", TOKEN.investmentProduct],
] as const;

export default function HomePage() {
  return (
    <>
      <header className="border-b border-[var(--card-border)]/80">
        <div className="section-inner flex items-center justify-between py-5 sm:py-6">
          <div className="text-sm font-semibold tracking-wide text-sky-400">
            TALLER BC
          </div>
          <nav className="flex gap-4 text-sm text-[var(--muted)]">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#token" className="hover:text-white">
              Token
            </a>
            <a href="#roadmap" className="hover:text-white">
              Roadmap
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-[var(--card-border)]/60">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0ea5e915,_transparent_55%)]" />
          <div className="section-inner relative">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-400">
              TON · Community utility
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              TALLER BC
            </h1>
            <p className="mt-2 text-xl text-[var(--muted)] sm:text-2xl">
              TALLER Builders Club
            </p>
            <p className="mt-6 text-lg font-medium text-sky-300 sm:text-xl">
              {SITE.slogan}
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">{SITE.sloganRu}</p>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              A community utility token on TON for builders, creators, testers,
              and early supporters.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
              TALLER is designed for participation, access, contributor
              recognition, and experimental digital products inside the TALLER
              Builders Club. It is not presented as an investment product and
              does not promise financial returns.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#token" className="btn-primary">
                View Token Info
              </a>
              <a href="#community" className="btn-secondary">
                Join Community
              </a>
            </div>
          </div>
        </section>

        {/* What is TALLER BC */}
        <section id="about" className="border-b border-[var(--card-border)]/60">
          <div className="section-inner">
            <h2 className="section-title">What is TALLER BC?</h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              TALLER BC is a creative builders club powered by a simple utility
              token on TON. The token is used to recognize participation,
              support access to club activities, and connect early contributors
              around experimental digital products.
            </p>
          </div>
        </section>

        {/* Utility */}
        <section id="utility" className="border-b border-[var(--card-border)]/60">
          <div className="section-inner">
            <h2 className="section-title">Utility</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {utilityCards.map((card) => (
                <article key={card.title} className="card">
                  <h3 className="text-lg font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What TALLER is not */}
        <section className="border-b border-[var(--card-border)]/60 bg-[var(--accent-soft)]">
          <div className="section-inner">
            <h2 className="section-title">What TALLER is not</h2>
            <ul className="mt-8 space-y-4 text-base leading-relaxed text-[var(--foreground)] sm:text-lg">
              <li>
                <strong>TALLER is not an investment product.</strong>
              </li>
              <li>
                <strong>
                  TALLER does not promise profit, yield, passive income, or
                  financial returns.
                </strong>
              </li>
              <li>
                <strong>
                  TALLER is a community utility token for participation, access,
                  and contribution recognition.
                </strong>
              </li>
            </ul>
          </div>
        </section>

        {/* Built on TON */}
        <section className="border-b border-[var(--card-border)]/60">
          <div className="section-inner">
            <h2 className="section-title">Built on TON</h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              TALLER is issued on TON as a Jetton, using the TON ecosystem for
              fast, low-cost transfers and simple wallet support.
            </p>
          </div>
        </section>

        {/* Token Info */}
        <section id="token" className="border-b border-[var(--card-border)]/60">
          <div className="section-inner">
            <h2 className="section-title">Token Info</h2>
            <div className="card mt-10 overflow-x-auto">
              <table className="w-full min-w-[320px] text-left text-sm">
                <tbody>
                  {tokenRows.map(([label, value]) => (
                    <tr
                      key={label}
                      className="border-b border-[var(--card-border)] last:border-0"
                    >
                      <th className="py-3 pr-6 font-medium text-[var(--muted)]">
                        {label}
                      </th>
                      <td className="py-3 text-white">{value}</td>
                    </tr>
                  ))}
                  <tr className="border-b border-[var(--card-border)]">
                    <th className="py-3 pr-6 align-top font-medium text-[var(--muted)]">
                      Contract
                    </th>
                    <td className="py-3 font-mono text-xs leading-relaxed break-all text-sky-300 sm:text-sm">
                      {TOKEN.masterAddress}
                    </td>
                  </tr>
                  <tr>
                    <th className="py-3 pr-6 font-medium text-[var(--muted)]">
                      Explorer
                    </th>
                    <td className="py-3">
                      <a
                        href={TOKEN.explorerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 underline-offset-4 hover:underline"
                      >
                        View on Tonviewer
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="border-b border-[var(--card-border)]/60">
          <div className="section-inner">
            <h2 className="section-title">Roadmap</h2>
            <ol className="mt-10 space-y-5">
              {roadmap.map((item, index) => (
                <li key={item.title} className="card flex gap-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-sm font-semibold text-sky-400">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Community placeholder */}
        <section id="community" className="border-b border-[var(--card-border)]/60">
          <div className="section-inner text-center">
            <h2 className="section-title">Join Community</h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
              Community channels and participation links will be announced here.
              TALLER BC is for builders, creators, and early supporters — not
              for speculative trading.
            </p>
          </div>
        </section>
      </main>

      <footer className="mt-auto">
        <div className="section-inner border-t border-[var(--card-border)]/60 py-10 text-center text-sm text-[var(--muted)]">
          <p className="font-medium text-white">TALLER BC — TALLER Builders Club</p>
          <p className="mt-2">
            Community utility token on TON. Not an investment product.
          </p>
        </div>
      </footer>
    </>
  );
}
