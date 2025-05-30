# 🎬 MovieQuest – A Smart Movie Search Platform

MovieQuest is a modern and responsive movie search web application that allows users to discover movies, view trending titles, and quickly explore more via Google. Built with **React**, **Tailwind CSS**, **TMDB API**, and **Appwrite**, it combines a powerful frontend with smart backend functionality to provide a seamless user experience.

![MovieQuest Banner](https://github.com/Srdxn/movie-application/blob/4686453bcaa76393236562ac2ca0506274e8ff38/Screenshot1.png) <!-- Optional banner or screenshot -->

---

## 🚀 Live Demo

🔗 [Click here to explore MovieQuest](https://srdxn.github.io/movie-application/)

---

## 🔍 Features

- 🎥 **Real-time Movie Search** using TMDB API
- 🔗 **Google Search Redirection** for detailed info, trailers, and reviews
- 📊 **Trending Section** showing most searched movies across users
- 🧠 **Debounced Search Optimization** to limit unnecessary API calls
- ☁️ **Appwrite Integration** for storing and analyzing search history
- 💡 **Related Movie Suggestions** for improved discovery experience
- 📱 **Responsive UI** built with Tailwind CSS

---

## 🛠️ Tech Stack

| Technology       | Purpose                                                           |
| ---------------- | ----------------------------------------------------------------- |
| **React.js**     | Frontend library for building dynamic UI                          |
| **Tailwind CSS** | Utility-first CSS framework for fast, responsive design           |
| **TMDB API**     | Source of real-time movie data                                    |
| **Appwrite**     | Backend-as-a-Service for search tracking and trending data        |
| **GitHub Pages** | Deployment platform for hosting the website                       |

---

## 🧠 Debouncing Technique

To enhance performance and reduce redundant API calls, a **debouncing mechanism** is implemented. It ensures that the search function is only triggered after the user stops typing for a brief interval.

### ✅ Benefits:
- Minimizes API usage
- Improves responsiveness and speed
- Enhances user experience with smooth UI updates
- Reduces backend load and bandwidth consumption

---

## 💡 Why MovieQuest?

While Google offers raw information, MovieQuest provides:
- 🔍 **Focused movie discovery** with similar suggestions
- 📈 **Socially-driven insights** with a trending section
- 🧭 **Clutter-free UI** focused only on movies
- 🎯 **Faster navigation** to movie-related content

---

## 📚 What I Learned

- API integration and state handling in **React**
- Performance optimization using **debouncing**
- Backend services using **Appwrite**
- Styling with **Tailwind CSS** for responsive design
- Deployment via **GitHub Pages**
- Building full-stack-like workflows with frontend + BaaS

---

## 🖼️ Screenshots

<!-- Replace the src links with your own hosted screenshots -->
| Search | Trending Section |
|------------------|------------------|
| ![Search](https://github.com/Srdxn/movie-application/blob/a654501ffd5e27f404693f7c2d15d5487c6c7a00/Screenshot3.png) | ![Trending](https://github.com/Srdxn/movie-application/blob/4686453bcaa76393236562ac2ca0506274e8ff38/Screenshot2.png) |

---

## 📦 Setup & Installation

```bash
# Clone the repository
git clone https://github.com/Srdxn/movie-application.git

# Navigate to project folder
cd movie-application

# Install dependencies
npm install

# Start development server
npm run dev
