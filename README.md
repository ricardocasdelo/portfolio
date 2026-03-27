# Portfolio Web Application

A modern, interactive portfolio web application built with React, TypeScript, and Vite. Features include a beautiful portfolio display, editing capabilities, and user authentication.

## Features

- 🎨 **Modern UI** - Built with React and Tailwind CSS for a responsive, beautiful design
- ✏️ **Portfolio Editing** - Add and edit your portfolio information in real-time
- 🔐 **Authentication** - Secure login system to protect portfolio edits
- 💾 **Local Storage** - Automatically saves your portfolio data locally
- ⚡ **Fast & Lightweight** - Built with Vite for optimal performance
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Runtime**: Node.js

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ricardocasdelo/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run clean` - Clean build artifacts
- `npm run lint` - Check TypeScript without emitting

## Project Structure

```
src/
├── components/
│   ├── Login.tsx          # Authentication component
│   ├── PortfolioEdit.tsx  # Portfolio editing interface
│   └── PortfolioView.tsx  # Portfolio display
├── App.tsx                # Main application
├── data.ts                # Portfolio data structure
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## Usage

1. Open the application in your browser
2. Click the login button to authenticate
3. Once logged in, click "Edit" to customize your portfolio
4. Your changes are automatically saved to your browser's local storage
5. View your portfolio by clicking "View"

## Building for Production

```bash
npm run build
```

The optimized production build will be created in the `dist/` directory.

## License

MIT License - feel free to use this project for your own portfolio!

## Author

Ricardo Casdelo - [@ricardocasdelo](https://github.com/ricardocasdelo)
