# Security Council - Contact Us Portal

<div align="center">

![Security Council Logo](https://img.shields.io/badge/Security%20Council-Contact%20Portal-blue?style=for-the-badge&logo=shield&logoColor=white)

A modern, responsive contact form application built with React, TypeScript, and Tailwind CSS. Features smooth animations, real-time validation, and a professional UI/UX design for security consulting services.

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)

[Live Demo](https://your-demo-link.com) • [Documentation](https://your-docs-link.com) • [Report Bug](https://github.com/your-repo/issues) • [Request Feature](https://github.com/your-repo/issues)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 **Modern UI/UX**
- Clean, professional design with glassmorphism effects
- Smooth micro-interactions and hover states
- Dark mode ready architecture

### 📱 **Responsive Design**
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

### ⚡ **Real-time Validation**
- Client-side form validation
- Instant feedback on user input
- Custom validation rules

</td>
<td width="50%">

### 🎭 **Smooth Animations**
- Framer Motion powered transitions
- Loading states and micro-animations
- Page transition effects

### 🔒 **TypeScript Support**
- Full type safety throughout
- Enhanced developer experience
- Compile-time error catching

### ♿ **Accessibility First**
- WCAG 2.1 AA compliant
- Screen reader optimized
- Keyboard navigation support

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

### **Frontend**
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

### **Styling & UI**
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Headless UI](https://img.shields.io/badge/Headless_UI-66E3FF?style=for-the-badge&logo=headlessui&logoColor=black)](https://headlessui.com/)

### **Icons & Assets**
[![React Icons](https://img.shields.io/badge/React_Icons-e91e63?style=for-the-badge&logo=react&logoColor=white)](https://react-icons.github.io/react-icons/)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)](https://fontawesome.com/)

### **Routing & Navigation**
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)

### **Testing & Quality**
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![Testing Library](https://img.shields.io/badge/Testing_Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

### **Development Tools**
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)

</div>

---

## 🚀 Quick Start

<div align="center">

### **Prerequisites**
![Node.js](https://img.shields.io/badge/Node.js-v18+-43853D?style=flat-square&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-v8+-CB3837?style=flat-square&logo=npm&logoColor=white)

</div>

```bash
# 1️⃣ Clone the repository
git clone <repository-url>
cd contact-us

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start development server
npm run dev

# 4️⃣ Open your browser
# http://localhost:5173
```

---

## 📦 Project Structure

```
🏗️ contact-us/
├── 📂 public/
│   └── Company Logo.png
├── 📂 src/
│   ├── 📂 components/           # React components
│   │   ├── 🎯 ContactUs.tsx    # Main contact form
│   │   ├── 💬 Testimonial.tsx  # Customer testimonials
│   │   ├── 🧭 NavBar.tsx       # Navigation
│   │   ├── 🦶 Footer.tsx       # Footer
│   │   ├── 🏠 Layout.tsx       # Layout wrapper
│   │   ├── 🎨 Logo.tsx         # Company logo
│   │   ├── ✅ SuccessModal.tsx # Success dialog
│   │   ├── 🌈 GradientDivider.tsx # Visual separator
│   │   └── ❌ ErrorPage.tsx    # 404 page
│   ├── 📂 api/                 # API integration
│   │   └── submitApi.ts
│   ├── 📂 components/__tests__ # Component tests
│   └── 📂 mocks/              # Test utilities
├── 📄 package.json
├── ⚙️ vite.config.ts
├── 🎨 tailwind.config.js
└── 📋 tsconfig.json
```

---

## 🎨 Component Showcase

<details>
<summary><b>🎯 ContactUs Component</b></summary>

### Features:
- **Real-time validation** with instant feedback
- **Service type selection** via radio buttons  
- **Phone number formatting** for international numbers
- **Email validation** with domain checking
- **Animated submission states** with loading spinners
- **Terms acceptance** validation

### Form Fields:
| Field | Type | Validation | Required |
|-------|------|------------|----------|
| First Name | Text | Letters only | ✅ |
| Last Name | Text | Letters only | ✅ |
| Email | Email | Format + domain | ✅ |
| Phone | Tel | Numeric format | ❌ |
| Service Type | Radio | Pre-defined options | ✅ |
| Message | Textarea | Free text | ❌ |
| Terms | Checkbox | Must accept | ✅ |

</details>

<details>
<summary><b>💬 Testimonial Component</b></summary>

### Features:
- **Auto-rotating carousel** (4-second intervals)
- **Manual navigation** with arrow controls
- **Smooth transitions** powered by Framer Motion
- **Avatar integration** from external sources
- **Responsive design** for all screen sizes

</details>

<details>
<summary><b>🧭 NavBar Component</b></summary>

### Features:
- **Sticky positioning** with backdrop blur
- **Dropdown menus** for service categories
- **Mobile hamburger menu** with animations
- **Logo integration** with routing
- **CTA button** highlighting

</details>

---

## 🧪 Testing

<div align="center">

![Test Coverage](https://img.shields.io/badge/Coverage-85%25-brightgreen?style=for-the-badge)
![Tests Passing](https://img.shields.io/badge/Tests-Passing-brightgreen?style=for-the-badge&logo=vitest)

</div>

### **Test Suite Includes:**
- ✅ **Unit Tests** - Component-level testing
- ✅ **Integration Tests** - Form submission flows  
- ✅ **Accessibility Tests** - ARIA and keyboard navigation
- ✅ **Responsive Tests** - Mobile and desktop layouts

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

---

## 🎯 Form Validation Rules

<table>
<tr>
<th>Field</th>
<th>Validation Rule</th>
<th>Error Message</th>
</tr>
<tr>
<td><strong>First/Last Name</strong></td>
<td>Letters, spaces, hyphens only</td>
<td>"Please enter only letters, spaces, or hyphens"</td>
</tr>
<tr>
<td><strong>Email</strong></td>
<td>Valid email format with domain</td>
<td>"Please enter a valid domain (e.g., .com)"</td>
</tr>
<tr>
<td><strong>Phone</strong></td>
<td>Numbers, hyphens, optional + prefix</td>
<td>"Please enter a valid phone number"</td>
</tr>
<tr>
<td><strong>Terms</strong></td>
<td>Must be checked</td>
<td>"You must accept the terms to continue"</td>
</tr>
</table>

---

## 📱 Responsive Breakpoints

<div align="center">

| Device | Breakpoint | Layout |
|--------|-----------|---------|
| 📱 **Mobile** | `< 640px` | Single column, stacked form |
| 📟 **Tablet** | `640px - 1024px` | Adapted spacing, touch-friendly |
| 🖥️ **Desktop** | `> 1024px` | Two-column layout, hover effects |

</div>

---

## ⚡ Performance Features

<div align="center">

### **Optimization Techniques**
[![Code Splitting](https://img.shields.io/badge/Code_Splitting-✅-brightgreen?style=flat-square)](#)
[![Lazy Loading](https://img.shields.io/badge/Lazy_Loading-✅-brightgreen?style=flat-square)](#)
[![Image Optimization](https://img.shields.io/badge/Image_Optimization-✅-brightgreen?style=flat-square)](#)
[![Bundle Analysis](https://img.shields.io/badge/Bundle_Analysis-✅-brightgreen?style=flat-square)](#)

</div>

- **⚡ Fast Startup** - Vite's lightning-fast HMR
- **🗜️ Optimized Bundles** - Tree shaking and code splitting  
- **🖼️ Image Optimization** - Compressed assets and lazy loading
- **🔄 Efficient Re-renders** - React 19 optimizations
- **💨 GPU Accelerated** - CSS transforms and animations

---

## 🎨 Design System

<div align="center">

### **Color Palette**
![Primary Blue](https://img.shields.io/badge/Primary-3B82F6-blue?style=for-the-badge&color=3B82F6)
![Secondary Gray](https://img.shields.io/badge/Secondary-6B7280-gray?style=for-the-badge&color=6B7280)
![Success Green](https://img.shields.io/badge/Success-10B981-green?style=for-the-badge&color=10B981)
![Error Red](https://img.shields.io/badge/Error-EF4444-red?style=for-the-badge&color=EF4444)

### **Typography Scale**
| Element | Font Weight | Size | Usage |
|---------|-------------|------|-------|
| **Headings** | 800 (Extrabold) | 2xl-5xl | Page titles, sections |
| **Subheadings** | 600 (Semibold) | lg-xl | Component titles |
| **Body Text** | 400 (Normal) | sm-base | Paragraphs, descriptions |
| **Labels** | 500 (Medium) | sm | Form labels, captions |

</div>

---

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server with HMR
npm run build        # Build for production
npm run preview      # Preview production build locally

# Testing
npm run test         # Run tests once
npm run test:watch   # Run tests in watch mode
npm run test:ui      # Open Vitest UI
npm run test:coverage # Generate coverage report

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
npm run type-check   # Run TypeScript compiler check
```

---

## 🤝 Contributing

<div align="center">

[![Contributors Welcome](https://img.shields.io/badge/Contributors-Welcome-brightgreen?style=for-the-badge&logo=github)](CONTRIBUTING.md)

</div>

1. **🍴 Fork** the repository
2. **🌟 Create** your feature branch (`git checkout -b feature/AmazingFeature`)
3. **💾 Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **🚀 Push** to the branch (`git push origin feature/AmazingFeature`)
5. **🔄 Open** a Pull Request

### **Development Guidelines:**
- Follow the existing code style and conventions
- Write tests for new features
- Update documentation as needed
- Use conventional commit messages

---

## 📄 License

<div align="center">

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

</div>

---

</div>

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Built with ❤️ using **React** • **TypeScript** • **Tailwind CSS**

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=NeeradNandan.contact-us)
[![GitHub stars](https://img.shields.io/github/stars/NeeradNandan/contact-us?style=social)](https://github.com/NeeradNandan/contact-us)

</div>
