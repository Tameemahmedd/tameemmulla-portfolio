# Tameem Ahmed Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing professional experience, skills, and projects.

## 🚀 Overview

This portfolio website is designed to present my professional journey as a Software Engineer with a focus on Backend Development, Quality Engineering, Automation, and DevOps. The site features a clean, modern design with smooth animations and a developer-friendly aesthetic.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern Tech Stack**: Built with React 19 and Vite for optimal performance
- **Interactive Components**: Engaging UI elements including a code-style hero section
- **Comprehensive Sections**:
  - Hero section with animated code block introduction
  - About me overview
  - Professional experience timeline
  - Technical skills showcase
  - Project portfolio
  - Professional certifications
  - Client testimonials
  - Personal strengths
- **SCSS Styling**: Modular and maintainable styling with Sass
- **Fast Loading**: Optimized with Vite's build system for quick load times
- **Downloadable Resume**: Direct access to PDF resume

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Sass/SCSS
- **Linting**: ESLint with React-specific configurations
- **Package Manager**: npm
- **Font**: Fira Code (for that authentic developer feel)

## 📁 Project Structure

```
tameemahmedsdet-portfolio/
├── public/                 # Static assets
│   ├── resume.pdf         # Professional resume
│   ├── resume-sdet.pdf    # SDET-specific resume
│   └── *.png              # Certification badges and images
├── src/
│   ├── assets/            # Source assets
│   ├── components/        # React components
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Hero.jsx       # Landing section
│   │   ├── About.jsx      # About me section
│   │   ├── Experience.jsx # Work experience
│   │   ├── Skills.jsx     # Technical skills
│   │   ├── Projects.jsx   # Project showcase
│   │   ├── Certifications.jsx # Professional certifications
│   │   ├── Testimonials.jsx   # Client testimonials
│   │   ├── Strengths.jsx  # Personal strengths
│   │   └── Footer.jsx     # Footer section
│   ├── styles/
│   │   ├── main.scss      # Main stylesheet
│   │   ├── _variables.scss # SCSS variables
│   │   └── [component].scss # Component-specific styles
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Application entry point
├── index.html             # HTML entry point
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
└── eslint.config.js       # ESLint configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd tameemmulla-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory. You can then deploy this directory to any static hosting service.

## 🚀 Deployment

This site can be deployed to various platforms:

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### GitHub Pages
```bash
npm run build
# Add dist folder to gh-pages branch
git subtree push --prefix dist origin gh-pages
```

## 🎨 Customization

### Updating Content
- Edit component files in `src/components/` to update section content
- Modify `src/styles/_variables.scss` to change color scheme
- Replace resume files in `public/` directory

### Adding New Sections
1. Create a new component in `src/components/`
2. Add corresponding SCSS file
3. Import in `App.jsx`
4. Import styles in `main.scss`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mohammed Tameem Ahmed Mulla**
- Software Engineer
- Focus: Backend Development, Quality Engineering, Automation & DevOps

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

*Built with ❤️ using React and Vite*
