import React from "react";
import "./Managers.css";
import { MANAGERS } from "../../data/managers"; // ✅ Ensure correct path

export default function Managers() {
  return (
    <section className="mgr-wrap" id="managers">
      <div className="mgr-container">
        <h2 className="mgr-title">Managers</h2>
        <p className="mgr-sub">The website of Urja '26 is managed by them.</p>

        <div className="mgr-grid">
          {MANAGERS.map((m) => (
            <article key={m.id} className="mgr-card">
              <div className="mgr-imgwrap">
                <img src={m.photo} alt={m.name} className="mgr-img" />
              </div>

              <div className="mgr-body">
                <h3 className="mgr-name">{m.name}</h3>
                {m.role && <p className="mgr-role">{m.role}</p>}

                {/* ✅ New: Registration Number */}
                {m.regNo && (
                  <p className="mgr-regno">
                    <strong>Reg No:</strong> {m.regNo}
                  </p>
                )}

                {m.phone && (
                  <a
                    className="mgr-phone"
                    href={`tel:${m.phone.replace(/\s+/g, "")}`}
                  >
                    {m.phone}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
