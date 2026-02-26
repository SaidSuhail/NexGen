
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Building2, User, Calendar } from "lucide-react";
function MainStart() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const buttonRefs = useRef({});

  const modules = [
    {
      name: "System",
      items: [
        "User Management",
        "Roles & Permissions",
        "System Settings",
        "Audit Logs",
        "Integrations",
      ],
    },
    {
      name: "Company",
      items: [
        "Company Profile",
        "Departments",
        "Locations",
        "Business Units",
        "Compliance",
      ],
    },
    {
      name: "Masters",
      items: [
        "Product Master",
        "Customer Master",
        "Vendor Master",
        "Service Master",
        "Asset Master",
      ],
    },
    {
      name: "Inventory",
      items: [
        "Stock Management",
        "Purchase Orders",
        "Suppliers",
        "Product Catalog",
        "Warehouses",
      ],
    },
    {
      name: "Accounts",
      items: [
        "Accounts Payable",
        "Accounts Receivable",
        "General Ledger",
        "Reports",
        "Tax Management",
      ],
    },
    {
      name: "Reports",
      items: [
        "Financial Reports",
        "Operational Reports",
        "Custom Reports",
        "Scheduled Reports",
        "Report Builder",
      ],
    },
    {
      name: "Administration",
      items: [
        "User Management",
        "Roles & Permissions",
        "System Settings",
        "Audit Logs",
        "Integrations",
      ],
    },
    {
      name: "Management",
      items: [
        "Project Management",
        "Task Management",
        "Resource Allocation",
        "Time Tracking",
        "Collaboration Tools",
      ],
    },
    {
      name: "Tools",
      items: [
        "Document Management",
        "File Sharing",
        "Calendar Integration",
        "Email Templates",
        "Workflow Builder",
      ],
    },
    {
      name: "EMS",
      items: [
        "Employee Master",
        "Employee Holiday",
        "Attendance",
        "Leave Management",
        "Payroll",
      ],
    },
    {
      name: "Projects",
      items: [
        "Project Dashboard",
        "Task Management",
        "Resource Allocation",
        "Time Tracking",
        "Collaboration Tools",
      ],
    },
    {
      name: "Help",
      items: [
        "Documentation",
        "Support Tickets",
        "Live Chat",
        "Community Forums",
        "Contact Us",
      ],
    },
    {
      name: "DashBoard",
      items: [
        "Sales Dashboard",
        "Financial Dashboard",
        "Operational Dashboard",
        "Custom Dashboard",
        "Analytics",
      ],
    },
    {
      name: "Promotions",
      items: [
        "Current Promotions",
        "Upcoming Promotions",
        "Promotion History",
        "Create Promotion",
        "Promotion Analytics",
      ],
    },
  ];

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleDropdownToggle = (moduleName) => {
    if (activeDropdown === moduleName) {
      setActiveDropdown(null);
    } else {
      const button = buttonRefs.current[moduleName];
      if (button) {
        const rect = button.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom + 4,
          left: rect.left,
        });
      }
      setActiveDropdown(moduleName);
    }
  };

  // Format date and time
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  // You can replace these with actual logged-in user data
  const companyName = "Tanwood";
  const loggedUser = "Jeorge David";

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-slate-900 text-white shadow-sm sticky top-0 z-50">
        <div className="w-full px-3 sm:px-5 lg:px-7">
          <div className="flex items-center h-10">
            {/* Brand */}
            <span className="text-sm font-bold mr-6 shrink-0">NextGen</span>

            {/* NAV SCROLL AREA */}
            <div
              className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="shrink-0"
                  onMouseEnter={() => handleDropdownToggle(module.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {/* MENU BUTTON */}
                  <button
                    ref={(el) => (buttonRefs.current[module.name] = el)}
                    className="flex items-center space-x-1 px-2 py-1
                               text-[11px] sm:text-xs
                               hover:bg-slate-800 rounded"
                  >
                    <span>{module.name}</span>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform ${
                        activeDropdown === module.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* DROPDOWN - Rendered outside navbar */}
      {activeDropdown && (
        <div
          className="fixed bg-slate-800 text-gray-100 rounded-md shadow-xl min-w-44 py-1 border border-slate-700"
          style={{
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
            zIndex: 9999,
          }}
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {modules
            .find((m) => m.name === activeDropdown)
            ?.items.map((item, i) => (
              <button
                key={i}
                className="block w-full text-left px-3 py-1.5 text-[11px] hover:bg-slate-700 hover:text-blue-400"
              >
                {item}
              </button>
            ))}
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex">
        {/* Main Content Area */}
        <div className="flex-1 mr-4">
          {/* Futuristic Header with Glow Effect */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>
            <div className="relative">
              <h2 className="text-3xl font-light text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 mb-2">
                Easy Access Area
              </h2>
              <p className="text-gray-500 text-sm flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                All systems operational •{" "}
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Neural Grid - Main Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Sales Counter - Holographic Style */}
            <div className="group relative bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/60 transition-all duration-500 cursor-pointer">
              {/* Animated Background Grid */}
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-blue-500/10 backdrop-blur-xl p-3 rounded-xl border border-blue-500/30 group-hover:bg-blue-500/20 transition-all">
                    <svg
                      className="w-8 h-8 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                 
                </div>

                <h3 className="text-white text-xl font-semibold mb-2 tracking-wide">
                  SALES COUNTER
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Point of Sale Terminal • Live Billing
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-1 bg-linear-to-r from-blue-500 to-transparent rounded-full"></div>
                    <span className="text-blue-400 text-xs font-mono">
                      LAUNCH
                    </span>
                  </div>
                  <svg
                    className="w-5 h-5 text-blue-400 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Purchase Invoice - Cyber Style */}
            <div className="group relative bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-emerald-500/20 hover:border-emerald-500/60 transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>
              </div>

              <div className="absolute -inset-1 bg-linear-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-emerald-500/10 backdrop-blur-xl p-3 rounded-xl border border-emerald-500/30 group-hover:bg-emerald-500/20 transition-all">
                    <svg
                      className="w-8 h-8 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                    </div>

                <h3 className="text-white text-xl font-semibold mb-2 tracking-wide">
                  PURCHASE INVOICE
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Procurement Entry • Vendor Bills
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-1 bg-linear-to-r from-emerald-500 to-transparent rounded-full"></div>
                    <span className="text-emerald-400 text-xs font-mono">
                      LAUNCH
                    </span>
                  </div>
                  <svg
                    className="w-5 h-5 text-emerald-400 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Sales Invoice - Neon Style */}
            <div className="group relative bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/60 transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>
              </div>

              <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-purple-500/10 backdrop-blur-xl p-3 rounded-xl border border-purple-500/30 group-hover:bg-purple-500/20 transition-all">
                    <svg
                      className="w-8 h-8 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"
                      />
                    </svg>
                  </div>
                 
                </div>

                <h3 className="text-white text-xl font-semibold mb-2 tracking-wide">
                  SALES INVOICE
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Revenue Generation • Client Billing
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-1 bg-linear-to-r from-purple-500 to-transparent rounded-full"></div>
                    <span className="text-purple-400 text-xs font-mono">
                      LAUNCH
                    </span>
                  </div>
                  <svg
                    className="w-5 h-5 text-purple-400 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Inventory Management */}
            <div className="group relative bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/60 transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>
              </div>

              <div className="absolute -inset-1 bg-linear-to-r from-amber-600 to-orange-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-amber-500/10 backdrop-blur-xl p-3 rounded-xl border border-amber-500/30 group-hover:bg-amber-500/20 transition-all">
                    <svg
                      className="w-8 h-8 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  
                </div>

                <h3 className="text-white text-xl font-semibold mb-2 tracking-wide">
                  INVENTORY MATRIX
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Stock Control • Warehouse Sync
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-1 bg-linear-to-r from-amber-500 to-transparent rounded-full"></div>
                    <span className="text-amber-400 text-xs font-mono">
                      LAUNCH
                    </span>
                  </div>
                  <svg
                    className="w-5 h-5 text-amber-400 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Accounts Portal */}
            <div className="group relative bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-rose-500/20 hover:border-rose-500/60 transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(244, 63, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(244, 63, 94, 0.1) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>
              </div>

              <div className="absolute -inset-1 bg-linear-to-r from-rose-600 to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-rose-500/10 backdrop-blur-xl p-3 rounded-xl border border-rose-500/30 group-hover:bg-rose-500/20 transition-all">
                    <svg
                      className="w-8 h-8 text-rose-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  
                </div>

                <h3 className="text-white text-xl font-semibold mb-2 tracking-wide">
                  FINANCE PORTAL
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Ledger System • Payment Gateway
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-1 bg-linear-to-r from-rose-500 to-transparent rounded-full"></div>
                    <span className="text-rose-400 text-xs font-mono">
                      LAUNCH
                    </span>
                  </div>
                  <svg
                    className="w-5 h-5 text-rose-400 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Analytics Hub */}
            <div className="group relative bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-indigo-500/20 hover:border-indigo-500/60 transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>
              </div>

              <div className="absolute -inset-1 bg-linear-to-r from-indigo-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-indigo-500/10 backdrop-blur-xl p-3 rounded-xl border border-indigo-500/30 group-hover:bg-indigo-500/20 transition-all">
                    <svg
                      className="w-8 h-8 text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                
                </div>

                <h3 className="text-white text-xl font-semibold mb-2 tracking-wide">
                  ANALYTICS HUB
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Intelligence Center • Data Insights
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-1 bg-linear-to-r from-indigo-500 to-transparent rounded-full"></div>
                    <span className="text-indigo-400 text-xs font-mono">
                      LAUNCH
                    </span>
                  </div>
                  <svg
                    className="w-5 h-5 text-indigo-400 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Access Terminal - Glassmorphism */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-gray-400 text-lg font-semibold tracking-wide flex items-center">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-3 animate-pulse"></span>
                QUICK ACCESS TERMINAL
              </h3>
              <span className="text-gray-400 text-xs font-mono">
                CTRL+SPACE
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* Customer DB */}
              <div className="group bg-linear-to-br from-white/5 to-white/0 hover:from-cyan-500/10 hover:to-cyan-500/5 border border-white/10 hover:border-cyan-500/30 rounded-xl p-4 cursor-pointer transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-cyan-500/10 p-3 rounded-lg mb-3 group-hover:bg-cyan-500/20 transition-all">
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-xs font-medium mb-1">
                    Customers
                  </span>
                  <span className="text-gray-500 text-[10px] font-mono">
                    DATABASE
                  </span>
                </div>
              </div>

              {/* Supplier Network */}
              <div className="group bg-linear-to-br from-white/5 to-white/0 hover:from-teal-500/10 hover:to-teal-500/5 border border-white/10 hover:border-teal-500/30 rounded-xl p-4 cursor-pointer transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-teal-500/10 p-3 rounded-lg mb-3 group-hover:bg-teal-500/20 transition-all">
                    <svg
                      className="w-5 h-5 text-teal-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-xs font-medium mb-1">
                    Suppliers
                  </span>
                  <span className="text-gray-500 text-[10px] font-mono">
                    NETWORK
                  </span>
                </div>
              </div>

              {/* Product Catalog */}
              <div className="group bg-linear-to-br from-white/5 to-white/0 hover:from-violet-500/10 hover:to-violet-500/5 border border-white/10 hover:border-violet-500/30 rounded-xl p-4 cursor-pointer transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-violet-500/10 p-3 rounded-lg mb-3 group-hover:bg-violet-500/20 transition-all">
                    <svg
                      className="w-5 h-5 text-violet-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-xs font-medium mb-1">
                    Products
                  </span>
                  <span className="text-gray-500 text-[10px] font-mono">
                    CATALOG
                  </span>
                </div>
              </div>

              {/* HR System */}
              <div className="group bg-linear-to-br from-white/5 to-white/0 hover:from-pink-500/10 hover:to-pink-500/5 border border-white/10 hover:border-pink-500/30 rounded-xl p-4 cursor-pointer transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-pink-500/10 p-3 rounded-lg mb-3 group-hover:bg-pink-500/20 transition-all">
                    <svg
                      className="w-5 h-5 text-pink-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-xs font-medium mb-1">
                    HR
                  </span>
                  <span className="text-gray-500 text-[10px] font-mono">
                    PORTAL
                  </span>
                </div>
              </div>

              {/* Payment Gateway */}
              <div className="group bg-linear-to-br from-white/5 to-white/0 hover:from-orange-500/10 hover:to-orange-500/5 border border-white/10 hover:border-orange-500/30 rounded-xl p-4 cursor-pointer transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-orange-500/10 p-3 rounded-lg mb-3 group-hover:bg-orange-500/20 transition-all">
                    <svg
                      className="w-5 h-5 text-orange-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-xs font-medium mb-1">
                    Payments
                  </span>
                  <span className="text-gray-500 text-[10px] font-mono">
                    GATEWAY
                  </span>
                </div>
              </div>

              {/* Settings */}
              <div className="group bg-linear-to-br from-white/5 to-white/0 hover:from-slate-500/10 hover:to-slate-500/5 border border-white/10 hover:border-slate-500/30 rounded-xl p-4 cursor-pointer transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-slate-500/10 p-3 rounded-lg mb-3 group-hover:bg-slate-500/20 transition-all">
                    <svg
                      className="w-5 h-5 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-xs font-medium mb-1">
                    Settings
                  </span>
                  <span className="text-gray-500 text-[10px] font-mono">
                    CONFIG
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Sidebar - App Launcher */}
        <div className="w-18 shrink-0 sm:-mr-16 lg:-mr-24 md:-mr-26">
          <div className="sticky top-42 bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700 p-4 ">
            {/* App Icons */}
            <div className="space-y-4">
              {/* Calculator */}
              {/* <button className="w-full aspect-square bg-linear-to-br from-blue-500 to-blue-600 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl hover:scale-105">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </button> */}
<button 
              onClick={() => setShowCalculator(true)}
              className="w-full aspect-square bg-linear-to-br from-blue-500 to-blue-600 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </button>

              {/* Calendar */}
              <button className="w-full aspect-square bg-linear-to-br from-purple-500 to-purple-600 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl hover:scale-105">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </button>

              {/* Notes */}
              <button className="w-full aspect-square bg-linear-to-br from-amber-500 to-amber-600 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl hover:scale-105">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>

              {/* Clock */}
              <button className="w-full aspect-square bg-linear-to-br from-emerald-500 to-emerald-600 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl hover:scale-105">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>

              {/* Chat */}
              <button className="w-full aspect-square bg-linear-to-br from-rose-500 to-rose-600 rounded-xl hover:from-rose-600 hover:to-rose-700 transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl hover:scale-105">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>

              {/* Settings */}
              <button className="w-full aspect-square bg-linear-to-br from-slate-600 to-slate-700 rounded-xl hover:from-slate-700 hover:to-slate-800 transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl hover:scale-105">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    
      {/* Bottom Left - Company & User Info */}
      <div className="fixed bottom-6 left-6 pointer-events-none select-none">
        <div className="bg-white px-4 py-3 rounded-lg shadow-lg border border-gray-200 space-y-2">
          {/* Company Name */}
          <div className="flex items-center space-x-2">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-slate-900">
              {companyName}
            </span>
          </div>

          {/* Logged User */}
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4 text-green-600" />
            <span className="text-sm text-gray-700">{loggedUser}</span>
          </div>

          {/* Date and Time */}
          <div className="border-t border-gray-200 pt-2 mt-2">
            <div className="flex items-center space-x-2 mb-1">
              <Calendar className="w-4 h-4 text-orange-600" />
              <span className="text-xs font-medium text-gray-600">
                {formatDate(currentTime)}
              </span>
            </div>
            <div className="text-lg font-bold text-slate-900 tabular-nums tracking-wide">
              {formatTime(currentTime)}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Branding */}
      <div className="fixed bottom-6 right-6 text-right pointer-events-none select-none">
        <div className="bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-200">
          <div className="text-slate-900 font-bold text-lg sm:text-xl tracking-tight">
            NextGen ERP
          </div>
          <div className="text-gray-500 text-[10px] sm:text-xs font-medium mt-0.5">
            All in One Solution
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}

export default MainStart;
