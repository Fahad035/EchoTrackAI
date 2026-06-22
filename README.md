# 🌍 EcoTrack AI

<div align="center">

### ♻️ AI-Powered Carbon Footprint Awareness Platform

**Built for Hack2Skill Virtual PromptWars Hackathon – Challenge 3**

Helping individuals understand, track, and reduce their carbon footprint through AI-powered sustainability insights.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Firebase](https://img.shields.io/badge/Firebase-Firestore-orange?logo=firebase)
![Gemini](https://img.shields.io/badge/Google-Gemini_AI-green?logo=google)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)

</div>

---

## 📌 Problem Statement

Climate change is one of the most pressing global challenges of our time.

Most individuals contribute to carbon emissions through daily activities such as transportation, electricity consumption, food choices, and waste generation. However, many people are unaware of the environmental impact of these activities and lack access to personalized guidance on how to reduce their carbon footprint.

The objective of this project is to build a platform that enables users to:

* Understand their carbon footprint
* Track their environmental impact
* Learn sustainable practices
* Receive AI-powered recommendations
* Reduce carbon emissions through actionable insights

---

# 🚀 About EcoTrack AI

EcoTrack AI is an intelligent sustainability platform that combines Artificial Intelligence, Carbon Analytics, Data Visualization, and Environmental Awareness into a single application.

The platform helps users measure their carbon footprint and provides personalized recommendations generated using Google Gemini AI to encourage sustainable lifestyle changes.

EcoTrack AI transforms environmental awareness into practical action.

---

# ✨ Key Features

## 🌱 Carbon Footprint Calculator

Calculate carbon emissions based on:

* Monthly vehicle travel distance
* Electricity consumption
* Dietary preferences

Users receive an estimated carbon footprint score in kilograms of CO₂ emissions.

---

## 🤖 AI Sustainability Coach

Powered by Google Gemini AI.

Provides:

* Sustainability score
* Emission source analysis
* Carbon reduction suggestions
* Personalized eco-friendly recommendations
* Environmental improvement roadmap

Example:

```text
🌍 Sustainability Score: 82/100

⚠ Main Emission Source:
Transportation

💡 Recommendations:
• Use public transport
• Switch to LED lighting
• Reduce meat consumption

📉 Potential Reduction:
45 kg CO₂/month
```

---

## 📊 Interactive Dashboard

Visualizes carbon footprint data through:

* Pie Charts
* Bar Charts
* Sustainability Analytics
* Emission Distribution
* Historical Records

Provides users with a clear understanding of their environmental impact.

---

## 🎯 Goal Tracker

Users can:

* Set sustainability goals
* Define carbon reduction targets
* Track progress
* Measure achievements

---

## 📚 Awareness Hub

Educational content covering:

* Climate Change
* Carbon Emissions
* Renewable Energy
* Sustainable Living
* Waste Management
* Green Transportation

Designed to promote environmental awareness and responsible living.

---

## 🏆 Green Pledge & Certificate System

Users can:

* Take an environmental pledge
* Commit to sustainable actions
* Generate personalized certificates
* Download certificates as PDF
* Verify certificates using QR Code

---

# 🏗️ System Architecture

```text
User
  │
  ▼
React Frontend
  │
  ▼
Carbon Calculation Engine
  │
  ▼
Firebase Firestore
  │
  ▼
Google Gemini AI
  │
  ▼
Dashboard & Reporting Module
```
*<img width="1122" height="1402" alt="ChatGPT Image Jun 17, 2026, 06_36_18 PM" src="https://github.com/user-attachments/assets/c189bda7-c21f-403e-8222-588c90eec376" />
*
### Architecture Overview

* React handles user interactions and UI rendering.
* Carbon Calculation Engine estimates emissions.
* Firebase stores user carbon records securely.
* Gemini AI generates sustainability insights.
* Dashboard visualizes environmental impact.

---

# 🛠️ Technology Stack

## Frontend

* React.js
* Tailwind CSS
* React Router DOM

## Cloud & Database

* Firebase Firestore

## Artificial Intelligence

* Google Gemini API

## Data Visualization

* Recharts

## PDF Generation

* jsPDF
* html2canvas

## Deployment

* Vercel

## Version Control

* Git
* GitHub

---

# 📂 Project Structure

```bash
eco-track-ai/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── CarbonForm.jsx
│   │   ├── Footer.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Awareness.jsx
│   │   ├── Goals.jsx
│   │   ├── Pledge.jsx
│   │
│   ├── services/
│   │   ├── firebase.js
│   │   ├── gemini.js
│   │
│   ├── utils/
│   │   ├── carbonCalculator.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── package.json
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Fahad035/EchoTrackAI.git
```

## Navigate to Project

```bash
cd EchoTrackAI
```

## Install Dependencies

```bash
npm install
```

## Create Environment Variables

Create a `.env` file in the project root.

```env
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID

VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

## Run Development Server

```bash
npm run dev
```

---

# 🔐 Security Considerations

The current hackathon version uses Firebase Firestore development rules for rapid prototyping.

Recommended production security:

```javascript
allow read, write: if request.auth != null;
```

Future enhancements include:

* Firebase Authentication
* User-specific data access
* Role-based permissions
* API protection

---

# 📸 Screenshots

## 🏠 Home Page

*<img width="1352" height="597" alt="Screenshot 2026-06-18 070317" src="https://github.com/user-attachments/assets/b343a229-6d8b-49e0-a823-096a7f0f3a59" />
*

---

## 🌱 Carbon Calculator

*<img width="1365" height="597" alt="Screenshot 2026-06-17 183800" src="https://github.com/user-attachments/assets/0fb4379a-b9f2-4b03-8202-dc181b578b7c" />
*

---

## 🤖 AI Sustainability Coach

*<img width="1350" height="597" alt="Screenshot 2026-06-17 183904" src="https://github.com/user-attachments/assets/6f109278-5ca0-493f-b40c-d2c168f19daa" />
*

---

## 📊 Dashboard Analytics

*<img width="1350" height="596" alt="Screenshot 2026-06-17 183934" src="https://github.com/user-attachments/assets/2426f0d6-a00c-4b11-abd7-922dbf1ebdef" />
*

---

## 📚 Awareness Hub

*<img width="1348" height="596" alt="Screenshot 2026-06-17 184017" src="https://github.com/user-attachments/assets/122c7454-b501-4a81-b604-984cf5a5ee1b" />
*

---

## 🏆 Green Pledge Certificate

*<img width="466" height="555" alt="Screenshot 2026-06-18 070717" src="https://github.com/user-attachments/assets/1c90711c-1195-4691-b4bb-ce3b1509adc1" />
*

---

# 🌎 Environmental Impact

EcoTrack AI aims to:

✅ Increase climate awareness

✅ Promote sustainable behavior

✅ Encourage responsible consumption

✅ Reduce individual carbon emissions

✅ Support global sustainability goals

The platform empowers users to make environmentally conscious decisions and contribute toward a greener future.

---

# 🚀 Future Enhancements

* User Authentication
* Carbon History Tracking
* AI Chatbot Assistant
* Carbon Offset Recommendations
* Community Challenges
* Sustainability Leaderboard
* Mobile Application
* Social Sharing
* Real-time Environmental News Integration

---

# 🏆 Hackathon Submission

### Event

Hack2Skill Virtual PromptWars Hackathon

### Challenge

Challenge 3 – Carbon Footprint Awareness Platform

### Objective

Design a solution that helps individuals:

* Understand their carbon footprint
* Track environmental impact
* Reduce carbon emissions
* Receive personalized sustainability insights

EcoTrack AI was developed specifically to address these objectives through Artificial Intelligence and Sustainability Technology.

---

# 👨‍💻 Developer

## Md Fahad

Passionate about:

* Artificial Intelligence
* Full Stack Development
* Sustainability Technology
* Cloud Computing
* Environmental Innovation

### Connect with Me

**LinkedIn:** https://www.linkedin.com/in/md-fahad-71505a2b6

**GitHub:** https://github.com/Fahad035
**LivePreview** https://echo-track-ai.vercel.app

---

# ⭐ Support

If you found this project useful:

⭐ Star the repository

🍴 Fork the project

📢 Share your feedback

🌍 Promote sustainable technology

---

<div align="center">

## ♻️ EcoTrack AI

### Track Today • Reduce Tomorrow • Sustain Forever

🌍 Together for a Greener Future 💚

</div>
