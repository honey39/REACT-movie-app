# 🎬 React Movie App

A responsive and interactive movie browsing application built using **React**. Users can search for movies, view poster details, and add/remove their favorites — all with a smooth user experience and modern UI.

---

## 🚀 Features

- 🔍 Search for movies by title
- 🖼️ View poster and release year
- ♥ Mark/unmark movies as favorites (using a Unicode heart symbol)
- 💾 Persist favorites using localStorage
- 🧱 Responsive layout with CSS Grid
- 🎨 Hover animations for better UX

---

```

## 📁 Folder Structure

D:/REACT
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── MovieCard.jsx
│ │ └── NavBar.jsx
│ ├── contexts/
│ │ └── MovieContext.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ └── Favorites.jsx
│ ├── services/
│ │ └── api.js <-- (This is ignored in Git for security)
│ ├── App.jsx
│ └── main.jsx
├── .gitignore
├── vite.config.js
├── package.json
└── README.md
```

---

## 🛠️ Getting Started

### Clone the Repository

```bash
git clone https://github.com/honey39/REACT-movie-app.git
cd REACT-movie-app

-----


## install dependencies

npm install

-------

## run the App

npm run dev
Visit: http://localhost:5173/

-------

## Tech Stack

React (with Hooks)
Vite for fast builds
CSS Grid & Flexbox
LocalStorage for persistence

-------

## API Configuration - This project uses an external movie API.

To enable movie search and images:

## 1. create a file

/src/services/api.js

## 2.Add your API key (e.g., from TMDb):

export const API_KEY = "your_api_key_here";
export const BASE_URL = "https://api.themoviedb.org/3";

(This file is ignored in .gitignore for security.)
-------

## 📸 Screenshots

### Home Page
![Home Screenshot](./screenshots/home.png)

### Favorites Page
![Favorites Screenshot](./screenshots/favorites.png)


--------

## 🙏 Acknowledgements

This project is based on the YouTube tutorial by **JavaScript Mastery**:

🎥 [Build a Movie App with React](https://www.youtube.com/watch?v=G6D9cBaLViA&t=183s)

Special thanks to the creator for the original walkthrough.
I followed the tutorial and made minor modifications to suit my learning style.

--------

## TODO / Future Enhancements

Pagination
Movie detail popup or page
Search suggestions
Add genres and filters
Integrate backend (Node.js + MongoDB)

--------

## License

This project is open-source and available under the MIT License.
```
