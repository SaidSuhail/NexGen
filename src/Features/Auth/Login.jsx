// import React, { useState, useEffect } from "react";
// import { Nfc, Smartphone, Lock } from "lucide-react";

// import { useNavigate } from "react-router-dom";
// function Login() {
//   const [role, setRole] = useState("");
//   const [password, setPassword] = useState("");
//   const [activeFeature, setActiveFeature] = useState(0);
// const roles = ["Admin", "Manager", "Employee", "Accountant", "HR"];
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login attempt:", { role, password });
//   };

//   return (
// <div className="fixed inset-0 w-screen h-screen flex overflow-hidden">      {/* Left Section - Enhanced Branding with Animations */}

//       <div className="hidden lg:flex lg:w-1/2 h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 items-center justify-center p-12 relative">
//         {" "}
//         {/* Background Layer (clean & static) */}
//         <div className="absolute inset-0 bg-linear-to-br from-blue-950/30 via-transparent to-cyan-950/20"></div>
//         <div className="max-w-md relative z-10">
//           {/* Logo */}
//           <div className="mb-10">
//             <h1 className="text-6xl font-semibold text-white tracking-tight mb-3">
//               NexGen
//             </h1>
//             <div className="flex items-center gap-3">
//               <div className="h-0.5 w-20 bg-linear-to-r from-blue-500 to-cyan-400 rounded-full"></div>
//               <p className="text-lg text-slate-300">
//                 Enterprise Resource Planning
//               </p>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-3 gap-4">
//             <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center">
//               <div className="text-2xl font-semibold text-white">500+</div>
//               <div className="text-xs text-slate-400 mt-1">Companies</div>
//             </div>

//             <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center">
//               <div className="text-2xl font-semibold text-white">99.9%</div>
//               <div className="text-xs text-slate-400 mt-1">Uptime</div>
//             </div>

//             <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center">
//               <div className="text-2xl font-semibold text-white">24/7</div>
//               <div className="text-xs text-slate-400 mt-1">Support</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Right Section - Login Form */}
//       <div className="flex-1 flex items-center justify-center p-8 bg-linear-to-br from-gray-50 to-blue-50">
//         {" "}
//         <div className="w-full max-w-md">
//           {/* Mobile Logo */}
//           <div className="lg:hidden mb-8 text-center">
//             <h1 className="text-3xl font-bold text-slate-900">NexGen</h1>
//             <p className="text-sm text-slate-600">ERP System</p>
//           </div>

//           <div className="bg-white rounded-2xl shadow-2xl p-8 border border-blue-100 flex flex-col">
//             <h2 className="text-2xl font-bold text-slate-900 mb-1">
//               Welcome Back
//             </h2>
//             <p className="text-gray-500 mb-6 text-sm">
//               Sign in to your account
//             </p>

//             <form onSubmit={handleSubmit} className="space-y-7">
//               {/* Role Dropdown */}
//               <div className="relative">
//                 <select
//                   id="role"
//                   value={role}
//                   onChange={(e) => setRole(e.target.value)}
//                   required
//                   className="peer w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white text-gray-800
//       focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none appearance-none"
//                 >
//                   <option value="" disabled hidden></option>
//                   <option value="admin">Admin</option>
//                   <option value="manager">Manager</option>
//                   <option value="employee">Employee</option>
//                   <option value="accountant">Accountant</option>
//                   <option value="hr">HR</option>
//                 </select>

//                 <label
//                   htmlFor="role"
//                   className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none transition-all
//       peer-focus:top-2 peer-focus:text-xs peer-focus:text-slate-600
//       peer-valid:top-2 peer-valid:text-xs peer-valid:text-gray-500"
//                 >
//                   Select role
//                 </label>

//                 <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
//                   ▼
//                 </div>
//               </div>

//               {/* Password */}
//               <div className="relative">
//                 <input
//                   type="password"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="peer w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none"
//                 />

//                 <label
//                   htmlFor="password"
//                   className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none transition-all
//         peer-focus:top-2 peer-focus:text-xs peer-focus:text-slate-600
//         peer-valid:top-2 peer-valid:text-xs peer-valid:text-gray-500"
//                 >
//                   Password
//                 </label>
//               </div>

//               {/* Remember + Forgot */}
//               <div className="flex items-center justify-between text-sm">
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     className="w-4 h-4 rounded border-gray-300 text-slate-600 focus:ring-slate-500"
//                   />
//                   <span className="text-gray-600">Remember me</span>
//                 </label>

//                 <a
//                   href="#"
//                   className="text-slate-600 hover:text-slate-700 font-medium"
//                 >
//                   Forgot password?
//                 </a>
//               </div>

//               {/* Login Button */}
//               <button
//                 onClick={() => navigate("/main")}
//                 type="submit"
//                 className="w-full bg-linear-to-r from-slate-900 via-slate-800 to-slate-900  hover:from-slate-700 hover:to-slate-800
//       text-white font-medium py-4 rounded-2xl shadow-lg transition-all"
//               >
//                 Sign In
//               </button>
//             </form>
//             {/* Divider */}
//             <div className="relative my-6">
//               <div className="h-px bg-gray-200" />
//               <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-3 text-xs text-gray-400">
//                 OR
//               </span>
//             </div>
//             {/* Alternative Login Methods */}
//             <div className="grid grid-cols-3 gap-3">
//               {[
//                 { icon: <Nfc className="w-4 h-4" />, label: "NFC" },
//                 { icon: <Smartphone className="w-4 h-4" />, label: "Face ID" },
//                 { icon: <Lock className="w-4 h-4" />, label: "Bio" },
//               ].map((item) => (
//                 <button
//                   key={item.label}
//                   type="button"
//                   className="flex flex-col items-center justify-center py-2.5 rounded-xl
// border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
//                 >
//                   <div className="text-slate-900 mb-1">{item.icon}</div>
//                   <span className="text-[11px] text-gray-600">
//                     {item.label}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Footer */}
//           <p className="text-center text-xs text-gray-400 mt-8">
//             © 2026 NextGen ERP. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from "react";
import { Nfc, Smartphone, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../../Api/axios";
function Login() {
  const [username, setUsername] = useState("");
  const [branch, setBranch] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const response = await api.post(
      "/COM_API_/CMUser/LoginUser",
      {
        user_name: username,
        password_hash: password
      }
    );

    console.log(response.data);

    if (response.data.status) {

      // Save token
      localStorage.setItem(
        "token",
        response.data.data.accessToken
      );

      // Go to dashboard
      navigate("/main");

    } else {

      alert(response.data.statusMsg);

    }

  } catch (error) {

    console.error(error);
    alert("Login failed");

  }
};

  return (
    <div className="fixed inset-0 w-screen h-screen flex overflow-hidden bg-linear-to-br from-gray-50 to-blue-50 lg:items-center lg:justify-center lg:p-4">

      {/* Centered Card — full screen on mobile, floating card on lg+ */}
      <div className="flex w-full h-full lg:h-auto lg:max-w-4xl lg:rounded-2xl overflow-hidden lg:shadow-2xl">

        {/* Left Section */}
        <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 items-center justify-center p-12 relative">
          <div className="absolute inset-0 bg-linear-to-br from-blue-950/30 via-transparent to-cyan-950/20"></div>
          <div className="max-w-md relative z-10">
            <div className="mb-10">
              <h1 className="text-6xl font-semibold text-white tracking-tight mb-3">NexGen</h1>
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-20 bg-linear-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                <p className="text-lg text-slate-300">Enterprise Resource Planning</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center">
                <div className="text-2xl font-semibold text-white">500+</div>
                <div className="text-xs text-slate-400 mt-1">Companies</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center">
                <div className="text-2xl font-semibold text-white">99.9%</div>
                <div className="text-xs text-slate-400 mt-1">Uptime</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center">
                <div className="text-2xl font-semibold text-white">24/7</div>
                <div className="text-xs text-slate-400 mt-1">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex items-center justify-center p-6 bg-linear-to-br from-gray-50 to-blue-50 lg:bg-white">
          <div className="w-full max-w-md">

            {/* Mobile Logo — above card */}
            <div className="lg:hidden mb-5 text-center">
              <h1 className="text-3xl font-bold text-slate-900">NexGen</h1>
              <p className="text-sm text-slate-600">ERP System</p>
            </div>

            {/* Card — visible on mobile, transparent wrapper on lg */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-blue-100 lg:bg-transparent lg:shadow-none lg:border-0 lg:p-0 flex flex-col">
              <h2 className="text-2xl font-bold text-slate-900 mb-1">Welcome Back</h2>
              <p className="text-gray-500 mb-5 text-sm">Sign in to your account</p>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Username */}
                <div className="relative">
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder=" "
                    className="peer w-full px-5 py-3 rounded-2xl border border-gray-200 bg-white text-gray-800 text-sm
                      focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none"
                  />
                  <label
                    htmlFor="username"
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none transition-all
                      peer-focus:top-2 peer-focus:text-xs peer-focus:text-slate-600
                      peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-500"
                  >
                    Username
                  </label>
                </div>

                

                {/* Password */}
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder=" "
                    className="peer w-full px-5 py-3 rounded-2xl border border-gray-200 bg-white text-gray-800 text-sm
                      focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none transition-all
                      peer-focus:top-2 peer-focus:text-xs peer-focus:text-slate-600
                      peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-500"
                  >
                    Password
                  </label>
                </div>

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-slate-600 focus:ring-slate-500"
                    />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-slate-600 hover:text-slate-700 font-medium">
                    Forgot password?
                  </a>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800
                    text-white font-medium py-3 rounded-2xl shadow-lg transition-all text-sm"
                >
                  Sign In
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-5">
                <div className="h-px bg-gray-200" />
                <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-3 text-xs text-gray-400">
                  OR
                </span>
              </div>

              {/* Alt Login */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: <Nfc className="w-4 h-4" />, label: "NFC" },
                  { icon: <Smartphone className="w-4 h-4" />, label: "Face ID" },
                  { icon: <Lock className="w-4 h-4" />, label: "Bio" },
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className="flex flex-col items-center justify-center py-2.5 rounded-xl
                      border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                  >
                    <div className="text-slate-900 mb-1">{item.icon}</div>
                    <span className="text-[11px] text-gray-600">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">
              © 2026 NextGen ERP. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;