// import React, { useState, useEffect, useRef } from "react";
// import { ChevronDown, Building2, User, Calendar } from "lucide-react";
// function MainStart() {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
//   const buttonRefs = useRef({});

//   const modules = [
//     {
//       name: "System",
//       items: [
//         "User Management",
//         "Roles & Permissions",
//         "System Settings",
//         "Audit Logs",
//         "Integrations",
//       ],
//     },
//     {
//       name: "Company",
//       items: [
//         "Company Profile",
//         "Departments",
//         "Locations",
//         "Business Units",
//         "Compliance",
//       ],
//     },
//     {
//       name: "Masters",
//       items: [
//         "Product Master",
//         "Customer Master",
//         "Vendor Master",
//         "Service Master",
//         "Asset Master",
//       ],
//     },
//     {
//       name: "Inventory",
//       items: [
//         "Stock Management",
//         "Purchase Orders",
//         "Suppliers",
//         "Product Catalog",
//         "Warehouses",
//       ],
//     },
//     {
//       name: "Accounts",
//       items: [
//         "Accounts Payable",
//         "Accounts Receivable",
//         "General Ledger",
//         "Reports",
//         "Tax Management",
//       ],
//     },
//     {
//       name: "Reports",
//       items: [
//         "Financial Reports",
//         "Operational Reports",
//         "Custom Reports",
//         "Scheduled Reports",
//         "Report Builder",
//       ],
//     },
//     {
//       name: "Administration",
//       items: [
//         "User Management",
//         "Roles & Permissions",
//         "System Settings",
//         "Audit Logs",
//         "Integrations",
//       ],
//     },
//     {
//       name: "Management",
//       items: [
//         "Project Management",
//         "Task Management",
//         "Resource Allocation",
//         "Time Tracking",
//         "Collaboration Tools",
//       ],
//     },
//     {
//       name: "Tools",
//       items: [
//         "Document Management",
//         "File Sharing",
//         "Calendar Integration",
//         "Email Templates",
//         "Workflow Builder",
//       ],
//     },
//     {
//       name: "EMS",
//       items: [
//         "Employee Master",
//         "Employee Holiday",
//         "Attendance",
//         "Leave Management",
//         "Payroll",
//       ],
//     },
//     {
//       name: "Projects",
//       items: [
//         "Project Dashboard",
//         "Task Management",
//         "Resource Allocation",
//         "Time Tracking",
//         "Collaboration Tools",
//       ],
//     },
//     {
//       name: "Help",
//       items: [
//         "Documentation",
//         "Support Tickets",
//         "Live Chat",
//         "Community Forums",
//         "Contact Us",
//       ],
//     },
//     {
//       name: "DashBoard",
//       items: [
//         "Sales Dashboard",
//         "Financial Dashboard",
//         "Operational Dashboard",
//         "Custom Dashboard",
//         "Analytics",
//       ],
//     },
//     {
//       name: "Promotions",
//       items: [
//         "Current Promotions",
//         "Upcoming Promotions",
//         "Promotion History",
//         "Create Promotion",
//         "Promotion Analytics",
//       ],
//     },
//   ];

//   // Update time every second
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleDropdownToggle = (moduleName) => {
//     if (activeDropdown === moduleName) {
//       setActiveDropdown(null);
//     } else {
//       const button = buttonRefs.current[moduleName];
//       if (button) {
//         const rect = button.getBoundingClientRect();
//         setDropdownPosition({
//           top: rect.bottom + 4,
//           left: rect.left,
//         });
//       }
//       setActiveDropdown(moduleName);
//     }
//   };

//   // Format date and time
//   const formatDate = (date) => {
//     return date.toLocaleDateString("en-US", {
//       weekday: "short",
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   const formatTime = (date) => {
//     return date.toLocaleTimeString("en-US", {
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//       hour12: true,
//     });
//   };

//   // You can replace these with actual logged-in user data
//   const companyName = "Tanwood";
//   const loggedUser = "Jeorge David";

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Top Navigation Bar */}
//       <nav className="bg-slate-900 text-white shadow-sm sticky top-0 z-50">
//         <div className="w-full px-3 sm:px-5 lg:px-7">
//           <div className="flex items-center h-10">
//             {/* Brand */}
//             <span className="text-sm font-bold mr-6 shrink-0">NextGen</span>

//             {/* NAV SCROLL AREA */}
//             <div
//               className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto"
//               style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//             >
//               {modules.map((module, index) => (
//                 <div
//                   key={index}
//                   className="shrink-0"
//                   onMouseEnter={() => handleDropdownToggle(module.name)}
//                   onMouseLeave={() => setActiveDropdown(null)}
//                 >
//                   {/* MENU BUTTON */}
//                   <button
//                     ref={(el) => (buttonRefs.current[module.name] = el)}
//                     className="flex items-center space-x-1 px-2 py-1
//                                text-[11px] sm:text-xs
//                                hover:bg-slate-800 rounded"
//                   >
//                     <span>{module.name}</span>
//                     <ChevronDown
//                       className={`w-3 h-3 transition-transform ${
//                         activeDropdown === module.name ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* DROPDOWN - Rendered outside navbar */}
//       {activeDropdown && (
//         <div
//           className="fixed bg-slate-800 text-gray-100 rounded-md shadow-xl min-w-44 py-1 border border-slate-700"
//           style={{
//             top: `${dropdownPosition.top}px`,
//             left: `${dropdownPosition.left}px`,
//             zIndex: 9999,
//           }}
//           onMouseEnter={() => setActiveDropdown(activeDropdown)}
//           onMouseLeave={() => setActiveDropdown(null)}
//         >
//           {modules
//             .find((m) => m.name === activeDropdown)
//             ?.items.map((item, i) => (
//               <button
//                 key={i}
//                 className="block w-full text-left px-3 py-1.5 text-[11px] hover:bg-slate-700 hover:text-blue-400"
//               >
//                 {item}
//               </button>
//             ))}
//         </div>
//       )}

//       {/* Main Content Area */}
//       <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex">
//         {/* Main Content Area */}
//         <div className="flex-1 mr-4"></div>
//         {/* Right Sidebar - App Launcher */}
//         <div className="w-18 shrink-0 sm:-mr-16 lg:-mr-24 md:-mr-26">
//           <div className="sticky top-42 bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700 p-4 ">
//             {/* App Icons */}
//             <div className="space-y-4">
//               <button
//                 onClick={() => setShowCalculator(true)}
//                 className="w-full aspect-square bg-linear-to-br from-blue-500 to-blue-600 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl hover:scale-105"
//               >
//                 <svg
//                   className="w-7 h-7 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
//                   />
//                 </svg>
//               </button>

//               {/* Calendar */}
//               <button className="w-full aspect-square bg-linear-to-br from-purple-500 to-purple-600 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl hover:scale-105">
//                 <svg
//                   className="w-7 h-7 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                   />
//                 </svg>
//               </button>

//               {/* Notes */}
//               <button className="w-full aspect-square bg-linear-to-br from-amber-500 to-amber-600 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl hover:scale-105">
//                 <svg
//                   className="w-7 h-7 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
//                   />
//                 </svg>
//               </button>

//               {/* Clock */}
//               <button className="w-full aspect-square bg-linear-to-br from-emerald-500 to-emerald-600 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl hover:scale-105">
//                 <svg
//                   className="w-7 h-7 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </button>

//               {/* Chat */}
//               <button className="w-full aspect-square bg-linear-to-br from-rose-500 to-rose-600 rounded-xl hover:from-rose-600 hover:to-rose-700 transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl hover:scale-105">
//                 <svg
//                   className="w-7 h-7 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                   />
//                 </svg>
//               </button>

//               {/* Settings */}
//               <button className="w-full aspect-square bg-linear-to-br from-slate-600 to-slate-700 rounded-xl hover:from-slate-700 hover:to-slate-800 transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl hover:scale-105">
//                 <svg
//                   className="w-7 h-7 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Bottom Left - Company & User Info */}
//       <div className="fixed bottom-6 left-6 pointer-events-none select-none">
//         <div className="bg-white px-4 py-3 rounded-lg shadow-lg border border-gray-200 space-y-2">
//           {/* Company Name */}
//           <div className="flex items-center space-x-2">
//             <Building2 className="w-4 h-4 text-blue-600" />
//             <span className="text-sm font-semibold text-slate-900">
//               {companyName}
//             </span>
//           </div>

//           {/* Logged User */}
//           <div className="flex items-center space-x-2">
//             <User className="w-4 h-4 text-green-600" />
//             <span className="text-sm text-gray-700">{loggedUser}</span>
//           </div>

//           {/* Date and Time */}
//           <div className="border-t border-gray-200 pt-2 mt-2">
//             <div className="flex items-center space-x-2 mb-1">
//               <Calendar className="w-4 h-4 text-orange-600" />
//               <span className="text-xs font-medium text-gray-600">
//                 {formatDate(currentTime)}
//               </span>
//             </div>
//             <div className="text-lg font-bold text-slate-900 tabular-nums tracking-wide">
//               {formatTime(currentTime)}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Right Branding */}
//       <div className="fixed bottom-6 right-6 text-right pointer-events-none select-none">
//         <div className="bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-200">
//           <div className="text-slate-900 font-bold text-lg sm:text-xl tracking-tight">
//             NextGen ERP
//           </div>
//           <div className="text-gray-500 text-[10px] sm:text-xs font-medium mt-0.5">
//             All in One Solution
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.2s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default MainStart;

// import React, { useState, useEffect } from "react";
// import { ChevronRight, Building2, User, Calendar, Menu, X } from "lucide-react";

// function MainStart() {
//   const [activeModule, setActiveModule] = useState(null);
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const modules = [
//     {
//       name: "System",
//       icon: "⚙️",
//       items: ["User Management", "Roles & Permissions", "System Settings", "Audit Logs", "Integrations"],
//     },
//     {
//       name: "Company",
//       icon: "🏢",
//       items: ["Company Profile", "Departments", "Locations", "Business Units", "Compliance"],
//     },
//     {
//       name: "Masters",
//       icon: "📋",
//       items: ["Product Master", "Customer Master", "Vendor Master", "Service Master", "Asset Master"],
//     },
//     {
//       name: "Inventory",
//       icon: "📦",
//       items: ["Stock Management", "Purchase Orders", "Suppliers", "Product Catalog", "Warehouses"],
//     },
//     {
//       name: "Accounts",
//       icon: "💰",
//       items: ["Accounts Payable", "Accounts Receivable", "General Ledger", "Reports", "Tax Management"],
//     },
//     {
//       name: "Reports",
//       icon: "📊",
//       items: ["Financial Reports", "Operational Reports", "Custom Reports", "Scheduled Reports", "Report Builder"],
//     },
//     {
//       name: "Administration",
//       icon: "🛡️",
//       items: ["User Management", "Roles & Permissions", "System Settings", "Audit Logs", "Integrations"],
//     },
//     {
//       name: "Management",
//       icon: "📌",
//       items: ["Project Management", "Task Management", "Resource Allocation", "Time Tracking", "Collaboration Tools"],
//     },
//     {
//       name: "Tools",
//       icon: "🔧",
//       items: ["Document Management", "File Sharing", "Calendar Integration", "Email Templates", "Workflow Builder"],
//     },
//     {
//       name: "EMS",
//       icon: "👥",
//       items: ["Employee Master", "Employee Holiday", "Attendance", "Leave Management", "Payroll"],
//     },
//     {
//       name: "Projects",
//       icon: "🚀",
//       items: ["Project Dashboard", "Task Management", "Resource Allocation", "Time Tracking", "Collaboration Tools"],
//     },
//     {
//       name: "Help",
//       icon: "❓",
//       items: ["Documentation", "Support Tickets", "Live Chat", "Community Forums", "Contact Us"],
//     },
//     {
//       name: "DashBoard",
//       icon: "📈",
//       items: ["Sales Dashboard", "Financial Dashboard", "Operational Dashboard", "Custom Dashboard", "Analytics"],
//     },
//     {
//       name: "Promotions",
//       icon: "🎯",
//       items: ["Current Promotions", "Upcoming Promotions", "Promotion History", "Create Promotion", "Promotion Analytics"],
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const formatDate = (date) =>
//     date.toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" });

//   const formatTime = (date) =>
//     date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });

//   const companyName = "Tanwood";
//   const loggedUser = "Jeorge David";

//   const handleModuleClick = (name) => {
//     setActiveModule(activeModule === name ? null : name);
//   };

//   return (
//     <div className="min-h-screen flex bg-gray-100" style={{ fontFamily: "'Segoe UI', sans-serif" }}>

//       {/* Overlay for mobile */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-20 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* SIDEBAR */}
//       <aside
//         className={`
//           fixed top-0 left-0 h-full z-30 flex flex-col
//           bg-slate-900 text-white shadow-2xl
//           transition-all duration-300 ease-in-out
//           ${sidebarOpen ? "w-56" : "w-0 overflow-hidden"}
//           lg:relative lg:z-auto lg:flex lg:shrink-0
//           ${sidebarOpen ? "lg:w-56" : "lg:w-14"}
//         `}
//         style={{ minHeight: "100vh" }}
//       >
//         {/* Sidebar Header */}
//         <div className="flex items-center justify-between px-3 py-3 border-b border-slate-700 shrink-0">
//           {sidebarOpen && (
//             <span className="text-base font-bold tracking-wide text-white whitespace-nowrap">NextGen ERP</span>
//           )}
//           <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="p-1.5 rounded-lg hover:bg-slate-700 transition-colors text-gray-300 hover:text-white shrink-0"
//           >
//             {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
//           </button>
//         </div>

//         {/* Nav Items - scrollable */}
//         <nav className="flex-1 overflow-y-auto py-2" style={{ scrollbarWidth: "none" }}>
//           {modules.map((module, idx) => (
//             <div key={idx}>
//               {/* Module Button */}
//               <button
//                 onClick={() => handleModuleClick(module.name)}
//                 className={`
//                   w-full flex items-center px-3 py-2 text-left
//                   transition-colors duration-150 group
//                   ${activeModule === module.name
//                     ? "bg-blue-600 text-white"
//                     : "text-gray-300 hover:bg-slate-800 hover:text-white"}
//                 `}
//               >
//                 <span className="text-base shrink-0 w-6 text-center">{module.icon}</span>
//                 {sidebarOpen && (
//                   <>
//                     <span className="ml-2.5 text-xs font-medium flex-1 whitespace-nowrap">{module.name}</span>
//                     <ChevronRight
//                       className={`w-3 h-3 transition-transform duration-200 ${activeModule === module.name ? "rotate-90" : ""}`}
//                     />
//                   </>
//                 )}
//               </button>

//               {/* Submenu */}
//               {activeModule === module.name && sidebarOpen && (
//                 <div className="bg-slate-950 border-l-2 border-blue-500 ml-4">
//                   {module.items.map((item, i) => (
//                     <button
//                       key={i}
//                       className="w-full text-left px-4 py-1.5 text-[11px] text-gray-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
//                     >
//                       {item}
//                     </button>
//                   ))}
//                 </div>
//               )}

//               {/* Tooltip for collapsed sidebar */}
//               {!sidebarOpen && activeModule === module.name && (
//                 <div
//                   className="fixed left-14 bg-slate-800 text-gray-100 rounded-md shadow-xl min-w-44 py-1 border border-slate-700"
//                   style={{ zIndex: 9999, marginTop: `-${(modules.indexOf(module) + 1) * 36}px` }}
//                 >
//                   {module.items.map((item, i) => (
//                     <button
//                       key={i}
//                       className="block w-full text-left px-3 py-1.5 text-[11px] hover:bg-slate-700 hover:text-blue-400"
//                     >
//                       {item}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>

//         {/* User / Company Info at sidebar bottom */}
//         {sidebarOpen && (
//           <div className="shrink-0 border-t border-slate-700 px-3 py-3 space-y-2">
//             <div className="flex items-center space-x-2">
//               <Building2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
//               <span className="text-xs font-semibold text-white truncate">{companyName}</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <User className="w-3.5 h-3.5 text-green-400 shrink-0" />
//               <span className="text-xs text-gray-300 truncate">{loggedUser}</span>
//             </div>
//             <div className="border-t border-slate-700 pt-2 mt-1">
//               <div className="flex items-center space-x-1.5 mb-0.5">
//                 <Calendar className="w-3 h-3 text-orange-400 shrink-0" />
//                 <span className="text-[10px] text-gray-400">{formatDate(currentTime)}</span>
//               </div>
//               <div className="text-sm font-bold text-white tabular-nums tracking-wide">{formatTime(currentTime)}</div>
//             </div>
//           </div>
//         )}
//       </aside>

//       {/* MAIN AREA */}
//       <div className="flex-1 flex flex-col min-w-0">

//         {/* Top Header Bar */}
//         <header className="bg-white shadow-sm border-b border-gray-200 h-12 flex items-center px-4 justify-between shrink-0">
//           {/* Hamburger for mobile */}
//           <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100 text-gray-600"
//           >
//             <Menu className="w-5 h-5" />
//           </button>

//           <div className="flex items-center space-x-2">
//             <span className="text-sm font-semibold text-slate-700">Welcome, {loggedUser}</span>
//           </div>

//           <div className="flex items-center space-x-3 text-xs text-gray-500">
//             <span className="hidden sm:block">{formatDate(currentTime)}</span>
//             <span className="font-bold text-slate-800 tabular-nums">{formatTime(currentTime)}</span>
//           </div>
//         </header>

//         {/* Content + Right sidebar */}
//         <main className="flex-1 flex overflow-hidden">
//           {/* Page content */}
//           <div className="flex-1 p-6 overflow-auto">
//             <div className="max-w-4xl">
//               <h1 className="text-2xl font-bold text-slate-800 mb-1">Dashboard</h1>
//               <p className="text-sm text-gray-500 mb-6">Welcome to NextGen ERP — All in One Solution</p>

//               {/* Info cards */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {[
//                   { label: "Company", value: companyName, color: "bg-blue-50 border-blue-200", icon: "🏢" },
//                   { label: "Logged In As", value: loggedUser, color: "bg-green-50 border-green-200", icon: "👤" },
//                   { label: "Modules", value: `${modules.length} Active`, color: "bg-purple-50 border-purple-200", icon: "📦" },
//                 ].map((card, i) => (
//                   <div key={i} className={`rounded-xl border p-4 ${card.color}`}>
//                     <div className="text-2xl mb-2">{card.icon}</div>
//                     <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{card.label}</div>
//                     <div className="text-base font-bold text-slate-800 mt-0.5">{card.value}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right App Launcher */}
//           <div className="shrink-0 hidden md:flex flex-col p-3 space-y-3 bg-white border-l border-gray-200">
//             {[
//               { icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z", color: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700" },
//               { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", color: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700" },
//               { icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z", color: "from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700" },
//               { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", color: "from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700" },
//               { icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z", color: "from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700" },
//               { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z", color: "from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800" },
//             ].map((btn, i) => (
//               <button
//                 key={i}
//                 className={`w-10 h-10 bg-linear-to-br ${btn.color} rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200`}
//               >
//                 <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={btn.icon} />
//                 </svg>
//               </button>
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default MainStart;


// import { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Search, Bell, ChevronRight, Building2, Calendar,
//   Menu, X, Settings, LogOut, UserCircle, Plus, Clock,
//   LayoutDashboard, Package, DollarSign, BarChart2, Shield,
//   Briefcase, Wrench, Users, Rocket, HelpCircle, Megaphone,
//   BookOpen, Home, TrendingUp, AlertCircle, CheckCircle2,
//   Star, ArrowUpRight, Zap, FileText, Hash
// } from "lucide-react";
// const MODULE_ICON_MAP = {
//   System: Settings, Company: Building2, Masters: BookOpen,
//   Inventory: Package, Accounts: DollarSign, Reports: BarChart2,
//   Administration: Shield, Management: Briefcase, Tools: Wrench,
//   EMS: Users, Projects: Rocket, Help: HelpCircle,
//   DashBoard: LayoutDashboard, Promotions: Megaphone,
// };

// const MODULE_GROUPS = [
//   { label: "Core", color: "text-blue-500", modules: ["DashBoard", "Company", "Masters"] },
//   { label: "Operations", color: "text-emerald-500", modules: ["Inventory", "Projects", "Management", "EMS"] },
//   { label: "Finance", color: "text-amber-500", modules: ["Accounts", "Reports", "Promotions"] },
//   { label: "System", color: "text-slate-400", modules: ["System", "Administration", "Tools", "Help"] },
// ];

// const MODULE_BADGES = {
//   Accounts: { count: 5, color: "bg-amber-500" },
//   EMS: { count: 2, color: "bg-emerald-500" },
//   Help: { count: 3, color: "bg-rose-500" },
//   Inventory: { count: 8, color: "bg-blue-500" },
// };

// // const ALL_MODULES = [
// //   { name: "System", items: [{ label: "User Management", path: "/users" }, "Roles & Permissions", "System Settings", "Audit Logs", "Integrations"] },
// //   { name: "Company", items: ["Company Profile", "Departments", "Locations", "Business Units", "Compliance"] },
// //   { name: "Masters", items: ["Product Master", "Customer Master", "Vendor Master", "Service Master", "Asset Master"] },
// //   { name: "Inventory", items: ["Stock Management", "Purchase Orders", "Suppliers", "Product Catalog", "Warehouses"] },
// //   { name: "Accounts", items: ["Accounts Payable", "Accounts Receivable", "General Ledger", "Reports", "Tax Management"] },
// //   { name: "Reports", items: ["Financial Reports", "Operational Reports", "Custom Reports", "Scheduled Reports", "Report Builder"] },
// //   { name: "Administration", items: ["User Management", "Roles & Permissions", "System Settings", "Audit Logs", "Integrations"] },
// //   { name: "Management", items: ["Project Management", "Task Management", "Resource Allocation", "Time Tracking", "Collaboration Tools"] },
// //   { name: "Tools", items: ["Document Management", "File Sharing", "Calendar Integration", "Email Templates", "Workflow Builder"] },
// //   { name: "EMS", items: ["Employee Master", "Employee Holiday", "Attendance", "Leave Management", "Payroll"] },
// //   { name: "Projects", items: ["Project Dashboard", "Task Management", "Resource Allocation", "Time Tracking", "Collaboration Tools"] },
// //   { name: "Help", items: ["Documentation", "Support Tickets", "Live Chat", "Community Forums", "Contact Us"] },
// //   { name: "DashBoard", items: ["Sales Dashboard", "Financial Dashboard", "Operational Dashboard", "Custom Dashboard", "Analytics"] },
// //   { name: "Promotions", items: ["Current Promotions", "Upcoming Promotions", "Promotion History", "Create Promotion", "Promotion Analytics"] },
// // ];
// const ALL_MODULES = [
//   {
//     name: "System",
//     items: [
//       { label: "User Management", path: "/user" },
//       { label: "Roles & Permissions", path: "/roles-permissions" },
//       { label: "System Settings", path: "/system-settings" },
//       { label: "Audit Logs", path: "/audit-logs" },
//       { label: "Integrations", path: "/integrations" },
//     ],
//   },
//   {
//     name: "Company",
//     items: [
//       { label: "Company Profile", path: "/company-profile" },
//       { label: "Departments", path: "/departments" },
//       { label: "Locations", path: "/locations" },
//       { label: "Business Units", path: "/business-units" },
//       { label: "Compliance", path: "/compliance" },
//     ],
//   },
//   {
//     name: "Masters",
//     items: [
//       { label: "Product Master", path: "/products" },
//       { label: "Customer Master", path: "/customers" },
//       { label: "Vendor Master", path: "/vendors" },
//       { label: "Service Master", path: "/services" },
//       { label: "Asset Master", path: "/assets" },
//     ],
//   },
//   {
//     name: "Inventory",
//     items: [
//       { label: "Stock Management", path: "/stock-management" },
//       { label: "Purchase Orders", path: "/purchase-orders" },
//       { label: "Suppliers", path: "/suppliers" },
//       { label: "Product Catalog", path: "/product-catalog" },
//       { label: "Warehouses", path: "/warehouses" },
//     ],
//   },
//   {
//     name: "Accounts",
//     items: [
//       { label: "Accounts Payable", path: "/accounts-payable" },
//       { label: "Accounts Receivable", path: "/accounts-receivable" },
//       { label: "General Ledger", path: "/general-ledger" },
//       { label: "Reports", path: "/accounts-reports" },
//       { label: "Tax Management", path: "/tax-management" },
//     ],
//   },
//   {
//     name: "Reports",
//     items: [
//       { label: "Financial Reports", path: "/financial-reports" },
//       { label: "Operational Reports", path: "/operational-reports" },
//       { label: "Custom Reports", path: "/custom-reports" },
//       { label: "Scheduled Reports", path: "/scheduled-reports" },
//       { label: "Report Builder", path: "/report-builder" },
//     ],
//   },
//   {
//     name: "Administration",
//     items: [
//       { label: "User Management", path: "/users" },
//       { label: "Roles & Permissions", path: "/admin-roles" },
//       { label: "System Settings", path: "/admin-settings" },
//       { label: "Audit Logs", path: "/admin-audit-logs" },
//       { label: "Integrations", path: "/admin-integrations" },
//     ],
//   },
//   {
//     name: "Management",
//     items: [
//       { label: "Project Management", path: "/project-management" },
//       { label: "Task Management", path: "/task-management" },
//       { label: "Resource Allocation", path: "/resource-allocation" },
//       { label: "Time Tracking", path: "/time-tracking" },
//       { label: "Collaboration Tools", path: "/collaboration-tools" },
//     ],
//   },
//   {
//     name: "Tools",
//     items: [
//       { label: "Document Management", path: "/documents" },
//       { label: "File Sharing", path: "/file-sharing" },
//       { label: "Calendar Integration", path: "/calendar" },
//       { label: "Email Templates", path: "/email-templates" },
//       { label: "Workflow Builder", path: "/workflow-builder" },
//     ],
//   },
//   {
//     name: "EMS",
//     items: [
//       { label: "Employee Master", path: "/employees" },
//       { label: "Employee Holiday", path: "/employee-holidays" },
//       { label: "Attendance", path: "/attendance" },
//       { label: "Leave Management", path: "/leave-management" },
//       { label: "Payroll", path: "/payroll" },
//     ],
//   },
//   {
//     name: "Projects",
//     items: [
//       { label: "Project Dashboard", path: "/project-dashboard" },
//       { label: "Task Management", path: "/project-tasks" },
//       { label: "Resource Allocation", path: "/project-resources" },
//       { label: "Time Tracking", path: "/project-time-tracking" },
//       { label: "Collaboration Tools", path: "/project-collaboration" },
//     ],
//   },
//   {
//     name: "Help",
//     items: [
//       { label: "Documentation", path: "/documentation" },
//       { label: "Support Tickets", path: "/support-tickets" },
//       { label: "Live Chat", path: "/live-chat" },
//       { label: "Community Forums", path: "/community-forums" },
//       { label: "Contact Us", path: "/contact-us" },
//     ],
//   },
//   {
//     name: "DashBoard",
//     items: [
//       { label: "Sales Dashboard", path: "/dashboard-sales" },
//       { label: "Financial Dashboard", path: "/dashboard-financial" },
//       { label: "Operational Dashboard", path: "/dashboard-operational" },
//       { label: "Custom Dashboard", path: "/dashboard-custom" },
//       { label: "Analytics", path: "/dashboard-analytics" },
//     ],
//   },
//   {
//     name: "Promotions",
//     items: [
//       { label: "Current Promotions", path: "/promotions/current" },
//       { label: "Upcoming Promotions", path: "/promotions/upcoming" },
//       { label: "Promotion History", path: "/promotions/history" },
//       { label: "Create Promotion", path: "/promotions/create" },
//       { label: "Promotion Analytics", path: "/promotions/analytics" },
//     ],
//   },
// ];
// const QUICK_STATS = [
//   { label: "Total Revenue", value: "₹ 24.5L", change: "+12.4%", up: true, icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
//   { label: "Active Projects", value: "38", change: "+3 this week", up: true, icon: Rocket, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
//   { label: "Employees", value: "142", change: "4 on leave", up: false, icon: Users, color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100" },
//   { label: "Pending Tasks", value: "17", change: "-5 today", up: true, icon: CheckCircle2, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
// ];

// const RECENT_ACTIVITY = [
//   { icon: FileText, text: "Invoice #INV-2841 raised", time: "2m ago", color: "text-blue-500" },
//   { icon: Users, text: "New employee Priya Nair onboarded", time: "18m ago", color: "text-emerald-500" },
//   { icon: AlertCircle, text: "Low stock alert: SKU-XR901", time: "45m ago", color: "text-amber-500" },
//   { icon: CheckCircle2, text: "Project Nexus milestone completed", time: "1h ago", color: "text-violet-500" },
//   { icon: DollarSign, text: "Payment received ₹1.2L from Infosys", time: "2h ago", color: "text-emerald-500" },
//   { icon: Star, text: "Q3 Financial Report approved", time: "3h ago", color: "text-amber-500" },
// ];

// const APP_TOOLS = [
//   { label: "Calculator", color: "bg-blue-500", path: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
//   { label: "Calendar", color: "bg-violet-500", path: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
//   { label: "Notes", color: "bg-amber-500", path: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" },
//   { label: "Clock", color: "bg-emerald-500", path: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
//   { label: "Chat", color: "bg-rose-500", path: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
//   { label: "Settings", color: "bg-slate-500", path: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" },
// ];

// export default function MainStart() {
//   const [activeModule, setActiveModule] = useState(null);
//     const navigate = useNavigate();   
//   const [activePage, setActivePage] = useState({ module: "DashBoard", item: null });
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   const [hoveredTool, setHoveredTool] = useState(null);
//   const notifRef = useRef(null);
//   const profileRef = useRef(null);

//   const companyName = "Calicut - Branch";
//   const loggedUser = "Tanwood Leather Pvt. Ltd.";
//   const userInitials = "JD";

//   useEffect(() => {
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const handler = (e) => {
//       if (notifRef.current && !notifRef.current.contains(e.target)) setShowNotifications(false);
//       if (profileRef.current && !profileRef.current.contains(e.target)) setShowProfile(false);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//    const MiniSparkline = ({ color = "#C9A84C" }) => {
//          const pts = [28,52,38,68,55,80,70,92];
//          const mx = Math.max(...pts); const W=72,H=32;
//          const d = pts.map((v,i)=>`${(i/(pts.length-1))*W},${H-(v/mx)*H}`).join(" ");
//          return (
//            <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} fill="none">
//              <defs><linearGradient id={`sg${color.replace("#","")}`} x1="0" y1="0" x2="0" y2="1">
//                <stop offset="0%" stopColor={color} stopOpacity="0.25"/>
//                <stop offset="100%" stopColor={color} stopOpacity="0"/>
//              </linearGradient></defs>
//              <polygon points={`0,${H} ${d} ${W},${H}`} fill={`url(#sg${color.replace("#","")})`}/>
//              <polyline points={d} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//            </svg>
//          );
//        };

       

//   const formatDate = (d) => d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
//   const formatTime = (d) => d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });

//   const filteredModules = searchQuery.trim()
//   ? ALL_MODULES.filter(
//       (m) =>
//         m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         m.items.some((i) =>
//           i.label.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//     )
//   : null;

//   const breadcrumb = [activePage.module, ...(activePage.item ? [activePage.item] : [])];

//   const sidebarW = sidebarOpen ? "240px" : "0px";

//   return (
//     <div className="flex h-screen bg-gray-50 overflow-hidden" style={{ fontFamily: "'DM Sans', Nunito, sans-serif" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Serif+Display&display=swap');
//         .scrollbar-hide::-webkit-scrollbar{display:none}
//         .scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}
//         .submenu-enter{animation:smIn .18s ease}
//         @keyframes smIn{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}
//         .fade-in{animation:fdIn .2s ease}
//         @keyframes fdIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
//         .stat-hover{transition:box-shadow .2s,transform .2s}
//         .stat-hover:hover{box-shadow:0 8px 24px rgba(0,0,0,.09);transform:translateY(-2px)}
//         .nav-btn{transition:background .12s,color .12s}
//         .sidebar-anim{transition:width .25s cubic-bezier(.4,0,.2,1)}
//         .tool-btn{transition:transform .15s,opacity .15s}
//         .tool-btn:hover{transform:scale(1.1);opacity:.9}
//       `}</style>

//       {/* Mobile overlay */}
//       {sidebarOpen && (
//         <div className="fixed inset-0 bg-black/25 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
//       )}

//       {/*  SIDEBAR */}
//       <aside
//         className="sidebar-anim fixed lg:relative top-0 left-0 h-full z-30 flex flex-col bg-white border-r border-gray-100 shadow-sm overflow-hidden"
//         style={{ width: sidebarW, minHeight: "100vh" }}
//       >
//         {/* Logo */}
//         <div className="flex items-center h-14 px-4 border-b border-gray-100 shrink-0 gap-3">
//           <div className="w-8 h-8 rounded-lg  flex items-center justify-center shrink-0 ">
//           </div>
//            <span className="text-base font-bold tracking-wide text-blue-950 whitespace-nowrap">NextGen ERP</span>
//         </div>

//         {/* Search */}
//         <div className="px-3 py-2.5 border-b border-gray-100 shrink-0">
//           <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 focus-within:border-blue-400 focus-within:bg-white transition-colors">
//             <Search className="w-3.5 h-3.5 text-gray-400 shrink-0" />
//             <input
//               className="bg-transparent text-xs text-gray-700 placeholder-gray-400 outline-none w-full"
//               placeholder="Search modules & pages..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             {searchQuery && (
//               <button onClick={() => setSearchQuery("")}><X className="w-3 h-3 text-gray-400 hover:text-gray-600" /></button>
//             )}
//           </div>
//         </div>

//         {/* Nav */}
//         <nav className="flex-1 overflow-y-auto py-2 scrollbar-hide">
//           {/* Search results */}
//           {filteredModules && (
//             <div className="px-2 pb-2">
//               <p className="text-[10px] text-gray-400 uppercase tracking-wider px-2 mb-1 font-semibold">Results</p>
//               {filteredModules.length === 0 && <p className="text-xs text-gray-400 px-2 py-1">No matches</p>}
//               {filteredModules.map((m) => {
//                 const Icon = MODULE_ICON_MAP[m.name] || Hash;
//                 return (
//                   <div key={m.name}>
//                     <button
//                       onClick={() => { setActivePage({ module: m.name, item: null }); setSearchQuery(""); setActiveModule(m.name); }}
//                       className="nav-btn w-full flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-700 text-left"
//                     >
//                       <Icon className="w-3.5 h-3.5 text-blue-500 shrink-0" />
//                       <span className="text-xs font-semibold text-gray-700">{m.name}</span>
//                     </button>
//                     {m.items.filter(i => i.label.toLowerCase().includes(searchQuery.toLowerCase())).map(item => (
//                       <button
//                         key={item.label}
//                         onClick={() => {
//                            setActivePage({ module: m.name,item: item.label }); 
//                            navigate(item.path);   // ✅ NAVIGATION
//                            setSearchQuery(""); }}
//                         className="nav-btn w-full flex items-center gap-2.5 pl-8 pr-2 py-1 rounded-lg hover:bg-gray-50 text-left"
//                       >
//                         <span className="text-xs text-gray-500 hover:text-blue-600">{item}</span>
//                       </button>
//                     ))}
//                   </div>
//                 );
//               })}
//             </div>
//           )}

//           {/* Grouped modules */}
//           {!filteredModules && MODULE_GROUPS.map((group) => (
//             <div key={group.label} className="mb-1">
//               <p className={`text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 ${group.color}`}>
//                 {group.label}
//               </p>
//               {group.modules.map((modName) => {
//                 const mod = ALL_MODULES.find((m) => m.name === modName);
//                 if (!mod) return null;
//                 const Icon = MODULE_ICON_MAP[modName] || Hash;
//                 const badge = MODULE_BADGES[modName];
//                 const isActive = activePage.module === modName;
//                 const isOpen = activeModule === modName;

//                 return (
//                   <div key={modName}>
//                     <button
//                       onClick={() => {
//                         setActiveModule(isOpen ? null : modName);
//                         setActivePage({ module: modName, item: null });
//                       }}
//                       className={`nav-btn flex items-center gap-2.5 mx-2 px-2 py-2 rounded-xl text-left w-[calc(100%-16px)]
//                         ${isActive ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
//                     >
//                       <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-blue-600" : "text-gray-400"}`} />
//                       <span className="flex-1 text-xs font-medium whitespace-nowrap">{modName}</span>
//                       {badge && (
//                         <span className={`text-[10px] font-bold text-white px-1.5 py-0.5 rounded-full ${badge.color}`}>
//                           {badge.count}
//                         </span>
//                       )}
//                       <ChevronRight className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`} />
//                     </button>

//                     {isOpen && (
//                       <div className="submenu-enter ml-5 mr-2 mb-1 border-l-2 border-blue-100 pl-3">
//                         {mod.items.map((item) => {
//                           const isItemActive = activePage.module === modName && activePage.item === item.label;
//                           return (
//                             <button
//                               key={item.label}
//                               onClick={() => {
//                                 setActivePage({ module: modName, item: item.label });
//                                 navigate(item.path);
//                                 setSearchQuery("");
//                               }}
//                               className={`nav-btn w-full text-left px-2 py-1.5 rounded-lg text-[11px]
//                                 ${isItemActive ? "text-blue-600 font-semibold bg-blue-50" : "text-gray-500 hover:text-blue-600 hover:bg-blue-50"}`}
//                             >
//                               {item.label}
//                             </button>
//                           );
//                         })}
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           ))}
//         </nav>

//         {/* User card */}
//         <div className="shrink-0 border-t border-gray-100 p-3">
//           <div className="flex items-center gap-2.5 bg-gray-50 rounded-xl p-2.5">
//             {/* <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow">
//               {userInitials}
//             </div> */}
//             <div className="flex-1 min-w-0">
//               <p className="text-xs font-semibold text-gray-800 truncate">{loggedUser}</p>
//               <p className="text-[10px] text-gray-400 truncate">{companyName}</p>
//             </div>
//             <button className="p-1 hover:bg-gray-200 rounded-lg transition-colors">
//               <Settings className="w-3.5 h-3.5 text-gray-400" />
//             </button>
//           </div>
//         </div>
//       </aside>

//       {/* ══ MAIN ═════════════════════════════════════════════ */}
//       <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

//         {/* Header */}
//         <header className="h-14 bg-white border-b border-gray-100 flex items-center px-4 gap-3 shrink-0 shadow-sm">
//           <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors shrink-0"
//           >
//             <Menu className="w-4 h-4" />
//           </button>

//           {/* Breadcrumb */}
//           <div className="hidden sm:flex items-center gap-1 text-xs text-gray-400 flex-1 min-w-0">
//             <Home className="w-3.5 h-3.5 shrink-0 text-gray-400" />
//             {breadcrumb.map((crumb, i) => (
//               <span key={i} className="flex items-center gap-1">
//                 <ChevronRight className="w-3 h-3" />
//                 <span className={i === breadcrumb.length - 1 ? "font-semibold text-gray-700" : ""}>{crumb}</span>
//               </span>
//             ))}
//           </div>
//           <div className="flex-1 sm:hidden" />

//           {/* Right actions */}
//           <div className="flex items-center gap-2 shrink-0">
//             <div className="hidden md:flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
//               <Clock className="w-3.5 h-3.5 text-gray-400" />
//               <span className="text-xs text-gray-600 tabular-nums font-medium">{formatTime(currentTime)}</span>
//             </div>

//             <button className="hidden sm:flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors shadow-sm">
//               <Plus className="w-3.5 h-3.5" />
//               <span>New</span>
//             </button>

//             {/* Notifications */}
//             <div className="relative" ref={notifRef}>
//               <button
//                 onClick={() => { setShowNotifications(!showNotifications); setShowProfile(false); }}
//                 className="relative p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
//               >
//                 <Bell className="w-4 h-4" />
//                 <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
//               </button>
//               {showNotifications && (
//                 <div className="fade-in absolute right-0 top-11 w-72 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
//                   <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
//                     <span className="text-sm font-semibold text-gray-800">Notifications</span>
//                     <span className="text-[10px] bg-rose-100 text-rose-600 font-bold px-2 py-0.5 rounded-full">8 new</span>
//                   </div>
//                   <div className="max-h-60 overflow-y-auto scrollbar-hide">
//                     {RECENT_ACTIVITY.map((a, i) => {
//                       const Icon = a.icon;
//                       return (
//                         <div key={i} className="flex items-start gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0 transition-colors">
//                           <div className="mt-0.5 p-1.5 rounded-lg bg-gray-100 shrink-0">
//                             <Icon className={`w-3.5 h-3.5 ${a.color}`} />
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <p className="text-xs text-gray-700 leading-tight">{a.text}</p>
//                             <p className="text-[10px] text-gray-400 mt-0.5">{a.time}</p>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                   <div className="px-4 py-2 border-t border-gray-100">
//                     <button className="text-xs text-blue-600 font-medium hover:underline">View all</button>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Profile */}
//             <div className="relative" ref={profileRef}>
//               <button
//                 onClick={() => { setShowProfile(!showProfile); setShowNotifications(false); }}
//                 className="flex items-center gap-2 p-1 pr-2 rounded-lg hover:bg-gray-100 transition-colors"
//               >
//                 <div className="w-7 h-7 rounded-full bg-linear-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-[11px] font-bold shadow">
//                   {userInitials}
//                 </div>
//                 <span className="hidden md:block text-xs font-medium text-gray-700">{loggedUser.split(" ")[0]}</span>
//               </button>
//               {showProfile && (
//                 <div className="fade-in absolute right-0 top-11 w-52 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
//                   <div className="px-4 py-3 border-b border-gray-100">
//                     <p className="text-sm font-semibold text-gray-800">{loggedUser}</p>
//                     <p className="text-xs text-gray-400">{companyName} · Admin</p>
//                   </div>
//                   {[
//                     { Icon: UserCircle, label: "My Profile" },
//                     { Icon: Settings, label: "Preferences" },
//                     { Icon: HelpCircle, label: "Help & Support" },
//                   ].map(({ Icon, label }) => (
//                     <button key={label} className="nav-btn w-full flex items-center gap-2.5 px-4 py-2 text-xs text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
//                       <Icon className="w-3.5 h-3.5" />
//                       {label}
//                     </button>
//                   ))}
//                   <div className="border-t border-gray-100">
//                     <button className="nav-btn w-full flex items-center gap-2.5 px-4 py-2 text-xs text-rose-500 hover:bg-rose-50 transition-colors">
//                       <LogOut className="w-3.5 h-3.5" />
//                       Sign out
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </header>

//         {/* Content area */}
//         <div className="flex-1 flex overflow-hidden">
//          <main className="flex-1 overflow-y-auto scrollbar-hide p-6 bg-[#f7f8fc]">

//   {/* Page Heading */}
//   <div className="mb-6 fade-in">
//     <div className="flex items-center justify-between">
//       <div>
//         <h1
//           className="text-2xl font-bold text-gray-900 tracking-tight"
//           style={{ fontFamily:"segoe ui variable, sans-serif" }}
//         >
//           {activePage.item || activePage.module}
//         </h1>
//         <p className="text-xs text-gray-400 mt-1 flex items-center gap-1.5">
//           <Calendar className="w-3 h-3" />
//           {formatDate(currentTime)} · {companyName}
//         </p>
//       </div>
//       <div className="flex items-center gap-2">
//         <button className="text-xs font-medium bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg shadow-sm hover:border-blue-300 hover:text-blue-600 transition-all">
//           Export
//         </button>
//         <button className="text-xs font-semibold bg-blue-600 text-white px-3 py-1.5 rounded-lg shadow-sm hover:bg-blue-700 transition-all">
//           + New
//         </button>
//       </div>
//     </div>
//   </div>

//   {/* Stats */}
//   <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
//     {QUICK_STATS.map((s, i) => {
//       const Icon = s.icon;
//       return (
//         <div
//           key={i}
//           className={`relative overflow-hidden rounded-2xl border ${s.border} ${s.bg} p-4 cursor-pointer fade-in group hover:shadow-md transition-all`}
//           style={{ animationDelay: `${i * 0.06}s` }}
//         >
//           {/* Decorative circle */}
//           <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-10 bg-current pointer-events-none" />

//           <div className="flex items-start justify-between mb-3">
//             <div className="p-2 rounded-xl bg-white shadow-sm group-hover:scale-110 transition-transform">
//               <Icon className={`w-4 h-4 ${s.color}`} />
//             </div>
//             <span
//               className={`text-[10px] font-semibold flex items-center gap-0.5 px-1.5 py-0.5 rounded-full ${
//                 s.up
//                   ? "text-emerald-700 bg-emerald-100"
//                   : "text-gray-500 bg-gray-100"
//               }`}
//             >
//               {s.up && <ArrowUpRight className="w-3 h-3" />}
//               {s.change}
//             </span>
//           </div>
//           <p className="text-2xl font-extrabold text-gray-900 tracking-tight">{s.value}</p>
//           <p className="text-[11px] text-gray-500 mt-0.5 font-medium">{s.label}</p>
//         </div>
//       );
//     })}
//   </div>

//   {/* Bottom Grid */}
//   <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

//     {/* Recent Activity */}
//     <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
//       <div className="px-5 py-3.5 border-b border-gray-100 flex items-center justify-between bg-linear-to-r from-white to-gray-50">
//         <div className="flex items-center gap-2">
//           <div className="w-1.5 h-4 rounded-full bg-blue-500" />
//           <span className="text-sm font-semibold text-gray-800">Recent Activity</span>
//         </div>
//         <button className="text-[11px] text-blue-600 hover:underline font-semibold bg-blue-50 px-2.5 py-1 rounded-lg transition-colors hover:bg-blue-100">
//           View all
//         </button>
//       </div>

//       <div className="divide-y divide-gray-50">
//         {RECENT_ACTIVITY.map((a, i) => {
//           const Icon = a.icon;
//           return (
//             <div
//               key={i}
//               className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50/40 cursor-pointer transition-colors group"
//             >
//               <div className={`p-2 rounded-xl shrink-0 group-hover:scale-105 transition-transform ${a.bgColor || "bg-gray-100"}`}>
//                 <Icon className={`w-3.5 h-3.5 ${a.color}`} />
//               </div>
//               <p className="flex-1 text-xs text-gray-700 leading-relaxed">{a.text}</p>
//               <span className="text-[10px] text-gray-400 shrink-0 bg-gray-50 px-2 py-0.5 rounded-full">
//                 {a.time}
//               </span>
//             </div>
//           );
//         })}
//       </div>
//     </div>

  
// {/* =====================================================
//     TOP REVENUE DEPARTMENTS — Senior UI
//     Drop-in for your right column (replaces Quick Access)
//     Self-contained data — swap DEPT_DATA for your API
//     ===================================================== */}

// {(() => {
//   const DEPT_DATA = [
//     { name: "Sales",      revenue: 284500, change: +18.4, color: "#3B6FE8" },
//     { name: "Operations", revenue: 196200, change: +9.1,  color: "#0EA5A0" },
//     { name: "Retail",     revenue: 158900, change: +5.7,  color: "#8B5CF6" },
//     { name: "Logistics",  revenue: 112400, change: -2.3,  color: "#F59E0B" },
//     { name: "Marketing",  revenue:  89700, change: +12.1, color: "#EC4899" },
//     { name: "Finance",    revenue:  74300, change: -1.1,  color: "#10B981" },
//   ].sort((a, b) => b.revenue - a.revenue);

//   const total   = DEPT_DATA.reduce((s, d) => s + d.revenue, 0);
//   const maxRev  = DEPT_DATA[0].revenue;
//   const fmt     = (n) => n >= 1e6 ? `$${(n/1e6).toFixed(2)}M` : `$${(n/1e3).toFixed(1)}K`;
//   const fmtFull = (n) => `$${n.toLocaleString()}`;

//   /* Initials avatar */
//   const initials = (name) => name.slice(0, 2).toUpperCase();

//   return (
//     <>
//       <style>{`
//         @keyframes barGrow {
//           from { width: 0%; }
//           to   { width: var(--w); }
//         }
//         .dept-bar {
//           height: 100%;
//           border-radius: 99px;
//           animation: barGrow 0.9s cubic-bezier(0.22,1,0.36,1) forwards;
//           animation-delay: var(--delay);
//           width: 0%;
//         }
//         .dept-row {
//           transition: background 0.18s ease, transform 0.18s ease;
//           border-radius: 14px;
//           cursor: default;
//         }
//         .dept-row:hover {
//           background: rgba(59,111,232,0.04) !important;
//           transform: translateX(2px);
//         }
//         .dept-rank-1 { background: linear-gradient(135deg,#3B6FE8,#6B9FFF); color:#fff; }
//         .dept-rank-other { background: #F1F4FD; color: #8896B3; }
//       `}</style>

//       <div style={{
//         background: "#FFFFFF",
//         borderRadius: 20,
//         border: "1px solid #ECEEF5",
//         overflow: "hidden",
//         boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(59,111,232,0.06)",
//       }}>

//         {/* ── Header ── */}
//         <div style={{
//           padding: "18px 20px 14px",
//           background: "linear-gradient(135deg, #F8F9FF 0%, #EEF2FF 100%)",
//           borderBottom: "1px solid #E8ECFA",
//           display: "flex", alignItems: "center", justifyContent: "space-between",
//         }}>
//           <div>
//             <p style={{
//               fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
//               textTransform: "uppercase", color: "#A0ABCC", marginBottom: 4,
//             }}>
//               This Quarter
//             </p>
//             <h3 style={{
//               fontSize: 16, fontWeight: 800, color: "#0F1729",
//               letterSpacing: "-0.02em", margin: 0,
//               fontFamily: "'DM Sans', sans-serif",
//             }}>
//               Revenue by Department
//             </h3>
//           </div>
//           {/* Live badge */}
//           <div style={{
//             display: "flex", alignItems: "center", gap: 5,
//             background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)",
//             borderRadius: 20, padding: "4px 10px",
//           }}>
//             <span style={{
//               width: 6, height: 6, borderRadius: "50%",
//               background: "#10B981", display: "inline-block",
//               boxShadow: "0 0 0 3px rgba(16,185,129,0.2)",
//               animation: "pulse 2s infinite",
//             }} />
//             <span style={{ fontSize: 10, fontWeight: 600, color: "#10B981", letterSpacing: "0.05em" }}>
//               LIVE
//             </span>
//           </div>
//         </div>

//         {/* ── Department Rows ── */}
//         <div style={{ padding: "10px 12px 6px" }}>
//           {DEPT_DATA.map((dept, i) => {
//             const pct     = Math.round((dept.revenue / maxRev) * 100);
//             const share   = ((dept.revenue / total) * 100).toFixed(1);
//             const isUp    = dept.change >= 0;
//             const isFirst = i === 0;

//             return (
//               <div
//                 key={dept.name}
//                 className="dept-row"
//                 style={{ padding: "10px 8px", marginBottom: 2 }}
//               >
//                 {/* Row top: avatar + name + value + pill */}
//                 <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>

//                   {/* Rank / Avatar */}
//                   <div
//                     className={isFirst ? "dept-rank-1" : "dept-rank-other"}
//                     style={{
//                       width: 32, height: 32, borderRadius: 10, flexShrink: 0,
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                       fontSize: 10, fontWeight: 800, letterSpacing: "0.02em",
//                     }}
//                   >
//                     {isFirst ? initials(dept.name) : `#${i + 1}`}
//                   </div>

//                   {/* Name + share */}
//                   <div style={{ flex: 1, minWidth: 0 }}>
//                     <p style={{
//                       fontSize: 12, fontWeight: 700, color: "#1A2340",
//                       margin: 0, letterSpacing: "0.01em",
//                       whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
//                     }}>
//                       {dept.name}
//                     </p>
//                     <p style={{ fontSize: 10, color: "#A0ABCC", margin: 0, marginTop: 1 }}>
//                       {share}% of total
//                     </p>
//                   </div>

//                   {/* Revenue */}
//                   <span style={{
//                     fontSize: 13, fontWeight: 800, color: "#0F1729",
//                     letterSpacing: "-0.02em", flexShrink: 0,
//                   }}>
//                     {fmt(dept.revenue)}
//                   </span>

//                   {/* Change pill */}
//                   <span style={{
//                     fontSize: 10, fontWeight: 700, flexShrink: 0,
//                     padding: "3px 7px", borderRadius: 20,
//                     background: isUp ? "rgba(16,185,129,0.09)" : "rgba(239,68,68,0.09)",
//                     color: isUp ? "#059669" : "#DC2626",
//                     letterSpacing: "0.02em",
//                   }}>
//                     {isUp ? "+" : ""}{dept.change}%
//                   </span>
//                 </div>

//                 {/* Progress bar track */}
//                 <div style={{
//                   height: 5, borderRadius: 99,
//                   background: "#F1F4FD", overflow: "hidden",
//                 }}>
//                   <div
//                     className="dept-bar"
//                     style={{
//                       "--w": `${pct}%`,
//                       "--delay": `${0.1 + i * 0.08}s`,
//                       background: `linear-gradient(90deg, ${dept.color}99, ${dept.color})`,
//                     }}
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* ── Footer Summary ── */}
//         <div style={{
//           margin: "6px 12px 12px",
//           borderRadius: 14,
//           background: "linear-gradient(135deg, #F0F4FF, #EBF0FF)",
//           border: "1px solid #DDE4F8",
//           padding: "12px 14px",
//           display: "flex", alignItems: "center", gap: 0,
//         }}>
//           {/* Total */}
//           <div style={{ flex: 1 }}>
//             <p style={{ fontSize: 10, color: "#A0ABCC", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3 }}>
//               Total
//             </p>
//             <p style={{ fontSize: 18, fontWeight: 900, color: "#0F1729", letterSpacing: "-0.03em", margin: 0 }}>
//               {fmt(total)}
//             </p>
//           </div>

//           {/* Divider */}
//           <div style={{ width: 1, height: 36, background: "#D4DCEF", margin: "0 16px" }} />

//           {/* Leader */}
//           <div style={{ flex: 1 }}>
//             <p style={{ fontSize: 10, color: "#A0ABCC", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3 }}>
//               Leader
//             </p>
//             <p style={{ fontSize: 13, fontWeight: 800, color: "#3B6FE8", letterSpacing: "-0.01em", margin: 0 }}>
//               {DEPT_DATA[0].name}
//               <span style={{ fontSize: 10, color: "#A0ABCC", fontWeight: 500, marginLeft: 5 }}>
//                 {Math.round((DEPT_DATA[0].revenue / total) * 100)}% share
//               </span>
//             </p>
//           </div>

//           {/* Arrow button */}
//           <div style={{
//             width: 30, height: 30, borderRadius: 9,
//             background: "#3B6FE8",
//             display: "flex", alignItems: "center", justifyContent: "center",
//             cursor: "pointer", flexShrink: 0,
//             boxShadow: "0 4px 12px rgba(59,111,232,0.3)",
//           }}>
//             <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
//               <path d="M5 3.5L8.5 6.5L5 9.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </div>
//         </div>

//       </div>
//     </>
//   );
// })()}
//   </div>
// </main>

         
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useState, useEffect } from "react";
// import { useNavigate,Outlet } from "react-router-dom";
// import {
//   Search, ChevronRight, Building2,
//   X, Settings,
//   LayoutDashboard, Package, DollarSign, BarChart2, Shield,
//   Briefcase, Wrench, Users, Rocket, HelpCircle, Megaphone,
//   BookOpen, Hash
// } from "lucide-react";

// const MODULE_ICON_MAP = {
//   System: Settings, Company: Building2, Masters: BookOpen,
//   Inventory: Package, Accounts: DollarSign, Reports: BarChart2,
//   Administration: Shield, Management: Briefcase, Tools: Wrench,
//   EMS: Users, Projects: Rocket, Help: HelpCircle,
//   DashBoard: LayoutDashboard, Promotions: Megaphone,
// };

// const MODULE_GROUPS = [
//   { label: "Core", color: "text-blue-500", modules: ["DashBoard", "Company", "Masters"] },
//   { label: "Operations", color: "text-emerald-500", modules: ["Inventory", "Projects", "Management", "EMS"] },
//   { label: "Finance", color: "text-amber-500", modules: ["Accounts", "Reports", "Promotions"] },
//   { label: "System", color: "text-slate-400", modules: ["System", "Administration", "Tools", "Help"] },
// ];

// const MODULE_BADGES = {
//   Accounts: { count: 5, color: "bg-amber-500" },
//   EMS: { count: 2, color: "bg-emerald-500" },
//   Help: { count: 3, color: "bg-rose-500" },
//   Inventory: { count: 8, color: "bg-blue-500" },
// };

// const ALL_MODULES = [
//   {
//     name: "System",
//     items: [
//       { label: "User Management", path: "/user" },
//       { label: "Roles & Permissions", path: "/roles-permissions" },
//       { label: "System Settings", path: "/system-settings" },
//       { label: "Audit Logs", path: "/audit-logs" },
//       { label: "Integrations", path: "/integrations" },
//     ],
//   },
//   {
//     name: "Company",
//     items: [
//       { label: "Company Profile", path: "/main/company-profile" },
//       { label: "Departments", path: "/departments" },
//       { label: "Locations", path: "/locations" },
//       { label: "Business Units", path: "/business-units" },
//       { label: "Compliance", path: "/compliance" },
//     ],
//   },
//   {
//     name: "Masters",
//     items: [
//       { label: "Product Master", path: "/products" },
//       { label: "Customer Master", path: "/customers" },
//       { label: "Vendor Master", path: "/vendors" },
//       { label: "Service Master", path: "/services" },
//       { label: "Asset Master", path: "/assets" },
//     ],
//   },
//   {
//     name: "Inventory",
//     items: [
//       { label: "Stock Management", path: "/stock-management" },
//       { label: "Purchase Orders", path: "/purchase-orders" },
//       { label: "Suppliers", path: "/suppliers" },
//       { label: "Product Catalog", path: "/product-catalog" },
//       { label: "Warehouses", path: "/warehouses" },
//     ],
//   },
//   {
//     name: "Accounts",
//     items: [
//       { label: "Accounts Payable", path: "/accounts-payable" },
//       { label: "Accounts Receivable", path: "/accounts-receivable" },
//       { label: "General Ledger", path: "/general-ledger" },
//       { label: "Reports", path: "/accounts-reports" },
//       { label: "Tax Management", path: "/tax-management" },
//     ],
//   },
//   {
//     name: "Reports",
//     items: [
//       { label: "Financial Reports", path: "/financial-reports" },
//       { label: "Operational Reports", path: "/operational-reports" },
//       { label: "Custom Reports", path: "/custom-reports" },
//       { label: "Scheduled Reports", path: "/scheduled-reports" },
//       { label: "Report Builder", path: "/report-builder" },
//     ],
//   },
//   {
//     name: "Administration",
//     items: [
//       { label: "User Management", path: "/users" },
//       { label: "Roles & Permissions", path: "/admin-roles" },
//       { label: "System Settings", path: "/admin-settings" },
//       { label: "Audit Logs", path: "/admin-audit-logs" },
//       { label: "Integrations", path: "/admin-integrations" },
//     ],
//   },
//   {
//     name: "Management",
//     items: [
//       { label: "Project Management", path: "/project-management" },
//       { label: "Task Management", path: "/task-management" },
//       { label: "Resource Allocation", path: "/resource-allocation" },
//       { label: "Time Tracking", path: "/time-tracking" },
//       { label: "Collaboration Tools", path: "/collaboration-tools" },
//     ],
//   },
//   {
//     name: "Tools",
//     items: [
//       { label: "Document Management", path: "/documents" },
//       { label: "File Sharing", path: "/file-sharing" },
//       { label: "Calendar Integration", path: "/calendar" },
//       { label: "Email Templates", path: "/email-templates" },
//       { label: "Workflow Builder", path: "/workflow-builder" },
//     ],
//   },
//   {
//     name: "EMS",
//     items: [
//       { label: "Employee Master", path: "/employees" },
//       { label: "Employee Holiday", path: "/employee-holidays" },
//       { label: "Attendance", path: "/attendance" },
//       { label: "Leave Management", path: "/leave-management" },
//       { label: "Payroll", path: "/payroll" },
//     ],
//   },
//   {
//     name: "Projects",
//     items: [
//       { label: "Project Dashboard", path: "/project-dashboard" },
//       { label: "Task Management", path: "/project-tasks" },
//       { label: "Resource Allocation", path: "/project-resources" },
//       { label: "Time Tracking", path: "/project-time-tracking" },
//       { label: "Collaboration Tools", path: "/project-collaboration" },
//     ],
//   },
//   {
//     name: "Help",
//     items: [
//       { label: "Documentation", path: "/documentation" },
//       { label: "Support Tickets", path: "/support-tickets" },
//       { label: "Live Chat", path: "/live-chat" },
//       { label: "Community Forums", path: "/community-forums" },
//       { label: "Contact Us", path: "/contact-us" },
//     ],
//   },
//   {
//     name: "DashBoard",
//     items: [
//       { label: "Sales Dashboard", path: "/dashboard-sales" },
//       { label: "Financial Dashboard", path: "/dashboard-financial" },
//       { label: "Operational Dashboard", path: "/dashboard-operational" },
//       { label: "Custom Dashboard", path: "/dashboard-custom" },
//       { label: "Analytics", path: "/dashboard-analytics" },
//     ],
//   },
//   {
//     name: "Promotions",
//     items: [
//       { label: "Current Promotions", path: "/promotions/current" },
//       { label: "Upcoming Promotions", path: "/promotions/upcoming" },
//       { label: "Promotion History", path: "/promotions/history" },
//       { label: "Create Promotion", path: "/promotions/create" },
//       { label: "Promotion Analytics", path: "/promotions/analytics" },
//     ],
//   },
// ];

// export default function MainStart() {
//   const [activeModule, setActiveModule] = useState(null);
//   const navigate = useNavigate();
//   const [activePage, setActivePage] = useState({ module: "DashBoard", item: null });
//   const [searchQuery, setSearchQuery] = useState("");

//   const companyName = "Calicut - Branch";
//   const loggedUser = "Tanwood Leather Pvt. Ltd.";

//   const filteredModules = searchQuery.trim()
//     ? ALL_MODULES.filter(
//         (m) =>
//           m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           m.items.some((i) =>
//             i.label.toLowerCase().includes(searchQuery.toLowerCase())
//           )
//       )
//     : null;

//   return (
//   <div style={{ display: "flex", fontFamily: "'DM Sans', Nunito, sans-serif" }}>
//           <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
//         .scrollbar-hide::-webkit-scrollbar{display:none}
//         .scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}
//         .submenu-enter{animation:smIn .18s ease}
//         @keyframes smIn{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}
//         .nav-btn{transition:background .12s,color .12s}
//       `}</style>

//       {/* SIDEBAR — static, always visible on all screens */}
//       <aside
//         style={{ width: 240 }}
//         className="h-screen flex flex-col bg-white border-r border-gray-100 shadow-sm overflow-hidden"      >
//         {/* Logo */}
//         <div className="flex items-center h-14 px-4 border-b border-gray-100 shrink-0 gap-3">
//           <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" />
//           <span className="text-base font-bold tracking-wide text-blue-950 whitespace-nowrap">NextGen ERP</span>
//         </div>

//         {/* Search */}
//         <div className="px-3 py-2.5 border-b border-gray-100 shrink-0">
//           <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 focus-within:border-blue-400 focus-within:bg-white transition-colors">
//             <Search className="w-3.5 h-3.5 text-gray-400 shrink-0" />
//             <input
//               className="bg-transparent text-xs text-gray-700 placeholder-gray-400 outline-none w-full"
//               placeholder="Search modules & pages..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             {searchQuery && (
//               <button onClick={() => setSearchQuery("")}>
//                 <X className="w-3 h-3 text-gray-400 hover:text-gray-600" />
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Nav */}
//         <nav className="flex-1 overflow-y-auto py-2 scrollbar-hide">
//           {/* Search results */}
//           {filteredModules && (
//             <div className="px-2 pb-2">
//               <p className="text-[10px] text-gray-400 uppercase tracking-wider px-2 mb-1 font-semibold">Results</p>
//               {filteredModules.length === 0 && <p className="text-xs text-gray-400 px-2 py-1">No matches</p>}
//               {filteredModules.map((m) => {
//                 const Icon = MODULE_ICON_MAP[m.name] || Hash;
//                 return (
//                   <div key={m.name}>
//                     <button
//                       onClick={() => {
//                         setActivePage({ module: m.name, item: null });
//                         setSearchQuery("");
//                         setActiveModule(m.name);
//                       }}
//                       className="nav-btn w-full flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-700 text-left"
//                     >
//                       <Icon className="w-3.5 h-3.5 text-blue-500 shrink-0" />
//                       <span className="text-xs font-semibold text-gray-700">{m.name}</span>
//                     </button>
//                     {m.items
//                       .filter((i) => i.label.toLowerCase().includes(searchQuery.toLowerCase()))
//                       .map((item) => (
//                         <button
//                           key={item.label}
//                           onClick={() => {
//                             setActivePage({ module: m.name, item: item.label });
//                             navigate(item.path);
//                             setSearchQuery("");
//                           }}
//                           className="nav-btn w-full flex items-center gap-2.5 pl-8 pr-2 py-1 rounded-lg hover:bg-gray-50 text-left"
//                         >
//                           <span className="text-xs text-gray-500 hover:text-blue-600">{item.label}</span>
//                         </button>
//                       ))}
//                   </div>
//                 );
//               })}
//             </div>
//           )}

//           {/* Grouped modules */}
//           {!filteredModules &&
//             MODULE_GROUPS.map((group) => (
//               <div key={group.label} className="mb-1">
//                 <p className={`text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 ${group.color}`}>
//                   {group.label}
//                 </p>
//                 {group.modules.map((modName) => {
//                   const mod = ALL_MODULES.find((m) => m.name === modName);
//                   if (!mod) return null;
//                   const Icon = MODULE_ICON_MAP[modName] || Hash;
//                   const badge = MODULE_BADGES[modName];
//                   const isActive = activePage.module === modName;
//                   const isOpen = activeModule === modName;

//                   return (
//                     <div key={modName}>
//                       <button
//                         onClick={() => {
//                           setActiveModule(isOpen ? null : modName);
//                           setActivePage({ module: modName, item: null });
//                         }}
//                         className={`nav-btn flex items-center gap-2.5 mx-2 px-2 py-2 rounded-xl text-left w-[calc(100%-16px)]
//                           ${isActive ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
//                       >
//                         <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-blue-600" : "text-gray-400"}`} />
//                         <span className="flex-1 text-xs font-medium whitespace-nowrap">{modName}</span>
//                         {badge && (
//                           <span className={`text-[10px] font-bold text-white px-1.5 py-0.5 rounded-full ${badge.color}`}>
//                             {badge.count}
//                           </span>
//                         )}
//                         <ChevronRight
//                           className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
//                         />
//                       </button>

//                       {isOpen && (
//                         <div className="submenu-enter ml-5 mr-2 mb-1 border-l-2 border-blue-100 pl-3">
//                           {mod.items.map((item) => {
//                             const isItemActive =
//                               activePage.module === modName && activePage.item === item.label;
//                             return (
//                               <button
//                                 key={item.label}
//                                 onClick={() => {
//                                   setActivePage({ module: modName, item: item.label });
//                                   navigate(item.path);
//                                   setSearchQuery("");
//                                 }}
//                                 className={`nav-btn w-full text-left px-2 py-1.5 rounded-lg text-[11px]
//                                   ${isItemActive
//                                     ? "text-blue-600 font-semibold bg-blue-50"
//                                     : "text-gray-500 hover:text-blue-600 hover:bg-blue-50"
//                                   }`}
//                               >
//                                 {item.label}
//                               </button>
//                             );
//                           })}
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             ))}
//         </nav>

//         {/* User card */}
//         <div className="shrink-0 border-t border-gray-100 p-3">
//           <div className="flex items-center gap-2.5 bg-gray-50 rounded-xl p-2.5">
//             <div className="flex-1 min-w-0">
//               <p className="text-xs font-semibold text-gray-800 truncate">{loggedUser}</p>
//               <p className="text-[10px] text-gray-400 truncate">{companyName}</p>
//             </div>
//             <button className="p-1 hover:bg-gray-200 rounded-lg transition-colors">
//               <Settings className="w-3.5 h-3.5 text-gray-400" />
//             </button>
//           </div>
//         </div>
//       </aside>
//      <main className="flex-1 min-h-screen bg-gray-50 p-5">
//   <Outlet />
// </main>
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import {
  Search, ChevronRight, Building2,
  X, Settings,
  LayoutDashboard, Package, DollarSign, BarChart2, Shield,
  Briefcase, Wrench, Users, Rocket, HelpCircle, Megaphone,
  BookOpen, Hash
} from "lucide-react";

const MODULE_ICON_MAP = {
  System: Settings, Company: Building2, Masters: BookOpen,
  Inventory: Package, Accounts: DollarSign, Reports: BarChart2,
  Administration: Shield, Management: Briefcase, Tools: Wrench,
  EMS: Users, Projects: Rocket, Help: HelpCircle,
  DashBoard: LayoutDashboard, Promotions: Megaphone,
};

const MODULE_GROUPS = [
  { label: "Core", color: "text-blue-500", modules: ["DashBoard", "Company", "Masters"] },
  { label: "Operations", color: "text-emerald-500", modules: ["Inventory", "Projects", "Management", "EMS"] },
  { label: "Finance", color: "text-amber-500", modules: ["Accounts", "Reports", "Promotions"] },
  { label: "System", color: "text-slate-400", modules: ["System", "Administration", "Tools", "Help"] },
];

const MODULE_BADGES = {
  Accounts: { count: 5, color: "bg-amber-500" },
  EMS: { count: 2, color: "bg-emerald-500" },
  Help: { count: 3, color: "bg-rose-500" },
  Inventory: { count: 8, color: "bg-blue-500" },
};

const ALL_MODULES = [
  {
    name: "System",
    items: [
      { label: "User Management", path: "/main/user" },
      { label: "Roles & Permissions", path: "/main/roles-permissions" },
      { label: "System Settings", path: "/main/system-settings" },
      { label: "Audit Logs", path: "/main/audit-logs" },
      { label: "Integrations", path: "/main/integrations" },
    ],
  },
  {
    name: "Company",
    items: [
      { label: "Company Profile", path: "/main/company-profile" },
      { label: "Departments", path: "/main/departments" },
      { label: "Locations", path: "/main/locations" },
      { label: "Business Units", path: "/main/business-units" },
      { label: "Compliance", path: "/main/compliance" },
    ],
  },
  {
    name: "Masters",
    items: [
      { label: "Product Master", path: "/main/products" },
      { label: "Customer Master", path: "/main/customers" },
      { label: "Vendor Master", path: "/main/vendors" },
      { label: "Service Master", path: "/main/services" },
      { label: "Asset Master", path: "/main/assets" },
    ],
  },
  {
    name: "Inventory",
    items: [
      { label: "Stock Management", path: "/main/stock-management" },
      { label: "Purchase Orders", path: "/main/purchase-orders" },
      { label: "Suppliers", path: "/main/suppliers" },
      { label: "Product Catalog", path: "/main/product-catalog" },
      { label: "Warehouses", path: "/main/warehouses" },
    ],
  },
  {
    name: "Accounts",
    items: [
      { label: "Accounts Payable", path: "/main/accounts-payable" },
      { label: "Accounts Receivable", path: "/main/accounts-receivable" },
      { label: "General Ledger", path: "/main/general-ledger" },
      { label: "Reports", path: "/main/accounts-reports" },
      { label: "Tax Management", path: "/main/tax-management" },
    ],
  },
  {
    name: "Reports",
    items: [
      { label: "Financial Reports", path: "/main/financial-reports" },
      { label: "Operational Reports", path: "/main/operational-reports" },
      { label: "Custom Reports", path: "/main/custom-reports" },
      { label: "Scheduled Reports", path: "/main/scheduled-reports" },
      { label: "Report Builder", path: "/main/report-builder" },
    ],
  },
  {
    name: "Administration",
    items: [
      { label: "User Management", path: "/main/users" },
      { label: "Roles & Permissions", path: "/main/admin-roles" },
      { label: "System Settings", path: "/main/admin-settings" },
      { label: "Audit Logs", path: "/main/admin-audit-logs" },
      { label: "Integrations", path: "/main/admin-integrations" },
    ],
  },
  {
    name: "Management",
    items: [
      { label: "Project Management", path: "/main/project-management" },
      { label: "Task Management", path: "/main/task-management" },
      { label: "Resource Allocation", path: "/main/resource-allocation" },
      { label: "Time Tracking", path: "/main/time-tracking" },
      { label: "Collaboration Tools", path: "/main/collaboration-tools" },
    ],
  },
  {
    name: "Tools",
    items: [
      { label: "Document Management", path: "/main/documents" },
      { label: "File Sharing", path: "/main/file-sharing" },
      { label: "Calendar Integration", path: "/main/calendar" },
      { label: "Email Templates", path: "/main/email-templates" },
      { label: "Workflow Builder", path: "/main/workflow-builder" },
    ],
  },
  {
    name: "EMS",
    items: [
      { label: "Employee Master", path: "/main/employees" },
      { label: "Employee Holiday", path: "/main/employee-holidays" },
      { label: "Attendance", path: "/main/attendance" },
      { label: "Leave Management", path: "/main/leave-management" },
      { label: "Payroll", path: "/main/payroll" },
    ],
  },
  {
    name: "Projects",
    items: [
      { label: "Project Dashboard", path: "/main/project-dashboard" },
      { label: "Task Management", path: "/main/project-tasks" },
      { label: "Resource Allocation", path: "/main/project-resources" },
      { label: "Time Tracking", path: "/main/project-time-tracking" },
      { label: "Collaboration Tools", path: "/main/project-collaboration" },
    ],
  },
  {
    name: "Help",
    items: [
      { label: "Documentation", path: "/main/documentation" },
      { label: "Support Tickets", path: "/main/support-tickets" },
      { label: "Live Chat", path: "/main/live-chat" },
      { label: "Community Forums", path: "/main/community-forums" },
      { label: "Contact Us", path: "/main/contact-us" },
    ],
  },
  {
    name: "DashBoard",
    items: [
      { label: "Sales Dashboard", path: "/main/dashboard-sales" },
      { label: "Financial Dashboard", path: "/main/dashboard-financial" },
      { label: "Operational Dashboard", path: "/main/dashboard-operational" },
      { label: "Custom Dashboard", path: "/main/dashboard-custom" },
      { label: "Analytics", path: "/main/dashboard-analytics" },
    ],
  },
  {
    name: "Promotions",
    items: [
      { label: "Current Promotions", path: "/main/promotions/current" },
      { label: "Upcoming Promotions", path: "/main/promotions/upcoming" },
      { label: "Promotion History", path: "/main/promotions/history" },
      { label: "Create Promotion", path: "/main/promotions/create" },
      { label: "Promotion Analytics", path: "/main/promotions/analytics" },
    ],
  },
];

export default function MainStart() {
  const [activeModule, setActiveModule] = useState(null);
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState({ module: "DashBoard", item: null });
  const [searchQuery, setSearchQuery] = useState("");

  const companyName = "Calicut - Branch";
  const loggedUser = "Tanwood Leather Pvt. Ltd.";

  const filteredModules = searchQuery.trim()
    ? ALL_MODULES.filter(
        (m) =>
          m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.items.some((i) =>
            i.label.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : null;

  return (
    <div style={{ fontFamily: "'DM Sans', Nunito, sans-serif" }}>

      {/* SIDEBAR — fixed, never re-mounts */}
      <aside
        style={{
          width: 240,
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 30,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          borderRight: "1px solid #f3f4f6",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          overflowY: "hidden",
        }}
      >
        {/* Logo */}
        <div style={{
          display: "flex", alignItems: "center", height: 56,
          padding: "0 16px", borderBottom: "1px solid #f3f4f6",
          flexShrink: 0, gap: 12,
        }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, flexShrink: 0 }} />
          <span style={{ fontSize: 15, fontWeight: 700, color: "#172554", whiteSpace: "nowrap", letterSpacing: "0.01em" }}>
            NextGen ERP
          </span>
        </div>

        {/* Search */}
        <div style={{ padding: "10px 12px", borderBottom: "1px solid #f3f4f6", flexShrink: 0 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            backgroundColor: "#f9fafb", border: "1px solid #e5e7eb",
            borderRadius: 8, padding: "6px 12px",
          }}>
            <Search style={{ width: 14, height: 14, color: "#9ca3af", flexShrink: 0 }} />
            <input
              style={{
                background: "transparent", fontSize: 12, color: "#374151",
                outline: "none", width: "100%", border: "none",
              }}
              placeholder="Search modules & pages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                <X style={{ width: 12, height: 12, color: "#9ca3af" }} />
              </button>
            )}
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, overflowY: "auto", padding: "8px 0" }} className="scrollbar-hide">

          {/* Search results */}
          {filteredModules && (
            <div style={{ padding: "0 8px 8px" }}>
              <p style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", padding: "0 8px", marginBottom: 4, fontWeight: 600 }}>
                Results
              </p>
              {filteredModules.length === 0 && (
                <p style={{ fontSize: 12, color: "#9ca3af", padding: "4px 8px" }}>No matches</p>
              )}
              {filteredModules.map((m) => {
                const Icon = MODULE_ICON_MAP[m.name] || Hash;
                return (
                  <div key={m.name}>
                    <button
                      onClick={() => { setActivePage({ module: m.name, item: null }); setSearchQuery(""); setActiveModule(m.name); }}
                      style={{
                        width: "100%", display: "flex", alignItems: "center", gap: 10,
                        padding: "6px 8px", borderRadius: 8, border: "none", background: "none",
                        cursor: "pointer", textAlign: "left",
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = "#eff6ff"}
                      onMouseLeave={e => e.currentTarget.style.background = "none"}
                    >
                      <Icon style={{ width: 14, height: 14, color: "#3b82f6", flexShrink: 0 }} />
                      <span style={{ fontSize: 12, fontWeight: 600, color: "#374151" }}>{m.name}</span>
                    </button>
                    {m.items
                      .filter((i) => i.label.toLowerCase().includes(searchQuery.toLowerCase()))
                      .map((item) => (
                        <button
                          key={item.label}
                          onClick={() => { setActivePage({ module: m.name, item: item.label }); navigate(item.path); setSearchQuery(""); }}
                          style={{
                            width: "100%", display: "flex", alignItems: "center",
                            paddingLeft: 32, paddingRight: 8, paddingTop: 4, paddingBottom: 4,
                            borderRadius: 8, border: "none", background: "none",
                            cursor: "pointer", textAlign: "left",
                          }}
                          onMouseEnter={e => e.currentTarget.style.background = "#f9fafb"}
                          onMouseLeave={e => e.currentTarget.style.background = "none"}
                        >
                          <span style={{ fontSize: 12, color: "#6b7280" }}>{item.label}</span>
                        </button>
                      ))}
                  </div>
                );
              })}
            </div>
          )}

          {/* Grouped modules */}
          {!filteredModules &&
            MODULE_GROUPS.map((group) => (
              <div key={group.label} style={{ marginBottom: 4 }}>
                <p className={`text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 ${group.color}`}>
                  {group.label}
                </p>
                {group.modules.map((modName) => {
                  const mod = ALL_MODULES.find((m) => m.name === modName);
                  if (!mod) return null;
                  const Icon = MODULE_ICON_MAP[modName] || Hash;
                  const badge = MODULE_BADGES[modName];
                  const isActive = activePage.module === modName;
                  const isOpen = activeModule === modName;

                  return (
                    <div key={modName}>
                      <button
                        onClick={() => { setActiveModule(isOpen ? null : modName); setActivePage({ module: modName, item: null }); }}
                        style={{
                          display: "flex", alignItems: "center", gap: 10,
                          margin: "0 8px", padding: "8px",
                          borderRadius: 12, border: "none", cursor: "pointer",
                          textAlign: "left", width: "calc(100% - 16px)",
                          background: isActive ? "#eff6ff" : "none",
                          color: isActive ? "#1d4ed8" : "#4b5563",
                          transition: "background 0.12s, color 0.12s",
                        }}
                        onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = "#f9fafb"; }}
                        onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "none"; }}
                      >
                        <Icon style={{ width: 16, height: 16, flexShrink: 0, color: isActive ? "#2563eb" : "#9ca3af" }} />
                        <span style={{ flex: 1, fontSize: 12, fontWeight: 500, whiteSpace: "nowrap" }}>{modName}</span>
                        {badge && (
                          <span style={{
                            fontSize: 10, fontWeight: 700, color: "#fff",
                            padding: "2px 6px", borderRadius: 999,
                          }} className={badge.color}>
                            {badge.count}
                          </span>
                        )}
                        <ChevronRight style={{
                          width: 12, height: 12, color: "#9ca3af",
                          transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                          transition: "transform 0.2s",
                        }} />
                      </button>

                      {isOpen && (
                        <div style={{
                          marginLeft: 20, marginRight: 8, marginBottom: 4,
                          borderLeft: "2px solid #dbeafe", paddingLeft: 12,
                          animation: "smIn 0.18s ease",
                        }}>
                          {mod.items.map((item) => {
                            const isItemActive = activePage.module === modName && activePage.item === item.label;
                            return (
                              <button
                                key={item.label}
                                onClick={() => { setActivePage({ module: modName, item: item.label }); navigate(item.path); setSearchQuery(""); }}
                                style={{
                                  width: "100%", textAlign: "left", padding: "6px 8px",
                                  borderRadius: 8, border: "none", cursor: "pointer",
                                  fontSize: 11,
                                  background: isItemActive ? "#eff6ff" : "none",
                                  color: isItemActive ? "#2563eb" : "#6b7280",
                                  fontWeight: isItemActive ? 600 : 400,
                                  transition: "background 0.12s, color 0.12s",
                                }}
                                onMouseEnter={e => { if (!isItemActive) { e.currentTarget.style.background = "#eff6ff"; e.currentTarget.style.color = "#2563eb"; } }}
                                onMouseLeave={e => { if (!isItemActive) { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#6b7280"; } }}
                              >
                                {item.label}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
        </nav>

        {/* User card */}
        <div style={{ flexShrink: 0, borderTop: "1px solid #f3f4f6", padding: 12 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            backgroundColor: "#f9fafb", borderRadius: 12, padding: 10,
          }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: "#1f2937", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {loggedUser}
              </p>
              <p style={{ fontSize: 10, color: "#9ca3af", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {companyName}
              </p>
            </div>
            <button style={{ padding: 4, borderRadius: 8, border: "none", background: "none", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.background = "#e5e7eb"}
              onMouseLeave={e => e.currentTarget.style.background = "none"}
            >
              <Settings style={{ width: 14, height: 14, color: "#9ca3af" }} />
            </button>
          </div>
        </div>
      </aside>

      {/* Page content — offset by fixed sidebar width */}
      <main style={{ marginLeft: 240, minHeight: "100vh" }} className="bg-gray-50 p-5">
        <Outlet />
      </main>
    </div>
  );
}