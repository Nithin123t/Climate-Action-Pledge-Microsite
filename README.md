# 🌍 Climate Action Pledge Microsite  
### A Web Developer Internship Task — “Cool Enough to Care” Initiative  

This is a responsive single-page microsite where users can take a **Climate Action Pledge**, generate a personalized **digital certificate**, and view all submissions on a **public Pledge Wall**.  

It implements **all requirements** from the official internship PDF brief — including hero section, KPIs, pledge form, certificate generator, pledge wall, privacy note, and full responsiveness — with a professional modern theme.

---

## 🔗 Live Demo
> [https://your-deployed-site-link.vercel.app](https://climate-action-pledge-microsite-eight.vercel.app/)

---

## 🧭 Table of Contents
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation & Local Setup](#installation--local-setup)
- [Backend (JSON Server)](#backend-json-server)
- [Frontend Functionality](#frontend-functionality)
- [API Routes](#api-routes)
- [Deployment Guide](#deployment-guide)
- [Privacy Note](#privacy-note)
- [Screenshots](#screenshots)
- [Credits](#credits)

---

## 📘 Project Overview

The **Climate Action Pledge Microsite** is designed to engage individuals to commit to positive environmental actions.  

The microsite allows users to:
- Take a pledge by filling out a form  
- Choose specific climate-friendly commitments  
- Instantly generate a shareable certificate  
- View their pledge on a live public wall  
- Download their certificate individually from the wall  

All data is stored locally using a mock backend (`json-server`) for persistence.

---

## ✨ Key Features

| Feature | Description |
|----------|--------------|
| 🌅 **Hero Section** | A clean banner introducing the Climate Action Pledge and CTA button |
| 📊 **KPI Section** | Displays live stats like total pledges, students, professionals |
| 🌿 **Why Take Action** | Motivational content encouraging user participation |
| 📝 **Pledge Form** | Collects user data and commitments (validated before submission) |
| 🪪 **Certificate Generator** | Instantly creates a downloadable PNG certificate using `html2canvas` |
| 💚 **Pledge Wall** | Displays all submitted pledges with love rating and “Download Certificate” button |
| 🔒 **Privacy Note** | Informs users about safe use of their email/mobile data |
| 🧩 **Mock Backend** | Uses `json-server` for REST API simulation (data saved to `mock-backend/db.json`) |
| 📱 **Responsive Design** | Fully mobile-friendly, optimized using Tailwind CSS |
| 🎨 **Professional Theme** | Gradient eco-color palette (emerald → sky blue), glass-style cards, Inter font |

---

## 🧰 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React (Vite) |
| **Styling** | Tailwind CSS + Inter Font |
| **Icons** | Lucide React |
| **Certificate Generation** | html2canvas |
| **Data Handling** | Axios |
| **Backend (Mock)** | json-server |
| **Build Tool** | Vite |
| **Deployment** | Netlify / Vercel |

---

## 🗂 Folder Structure

climate-pledge/
├── mock-backend/
│ └── db.json # JSON Server database
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Hero.jsx
│ │ ├── KPIs.jsx
│ │ ├── Why.jsx
│ │ ├── PledgeForm.jsx
│ │ ├── Certificate.jsx
│ │ ├── PledgeWall.jsx
│ │ └── PrivacyNote.jsx
│ ├── styles/
│ │ └── index.css
│ ├── App.jsx
│ └── main.jsx
├── package.json
├── vite.config.js
├── tailwind.config.cjs
└── README.md



---

## ⚙️ Installation & Local Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Nithin123t/Climate-Action-Pledge-Microsite.git
cd Climate-Action-Pledge-Microsite
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Start the mock backend (json-server)
bash
Copy code
npm run mock
This starts a local API at:

bash
Copy code
http://localhost:5000/pledges
4️⃣ Run the frontend (Vite dev server)
Open another terminal:

bash
Copy code
npm run dev

