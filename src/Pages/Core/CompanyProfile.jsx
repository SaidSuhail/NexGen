// import { useState, useEffect } from "react";

// const COMPANIES = [
//   {
//     id: 1,
//     name: "TechNova Solutions",
//     shortName: "TNS",
//     branchId: "BR-001-MUM",
//     phone: "+91 98765 43210",
//     email: "contact@technova.in",
//     telephone: "+91 22 6789 1234",
//     trn: "TRN-9876543210",
//     taxId: "GSTIN27AAACT1234B1Z5",
//     currency: "INR",
//     financialYear: "April 2025 - March 2026",
//     logo: "https://picsum.photos/id/1015/400/400",
//     hue: "#4f46e5",
//     hueLight: "#e0e7ff",
//   },
//   {
//     id: 2,
//     name: "GlobalTrade Dynamics",
//     shortName: "GTD",
//     branchId: "BR-002-DEL",
//     phone: "+91 87654 32109",
//     email: "hello@globaltrade.co",
//     telephone: "+91 11 4567 8901",
//     trn: "TRN-1122334455",
//     taxId: "GSTIN09BBBBB1234C1Z9",
//     currency: "USD",
//     financialYear: "January 2025 - December 2025",
//     logo: "https://picsum.photos/id/201/400/400",
//     hue: "#0ea5e9",
//     hueLight: "#e0f2fe",
//   },
// ];

// const LabelInput = ({ label, name, value, onChange, type = "text" }) => (
//   <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
//     <label style={{
//       fontFamily: "'Plus Jakarta Sans', sans-serif",
//       fontSize: 10.5,
//       fontWeight: 600,
//       letterSpacing: "0.12em",
//       textTransform: "uppercase",
//       color: "#94a3b8",
//     }}>{label}</label>
//     <input
//       type={type}
//       name={name}
//       value={value || ""}
//       onChange={onChange}
//       style={{
//         fontFamily: "'Plus Jakarta Sans', sans-serif",
//         fontSize: 13.5,
//         color: "#1e293b",
//         background: "#f8fafc",
//         border: "1.5px solid #e2e8f0",
//         borderRadius: 10,
//         padding: "9px 14px",
//         outline: "none",
//         transition: "border 0.2s, box-shadow 0.2s",
//         width: "100%",
//         boxSizing: "border-box",
//       }}
//       onFocus={e => {
//         e.target.style.border = "1.5px solid #6366f1";
//         e.target.style.boxShadow = "0 0 0 3px #6366f115";
//         e.target.style.background = "#fff";
//       }}
//       onBlur={e => {
//         e.target.style.border = "1.5px solid #e2e8f0";
//         e.target.style.boxShadow = "none";
//         e.target.style.background = "#f8fafc";
//       }}
//     />
//   </div>
// );

// const Divider = ({ label }) => (
//   <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "4px 0 2px" }}>
//     <div style={{ flex: 1, height: 1, background: "#f1f5f9" }} />
//     <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#cbd5e1", whiteSpace: "nowrap", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{label}</span>
//     <div style={{ flex: 1, height: 1, background: "#f1f5f9" }} />
//   </div>
// );

// export default function CompanyProfile() {
//   const [selectedId, setSelectedId] = useState(1);
//   const [forms, setForms] = useState(() => Object.fromEntries(COMPANIES.map(c => [c.id, { ...c }])));
//   const [logoPreview, setLogoPreview] = useState({});
//   const [saved, setSaved] = useState(false);
//   const [animKey, setAnimKey] = useState(0);

//   const company = COMPANIES.find(c => c.id === selectedId);
//   const form = forms[selectedId] || {};
//   const preview = logoPreview[selectedId] || company.logo;

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setForms(prev => ({ ...prev, [selectedId]: { ...prev[selectedId], [name]: value } }));
//   };

//   const handleLogo = e => {
//     const file = e.target.files[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setLogoPreview(prev => ({ ...prev, [selectedId]: url }));
//     }
//   };

//   const handleSave = () => {
//     setSaved(true);
//     setTimeout(() => setSaved(false), 2500);
//   };

//   const switchCompany = (id) => {
//     setSelectedId(id);
//     setAnimKey(k => k + 1);
//   };

//   const getInitials = name => name?.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();

//   const currencies = [
//     { value: "INR", label: "INR", flag: "🇮🇳", name: "Indian Rupee" },
//     { value: "USD", label: "USD", flag: "🇺🇸", name: "US Dollar" },
//     { value: "EUR", label: "EUR", flag: "🇪🇺", name: "Euro" },
//     { value: "GBP", label: "GBP", flag: "🇬🇧", name: "British Pound" },
//     { value: "AED", label: "AED", flag: "🇦🇪", name: "UAE Dirham" },
//   ];

//   const activeCurrency = currencies.find(c => c.value === (form.currency || "INR"));

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:wght@600;700&display=swap');
//         * { box-sizing: border-box; margin: 0; padding: 0; }
//         html, body, #root { height: 100%; overflow: hidden; }
//         @keyframes fadeSlide {
//           from { opacity: 0; transform: translateY(12px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .fade-in { animation: fadeSlide 0.38s cubic-bezier(0.22,1,0.36,1) both; }
//         .save-btn:hover { filter: brightness(1.06); transform: translateY(-1px); box-shadow: 0 8px 24px -4px #6366f155 !important; }
//         .save-btn:active { transform: translateY(0); }
//         .co-tab:hover { background: #f1f5f9 !important; }
//         .upload-btn:hover { background: #f1f5f9 !important; border-color: #6366f1 !important; }
//       `}</style>

//       <div style={{
//         fontFamily: "'Plus Jakarta Sans', sans-serif",
//         background: "linear-gradient(135deg, #f0f4ff 0%, #fafafa 50%, #f5f3ff 100%)",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         overflow: "hidden",
//       }}>

//         {/* ── TOP HEADER ── */}
//         <header style={{
//           background: "rgba(255,255,255,0.85)",
//           backdropFilter: "blur(16px)",
//           borderBottom: "1px solid #e8edf5",
//           padding: "0 32px",
//           height: 62,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           flexShrink: 0,
//           boxShadow: "0 1px 12px rgba(0,0,0,0.04)",
//         }}>
//           {/* Brand */}
//           <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//             <div style={{
//               width: 32, height: 32, borderRadius: 9,
//               background: "linear-gradient(135deg, #6366f1, #818cf8)",
//               display: "flex", alignItems: "center", justifyContent: "center",
//               boxShadow: "0 4px 12px #6366f135",
//             }}>
//               <svg width="15" height="15" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24">
//                 <rect x="3" y="3" width="18" height="18" rx="4"/>
//                 <path d="M9 9h6M9 12h6M9 15h4" strokeLinecap="round"/>
//               </svg>
//             </div>
//             <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 17, color: "#1e293b", letterSpacing: "-0.02em" }}>
//               Company Profile
//             </span>
//           </div>

//           {/* Company switcher */}
//           <div style={{ display: "flex", gap: 6, background: "#f1f5f9", borderRadius: 12, padding: 4 }}>
//             {COMPANIES.map(c => (
//               <button key={c.id} className="co-tab"
//                 onClick={() => switchCompany(c.id)}
//                 style={{
//                   display: "flex", alignItems: "center", gap: 8,
//                   padding: "7px 16px", borderRadius: 9, border: "none",
//                   background: selectedId === c.id ? "white" : "transparent",
//                   boxShadow: selectedId === c.id ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
//                   cursor: "pointer", transition: "all 0.2s ease",
//                   fontFamily: "'Plus Jakarta Sans', sans-serif",
//                 }}>
//                 <div style={{
//                   width: 22, height: 22, borderRadius: 6, overflow: "hidden",
//                   border: selectedId === c.id ? `1.5px solid ${c.hue}50` : "1.5px solid #e2e8f0",
//                 }}>
//                   <img src={c.logo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                 </div>
//                 <span style={{
//                   fontSize: 12.5, fontWeight: 700, letterSpacing: "0.04em",
//                   color: selectedId === c.id ? "#1e293b" : "#94a3b8",
//                 }}>{c.shortName}</span>
//               </button>
//             ))}
//           </div>

//           {/* Save */}
//           <button className="save-btn"
//             onClick={handleSave}
//             style={{
//               display: "flex", alignItems: "center", gap: 8,
//               padding: "9px 22px", borderRadius: 11, border: "none",
//               background: saved
//                 ? "linear-gradient(135deg, #10b981, #34d399)"
//                 : "linear-gradient(135deg, #6366f1, #818cf8)",
//               color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif",
//               fontWeight: 700, fontSize: 13, cursor: "pointer",
//               boxShadow: saved ? "0 4px 16px #10b98135" : "0 4px 16px #6366f135",
//               transition: "all 0.3s ease",
//             }}>
//             {saved ? (
//               <><svg width="14" height="14" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg> Saved!</>
//             ) : (
//               <><svg width="14" height="14" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/><polyline points="17,21 17,13 7,13 7,21" strokeLinecap="round" strokeLinejoin="round"/></svg> Save Changes</>
//             )}
//           </button>
//         </header>

//         {/* ── BODY ── */}
//         <div key={animKey} className="fade-in" style={{
//           flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr",
//           gap: 0, overflow: "hidden",
//         }}>

//           {/* ══ LEFT PANEL ══ */}
//           <div style={{
//             borderRight: "1px solid #e8edf5",
//             padding: "28px 32px",
//             display: "flex", flexDirection: "column", gap: 20,
//             overflow: "hidden",
//           }}>

//             {/* Company identity header */}
//             <div style={{
//               background: "white",
//               borderRadius: 18,
//               padding: "20px 22px",
//               border: "1px solid #f0f4ff",
//               boxShadow: "0 2px 16px rgba(99,102,241,0.06)",
//             }}>
//               <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
//                 <div style={{
//                   width: 10, height: 10, borderRadius: 3,
//                   background: `linear-gradient(135deg, ${company.hue}, ${company.hue}99)`,
//                   boxShadow: `0 2px 6px ${company.hue}50`,
//                 }} />
//                 <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#94a3b8" }}>
//                   Company Details
//                 </span>
//               </div>
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
//                 <div style={{ gridColumn: "1 / -1" }}>
//                   <LabelInput label="Company Name" name="name" value={form.name} onChange={handleChange} />
//                 </div>
//                 <LabelInput label="Short Name" name="shortName" value={form.shortName} onChange={handleChange} />
//                 <LabelInput label="Branch ID" name="branchId" value={form.branchId} onChange={handleChange} />
//               </div>
//             </div>

//             {/* Contact details */}
//             <div style={{
//               background: "white",
//               borderRadius: 18,
//               padding: "20px 22px",
//               border: "1px solid #f0f4ff",
//               boxShadow: "0 2px 16px rgba(99,102,241,0.06)",
//             }}>
//               <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
//                 <div style={{
//                   width: 10, height: 10, borderRadius: 3,
//                   background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
//                   boxShadow: "0 2px 6px #06b6d450",
//                 }} />
//                 <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#94a3b8" }}>
//                   Contact
//                 </span>
//               </div>
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
//                 <div style={{ gridColumn: "1 / -1" }}>
//                   <LabelInput label="Mobile" name="phone" type="tel" value={form.phone} onChange={handleChange} />
//                 </div>
//                 <LabelInput label="Landline" name="telephone" type="tel" value={form.telephone} onChange={handleChange} />
//                 <LabelInput label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
//               </div>
//             </div>

//             {/* Tax details */}
//             <div style={{
//               background: "white",
//               borderRadius: 18,
//               padding: "20px 22px",
//               border: "1px solid #f0f4ff",
//               boxShadow: "0 2px 16px rgba(99,102,241,0.06)",
//             }}>
//               <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
//                 <div style={{
//                   width: 10, height: 10, borderRadius: 3,
//                   background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
//                   boxShadow: "0 2px 6px #f59e0b50",
//                 }} />
//                 <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#94a3b8" }}>
//                   Tax & Compliance
//                 </span>
//               </div>
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
//                 <LabelInput label="TRN Number" name="trn" value={form.trn} onChange={handleChange} />
//                 <LabelInput label="GSTIN / Tax ID" name="taxId" value={form.taxId} onChange={handleChange} />
//                 {/* Compliance badge */}
//                 <div style={{ gridColumn: "1 / -1" }}>
//                   <div style={{
//                     display: "flex", alignItems: "center", gap: 10,
//                     background: "#f0fdf4", borderRadius: 10,
//                     padding: "10px 14px", border: "1px solid #bbf7d0",
//                     marginTop: 2,
//                   }}>
//                     <div style={{ width: 28, height: 28, borderRadius: 8, background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                       <svg width="14" height="14" fill="none" stroke="#16a34a" strokeWidth="2.5" viewBox="0 0 24 24">
//                         <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
//                       </svg>
//                     </div>
//                     <div>
//                       <div style={{ fontSize: 12, fontWeight: 700, color: "#15803d" }}>Verified Entity</div>
//                       <div style={{ fontSize: 11, color: "#86efac" }}>Tax registration confirmed · Active</div>
//                     </div>
//                     <div style={{ marginLeft: "auto" }}>
//                       <span style={{ fontSize: 10.5, fontWeight: 700, background: "#dcfce7", color: "#16a34a", padding: "3px 10px", borderRadius: 20, letterSpacing: "0.06em" }}>
//                         COMPLIANT
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ══ RIGHT PANEL ══ */}
//           <div style={{
//             padding: "28px 32px",
//             display: "flex", flexDirection: "column", gap: 20,
//             overflow: "hidden",
//           }}>

//             {/* Logo card */}
//             <div style={{
//               background: "white",
//               borderRadius: 18,
//               padding: "24px 22px",
//               border: "1px solid #f0f4ff",
//               boxShadow: "0 2px 16px rgba(99,102,241,0.06)",
//               display: "flex", alignItems: "center", gap: 24,
//             }}>
//               {/* Logo circle */}
//               <div style={{ position: "relative", flexShrink: 0 }}>
//                 <div style={{
//                   width: 100, height: 100, borderRadius: 24,
//                   overflow: "hidden",
//                   border: `3px solid ${company.hueLight}`,
//                   boxShadow: `0 8px 28px ${company.hue}20`,
//                 }}>
//                   {preview ? (
//                     <img src={preview} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                   ) : (
//                     <div style={{
//                       width: "100%", height: "100%",
//                       background: `linear-gradient(135deg, ${company.hueLight}, white)`,
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                       fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 28, color: company.hue,
//                     }}>
//                       {getInitials(company.name)}
//                     </div>
//                   )}
//                 </div>
//                 {/* Upload pill */}
//                 <label className="upload-btn" style={{
//                   position: "absolute", bottom: -10, left: "50%", transform: "translateX(-50%)",
//                   display: "flex", alignItems: "center", gap: 5,
//                   background: "white", border: "1.5px solid #e2e8f0",
//                   borderRadius: 20, padding: "4px 12px",
//                   cursor: "pointer", whiteSpace: "nowrap",
//                   boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
//                   transition: "all 0.2s ease",
//                 }}>
//                   <input type="file" accept="image/*" onChange={handleLogo} style={{ display: "none" }} />
//                   <svg width="11" height="11" fill="none" stroke="#6366f1" strokeWidth="2.2" viewBox="0 0 24 24">
//                     <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" strokeLinecap="round" strokeLinejoin="round"/>
//                     <polyline points="17,8 12,3 7,8" strokeLinecap="round" strokeLinejoin="round"/>
//                     <line x1="12" y1="3" x2="12" y2="15" strokeLinecap="round"/>
//                   </svg>
//                   <span style={{ fontSize: 11, fontWeight: 600, color: "#6366f1" }}>Upload</span>
//                 </label>
//               </div>

//               {/* Company name display */}
//               <div style={{ flex: 1 }}>
//                 <div style={{
//                   fontFamily: "'Fraunces', serif", fontWeight: 700,
//                   fontSize: 22, color: "#0f172a", lineHeight: 1.2,
//                   letterSpacing: "-0.02em", marginBottom: 4,
//                 }}>
//                   {form.name || company.name}
//                 </div>
//                 <div style={{ fontSize: 12, color: "#94a3b8", fontWeight: 500, marginBottom: 10 }}>
//                   {form.branchId || company.branchId}
//                 </div>
//                 <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
//                   <span style={{
//                     fontSize: 11, fontWeight: 700, letterSpacing: "0.06em",
//                     padding: "3px 10px", borderRadius: 20,
//                     background: company.hueLight, color: company.hue,
//                   }}>{form.shortName || company.shortName}</span>
//                   <span style={{
//                     fontSize: 11, fontWeight: 600,
//                     padding: "3px 10px", borderRadius: 20,
//                     background: "#f1f5f9", color: "#64748b",
//                   }}>PNG · JPG</span>
//                 </div>
//               </div>
//             </div>

//             {/* Currency card */}
//             <div style={{
//               background: "white",
//               borderRadius: 18,
//               padding: "20px 22px",
//               border: "1px solid #f0f4ff",
//               boxShadow: "0 2px 16px rgba(99,102,241,0.06)",
//             }}>
//               <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
//                 <div style={{
//                   width: 10, height: 10, borderRadius: 3,
//                   background: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
//                   boxShadow: "0 2px 6px #8b5cf650",
//                 }} />
//                 <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#94a3b8" }}>
//                   Default Currency
//                 </span>
//               </div>

//               {/* Currency selector tiles */}
//               <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
//                 {currencies.map(cur => (
//                   <button key={cur.value}
//                     onClick={() => handleChange({ target: { name: "currency", value: cur.value } })}
//                     style={{
//                       display: "flex", alignItems: "center", gap: 6,
//                       padding: "8px 14px", borderRadius: 10, border: "none",
//                       background: (form.currency || "INR") === cur.value ? company.hueLight : "#f8fafc",
//                       border: `1.5px solid ${(form.currency || "INR") === cur.value ? company.hue + "50" : "#e2e8f0"}`,
//                       cursor: "pointer", transition: "all 0.18s ease",
//                       boxShadow: (form.currency || "INR") === cur.value ? `0 2px 10px ${company.hue}20` : "none",
//                     }}>
//                     <span style={{ fontSize: 16 }}>{cur.flag}</span>
//                     <span style={{
//                       fontSize: 12, fontWeight: 700,
//                       color: (form.currency || "INR") === cur.value ? company.hue : "#64748b",
//                     }}>{cur.label}</span>
//                   </button>
//                 ))}
//               </div>

//               {/* Active currency display */}
//               <div style={{
//                 display: "flex", alignItems: "center", gap: 12,
//                 background: company.hueLight + "60",
//                 borderRadius: 12, padding: "12px 16px",
//                 border: `1px solid ${company.hue}25`,
//               }}>
//                 <span style={{ fontSize: 26 }}>{activeCurrency?.flag}</span>
//                 <div>
//                   <div style={{ fontSize: 14, fontWeight: 700, color: "#1e293b" }}>{activeCurrency?.name}</div>
//                   <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 500 }}>Active · {activeCurrency?.label}</div>
//                 </div>
//               </div>
//             </div>

//             {/* Financial year card */}
//             <div style={{
//               background: "white",
//               borderRadius: 18,
//               padding: "20px 22px",
//               border: "1px solid #f0f4ff",
//               boxShadow: "0 2px 16px rgba(99,102,241,0.06)",
//               flex: 1,
//             }}>
//               <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
//                 <div style={{
//                   width: 10, height: 10, borderRadius: 3,
//                   background: "linear-gradient(135deg, #f43f5e, #fb7185)",
//                   boxShadow: "0 2px 6px #f43f5e50",
//                 }} />
//                 <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#94a3b8" }}>
//                   Financial Year
//                 </span>
//               </div>

//               <LabelInput label="Fiscal Period" name="financialYear" value={form.financialYear} onChange={handleChange} />

//               {/* Mini stats row */}
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 16 }}>
//                 {[
//                   { label: "Quarter", val: "Q4", icon: "◈", bg: "#fef3c7", color: "#d97706" },
//                   { label: "Compliance", val: "98%", icon: "✓", bg: "#dcfce7", color: "#16a34a" },
//                   { label: "Accounts", val: "12", icon: "#", bg: company.hueLight, color: company.hue },
//                 ].map(s => (
//                   <div key={s.label} style={{
//                     background: s.bg, borderRadius: 12,
//                     padding: "12px 14px", textAlign: "center",
//                   }}>
//                     <div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: s.color }}>{s.val}</div>
//                     <div style={{ fontSize: 10.5, fontWeight: 600, color: s.color + "cc", marginTop: 2, letterSpacing: "0.05em" }}>{s.label}</div>
//                   </div>
//                 ))}
//               </div>

//               <p style={{ fontSize: 11, color: "#cbd5e1", marginTop: 12, lineHeight: 1.5, fontWeight: 500 }}>
//                 Financial year is used across all reports, tax filings, and compliance documents.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// import { useState } from "react";

// const COMPANIES = [
//   { id: 1, name: "TechNova Solutions", shortName: "TNS", branchId: "BR-001-MUM", phone: "+91 98765 43210", email: "contact@technova.in", telephone: "+91 22 6789 1234", trn: "TRN-9876543210", taxId: "GSTIN27AAACT1234B1Z5", currency: "INR", financialYear: "April 2025 - March 2026", logo: "https://picsum.photos/id/1015/400/400", hue: "#4f46e5", hueLight: "#e0e7ff" },
//   { id: 2, name: "GlobalTrade Dynamics", shortName: "GTD", branchId: "BR-002-DEL", phone: "+91 87654 32109", email: "hello@globaltrade.co", telephone: "+91 11 4567 8901", trn: "TRN-1122334455", taxId: "GSTIN09BBBBB1234C1Z9", currency: "USD", financialYear: "January 2025 - December 2025", logo: "https://picsum.photos/id/201/400/400", hue: "#0ea5e9", hueLight: "#e0f2fe" },
// ];

// const CURRENCIES = [
//   { value: "INR", label: "INR", flag: "🇮🇳", name: "Indian Rupee" },
//   { value: "USD", label: "USD", flag: "🇺🇸", name: "US Dollar" },
//   { value: "EUR", label: "EUR", flag: "🇪🇺", name: "Euro" },
//   { value: "GBP", label: "GBP", flag: "🇬🇧", name: "British Pound" },
//   { value: "AED", label: "AED", flag: "🇦🇪", name: "UAE Dirham" },
// ];

// const LabelInput = ({ label, name, value, onChange, type = "text" }) => (
//   <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
//     <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#94a3b8" }}>{label}</label>
//     <input
//       type={type} name={name} value={value || ""} onChange={onChange}
//       style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13.5, color: "#1e293b", background: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: 10, padding: "9px 14px", outline: "none", transition: "border 0.2s, box-shadow 0.2s", width: "100%", boxSizing: "border-box" }}
//       onFocus={e => { e.target.style.border = "1.5px solid #6366f1"; e.target.style.boxShadow = "0 0 0 3px #6366f115"; e.target.style.background = "#fff"; }}
//       onBlur={e => { e.target.style.border = "1.5px solid #e2e8f0"; e.target.style.boxShadow = "none"; e.target.style.background = "#f8fafc"; }}
//     />
//   </div>
// );

// export default function CompanyProfile() {
//   const [selectedId, setSelectedId] = useState(1);
//   const [forms, setForms] = useState(() => Object.fromEntries(COMPANIES.map(c => [c.id, { ...c }])));
//   const [logoPreview, setLogoPreview] = useState({});
//   const [saved, setSaved] = useState(false);
//   const [animKey, setAnimKey] = useState(0);
// const [taxInput, setTaxInput] = useState("");
// const [taxList, setTaxList] = useState([]);
// const [defaultTax, setDefaultTax] = useState("");
//   const company = COMPANIES.find(c => c.id === selectedId);
//   const form = forms[selectedId] || {};
//   const preview = logoPreview[selectedId] || company.logo;
//   const activeCurrency = CURRENCIES.find(c => c.value === (form.currency || "INR"));

//   const handleChange = e => setForms(prev => ({ ...prev, [selectedId]: { ...prev[selectedId], [e.target.name]: e.target.value } }));
//   const handleLogo = e => { const file = e.target.files[0]; if (file) setLogoPreview(prev => ({ ...prev, [selectedId]: URL.createObjectURL(file) })); };
//   const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2500); };
//   const switchCompany = id => { setSelectedId(id); setAnimKey(k => k + 1); };
//   const getInitials = name => name?.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
// const addTax = () => {
//   if (!taxInput) return;

//   const taxValue = `${taxInput}%`;

//   if (!taxList.includes(taxValue)) {
//     setTaxList([...taxList, taxValue]);
//   }

//   setTaxInput("");
// };
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:wght@600;700&display=swap');
//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//         html, body, #root { min-height: 100%; background: linear-gradient(135deg, #f0f4ff 0%, #fafafa 50%, #f5f3ff 100%); }
//         @keyframes fadeSlide { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
//         .fade-in { animation: fadeSlide 0.38s cubic-bezier(0.22,1,0.36,1) both; }
//         .save-btn:hover { filter: brightness(1.06); transform: translateY(-1px); }
//         .save-btn:active { transform: translateY(0); }
//         .co-tab:hover { background: #f1f5f9 !important; }
//         .upload-btn:hover { background: #f1f5f9 !important; border-color: #6366f1 !important; }
//         .cur-btn:hover { filter: brightness(0.97); }

//         /* ── Responsive grid ── */
//         .body-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 0;
//           flex: 1;
//         }
//         .left-panel {
//           border-right: 1px solid #e8edf5;
//           padding: 28px 32px;
//           display: flex;
//           flex-direction: column;
//           gap: 20px;
//           overflow-y: auto;
//         }
//         .right-panel {
//           padding: 28px 32px;
//           display: flex;
//           flex-direction: column;
//           gap: 20px;
//           overflow-y: auto;
//         }
//         .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
//         .header-inner { display: flex; align-items: center; justify-content: space-between; height: 62px; padding: 0 32px; }
//         .brand-label { display: block; }
//         .company-name-display { font-size: 22px; }
//         .logo-card { display: flex; align-items: center; gap: 24px; }
//         .logo-size { width: 100px; height: 100px; border-radius: 24px; }
//         .logo-initials-size { font-size: 28px; }
//         .stats-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 16px; }

//         @media (max-width: 900px) {
//           .body-grid { grid-template-columns: 1fr; }
//           .left-panel { border-right: none; border-bottom: 1px solid #e8edf5; padding: 20px 20px; overflow-y: visible; }
//           .right-panel { padding: 20px 20px; overflow-y: visible; }
//           .header-inner { padding: 0 16px; height: auto; min-height: 56px; flex-wrap: wrap; gap: 10px; padding-top: 10px; padding-bottom: 10px; }
//           .brand-label { display: none; }
//           .company-name-display { font-size: 18px; }
//           .logo-card { gap: 16px; }
//           .logo-size { width: 72px; height: 72px; border-radius: 18px; }
//           .logo-initials-size { font-size: 20px; }
//         }

//         @media (max-width: 600px) {
//           .contact-grid { grid-template-columns: 1fr; }
//           .header-inner { flex-direction: column; align-items: flex-start; gap: 8px; padding: 12px 14px; }
//           .left-panel, .right-panel { padding: 14px 14px; gap: 14px; }
//           .logo-card { flex-direction: column; align-items: flex-start; gap: 14px; }
//           .stats-grid { grid-template-columns: 1fr 1fr; }
//           .currency-tiles { flex-wrap: wrap; }
//         }
//       `}</style>

//       <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

//         {/* ── HEADER ── */}
//         <header style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid #e8edf5", boxShadow: "0 1px 12px rgba(0,0,0,0.04)", flexShrink: 0 }}>
//           <div className="header-inner">

//             {/* Brand */}
//             <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//               <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #6366f1, #818cf8)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px #6366f135", flexShrink: 0 }}>
//                 <svg width="15" height="15" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M9 9h6M9 12h6M9 15h4" strokeLinecap="round"/></svg>
//               </div>
//               <span className="brand-label" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 17, color: "#1e293b", letterSpacing: "-0.02em" }}>Company Profile</span>
//             </div>

//             {/* Company switcher */}
//             <div style={{ display: "flex", gap: 6, background: "#f1f5f9", borderRadius: 12, padding: 4, flexShrink: 0 }}>
//               {COMPANIES.map(c => (
//                 <button key={c.id} className="co-tab" onClick={() => switchCompany(c.id)}
//                   style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 14px", borderRadius: 9, border: "none", background: selectedId === c.id ? "white" : "transparent", boxShadow: selectedId === c.id ? "0 2px 8px rgba(0,0,0,0.08)" : "none", cursor: "pointer", transition: "all 0.2s ease", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
//                   <div style={{ width: 22, height: 22, borderRadius: 6, overflow: "hidden", border: selectedId === c.id ? `1.5px solid ${c.hue}50` : "1.5px solid #e2e8f0", flexShrink: 0 }}>
//                     <img src={c.logo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                   </div>
//                   <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: "0.04em", color: selectedId === c.id ? "#1e293b" : "#94a3b8" }}>{c.shortName}</span>
//                 </button>
//               ))}
//             </div>

//             {/* Save */}
//             <button className="save-btn" onClick={handleSave}
//               style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 20px", borderRadius: 11, border: "none", background: saved ? "linear-gradient(135deg, #10b981, #34d399)" : "linear-gradient(135deg, #6366f1, #818cf8)", color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 13, cursor: "pointer", boxShadow: saved ? "0 4px 16px #10b98135" : "0 4px 16px #6366f135", transition: "all 0.3s ease", flexShrink: 0 }}>
//               {saved
//                 ? <><svg width="14" height="14" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg> Saved!</>
//                 : <><svg width="14" height="14" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/><polyline points="17,21 17,13 7,13 7,21" strokeLinecap="round" strokeLinejoin="round"/></svg> Save</>
//               }
//             </button>
//           </div>
//         </header>

//         {/* ── BODY ── */}
//         <div key={animKey} className="body-grid fade-in">

//           {/* ══ LEFT ══ */}
//           <div className="left-panel">

//             {/* Company Details */}
//             <div style={{ background: "white", borderRadius: 18, padding: "20px 22px", border: "1px solid #f0f4ff", boxShadow: "0 2px 16px rgba(99,102,241,0.06)" }}>
//               <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
//                 <div style={{ width: 10, height: 10, borderRadius: 3, background: `linear-gradient(135deg, ${company.hue}, ${company.hue}99)`, boxShadow: `0 2px 6px ${company.hue}50` }} />
//                 <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#94a3b8" }}>Company Details</span>
//               </div>
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
//                 <div style={{ gridColumn: "1 / -1" }}><LabelInput label="Company Name" name="name" value={form.name} onChange={handleChange} /></div>
//                 <LabelInput label="Short Name" name="shortName" value={form.shortName} onChange={handleChange} />
//                 <LabelInput label="Branch ID" name="branchId" value={form.branchId} onChange={handleChange} />
//               </div>
//             </div>

//             {/* Contact */}
//             <div style={{ background: "white", borderRadius: 18, padding: "20px 22px", border: "1px solid #f0f4ff", boxShadow: "0 2px 16px rgba(99,102,241,0.06)" }}>
//               <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
//                 <div style={{ width: 10, height: 10, borderRadius: 3, background: "linear-gradient(135deg, #06b6d4, #0ea5e9)", boxShadow: "0 2px 6px #06b6d450" }} />
//                 <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#94a3b8" }}>Contact</span>
//               </div>
//               <div className="contact-grid">
//                 <div style={{ gridColumn: "1 / -1" }}><LabelInput label="Mobile" name="phone" type="tel" value={form.phone} onChange={handleChange} /></div>
//                 <LabelInput label="Landline" name="telephone" type="tel" value={form.telephone} onChange={handleChange} />
//                 <LabelInput label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
//               </div>
//             </div>

//             {/* Tax & Compliance */}
           
//             <div style={{ background: "white", borderRadius: 18, padding: "20px 22px", border: "1px solid #f0f4ff", boxShadow: "0 2px 16px rgba(99,102,241,0.06)" }}>

//   <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
//     <div style={{ width: 10, height: 10, borderRadius: 3, background: "linear-gradient(135deg, #f59e0b, #fbbf24)", boxShadow: "0 2px 6px #f59e0b50" }} />
//     <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#94a3b8" }}>
//       Tax & Compliance
//     </span>
//   </div>

//   <div className="contact-grid">

//     <LabelInput label="TRN Number" name="trn" value={form.trn} onChange={handleChange} />
//     <LabelInput label="GSTIN / Tax ID" name="taxId" value={form.taxId} onChange={handleChange} />

//     {/* TAX RATE SECTION */}
//     <div style={{ gridColumn: "1 / -1", marginTop: 10 }}>

//       <div style={{ fontSize: 11, fontWeight: 600, color: "#64748b", marginBottom: 6 }}>
//         Tax Rates
//       </div>

//       {/* ADD TAX INPUT */}
//       <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
//         <input
//           type="number"
//           placeholder="Add Tax % (eg: 18)"
//           value={taxInput}
//           onChange={(e) => setTaxInput(e.target.value)}
//           style={{
//             flex: 1,
//             padding: "8px 10px",
//             borderRadius: 8,
//             border: "1px solid #e2e8f0",
//             fontSize: 12
//           }}
//         />

//         <button
//           onClick={addTax}
//           style={{
//             background: "#6366f1",
//             color: "white",
//             border: "none",
//             borderRadius: 8,
//             padding: "8px 14px",
//             fontSize: 12,
//             fontWeight: 600,
//             cursor: "pointer"
//           }}
//         >
//           Add
//         </button>
//       </div>

//       {/* TAX LIST */}
//       <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
//         {taxList.map((tax, index) => (
//           <span
//             key={index}
//             style={{
//               background: "#eef2ff",
//               color: "#4338ca",
//               padding: "4px 10px",
//               borderRadius: 20,
//               fontSize: 11,
//               fontWeight: 600
//             }}
//           >
//             {tax}
//           </span>
//         ))}
//       </div>

//       {/* DEFAULT TAX DROPDOWN */}
//       <select
//         value={defaultTax}
//         onChange={(e) => setDefaultTax(e.target.value)}
//         style={{
//           width: "100%",
//           padding: "8px 10px",
//           borderRadius: 8,
//           border: "1px solid #e2e8f0",
//           fontSize: 12
//         }}
//       >
//         <option value="">Select Default Tax</option>
//         {taxList.map((tax, index) => (
//           <option key={index} value={tax}>
//             {tax}
//           </option>
//         ))}
//       </select>

//     </div>

//     {/* VERIFIED BLOCK */}
//     <div style={{ gridColumn: "1 / -1" }}>
//       <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#f0fdf4", borderRadius: 10, padding: "10px 14px", border: "1px solid #bbf7d0", marginTop: 10 }}>

//         <div style={{ width: 28, height: 28, borderRadius: 8, background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//           <svg width="14" height="14" fill="none" stroke="#16a34a" strokeWidth="2.5" viewBox="0 0 24 24">
//             <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
//           </svg>
//         </div>

//         <div style={{ flex: 1, minWidth: 0 }}>
//           <div style={{ fontSize: 12, fontWeight: 700, color: "#15803d" }}>Verified Entity</div>
//           <div style={{ fontSize: 11, color: "#86efac" }}>Tax registration confirmed · Active</div>
//         </div>

//         <span style={{ fontSize: 10.5, fontWeight: 700, background: "#dcfce7", color: "#16a34a", padding: "3px 10px", borderRadius: 20, letterSpacing: "0.06em", flexShrink: 0 }}>
//           COMPLIANT
//         </span>

//       </div>
//     </div>

//   </div>
// </div>
//           </div>

//           {/* ══ RIGHT ══ */}
//           <div className="right-panel">

//             {/* Logo card */}
//             <div style={{ background: "white", borderRadius: 18, padding: "24px 22px", border: "1px solid #f0f4ff", boxShadow: "0 2px 16px rgba(99,102,241,0.06)" }}>
//               <div className="logo-card">
//                 <div style={{ position: "relative", flexShrink: 0 }}>
//                   <div className="logo-size" style={{ overflow: "hidden", border: `3px solid ${company.hueLight}`, boxShadow: `0 8px 28px ${company.hue}20` }}>
//                     {preview
//                       ? <img src={preview} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                       : <div className="logo-initials-size" style={{ width: "100%", height: "100%", background: `linear-gradient(135deg, ${company.hueLight}, white)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Fraunces', serif", fontWeight: 700, color: company.hue }}>
//                           {getInitials(company.name)}
//                         </div>
//                     }
//                   </div>
//                   <label className="upload-btn" style={{ position: "absolute", bottom: -10, left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: 5, background: "white", border: "1.5px solid #e2e8f0", borderRadius: 20, padding: "4px 12px", cursor: "pointer", whiteSpace: "nowrap", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", transition: "all 0.2s ease" }}>
//                     <input type="file" accept="image/*" onChange={handleLogo} style={{ display: "none" }} />
//                     <svg width="11" height="11" fill="none" stroke="#6366f1" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" strokeLinecap="round" strokeLinejoin="round"/><polyline points="17,8 12,3 7,8" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="3" x2="12" y2="15" strokeLinecap="round"/></svg>
//                     <span style={{ fontSize: 11, fontWeight: 600, color: "#6366f1" }}>Upload</span>
//                   </label>
//                 </div>
//                 <div style={{ flex: 1, minWidth: 0 }}>
//                   <div className="company-name-display" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, color: "#0f172a", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 4, wordBreak: "break-word" }}>
//                     {form.name || company.name}
//                   </div>
//                   <div style={{ fontSize: 12, color: "#94a3b8", fontWeight: 500, marginBottom: 10 }}>{form.branchId || company.branchId}</div>
//                   <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
//                     <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", padding: "3px 10px", borderRadius: 20, background: company.hueLight, color: company.hue }}>{form.shortName || company.shortName}</span>
//                     <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20, background: "#f1f5f9", color: "#64748b" }}>PNG · JPG</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Currency */}
//             <div style={{ background: "white", borderRadius: 18, padding: "20px 22px", border: "1px solid #f0f4ff", boxShadow: "0 2px 16px rgba(99,102,241,0.06)" }}>
//               <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
//                 <div style={{ width: 10, height: 10, borderRadius: 3, background: "linear-gradient(135deg, #8b5cf6, #a78bfa)", boxShadow: "0 2px 6px #8b5cf650" }} />
//                 <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#94a3b8" }}>Default Currency</span>
//               </div>
//               <div className="currency-tiles" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
//                 {CURRENCIES.map(cur => (
//                   <button key={cur.value} className="cur-btn"
//                     onClick={() => handleChange({ target: { name: "currency", value: cur.value } })}
//                     style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 10, background: (form.currency || "INR") === cur.value ? company.hueLight : "#f8fafc", border: `1.5px solid ${(form.currency || "INR") === cur.value ? company.hue + "50" : "#e2e8f0"}`, cursor: "pointer", transition: "all 0.18s ease", boxShadow: (form.currency || "INR") === cur.value ? `0 2px 10px ${company.hue}20` : "none" }}>
//                     <span style={{ fontSize: 16 }}>{cur.flag}</span>
//                     <span style={{ fontSize: 12, fontWeight: 700, color: (form.currency || "INR") === cur.value ? company.hue : "#64748b" }}>{cur.label}</span>
//                   </button>
//                 ))}
//               </div>
//               <div style={{ display: "flex", alignItems: "center", gap: 12, background: company.hueLight + "60", borderRadius: 12, padding: "12px 16px", border: `1px solid ${company.hue}25` }}>
//                 <span style={{ fontSize: 26 }}>{activeCurrency?.flag}</span>
//                 <div>
//                   <div style={{ fontSize: 14, fontWeight: 700, color: "#1e293b" }}>{activeCurrency?.name}</div>
//                   <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 500 }}>Active · {activeCurrency?.label}</div>
//                 </div>
//               </div>
//             </div>

//             {/* Financial Year */}
          
//             <div style={{ background: "white", borderRadius: 18, padding: "20px 22px", border: "1px solid #f0f4ff", boxShadow: "0 2px 16px rgba(99,102,241,0.06)" }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
//                 <div style={{ width: 10, height: 10, borderRadius: 3, background: "linear-gradient(135deg, #f43f5e, #fb7185)", boxShadow: "0 2px 6px #f43f5e50" }} />
//                 <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#94a3b8" }}>Financial Year</span>
//             </div>

//             {/* Date pickers */}
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
//                 {[
//                 { label: "Start Date", key: "fyStart" },
//                 { label: "End Date",   key: "fyEnd"   },
//                 ].map(({ label, key }) => {
//                 const [focused, setFocused] = useState(false);
//                 return (
//                     <div key={key} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
//                     <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: focused ? "#f43f5e" : "#94a3b8", transition: "color 0.18s" }}>
//                         {label}
//                     </label>
//                     <div style={{ position: "relative" }}>
//                         <input
//                         type="date"
//                         name={key}
//                         value={form[key] || ""}
//                         onChange={handleChange}
//                         onFocus={() => setFocused(true)}
//                         onBlur={() => setFocused(false)}
//                         style={{
//                             fontFamily: "'Plus Jakarta Sans', sans-serif",
//                             fontSize: 13, color: "#1e293b", fontWeight: 500,
//                             background: focused ? "#fff" : "#f8fafc",
//                             border: `1.5px solid ${focused ? "#f43f5e" : "#e2e8f0"}`,
//                             borderRadius: 10, padding: "9px 14px",
//                             outline: "none", width: "100%",
//                             boxShadow: focused ? "0 0 0 3px #f43f5e12" : "none",
//                             transition: "all 0.18s", cursor: "pointer",
//                         }}
//                         />
//                     </div>
//                     </div>
//                 );
//                 })}
//             </div>

//             {/* Active range display */}
//             {(form.fyStart || form.fyEnd) && (
//                 <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#fff1f2", borderRadius: 11, padding: "10px 14px", border: "1px solid #fecdd3", marginBottom: 16 }}>
//                 <svg width="14" height="14" fill="none" stroke="#f43f5e" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
//                     <rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round"/>
//                 </svg>
//                 <span style={{ fontSize: 12, fontWeight: 600, color: "#e11d48" }}>
//                     {form.fyStart ? new Date(form.fyStart).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "—"}
//                     <span style={{ color: "#fca5a5", margin: "0 8px" }}>→</span>
//                     {form.fyEnd ? new Date(form.fyEnd).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "—"}
//                 </span>
//                 </div>
//             )}

//             <div className="stats-grid">
//                 {[
//                 { label: "Quarter", val: "Q4", bg: "#fef3c7", color: "#d97706" },
//                 { label: "Compliance", val: "98%", bg: "#dcfce7", color: "#16a34a" },
//                 { label: "Accounts", val: "12", bg: company.hueLight, color: company.hue },
//                 ].map(s => (
//                 <div key={s.label} style={{ background: s.bg, borderRadius: 12, padding: "12px 14px", textAlign: "center" }}>
//                     <div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: s.color }}>{s.val}</div>
//                     <div style={{ fontSize: 10.5, fontWeight: 600, color: s.color + "cc", marginTop: 2, letterSpacing: "0.05em" }}>{s.label}</div>
//                 </div>
//                 ))}
//             </div>

//             <p style={{ fontSize: 11, color: "#cbd5e1", marginTop: 12, lineHeight: 1.5, fontWeight: 500 }}>
//                 Financial year is used across all reports, tax filings, and compliance documents.
//             </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { useState } from "react";

const COMPANIES = [
  {
    id: 1, name: "TechNova Solutions", shortName: "TNS", branchId: "BR-001-MUM",
    phone: "+91 98765 43210", email: "contact@technova.in", telephone: "+91 22 6789 1234",
    trn: "TRN-9876543210", taxId: "GSTIN27AAACT1234B1Z5", currency: "INR",
    logo: "https://picsum.photos/id/1015/400/400", accent: "#2563eb", accentLight: "#dbeafe",
    city: "Mumbai", country: "India", status: "Active",
  },
  {
    id: 2, name: "GlobalTrade Dynamics", shortName: "GTD", branchId: "BR-002-DEL",
    phone: "+91 87654 32109", email: "hello@globaltrade.co", telephone: "+91 11 4567 8901",
    trn: "TRN-1122334455", taxId: "GSTIN09BBBBB1234C1Z9", currency: "USD",
    logo: "https://picsum.photos/id/201/400/400", accent: "#0891b2", accentLight: "#cffafe",
    city: "Delhi", country: "India", status: "Active",
  },
  {
    id: 3, name: "Meridian Exports Ltd", shortName: "MEL", branchId: "BR-003-BLR",
    phone: "+91 76543 21098", email: "ops@meridian.in", telephone: "+91 80 2345 6789",
    trn: "TRN-5566778899", taxId: "GSTIN29CCCCC5678D1Z3", currency: "EUR",
    logo: "https://picsum.photos/id/305/400/400", accent: "#7c3aed", accentLight: "#ede9fe",
    city: "Bangalore", country: "India", status: "Inactive",
  },
];

const CURRENCIES = [
  { value: "INR", flag: "🇮🇳", name: "Indian Rupee", symbol: "₹" },
  { value: "USD", flag: "🇺🇸", name: "US Dollar", symbol: "$" },
  { value: "EUR", flag: "🇪🇺", name: "Euro", symbol: "€" },
  { value: "GBP", flag: "🇬🇧", name: "British Pound", symbol: "£" },
  { value: "AED", flag: "🇦🇪", name: "UAE Dirham", symbol: "د.إ" },
];

const Field = ({ label, name, value, onChange, type = "text", half }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 4, gridColumn: half ? "span 1" : "span 2" }}>
    <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94a3b8" }}>
      {label}
    </label>
    <input
      type={type} name={name} value={value || ""} onChange={onChange}
      style={{
        fontSize: 12.5, color: "#0f172a", background: "#f8fafc",
        border: "1px solid #e2e8f0", borderRadius: 8, padding: "7px 10px",
        outline: "none", width: "100%", boxSizing: "border-box", fontFamily: "inherit",
        transition: "border 0.15s, background 0.15s",
      }}
      onFocus={e => { e.target.style.border = "1px solid #3b82f6"; e.target.style.background = "#fff"; e.target.style.boxShadow = "0 0 0 3px #3b82f610"; }}
      onBlur={e => { e.target.style.border = "1px solid #e2e8f0"; e.target.style.background = "#f8fafc"; e.target.style.boxShadow = "none"; }}
    />
  </div>
);

export default function CompanyProfile() {
  const [selectedId, setSelectedId] = useState(1);
  const [forms, setForms] = useState(() => Object.fromEntries(COMPANIES.map(c => [c.id, { ...c }])));
  const [logoPreview, setLogoPreview] = useState({});
  const [saved, setSaved] = useState(false);
  const [taxInput, setTaxInput] = useState("");
  const [taxList, setTaxList] = useState({ 1: ["5%", "18%"], 2: ["10%"], 3: ["20%"] });
  const [defaultTax, setDefaultTax] = useState({});

  const company = COMPANIES.find(c => c.id === selectedId);
  const form = forms[selectedId] || {};
  const preview = logoPreview[selectedId] || company.logo;
  const taxes = taxList[selectedId] || [];
  const activeCurrency = CURRENCIES.find(c => c.value === (form.currency || "INR"));

  const handleChange = e => setForms(p => ({ ...p, [selectedId]: { ...p[selectedId], [e.target.name]: e.target.value } }));
  const handleLogo = e => { const f = e.target.files[0]; if (f) setLogoPreview(p => ({ ...p, [selectedId]: URL.createObjectURL(f) })); };
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };
  const addTax = () => {
    if (!taxInput) return;
    const v = `${taxInput}%`;
    if (!taxes.includes(v)) setTaxList(p => ({ ...p, [selectedId]: [...(p[selectedId] || []), v] }));
    setTaxInput("");
  };
  const removeTax = (t) => setTaxList(p => ({ ...p, [selectedId]: p[selectedId].filter(x => x !== t) }));

  const S = { // shared inline style tokens
    card: { background: "#fff", borderRadius: 10, border: "1px solid #e8edf4", padding: "12px 14px" },
    sectionTitle: { fontSize: 9.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 },
    dot: (color) => ({ width: 7, height: 7, borderRadius: 2, background: color, flexShrink: 0 }),
  };

  return (
    <div style={{
      fontFamily: "'DM Sans', system-ui, sans-serif",
      height: "100vh", display: "flex", flexDirection: "column",
      background: "#f1f5f9", overflow: "hidden",
    }}>

      {/* ── TOP BAR ── */}
      <div style={{
        height: 52, background: "#fff", borderBottom: "1px solid #e2e8f0",
        display: "flex", alignItems: "center", padding: "0 20px", gap: 12,
        flexShrink: 0, boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
      }}>
        {/* Icon + Title */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: 7, background: company.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6M9 12h6M9 15h4" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.01em" }}>Company Profile</span>
        </div>

        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#94a3b8" }}>
          <span>Core</span>
          <span>›</span>
          <span>Company</span>
          <span>›</span>
          <span style={{ color: "#475569", fontWeight: 600 }}>Profile</span>
        </div>

        <div style={{ flex: 1 }} />

        {/* Branch tabs */}
        <div style={{ display: "flex", gap: 4, background: "#f1f5f9", borderRadius: 8, padding: 3 }}>
          {COMPANIES.map(c => (
            <button key={c.id} onClick={() => setSelectedId(c.id)}
              style={{
                display: "flex", alignItems: "center", gap: 6, padding: "4px 10px",
                borderRadius: 6, border: "none", cursor: "pointer", fontFamily: "inherit",
                background: selectedId === c.id ? "#fff" : "transparent",
                boxShadow: selectedId === c.id ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
                transition: "all 0.15s",
              }}
            >
              <div style={{
                width: 18, height: 18, borderRadius: 4, overflow: "hidden",
                border: selectedId === c.id ? `1.5px solid ${c.accent}` : "1.5px solid #e2e8f0",
                flexShrink: 0,
              }}>
                <img src={c.logo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, color: selectedId === c.id ? "#0f172a" : "#94a3b8", letterSpacing: "0.03em" }}>
                {c.shortName}
              </span>
              {c.status === "Inactive" && (
                <span style={{ fontSize: 9, background: "#fee2e2", color: "#ef4444", padding: "1px 5px", borderRadius: 10, fontWeight: 700 }}>OFF</span>
              )}
            </button>
          ))}
        </div>

        {/* Save */}
        <button onClick={handleSave} style={{
          display: "flex", alignItems: "center", gap: 6, padding: "6px 14px",
          borderRadius: 8, border: "none", cursor: "pointer", fontFamily: "inherit",
          fontWeight: 700, fontSize: 12,
          background: saved ? "#10b981" : company.accent,
          color: "#fff", transition: "background 0.3s",
          boxShadow: `0 2px 8px ${company.accent}40`,
        }}>
          {saved ? (
            <><svg width="13" height="13" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>Saved</>
          ) : (
            <><svg width="13" height="13" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/><polyline points="17,21 17,13 7,13 7,21" strokeLinecap="round" strokeLinejoin="round"/></svg>Save</>
          )}
        </button>
      </div>

      {/* ── BODY (fixed height, no scroll) ── */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "200px 1fr 1fr 1fr", gap: 10, padding: 12, overflow: "hidden" }}>

        {/* ── COL 1: Branch card + stats ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, overflow: "hidden" }}>

          {/* Logo card */}
          <div style={{ ...S.card, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 14px", gap: 10 }}>
            <div style={{ position: "relative" }}>
              <div style={{ width: 72, height: 72, borderRadius: 16, overflow: "hidden", border: `3px solid ${company.accentLight}`, boxShadow: `0 4px 16px ${company.accent}20` }}>
                <img src={preview} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <label style={{
                position: "absolute", bottom: -6, right: -6,
                width: 22, height: 22, borderRadius: 6,
                background: company.accent, border: "2px solid #fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              }}>
                <input type="file" accept="image/*" onChange={handleLogo} style={{ display: "none" }} />
                <svg width="10" height="10" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round"/>
                </svg>
              </label>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.01em", lineHeight: 1.2 }}>{form.name || company.name}</div>
              <div style={{ fontSize: 10, color: "#94a3b8", marginTop: 2 }}>{form.branchId}</div>
              <div style={{ display: "flex", gap: 4, justifyContent: "center", marginTop: 6, flexWrap: "wrap" }}>
                <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: company.accentLight, color: company.accent }}>{form.shortName}</span>
                <span style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 20, background: company.status === "Active" ? "#dcfce7" : "#fee2e2", color: company.status === "Active" ? "#16a34a" : "#ef4444" }}>{company.status}</span>
              </div>
            </div>
          </div>

          {/* Quick stats */}
          {[
            { label: "Quarter", val: "Q4", color: "#f59e0b", bg: "#fef3c7" },
            { label: "Compliance", val: "98%", color: "#10b981", bg: "#d1fae5" },
            { label: "Accounts", val: "12", color: company.accent, bg: company.accentLight },
            { label: "Branches", val: COMPANIES.length, color: "#6366f1", bg: "#ede9fe" },
          ].map(s => (
            <div key={s.label} style={{ ...S.card, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 12px" }}>
              <span style={{ fontSize: 11, color: "#64748b", fontWeight: 500 }}>{s.label}</span>
              <span style={{ fontSize: 13, fontWeight: 800, color: s.color, background: s.bg, padding: "2px 8px", borderRadius: 6 }}>{s.val}</span>
            </div>
          ))}

          {/* Compliance badge */}
          <div style={{ ...S.card, background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "10px 12px", marginTop: "auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 26, height: 26, borderRadius: 7, background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="12" height="12" fill="none" stroke="#16a34a" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#15803d" }}>Verified Entity</div>
                <div style={{ fontSize: 9.5, color: "#4ade80" }}>Tax confirmed · Active</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── COL 2: Company Details + Contact ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, overflow: "hidden" }}>

          {/* Company Details */}
          <div style={{ ...S.card }}>
            <div style={S.sectionTitle}>
              <div style={S.dot(company.accent)} />
              Company Details
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <Field label="Company Name" name="name" value={form.name} onChange={handleChange} />
              <Field label="Short Name" name="shortName" value={form.shortName} onChange={handleChange} half />
              <Field label="Branch ID" name="branchId" value={form.branchId} onChange={handleChange} half />
              <Field label="City" name="city" value={form.city} onChange={handleChange} half />
              <Field label="Country" name="country" value={form.country} onChange={handleChange} half />
            </div>
          </div>

          {/* Contact */}
          <div style={{ ...S.card }}>
            <div style={S.sectionTitle}>
              <div style={S.dot("#0891b2")} />
              Contact Information
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <Field label="Mobile" name="phone" type="tel" value={form.phone} onChange={handleChange} half />
              <Field label="Landline" name="telephone" type="tel" value={form.telephone} onChange={handleChange} half />
              <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} />
            </div>
          </div>

          {/* All branches overview */}
          <div style={{ ...S.card, flex: 1 }}>
            <div style={S.sectionTitle}>
              <div style={S.dot("#6366f1")} />
              All Branches
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {COMPANIES.map(c => (
                <button key={c.id} onClick={() => setSelectedId(c.id)}
                  style={{
                    display: "flex", alignItems: "center", gap: 8, padding: "7px 10px",
                    borderRadius: 8, border: `1px solid ${selectedId === c.id ? c.accent + "40" : "#e8edf4"}`,
                    background: selectedId === c.id ? c.accentLight + "50" : "#f8fafc",
                    cursor: "pointer", textAlign: "left", fontFamily: "inherit",
                    transition: "all 0.15s",
                  }}
                >
                  <div style={{ width: 28, height: 28, borderRadius: 7, overflow: "hidden", border: `1.5px solid ${c.accentLight}`, flexShrink: 0 }}>
                    <img src={c.logo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 11.5, fontWeight: 700, color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.name}</div>
                    <div style={{ fontSize: 10, color: "#94a3b8" }}>{c.city} · {c.branchId}</div>
                  </div>
                  <span style={{ fontSize: 9.5, fontWeight: 700, padding: "2px 6px", borderRadius: 5, background: c.status === "Active" ? "#dcfce7" : "#fee2e2", color: c.status === "Active" ? "#16a34a" : "#ef4444", flexShrink: 0 }}>
                    {c.status}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── COL 3: Tax & Compliance ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, overflow: "hidden" }}>

          {/* Tax */}
          <div style={{ ...S.card }}>
            <div style={S.sectionTitle}>
              <div style={S.dot("#f59e0b")} />
              Tax & Compliance
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
              <Field label="TRN Number" name="trn" value={form.trn} onChange={handleChange} half />
              <Field label="GSTIN / Tax ID" name="taxId" value={form.taxId} onChange={handleChange} half />
            </div>

            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 6 }}>Tax Rates</div>

            {/* Add tax */}
            <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
              <input
                type="number" placeholder="e.g. 18"
                value={taxInput} onChange={e => setTaxInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && addTax()}
                style={{ flex: 1, padding: "6px 10px", borderRadius: 7, border: "1px solid #e2e8f0", fontSize: 12, outline: "none", fontFamily: "inherit", background: "#f8fafc" }}
                onFocus={e => { e.target.style.border = `1px solid ${company.accent}`; e.target.style.background = "#fff"; }}
                onBlur={e => { e.target.style.border = "1px solid #e2e8f0"; e.target.style.background = "#f8fafc"; }}
              />
              <span style={{ fontSize: 11, color: "#94a3b8", display: "flex", alignItems: "center" }}>%</span>
              <button onClick={addTax} style={{ padding: "6px 12px", borderRadius: 7, border: "none", background: company.accent, color: "#fff", fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                Add
              </button>
            </div>

            {/* Tax chips */}
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 8 }}>
              {taxes.map(t => (
                <span key={t} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 20, background: company.accentLight, color: company.accent }}>
                  {t}
                  <button onClick={() => removeTax(t)} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, color: company.accent, fontSize: 12, lineHeight: 1 }}>×</button>
                </span>
              ))}
              {taxes.length === 0 && <span style={{ fontSize: 11, color: "#cbd5e1" }}>No tax rates added</span>}
            </div>

            {/* Default tax */}
            <div>
              <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#94a3b8", display: "block", marginBottom: 4 }}>Default Tax Rate</label>
              <select
                value={defaultTax[selectedId] || ""}
                onChange={e => setDefaultTax(p => ({ ...p, [selectedId]: e.target.value }))}
                style={{ width: "100%", padding: "7px 10px", borderRadius: 7, border: "1px solid #e2e8f0", fontSize: 12, fontFamily: "inherit", background: "#f8fafc", color: "#0f172a", outline: "none" }}
              >
                <option value="">Select default</option>
                {taxes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          {/* Financial Year */}
          <div style={{ ...S.card, flex: 1 }}>
            <div style={S.sectionTitle}>
              <div style={S.dot("#f43f5e")} />
              Financial Year
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
              {[{ label: "Start Date", key: "fyStart" }, { label: "End Date", key: "fyEnd" }].map(({ label, key }) => (
                <div key={key} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#94a3b8" }}>{label}</label>
                  <input type="date" name={key} value={form[key] || ""} onChange={handleChange}
                    style={{ fontSize: 12, color: "#0f172a", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 7, padding: "7px 10px", outline: "none", fontFamily: "inherit", width: "100%", boxSizing: "border-box" }}
                    onFocus={e => { e.target.style.border = "1px solid #f43f5e"; e.target.style.background = "#fff"; }}
                    onBlur={e => { e.target.style.border = "1px solid #e2e8f0"; e.target.style.background = "#f8fafc"; }}
                  />
                </div>
              ))}
            </div>

            {(form.fyStart || form.fyEnd) && (
              <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#fff1f2", borderRadius: 8, padding: "8px 12px", border: "1px solid #fecdd3", marginBottom: 10 }}>
                <svg width="12" height="12" fill="none" stroke="#f43f5e" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                  <rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round"/>
                </svg>
                <span style={{ fontSize: 11, fontWeight: 600, color: "#e11d48" }}>
                  {form.fyStart ? new Date(form.fyStart).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "—"}
                  <span style={{ color: "#fca5a5", margin: "0 6px" }}>→</span>
                  {form.fyEnd ? new Date(form.fyEnd).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "—"}
                </span>
              </div>
            )}

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
              {[
                { label: "Quarter", val: "Q4", color: "#d97706", bg: "#fef3c7" },
                { label: "Compliance", val: "98%", color: "#16a34a", bg: "#dcfce7" },
                { label: "Accounts", val: "12", color: company.accent, bg: company.accentLight },
              ].map(s => (
                <div key={s.label} style={{ background: s.bg, borderRadius: 8, padding: "8px", textAlign: "center" }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: s.color }}>{s.val}</div>
                  <div style={{ fontSize: 9.5, fontWeight: 600, color: s.color + "aa", marginTop: 1 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 10.5, color: "#cbd5e1", marginTop: 10, lineHeight: 1.5 }}>
              Financial year applies to all reports, tax filings, and compliance documents.
            </p>
          </div>
        </div>

        {/* ── COL 4: Currency + Logo preview ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, overflow: "hidden" }}>

          {/* Currency */}
          <div style={{ ...S.card }}>
            <div style={S.sectionTitle}>
              <div style={S.dot("#8b5cf6")} />
              Default Currency
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 10 }}>
              {CURRENCIES.map(cur => {
                const isSelected = (form.currency || "INR") === cur.value;
                return (
                  <button key={cur.value}
                    onClick={() => handleChange({ target: { name: "currency", value: cur.value } })}
                    style={{
                      display: "flex", alignItems: "center", gap: 10, padding: "8px 10px",
                      borderRadius: 8, border: `1px solid ${isSelected ? company.accent + "50" : "#e8edf4"}`,
                      background: isSelected ? company.accentLight + "60" : "#f8fafc",
                      cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s",
                    }}
                  >
                    <span style={{ fontSize: 18 }}>{cur.flag}</span>
                    <div style={{ flex: 1, textAlign: "left" }}>
                      <div style={{ fontSize: 11.5, fontWeight: 700, color: isSelected ? company.accent : "#374151" }}>{cur.label}</div>
                      <div style={{ fontSize: 10, color: "#94a3b8" }}>{cur.name}</div>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 800, color: isSelected ? company.accent : "#cbd5e1" }}>{cur.symbol}</span>
                    {isSelected && (
                      <div style={{ width: 16, height: 16, borderRadius: 4, background: company.accent, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="8" height="8" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active currency highlight */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, background: company.accentLight + "60", borderRadius: 9, padding: "10px 12px", border: `1px solid ${company.accent}25` }}>
              <span style={{ fontSize: 24 }}>{activeCurrency?.flag}</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#0f172a" }}>{activeCurrency?.name}</div>
                <div style={{ fontSize: 10, color: "#94a3b8" }}>Active · {activeCurrency?.symbol} {activeCurrency?.value}</div>
              </div>
            </div>
          </div>

          {/* Branch summary */}
          <div style={{ ...S.card, flex: 1 }}>
            <div style={S.sectionTitle}>
              <div style={S.dot("#10b981")} />
              Branch Summary
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { label: "Total Branches", val: COMPANIES.length, icon: "🏢" },
                { label: "Active", val: COMPANIES.filter(c => c.status === "Active").length, icon: "✅" },
                { label: "Inactive", val: COMPANIES.filter(c => c.status === "Inactive").length, icon: "⏸️" },
                { label: "Countries", val: [...new Set(COMPANIES.map(c => c.country))].length, icon: "🌍" },
              ].map(r => (
                <div key={r.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 10px", borderRadius: 7, background: "#f8fafc", border: "1px solid #f1f5f9" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 13 }}>{r.icon}</span>
                    <span style={{ fontSize: 11, color: "#64748b", fontWeight: 500 }}>{r.label}</span>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 800, color: "#0f172a" }}>{r.val}</span>
                </div>
              ))}
            </div>

            {/* Current branch info */}
            <div style={{ marginTop: 10, padding: "10px 12px", borderRadius: 9, background: company.accentLight + "40", border: `1px solid ${company.accent}25` }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: company.accent, marginBottom: 6 }}>
                Current Branch
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                {[
                  { k: "ID", v: form.branchId },
                  { k: "City", v: form.city || company.city },
                  { k: "Currency", v: form.currency || "INR" },
                  { k: "Status", v: company.status },
                ].map(r => (
                  <div key={r.k}>
                    <div style={{ fontSize: 9.5, color: "#94a3b8", fontWeight: 600 }}>{r.k}</div>
                    <div style={{ fontSize: 11, color: "#0f172a", fontWeight: 700 }}>{r.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}