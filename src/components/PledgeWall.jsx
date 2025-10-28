import React, { useEffect, useState } from "react";
import axios from "axios";
import html2canvas from "html2canvas";

export default function PledgeWall() {
  const [pledges, setPledges] = useState([]);

  // 🔹 Fetch pledges from db.json via json-server
  const fetchPledges = () => {
    axios
      .get("/api/pledges")
      .then((res) => setPledges(res.data))
      .catch((err) => {
        console.error("Failed to load pledges:", err);
        setPledges(JSON.parse(localStorage.getItem("pledges") || "[]"));
      });
  };

  useEffect(() => {
    fetchPledges();
    // Optional: auto-refresh every 10s
    const interval = setInterval(fetchPledges, 10000);
    return () => clearInterval(interval);
  }, []);

  // 🔹 Generate and download a certificate for one pledge
  const downloadCertificate = async (pledge) => {
    const element = document.createElement("div");
    element.style.width = "600px";
    element.style.padding = "40px";
    element.style.background =
      "linear-gradient(to bottom right, #ecfdf5, #e0f2fe)";
    element.style.borderRadius = "16px";
    element.style.textAlign = "center";
    element.style.fontFamily = "Inter, sans-serif";
    element.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
    element.innerHTML = `
      <h2 style="font-size:32px; color:#059669; margin-bottom:8px;">Cool Enough to Care!</h2>
      <p style="font-size:22px; font-weight:600; color:#0f172a;">${pledge.name}</p>
      <p style="font-size:16px; color:#475569; margin-top:4px;">has taken pledges to protect our planet 🌍</p>
      <div style="font-size:28px; color:#facc15; margin-top:12px;">
        ${"⭐".repeat(
          Math.min(5, Math.ceil((pledge.commitments || []).length / 2))
        )}
      </div>
      <p style="margin-top:20px; font-size:14px; color:#64748b;">Date: ${
        pledge.date
      }</p>
      <p style="font-size:13px; color:#94a3b8; margin-top:10px;">Climate Action Pledge • Cool Enough to Care Initiative</p>
    `;

    document.body.appendChild(element);
    const canvas = await html2canvas(element, { scale: 2 });
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = `${pledge.name.replace(/\s+/g, "_")}_certificate.png`;
    link.click();
    document.body.removeChild(element);
  };

  return (
    <section className="container mx-auto p-6">
      <h3 className="text-2xl font-bold text-emerald-700 mb-4">
        Pledge Wall
      </h3>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-emerald-100">
        <table className="min-w-full border-collapse">
          <thead className="bg-emerald-600 text-white text-sm uppercase">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">State</th>
              <th className="p-3 text-left">Profile</th>
              <th className="p-3 text-left">Love</th>
              <th className="p-3 text-left">Certificate</th>
            </tr>
          </thead>

          <tbody>
            {pledges.length > 0 ? (
              pledges.map((p, i) => (
                <tr
                  key={p.id}
                  className={`${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50"
                  } hover:bg-emerald-50 transition`}
                >
                  <td className="p-3 border-t border-slate-100">{p.id}</td>
                  <td className="p-3 border-t border-slate-100 font-medium">
                    {p.name}
                  </td>
                  <td className="p-3 border-t border-slate-100">{p.state}</td>
                  <td className="p-3 border-t border-slate-100">
                    {p.profile}
                  </td>
                  <td className="p-3 border-t border-slate-100 text-yellow-400">
                    {"⭐".repeat(
                      Math.min(5, Math.ceil((p.commitments || []).length / 2))
                    )}
                  </td>
                  <td className="p-3 border-t border-slate-100">
                    <button
                      onClick={() => downloadCertificate(p)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-3 py-1 rounded-lg shadow-sm transition-all"
                    >
                      Download
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center text-slate-500 py-6 italic"
                >
                  No pledges yet — be the first to take action!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
