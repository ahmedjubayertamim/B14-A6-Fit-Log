## 📌 Project Overview

**FitLog** is a modern dark-themed workout management application that helps users explore exercises, create their daily workout plans, save favorite workouts, and track their fitness activities.

Users can browse a complete workout library, view detailed exercise information, add workouts to their personal plan, save exercises for later, and manage their daily fitness routine with an interactive and responsive interface.

The application is designed with a clean gym-inspired UI focused on simplicity, performance, and usability across mobile, tablet, and desktop devices.

---

## 🚀 Live Website

🔗 **Live Link:**  
(Add your Vercel/Netlify link here)

---

## 💻 GitHub Repository

🔗 **Repository Link:**  
(Add your GitHub repository link here)

---

# ✨ Features

## 🏋️ Workout Library

- Browse all available workouts from API data
- Responsive workout card grid layout
- Display workout image, muscle groups, equipment, duration, calories, and rating
- Click any workout card to view full details

---

## 📄 Workout Details Page

- Dynamic route based workout details
- Large workout illustration/image
- Exercise description
- Muscle group tags
- Equipment and difficulty information
- Sets, reps, duration, calories, and rating details
- Step-by-step workout instructions

---

## 📋 Personal Workout Plan

- Add workouts to today's plan
- Save workouts for later
- View planned exercises
- Track total exercises, minutes, and calories
- Remove workouts from plan
- Mark completed workouts as done

---

## 🔔 Interactive User Experience

- Toast notifications for user actions
- Duplicate workout prevention
- Maximum 5 workout plan limit
- Loading states while fetching data
- Custom 404 page for invalid routes

---

## 📱 Fully Responsive Design

- Mobile-friendly layout
- Tablet optimization
- Desktop grid design
- Responsive navigation
- Adaptive workout cards and sections

---

## 🔍 Sorting & Management

- Sort workouts by:
  - Duration
  - Calories
  - Rating

- Search-friendly workout structure
- Easy workout management system

---

# 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Next.js | Frontend framework and routing |
| React | UI component development |
| TypeScript | Type safety and better development experience |
| Tailwind CSS | Styling and responsive design |
| DaisyUI | UI component utilities |
| Context API | Global workout plan state management |
| React Hot Toast | Notification system |
| Vercel | Deployment platform |

---

# 🔗 API Used

## Main API

### Get All Workouts

```
https://api.abcz.workers.dev/api/fitlog
```

### Get Single Workout

```
https://api.abcz.workers.dev/api/fitlog/:id
```

---

## Alternative API

### Get All Workouts

```
https://api.api-store.workers.dev/api/fitlog
```

### Get Single Workout

```
https://api.api-store.workers.dev/api/fitlog/:id
```

---

# 📂 Project Structure

```
src/
│
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   ├── not-found.tsx         # Custom 404 page
│   │
│   ├── workout/
│   │   └── [id]/
│   │       └── page.tsx      # Workout details page
│   │
│   └── my-plan/
│       └── page.tsx          # Personal workout plan
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── WorkoutCard.tsx
│   ├── LibrarySection.tsx
│   ├── WorkoutActions.tsx
│   └── Footer.tsx
│
├── context/
│   └── PlanContext.tsx       # Global state management
│
├── utils/
│   └── api.ts                # API functions
│
└── types/
    └── index.ts              # TypeScript interfaces
```

---

# ⚙️ Installation & Setup

Clone the repository:

```bash
git clone <repository-url>
```

Go to project folder:

```bash
cd fitlog
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 🏗️ Build for Production

Create production build:

```bash
npm run build
```

Run production server:

```bash
npm start
```

---

# 🚀 Deployment

This project is deployed using:

- Vercel

Deployment process:

1. Push project to GitHub
2. Connect repository with Vercel
3. Vercel automatically detects Next.js
4. Build and deploy automatically

---

# 📱 Responsive Support

FitLog works smoothly on:

✅ Mobile devices  
✅ Tablets  
✅ Desktop screens  

The layout automatically adapts using responsive Tailwind CSS classes.

---

# 📌 Assignment Information

**Project Name:** B14-A6-Fit Log

## Submission Deadlines

| Marks | Deadline |
|---|---|
| 60 Marks | 26 September 2026, 11:59 PM |
| 50 Marks | 27 September 2026, 11:59 PM |
| 30 Marks | After 27 September 2026 |

---

# 👨‍💻 Author

**Ahmed Jubayer Tamim**

Frontend Developer | Next.js Enthusiast

---

# 📜 License

This project is created for educational purposes.
