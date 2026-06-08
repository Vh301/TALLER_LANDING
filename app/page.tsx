import { BrandLockup } from "@/components/brand";
import { COMMUNITY, SITE, TOKEN } from "@/lib/constants";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#grow", label: "Grow" },
  { href: "#utility", label: "Utility" },
  { href: "#token", label: "Token" },
] as const;

const pillarCards = [
  {
    title: "Participation",
    text: "Join club activities, feedback rounds, and creative discussions around digital ideas on TON.",
  },
  {
    title: "Access",
    text: "Access to community updates, early previews, and future club-only materials as features roll out.",
  },
  {
    title: "Recognition",
    text: "Recognition for makers, testers, designers, developers, writers, and early supporters who help build the club.",
  },
  {
    title: "Future Club Features",
    text: "Lightweight experiments ahead: mini-apps, bots, design concepts, game mechanics, and Web3 prototypes born inside the club.",
  },
] as const;

const audienceItems = [
  "Builders and developers shipping ideas on TON",
  "Designers exploring visuals, UX, and creative concepts",
  "Makers of mini-apps, bots, and small digital tools",
  "Testers and early supporters who shape direction with feedback",
  "People interested in calm, experimental Web3 community work",
] as const;

const roadmap = [
  {
    title: "Club Landing",
    text: "Public home for TALLER BC — clear story, token facts, and a builder-first message on TON.",
  },
  {
    title: "Community Channels",
    text: "Channels, roles, and a simple flow for participation and updates.",
  },
  {
    title: "Token & Metadata",
    text: "Consistent public information for wallets, explorers, and club identity.",
  },
  {
    title: "Club Activities",
    text: "Feedback rounds, creative tasks, and non-financial community decisions.",
  },
  {
    title: "Mini-App Experiments",
    text: "Small TON-native experiments: tools, bots, and prototypes inside the club.",
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
      <header className="site-header sticky top-0 z-50">
        <div className="section-inner site-header__inner !py-4 sm:!py-5">
          <a href="#" className="site-header__brand">
            <BrandLockup size="sm" priority />
          </a>
          <nav className="site-nav" aria-label="Main">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="site-nav__link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero-section">
          <div className="hero-section__bg" aria-hidden>
            <div className="hero-section__grid" />
            <div className="hero-section__glow hero-section__glow--1" />
            <div className="hero-section__glow hero-section__glow--2" />
          </div>
          <div className="section-inner relative">
            <p className="hero-eyebrow">TON · Creative builders club</p>
            <div className="hero-brand-stage">
              <BrandLockup size="lg" showTagline priority />
              <div className="hero-brand-copy">
                <div className="hero-rise-line" aria-hidden>
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                  {SITE.heroSubtitle}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--foreground)] sm:text-lg">
              {SITE.heroTokenLine}
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
              TALLER BC is a creative builders club on TON for people who make
              digital ideas, mini-apps, bots, design concepts, game mechanics,
              and Web3 experiments. The club connects makers, testers, and early
              supporters around calm, practical building — not hype.
            </p>
          </div>
        </section>

        {/* Grow as a Builder */}
        <section
          id="grow"
          className="border-b border-[var(--card-border)]/60 bg-[var(--accent-soft)]"
        >
          <div className="section-inner">
            <h2 className="section-title">Grow as a Builder</h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--foreground)] sm:text-lg">
              <strong>TALLER is not about being taller in centimeters.</strong>{" "}
              It is about growing as a builder — learning, shipping, testing,
              and contributing inside a creative club on TON.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              The name points to upward movement in skill, participation, and
              craft: prototypes, feedback, collaboration, and small experiments
              that make the club stronger over time.
            </p>
          </div>
        </section>

        {/* Community Utility Token */}
        <section className="border-b border-[var(--card-border)]/60">
          <div className="section-inner">
            <h2 className="section-title">Community Utility Token</h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              <strong>TALLER / TLR</strong> is a community utility token for
              the Builders Club. It supports participation, access, club
              identity, activity, and future club features — not trading
              narratives or financial promises.
            </p>
          </div>
        </section>

        {/* Participation, Access, Recognition + Future */}
        <section id="utility" className="border-b border-[var(--card-border)]/60">
          <div className="section-inner">
            <h2 className="section-title">
              Participation, Access, Recognition
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              Four practical directions for how TALLER fits the club — without
              income, yield, or investment language.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {pillarCards.map((card) => (
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

        {/* Built on TON */}
        <section className="border-b border-[var(--card-border)]/60">
          <div className="section-inner">
            <h2 className="section-title">Built on TON</h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              TALLER is issued on TON as a Jetton. The network fits a builders
              club that values fast, low-cost transfers and straightforward
              wallet support for community utility — not complex financial
              products.
            </p>
          </div>
        </section>

        {/* Audience */}
        <section className="border-b border-[var(--card-border)]/60">
          <div className="section-inner">
            <h2 className="section-title">
              For builders, makers, designers &amp; digital experimenters
            </h2>
            <ul className="mt-8 space-y-3 text-base text-[var(--muted)]">
              {audienceItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What TALLER is not */}
        <section className="border-b border-[var(--card-border)]/60 bg-[var(--accent-soft)]">
          <div className="section-inner">
            <h2 className="section-title">Clear boundaries</h2>
            <ul className="mt-8 space-y-4 text-base leading-relaxed text-[var(--foreground)] sm:text-lg">
              <li>
                <strong>TALLER is not an investment product.</strong>
              </li>
              <li>
                <strong>
                  No profit, yield, passive income, or financial return
                  promises.
                </strong>
              </li>
              <li>
                <strong>
                  Not a health, fitness, nutrition, or body-growth product —
                  no physical height claims.
                </strong>
              </li>
              <li>
                <strong>
                  A community utility token for participation, access, and
                  recognition inside TALLER BC.
                </strong>
              </li>
            </ul>
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

        {/* Community */}
        <section id="community" className="border-b border-[var(--card-border)]/60">
          <div className="section-inner text-center">
            <h2 className="section-title">Join Community</h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
              Follow updates and club participation in our Telegram channel. TALLER
              BC is for builders and digital experimenters — not speculative
              trading or investment pitches.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={COMMUNITY.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {COMMUNITY.telegramCta}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-auto">
        <div className="section-inner border-t border-[var(--card-border)]/60 py-10 text-center text-sm text-[var(--muted)]">
          <p className="font-medium text-white">
            TALLER BC — Grow as a Builder on TON
          </p>
          <p className="mt-2">
            Community utility token. Not an investment product.
          </p>
        </div>
      </footer>
    </>
  );
}
