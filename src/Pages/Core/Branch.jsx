// import React, { useState, useMemo } from 'react'

// const initialBranches = [
//   { branch_id: 1, company_id: 1, branch_code: 'BR-001', branch_name: 'TechNova Solutions', address1: '123 Business Park', address2: 'Suite 456', city: 'Mumbai', country: 'India', phone: '+91 98765 43210', email: 'mumbai@technova.in', status: 'Active' },
//   { branch_id: 2, company_id: 1, branch_code: 'BR-002', branch_name: 'GlobalTrade Dynamics', address1: 'Connaught Place', address2: 'Floor 3', city: 'Delhi', country: 'India', phone: '+91 98001 12345', email: 'delhi@technova.in', status: 'Active' },
//   { branch_id: 3, company_id: 1, branch_code: 'BR-003', branch_name: 'Meridian Exports Ltd', address1: 'MG Road', address2: '', city: 'Bangalore', country: 'India', phone: '+91 80001 98765', email: 'blr@technova.in', status: 'Inactive' },
// ]

// const emptyForm = {
//   branch_code: '', branch_name: '', address1: '', address2: '',
//   city: '', country: '', phone: '', email: '', status: 'Active'
// }

// const css = `
// @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

// .ng*, .ng *::before, .ng *::after { box-sizing: border-box; margin: 0; padding: 0; }

// .ng {
//   font-family: 'Plus Jakarta Sans', sans-serif;
//   background: #f0f2f5;
//   min-height: 100vh;
//   color: #111827;
//   padding: 0;
// }

// /* ── Top bar ── */
// .ng-topbar {
//   background: #fff;
//   border-bottom: 1px solid #e5e7eb;
//   padding: 0 24px;
//   height: 52px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   position: sticky;
//   top: 0;
//   z-index: 10;
// }
// .ng-topbar-left {
//   display: flex;
//   align-items: center;
//   gap: 10px;
// }
// .ng-page-icon {
//   width: 30px; height: 30px;
//   background: #3b82f6;
//   border-radius: 7px;
//   display: flex; align-items: center; justify-content: center;
//   color: #fff;
//   flex-shrink: 0;
// }
// .ng-page-title {
//   font-size: 15px;
//   font-weight: 600;
//   color: #111827;
// }
// .ng-breadcrumb {
//   font-size: 12.5px;
//   color: #9ca3af;
//   display: flex;
//   align-items: center;
//   gap: 4px;
// }
// .ng-breadcrumb-sep { color: #d1d5db; }
// .ng-topbar-right { display: flex; align-items: center; gap: 8px; }

// /* ── Page body ── */
// .ng-body { padding: 20px 24px; }

// /* ── Section header (like "ALL BRANCHES" style) ── */
// .ng-section-header {
//   display: flex;
//   align-items: center;
//   gap: 7px;
//   margin-bottom: 14px;
// }
// .ng-section-dot {
//   width: 7px; height: 7px;
//   border-radius: 50%;
// }
// .ng-section-label {
//   font-size: 11px;
//   font-weight: 700;
//   letter-spacing: 0.08em;
//   text-transform: uppercase;
//   color: #6b7280;
// }

// /* ── Stats row ── */
// .ng-stats {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 12px;
//   margin-bottom: 20px;
// }
// .ng-stat {
//   background: #fff;
//   border: 1px solid #e5e7eb;
//   border-radius: 12px;
//   padding: 14px 16px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   transition: box-shadow 0.15s;
// }
// .ng-stat:hover { box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
// .ng-stat-info {}
// .ng-stat-label { font-size: 12px; color: #6b7280; margin-bottom: 4px; font-weight: 500; }
// .ng-stat-value { font-size: 26px; font-weight: 700; color: #111827; line-height: 1; }
// .ng-stat-badge {
//   width: 36px; height: 36px;
//   border-radius: 9px;
//   display: flex; align-items: center; justify-content: center;
//   font-size: 16px;
//   font-weight: 700;
// }
// .ng-stat.s-total .ng-stat-badge   { background: #eff6ff; color: #3b82f6; }
// .ng-stat.s-active .ng-stat-badge  { background: #f0fdf4; color: #22c55e; }
// .ng-stat.s-inactive .ng-stat-badge{ background: #f9fafb; color: #9ca3af; }
// .ng-stat.s-countries .ng-stat-badge{ background: #fff7ed; color: #f97316; }
// .ng-stat.s-active .ng-stat-value  { color: #16a34a; }
// .ng-stat.s-inactive .ng-stat-value{ color: #9ca3af; }
// .ng-stat.s-countries .ng-stat-value{ color: #ea580c; }

// /* ── Card ── */
// .ng-card {
//   background: #fff;
//   border: 1px solid #e5e7eb;
//   border-radius: 12px;
//   overflow: hidden;
// }

// /* ── Card toolbar ── */
// .ng-card-toolbar {
//   padding: 12px 16px;
//   border-bottom: 1px solid #f3f4f6;
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   background: #fff;
// }
// .ng-search-wrap { position: relative; flex: 1; max-width: 280px; }
// .ng-search-icon {
//   position: absolute; left: 10px; top: 50%; transform: translateY(-50%);
//   color: #9ca3af; display: flex; pointer-events: none;
// }
// .ng-search {
//   width: 100%;
//   padding: 7px 12px 7px 32px;
//   background: #f9fafb;
//   border: 1px solid #e5e7eb;
//   border-radius: 8px;
//   font-size: 13px;
//   font-family: 'Plus Jakarta Sans', sans-serif;
//   color: #111827;
//   outline: none;
//   transition: border-color 0.15s, box-shadow 0.15s;
// }
// .ng-search:focus { border-color: #93c5fd; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); background: #fff; }
// .ng-search::placeholder { color: #d1d5db; }
// .ng-filter {
//   padding: 7px 28px 7px 11px;
//   background: #f9fafb;
//   border: 1px solid #e5e7eb;
//   border-radius: 8px;
//   font-size: 13px;
//   font-family: 'Plus Jakarta Sans', sans-serif;
//   color: #374151;
//   outline: none;
//   cursor: pointer;
//   appearance: none;
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath d='M2 3.5l3 3 3-3' stroke='%239ca3af' stroke-width='1.3' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
//   background-repeat: no-repeat;
//   background-position: right 9px center;
//   transition: border-color 0.15s;
// }
// .ng-filter:focus { border-color: #93c5fd; }
// .ng-spacer { flex: 1; }
// .ng-count-label { font-size: 12px; color: #9ca3af; font-weight: 500; white-space: nowrap; }

// /* ── Table ── */
// .ng-table { width: 100%; border-collapse: collapse; }
// .ng-table thead { }
// .ng-table th {
//   padding: 10px 16px;
//   font-size: 11px;
//   font-weight: 700;
//   color: #9ca3af;
//   text-align: left;
//   text-transform: uppercase;
//   letter-spacing: 0.07em;
//   background: #f9fafb;
//   border-bottom: 1px solid #f3f4f6;
//   white-space: nowrap;
// }
// .ng-table td {
//   padding: 13px 16px;
//   font-size: 13.5px;
//   border-bottom: 1px solid #f3f4f6;
//   vertical-align: middle;
// }
// .ng-table tr:last-child td { border-bottom: none; }
// .ng-table tbody tr { transition: background 0.1s; }
// .ng-table tbody tr:hover { background: #f9fafb; }

// .ng-branch-row-icon {
//   width: 34px; height: 34px;
//   border-radius: 8px;
//   overflow: hidden;
//   background: #eff6ff;
//   flex-shrink: 0;
//   display: flex; align-items: center; justify-content: center;
//   font-size: 13px;
//   font-weight: 700;
//   color: #3b82f6;
// }
// .ng-branch-cell { display: flex; align-items: center; gap: 10px; }
// .ng-branch-name { font-weight: 600; color: #111827; font-size: 13.5px; }
// .ng-branch-sub  { font-size: 12px; color: #9ca3af; margin-top: 1px; }

// .ng-mono {
//   font-family: 'JetBrains Mono', monospace;
//   font-size: 11.5px;
//   color: #3b82f6;
//   background: #eff6ff;
//   padding: 3px 7px;
//   border-radius: 5px;
//   border: 1px solid #dbeafe;
//   font-weight: 500;
//   letter-spacing: 0.01em;
// }

// .ng-location-city    { font-size: 13px; color: #374151; font-weight: 500; }
// .ng-location-country { font-size: 12px; color: #9ca3af; margin-top: 1px; }
// .ng-contact-phone    { font-size: 13px; color: #374151; font-weight: 500; }
// .ng-contact-email    { font-size: 12px; color: #9ca3af; margin-top: 1px; }

// /* Badges matching the ERP design */
// .ng-badge {
//   display: inline-flex; align-items: center; gap: 5px;
//   font-size: 11.5px; font-weight: 600;
//   padding: 3px 10px; border-radius: 20px;
//   white-space: nowrap;
// }
// .ng-badge::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: currentColor; opacity: 0.8; }
// .ng-badge-active   { background: #f0fdf4; color: #16a34a; border: 1px solid #bbf7d0; }
// .ng-badge-inactive { background: #f9fafb; color: #9ca3af; border: 1px solid #e5e7eb; }

// .ng-actions { display: flex; gap: 6px; align-items: center; }

// /* Buttons */
// .ng-btn {
//   font-family: 'Plus Jakarta Sans', sans-serif;
//   font-size: 13px;
//   font-weight: 600;
//   cursor: pointer;
//   border-radius: 8px;
//   border: 1px solid transparent;
//   display: inline-flex; align-items: center; gap: 6px;
//   transition: all 0.14s;
//   padding: 8px 16px;
//   white-space: nowrap;
// }
// .ng-btn-primary {
//   background: #3b82f6; color: #fff;
//   border-color: #3b82f6;
//   box-shadow: 0 1px 4px rgba(59,130,246,0.25);
// }
// .ng-btn-primary:hover { background: #2563eb; border-color: #2563eb; box-shadow: 0 3px 10px rgba(59,130,246,0.3); transform: translateY(-1px); }
// .ng-btn-primary:active { transform: translateY(0); }
// .ng-btn-ghost {
//   background: #fff; color: #374151;
//   border-color: #e5e7eb;
// }
// .ng-btn-ghost:hover { background: #f9fafb; border-color: #d1d5db; }
// .ng-btn-danger {
//   background: #fff; color: #ef4444;
//   border-color: #fecaca;
// }
// .ng-btn-danger:hover { background: #fef2f2; border-color: #fca5a5; }
// .ng-btn-sm { padding: 5px 11px; font-size: 12px; border-radius: 7px; }
// .ng-btn-icon { padding: 5px 8px; border-radius: 7px; background: #f9fafb; border: 1px solid #e5e7eb; color: #6b7280; cursor: pointer; display: inline-flex; align-items: center; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 12px; font-weight: 600; gap: 5px; transition: all 0.12s; }
// .ng-btn-icon:hover { background: #f3f4f6; color: #374151; border-color: #d1d5db; }
// .ng-btn-del { padding: 5px 8px; border-radius: 7px; background: #fff; border: 1px solid #fecaca; color: #ef4444; cursor: pointer; display: inline-flex; align-items: center; transition: all 0.12s; }
// .ng-btn-del:hover { background: #fef2f2; }

// /* Empty state */
// .ng-empty { padding: 3.5rem 2rem; text-align: center; }
// .ng-empty-icon { width: 48px; height: 48px; background: #f3f4f6; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; }
// .ng-empty-text { font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 4px; }
// .ng-empty-sub  { font-size: 13px; color: #9ca3af; }

// /* ── Modal overlay ── */
// .ng-overlay {
//   position: fixed; inset: 0;
//   background: rgba(17,24,39,0.4);
//   display: flex; align-items: center; justify-content: center;
//   z-index: 1000; padding: 1rem;
//   backdrop-filter: blur(4px);
//   animation: ng-fade 0.16s ease;
// }
// @keyframes ng-fade { from { opacity: 0 } to { opacity: 1 } }
// @keyframes ng-up   { from { opacity: 0; transform: translateY(16px) scale(0.98) } to { opacity: 1; transform: translateY(0) scale(1) } }

// .ng-modal {
//   background: #fff;
//   border: 1px solid #e5e7eb;
//   border-radius: 14px;
//   width: 100%; max-width: 520px;
//   box-shadow: 0 20px 60px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.06);
//   animation: ng-up 0.2s cubic-bezier(0.16,1,0.3,1);
// }
// .ng-modal-header {
//   padding: 16px 20px;
//   border-bottom: 1px solid #f3f4f6;
//   display: flex; align-items: center; gap: 10px;
// }
// .ng-modal-icon {
//   width: 32px; height: 32px;
//   background: #eff6ff;
//   border-radius: 8px;
//   display: flex; align-items: center; justify-content: center;
//   color: #3b82f6;
// }
// .ng-modal-title { font-size: 15px; font-weight: 700; color: #111827; flex: 1; }
// .ng-modal-sub   { font-size: 12px; color: #9ca3af; margin-top: 1px; }
// .ng-modal-close {
//   background: #f9fafb; border: 1px solid #e5e7eb;
//   color: #9ca3af; font-size: 15px; cursor: pointer;
//   width: 28px; height: 28px; border-radius: 7px;
//   display: flex; align-items: center; justify-content: center;
//   transition: all 0.1s; line-height: 1;
// }
// .ng-modal-close:hover { background: #f3f4f6; color: #374151; }

// .ng-modal-body { padding: 18px 20px; display: flex; flex-direction: column; gap: 14px; }
// .ng-modal-footer {
//   padding: 14px 20px; border-top: 1px solid #f3f4f6;
//   display: flex; justify-content: flex-end; gap: 8px;
// }

// /* Form fields */
// .ng-row   { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
// .ng-field { display: flex; flex-direction: column; gap: 5px; }
// .ng-field.ng-full { grid-column: 1 / -1; }
// .ng-label { font-size: 12px; font-weight: 600; color: #374151; }
// .ng-req   { color: #ef4444; margin-left: 2px; }
// .ng-opt   { color: #9ca3af; font-weight: 400; }
// .ng-input {
//   padding: 8px 11px;
//   background: #f9fafb;
//   border: 1px solid #e5e7eb;
//   border-radius: 8px;
//   color: #111827;
//   font-size: 13.5px;
//   font-family: 'Plus Jakarta Sans', sans-serif;
//   outline: none;
//   transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;
//   width: 100%;
// }
// .ng-input:focus { border-color: #93c5fd; background: #fff; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
// .ng-input::placeholder { color: #d1d5db; }
// .ng-input.ng-err { border-color: #fca5a5; background: #fff5f5; box-shadow: 0 0 0 3px rgba(239,68,68,0.08); }
// .ng-err-msg { font-size: 11.5px; color: #ef4444; }

// .ng-divider {
//   display: flex; align-items: center; gap: 8px;
//   font-size: 11px; font-weight: 700; color: #d1d5db;
//   text-transform: uppercase; letter-spacing: 0.07em;
// }
// .ng-divider::before, .ng-divider::after { content: ''; flex: 1; height: 1px; background: #f3f4f6; }

// /* Confirm modal */
// .ng-confirm {
//   background: #fff; border: 1px solid #e5e7eb;
//   border-radius: 14px; width: 100%; max-width: 360px;
//   box-shadow: 0 20px 60px rgba(0,0,0,0.15);
//   animation: ng-up 0.2s cubic-bezier(0.16,1,0.3,1);
//   overflow: hidden;
// }
// .ng-confirm-head {
//   padding: 24px 24px 18px;
//   text-align: center;
//   border-bottom: 1px solid #f3f4f6;
// }
// .ng-confirm-icon {
//   width: 48px; height: 48px;
//   background: #fef2f2;
//   border: 1px solid #fecaca;
//   border-radius: 12px;
//   display: flex; align-items: center; justify-content: center;
//   margin: 0 auto 14px; color: #ef4444;
// }
// .ng-confirm-title { font-size: 16px; font-weight: 700; color: #111827; margin-bottom: 6px; }
// .ng-confirm-msg   { font-size: 13px; color: #6b7280; line-height: 1.6; }
// .ng-confirm-name  { font-weight: 600; color: #111827; }
// .ng-confirm-foot  { padding: 14px 20px; display: flex; justify-content: center; gap: 8px; }
// `

// /* ── Icons ── */
// const SearchIcon = () => (
//   <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
//     <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
//     <path d="M10 10l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//   </svg>
// )
// const PlusIcon = () => (
//   <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
//     <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
//   </svg>
// )
// const EditIcon = () => (
//   <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
//     <path d="M11.5 2.5a1.414 1.414 0 012 2L5 13H2v-3L11.5 2.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// )
// const TrashIcon = () => (
//   <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
//     <path d="M2 4h12M5 4V2.5A.5.5 0 015.5 2h5a.5.5 0 01.5.5V4M6 7v5M10 7v5M3 4l.8 9.6a.5.5 0 00.5.4h7.4a.5.5 0 00.5-.4L13 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// )
// const BranchSvg = () => (
//   <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
//     <path d="M10 2L3 7v11h5v-5h4v5h5V7L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
//   </svg>
// )
// const GridIcon = () => (
//   <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
//     <rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
//     <rect x="9" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
//     <rect x="1" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
//     <rect x="9" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
//   </svg>
// )

// function initials(name) {
//   return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()
// }

// const avatarColors = [
//   { bg: '#eff6ff', color: '#3b82f6' },
//   { bg: '#f0fdf4', color: '#16a34a' },
//   { bg: '#fff7ed', color: '#ea580c' },
//   { bg: '#fdf4ff', color: '#a855f7' },
//   { bg: '#fffbeb', color: '#d97706' },
// ]

// /* ── Form Modal ── */
// function BranchFormModal({ branch, onSave, onClose }) {
//   const [form, setForm] = useState(branch ? { ...branch } : { ...emptyForm })
//   const [errors, setErrors] = useState({})

//   const set = (k, v) => {
//     setForm(f => ({ ...f, [k]: v }))
//     if (errors[k]) setErrors(e => ({ ...e, [k]: false }))
//   }

//   const validate = () => {
//     const e = {}
//     if (!form.branch_code.trim()) e.branch_code = true
//     if (!form.branch_name.trim()) e.branch_name = true
//     if (!form.city.trim()) e.city = true
//     if (!form.country.trim()) e.country = true
//     setErrors(e)
//     return !Object.keys(e).length
//   }

//   return (
//     <div className="ng-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
//       <div className="ng-modal">
//         <div className="ng-modal-header">
//           <div className="ng-modal-icon"><BranchSvg /></div>
//           <div>
//             <div className="ng-modal-title">{branch ? 'Edit Branch' : 'Add New Branch'}</div>
//             <div className="ng-modal-sub">{branch ? `Editing ${branch.branch_code}` : 'Fill in the details below'}</div>
//           </div>
//           <button className="ng-modal-close" onClick={onClose}>×</button>
//         </div>

//         <div className="ng-modal-body">
//           <div className="ng-row">
//             <div className="ng-field">
//               <label className="ng-label">Branch Code <span className="ng-req">*</span></label>
//               <input className={`ng-input${errors.branch_code ? ' ng-err' : ''}`} value={form.branch_code} onChange={e => set('branch_code', e.target.value)} placeholder="BR-001" />
//               {errors.branch_code && <span className="ng-err-msg">Required</span>}
//             </div>
//             <div className="ng-field">
//               <label className="ng-label">Branch Name <span className="ng-req">*</span></label>
//               <input className={`ng-input${errors.branch_name ? ' ng-err' : ''}`} value={form.branch_name} onChange={e => set('branch_name', e.target.value)} placeholder="Main Branch" />
//               {errors.branch_name && <span className="ng-err-msg">Required</span>}
//             </div>
//           </div>

//           <div className="ng-divider">Address</div>

//           <div className="ng-field ng-full">
//             <label className="ng-label">Address Line 1</label>
//             <input className="ng-input" value={form.address1} onChange={e => set('address1', e.target.value)} placeholder="123 Business Park" />
//           </div>
//           <div className="ng-field ng-full">
//             <label className="ng-label">Address Line 2 <span className="ng-opt">(optional)</span></label>
//             <input className="ng-input" value={form.address2} onChange={e => set('address2', e.target.value)} placeholder="Suite 456" />
//           </div>
//           <div className="ng-row">
//             <div className="ng-field">
//               <label className="ng-label">City <span className="ng-req">*</span></label>
//               <input className={`ng-input${errors.city ? ' ng-err' : ''}`} value={form.city} onChange={e => set('city', e.target.value)} placeholder="Mumbai" />
//               {errors.city && <span className="ng-err-msg">Required</span>}
//             </div>
//             <div className="ng-field">
//               <label className="ng-label">Country <span className="ng-req">*</span></label>
//               <input className={`ng-input${errors.country ? ' ng-err' : ''}`} value={form.country} onChange={e => set('country', e.target.value)} placeholder="India" />
//               {errors.country && <span className="ng-err-msg">Required</span>}
//             </div>
//           </div>

//           <div className="ng-divider">Contact</div>

//           <div className="ng-row">
//             <div className="ng-field">
//               <label className="ng-label">Phone</label>
//               <input className="ng-input" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+91 98765 43210" />
//             </div>
//             <div className="ng-field">
//               <label className="ng-label">Status</label>
//               <select className="ng-input" style={{ cursor: 'pointer' }} value={form.status} onChange={e => set('status', e.target.value)}>
//                 <option>Active</option>
//                 <option>Inactive</option>
//               </select>
//             </div>
//           </div>
//           <div className="ng-field ng-full">
//             <label className="ng-label">Email Address</label>
//             <input className="ng-input" value={form.email} onChange={e => set('email', e.target.value)} placeholder="branch@company.com" />
//           </div>
//         </div>

//         <div className="ng-modal-footer">
//           <button className="ng-btn ng-btn-ghost" onClick={onClose}>Cancel</button>
//           <button className="ng-btn ng-btn-primary" onClick={() => { if (validate()) onSave(form) }}>
//             {branch ? 'Save Changes' : <><PlusIcon /> Add Branch</>}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// /* ── Delete Confirm ── */
// function DeleteModal({ branch, onConfirm, onClose }) {
//   return (
//     <div className="ng-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
//       <div className="ng-confirm">
//         <div className="ng-confirm-head">
//           <div className="ng-confirm-icon"><TrashIcon /></div>
//           <div className="ng-confirm-title">Delete Branch?</div>
//           <div className="ng-confirm-msg">
//             <span className="ng-confirm-name">{branch.branch_name}</span> ({branch.branch_code}) will be permanently removed and cannot be recovered.
//           </div>
//         </div>
//         <div className="ng-confirm-foot">
//           <button className="ng-btn ng-btn-ghost" onClick={onClose}>Cancel</button>
//           <button className="ng-btn ng-btn-danger" onClick={onConfirm}>
//             <TrashIcon /> Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// /* ── Main Component ── */
// function Branch() {
//   const [branches, setBranches] = useState(initialBranches)
//   const [search, setSearch] = useState('')
//   const [statusFilter, setStatusFilter] = useState('')
//   const [modal, setModal] = useState(null)
//   const [nextId, setNextId] = useState(4)

//   const filtered = useMemo(() => branches.filter(b => {
//     const q = search.toLowerCase()
//     const ok = !q || b.branch_name.toLowerCase().includes(q) || b.branch_code.toLowerCase().includes(q) || b.city.toLowerCase().includes(q)
//     const st = !statusFilter || b.status === statusFilter
//     return ok && st
//   }), [branches, search, statusFilter])

//   const stats = useMemo(() => ({
//     total: branches.length,
//     active: branches.filter(b => b.status === 'Active').length,
//     inactive: branches.filter(b => b.status === 'Inactive').length,
//     countries: new Set(branches.map(b => b.country)).size,
//   }), [branches])

//   const handleSave = form => {
//     if (modal.branch) {
//       setBranches(p => p.map(b => b.branch_id === modal.branch.branch_id ? { ...b, ...form } : b))
//     } else {
//       setBranches(p => [...p, { ...form, branch_id: nextId, company_id: 1 }])
//       setNextId(n => n + 1)
//     }
//     setModal(null)
//   }

//   const handleDelete = () => {
//     setBranches(p => p.filter(b => b.branch_id !== modal.branch.branch_id))
//     setModal(null)
//   }

//   return (
//     <>
//       <style>{css}</style>
//       <div className="ng">

//         {/* Top bar — matches the "Company Profile · Core › Company › Profile" bar */}
//         <div className="ng-topbar">
//           <div className="ng-topbar-left">
//             <div className="ng-page-icon"><BranchSvg /></div>
//             <div>
//               <div className="ng-page-title">Branch Management</div>
//             </div>
//             <div style={{ width: 1, height: 20, background: '#e5e7eb', margin: '0 4px' }} />
//             <div className="ng-breadcrumb">
//               <span>Core</span>
//               <span className="ng-breadcrumb-sep">›</span>
//               <span>Company</span>
//               <span className="ng-breadcrumb-sep">›</span>
//               <span style={{ color: '#374151', fontWeight: 500 }}>Branches</span>
//             </div>
//           </div>
//           <div className="ng-topbar-right">
//             <button className="ng-btn ng-btn-primary" onClick={() => setModal({ type: 'add' })}>
//               <PlusIcon /> Add Branch
//             </button>
//           </div>
//         </div>

//         <div className="ng-body">
//           {/* Section header — matches "ALL BRANCHES" style */}
//           <div className="ng-section-header">
//             <div className="ng-section-dot" style={{ background: '#3b82f6' }} />
//             <span className="ng-section-label">All Branches</span>
//           </div>

//           {/* Stats */}
//           <div className="ng-stats">
//             <div className="ng-stat s-total">
//               <div className="ng-stat-info">
//                 <div className="ng-stat-label">Total Branches</div>
//                 <div className="ng-stat-value">{stats.total}</div>
//               </div>
//               <div className="ng-stat-badge"><GridIcon /></div>
//             </div>
//             <div className="ng-stat s-active">
//               <div className="ng-stat-info">
//                 <div className="ng-stat-label">Active</div>
//                 <div className="ng-stat-value">{stats.active}</div>
//               </div>
//               <div className="ng-stat-badge" style={{ fontSize: 18 }}>✓</div>
//             </div>
//             <div className="ng-stat s-inactive">
//               <div className="ng-stat-info">
//                 <div className="ng-stat-label">Inactive</div>
//                 <div className="ng-stat-value">{stats.inactive}</div>
//               </div>
//               <div className="ng-stat-badge" style={{ fontSize: 18 }}>–</div>
//             </div>
//             <div className="ng-stat s-countries">
//               <div className="ng-stat-info">
//                 <div className="ng-stat-label">Countries</div>
//                 <div className="ng-stat-value">{stats.countries}</div>
//               </div>
//               <div className="ng-stat-badge" style={{ fontSize: 16 }}>🌐</div>
//             </div>
//           </div>

//           {/* Table card */}
//           <div className="ng-card">
//             {/* Toolbar inside card */}
//             <div className="ng-card-toolbar">
//               <div className="ng-search-wrap">
//                 <span className="ng-search-icon"><SearchIcon /></span>
//                 <input
//                   className="ng-search"
//                   placeholder="Search branches…"
//                   value={search}
//                   onChange={e => setSearch(e.target.value)}
//                 />
//               </div>
//               <select className="ng-filter" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
//                 <option value="">All Status</option>
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Inactive</option>
//               </select>
//               <div className="ng-spacer" />
//               <span className="ng-count-label">{filtered.length} of {branches.length} branches</span>
//             </div>

//             <table className="ng-table">
//               <thead>
//                 <tr>
//                   <th>Code</th>
//                   <th>Branch Name</th>
//                   <th>Location</th>
//                   <th>Contact</th>
//                   <th>Status</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filtered.length === 0 ? (
//                   <tr>
//                     <td colSpan={6}>
//                       <div className="ng-empty">
//                         <div className="ng-empty-icon"><BranchSvg /></div>
//                         <div className="ng-empty-text">No branches found</div>
//                         <div className="ng-empty-sub">Try adjusting your search or filter</div>
//                       </div>
//                     </td>
//                   </tr>
//                 ) : filtered.map((b, i) => {
//                   const av = avatarColors[i % avatarColors.length]
//                   return (
//                     <tr key={b.branch_id}>
//                       <td><span className="ng-mono">{b.branch_code}</span></td>
//                       <td>
//                         <div className="ng-branch-cell">
//                           <div className="ng-branch-row-icon" style={{ background: av.bg, color: av.color }}>
//                             {initials(b.branch_name)}
//                           </div>
//                           <div>
//                             <div className="ng-branch-name">{b.branch_name}</div>
//                             {b.address1 && <div className="ng-branch-sub">{b.address1}{b.address2 ? `, ${b.address2}` : ''}</div>}
//                           </div>
//                         </div>
//                       </td>
//                       <td>
//                         <div className="ng-location-city">{b.city}</div>
//                         <div className="ng-location-country">{b.country}</div>
//                       </td>
//                       <td>
//                         <div className="ng-contact-phone">{b.phone || '—'}</div>
//                         <div className="ng-contact-email">{b.email || '—'}</div>
//                       </td>
//                       <td>
//                         <span className={`ng-badge ${b.status === 'Active' ? 'ng-badge-active' : 'ng-badge-inactive'}`}>
//                           {b.status}
//                         </span>
//                       </td>
//                       <td>
//                         <div className="ng-actions">
//                           <button className="ng-btn-icon" onClick={() => setModal({ type: 'edit', branch: b })}>
//                             <EditIcon /> Edit
//                           </button>
//                           <button className="ng-btn-del" onClick={() => setModal({ type: 'delete', branch: b })}>
//                             <TrashIcon />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   )
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Modals */}
//         {(modal?.type === 'add' || modal?.type === 'edit') && (
//           <BranchFormModal
//             branch={modal.type === 'edit' ? modal.branch : null}
//             onSave={handleSave}
//             onClose={() => setModal(null)}
//           />
//         )}
//         {modal?.type === 'delete' && (
//           <DeleteModal
//             branch={modal.branch}
//             onConfirm={handleDelete}
//             onClose={() => setModal(null)}
//           />
//         )}
//       </div>
//     </>
//   )
// }

// export default Branch

import React, { useState, useMemo } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  getAllBranches,
  createBranch,
  updateBranch,
  deleteBranch,
} from '../../Api/BranchApi'

// ─────────────────────────────────────────────
// Query key
// ─────────────────────────────────────────────
const BRANCH_KEY = ['branches']

// ─────────────────────────────────────────────
// Empty form matches POST/PUT body exactly
// NOTE: no branch_code — API auto-generates it
// ─────────────────────────────────────────────
const emptyForm = {
  company_id: 1,        // replace with activeCompanyId from your store
  branch_name: '',
  address1: '',
  address2: '',
  city: '',
  country: '',
  phone: '',
  email: '',
}

// ─────────────────────────────────────────────
// Styles
// ─────────────────────────────────────────────
const css = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

.ng*, .ng *::before, .ng *::after { box-sizing: border-box; margin: 0; padding: 0; }
.ng { font-family: 'Plus Jakarta Sans', sans-serif; background: #f0f2f5; min-height: 100vh; color: #111827; }

.ng-topbar { background: #fff; border-bottom: 1px solid #e5e7eb; padding: 0 24px; height: 52px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 10; }
.ng-topbar-left { display: flex; align-items: center; gap: 10px; }
.ng-page-icon { width: 30px; height: 30px; background: #3b82f6; border-radius: 7px; display: flex; align-items: center; justify-content: center; color: #fff; flex-shrink: 0; }
.ng-page-title { font-size: 15px; font-weight: 600; color: #111827; }
.ng-breadcrumb { font-size: 12.5px; color: #9ca3af; display: flex; align-items: center; gap: 4px; }
.ng-breadcrumb-sep { color: #d1d5db; }
.ng-topbar-right { display: flex; align-items: center; gap: 8px; }
.ng-body { padding: 20px 24px; }

.ng-section-header { display: flex; align-items: center; gap: 7px; margin-bottom: 14px; }
.ng-section-dot { width: 7px; height: 7px; border-radius: 50%; }
.ng-section-label { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #6b7280; }

.ng-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 20px; }
.ng-stat { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px 16px; display: flex; align-items: center; justify-content: space-between; transition: box-shadow 0.15s; }
.ng-stat:hover { box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
.ng-stat-label { font-size: 12px; color: #6b7280; margin-bottom: 4px; font-weight: 500; }
.ng-stat-value { font-size: 26px; font-weight: 700; color: #111827; line-height: 1; }
.ng-stat-badge { width: 36px; height: 36px; border-radius: 9px; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 700; }
.ng-stat.s-total .ng-stat-badge    { background: #eff6ff; color: #3b82f6; }
.ng-stat.s-active .ng-stat-badge   { background: #f0fdf4; color: #22c55e; }
.ng-stat.s-inactive .ng-stat-badge { background: #f9fafb; color: #9ca3af; }
.ng-stat.s-countries .ng-stat-badge{ background: #fff7ed; color: #f97316; }
.ng-stat.s-active .ng-stat-value   { color: #16a34a; }
.ng-stat.s-inactive .ng-stat-value { color: #9ca3af; }
.ng-stat.s-countries .ng-stat-value{ color: #ea580c; }

.ng-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; }
.ng-card-toolbar { padding: 12px 16px; border-bottom: 1px solid #f3f4f6; display: flex; align-items: center; gap: 10px; }
.ng-search-wrap { position: relative; flex: 1; max-width: 280px; }
.ng-search-icon { position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: #9ca3af; display: flex; pointer-events: none; }
.ng-search { width: 100%; padding: 7px 12px 7px 32px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 13px; font-family: 'Plus Jakarta Sans', sans-serif; color: #111827; outline: none; transition: border-color 0.15s, box-shadow 0.15s; }
.ng-search:focus { border-color: #93c5fd; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); background: #fff; }
.ng-search::placeholder { color: #d1d5db; }
.ng-filter { padding: 7px 28px 7px 11px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 13px; font-family: 'Plus Jakarta Sans', sans-serif; color: #374151; outline: none; cursor: pointer; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath d='M2 3.5l3 3 3-3' stroke='%239ca3af' stroke-width='1.3' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 9px center; }
.ng-spacer { flex: 1; }
.ng-count-label { font-size: 12px; color: #9ca3af; font-weight: 500; white-space: nowrap; }

.ng-table { width: 100%; border-collapse: collapse; }
.ng-table th { padding: 10px 16px; font-size: 11px; font-weight: 700; color: #9ca3af; text-align: left; text-transform: uppercase; letter-spacing: 0.07em; background: #f9fafb; border-bottom: 1px solid #f3f4f6; white-space: nowrap; }
.ng-table td { padding: 13px 16px; font-size: 13.5px; border-bottom: 1px solid #f3f4f6; vertical-align: middle; }
.ng-table tr:last-child td { border-bottom: none; }
.ng-table tbody tr { transition: background 0.1s; }
.ng-table tbody tr:hover { background: #f9fafb; }

.ng-branch-row-icon { width: 34px; height: 34px; border-radius: 8px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; }
.ng-branch-cell { display: flex; align-items: center; gap: 10px; }
.ng-branch-name { font-weight: 600; color: #111827; font-size: 13.5px; }
.ng-branch-sub  { font-size: 12px; color: #9ca3af; margin-top: 1px; }
.ng-mono { font-family: 'JetBrains Mono', monospace; font-size: 11.5px; color: #3b82f6; background: #eff6ff; padding: 3px 7px; border-radius: 5px; border: 1px solid #dbeafe; font-weight: 500; }
.ng-location-city    { font-size: 13px; color: #374151; font-weight: 500; }
.ng-location-country { font-size: 12px; color: #9ca3af; margin-top: 1px; }
.ng-contact-phone    { font-size: 13px; color: #374151; font-weight: 500; }
.ng-contact-email    { font-size: 12px; color: #9ca3af; margin-top: 1px; }

.ng-badge { display: inline-flex; align-items: center; gap: 5px; font-size: 11.5px; font-weight: 600; padding: 3px 10px; border-radius: 20px; white-space: nowrap; }
.ng-badge::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: currentColor; opacity: 0.8; }
.ng-badge-active   { background: #f0fdf4; color: #16a34a; border: 1px solid #bbf7d0; }
.ng-badge-inactive { background: #f9fafb; color: #9ca3af; border: 1px solid #e5e7eb; }
.ng-actions { display: flex; gap: 6px; align-items: center; }

.ng-btn { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; border-radius: 8px; border: 1px solid transparent; display: inline-flex; align-items: center; gap: 6px; transition: all 0.14s; padding: 8px 16px; white-space: nowrap; }
.ng-btn:disabled { opacity: 0.55; cursor: not-allowed; transform: none !important; box-shadow: none !important; }
.ng-btn-primary { background: #3b82f6; color: #fff; border-color: #3b82f6; box-shadow: 0 1px 4px rgba(59,130,246,0.25); }
.ng-btn-primary:hover:not(:disabled) { background: #2563eb; border-color: #2563eb; box-shadow: 0 3px 10px rgba(59,130,246,0.3); transform: translateY(-1px); }
.ng-btn-ghost { background: #fff; color: #374151; border-color: #e5e7eb; }
.ng-btn-ghost:hover:not(:disabled) { background: #f9fafb; border-color: #d1d5db; }
.ng-btn-danger { background: #fff; color: #ef4444; border-color: #fecaca; }
.ng-btn-danger:hover:not(:disabled) { background: #fef2f2; border-color: #fca5a5; }
.ng-btn-icon { padding: 5px 8px; border-radius: 7px; background: #f9fafb; border: 1px solid #e5e7eb; color: #6b7280; cursor: pointer; display: inline-flex; align-items: center; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 12px; font-weight: 600; gap: 5px; transition: all 0.12s; }
.ng-btn-icon:hover { background: #f3f4f6; color: #374151; border-color: #d1d5db; }
.ng-btn-del { padding: 5px 8px; border-radius: 7px; background: #fff; border: 1px solid #fecaca; color: #ef4444; cursor: pointer; display: inline-flex; align-items: center; transition: all 0.12s; }
.ng-btn-del:hover { background: #fef2f2; }

/* Skeleton */
.ng-skeleton { background: linear-gradient(90deg,#f3f4f6 25%,#e5e7eb 50%,#f3f4f6 75%); background-size: 200% 100%; animation: shimmer 1.4s infinite; border-radius: 6px; display: block; }
@keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }

/* Error banner */
.ng-error-banner { background: #fef2f2; border: 1px solid #fecaca; border-radius: 10px; padding: 14px 18px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; font-size: 13px; color: #b91c1c; font-weight: 500; }

/* Toast */
.ng-toast-wrap { position: fixed; bottom: 24px; right: 24px; z-index: 9999; display: flex; flex-direction: column; gap: 8px; pointer-events: none; }
.ng-toast { padding: 11px 16px; border-radius: 10px; font-size: 13px; font-weight: 600; font-family: 'Plus Jakarta Sans', sans-serif; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.12); animation: toast-in 0.25s cubic-bezier(0.16,1,0.3,1) forwards; }
.ng-toast-success { background: #f0fdf4; color: #15803d; border: 1px solid #bbf7d0; }
.ng-toast-error   { background: #fef2f2; color: #b91c1c; border: 1px solid #fecaca; }
@keyframes toast-in { from{opacity:0;transform:translateY(8px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }

/* Empty */
.ng-empty { padding: 3.5rem 2rem; text-align: center; }
.ng-empty-icon { width: 48px; height: 48px; background: #f3f4f6; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; }
.ng-empty-text { font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 4px; }
.ng-empty-sub  { font-size: 13px; color: #9ca3af; }

/* Modal */
.ng-overlay { position: fixed; inset: 0; background: rgba(17,24,39,0.4); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 1rem; backdrop-filter: blur(4px); animation: fade-in 0.16s ease; }
@keyframes fade-in { from{opacity:0} to{opacity:1} }
@keyframes slide-up { from{opacity:0;transform:translateY(16px) scale(0.98)} to{opacity:1;transform:translateY(0) scale(1)} }

.ng-modal { background: #fff; border: 1px solid #e5e7eb; border-radius: 14px; width: 100%; max-width: 520px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); animation: slide-up 0.2s cubic-bezier(0.16,1,0.3,1); }
.ng-modal-header { padding: 16px 20px; border-bottom: 1px solid #f3f4f6; display: flex; align-items: center; gap: 10px; }
.ng-modal-icon { width: 32px; height: 32px; background: #eff6ff; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #3b82f6; }
.ng-modal-title { font-size: 15px; font-weight: 700; color: #111827; flex: 1; }
.ng-modal-sub   { font-size: 12px; color: #9ca3af; margin-top: 1px; }
.ng-modal-close { background: #f9fafb; border: 1px solid #e5e7eb; color: #9ca3af; font-size: 15px; cursor: pointer; width: 28px; height: 28px; border-radius: 7px; display: flex; align-items: center; justify-content: center; transition: all 0.1s; line-height: 1; }
.ng-modal-close:hover { background: #f3f4f6; color: #374151; }
.ng-modal-close:disabled { opacity: 0.4; cursor: not-allowed; }
.ng-modal-body { padding: 18px 20px; display: flex; flex-direction: column; gap: 14px; }
.ng-modal-footer { padding: 14px 20px; border-top: 1px solid #f3f4f6; display: flex; justify-content: flex-end; gap: 8px; }

.ng-row   { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.ng-field { display: flex; flex-direction: column; gap: 5px; }
.ng-field.ng-full { grid-column: 1 / -1; }
.ng-label { font-size: 12px; font-weight: 600; color: #374151; }
.ng-req   { color: #ef4444; margin-left: 2px; }
.ng-opt   { color: #9ca3af; font-weight: 400; }
.ng-input { padding: 8px 11px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; color: #111827; font-size: 13.5px; font-family: 'Plus Jakarta Sans', sans-serif; outline: none; transition: border-color 0.15s, box-shadow 0.15s, background 0.15s; width: 100%; }
.ng-input:focus { border-color: #93c5fd; background: #fff; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
.ng-input:disabled { opacity: 0.6; cursor: not-allowed; }
.ng-input::placeholder { color: #d1d5db; }
.ng-input.ng-err { border-color: #fca5a5; background: #fff5f5; box-shadow: 0 0 0 3px rgba(239,68,68,0.08); }
.ng-err-msg { font-size: 11.5px; color: #ef4444; }
.ng-divider { display: flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 700; color: #d1d5db; text-transform: uppercase; letter-spacing: 0.07em; }
.ng-divider::before,.ng-divider::after { content:''; flex:1; height:1px; background:#f3f4f6; }

.ng-confirm { background: #fff; border: 1px solid #e5e7eb; border-radius: 14px; width: 100%; max-width: 360px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); animation: slide-up 0.2s cubic-bezier(0.16,1,0.3,1); overflow: hidden; }
.ng-confirm-head { padding: 24px 24px 18px; text-align: center; border-bottom: 1px solid #f3f4f6; }
.ng-confirm-icon { width: 48px; height: 48px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; color: #ef4444; }
.ng-confirm-title { font-size: 16px; font-weight: 700; color: #111827; margin-bottom: 6px; }
.ng-confirm-msg   { font-size: 13px; color: #6b7280; line-height: 1.6; }
.ng-confirm-name  { font-weight: 600; color: #111827; }
.ng-confirm-foot  { padding: 14px 20px; display: flex; justify-content: center; gap: 8px; }

/* Spinner inside buttons */
.ng-spinner { width: 13px; height: 13px; border: 2px solid rgba(255,255,255,0.35); border-top-color: #fff; border-radius: 50%; animation: ng-spin 0.55s linear infinite; flex-shrink: 0; }
.ng-spinner-red { border-color: rgba(239,68,68,0.25); border-top-color: #ef4444; }
@keyframes ng-spin { to{transform:rotate(360deg)} }
`

// ─────────────────────────────────────────────
// Icons
// ─────────────────────────────────────────────
const SearchIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
    <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M10 10l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)
const PlusIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
    <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)
const EditIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
    <path d="M11.5 2.5a1.414 1.414 0 012 2L5 13H2v-3L11.5 2.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const TrashIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
    <path d="M2 4h12M5 4V2.5A.5.5 0 015.5 2h5a.5.5 0 01.5.5V4M6 7v5M10 7v5M3 4l.8 9.6a.5.5 0 00.5.4h7.4a.5.5 0 00.5-.4L13 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const BranchSvg = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
    <path d="M10 2L3 7v11h5v-5h4v5h5V7L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
)
const GridIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
    <rect x="9" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
    <rect x="1" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
    <rect x="9" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
  </svg>
)
const RefreshIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
    <path d="M13.5 8A5.5 5.5 0 112.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M2.5 2v3.5H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────
function initials(name = '') {
  return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()
}
const avatarColors = [
  { bg: '#eff6ff', color: '#3b82f6' },
  { bg: '#f0fdf4', color: '#16a34a' },
  { bg: '#fff7ed', color: '#ea580c' },
  { bg: '#fdf4ff', color: '#a855f7' },
  { bg: '#fffbeb', color: '#d97706' },
]

// ─────────────────────────────────────────────
// Toast
// ─────────────────────────────────────────────
function useToast() {
  const [toasts, setToasts] = useState([])
  const show = (message, type = 'success') => {
    const id = Date.now()
    setToasts(p => [...p, { id, message, type }])
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 3500)
  }
  return { toasts, toast: show }
}

// ─────────────────────────────────────────────
// Skeleton rows while loading
// ─────────────────────────────────────────────
function SkeletonRows() {
  return Array.from({ length: 5 }).map((_, i) => (
    <tr key={i}>
      <td><span className="ng-skeleton" style={{ width: 64, height: 22, display: 'inline-block' }} /></td>
      <td>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="ng-skeleton" style={{ width: 34, height: 34, borderRadius: 8, display: 'inline-block' }} />
          <div>
            <span className="ng-skeleton" style={{ width: 130, height: 13, marginBottom: 6, display: 'block' }} />
            <span className="ng-skeleton" style={{ width: 90, height: 11, display: 'block' }} />
          </div>
        </div>
      </td>
      <td>
        <span className="ng-skeleton" style={{ width: 70, height: 13, display: 'block', marginBottom: 6 }} />
        <span className="ng-skeleton" style={{ width: 50, height: 11, display: 'block' }} />
      </td>
      <td>
        <span className="ng-skeleton" style={{ width: 100, height: 13, display: 'block', marginBottom: 6 }} />
        <span className="ng-skeleton" style={{ width: 120, height: 11, display: 'block' }} />
      </td>
      <td><span className="ng-skeleton" style={{ width: 58, height: 22, borderRadius: 20, display: 'inline-block' }} /></td>
      <td><span className="ng-skeleton" style={{ width: 80, height: 28, borderRadius: 7, display: 'inline-block' }} /></td>
    </tr>
  ))
}

// ─────────────────────────────────────────────
// Branch Form Modal
// POST body: { company_id, branch_name, address1, address2, city, country, phone, email }
// PUT  body: same shape (no branch_code)
// ─────────────────────────────────────────────
function BranchFormModal({ branch, onSave, onClose, isSaving }) {
  const isEdit = !!branch

  // Editing: pick only the fields the API accepts for PUT
  const [form, setForm] = useState(() => isEdit ? {
    company_id: branch.company_id,
    branch_name: branch.branch_name ?? '',
    address1:    branch.address1   ?? '',
    address2:    branch.address2   ?? '',
    city:        branch.city       ?? '',
    country:     branch.country    ?? '',
    phone:       branch.phone      ?? '',
    email:       branch.email      ?? '',
  } : { ...emptyForm })

  const [errors, setErrors] = useState({})

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    if (errors[k]) setErrors(e => ({ ...e, [k]: false }))
  }

  const validate = () => {
    const e = {}
    if (!form.branch_name.trim()) e.branch_name = true
    if (!form.city.trim())        e.city        = true
    if (!form.country.trim())     e.country     = true
    if (!form.address1.trim())    e.address1    = true
    setErrors(e)
    return !Object.keys(e).length
  }

  return (
    <div className="ng-overlay" onClick={e => e.target === e.currentTarget && !isSaving && onClose()}>
      <div className="ng-modal">
        <div className="ng-modal-header">
          <div className="ng-modal-icon"><BranchSvg /></div>
          <div>
            <div className="ng-modal-title">{isEdit ? 'Edit Branch' : 'Add New Branch'}</div>
            <div className="ng-modal-sub">
              {isEdit ? `Editing ${branch.branch_code}` : 'Fill in the details below'}
            </div>
          </div>
          <button className="ng-modal-close" onClick={onClose} disabled={isSaving}>×</button>
        </div>

        <div className="ng-modal-body">

          {/* Branch name (full width — API doesn't have branch_code in POST) */}
          <div className="ng-field ng-full">
            <label className="ng-label">Branch Name <span className="ng-req">*</span></label>
            <input
              className={`ng-input${errors.branch_name ? ' ng-err' : ''}`}
              value={form.branch_name}
              onChange={e => set('branch_name', e.target.value)}
              placeholder="Main Branch"
              disabled={isSaving}
            />
            {errors.branch_name && <span className="ng-err-msg">Branch name is required</span>}
          </div>

          <div className="ng-divider">Address</div>

          <div className="ng-field ng-full">
            <label className="ng-label">Address Line 1 <span className="ng-req">*</span></label>
            <input
              className={`ng-input${errors.address1 ? ' ng-err' : ''}`}
              value={form.address1}
              onChange={e => set('address1', e.target.value)}
              placeholder="123 Business Park"
              disabled={isSaving}
            />
            {errors.address1 && <span className="ng-err-msg">Address is required</span>}
          </div>

          <div className="ng-field ng-full">
            <label className="ng-label">Address Line 2 <span className="ng-opt">(optional)</span></label>
            <input
              className="ng-input"
              value={form.address2}
              onChange={e => set('address2', e.target.value)}
              placeholder="Suite 456"
              disabled={isSaving}
            />
          </div>

          <div className="ng-row">
            <div className="ng-field">
              <label className="ng-label">City <span className="ng-req">*</span></label>
              <input
                className={`ng-input${errors.city ? ' ng-err' : ''}`}
                value={form.city}
                onChange={e => set('city', e.target.value)}
                placeholder="Mumbai"
                disabled={isSaving}
              />
              {errors.city && <span className="ng-err-msg">Required</span>}
            </div>
            <div className="ng-field">
              <label className="ng-label">Country <span className="ng-req">*</span></label>
              <input
                className={`ng-input${errors.country ? ' ng-err' : ''}`}
                value={form.country}
                onChange={e => set('country', e.target.value)}
                placeholder="India"
                disabled={isSaving}
              />
              {errors.country && <span className="ng-err-msg">Required</span>}
            </div>
          </div>

          <div className="ng-divider">Contact</div>

          <div className="ng-row">
            <div className="ng-field">
              <label className="ng-label">Phone</label>
              <input
                className="ng-input"
                value={form.phone}
                onChange={e => set('phone', e.target.value)}
                placeholder="+91 98765 43210"
                disabled={isSaving}
              />
            </div>
            <div className="ng-field">
              <label className="ng-label">Email Address</label>
              <input
                className="ng-input"
                value={form.email}
                onChange={e => set('email', e.target.value)}
                placeholder="branch@company.com"
                disabled={isSaving}
              />
            </div>
          </div>

        </div>

        <div className="ng-modal-footer">
          <button className="ng-btn ng-btn-ghost" onClick={onClose} disabled={isSaving}>
            Cancel
          </button>
          <button
            className="ng-btn ng-btn-primary"
            disabled={isSaving}
            onClick={() => { if (validate()) onSave(form) }}
          >
            {isSaving
              ? <><div className="ng-spinner" /> Saving…</>
              : isEdit ? 'Save Changes' : <><PlusIcon /> Add Branch</>
            }
          </button>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// Delete Confirm Modal
// ─────────────────────────────────────────────
function DeleteModal({ branch, onConfirm, onClose, isDeleting }) {
  return (
    <div className="ng-overlay" onClick={e => e.target === e.currentTarget && !isDeleting && onClose()}>
      <div className="ng-confirm">
        <div className="ng-confirm-head">
          <div className="ng-confirm-icon"><TrashIcon /></div>
          <div className="ng-confirm-title">Delete Branch?</div>
          <div className="ng-confirm-msg">
            <span className="ng-confirm-name">{branch.branch_name}</span>
            {branch.branch_code ? ` (${branch.branch_code})` : ''} will be permanently removed and cannot be recovered.
          </div>
        </div>
        <div className="ng-confirm-foot">
          <button className="ng-btn ng-btn-ghost" onClick={onClose} disabled={isDeleting}>
            Cancel
          </button>
          <button className="ng-btn ng-btn-danger" onClick={onConfirm} disabled={isDeleting}>
            {isDeleting
              ? <><div className="ng-spinner ng-spinner-red" /> Deleting…</>
              : <><TrashIcon /> Delete</>
            }
          </button>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
function Branch() {
  const queryClient = useQueryClient()
  const { toasts, toast } = useToast()

  const [search, setSearch]           = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [modal, setModal]             = useState(null)
  // modal shape: { type: 'add' | 'edit' | 'delete', branch?: {} }

  // ── GET /get-all-branches ───────────────────
  // Response: { status: true, statusMsg, data: [...branches] }
  const {
    data: apiResponse,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: BRANCH_KEY,
    queryFn:  getAllBranches,
    // staleTime: 1000 * 60 * 2, // optional: 2-min cache
  })

  const branches = apiResponse?.data ?? []

  // ── POST /create-branch ─────────────────────
  // Body: { company_id, branch_name, address1, address2, city, country, phone, email }
  // Response: { status, statusMsg, data: { ...newBranch } }
  const createMutation = useMutation({
    mutationFn: (body) => createBranch(body),
    onSuccess:  (res) => {
      if (res?.status) {
        queryClient.invalidateQueries({ queryKey: BRANCH_KEY })
        toast('Branch created successfully')
        setModal(null)
      } else {
        toast(res?.statusMsg || 'Failed to create branch', 'error')
      }
    },
    onError: (err) => {
      toast(err?.response?.data?.statusMsg || 'Failed to create branch', 'error')
    },
  })

  // ── PUT /update-branch/:id ──────────────────
  // Body: { company_id, branch_name, address1, address2, city, country, phone, email }
  // Response: { status, statusMsg, data: { ...updatedBranch } }
  const updateMutation = useMutation({
    mutationFn: ({ branchId, branchData }) => updateBranch(branchId, branchData),
    onSuccess:  (res) => {
      if (res?.status) {
        queryClient.invalidateQueries({ queryKey: BRANCH_KEY })
        toast('Branch updated successfully')
        setModal(null)
      } else {
        toast(res?.statusMsg || 'Failed to update branch', 'error')
      }
    },
    onError: (err) => {
      toast(err?.response?.data?.statusMsg || 'Failed to update branch', 'error')
    },
  })

  // ── DELETE /delete-branch/:id ───────────────
  // Response: { status: true, statusMsg, data: true }
  const deleteMutation = useMutation({
    mutationFn: (branchId) => deleteBranch(branchId),
    onSuccess:  (res) => {
      if (res?.status) {
        queryClient.invalidateQueries({ queryKey: BRANCH_KEY })
        toast('Branch deleted successfully')
        setModal(null)
      } else {
        toast(res?.statusMsg || 'Failed to delete branch', 'error')
      }
    },
    onError: (err) => {
      toast(err?.response?.data?.statusMsg || 'Failed to delete branch', 'error')
    },
  })

  // ── Save handler (add or edit) ──────────────
  const handleSave = (form) => {
    if (modal.branch) {
      // EDIT — PUT /update-branch/:branch_id
      updateMutation.mutate({
        branchId:   modal.branch.branch_id,
        branchData: form,
      })
    } else {
      // ADD — POST /create-branch
      createMutation.mutate(form)
    }
  }

  // ── Delete handler ──────────────────────────
  const handleDelete = () => {
    deleteMutation.mutate(modal.branch.branch_id)
  }

  // ── Local filter (search + status) ─────────
  const filtered = useMemo(() => branches.filter(b => {
    const q  = search.toLowerCase()
    const ok = !q
      || (b.branch_name ?? '').toLowerCase().includes(q)
      || (b.branch_code ?? '').toLowerCase().includes(q)
      || (b.city        ?? '').toLowerCase().includes(q)
    // Your API response doesn't include "status" field yet —
    // comment out the st line if your API doesn't return it
    // const st = !statusFilter || b.status === statusFilter
    return ok // && st
  }), [branches, search, statusFilter])

  // ── Stats ───────────────────────────────────
  const stats = useMemo(() => ({
    total:     branches.length,
    active:    branches.filter(b => b.status === 'Active').length,
    inactive:  branches.filter(b => b.status === 'Inactive').length,
    countries: new Set(branches.map(b => b.country).filter(Boolean)).size,
  }), [branches])

  // Mutation loading flags
  const isSaving   = createMutation.isPending || updateMutation.isPending
  const isDeleting = deleteMutation.isPending

  // ─────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────
  return (
    <>
      <style>{css}</style>
      <div className="ng">

        {/* ── Top bar ── */}
        <div className="ng-topbar">
          <div className="ng-topbar-left">
            <div className="ng-page-icon"><BranchSvg /></div>
            <div className="ng-page-title">Branch Management</div>
            <div style={{ width: 1, height: 20, background: '#e5e7eb', margin: '0 4px' }} />
            <div className="ng-breadcrumb">
              <span>Core</span>
              <span className="ng-breadcrumb-sep">›</span>
              <span>Company</span>
              <span className="ng-breadcrumb-sep">›</span>
              <span style={{ color: '#374151', fontWeight: 500 }}>Branches</span>
            </div>
          </div>
          <div className="ng-topbar-right">
            <button
              className="ng-btn ng-btn-primary"
              onClick={() => setModal({ type: 'add' })}
              disabled={isLoading}
            >
              <PlusIcon /> Add Branch
            </button>
          </div>
        </div>

        <div className="ng-body">

          {/* ── Error banner ── */}
          {isError && (
            <div className="ng-error-banner">
              <span>
                Failed to load branches
                {error?.message ? ` — ${error.message}` : ''}
              </span>
              <button className="ng-btn ng-btn-ghost" style={{ padding: '5px 10px', fontSize: 12 }} onClick={() => refetch()}>
                <RefreshIcon /> Retry
              </button>
            </div>
          )}

          {/* ── Section header ── */}
          <div className="ng-section-header">
            <div className="ng-section-dot" style={{ background: '#3b82f6' }} />
            <span className="ng-section-label">All Branches</span>
          </div>

          {/* ── Stats ── */}
          <div className="ng-stats">
            <div className="ng-stat s-total">
              <div>
                <div className="ng-stat-label">Total Branches</div>
                <div className="ng-stat-value">{isLoading ? '—' : stats.total}</div>
              </div>
              <div className="ng-stat-badge"><GridIcon /></div>
            </div>
            <div className="ng-stat s-active">
              <div>
                <div className="ng-stat-label">Active</div>
                <div className="ng-stat-value">{isLoading ? '—' : stats.active}</div>
              </div>
              <div className="ng-stat-badge" style={{ fontSize: 18 }}>✓</div>
            </div>
            <div className="ng-stat s-inactive">
              <div>
                <div className="ng-stat-label">Inactive</div>
                <div className="ng-stat-value">{isLoading ? '—' : stats.inactive}</div>
              </div>
              <div className="ng-stat-badge" style={{ fontSize: 18 }}>–</div>
            </div>
            <div className="ng-stat s-countries">
              <div>
                <div className="ng-stat-label">Countries</div>
                <div className="ng-stat-value">{isLoading ? '—' : stats.countries}</div>
              </div>
              <div className="ng-stat-badge" style={{ fontSize: 16 }}>🌐</div>
            </div>
          </div>

          {/* ── Table card ── */}
          <div className="ng-card">
            <div className="ng-card-toolbar">
              <div className="ng-search-wrap">
                <span className="ng-search-icon"><SearchIcon /></span>
                <input
                  className="ng-search"
                  placeholder="Search by name, code, city…"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              {/* Uncomment when your API returns status field:
              <select className="ng-filter" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                <option value="">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              */}
              <div className="ng-spacer" />
              <span className="ng-count-label">
                {isLoading ? 'Loading…' : `${filtered.length} of ${branches.length} branches`}
              </span>
            </div>

            <table className="ng-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Branch Name</th>
                  <th>Location</th>
                  <th>Contact</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <SkeletonRows />
                ) : filtered.length === 0 ? (
                  <tr>
                    <td colSpan={5}>
                      <div className="ng-empty">
                        <div className="ng-empty-icon"><BranchSvg /></div>
                        <div className="ng-empty-text">
                          {search ? 'No branches match your search' : 'No branches yet'}
                        </div>
                        <div className="ng-empty-sub">
                          {search ? 'Try a different keyword' : 'Click "Add Branch" to create the first one'}
                        </div>
                      </div>
                    </td>
                  </tr>
                ) : filtered.map((b, i) => {
                  const av = avatarColors[i % avatarColors.length]
                  return (
                    <tr key={b.branch_id}>
                      <td>
                        {b.branch_code
                          ? <span className="ng-mono">{b.branch_code}</span>
                          : <span style={{ color: '#d1d5db', fontSize: 12 }}>—</span>
                        }
                      </td>
                      <td>
                        <div className="ng-branch-cell">
                          <div
                            className="ng-branch-row-icon"
                            style={{ background: av.bg, color: av.color }}
                          >
                            {initials(b.branch_name)}
                          </div>
                          <div>
                            <div className="ng-branch-name">{b.branch_name}</div>
                            {b.address1 && (
                              <div className="ng-branch-sub">
                                {b.address1}{b.address2 ? `, ${b.address2}` : ''}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="ng-location-city">{b.city || '—'}</div>
                        <div className="ng-location-country">{b.country || '—'}</div>
                      </td>
                      <td>
                        <div className="ng-contact-phone">{b.phone || '—'}</div>
                        <div className="ng-contact-email">{b.email || '—'}</div>
                      </td>
                      <td>
                        <div className="ng-actions">
                          <button
                            className="ng-btn-icon"
                            onClick={() => setModal({ type: 'edit', branch: b })}
                          >
                            <EditIcon /> Edit
                          </button>
                          <button
                            className="ng-btn-del"
                            onClick={() => setModal({ type: 'delete', branch: b })}
                          >
                            <TrashIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Modals ── */}
        {(modal?.type === 'add' || modal?.type === 'edit') && (
          <BranchFormModal
            branch={modal.type === 'edit' ? modal.branch : null}
            onSave={handleSave}
            onClose={() => !isSaving && setModal(null)}
            isSaving={isSaving}
          />
        )}
        {modal?.type === 'delete' && (
          <DeleteModal
            branch={modal.branch}
            onConfirm={handleDelete}
            onClose={() => !isDeleting && setModal(null)}
            isDeleting={isDeleting}
          />
        )}

        {/* ── Toasts ── */}
        <div className="ng-toast-wrap">
          {toasts.map(t => (
            <div key={t.id} className={`ng-toast ng-toast-${t.type}`}>
              {t.type === 'success' ? '✓' : '✕'} {t.message}
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default Branch