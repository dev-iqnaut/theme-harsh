# Educator Website - React and Firebase

This project is a responsive **Educator Website** built using **ReactJS** and **Firebase Firestore** for dynamic content. The site includes a navigation bar, dropdowns for multiple pages, contact details, and dynamic data fetched from Firestore. The website is fully responsive with a mobile-first design.

## 🚀 Deployed Link

The project is live! Check it out [here](<add_your_deployed_link_here>).

## 🖼️ Screenshots

### Desktop View

![Desktop View](./images/desktop-view.png)

### Mobile View

![Mobile View](./images/mobile-view.png)

---

## 📁 Project Structure

The project follows a modular folder structure for better scalability and maintainability. Key folders are:

```bash
src
│
├── components
│   └── Header.jsx
│
├── config
│   └── Firebase.js
│
├── data
│   └── Data.js
│
├── images
│   └── gallery
│       └── img1.png
│       └── img2.png
│
└── App.js
components/Header.jsx: Contains the header and navigation bar component with dropdown functionality.
config/Firebase.js: Firebase configuration and initialization.
data/Data.js: Contains static navigation data for rendering the navbar.
images/gallery: Images used for the project.
```

## 🛠️ Technologies Used
ReactJS: For building the user interface.
Firebase Firestore: For fetching dynamic data.
CSS3: For styling the components and making the website responsive.
React Router: For navigation between different pages.
FontAwesome: For icons.
## 📄 Features
Responsive Design: Works well on both mobile and desktop.
Dropdown Navigation: Dynamic dropdown menus for nested pages.
Firestore Integration: Data dynamically fetched from Firestore, including contact details and school information.
Mobile Hamburger Menu: Mobile-first design with a collapsible menu for smaller screens.
## 💻 Installation & Setup
Clone the repository:

```bash
git clone https://github.com/your-username/educator-website.git
```

## Install dependencies:
Navigate to the project folder and run:

```bash
npm install
```
## Set up Firebase:
Add your Firebase configuration in src/config/Firebase.js.
Run the development server:

Start the app locally by running:
```bash
npm start
```
The app will be available at http://localhost:3000.

## 🔧 How to Use
Visit the deployed website using the deployed link.
Explore the dynamic navigation bar, dropdown menus, and content fetched from Firestore.
You can also sign in by clicking on the "Sign In" button in the header.
