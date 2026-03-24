import React, { useEffect, useState } from "react";

function LandingPage() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeStr = dateTime.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
  const dateStr = dateTime.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
  const hr = dateTime.getHours();
  const greet = hr < 12 ? "Good Morning" : hr < 17 ? "Good Afternoon" : "Good Evening";

  const metrics = [
    { label: "Total Revenue",   value: "₹84.2L",  change: "+12.5%", up: true,  color: "#2E7CF6", bars: [40,55,35,60,45,70,50,80,60,90,72,95] },
    { label: "Active Orders",   value: "1,247",    change: "+8.2%",  up: true,  color: "#10B981", bars: [30,45,50,40,65,55,70,60,75,65,80,60] },
    { label: "Pending Alerts",  value: "14",       change: "+3 new", up: false, color: "#F59E0B", bars: [20,30,25,40,30,50,35,45,40,55,45,28] },
    { label: "Invoices Due",    value: "₹12.6L",   change: "6 overdue", up: false, color: "#EF4444", bars: [60,50,65,45,70,55,60,40,65,45,55,45] },
  ];

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const incomeData  = [50,35,40,15,90,85,70,150,90,80,70,50];
  const expenseData = [50,40,35,10,75,95,80,60,100,90,80,80];

  const donutData = [
    { label: "Leather Goods", pct: 45, color: "#10B981" },
    { label: "Accessories",   pct: 32, color: "#F59E0B" },
    { label: "Export Orders", pct: 23, color: "#F87171" },
  ];

  const recentActivities = [
    { user: "Arjun R.",  action: "approved PO-4821",        time: "10 min ago", avatar: "AR", color: "#2E7CF6" },
    { user: "Priya M.",  action: "processed payroll run",    time: "34 min ago", avatar: "PM", color: "#10B981" },
    { user: "Rahul V.",  action: "raised low stock alert",   time: "1 hr ago",   avatar: "RV", color: "#F59E0B" },
    { user: "Sneha D.",  action: "added branch Mumbai HQ",   time: "2 hrs ago",  avatar: "SD", color: "#8B5CF6" },
  ];

  const quickActions = [
    { label: "New Invoice",    icon: "📄", ki: "#EEF4FF" },
    { label: "Add Stock",      icon: "📦", ki: "#E8F7EF" },
    { label: "New Employee",   icon: "👤", ki: "#EDE8F5" },
    { label: "View Reports",   icon: "📊", ki: "#FEF3C7" },
    { label: "Purchase Order", icon: "🏭", ki: "#E0F7FA" },
    { label: "Expense Entry",  icon: "💸", ki: "#FDECEA" },
  ];

  const upcoming = [
    { title: "Quarterly Review", time: "Today, 2:00 PM",     icon: "📈", bg: "#EEF4FF" },
    { title: "Team Meeting",     time: "Tomorrow, 10:00 AM",  icon: "👥", bg: "#EDE8F5" },
    { title: "Invoice Due",      time: "Mar 28, 2026",        icon: "💰", bg: "#E8F7EF" },
  ];

  // SVG Area Chart
  const W = 560, H = 155, PL = 32, PR = 8, PT = 8, PB = 28;
  const cw = W - PL - PR, ch = H - PT - PB;
  const maxV = Math.max(...incomeData, ...expenseData) * 1.12;
  const px = (i) => PL + (i / (months.length - 1)) * cw;
  const py = (v) => PT + ch - (v / maxV) * ch;
  const line = (d) => d.map((v,i) => `${px(i)},${py(v)}`).join(" ");
  const area = (d) => `M${px(0)},${py(d[0])} L${d.map((v,i)=>`${px(i)},${py(v)}`).join(" L")} L${px(months.length-1)},${PT+ch} L${PL},${PT+ch}Z`;

  // SVG Donut
  const DR = 68, DT = 13, DCX = 100, DCY = 100;
  let cum = -90;
  const arcs = donutData.map((d) => {
    const s = cum, sw = (d.pct / 100) * 360;
    cum += sw + 3;
    const arc = (r) => {
      const sa = (s*Math.PI)/180, ea = ((s+sw)*Math.PI)/180;
      return {
        x1: DCX+r*Math.cos(sa), y1: DCY+r*Math.sin(sa),
        x2: DCX+r*Math.cos(ea), y2: DCY+r*Math.sin(ea),
        lg: sw > 180 ? 1 : 0,
      };
    };
    const o = arc(DR), inn = arc(DR - DT);
    return {
      ...d,
      path: `M${o.x1} ${o.y1} A${DR} ${DR} 0 ${o.lg} 1 ${o.x2} ${o.y2} L${inn.x2} ${inn.y2} A${DR-DT} ${DR-DT} 0 ${inn.lg} 0 ${inn.x1} ${inn.y1}Z`,
    };
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap');
        .lp * { font-family:'Plus Jakarta Sans',sans-serif; box-sizing:border-box; }
        .lp { display:flex; flex-direction:column; height:100%; min-height:100vh; background:#F2F4F8; color:#0C1E3D; -webkit-font-smoothing:antialiased; }

        /* ── SIMPLE TOPBAR ── */
        .lp-top {
          background:#fff;
          border-bottom:1px solid #E4E9F2;
          height:46px;
          flex-shrink:0;
          display:flex;
          align-items:center;
          justify-content:flex-end;
          padding:0 22px;
          border-radius:4px;
        }
        .lp-top-clock { text-align:right; }
        .lp-top-time { font-size:14px; font-weight:700; color:#0C1E3D; font-variant-numeric:tabular-nums; letter-spacing:.6px; }
        .lp-top-date { font-size:10.5px; color:#9AAABF; margin-top:1px; }

        /* ── MAIN ── */
        .lp-main { flex:1; overflow-y:auto; padding:18px 22px 24px; display:flex; flex-direction:column; gap:16px; }

        /* WELCOME */
        .lp-wel { background:#fff; border:1px solid #E4E9F2; border-radius:12px; padding:15px 20px; display:flex; align-items:center; justify-content:space-between; box-shadow:0 1px 3px rgba(12,30,61,.05),0 4px 16px rgba(12,30,61,.04); position:relative; overflow:hidden; }
        .lp-wel::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse 40% 100% at 0% 50%,rgba(46,124,246,.04) 0%,transparent 70%); pointer-events:none; }
        .lp-wll { display:flex; align-items:center; gap:12px; position:relative; z-index:1; }
        .lp-wav { width:40px; height:40px; border-radius:10px; background:linear-gradient(135deg,#2E7CF6,#1854A6); display:grid; place-items:center; font-size:14px; font-weight:800; color:#fff; box-shadow:0 3px 10px rgba(46,124,246,.25); flex-shrink:0; }
        .lp-wgr { font-size:10px; font-weight:500; color:#9AAABF; letter-spacing:1px; text-transform:uppercase; margin-bottom:2px; }
        .lp-wnm { font-family:'Instrument Serif',serif; font-size:18px; color:#0C1E3D; letter-spacing:-.3px; line-height:1.1; }
        .lp-wnm em { color:#2E7CF6; font-style:italic; }
        .lp-wsb { font-size:11px; color:#9AAABF; margin-top:2px; }
        .lp-wlr { display:flex; align-items:center; gap:10px; position:relative; z-index:1; }
        .lp-wst { display:flex; align-items:center; gap:5px; font-size:11px; color:#9AAABF; font-weight:500; }
        .lp-ldot { width:6px; height:6px; border-radius:50%; background:#22C55E; animation:lp-blink 2s infinite; }
        @keyframes lp-blink { 0%,100%{opacity:1}50%{opacity:.3} }
        .lp-cta { padding:7px 16px; border-radius:8px; background:#2E7CF6; border:none; font-size:12px; font-weight:600; color:#fff; cursor:pointer; transition:.2s; }
        .lp-cta:hover { background:#1a6be0; }

        /* METRIC CARDS */
        .lp-mrow { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; }
        .lp-mcard { background:#fff; border:1px solid #E4E9F2; border-radius:14px; padding:20px 20px 16px; box-shadow:0 1px 3px rgba(12,30,61,.05),0 4px 16px rgba(12,30,61,.04); transition:.2s; }
        .lp-mcard:hover { box-shadow:0 4px 20px rgba(12,30,61,.09); transform:translateY(-2px); }
        .lp-mct { display:flex; align-items:flex-start; justify-content:space-between; margin-bottom:10px; }
        .lp-mlbl { font-size:12.5px; font-weight:500; color:#5A6880; }
        .lp-spark { display:flex; align-items:flex-end; gap:2px; height:36px; }
        .lp-sbar { border-radius:2px; width:5px; }
        .lp-mval { font-size:26px; font-weight:800; color:#0C1E3D; letter-spacing:-1px; line-height:1; margin-bottom:8px; }
        .lp-mchg { display:flex; align-items:center; gap:5px; font-size:12px; font-weight:500; }
        .lp-up { color:#10B981; } .lp-dn { color:#EF4444; }
        .lp-mchg span.lp-sub { font-weight:400; color:#9AAABF; }

        /* CHARTS ROW */
        .lp-crow { display:grid; grid-template-columns:210px 1fr; gap:14px; }

        /* Donut */
        .lp-dcard { background:#fff; border:1px solid #E4E9F2; border-radius:14px; padding:18px; box-shadow:0 1px 3px rgba(12,30,61,.05),0 4px 16px rgba(12,30,61,.04); display:flex; flex-direction:column; }
        .lp-dtitle { font-size:13px; font-weight:700; color:#0C1E3D; margin-bottom:12px; }
        .lp-dsvg { display:flex; justify-content:center; }
        .lp-dleg { display:flex; flex-direction:column; gap:8px; margin-top:14px; padding-top:12px; border-top:1px solid #F2F4F8; }
        .lp-dli { display:flex; align-items:center; gap:7px; font-size:11.5px; color:#5A6880; }
        .lp-ddot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }
        .lp-dpct { margin-left:auto; font-size:11px; font-weight:700; color:#0C1E3D; }

        /* Area chart */
        .lp-acard { background:#fff; border:1px solid #E4E9F2; border-radius:14px; padding:18px 20px 14px; box-shadow:0 1px 3px rgba(12,30,61,.05),0 4px 16px rgba(12,30,61,.04); }
        .lp-ahead { display:flex; align-items:flex-start; justify-content:space-between; margin-bottom:4px; }
        .lp-atitle { font-size:13px; font-weight:700; color:#0C1E3D; }
        .lp-asub { font-size:11.5px; color:#10B981; font-weight:600; margin-top:2px; }
        .lp-aleg { display:flex; gap:20px; margin-bottom:12px; flex-wrap:wrap; }
        .lp-ali { display:flex; align-items:center; gap:6px; font-size:11.5px; color:#5A6880; }
        .lp-aldot { width:9px; height:9px; border-radius:50%; }
        .lp-alval { font-size:14px; font-weight:800; color:#0C1E3D; margin-left:4px; }
        .lp-ayr { font-size:11px; color:#5A6880; background:#F2F4F8; border:1px solid #E4E9F2; border-radius:6px; padding:3px 10px; cursor:pointer; }
        .lp-asvg { width:100%; overflow:visible; }

        /* QUICK ACTIONS */
        .lp-qatitle { font-size:13px; font-weight:700; color:#0C1E3D; margin-bottom:10px; }
        .lp-qarow { display:grid; grid-template-columns:repeat(6,1fr); gap:10px; }
        .lp-qabtn { display:flex; flex-direction:column; align-items:center; gap:6px; padding:12px 8px; border-radius:10px; border:1px solid #E4E9F2; background:#FAFBFE; cursor:pointer; transition:.15s; }
        .lp-qabtn:hover { border-color:#2E7CF6; background:#EEF4FF; }
        .lp-qaico { width:32px; height:32px; border-radius:8px; display:grid; place-items:center; font-size:15px; }
        .lp-qalb { font-size:10px; font-weight:600; color:#0C1E3D; text-align:center; line-height:1.3; }

        /* BOTTOM GRID */
        .lp-bgrid { display:grid; grid-template-columns:1fr 1fr 220px; gap:14px; }
        .lp-bcard { background:#fff; border:1px solid #E4E9F2; border-radius:12px; padding:15px 17px; box-shadow:0 1px 3px rgba(12,30,61,.05),0 4px 16px rgba(12,30,61,.04); }
        .lp-bhead { display:flex; align-items:center; justify-content:space-between; margin-bottom:13px; padding-bottom:10px; border-bottom:1px solid #F2F4F8; }
        .lp-btitle { font-size:13px; font-weight:700; color:#0C1E3D; display:flex; align-items:center; gap:6px; }
        .lp-bcdot { width:7px; height:7px; border-radius:50%; }
        .lp-blink { font-size:11px; color:#2E7CF6; font-weight:600; cursor:pointer; background:none; border:none; padding:0; }
        .lp-arow2 { display:flex; align-items:center; justify-content:space-between; padding:7px 0; border-bottom:1px solid #F2F4F8; }
        .lp-arow2:last-child { border-bottom:none; }
        .lp-arleft { display:flex; align-items:center; gap:9px; }
        .lp-arav { width:30px; height:30px; border-radius:50%; display:grid; place-items:center; font-size:10px; font-weight:700; color:#fff; flex-shrink:0; }
        .lp-arnm { font-size:12px; font-weight:600; color:#0C1E3D; }
        .lp-aract { font-size:11px; color:#5A6880; margin-top:1px; }
        .lp-artm { font-size:10px; color:#9AAABF; white-space:nowrap; }
        .lp-upitem { display:flex; align-items:center; gap:10px; padding:9px 10px; border-radius:9px; margin-bottom:7px; }
        .lp-upitem:last-child { margin-bottom:0; }
        .lp-upic { width:32px; height:32px; border-radius:8px; display:grid; place-items:center; font-size:14px; flex-shrink:0; background:#fff; }
        .lp-uptitle { font-size:12px; font-weight:600; color:#0C1E3D; }
        .lp-uptime { font-size:10.5px; color:#9AAABF; margin-top:1px; }

        /* FOOTER */
        .lp-ftr { background:#fff; border-top:1px solid #E4E9F2; padding:9px 22px; flex-shrink:0; display:flex; align-items:center; justify-content:space-between; }
        .lp-fl { font-size:11px; color:#9AAABF; display:flex; align-items:center; gap:10px; }
        .lp-fsep { width:3px; height:3px; border-radius:50%; background:#C8D3E8; }
        .lp-fr { display:flex; align-items:center; gap:16px; }
        .lp-fr a { font-size:11px; color:#9AAABF; text-decoration:none; }
        .lp-fr a:hover { color:#2E7CF6; }
        .lp-fbrand { display:flex; align-items:center; gap:5px; }
        .lp-fbmark { width:17px; height:17px; border-radius:4px; background:#0C1E3D; display:grid; place-items:center; font-family:'Instrument Serif',serif; font-size:10px; color:#fff; }
        .lp-fbtxt { font-size:11px; font-weight:600; color:#9AAABF; }
        .lp-fbtxt em { color:#1854A6; font-style:normal; }

        @media(max-width:1100px){ .lp-mrow{grid-template-columns:repeat(2,1fr);} .lp-crow{grid-template-columns:1fr;} .lp-bgrid{grid-template-columns:1fr 1fr;} .lp-qarow{grid-template-columns:repeat(3,1fr);} }
        @media(max-width:700px){ .lp-mrow{grid-template-columns:1fr 1fr;} .lp-bgrid{grid-template-columns:1fr;} .lp-main{padding:12px;} }
      `}</style>

      <div className="lp">

        {/* ── SIMPLE WHITE TOPBAR — time only ── */}
        <div className="lp-top">
          <div className="lp-top-clock">
            <div className="lp-top-time">{timeStr}</div>
            <div className="lp-top-date">{dateStr}</div>
          </div>
        </div>

        {/* ── MAIN ── */}
        <main className="lp-main">

          {/* WELCOME */}
          

          {/* METRIC CARDS */}
          <div className="lp-mrow">
            {metrics.map((m,i) => (
              <div key={i} className="lp-mcard">
                <div className="lp-mct">
                  <div className="lp-mlbl">{m.label}</div>
                  <div className="lp-spark">
                    {m.bars.map((b,j) => (
                      <div key={j} className="lp-sbar" style={{
                        height:`${(b/100)*36}px`,
                        background: j >= m.bars.length-3 ? m.color : `${m.color}38`,
                      }}/>
                    ))}
                  </div>
                </div>
                <div className="lp-mval">{m.value}</div>
                <div className={`lp-mchg ${m.up?"lp-up":"lp-dn"}`}>
                  <span>{m.up?"🔼":"🔽"}</span>
                  <span>{m.change} <span className="lp-sub">last 30 days</span></span>
                </div>
              </div>
            ))}
          </div>

          {/* CHARTS */}
          <div className="lp-crow">

            {/* DONUT */}
            <div className="lp-dcard">
              <div className="lp-dtitle">Sales by Category</div>
              <div className="lp-dsvg">
                <svg width="174" height="174" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="68" fill="none" stroke="#F2F4F8" strokeWidth="20"/>
                  {arcs.map((d,i) => <path key={i} d={d.path} fill={d.color} opacity=".9"/>)}
                  <text x="100" y="96" textAnchor="middle" fontSize="11" fill="#9AAABF" fontFamily="Plus Jakarta Sans,sans-serif">Total</text>
                  <text x="100" y="115" textAnchor="middle" fontSize="19" fontWeight="800" fill="#0C1E3D" fontFamily="Plus Jakarta Sans,sans-serif">2,324</text>
                </svg>
              </div>
              <div className="lp-dleg">
                {donutData.map((d,i) => (
                  <div key={i} className="lp-dli">
                    <div className="lp-ddot" style={{background:d.color}}/>
                    <span>{d.label}</span>
                    <span className="lp-dpct">{d.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AREA CHART */}
            <div className="lp-acard">
              <div className="lp-ahead">
                <div>
                  <div className="lp-atitle">Yearly Sales</div>
                  <div className="lp-asub">(+43%) than last year</div>
                </div>
                <div className="lp-ayr">2026 ▾</div>
              </div>
              <div className="lp-aleg">
                <div className="lp-ali"><div className="lp-aldot" style={{background:"#10B981"}}/>Total income<span className="lp-alval">₹84.2L</span></div>
                <div className="lp-ali"><div className="lp-aldot" style={{background:"#F59E0B"}}/>Total expenses<span className="lp-alval">₹52.6L</span></div>
              </div>
              <svg viewBox={`0 0 ${W} ${H}`} className="lp-asvg" style={{height:H}}>
                <defs>
                  <linearGradient id="ig" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity=".22"/>
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="eg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity=".16"/>
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                {[0,50,100,150].map(v=>(
                  <g key={v}>
                    <line x1={PL} y1={py(v)} x2={PL+cw} y2={py(v)} stroke="#F2F4F8" strokeWidth="1" strokeDasharray="4,3"/>
                    <text x={PL-5} y={py(v)+4} textAnchor="end" fontSize="9" fill="#9AAABF">{v}</text>
                  </g>
                ))}
                {months.map((m,i)=>(
                  <text key={i} x={px(i)} y={H-4} textAnchor="middle" fontSize="9" fill="#9AAABF">{m}</text>
                ))}
                <path d={area(expenseData)} fill="url(#eg)"/>
                <polyline points={line(expenseData)} fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                <path d={area(incomeData)} fill="url(#ig)"/>
                <polyline points={line(incomeData)} fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
                {incomeData.map((v,i)=>(
                  <circle key={i} cx={px(i)} cy={py(v)} r="3" fill="#fff" stroke="#10B981" strokeWidth="2"/>
                ))}
              </svg>
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div>
            <div className="lp-qatitle">Quick Actions</div>
            <div className="lp-qarow">
              {quickActions.map((q,i)=>(
                <button key={i} className="lp-qabtn">
                  <div className="lp-qaico" style={{background:q.ki}}>{q.icon}</div>
                  <span className="lp-qalb">{q.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* BOTTOM */}
          <div className="lp-bgrid">
            <div className="lp-bcard" style={{gridColumn:"span 2"}}>
              <div className="lp-bhead">
                <span className="lp-btitle"><div className="lp-bcdot" style={{background:"#2E7CF6"}}/>Recent Activities</span>
                <button className="lp-blink">View All →</button>
              </div>
              {recentActivities.map((a,i)=>(
                <div key={i} className="lp-arow2">
                  <div className="lp-arleft">
                    <div className="lp-arav" style={{background:a.color}}>{a.avatar}</div>
                    <div>
                      <div className="lp-arnm">{a.user}</div>
                      <div className="lp-aract">{a.action}</div>
                    </div>
                  </div>
                  <div className="lp-artm">{a.time}</div>
                </div>
              ))}
            </div>
            <div className="lp-bcard">
              <div className="lp-bhead">
                <span className="lp-btitle"><div className="lp-bcdot" style={{background:"#F59E0B"}}/>Upcoming</span>
                <span style={{fontSize:14}}>📅</span>
              </div>
              {upcoming.map((u,i)=>(
                <div key={i} className="lp-upitem" style={{background:u.bg}}>
                  <div className="lp-upic">{u.icon}</div>
                  <div>
                    <div className="lp-uptitle">{u.title}</div>
                    <div className="lp-uptime">{u.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="lp-ftr">
          <div className="lp-fl">
            <span>© 2026 NexGen ERP. All rights reserved.</span>
            <div className="lp-fsep"/><span>v3.2.1</span>
          </div>
          <div className="lp-fr">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Support</a>
            <div className="lp-fbrand">
              <div className="lp-fbmark">N</div>
              <span className="lp-fbtxt">Nex<em>Gen</em> ERP</span>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}

export default LandingPage;