import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import data from "../../utils/slider.json";
import { MdDashboard, MdLogout, MdSearch, MdTrendingDown, MdArrowForward, MdMoreVert, MdAttachMoney, MdHomeWork, MdApartment, MdLocationOn } from "react-icons/md";

const initialProps = data.filter((v, i, a) => a.findIndex((p) => p.name === v.name) === i);

const Dashboard = () => {
  const [active, setActive] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const nav = useNavigate();

  const total = initialProps.reduce((s, p) => s + Number(String(p.price).replace(/,/g, "")), 0);

  return (
    <div className="db-layout">
      <aside className={`db-sidebar ${collapsed ? "collapsed" : ""}`}>
        <div className="db-sidebar-top">
          <div className="db-brand">
            {!collapsed && (
              <>
                <span className="db-brand-text">
                  <span className="db-brand-hl">h</span>omyz
                </span>
                <span className="db-brand-dot"></span>
              </>
            )}
          </div>
          <nav className="db-nav">
            {[{ icon: <MdDashboard />, label: "Dashboard", id: "dashboard" }].map((item) => (
              <button key={item.id} className={`db-nav-item ${active === item.id ? "active" : ""}`} onClick={() => setActive(item.id)} title={item.label}>
                <span className="db-nav-icon">{item.icon}</span>
                {!collapsed && <span className="db-nav-label">{item.label}</span>}
              </button>
            ))}
          </nav>
        </div>
        <button className="db-nav-item db-logout" onClick={() => nav("/")} title="Logout">
          <span className="db-nav-icon"><MdLogout /></span>
          {!collapsed && <span className="db-nav-label">Logout</span>}
        </button>
      </aside>

      <main className="db-main">
        <header className="db-topbar">
          <div className="db-topbar-left">
            <button className="db-hamburger" onClick={() => setCollapsed(!collapsed)}><span /><span /><span /></button>
            <div className="db-search-box">
              <MdSearch className="db-search-icon" />
              <input type="text" placeholder="Search properties..." />
            </div>
          </div>
        </header>

        <div className="db-content">
          <div className="db-page-header">
            <div>
              <h1 className="db-page-title">Dashboard</h1>
              <p className="db-page-sub">Welcome back, Hashim! Here's what's happening.</p>
            </div>
          </div>

          <div className="db-stats-grid">
            {[
              { icon: <MdApartment />, val: initialProps.length, label: "Total Properties", cls: "blue", trend: "+12%", up: true, bar: "75%" },
              { icon: <MdHomeWork />, val: initialProps.length + 3, label: "Total Listings", cls: "purple", trend: "+8%", up: true, bar: "60%" },
              { icon: <MdAttachMoney />, val: <><span style={{ color: "#ff922d" }}>$</span>{Math.round(total * 0.65).toLocaleString()}.00</>, label: "Total Income", cls: "green", trend: "+18%", up: true, bar: "85%" },
              { icon: <MdTrendingDown />, val: <><span style={{ color: "#ff922d" }}>$</span>{Math.round(total * 0.35).toLocaleString()}.00</>, label: "Total Expense", cls: "orange", trend: "-3%", up: false, bar: "45%" },
            ].map((s, i) => (
              <div key={i} className={`db-stat-card ${i === 0 ? "stat-blue" : ""}`}>
                <div className="db-stat-header">
                  <div className={`db-stat-icon-wrap ${s.cls}`}>{s.icon}</div>
                </div>
                <div className="db-stat-value">{s.val}</div>
                <div className="db-stat-label">{s.label}</div>
                <div className="db-stat-bar"><div className={`db-stat-bar-fill ${s.cls}`} style={{ width: s.bar }} /></div>
              </div>
            ))}
          </div>

          <div className="db-card db-property-card">
            <div className="db-card-header">
              <h3 className="db-card-title">Your Properties</h3>
              <button className="db-card-more"><MdMoreVert /></button>
            </div>
            <div className="db-property-grid">
              {initialProps.map((p, i) => (
                <div key={i} className="db-prop-item">
                  <div className="db-prop-img-wrap">
                    <img src={p.image} alt={p.name} className="db-prop-img" />
                  </div>
                  <div className="db-prop-info">
                    <div className="db-prop-price">
                      <span style={{ color: "#ff922d", fontSize: "1.2rem", fontWeight: "700" }}>$</span>
                      <span style={{ color: "rgb(140,139,139)", fontSize: "1.1rem", fontWeight: "600" }}>{p.price}</span>
                    </div>
                    <h4 className="db-prop-name">{p.name}</h4>
                    <p className="db-prop-location"><MdLocationOn /> {p.detail}</p>
                    <div className="db-prop-actions">
                      <span className="db-badge badge-paid">Active</span>
                      <button className="db-prop-view-btn">View Details <MdArrowForward /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="db-tables-grid">
            <div className="db-card">
              <div className="db-card-header">
                <h3 className="db-card-title">Payment History</h3>
                <button className="db-card-more"><MdMoreVert /></button>
              </div>
              <div className="db-table-wrap">
                <table className="db-table">
                  <thead><tr><th>Property</th><th>Amount</th><th>Status</th></tr></thead>
                  <tbody>
                    {initialProps.slice(0, 5).map((p, i) => (
                      <tr key={i}>
                        <td>{p.name}</td>
                        <td className="db-amount"><span style={{ color: "#ff922d" }}>$</span>{p.price}</td>
                        <td><span className={`db-badge ${i < 2 ? "badge-paid" : "badge-pending"}`}>{i < 2 ? "Paid" : "Pending"}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button className="db-see-all">See Invoices <MdArrowForward /></button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
