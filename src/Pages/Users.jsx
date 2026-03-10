// import React, { useState } from 'react';
// import { useUsers } from "../hooks/useUser";

// const palette = [
//   { banner: '#EBF0FA', avatar: '#4A6FA5', text: '#2C4A7C' },
//   { banner: '#EAF5EE', avatar: '#3A8A57', text: '#1E5C35' },
//   { banner: '#FDF4E7', avatar: '#C07A20', text: '#8A5510' },
//   { banner: '#F3EEFA', avatar: '#7A50B8', text: '#52328A' },
//   { banner: '#FDE9E9', avatar: '#B84A4A', text: '#8A2C2C' },
//   { banner: '#E8F6F8', avatar: '#2E8FA0', text: '#1A6070' },
// ];

// function getInitials(name) {
//   return (name || '?').split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
// }

// function UserCard({ user, index }) {
//   const [hovered, setHovered] = useState(false);
//   const { banner, avatar, text } = palette[index % palette.length];

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         background: '#FFFFFF',
//         border: `1px solid ${hovered ? avatar + '60' : '#DDE2EC'}`,
//         borderRadius: '8px',
//         overflow: 'hidden',
//         cursor: 'pointer',
//         transition: 'all 0.18s ease',
//         boxShadow: hovered ? `0 4px 16px ${avatar}22` : '0 1px 4px #00000010',
//         display: 'flex',
//         flexDirection: 'column',
//       }}
//     >
//       {/* Banner */}
//       <div style={{
//         background: banner,
//         height: '56px',
//         display: 'flex',
//         alignItems: 'flex-end',
//         justifyContent: 'center',
//       }}>
//         <div style={{
//           width: '52px',
//           height: '52px',
//           borderRadius: '50%',
//           background: avatar,
//           border: '3px solid #FFFFFF',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           fontFamily: "'Georgia', serif",
//           fontWeight: '700',
//           fontSize: '17px',
//           color: '#FFFFFF',
//           marginBottom: '-26px',
//           zIndex: 2,
//           position: 'relative',
//           flexShrink: 0,
//         }}>
//           {getInitials(user.user_name)}
//         </div>
//       </div>

//       {/* Body */}
//       <div style={{
//         paddingTop: '34px',
//         paddingBottom: '18px',
//         paddingLeft: '16px',
//         paddingRight: '16px',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: '4px',
//       }}>
//         <div style={{
//           fontFamily: "'Georgia', serif",
//           fontSize: '15px',
//           fontWeight: '700',
//           color: hovered ? text : '#1C2A3A',
//           textAlign: 'center',
//           transition: 'color 0.15s',
//           lineHeight: 1.3,
//         }}>
//           {user.user_name}
//         </div>

//         <div style={{
//           fontSize: '11px',
//           color: '#8896A8',
//           fontFamily: 'monospace',
//           letterSpacing: '0.06em',
//         }}>
//           ID-{String(user.user_id).padStart(4, '0')}
//         </div>

//         <div style={{
//           marginTop: '10px',
//           width: '100%',
//           borderTop: '1px solid #EEF0F5',
//           paddingTop: '10px',
//           display: 'flex',
//           justifyContent: 'center',
//         }}>
//           <span style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '5px',
//             fontSize: '11px',
//             color: hovered ? text : '#6B7A8D',
//             fontFamily: 'monospace',
//             letterSpacing: '0.06em',
//             transition: 'color 0.15s',
//           }}>
//             <span style={{
//               width: '6px', height: '6px', borderRadius: '50%',
//               background: hovered ? avatar : '#A0AABB',
//               display: 'inline-block',
//               transition: 'background 0.15s',
//             }} />
//             Active
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Users() {
//   const { data, isLoading, error } = useUsers();
//   const users = data?.data;

//   const styles = `
//     @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&display=swap');
//     * { box-sizing: border-box; margin: 0; padding: 0; }
//     @keyframes spin { to { transform: rotate(360deg); } }
//     @keyframes fadeUp {
//       from { opacity: 0; transform: translateY(10px); }
//       to   { opacity: 1; transform: translateY(0); }
//     }
//     .user-card-wrap { animation: fadeUp 0.3s ease both; }
//     .users-grid {
//       display: grid;
//       grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
//       gap: 16px;
//     }
//     @media (max-width: 520px) {
//       .users-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
//     }
//   `;

//   const page = {
//     minHeight: '100vh',
//     background: '#F4F6FA',
//     padding: '36px 24px 48px',
//     fontFamily: "'Lora', Georgia, serif",
//   };

//   if (isLoading) return (
//     <div style={{ ...page, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <style>{styles}</style>
//       <div style={{ textAlign: 'center' }}>
//         <div style={{
//           width: '32px', height: '32px',
//           border: '2px solid #DDE2EC',
//           borderTop: '2px solid #4A6FA5',
//           borderRadius: '50%',
//           animation: 'spin 0.7s linear infinite',
//           margin: '0 auto 12px',
//         }} />
//         <p style={{ color: '#8896A8', fontSize: '12px', fontFamily: 'monospace', letterSpacing: '0.1em' }}>
//           Loading users…
//         </p>
//       </div>
//     </div>
//   );

//   if (error) return (
//     <div style={{ ...page, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <style>{styles}</style>
//       <div style={{
//         background: '#FFF5F5', border: '1px solid #F5C6C6',
//         borderRadius: '8px', padding: '28px 36px', textAlign: 'center',
//       }}>
//         <p style={{ fontSize: '16px', color: '#B84A4A', fontWeight: 700 }}>Failed to load users</p>
//         <p style={{ color: '#8896A8', fontSize: '13px', marginTop: '6px' }}>Please try again</p>
//       </div>
//     </div>
//   );

//   return (
//     <div style={page}>
//       <style>{styles}</style>
//       <div style={{ maxWidth: '980px', margin: '0 auto' }}>

//         {/* Header */}
//         <div style={{
//           background: '#FFFFFF',
//           border: '1px solid #DDE2EC',
//           borderRadius: '8px',
//           padding: '18px 24px',
//           marginBottom: '24px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           flexWrap: 'wrap',
//           gap: '10px',
//         }}>
//           <div>
//             <h1 style={{
//               fontSize: '20px',
//               fontWeight: '700',
//               color: '#1C2A3A',
//               letterSpacing: '0.01em',
//             }}>
//               User Directory
//             </h1>
//             <p style={{ fontSize: '12px', color: '#8896A8', marginTop: '2px', fontFamily: 'monospace' }}>
//               Manage and view all registered users
//             </p>
//           </div>
//           <div style={{
//             background: '#EBF0FA',
//             border: '1px solid #C8D4EA',
//             borderRadius: '6px',
//             padding: '6px 14px',
//             fontSize: '12px',
//             color: '#4A6FA5',
//             fontFamily: 'monospace',
//             fontWeight: '600',
//             letterSpacing: '0.05em',
//           }}>
//             {users?.length ?? 0} Users
//           </div>
//         </div>

//         {/* Grid */}
//         {!users?.length ? (
//           <div style={{
//             background: '#FFFFFF', border: '1px solid #DDE2EC',
//             borderRadius: '8px', padding: '60px', textAlign: 'center',
//             color: '#8896A8', fontSize: '15px',
//           }}>
//             No users found.
//           </div>
//         ) : (
//           <div className="users-grid">
//             {users.map((user, i) => (
//               <div key={user.user_id} className="user-card-wrap" style={{ animationDelay: `${i * 0.05}s` }}>
//                 <UserCard user={user} index={i} />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Users;

// import React, { useState } from 'react';
// import { useUsers } from "../hooks/useUser";

// const ACCENT_SETS = [
//   { accent: '#2563eb', light: '#dbeafe', soft: '#eff6ff' },
//   { accent: '#0891b2', light: '#cffafe', soft: '#ecfeff' },
//   { accent: '#7c3aed', light: '#ede9fe', soft: '#f5f3ff' },
//   { accent: '#059669', light: '#d1fae5', soft: '#ecfdf5' },
//   { accent: '#d97706', light: '#fef3c7', soft: '#fffbeb' },
//   { accent: '#db2777', light: '#fce7f3', soft: '#fdf2f8' },
// ];

// function getInitials(name) {
//   return (name || '?').split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
// }

// function UserCard({ user, index }) {
//   const [hovered, setHovered] = useState(false);
//   const { accent, light, soft } = ACCENT_SETS[index % ACCENT_SETS.length];

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         background: hovered ? soft : '#fff',
//         border: `1px solid ${hovered ? accent + '40' : '#e8edf4'}`,
//         borderRadius: 12,
//         overflow: 'hidden',
//         cursor: 'pointer',
//         transition: 'all 0.18s ease',
//         boxShadow: hovered
//           ? `0 4px 20px ${accent}18`
//           : '0 1px 4px #00000008',
//         display: 'flex',
//         flexDirection: 'column',
//       }}
//     >
//       {/* Top accent bar */}
//       <div style={{
//         height: 3,
//         background: hovered
//           ? `linear-gradient(90deg, transparent, ${accent}, transparent)`
//           : `linear-gradient(90deg, transparent, #e2e8f0, transparent)`,
//         transition: 'background 0.25s',
//       }} />

//       {/* Avatar zone */}
//       <div style={{
//         background: hovered ? light + '60' : '#f8fafc',
//         padding: '20px 16px 14px',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: 10,
//         borderBottom: `1px solid ${hovered ? accent + '20' : '#f1f5f9'}`,
//         transition: 'background 0.18s',
//       }}>
//         {/* Avatar circle */}
//         <div style={{
//           width: 56, height: 56, borderRadius: '50%',
//           background: hovered
//             ? `linear-gradient(135deg, ${light}, ${accent}30)`
//             : `linear-gradient(135deg, #f1f5f9, #e2e8f0)`,
//           border: `2px solid ${hovered ? accent + '50' : '#e2e8f0'}`,
//           display: 'flex', alignItems: 'center', justifyContent: 'center',
//           transition: 'all 0.18s',
//           boxShadow: hovered ? `0 4px 12px ${accent}25` : 'none',
//           position: 'relative',
//         }}>
//           <span style={{
//             fontFamily: "'DM Sans', sans-serif",
//             fontWeight: 800, fontSize: 17,
//             color: hovered ? accent : '#64748b',
//             letterSpacing: '-0.01em',
//             transition: 'color 0.18s',
//           }}>
//             {getInitials(user.user_name)}
//           </span>

//           {/* Online dot */}
//           <div style={{
//             position: 'absolute', bottom: 1, right: 1,
//             width: 10, height: 10, borderRadius: '50%',
//             background: '#10b981',
//             border: '2px solid #fff',
//           }} />
//         </div>

//         {/* Name + ID */}
//         <div style={{ textAlign: 'center' }}>
//           <div style={{
//             fontFamily: "'DM Sans', sans-serif",
//             fontSize: 13, fontWeight: 700,
//             color: hovered ? '#0f172a' : '#1e293b',
//             letterSpacing: '-0.01em',
//             lineHeight: 1.3,
//             transition: 'color 0.18s',
//           }}>
//             {user.user_name}
//           </div>
//           <div style={{
//             fontSize: 10, fontWeight: 600,
//             color: hovered ? accent : '#94a3b8',
//             marginTop: 3,
//             letterSpacing: '0.06em',
//             fontFamily: 'monospace',
//             transition: 'color 0.18s',
//           }}>
//             ID · {String(user.user_id).padStart(4, '0')}
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div style={{
//         padding: '9px 14px',
//         display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//         background: '#fff',
//         transition: 'background 0.18s',
//       }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
//           <div style={{
//             width: 6, height: 6, borderRadius: '50%',
//             background: '#10b981',
//             boxShadow: '0 0 4px #10b98150',
//           }} />
//           <span style={{
//             fontSize: 10, color: '#64748b', fontWeight: 600,
//             letterSpacing: '0.04em', fontFamily: "'DM Sans', sans-serif",
//           }}>
//             Active
//           </span>
//         </div>

//         {/* Role pill */}
//         <span style={{
//           fontSize: 9.5, fontWeight: 700,
//           padding: '2px 8px', borderRadius: 20,
//           background: hovered ? light : '#f1f5f9',
//           color: hovered ? accent : '#64748b',
//           letterSpacing: '0.04em',
//           transition: 'all 0.18s',
//           fontFamily: "'DM Sans', sans-serif",
//         }}>
//           User
//         </span>
//       </div>
//     </div>
//   );
// }

// function Users() {
//   const { data, isLoading, error } = useUsers();
//   const [search, setSearch] = useState('');
//   const [view, setView] = useState('grid'); // grid | list
//   const users = data?.data || [];
//   const filtered = users.filter(u =>
//     u.user_name?.toLowerCase().includes(search.toLowerCase())
//   );

//   const css = `
//     @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');
//     *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//     .users-root {
//       min-height: 100vh;
//       background: #f1f5f9;
//       padding: 24px 24px 48px;
//       font-family: 'DM Sans', system-ui, sans-serif;
//     }

//     .users-grid {
//       display: grid;
//       grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
//       gap: 10px;
//     }

//     .users-list {
//       display: flex;
//       flex-direction: column;
//       gap: 6px;
//     }

//     .card-enter {
//       animation: cardIn 0.3s cubic-bezier(0.22,1,0.36,1) both;
//     }
//     @keyframes cardIn {
//       from { opacity: 0; transform: translateY(10px); }
//       to   { opacity: 1; transform: translateY(0); }
//     }
//     @keyframes spin { to { transform: rotate(360deg); } }

//     .search-box {
//       background: #fff;
//       border: 1px solid #e2e8f0;
//       border-radius: 8px;
//       padding: 7px 12px 7px 34px;
//       font-family: 'DM Sans', sans-serif;
//       font-size: 12.5px;
//       color: #0f172a;
//       outline: none;
//       width: 220px;
//       transition: border 0.15s, box-shadow 0.15s;
//     }
//     .search-box::placeholder { color: #94a3b8; }
//     .search-box:focus {
//       border-color: #3b82f680;
//       box-shadow: 0 0 0 3px #3b82f610;
//       background: #fff;
//     }

//     .view-btn {
//       padding: 6px 10px;
//       border-radius: 6px;
//       border: 1px solid #e2e8f0;
//       background: #fff;
//       cursor: pointer;
//       transition: all 0.15s;
//       display: flex; align-items: center; justify-content: center;
//     }
//     .view-btn:hover { background: #f8fafc; border-color: #cbd5e1; }
//     .view-btn.active { background: #eff6ff; border-color: #3b82f640; }

//     @media (max-width: 540px) {
//       .users-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
//       .users-root { padding: 14px 12px 32px; }
//     }
//   `;

//   const S = {
//     card: { background: '#fff', borderRadius: 10, border: '1px solid #e8edf4', padding: '12px 14px' },
//   };

//   if (isLoading) return (
//     <div style={{ minHeight: '100vh', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <style>{css}</style>
//       <div style={{ textAlign: 'center' }}>
//         <div style={{
//           width: 30, height: 30,
//           border: '2px solid #e2e8f0',
//           borderTop: '2px solid #2563eb',
//           borderRadius: '50%',
//           animation: 'spin 0.7s linear infinite',
//           margin: '0 auto 12px',
//         }} />
//         <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#94a3b8', letterSpacing: '0.08em' }}>
//           Loading users…
//         </p>
//       </div>
//     </div>
//   );

//   if (error) return (
//     <div style={{ minHeight: '100vh', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <style>{css}</style>
//       <div style={{ background: '#fff', border: '1px solid #fecdd3', borderRadius: 12, padding: '32px 40px', textAlign: 'center', boxShadow: '0 4px 20px #00000010' }}>
//         <div style={{ fontSize: 14, fontWeight: 700, color: '#dc2626', marginBottom: 6 }}>Failed to load users</div>
//         <p style={{ fontSize: 12, color: '#94a3b8' }}>Please try again later</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="users-root">
//       <style>{css}</style>

//       {/* ── HEADER ── */}
//       <div style={{
//         ...S.card,
//         padding: '14px 20px',
//         marginBottom: 16,
//         display: 'flex', alignItems: 'center',
//         justifyContent: 'space-between',
//         flexWrap: 'wrap', gap: 12,
//         boxShadow: '0 1px 4px #00000006',
//       }}>
//         {/* Left */}
//         <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//           <div style={{
//             width: 32, height: 32, borderRadius: 9,
//             background: '#2563eb',
//             display: 'flex', alignItems: 'center', justifyContent: 'center',
//             boxShadow: '0 4px 12px #2563eb30',
//           }}>
//             <svg width="15" height="15" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24">
//               <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
//               <circle cx="9" cy="7" r="4"/>
//               <path d="M23 21v-2a4 4 0 00-3-3.87"/>
//               <path d="M16 3.13a4 4 0 010 7.75"/>
//             </svg>
//           </div>
//           <div>
//             <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', letterSpacing: '-0.01em' }}>
//               User Directory
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 1 }}>
//               {['Administration', 'Users', 'Directory'].map((c, i, arr) => (
//                 <React.Fragment key={c}>
//                   <span style={{ fontSize: 10, color: i === arr.length - 1 ? '#2563eb' : '#94a3b8', fontWeight: i === arr.length - 1 ? 600 : 400 }}>{c}</span>
//                   {i < arr.length - 1 && <span style={{ fontSize: 10, color: '#cbd5e1' }}>›</span>}
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right */}
//         <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>

//           {/* Search */}
//           <div style={{ position: 'relative' }}>
//             <svg width="13" height="13" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24"
//               style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
//               <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35" strokeLinecap="round"/>
//             </svg>
//             <input className="search-box" placeholder="Search users…" value={search} onChange={e => setSearch(e.target.value)} />
//           </div>

//           {/* View toggle */}
//           <button className={`view-btn ${view === 'grid' ? 'active' : ''}`} onClick={() => setView('grid')}>
//             <svg width="13" height="13" fill="none" stroke={view === 'grid' ? '#2563eb' : '#94a3b8'} strokeWidth="2" viewBox="0 0 24 24">
//               <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
//               <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
//             </svg>
//           </button>
//           <button className={`view-btn ${view === 'list' ? 'active' : ''}`} onClick={() => setView('list')}>
//             <svg width="13" height="13" fill="none" stroke={view === 'list' ? '#2563eb' : '#94a3b8'} strokeWidth="2" viewBox="0 0 24 24">
//               <line x1="8" y1="6" x2="21" y2="6" strokeLinecap="round"/>
//               <line x1="8" y1="12" x2="21" y2="12" strokeLinecap="round"/>
//               <line x1="8" y1="18" x2="21" y2="18" strokeLinecap="round"/>
//               <circle cx="3" cy="6" r="1" fill="currentColor"/><circle cx="3" cy="12" r="1" fill="currentColor"/><circle cx="3" cy="18" r="1" fill="currentColor"/>
//             </svg>
//           </button>

//           {/* Divider */}
//           <div style={{ width: 1, height: 24, background: '#e2e8f0' }} />

//           {/* Count badge */}
//           <div style={{
//             background: '#eff6ff', border: '1px solid #bfdbfe',
//             borderRadius: 8, padding: '5px 12px',
//             display: 'flex', alignItems: 'center', gap: 6,
//           }}>
//             <span style={{ fontSize: 15, fontWeight: 800, color: '#2563eb', fontFamily: "'DM Sans', sans-serif" }}>
//               {filtered.length}
//             </span>
//             <span style={{ fontSize: 10, color: '#60a5fa', fontWeight: 600, letterSpacing: '0.04em' }}>
//               {search ? 'found' : 'users'}
//             </span>
//           </div>

//           {/* Stats */}
//           {[
//             { label: 'Active', val: users.length, color: '#10b981', bg: '#d1fae5' },
//             { label: 'Roles', val: 3, color: '#f59e0b', bg: '#fef3c7' },
//           ].map(s => (
//             <div key={s.label} style={{
//               display: 'flex', alignItems: 'center', gap: 5,
//               background: s.bg, border: `1px solid ${s.color}30`,
//               borderRadius: 7, padding: '5px 10px',
//             }}>
//               <div style={{ width: 5, height: 5, borderRadius: '50%', background: s.color }} />
//               <span style={{ fontSize: 10, color: s.color, fontWeight: 700 }}>{s.label}</span>
//               <span style={{ fontSize: 12, fontWeight: 800, color: '#0f172a' }}>{s.val}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── CONTENT ── */}
//       {filtered.length === 0 ? (
//         <div style={{ ...S.card, padding: '60px', textAlign: 'center' }}>
//           <div style={{ fontSize: 13, color: '#94a3b8', fontWeight: 500 }}>No users found</div>
//         </div>
//       ) : view === 'grid' ? (
//         <div className="users-grid">
//           {filtered.map((user, i) => (
//             <div key={user.user_id} className="card-enter" style={{ animationDelay: `${i * 0.04}s` }}>
//               <UserCard user={user} index={i} />
//             </div>
//           ))}
//         </div>
//       ) : (
//         /* ── LIST VIEW ── */
//         <div className="users-list">
//           {filtered.map((user, i) => {
//             const { accent, light, soft } = ACCENT_SETS[i % ACCENT_SETS.length];
//             const [hovered, setHovered] = useState(false);
//             return (
//               <div
//                 key={user.user_id}
//                 className="card-enter"
//                 style={{ animationDelay: `${i * 0.03}s` }}
//                 onMouseEnter={() => setHovered(true)}
//                 onMouseLeave={() => setHovered(false)}
//               >
//                 <div style={{
//                   background: hovered ? soft : '#fff',
//                   border: `1px solid ${hovered ? accent + '40' : '#e8edf4'}`,
//                   borderRadius: 10,
//                   padding: '10px 16px',
//                   display: 'flex', alignItems: 'center', gap: 12,
//                   cursor: 'pointer',
//                   transition: 'all 0.15s',
//                   boxShadow: hovered ? `0 2px 12px ${accent}12` : '0 1px 3px #00000006',
//                 }}>
//                   {/* Left accent */}
//                   <div style={{ width: 3, height: 36, borderRadius: 2, background: hovered ? accent : '#e2e8f0', transition: 'background 0.15s', flexShrink: 0 }} />

//                   {/* Avatar */}
//                   <div style={{
//                     width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
//                     background: hovered ? light : '#f1f5f9',
//                     border: `1.5px solid ${hovered ? accent + '50' : '#e2e8f0'}`,
//                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                     transition: 'all 0.15s',
//                   }}>
//                     <span style={{ fontSize: 13, fontWeight: 800, color: hovered ? accent : '#64748b', transition: 'color 0.15s' }}>
//                       {getInitials(user.user_name)}
//                     </span>
//                   </div>

//                   {/* Info */}
//                   <div style={{ flex: 1, minWidth: 0 }}>
//                     <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
//                       {user.user_name}
//                     </div>
//                     <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 1, fontFamily: 'monospace' }}>
//                       ID · {String(user.user_id).padStart(4, '0')}
//                     </div>
//                   </div>

//                   {/* Role */}
//                   <span style={{
//                     fontSize: 10, fontWeight: 700,
//                     padding: '3px 10px', borderRadius: 20,
//                     background: hovered ? light : '#f8fafc',
//                     color: hovered ? accent : '#64748b',
//                     border: `1px solid ${hovered ? accent + '30' : '#e8edf4'}`,
//                     transition: 'all 0.15s', flexShrink: 0,
//                   }}>
//                     User
//                   </span>

//                   {/* Status */}
//                   <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
//                     <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 4px #10b98150' }} />
//                     <span style={{ fontSize: 10, color: '#64748b', fontWeight: 600 }}>Active</span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Users;


import { useState } from "react";
import { useUsers } from "../hooks/useUser";

/* ── Same 6-accent palette as CompanyProfile ── */
const ACCENTS = [
  { accent: "#2563eb", accentLight: "#dbeafe" },
  { accent: "#0891b2", accentLight: "#cffafe" },
  { accent: "#7c3aed", accentLight: "#ede9fe" },
  { accent: "#059669", accentLight: "#d1fae5" },
  { accent: "#d97706", accentLight: "#fef3c7" },
  { accent: "#db2777", accentLight: "#fce7f3" },
];

const ROLES = ["Admin", "Manager", "Operator", "Viewer", "Auditor", "Support"];

function getInitials(name) {
  return (name || "?").split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
}

/* ── Matches CompanyProfile ActionBtn exactly ── */
const ActionBtn = ({ label, shortcut, onClick, color = "#475569", bg = "#f1f5f9", icon }) => (
  <button
    onClick={onClick}
    title={shortcut ? `${label} (${shortcut})` : label}
    style={{
      display: "flex", alignItems: "center", gap: 6,
      padding: "7px 14px", borderRadius: 7, border: "none",
      background: bg, color, cursor: "pointer", fontFamily: "inherit",
      fontWeight: 600, fontSize: 12, transition: "filter 0.15s, transform 0.1s",
      whiteSpace: "nowrap", flexShrink: 0,
    }}
    onMouseEnter={e => { e.currentTarget.style.filter = "brightness(0.94)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
    onMouseLeave={e => { e.currentTarget.style.filter = "none"; e.currentTarget.style.transform = "none"; }}
    onMouseDown={e => { e.currentTarget.style.transform = "translateY(0)"; }}
  >
    {icon}
    <span>{label}</span>
    {shortcut && (
      <span style={{ fontSize: 9.5, fontWeight: 700, background: "rgba(0,0,0,0.08)", color: "inherit", padding: "1px 5px", borderRadius: 4, letterSpacing: "0.04em" }}>
        {shortcut}
      </span>
    )}
  </button>
);

/* ── User card ── */
function UserCard({ user, index, onClick, selected }) {
  const [hovered, setHovered] = useState(false);
  const { accent, accentLight } = ACCENTS[index % ACCENTS.length];
  const role = ROLES[index % ROLES.length];
  const active = hovered || selected;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: active ? accentLight + "30" : "#fff",
        border: `1px solid ${active ? accent + "50" : "#e8edf4"}`,
        borderRadius: 10, overflow: "hidden", cursor: "pointer",
        transition: "all 0.15s",
        boxShadow: active ? `0 4px 16px ${accent}14` : "0 1px 3px #00000008",
        display: "flex", flexDirection: "column",
      }}
    >
      {/* Top accent stripe */}
      <div style={{
        height: 3,
        background: active
          ? `linear-gradient(90deg, transparent, ${accent}, transparent)`
          : `linear-gradient(90deg, transparent, #e2e8f0, transparent)`,
        transition: "background 0.2s",
      }} />

      {/* Banner */}
      <div style={{
        background: active ? accentLight + "50" : "#f8fafc",
        padding: "18px 14px 14px",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        borderBottom: `1px solid ${active ? accent + "20" : "#f1f5f9"}`,
        transition: "background 0.15s",
      }}>
        <div style={{
          width: 52, height: 52, borderRadius: "50%",
          background: active ? `linear-gradient(135deg, ${accentLight}, ${accent}25)` : "#f1f5f9",
          border: `2px solid ${active ? accent + "60" : "#e2e8f0"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: active ? `0 4px 12px ${accent}22` : "none",
          transition: "all 0.15s", position: "relative",
        }}>
          <span style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontWeight: 800, fontSize: 16,
            color: active ? accent : "#64748b",
            transition: "color 0.15s",
          }}>
            {getInitials(user.user_name)}
          </span>
          <div style={{ position: "absolute", bottom: 1, right: 1, width: 10, height: 10, borderRadius: "50%", background: "#10b981", border: "2px solid #fff" }} />
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, color: active ? "#0f172a" : "#1e293b", lineHeight: 1.3, transition: "color 0.15s", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            {user.user_name}
          </div>
          <div style={{ fontSize: 10, color: active ? accent : "#94a3b8", marginTop: 2, fontFamily: "monospace", letterSpacing: "0.06em", transition: "color 0.15s" }}>
            ID·{String(user.user_id).padStart(4, "0")}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: "8px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 4px #10b98150" }} />
          <span style={{ fontSize: 10, color: "#64748b", fontWeight: 600 }}>Active</span>
        </div>
        <span style={{
          fontSize: 9.5, fontWeight: 700, padding: "2px 7px", borderRadius: 20,
          background: active ? accentLight : "#f1f5f9",
          color: active ? accent : "#64748b",
          transition: "all 0.15s",
        }}>
          {role}
        </span>
      </div>
    </div>
  );
}

/* ── List row ── */
function UserRow({ user, index, onClick, selected }) {
  const [hovered, setHovered] = useState(false);
  const { accent, accentLight } = ACCENTS[index % ACCENTS.length];
  const role = ROLES[index % ROLES.length];
  const active = hovered || selected;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: active ? accentLight + "25" : "#fff",
        border: `1px solid ${active ? accent + "40" : "#e8edf4"}`,
        borderRadius: 8, padding: "9px 14px",
        display: "flex", alignItems: "center", gap: 10,
        cursor: "pointer", transition: "all 0.15s",
        boxShadow: active ? `0 2px 10px ${accent}10` : "0 1px 2px #00000006",
      }}
    >
      <div style={{ width: 3, height: 32, borderRadius: 2, background: active ? accent : "#e2e8f0", flexShrink: 0, transition: "background 0.15s" }} />
      <div style={{
        width: 34, height: 34, borderRadius: "50%", flexShrink: 0,
        background: active ? accentLight : "#f8fafc",
        border: `1.5px solid ${active ? accent + "50" : "#e2e8f0"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.15s",
      }}>
        <span style={{ fontSize: 12, fontWeight: 800, color: active ? accent : "#64748b", transition: "color 0.15s" }}>
          {getInitials(user.user_name)}
        </span>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{user.user_name}</div>
        <div style={{ fontSize: 10, color: "#94a3b8", marginTop: 1, fontFamily: "monospace", letterSpacing: "0.05em" }}>ID·{String(user.user_id).padStart(4, "0")}</div>
      </div>
      <span style={{
        fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 20,
        background: active ? accentLight : "#f8fafc",
        color: active ? accent : "#64748b",
        border: `1px solid ${active ? accent + "30" : "#e8edf4"}`,
        transition: "all 0.15s", flexShrink: 0,
      }}>{role}</span>
      <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 4px #10b98150" }} />
        <span style={{ fontSize: 10, color: "#64748b", fontWeight: 600 }}>Active</span>
      </div>
    </div>
  );
}

/* ── Detail panel — mirrors CompanyProfile card sections ── */
function UserDetail({ user, index, onClose }) {
  const { accent, accentLight } = ACCENTS[index % ACCENTS.length];
  const role = ROLES[index % ROLES.length];

  const S = {
    card: { background: "#fff", borderRadius: 10, border: "1px solid #e8edf4", padding: "12px 14px" },
    sectionTitle: { fontSize: 9.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 },
    dot: (c) => ({ width: 7, height: 7, borderRadius: 2, background: c, flexShrink: 0 }),
  };

  const InfoRow = ({ label, val }) => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 10px", borderRadius: 7, background: "#f8fafc", border: "1px solid #f1f5f9" }}>
      <span style={{ fontSize: 11, color: "#64748b", fontWeight: 500 }}>{label}</span>
      <span style={{ fontSize: 11, fontWeight: 700, color: "#0f172a" }}>{val}</span>
    </div>
  );

  return (
    <div style={{
      width: 252, flexShrink: 0,
      display: "flex", flexDirection: "column", gap: 8,
      borderLeft: "1px solid #e8edf4",
      background: "#f8fafc",
      padding: "12px 12px",
      overflowY: "auto",
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 2 }}>
        <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#94a3b8" }}>User Detail</span>
        <button onClick={onClose} style={{ background: "#fee2e2", border: "none", borderRadius: 6, width: 22, height: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="10" height="10" fill="none" stroke="#dc2626" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/></svg>
        </button>
      </div>

      {/* Profile */}
      <div style={{ ...S.card, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 14px", gap: 8 }}>
        <div style={{
          width: 62, height: 62, borderRadius: "50%",
          background: `linear-gradient(135deg, ${accentLight}, ${accent}30)`,
          border: `2.5px solid ${accentLight}`,
          boxShadow: `0 4px 16px ${accent}20`,
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative",
        }}>
          <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 800, fontSize: 21, color: accent }}>
            {getInitials(user.user_name)}
          </span>
          <div style={{ position: "absolute", bottom: 2, right: 2, width: 12, height: 12, borderRadius: "50%", background: "#10b981", border: "2px solid #fff" }} />
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 13.5, fontWeight: 800, color: "#0f172a" }}>{user.user_name}</div>
          <div style={{ fontSize: 10, color: "#94a3b8", marginTop: 2, fontFamily: "monospace" }}>ID·{String(user.user_id).padStart(4, "0")}</div>
          <div style={{ display: "flex", gap: 4, justifyContent: "center", marginTop: 6 }}>
            <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: accentLight, color: accent }}>{role}</span>
            <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: "#dcfce7", color: "#16a34a" }}>Active</span>
          </div>
        </div>
      </div>

      {/* Account info */}
      <div style={S.card}>
        <div style={S.sectionTitle}><div style={S.dot(accent)} />Account Info</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <InfoRow label="User ID" val={`#${String(user.user_id).padStart(4, "0")}`} />
          <InfoRow label="Role" val={role} />
          <InfoRow label="Status" val="Active" />
          <InfoRow label="Sessions" val="14" />
        </div>
      </div>

      {/* Permissions */}
      <div style={S.card}>
        <div style={S.sectionTitle}><div style={S.dot("#f59e0b")} />Permissions</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {["Read", "Write", "Export", "Print"].map((p, i) => (
            <span key={p} style={{
              fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 20,
              background: i < 2 ? accentLight : "#f8fafc",
              color: i < 2 ? accent : "#64748b",
              border: `1px solid ${i < 2 ? accent + "30" : "#e8edf4"}`,
            }}>{p}</span>
          ))}
        </div>
      </div>

      {/* Activity */}
      <div style={{ ...S.card }}>
        <div style={S.sectionTitle}><div style={S.dot("#10b981")} />Activity</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {[
            { label: "Logins", val: "128", color: accent, bg: accentLight },
            { label: "Actions", val: "342", color: "#f59e0b", bg: "#fef3c7" },
            { label: "Reports", val: "17", color: "#10b981", bg: "#d1fae5" },
            { label: "Exports", val: "9", color: "#7c3aed", bg: "#ede9fe" },
          ].map(s => (
            <div key={s.label} style={{ background: s.bg, borderRadius: 8, padding: "8px", textAlign: "center" }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: s.color }}>{s.val}</div>
              <div style={{ fontSize: 9.5, fontWeight: 600, color: s.color + "aa", marginTop: 1 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 10.5, color: "#cbd5e1", marginTop: 10, lineHeight: 1.5 }}>Activity stats reflect last 30 days across all modules.</p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
export default function Users() {
  const { data, isLoading, error } = useUsers();
  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid");
  const [selectedIdx, setSelectedIdx] = useState(null);

  const users = data?.data || [];
  const filtered = users.filter(u =>
    u.user_name?.toLowerCase().includes(search.toLowerCase())
  );
  const selectedUser = selectedIdx !== null ? filtered[selectedIdx] : null;

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    .users-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
      gap: 10px;
      align-content: start;
    }
    .card-enter { animation: cardIn 0.28s cubic-bezier(0.22,1,0.36,1) both; }
    @keyframes cardIn {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .search-field {
      background: #fff; border: 1px solid #e2e8f0; border-radius: 8px;
      padding: 7px 12px 7px 32px; font-family: 'DM Sans', sans-serif;
      font-size: 12.5px; color: #0f172a; outline: none; width: 210px;
      transition: border 0.15s, box-shadow 0.15s;
    }
    .search-field::placeholder { color: #94a3b8; }
    .search-field:focus { border-color: #2563eb80; box-shadow: 0 0 0 3px #2563eb10; }
    .icon-btn {
      width: 28px; height: 28px; border-radius: 6px;
      border: 1px solid #e2e8f0; background: #fff;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; transition: all 0.15s; flex-shrink: 0;
    }
    .icon-btn:hover { background: #f8fafc; border-color: #cbd5e1; }
    .icon-btn.active { background: #eff6ff; border-color: #bfdbfe; }
  `;

  if (isLoading) return (
    <div style={{ height: "100vh", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <style>{css}</style>
      <div style={{ textAlign: "center" }}>
        <div style={{ width: 28, height: 28, border: "2px solid #e2e8f0", borderTop: "2px solid #2563eb", borderRadius: "50%", animation: "spin 0.7s linear infinite", margin: "0 auto 12px" }} />
        <p style={{ fontSize: 11, color: "#94a3b8" }}>Loading users…</p>
      </div>
    </div>
  );

  if (error) return (
    <div style={{ height: "100vh", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <style>{css}</style>
      <div style={{ background: "#fff", border: "1px solid #fecdd3", borderRadius: 12, padding: "32px 40px", textAlign: "center" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#dc2626", marginBottom: 4 }}>Failed to load users</div>
        <p style={{ fontSize: 11, color: "#94a3b8" }}>Please try again later</p>
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", height: "100vh", display: "flex", flexDirection: "column", background: "#f1f5f9", overflow: "hidden" }}>
      <style>{css}</style>

      {/* ══ TOP BAR — identical to CompanyProfile ══ */}
      <div style={{
        height: 52, background: "#fff", borderBottom: "1px solid #e2e8f0",
        display: "flex", alignItems: "center", padding: "0 20px", gap: 12,
        flexShrink: 0, boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: 7, background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px #2563eb30" }}>
            <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
            </svg>
          </div>
          <div>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.01em" }}>User Directory</span>
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 1 }}>
              {["System", "Users", "Directory"].map((c, i, arr) => (
                <span key={c} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ fontSize: 10, color: i === arr.length - 1 ? "#2563eb" : "#94a3b8", fontWeight: i === arr.length - 1 ? 600 : 400 }}>{c}</span>
                  {i < arr.length - 1 && <span style={{ fontSize: 10, color: "#cbd5e1" }}>›</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ flex: 1 }} />

        {/* Right controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Search */}
          <div style={{ position: "relative" }}>
            <svg width="12" height="12" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24"
              style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35" strokeLinecap="round"/>
            </svg>
            <input className="search-field" placeholder="Search users…" value={search} onChange={e => setSearch(e.target.value)} />
          </div>

          {/* View toggles */}
          <button className={`icon-btn ${view === "grid" ? "active" : ""}`} onClick={() => setView("grid")} title="Grid view">
            <svg width="12" height="12" fill="none" stroke={view === "grid" ? "#2563eb" : "#94a3b8"} strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
          </button>
          <button className={`icon-btn ${view === "list" ? "active" : ""}`} onClick={() => setView("list")} title="List view">
            <svg width="12" height="12" fill="none" stroke={view === "list" ? "#2563eb" : "#94a3b8"} strokeWidth="2" viewBox="0 0 24 24">
              <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" strokeLinecap="round"/>
            </svg>
          </button>

          <div style={{ width: 1, height: 24, background: "#e2e8f0" }} />

          {/* Stat badges — same style as CompanyProfile company switcher */}
          <div style={{ display: "flex", gap: 5, background: "#f1f5f9", borderRadius: 8, padding: 3 }}>
            {[
              { label: "Total", val: users.length, accent: "#2563eb", accentLight: "#dbeafe", border: "#bfdbfe" },
              { label: "Active", val: users.length, accent: "#059669", accentLight: "#dcfce7", border: "#a7f3d0" },
              { label: "Roles", val: 6, accent: "#7c3aed", accentLight: "#ede9fe", border: "#ddd6fe" },
            ].map(s => (
              <div key={s.label} style={{
                display: "flex", alignItems: "center", gap: 5,
                background: s.accentLight + "60",
                border: `1px solid ${s.border}`,
                borderRadius: 6, padding: "4px 10px",
              }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: s.accent }}>{s.val}</span>
                <span style={{ fontSize: 9.5, color: s.accent + "99", fontWeight: 600 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ BODY ══ */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

        {/* Scrollable content */}
        <div
          className="scrollbar-hide"
          style={{ flex: 1, overflowY: "auto", padding: "12px" }}
        >
          {filtered.length === 0 ? (
            <div style={{ background: "#fff", border: "1px solid #e8edf4", borderRadius: 10, padding: "60px", textAlign: "center" }}>
              <div style={{ fontSize: 13, color: "#94a3b8", fontWeight: 500 }}>No users found</div>
            </div>
          ) : view === "grid" ? (
            <div className="users-grid">
              {filtered.map((user, i) => (
                <div key={user.user_id} className="card-enter" style={{ animationDelay: `${i * 0.03}s` }}>
                  <UserCard user={user} index={i} selected={selectedIdx === i} onClick={() => setSelectedIdx(selectedIdx === i ? null : i)} />
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {filtered.map((user, i) => (
                <div key={user.user_id} className="card-enter" style={{ animationDelay: `${i * 0.025}s` }}>
                  <UserRow user={user} index={i} selected={selectedIdx === i} onClick={() => setSelectedIdx(selectedIdx === i ? null : i)} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Detail panel */}
        {selectedUser && (
          <UserDetail user={selectedUser} index={selectedIdx} onClose={() => setSelectedIdx(null)} />
        )}
      </div>

      {/* ══ BOTTOM ACTION BAR — exact match to CompanyProfile ══ */}
      <div style={{
        height: 48, background: "#fff", borderTop: "1px solid #e2e8f0",
        display: "flex", alignItems: "center", padding: "0 16px",
        gap: 8, flexShrink: 0, boxShadow: "0 -1px 6px rgba(0,0,0,0.04)",
        overflow: "hidden",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginRight: 8, minWidth: 0, overflow: "hidden" }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: selectedUser ? "#2563eb" : "#94a3b8", flexShrink: 0 }} />
          <span style={{ fontSize: 11, color: "#94a3b8", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {selectedUser
              ? `${selectedUser.user_name} · ID·${String(selectedUser.user_id).padStart(4, "0")}`
              : `${filtered.length} of ${users.length} users`}
          </span>
        </div>

        <div style={{ flex: 1 }} />

        <ActionBtn label="Add User" shortcut="F4" color="#fff" bg="#2563eb" onClick={() => {}}
          icon={<svg width="13" height="13" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" strokeLinecap="round"/></svg>}
        />
        <ActionBtn label="Export" shortcut="F9" color="#475569" bg="#f1f5f9" onClick={() => {}}
          icon={<svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>}
        />
        <ActionBtn label="Refresh" shortcut="F5" color="#475569" bg="#f1f5f9" onClick={() => {}}
          icon={<svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="1,4 1,10 7,10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>}
        />
        <div style={{ width: 1, height: 24, background: "#e2e8f0", margin: "0 4px", flexShrink: 0 }} />
        <ActionBtn label="Close" shortcut="F12" color="#dc2626" bg="#fee2e2" onClick={() => window.history.back()}
          icon={<svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/></svg>}
        />
      </div>
    </div>
  );
}