# 🎓 StudentHub

A multi-page student dashboard portal built to master **React Router v8** concepts through a real-world project.

## 📸 Screenshots

| Page | Preview |
|------|---------|
| Home | 
<img width="2940" height="1432" alt="image" src="https://github.com/user-attachments/assets/672533bc-e46c-4dc2-9b0c-c940ae88083e" />
|
| Courses | 
<img width="2940" height="1432" alt="image" src="https://github.com/user-attachments/assets/e6accae8-4424-40fb-aabf-327b30fda3a1" />
 |
| Course Detail | 
<img width="2940" height="1432" alt="image" src="https://github.com/user-attachments/assets/adfdb35f-707e-409e-b0dc-48bc11d8523d" />
 |
| Profile | 
<img width="2940" height="1432" alt="image" src="https://github.com/user-attachments/assets/cbf8229e-6992-4e8d-8404-2892c96b8f22" />
 |
| Settings | 
<img width="2940" height="1432" alt="image" src="https://github.com/user-attachments/assets/f21a60d3-48a2-4e2f-9d62-f3abdf032e4e" />

| Notes | 
<img width="2940" height="1432" alt="image" src="https://github.com/user-attachments/assets/7b4e41c2-fe57-46fa-bf8d-b461b5a66039" />
 |
| 404 | 
<img width="2940" height="1432" alt="image" src="https://github.com/user-attachments/assets/57740733-3871-4ca0-a8b4-fdce6e775e1a" />


## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 | UI library |
| TypeScript | Type safety |
| Vite | Build tool |
| Tailwind CSS v4 | Styling |
| React Router v8 | Client-side routing |
| Lucide React | Icons |

## 🧠 React Router Concepts Covered

| Concept | Where |
|---------|-------|
| `BrowserRouter` | `AppRoutes.tsx` |
| `Routes` + `Route` | `AppRoutes.tsx` |
| `NavLink` + `isActive` | `Navbar.tsx` |
| `Outlet` | `MainLayout.tsx`, `Profile.tsx` |
| Index route | `Home.tsx` |
| Dynamic routes `:courseid` | `Coursedetail.tsx` |
| `useParams()` | `Coursedetail.tsx` |
| `useNavigate()` | `Home.tsx`, `Coursedetail.tsx` |
| `useLocation()` | `Profile.tsx` |
| Nested routes | `/profile/settings` |
| `*` 404 catch-all | `Notfound.tsx` |

## 📁 Project Structure
src/

├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── Coursecard.tsx
├── layouts/
│   └── MainLayout.tsx
├── pages/
│   ├── Home.tsx
│   ├── Courses.tsx
│   ├── Coursedetail.tsx
│   ├── Notes.tsx
│   ├── Profile.tsx
│   ├── Settings.tsx
│   └── Notfound.tsx
├── routes/
│   └── AppRoutes.tsx
├── data/
│   ├── courses.ts
│   └── student.ts
└── types/
├── course.ts
└── student.ts
## 🚀 Getting Started

```bash
git clone https://github.com/priyaxdev/student-hub.git
cd studenthub
npm install
npm run dev
```

## 🙏 Credits

Built with guidance from **Claude (Anthropic)** —
used as an AI pair programmer for UI code and concept explanations.
Routing logic, data structures, and core implementation by **Priya**.

---

> 🎯 Purpose: Learning project — built to practice React Router v8
> through a real multi-page application.
