# Authentication Web App

🚀 Modern authentication system built with Next.js 13+ App Router, TypeScript, and Tailwind CSS

## Project Overview

This is a responsive and modern authentication-based web application featuring:

* User login and registration
* Responsive UI
* Swipeable testimonial carousel
* Route protection and redirection

## Folder Structure

```
├── app/
│   ├── login/page.tsx      # Login page
│   ├── register/page.tsx   # Register page
│   ├── dashboard/page.tsx  # Protected dashboard
│   ├── page.tsx            # Home page (auto-redirect)
│   └── layout.tsx          # Global layout (includes ToastContainer)
│   └── authStore.ts        # Zustand store for login session
├── components/
│   └── testimonialsPanel.tsx  # Swipeable testimonial pane
├── public/assets/images/   # App image assets (e.g., logo.png, hero.png)
├── store/
```

## Features

### ✅ Authentication Flow

* `register/page.tsx`: Allows new users to register (name, email, password), stored in `localStorage`
* `login/page.tsx`: Authenticates based on saved credentials and redirects to `/dashboard`
* `dashboard/page.tsx`: Only accessible if logged in
* `app/page.tsx`: Root route redirects to `/login` or `/dashboard` based on auth state

### ✅ State Management

* Zustand is used for simple auth state:
  * `isAuthenticated` state
  * `login()` and `logout()` actions

### ✅ UI/UX

* Fully responsive login & register pages
* Swipeable testimonial panel with `react-swipeable`
* Toast notifications using `react-toastify`
* Styled using Tailwind CSS, including gradients, transitions, and responsiveness

### ✅ Error Handling

* Form validations with toast alerts
* Auto-clearing error messages
* Navigation protection and redirection

## Tech Stack

* ✅ **Next.js (App Router)**
* ✅ **TypeScript**
* ✅ **Tailwind CSS**
* ✅ **Zustand (state management)**
* ✅ **React Toastify (alerts)**
* ✅ **React Swipeable (testimonials)**

## Getting Started

### Prerequisites

* Node.js 16.8 or later
* npm or yarn

### Installation

1. Clone the repository
```bash
mkdir webapp
cd webapp
git clone https://github.com/YasiruKaveeshwara/Room.me.git
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

## Usage

1. Register a new user account with name, email, and password
2. Log in with your credentials
3. Access the protected dashboard
4. Log out when finished

## Security Notes

* Registered users are stored in `localStorage` under `registeredUser`
* Session is persisted using Zustand in-memory, not secure for production
* Dashboard is accessible only after login
* **Important**: This is a demonstration project and should not be used as-is in production environments without security enhancements

## Author
Yasiru Kaveehwara