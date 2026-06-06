import { useState } from "react";

type Props = {
  src?: string;
  alt?: string;
  minHeight?: string;
  children?: React.ReactNode;
};

export default function Hero({ src, alt, minHeight = "60vh", children }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <section
      className={`hero-wrapper ${loaded ? "loaded" : ""}`}
      style={{ minHeight }}
    >
      <div className="hero-media" aria-hidden>
        {src ? (
          // image preserves layout by occupying the media layer; onLoad triggers reveal
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            src={src}
            alt={alt ?? "Hero background"}
            className="hero-image"
            onLoad={() => setLoaded(true)}
          />
        ) : (
          <div className="hero-placeholder" />
        )}
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">{children}</div>
    </section>
  );
}
