import Image from "next/image";

type BrandMarkProps = {
  size?: "sm" | "lg";
  priority?: boolean;
};

export function BrandMark({ size = "sm", priority = false }: BrandMarkProps) {
  const isLarge = size === "lg";

  return (
    <div
      className={`brand-mark ${isLarge ? "brand-mark--lg" : "brand-mark--sm"}`}
      aria-hidden={false}
    >
      <span className="brand-mark__glow" aria-hidden />
      <span className="brand-mark__orbit" aria-hidden />
      <span className="brand-mark__orbit brand-mark__orbit--reverse" aria-hidden />
      <span className="brand-mark__frame" aria-hidden />
      <Image
        src="/taller-bc-logo.png"
        alt="TALLER BC logo"
        width={isLarge ? 128 : 48}
        height={isLarge ? 128 : 48}
        className="brand-mark__img"
        priority={priority}
      />
    </div>
  );
}

type BrandHeadingProps = {
  size?: "sm" | "lg";
  showTagline?: boolean;
  tagline?: string;
};

export function BrandHeading({
  size = "sm",
  showTagline = false,
  tagline = "Grow as a Builder on TON",
}: BrandHeadingProps) {
  const isLarge = size === "lg";
  const HeadingTag = isLarge ? "h1" : "span";

  return (
    <div className={isLarge ? "brand-heading brand-heading--lg" : "brand-heading"}>
      <HeadingTag className="brand-heading__row">
        <span className="brand-heading__main">TALLER</span>
        <span className="brand-heading__badge">BC</span>
      </HeadingTag>
      {showTagline && (
        <p className="brand-heading__tagline">
          {tagline.split("Builder").map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <span className="brand-heading__accent">Builder</span>
              </span>
            ) : (
              <span key={i}>{part}</span>
            ),
          )}
        </p>
      )}
    </div>
  );
}

type BrandLockupProps = {
  size?: "sm" | "lg";
  showTagline?: boolean;
  priority?: boolean;
};

export function BrandLockup({
  size = "sm",
  showTagline = false,
  priority = false,
}: BrandLockupProps) {
  return (
    <div
      className={
        size === "lg" ? "brand-lockup brand-lockup--lg" : "brand-lockup brand-lockup--sm"
      }
    >
      <BrandMark size={size} priority={priority} />
      <BrandHeading size={size} showTagline={showTagline} />
    </div>
  );
}
