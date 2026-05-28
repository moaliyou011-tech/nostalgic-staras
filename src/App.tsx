import React, { useEffect, useMemo, useState } from "react";

const modules = [
  {
    label: "Modul 1",
    emoji: "🏙️",
    title: "Immobilien richtig verstehen",
    teaser:
      "Lerne, Objekte nicht emotional, sondern strategisch und mit klarem Blick zu lesen.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    points: [
      "Was eine gute Kapitalanlage wirklich ausmacht",
      "Rendite, Cashflow, Wertentwicklung sauber unterscheiden",
      "Denkfehler und Anfängerfehler vermeiden",
      "Marktverständnis und erste Bewertungslogik",
    ],
  },
  {
    label: "Modul 2",
    emoji: "🏦",
    title: "Finanzierung und Struktur",
    teaser:
      "Verstehe, wie Banken denken und wie smarte Strukturen Chancen öffnen.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1600&q=80",
    points: [
      "Wie Banken Objekte und Menschen wirklich bewerten",
      "Was 100%-Finanzierung bedeutet – und wann sie Sinn ergibt",
      "Eigenkapital strategisch einsetzen",
      "Grundprinzipien zu steuerlicher Wirkung und Struktur",
    ],
  },
  {
    label: "Modul 3",
    emoji: "📊",
    title: "Dealprüfung und Praxis",
    teaser:
      "Erkenne Chancen und Risiken mit echten Rechenbeispielen aus der Praxis.",
    image:
      "https://images.unsplash.com/photo-1462899006636-339e08d1844e?auto=format&fit=crop&w=1600&q=80",
    points: [
      "Wie Immobilien praktisch geprüft werden",
      "Neubau vs. Bestand",
      "Chancen und Risiken in der Realität",
      "Rechenbeispiele, Objektlogik, Bewertungsfragen",
    ],
  },
  {
    label: "Modul 4",
    emoji: "🚀",
    title: "Umsetzung und Perspektiven",
    teaser:
      "Mache aus Wissen Entscheidungen, Kontakte und echte nächste Schritte.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
    points: [
      "Wie aus Wissen konkrete Schritte entstehen",
      "Welche Rollen es im Immobilienumfeld gibt",
      "Wie Kontakte, Empfehlungen und neue Möglichkeiten entstehen können",
      "Welche Anschlussmöglichkeiten sinnvoll sein können",
    ],
  },
];

const outcomes = [
  "ob und welche Immobilienstrategie zu dir passt",
  "wie du Immobilien schneller einschätzen kannst",
  "welche Finanzierungslogik Banken anwenden",
  "wie du Chancen und Risiken realistischer bewertest",
  "welche nächsten Schritte für dich sinnvoll sind",
  "ob du Immobilien nur nutzen oder auch aktiver mitgestalten willst",
];

const steps = [
  [
    "01",
    "Ankommen & Überblick gewinnen",
    "Du startest in einer kleinen Gruppe und bekommst sofort Orientierung statt Theorie-Chaos.",
  ],
  [
    "02",
    "Verstehen & einordnen",
    "Du arbeitest dich Schritt für Schritt durch Denkmodelle, Rechenlogiken und echte Praxisbeispiele.",
  ],
  [
    "03",
    "Prüfen & anwenden",
    "Zwischen den Abenden kannst du das Gelernte auf erste Beispiele übertragen und mit konkreten Fragen zurückkommen.",
  ],
  [
    "04",
    "Klarheit & nächste Schritte",
    "Am Ende weißt du, was zu dir passt, was du vermeiden solltest und wie du fundiert weitergehst.",
  ],
] as const;

const experts = [
  [
    "Peter Götz",
    "Immobilienmakler & Bauträger",
    "/peter.jpg",
    `Peter Götz ist Immobilienmakler und Bauträger mit langjähriger Erfahrung in der Entwicklung, Bewertung und Vermarktung von Kapitalanlageimmobilien. Er verwaltet ein Portfolio von über 1000 Wohnungen und gehört damit zu einem der erfolgreichsten Immobilienentwicklern für Kapitalanleger in Deutschland.

Er kennt den Markt aus der Praxis – von der Auswahl geeigneter Objekte über die wirtschaftliche Bewertung bis hin zur Umsetzung.

Sein Fokus liegt auf:
• realistischen und nachhaltigen Investmentstrategien
• fundierter Objektbewertung
• praxisnaher Einordnung von Chancen und Risiken
• wirtschaftlich sinnvollen Immobilienkonzepten`,
  ],
  [
    "Aike Vaqué",
    "Vorstand der wika AG",
    "/aike.jpg",
    `Aike Vaqué ist Vorstand der wika AG und hat über Jahre hinweg große Vertriebsorganisationen aufgebaut und entwickelt.

Seine Stärke liegt darin, komplexe Themen in klare Systeme zu übersetzen – und daraus funktionierende Strukturen zu schaffen.

Im Kontext von Immobilien bedeutet das:
• Chancen nicht nur erkennen, sondern wirtschaftlich nutzen
• Immobilien nicht isoliert betrachten, sondern strategisch einsetzen
• aus Wissen konkrete Umsetzung machen

Er steht für eine klare, unternehmerische Herangehensweise – ohne Theorie, ohne Umwege.`,
  ],
  [
    "Gerrit Heyde",
    "Struktur, Umsetzung & operative Klarheit",
    "/gerrit.jpg",
    `Gerrit Heyde steht für Struktur, Umsetzung und operative Klarheit.

Seine Stärke liegt darin, komplexe Inhalte so aufzubereiten, dass daraus konkrete Schritte entstehen.

Im Kontext von Kapitalanlage Intensiv bedeutet das:
• klare Struktur statt Informationschaos
• verständliche Aufbereitung komplexer Themen
• Fokus auf Umsetzung statt Theorie
• Übertragung von Wissen in konkrete Handlungen

Er sorgt dafür, dass Inhalte nicht nur verstanden, sondern auch angewendet werden können.`,
  ],
] as const;

const properties = [
  {
    title: "Wohnanlage",
    location: "Kassel",
    image: "/immobilie-1.jpg",
  },
  {
    title: "Wohnanlage",
    location: "Kassel",
    image: "/immobilie-2.jpg",
  },
  {
    title: "Wohnanlage",
    location: "Kassel",
    image: "/immobilie-3.jpg",
  },
  {
    title: "Wohnanlage",
    location: "Kassel",
    image: "/immobilie-4.jpg",
  },
] as const;

function LogoMark() {
  return (
    <div className="logo-wrap reveal is-visible">
      <svg
        className="logo-svg"
        viewBox="0 0 620 360"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Kapitalanlage Intensiv Logo"
      >
        <defs>
          <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff1a8" />
            <stop offset="45%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#c89116" />
          </linearGradient>
          <linearGradient id="silver" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="55%" stopColor="#f3f4f6" />
            <stop offset="100%" stopColor="#bfc7d2" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="8"
              stdDeviation="5"
              floodColor="#000000"
              floodOpacity="0.28"
            />
          </filter>
        </defs>
        <g filter="url(#shadow)">
          <rect
            x="150"
            y="148"
            width="42"
            height="82"
            rx="5"
            fill="url(#silver)"
          />
          <rect
            x="218"
            y="118"
            width="48"
            height="112"
            rx="5"
            fill="url(#silver)"
          />
          <rect
            x="294"
            y="78"
            width="56"
            height="152"
            rx="5"
            fill="url(#silver)"
          />
          <rect
            x="380"
            y="48"
            width="58"
            height="182"
            rx="5"
            fill="url(#gold)"
          />
          <rect
            x="168"
            y="165"
            width="7"
            height="54"
            fill="#7f8794"
            opacity=".58"
          />
          <rect
            x="238"
            y="138"
            width="7"
            height="80"
            fill="#7f8794"
            opacity=".58"
          />
          <rect
            x="318"
            y="98"
            width="7"
            height="120"
            fill="#7f8794"
            opacity=".58"
          />
          <rect
            x="404"
            y="68"
            width="7"
            height="150"
            fill="#8b742f"
            opacity=".55"
          />
        </g>
        <path
          d="M132 152 C205 140 265 116 322 82 C365 56 404 34 490 5"
          fill="none"
          stroke="url(#gold)"
          strokeWidth="12"
          strokeLinecap="round"
          filter="url(#shadow)"
        />
        <polygon
          points="490,5 465,0 480,28"
          fill="#e0a91b"
          filter="url(#shadow)"
        />
        <text
          x="310"
          y="290"
          textAnchor="middle"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="54"
          fontWeight="800"
          letterSpacing="6"
          fill="#ffffff"
        >
          KAPITALANLAGE
        </text>
        <line
          x1="120"
          y1="318"
          x2="220"
          y2="318"
          stroke="url(#gold)"
          strokeWidth="3"
        />
        <text
          x="310"
          y="330"
          textAnchor="middle"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="38"
          fontWeight="800"
          letterSpacing="12"
          fill="url(#gold)"
        >
          INTENSIV
        </text>
        <line
          x1="400"
          y1="318"
          x2="500"
          y2="318"
          stroke="url(#gold)"
          strokeWidth="3"
        />
        <text
          x="310"
          y="356"
          textAnchor="middle"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="18"
          fontWeight="400"
          letterSpacing="1.5"
          fill="#ffffff"
        >
          Immobilien verstehen &amp; nutzen
        </text>
      </svg>
    </div>
  );
}

function Ticket() {
  return (
    <div className="ticket-wrap reveal is-visible">
      <div className="ticket">
        <div className="ticket-bar" />
        <div className="ticket-main">
          <div className="ticket-code" />
          <div className="ticket-content">
            <div className="ticket-title">Kapitalanlage Intensiv</div>
            <div className="ticket-grid">
              <div>
                <b>Vorname</b>
                <span>Max</span>
                <b>Nachname</b>
                <span>Mustermann</span>
              </div>
              <div>
                <b>Datum</b>
                <span>31.07.2026 – 01.08.2026</span>
                <span>07.08.2026 – 08.08.2026</span>
                <b>Zeiten</b>
                <span>Freitags : 15:00 – 20:00 Uhr</span>
                <span>Samstags : 10:00 – 16:00 Uhr</span>
              </div>
              <div className="ticket-side">
                <b>Ticket</b>
                <span>ETKT 01234567890987</span>
                <b>SEQ</b>
                <span>0003</span>
              </div>
            </div>
            <div className="ticket-footer">
              Bitte seien Sie mindestens 15 Minuten vor Startbeginn da.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DatenschutzPage() {
  return (
    <div
      style={{
        background: "#07111d",
        color: "white",
        minHeight: "100vh",
        padding: "80px 24px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto", lineHeight: 1.8 }}>
        <h1
          style={{
            fontSize: "54px",
            marginBottom: 40,
            fontFamily: "Oswald, sans-serif",
            textTransform: "uppercase",
          }}
        >
          Datenschutzerklärung
        </h1>

        <h2>1. Verantwortlicher</h2>
        <p>
          wika AG
          <br />
          Unser Lieben Frauen Kirchhof 20
          <br />
          28195 Bremen
          <br />
          Deutschland
          <br />
          Tel.: +49 441 200 500
          <br />
          E-Mail: info@wika.ag
        </p>

        <h2>2. Datenschutzbeauftragter</h2>
        <p>
          Dipl.-Ing. (FH) Harald Müller-Delius, MBA
          <br />
          HMDATA Ing.-Büro
          <br />
          Lindenstr. 28a
          <br />
          83043 Bad Aibling
          <br />
          datenschutz@wika.ag
        </p>

        <h2>3. Datenerfassung beim Besuch der Website</h2>
        <p>
          Beim Besuch dieser Website werden automatisch Informationen durch den
          Browser des Nutzers an den Server übermittelt und temporär
          gespeichert.
        </p>

        <ul>
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Browsertyp</li>
          <li>Betriebssystem</li>
          <li>Referrer-URL</li>
        </ul>

        <h2>4. Cookies</h2>
        <p>
          Diese Website verwendet Cookies zur Verbesserung der Benutzererfahrung
          und zur technischen Bereitstellung bestimmter Funktionen.
        </p>

        <h2>5. Kontaktaufnahme</h2>
        <p>
          Bei Kontaktaufnahme per E-Mail oder Formular werden die angegebenen
          personenbezogenen Daten ausschließlich zur Bearbeitung der Anfrage
          verarbeitet.
        </p>

        <h2>6. Rechte der betroffenen Personen</h2>
        <ul>
          <li>Auskunft gemäß Art. 15 DSGVO</li>
          <li>Berichtigung gemäß Art. 16 DSGVO</li>
          <li>Löschung gemäß Art. 17 DSGVO</li>
          <li>Einschränkung der Verarbeitung gemäß Art. 18 DSGVO</li>
          <li>Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
          <li>Widerruf von Einwilligungen gemäß Art. 7 DSGVO</li>
          <li>Beschwerde gemäß Art. 77 DSGVO</li>
        </ul>

        <h2>7. Speicherdauer</h2>
        <p>
          Personenbezogene Daten werden nur so lange gespeichert, wie dies
          gesetzlich erforderlich oder zur Bearbeitung notwendig ist.
        </p>

        <div style={{ marginTop: 60 }}>
          <a
            href="/"
            style={{
              color: "#facc15",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            ← Zurück zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

export default function KapitalanlageIntensivPage() {
  const targetDate = useMemo(() => new Date("2026-07-31T23:59:59"), []);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  if (window.location.pathname === "/datenschutz") {
    return <DatenschutzPage />;
  }

  useEffect(() => {
    const updateCountdown = () => {
      const diff = targetDate.getTime() - new Date().getTime();
      if (diff <= 0)
        return setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      setTimeLeft({
        days: String(Math.floor(diff / 86400000)).padStart(2, "0"),
        hours: String(Math.floor((diff / 3600000) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((diff / 60000) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
      });
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    const elements = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("is-visible")
        ),
      { threshold: 0.12 }
    );
    elements.forEach((el) => io.observe(el));
    return () => {
      clearInterval(timer);
      io.disconnect();
    };
  }, [targetDate]);

  return (
    <div className="page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Oswald:wght@500;600;700&family=Playfair+Display:wght@600;700&display=swap');
        *{box-sizing:border-box}body{margin:0}.page{font-family:Inter,system-ui,sans-serif;color:#fff;background:#07111d}.container{max-width:1320px;margin:0 auto;padding:0 24px}.font-accent{font-family:'Playfair Display',serif}.section{padding:88px 0;overflow:hidden;background:linear-gradient(180deg,#06101b,#081422 35%,#13283d)}.section.alt{background:linear-gradient(180deg,#13283d 0%,#4f6074 18%,#dce3ea 45%,#c9d2dd 100%);color:#162233}.section.white{background:linear-gradient(180deg,#13283d 0%,#66788c 22%,#eef3f7 48%,#cfd8e3 100%);color:#0f172a}.section-title{font-family:Oswald,sans-serif;font-size:clamp(40px,5vw,64px);line-height:1.04;text-transform:uppercase;margin:18px 0 0;letter-spacing:-.02em}.section.alt .section-title,.white .section-title{color:#fff;text-shadow:0 2px 18px rgba(7,17,29,.28)}.muted{color:#b7c4d3}.section.alt p,.white p{color:#445163}.logo-wrap{display:flex;justify-content:center;margin-bottom:14px}.logo-svg{width:min(620px,92vw);height:auto;filter:drop-shadow(0 18px 40px rgba(0,0,0,.35))}.eyebrow{display:inline-flex;align-items:center;padding:10px 16px;border-radius:999px;border:1px solid rgba(250,204,21,.25);background:rgba(250,204,21,.1);color:#fde68a;font-size:13px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}.center{text-align:center}.headline{font-family:Oswald,sans-serif;font-size:clamp(54px,7vw,108px);line-height:.96;text-transform:uppercase;margin:18px 0 0}.subcopy{max-width:860px;margin:20px auto 0;font-size:22px;line-height:1.7;color:#b7c4d3}.btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-top:28px}.btn{display:inline-flex;justify-content:center;align-items:center;padding:16px 24px;border-radius:18px;font-weight:800;text-decoration:none;animation:buttonPulse 2.6s ease-in-out infinite}.btn-primary{background:#facc15;color:#111827;box-shadow:0 12px 30px rgba(250,204,21,.36)}.btn-secondary{color:#fff;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14)}
        .ticket-wrap{
          display:flex;
          justify-content:center;
          margin:40px 0;
          position:relative;
          z-index:5;
          }
          
          .ticket{
          width:min(1120px,100%);
          background:
          linear-gradient(135deg,#ffffff 0%,#f8fafc 35%,#eef2f7 100%);
          border:2px solid rgba(250,204,21,.78);
          border-radius:42px;
          padding:14px;
          box-shadow:
          0 0 0 1px rgba(255,255,255,.18),
          0 45px 120px rgba(0,0,0,.65),
          0 0 90px rgba(250,204,21,.22);
          animation:ticketFloat 5s ease-in-out infinite;
          position:relative;
          overflow:hidden;
          }
          
          .ticket:before{
          content:'';
          position:absolute;
          inset:0;
          background:
          linear-gradient(
          120deg,
          transparent 0%,
          rgba(255,255,255,.34) 35%,
          transparent 65%
          );
          transform:translateX(-100%);
          animation:ticketGlow 5s linear infinite;
          pointer-events:none;
          }
          
          .ticket-bar{
          height:18px;
          background:linear-gradient(90deg,#facc15,#fde68a,#facc15);
          border-radius:999px;
          margin:0 110px 10px;
          box-shadow:0 0 25px rgba(250,204,21,.45);
          }
          
          .ticket-main{
          display:grid;
          grid-template-columns:62px 1fr;
          overflow:hidden;
          border-radius:34px;
          background:#ffffff;
          border:1px solid rgba(15,23,42,.08);
          }
          
          .ticket-code{
          background:
          repeating-linear-gradient(
          180deg,
          #ffffff 0 4px,
          #0f172a 4px 8px
          );
          }
          
          .ticket-content{
          background:
          linear-gradient(135deg,#ffffff,#f8fafc);
          color:#111;
          }
          
          .ticket-title{
          font-family:Oswald,sans-serif;
          background:#111827;
          color:#facc15;
          padding:18px 22px;
          font-size:clamp(30px,3.1vw,46px);
          text-transform:uppercase;
          letter-spacing:.02em;
          }
          
          .ticket-grid{
          display:grid;
          grid-template-columns:1fr 1.4fr .8fr;
          gap:18px;
          padding:24px;
          }
          
          .ticket-grid div{
          display:grid;
          gap:6px;
          }
          
          .ticket-grid b{
          font-size:12px;
          text-transform:uppercase;
          color:#475569;
          letter-spacing:.08em;
          }
          
          .ticket-grid span{
          font-size:20px;
          font-weight:600;
          color:#0f172a;
          }
          
          .ticket-side{
          border-left:2px dashed rgba(15,23,42,.18);
          padding-left:16px;
          }
          
          .ticket-footer{
          border-top:1px solid rgba(15,23,42,.08);
          padding:14px 20px;
          font-size:13px;
          font-weight:700;
          color:#475569;
          background:#f8fafc;
          }
          
          @keyframes ticketGlow{
          0%{transform:translateX(-100%)}
          100%{transform:translateX(200%)}
          }
        .price-panel{max-width:560px;margin:18px auto 0;padding:28px;border-radius:32px;background:rgba(255,255,255,.95);color:#111827;box-shadow:0 20px 70px rgba(0,0,0,.25)}.price-top{background:#0f172a;color:#fff;border-radius:22px;padding:20px}.price-line{display:flex;gap:14px;align-items:end;flex-wrap:wrap;margin-top:12px}.strike{font-size:20px;color:#94a3b8;text-decoration:line-through}.now{font-family:Oswald,sans-serif;font-size:66px;line-height:1;color:#facc15}.countdown{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:22px}.count{background:#f8fafc;border:1px solid #e2e8f0;border-radius:18px;padding:16px 8px;text-align:center}.count-value{font-family:Oswald,sans-serif;font-size:34px}.count-label{font-size:11px;color:#64748b;font-weight:800;letter-spacing:.08em}.quote-band{padding:34px 0;background:linear-gradient(180deg,#0f2438,#57718a 36%,#7d93a8 50%,#10253a 100%)}.quote{max-width:1120px;margin:0 auto;text-align:center;color:#fff;font-size:34px;line-height:1.35;text-shadow:0 2px 16px rgba(7,17,29,.38)}.quote small{display:block;margin-top:12px;font-family:Inter,sans-serif;font-size:14px;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.9)}.trust-marquee{overflow:hidden;margin-top:34px;border-block:1px solid rgba(250,204,21,.22);background:rgba(255,255,255,.045);backdrop-filter:blur(10px);border-radius:999px}.trust-track{display:flex;width:max-content;gap:34px;padding:20px 0;animation:marquee 28s linear infinite}.trust-logo{min-width:240px;height:92px;display:flex;align-items:center;justify-content:center;padding:0 30px;border-radius:28px;background:rgba(7,17,29,.28);border:1px solid rgba(250,204,21,.12)}.trust-logo img{max-width:210px;max-height:72px;object-fit:contain;display:block;filter:drop-shadow(0 10px 22px rgba(0,0,0,.22))}.trust-logo.wika img{max-width:230px}.trust-logo.hav img{max-width:220px}.trust-logo.honorado img{max-width:230px}.trust-logo.spielerschutz img{max-width:245px}
        .trust-logo.magazin img{max-width:220px}
        .trust-logo.focus img{max-width:220px}
        .trust-logo.handelsblatt img{max-width:220px}
        .benefit-grid,.target-grid,.experts-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin-top:30px}.benefit-card,.target,.expert,.outcome,.step{border-radius:30px;background:linear-gradient(180deg,#13233a,#0f1b2e);border:1px solid rgba(255,255,255,.14);box-shadow:0 12px 30px rgba(0,0,0,.12)}.benefit-card,.target{padding:28px}.benefit-title,.target h3,.expert-name,.step h4{font-family:Oswald,sans-serif;text-transform:uppercase;line-height:1.02;margin:0}.benefit-title{font-size:48px}.benefit-text,.target p{line-height:1.6;color:#b7c4d3}.video-section{padding:60px 20px;display:flex;justify-content:center}.video-wrapper{width:100%;max-width:900px}.video-wrapper video{width:100%;height:auto;aspect-ratio:16/9;border-radius:20px;object-fit:cover;box-shadow:0 20px 60px rgba(0,0,0,.4)}.youtube-frame-wrap{width:100%;max-width:900px;margin:0 auto;aspect-ratio:16/9}.youtube-frame-wrap iframe{width:100%;height:100%;border:0;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,.4);display:block}.two-col,.roadmap{display:grid;grid-template-columns:.92fr 1.08fr;gap:36px;align-items:start}.danger-card{background:radial-gradient(circle at left top,rgba(239,68,68,.38),transparent 28%),linear-gradient(180deg,rgba(120,18,18,.96),rgba(43,8,8,1));border:1px solid rgba(248,113,113,.28);border-radius:34px;padding:34px;animation:dangerShake 4.5s ease-in-out infinite}.danger-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:22px}.danger-item{border-radius:24px;padding:26px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12)}.danger-item.big{grid-column:1/-1}.danger-emoji{font-size:34px;margin-bottom:16px}.danger-pill{display:inline-flex;padding:10px 16px;border-radius:999px;border:1px solid rgba(252,165,165,.3);background:rgba(248,113,113,.1);font-weight:800;color:#fee2e2}
        .module-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:30px;margin-top:34px}.module-card{border-radius:34px;overflow:hidden;background:linear-gradient(155deg,#16110a,#261c0a 18%,#0f1c2e 52%,#0a1422);border:2px solid rgba(250,204,21,.58);box-shadow:0 18px 52px rgba(250,204,21,.18),0 12px 34px rgba(0,0,0,.22);position:relative}.module-media{position:relative;aspect-ratio:16/8;overflow:hidden}.module-media img{width:100%;height:100%;object-fit:cover}.module-media:after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(6,17,29,.96),rgba(6,17,29,.34),rgba(250,204,21,.1),transparent)}.module-emoji{position:absolute;left:20px;top:18px;z-index:2;width:68px;height:68px;border-radius:22px;display:flex;align-items:center;justify-content:center;background:linear-gradient(180deg,rgba(250,204,21,.9),rgba(217,168,53,.78));font-size:32px}.module-copy{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:26px}.module-label{width:max-content;border-radius:999px;background:rgba(10,20,34,.55);border:1px solid rgba(250,204,21,.3);padding:8px 12px;font-size:11px}.module-copy h3{font-family:Oswald,sans-serif;font-size:44px;line-height:.98;text-transform:uppercase;color:#fff;margin:10px 0 0}.module-copy p{color:#fff3bf;font-size:18px;line-height:1.6}.module-body{padding:28px;background:linear-gradient(180deg,rgba(250,204,21,.16),rgba(12,22,37,.18))}.list{display:grid;gap:8px}.list-row{display:flex;gap:14px;color:#fff8de;line-height:1.6;padding:10px 0;border-bottom:1px solid rgba(250,204,21,.1)}.list-row:last-child{border-bottom:0}.path{position:relative;padding-left:42px}.path:before{content:'';position:absolute;left:17px;top:16px;bottom:16px;width:2px;background:linear-gradient(180deg,rgba(250,204,21,0),rgba(250,204,21,.7),rgba(250,204,21,0))}.steps{display:grid;gap:22px}.step{padding:28px;position:relative}.step:before{content:'';position:absolute;left:-34px;top:34px;width:22px;height:22px;border-radius:999px;background:#facc15}.step h4{font-size:32px}.after-grid{display:grid;gap:30px;margin-top:26px}.brain{margin:0 auto;width:260px;height:260px;border-radius:999px;position:relative;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle,rgba(250,204,21,.2),rgba(8,17,28,.4) 48%,rgba(8,17,28,1) 75%)}.tag{position:absolute;border-radius:999px;padding:6px 12px;font-size:9px;text-transform:uppercase;letter-spacing:.16em;animation:drift 7s ease-in-out infinite}.tag.a{left:20px;top:30px;background:rgba(250,204,21,.14);color:#fde68a}.tag.b{right:20px;top:66px;background:rgba(34,211,238,.12);color:#cffafe}.tag.c{left:20px;bottom:44px;background:rgba(255,255,255,.1)}.tag.d{right:20px;bottom:26px;background:rgba(250,204,21,.1);color:#fef3c7}.brain-title{text-align:center}.brain-title span{display:block;font-size:58px}.brain-title strong{font-family:Oswald,sans-serif;font-size:15px;letter-spacing:.12em}.outcome-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.outcome{padding:26px 24px}.outcome p{color:#fff!important;font-family:Oswald,sans-serif;font-size:22px;line-height:1.35}.expert{overflow:hidden}.expert img{width:100%;aspect-ratio:4/4.2;object-fit:cover}.expert-body{padding:26px}.expert-body .muted{white-space:pre-line;font-size:15px;line-height:1.55}.expert-role{font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:#facc15;margin-bottom:10px}.expert-name{font-size:42px;margin-bottom:16px}.property-section{background:linear-gradient(180deg,#07111d 0%,#0d1b2b 48%,#13283d 100%)}.property-intro{display:flex;justify-content:space-between;gap:24px;align-items:end;margin-bottom:28px}.property-hint{color:#fde68a;font-weight:800;letter-spacing:.08em;text-transform:uppercase;font-size:13px}.property-slider{display:flex;gap:24px;overflow-x:auto;scroll-snap-type:x mandatory;padding:10px 4px 28px;scrollbar-color:#facc15 rgba(255,255,255,.08)}.property-slider::-webkit-scrollbar{height:10px}.property-slider::-webkit-scrollbar-track{background:rgba(255,255,255,.08);border-radius:999px}.property-slider::-webkit-scrollbar-thumb{background:#facc15;border-radius:999px}.property-card{min-width:360px;max-width:360px;scroll-snap-align:start;border-radius:34px;overflow:hidden;background:linear-gradient(180deg,#13233a,#0f1b2e);border:1px solid rgba(250,204,21,.28);box-shadow:0 22px 60px rgba(0,0,0,.28);transition:transform .25s ease,border-color .25s ease}.property-card:hover{transform:translateY(-6px);border-color:rgba(250,204,21,.65)}.property-image{height:245px;position:relative;overflow:hidden;background:linear-gradient(135deg,#334155,#0f172a)}.property-image img{width:100%;height:100%;object-fit:cover;display:block}.property-image:after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(7,17,29,.92),rgba(7,17,29,.12),transparent)}.property-badge{position:absolute;left:18px;top:18px;z-index:2;padding:9px 14px;border-radius:999px;background:rgba(250,204,21,.92);color:#111827;font-weight:900;font-size:12px;letter-spacing:.08em;text-transform:uppercase}.property-body{padding:24px}.property-body h3{font-family:Oswald,sans-serif;text-transform:uppercase;font-size:34px;line-height:1.02;margin:0 0 10px;color:#fff}.property-location{color:#fde68a;font-weight:800;margin-bottom:18px}.property-facts{display:flex;gap:10px;flex-wrap:wrap}.property-facts span{border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);border-radius:999px;padding:8px 11px;color:#dbeafe;font-size:12px;font-weight:700}.quote-dark{padding:36px;border-radius:30px;background:rgba(251,252,253,.82);color:#0f172a;text-align:center;box-shadow:0 12px 30px rgba(15,23,42,.08)}.quote-dark blockquote{font-family:'Playfair Display',serif;font-size:34px;line-height:1.4;margin:0}.footer-cta{text-align:center}
        .reveal{opacity:0;transform:translateY(36px);transition:opacity .8s ease,transform .8s ease}.reveal.is-visible{opacity:1;transform:none}@keyframes ticketFloat{0%,100%{transform:rotate(-4deg) translateY(0)}50%{transform:rotate(-3deg) translateY(-10px)}}@keyframes buttonPulse{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-2px) scale(1.03)}}@keyframes dangerShake{0%,100%{transform:translateX(0)}2%{transform:translateX(-1px)}4%{transform:translateX(1px)}6%{transform:translateX(-1px)}8%{transform:translateX(1px)}10%{transform:translateX(0)}}@keyframes drift{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @media(max-width:760px){.container{padding:0 20px}.section{padding:64px 0}.headline{font-size:44px}.subcopy{font-size:17px}.section-title{font-size:40px}.btn{width:100%;min-height:54px}.two-col,.roadmap,.benefit-grid,.target-grid,.experts-grid,.outcome-grid,.module-grid,.danger-grid,.countdown{grid-template-columns:1fr!important}.ticket{animation:none;transform:none}.ticket-main{grid-template-columns:38px 1fr}.ticket-side{display:none}.ticket-grid{grid-template-columns:1fr}.ticket-grid span{font-size:16px}.price-panel{width:100%;padding:22px}.video-section{padding:32px 0}.video-wrapper video{border-radius:16px}.module-media{aspect-ratio:auto;min-height:310px}.module-copy{padding:22px;text-align:left}.module-copy h3{font-size:34px}.module-copy p,.list-row{font-size:16px}.path{padding-left:34px}.step{padding:22px}.benefit-title{font-size:34px}.logo-svg{width:min(520px,96vw)}.property-intro{display:block}.property-card{min-width:82vw;max-width:82vw}.property-image{height:220px}}
      `}</style>

      <section className="section hero">
        <div className="container">
          <LogoMark />
          <div className="center reveal is-visible">
            <div className="eyebrow">
              4 Abende · Präsenz in Kassel · Büro Weserstraße · limitierte
              Plätze
            </div>
            <h1 className="headline">Kapitalanlage Intensiv</h1>
            <p className="subcopy">
              Immobilien verstehen &amp; nutzen – das 4-teilige Praxisprogramm
              in Kassel für Menschen, die Immobilien nicht nur spannend finden,
              sondern strategisch einsetzen wollen.
            </p>
            <div className="btns">
              <a className="btn btn-primary" href="#anmeldung">
                Jetzt Platz sichern
              </a>
              <a className="btn btn-secondary" href="#programm">
                Inhalte ansehen
              </a>
            </div>
          </div>
          <Ticket />
          <div className="price-panel reveal is-visible" id="anmeldung">
            <div className="price-top">
              <div className="eyebrow">Sofortbucher-Angebot</div>
              <div className="price-line">
                <span className="strike">statt 499 €</span>
                <span className="now">249 €</span>
              </div>
              <p className="muted">
                Begrenzte Teilnehmerzahl. Die Plätze werden nach Reihenfolge der
                Buchung vergeben.
              </p>
            </div>
            <div className="countdown">
              {(
                [
                  [timeLeft.days, "TAGE"],
                  [timeLeft.hours, "STUNDEN"],
                  [timeLeft.minutes, "MIN"],
                  [timeLeft.seconds, "SEK"],
                ] as const
              ).map(([v, l]) => (
                <div className="count" key={l}>
                  <div className="count-value">{v}</div>
                  <div className="count-label">{l}</div>
                </div>
              ))}
            </div>
            <div className="btns">
              <a className="btn btn-primary" href="#">
                Buchen
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="quote-band">
        <div className="container">
          <div className="quote font-accent reveal">
            "Wohlstand entsteht nicht durch Zufall – sondern durch Klarheit,
            Struktur und mutige Entscheidungen."
            <small>Kapitalanlage Intensiv</small>
          </div>
          <div
            className="trust-marquee"
            aria-label="Vertrauen durch starke Partner"
          >
            <div className="trust-track">
              {[
                ["wika", "/wika-logo.png", "Wika Wirtschaftskanzlei"],
                ["hav", "/hav-media-logo.webp", "HAV Media"],
                ["honorado", "/honorado-logo.png", "Honorado"],

                [
                  "spielerschutz",
                  "/spielerschutz-logo.png",
                  "Deutsche Spielerschutz Absicherung",
                ],

                [
                  "magazin",
                  "/sueddeutsche-zeitung-magazin-logo-png-transparent.webp",
                  "Süddeutsche Zeitung Magazin",
                ],

                ["focus", "/Logo-Focus.webp", "Focus"],

                [
                  "handelsblatt",
                  "/ha7862hf36-handelsblatt-logo-handelsblatt-201x-logo-download-logo-icon-png-svg.webp",
                  "Handelsblatt",
                ],

                ["wika", "/wika-logo.png", "Wika Wirtschaftskanzlei"],
                ["hav", "/hav-media-logo.webp", "HAV Media"],
                ["honorado", "/honorado-logo.png", "Honorado"],

                [
                  "spielerschutz",
                  "/spielerschutz-logo.png",
                  "Deutsche Spielerschutz Absicherung",
                ],

                [
                  "magazin",
                  "/sueddeutsche-zeitung-magazin-logo-png-transparent.webp",
                  "Süddeutsche Zeitung Magazin",
                ],

                ["focus", "/Logo-Focus.webp", "Focus"],

                [
                  "handelsblatt",
                  "/ha7862hf36-handelsblatt-logo-handelsblatt-201x-logo-download-logo-icon-png-svg.webp",
                  "Handelsblatt",
                ],
              ].map(([className, src, alt], index) => (
                <div
                  className={`trust-logo ${className}`}
                  key={`${src}-${index}`}
                >
                  <img src={src} alt={alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section benefit-section">
        <div className="container">
          <div className="benefit-grid reveal">
            <div className="benefit-card">
              <div className="benefit-title">Praxis statt Show</div>
              <p className="benefit-text">
                Echte Rechenbeispiele, echte Fragen, echte Einordnung.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-title">Bezahlbar statt überzogen</div>
              <p className="benefit-text">
                Substanz zu einem fairen Preis – für Menschen mit echtem
                Interesse.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-title">Offen statt eindimensional</div>
              <p className="benefit-text">
                Für Kapitalanleger, unternehmerisch denkende Menschen und
                netzwerkstarke Persönlichkeiten.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <div className="section-title reveal">
            <div className="eyebrow">Video-Bereich</div>
            <h2 className="section-title">Teaser</h2>
            <p></p>
            <p></p>
          </div>
          <div className="video-section reveal">
            <div className="video-wrapper">
              <div className="youtube-frame-wrap">
                <iframe
                  src="https://www.youtube.com/embed/RCaloo5P8H4?rel=0&modestbranding=1"
                  title="Kapitalanlage Intensiv Video"
                  width="100%"
                  height="500"
                  style={{
                    border: "0",
                    borderRadius: "20px",
                    boxShadow: "0 20px 60px rgba(0,0,0,.4)",
                    display: "block",
                    background: "#000",
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section danger-wrap">
        <div className="container">
          <div className="two-col">
            <div className="reveal">
              <div className="eyebrow">Startblockaden verstehen</div>
              <h2 className="section-title">
                Warum viele nie in Immobilien starten
              </h2>
              <p className="muted">
                Die meisten Menschen scheitern nicht am Interesse – sondern
                daran, dass sie zu viele Fragezeichen im Kopf haben und zu wenig
                klare Orientierung.
              </p>
            </div>
            <div className="danger-card reveal">
              <div className="danger-pill">
                🚫 Unsicherheit ist der eigentliche Dealbreaker
              </div>
              <div className="danger-grid">
                {[
                  ["🤔", "Wie erkennt man überhaupt eine gute Kapitalanlage?"],
                  [
                    "📉",
                    "Welche Rendite ist realistisch – und was ist Schönrechnerei?",
                  ],
                  ["🏦", "Wie funktioniert Finanzierung heute wirklich?"],
                  ["⚠️", "Welche Fehler sind teuer und vermeidbar?"],
                  [
                    "🚪",
                    "Welche Chancen entstehen rund um Immobilien – auch über den Kauf hinaus?",
                    "big",
                  ],
                ].map(([e, t, c]) => (
                  <div className={`danger-item ${c ?? ""}`} key={t}>
                    <div className="danger-emoji">{e}</div>
                    <div>{t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section white" id="programm">
        <div className="container">
          <div className="section-title reveal">
            <div className="eyebrow">Das erwartet dich</div>
            <h2 className="section-title">Diese Inhalte erwarten dich</h2>
          </div>
          <div className="module-grid">
            {modules.map((m) => (
              <div className="module-card reveal" key={m.title}>
                <div className="module-media">
                  <img src={m.image} alt={m.title} />
                  <div className="module-emoji">{m.emoji}</div>
                  <div className="module-copy">
                    <div className="module-label">{m.label}</div>
                    <h3>{m.title}</h3>
                    <p>{m.teaser}</p>
                  </div>
                </div>
                <div className="module-body">
                  <div className="list">
                    {m.points.map((p) => (
                      <div className="list-row" key={p}>
                        <span>🔥</span>
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="roadmap">
            <div className="reveal">
              <div className="eyebrow">So läuft es ab</div>
              <h2 className="section-title">
                Dein Weg durch Kapitalanlage Intensiv
              </h2>
              <p className="muted">
                Vom Einstieg über das Verstehen bis hin zu sicheren
                Entscheidungen – klar strukturiert, praxisnah und
                nachvollziehbar.
              </p>
            </div>
            <div className="path reveal">
              <div className="steps">
                {steps.map(([n, t, tx]) => (
                  <div className="step" key={n}>
                    <div className="eyebrow">Schritt {n}</div>
                    <h4>{t}</h4>
                    <p className="muted" style={{ whiteSpace: "pre-line" }}>
                      {tx}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <div className="after-title reveal">
            <div className="eyebrow">Nach dem Programm</div>
            <h2 className="section-title">
              Was du danach im Kopf wirklich klarer siehst
            </h2>
          </div>
          <div className="after-grid">
            <div className="brain reveal">
              <div className="tag a">Strategie</div>
              <div className="tag b">Bewertung</div>
              <div className="tag c">Finanzierung</div>
              <div className="tag d">Entscheidung</div>
              <div className="brain-title">
                <span>🧠</span>
                <strong>Mehr Klarheit</strong>
              </div>
            </div>
            <div className="outcome-grid reveal">
              {outcomes.map((o) => (
                <div className="outcome" key={o}>
                  <div className="icon">✅</div>
                  <p>{o}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-title reveal">
            <div className="eyebrow">Für wen es gedacht ist</div>
            <h2 className="section-title">
              Für wen Kapitalanlage Intensiv besonders interessant ist
            </h2>
          </div>
          <div className="target-grid reveal">
            {[
              [
                "Für Kapitalanleger",
                "Für Menschen, die Vermögen aufbauen, Steuerlast intelligenter denken und Immobilien als Baustein nutzen wollen.",
              ],
              [
                "Für unternehmerisch denkende Menschen",
                "Für Selbstständige, Unternehmer und ambitionierte Persönlichkeiten, die Chancen nicht nur verstehen, sondern aktiv nutzen möchten.",
              ],
              [
                "Für Netzwerk- und Empfehlungsstarke",
                "Für Menschen, die im Immobilienumfeld Potenziale erkennen und daraus Kontakte, Empfehlungen oder neue Perspektiven entwickeln möchten.",
              ],
            ].map(([t, tx]) => (
              <div className="target" key={t}>
                <h3>{t}</h3>
                <p>{tx}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section property-section">
        <div className="container">
          <div className="property-intro reveal">
            <div>
              <div className="eyebrow">Immobilien aus der Praxis</div>
              <h2 className="section-title">Einblicke in echte Objekte</h2>
              <p className="muted" style={{ maxWidth: 760, marginTop: 18 }}></p>
            </div>
            <div className="property-hint">← nach rechts sliden →</div>
          </div>
          <div
            className="property-slider reveal"
            aria-label="Immobilien Slider"
          >
            {properties.map((property) => (
              <article className="property-card" key={property.title}>
                <div className="property-image">
                  <img src={property.image} alt={property.title} />
                  <div className="property-badge">{property.location}</div>
                </div>
                <div className="property-body">
                  <h3>{property.title}</h3>
                  <div style={{ height: 8 }} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section white">
        <div className="container">
          <div className="quote-dark reveal">
            <blockquote>
              "Die beste Zeit, Immobilien zu verstehen, ist nicht irgendwann –
              sondern bevor du die nächste Chance verpasst."
            </blockquote>
            <cite>Kapitalanlage Intensiv</cite>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-title reveal">
            <div className="eyebrow">Die Experten</div>
            <h2 className="section-title">Die Experten hinter dem Programm</h2>
          </div>
          <div className="experts-grid reveal">
            {experts.map(([n, r, img, tx]) => (
              <div className="expert" key={n}>
                <img src={img} alt={n} />
                <div className="expert-body">
                  <div className="expert-role">{r}</div>
                  <div className="expert-name">{n}</div>
                  <p className="muted" style={{ whiteSpace: "pre-line" }}>
                    {tx}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <div className="two-col">
            <div className="reveal">
              <div className="eyebrow">Warum dieser Preis</div>
              <h2 className="section-title">
                Warum dieses Programm keine 10.000 € kostet
              </h2>
              <p style={{ marginTop: 28 }}>
                Wir glauben, dass guter Immobilien-Content zugänglich, aber
                nicht beliebig sein sollte.
              </p>
              <p>
                Kapitalanlage Intensiv ist bewusst so kalkuliert, dass Menschen
                mit echtem Interesse teilnehmen können – ohne Gratis-Mentalität,
                aber auch ohne überzogene Coaching-Preise.
              </p>
            </div>
            <div className="price-panel reveal" style={{ margin: 0 }}>
              <div className="price-top">
                <div className="eyebrow">Kapitalanlage Intensiv – Kassel</div>
                <div
                  style={{
                    marginTop: 18,
                    display: "grid",
                    gap: 10,
                    color: "#cbd5e1",
                  }}
                >
                  <div>4 Abende Präsenzprogramm</div>
                  <div>inkl. Catering</div>
                  <div>inkl. Zugang zur Veranstaltung</div>
                  <div>inkl. Austausch und Praxisbezug</div>
                </div>
                <div className="price-line">
                  <span className="strike">Regulär 499 €</span>
                  <span className="now">249 €</span>
                </div>
              </div>
              <a
                className="btn btn-primary"
                style={{ width: "100%", marginTop: 22 }}
                href="#anmeldung"
              >
                Jetzt Platz sichern
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section footer-cta">
        <div className="container center reveal is-visible">
          <div className="eyebrow">Abschluss</div>
          <h2 className="section-title">
            Immobilien nicht nur spannend finden – sondern endlich besser
            verstehen
          </h2>
          <p className="subcopy">
            Wenn du Immobilien strategisch nutzen, Chancen fundierter bewerten
            und in einem hochwertigen Präsenzformat echte Einblicke bekommen
            willst, dann ist Kapitalanlage Intensiv der richtige Einstieg.
          </p>
          <p
            className="font-accent"
            style={{ marginTop: 20, fontSize: 26, color: "#fde68a" }}
          >
            Hochwertig. Verständlich. Umsetzbar.
          </p>
          <p style={{ marginTop: 14, color: "#b7c4d3", fontWeight: 700 }}>
            Eine Marke der Wika AG
          </p>
          <p style={{ marginTop: 8 }}>
            <a
              href="/datenschutz"
              style={{
                color: "#fde68a",
                textDecoration: "none",
                fontWeight: 800,
              }}
            >
              Datenschutzerklärung
            </a>
          </p>
          <div className="btns">
            <a className="btn btn-primary" href="#anmeldung">
              Jetzt Platz sichern
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
