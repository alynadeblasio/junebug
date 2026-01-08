export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        background: "#fff",
        color: "#111",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
        Junebug
      </h1>

      <p style={{ fontSize: "1.25rem", marginBottom: "2rem", color: "#444" }}>
        Because someone has to do it.
      </p>

      <p
        style={{
          maxWidth: "520px",
          fontSize: "1rem",
          lineHeight: "1.6",
          marginBottom: "2.5rem",
          color: "#555",
        }}
      >
        A friendly business buddy for creatives — helping with money, taxes,
        and the business stuff you’d rather skip.
      </p>

      <a
        href="#"
        style={{
          padding: "0.75rem 1.5rem",
          borderRadius: "999px",
          background: "#111",
          color: "#fff",
          textDecoration: "none",
          fontSize: "1rem",
        }}
      >
        Get started free
      </a>

      <footer
        style={{
          marginTop: "4rem",
          fontSize: "0.75rem",
          color: "#777",
        }}
      >
        Junebug provides guidance, not legal or tax advice.
      </footer>
    </main>
  );
}
