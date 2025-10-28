import React, { useEffect, useState } from "react";
import { Leaf, Users, Target, Briefcase } from "lucide-react";
import axios from "axios";

export default function KPIs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/pledges")
      .then((res) => setData(res.data))
      .catch(() => {
        setData(JSON.parse(localStorage.getItem("pledges") || "[]"));
      });
  }, []);

  const achieved = data.length;
  const students = data.filter((d) => d.profile === "Student").length;
  const professionals = data.filter((d) => d.profile === "Working Professional").length;

  const stats = [
    { label: "Target Pledges", value: "1,000,000", icon: Target },
    { label: "Achieved", value: achieved, icon: Leaf },
    { label: "Students", value: students, icon: Users },
    { label: "Professionals", value: professionals, icon: Briefcase },
  ];

  return (
    <section className="container mx-auto p-6 grid gap-6 md:grid-cols-4">
      {stats.map(({ label, value, icon: Icon }) => (
        <div key={label} className="card text-center">
          <div className="flex justify-center">
            <Icon className="w-8 h-8 text-primary mb-2" />
          </div>
          <div className="text-3xl font-bold text-dark">{value}</div>
          <div className="text-sm text-slate-500 mt-1">{label}</div>
        </div>
      ))}
    </section>
  );
}
