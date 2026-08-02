export default function RabahHome() {
  const cards = [
    { title: "بث مباشر", icon: "📡", color: "green" },
    { title: "سينما وتلفاز", icon: "🎬", color: "red" },
    { title: "ألعاب", icon: "🎮", color: "orange" },
    { title: "محادثات فورية", icon: "💬", color: "blue" },
  ];

  const ripple = (e) => {
    const btn = e.currentTarget;
    const circle = document.createElement("span");
    const d = Math.max(btn.clientWidth, btn.clientHeight);
    const r = d / 2;
    circle.style.width = circle.style.height = d + "px";
    circle.style.left = (e.clientX - btn.getBoundingClientRect().left - r) + "px";
    circle.style.top = (e.clientY - btn.getBoundingClientRect().top - r) + "px";
    circle.classList.add("ripple");
    const old = btn.getElementsByClassName("ripple")[0];
    if (old) old.remove();
    btn.appendChild(circle);
  };

  return (
    <main dir="rtl" style={{ minHeight: "100vh", background: "#0a0e17", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "'Cairo', sans-serif" }}>
      
      {/* البطاقات */}
      <div className="grid-cards">
        {cards.map((c) => (
          <div key={c.title} className="glass-card" onClick={ripple}>
            <div className={`icon-box ${c.color}`}>{c.icon}</div>
            <h3>{c.title}</h3>
          </div>
        ))}
      </div>

      {/* زر ابدأ الآن */}
      <button className="cta-btn" onClick={ripple}>ابدأ الآن ←</button>

      {/* التذييل */}
      <p style={{ marginTop: 40, color: "#94a3b8", fontSize: 14 }}>
        الدخول المسؤول <span style={{ color: "#fbbf24" }}>●</span> الإصدار 2.0.0
      </p>

    </main>
  );
}
