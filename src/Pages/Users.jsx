import { useState } from "react";
import { useUsers } from "../hooks/useUser";
import { CreateUser as apiCreateUser } from "../Api/usersApi";
/** ── THEME ── **/
const THEME = {
  primary: "#2563eb",
  primaryLight: "#eff6ff",
  border: "#e2e8f0",
  textMain: "#1e293b",
  textMuted: "#64748b",
  bg: "#f8fafc",
  success: "#16a34a",
  successLight: "#f0fdf4",
  danger: "#dc2626",
  dangerLight: "#fef2f2",
};
const formatDate = (dateStr) => {
  // 1. Check if the date string exists to avoid errors
  if (!dateStr) return "Never";

  // 2. Return the formatted string using 'en-US' and hour12: true
  return new Date(dateStr).toLocaleString('en-US', { 
    day: '2-digit',      // Example: 23
    month: 'short',     // Example: Mar
    year: 'numeric',    // Example: 2026
    hour: '2-digit',    // Example: 10
    minute: '2-digit',  // Example: 07
    hour12: true        // This converts 22:07 to 10:07 PM
  });
};
/** ── HELPERS ── **/
const getInitials = (name) => (name || "?").split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);

/** ── COMPONENTS ── **/
const InfoRow = ({ label, value }) => (
  <div style={{ padding: "10px 0", borderBottom: `1px solid ${THEME.border}`, display: "flex", justifyContent: "space-between", gap: "10px" }}>
    <span style={{ fontSize: "12px", color: THEME.textMuted, fontWeight: "500" }}>{label}</span>
    <span style={{ fontSize: "12px", color: THEME.textMain, fontWeight: "600", textAlign: "right" }}>{value || "N/A"}</span>
  </div>
);

/** ── MAIN PAGE ── **/
export default function Users() {
  const { data, isLoading, error, refetch } = useUsers();
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [viewUser, setViewUser] = useState(null); // State for the Detail Drawer
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [newUser, setNewUser] = useState({ user_name: "", user_role_id: 1, password_hash: "" });

  const users = data?.data || [];
  const filtered = users.filter(u => u.user_name?.toLowerCase().includes(search.toLowerCase()));

  const handleCreate = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await apiCreateUser(newUser);
      setShowAddModal(false);
      setNewUser({ user_name: "", user_role_id: 1, password_hash: "" });
      if (refetch) refetch();
    } catch (err) {
      alert("Creation failed. Ensure your API is running and token is valid.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <div style={{ padding: "40px", textAlign: "center", color: THEME.textMuted }}>Loading Directory...</div>;

  return (
    <div style={{ background: THEME.bg, minHeight: "100vh", fontFamily: "system-ui, sans-serif", overflowX: "hidden" }}>
      <style>{`
        .users-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; padding: 20px; }
        .drawer-mask { position: fixed; inset: 0; background: rgba(0,0,0,0.3); z-index: 1000; display: flex; justify-content: flex-end; }
        .drawer-content { width: 380px; background: white; height: 100%; box-shadow: -5px 0 25px rgba(0,0,0,0.1); padding: 30px; overflow-y: auto; animation: slideIn 0.3s ease-out; }
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .input-field { width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 8px; margin-top: 5px; outline: none; }
        .btn { padding: 10px 16px; border-radius: 8px; font-weight: 600; cursor: pointer; border: none; transition: 0.2s; }
        .btn-primary { background: ${THEME.primary}; color: white; }
        .btn-outline { background: white; border: 1px solid ${THEME.border}; color: ${THEME.textMuted}; }
      `}</style>

      {/* Header */}
      <div style={{ background: "#fff", padding: "16px 24px", borderBottom: `1px solid ${THEME.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 10 }}>
        <div>
          <h1 style={{ fontSize: "20px", fontWeight: "800", color: THEME.textMain, margin: 0 }}>User Directory</h1>
          <input 
            style={{ marginTop: "10px", padding: "8px 12px", borderRadius: "8px", border: `1px solid ${THEME.border}`, width: "250px" }} 
            placeholder="Search by name..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
        </div>
        <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>+ Add New User</button>
      </div>

      {/* Grid */}
      <div className="users-grid">
        {filtered.map((user) => (
          <div key={user.user_id} style={{ background: "#fff", border: `1px solid ${THEME.border}`, borderRadius: "16px", padding: "24px 16px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: THEME.primaryLight, color: THEME.primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: "800", marginBottom: "12px" }}>
              {getInitials(user.user_name)}
            </div>
            <div style={{ fontSize: "15px", fontWeight: "700", color: THEME.textMain }}>{user.user_name}</div>
            <div style={{ fontSize: "11px", color: THEME.textMuted, marginTop: "4px", background: "#f1f5f9", padding: "2px 8px", borderRadius: "4px" }}>{user.user_code}</div>
            
            <div style={{ display: "flex", gap: "8px", width: "100%", marginTop: "20px" }}>
              <button onClick={() => setViewUser(user)} style={{ flex: 1, padding: "8px", borderRadius: "6px", border: "none", background: THEME.successLight, color: THEME.success, fontWeight: "700", fontSize: "12px", cursor: "pointer" }}>View</button>
              <button style={{ flex: 1, padding: "8px", borderRadius: "6px", border: "none", background: THEME.dangerLight, color: THEME.danger, fontWeight: "700", fontSize: "12px", cursor: "pointer" }}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* DETAIL DRAWER (Viewing User Details) */}
      {viewUser && (
        <div className="drawer-mask" onClick={() => setViewUser(null)}>
          <div className="drawer-content" onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "800" }}>User Profile</h2>
              <button onClick={() => setViewUser(null)} style={{ background: "none", border: "none", fontSize: "24px", cursor: "pointer" }}>&times;</button>
            </div>

            <div style={{ textAlign: "center", marginBottom: "30px" }}>
              <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: THEME.primaryLight, color: THEME.primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", fontWeight: "800", margin: "0 auto 12px" }}>
                {getInitials(viewUser.user_name)}
              </div>
              <h3 style={{ margin: 0, fontSize: "18px" }}>{viewUser.user_name}</h3>
              <p style={{ color: THEME.textMuted, fontSize: "13px" }}>{viewUser.user_code}</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <h4 style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: THEME.textMuted, marginBottom: "10px" }}>Account Details</h4>
              <InfoRow label="User ID" value={viewUser.user_id} />
              <InfoRow label="Role ID" value={viewUser.user_role_id} />
              <InfoRow label="Organization ID" value={viewUser.organization_id} />
              <InfoRow label="Must Change Password" value={viewUser.must_change_password ? "Yes" : "No"} />
              
              <h4 style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: THEME.textMuted, margin: "24px 0 10px" }}>System Logs</h4>
              <InfoRow label="Last Login" value={formatDate(viewUser.last_login_on)} />
              <InfoRow label="Password Updated" value={formatDate(viewUser.password_changed_on)} />
              <InfoRow label="Created By (ID)" value={viewUser.maker_id} />
              <InfoRow label="Created Time" value={formatDate(viewUser.make_time)} />
              <InfoRow label="Last Modified On" value={formatDate(viewUser.last_modified_on)} />
            </div>

            <button className="btn btn-outline" style={{ width: "100%", marginTop: "30px" }} onClick={() => setViewUser(null)}>Close Details</button>
          </div>
        </div>
      )}

      {/* ADD USER MODAL */}
      {showAddModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1001 }}>
          <div style={{ background: "white", padding: "30px", borderRadius: "16px", width: "380px" }}>
            <h2 style={{ marginBottom: "20px", fontSize: "20px", fontWeight: "800" }}>Register User</h2>
            <form onSubmit={handleCreate}>
              <div style={{ marginBottom: "12px" }}>
                <label style={{ fontSize: "12px", fontWeight: "700", color: THEME.textMuted }}>User Name</label>
                <input required className="input-field" value={newUser.user_name} onChange={e => setNewUser({...newUser, user_name: e.target.value})} />
              </div>
              <div style={{ marginBottom: "12px" }}>
                <label style={{ fontSize: "12px", fontWeight: "700", color: THEME.textMuted }}>Role ID</label>
                <input type="number" className="input-field" value={newUser.user_role_id} onChange={e => setNewUser({...newUser, user_role_id: parseInt(e.target.value) || 1})} />
              </div>
              <div style={{ marginBottom: "24px" }}>
                <label style={{ fontSize: "12px", fontWeight: "700", color: THEME.textMuted }}>Password</label>
                <input type="password" required className="input-field" value={newUser.password_hash} onChange={e => setNewUser({...newUser, password_hash: e.target.value})} />
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button type="button" className="btn btn-outline" style={{ flex: 1 }} onClick={() => setShowAddModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }} disabled={isSubmitting}>{isSubmitting ? "Processing..." : "Register"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}