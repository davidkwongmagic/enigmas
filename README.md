# 🦁 The Menagerie Puzzle Hunt - React Edition

A modern React/Next.js implementation of The Menagerie Puzzle Hunt, featuring 8 unique puzzles based on the beautiful Enigma Deck from Theory11.

## ✨ Features

- **🔐 Password Protection**: Secure entry gate to the puzzle hunt
- **🧩 8 Unique Puzzles**: Each based on intricate card designs
- **💡 Progressive Hints**: Get help when you're stuck
- **🏆 Hall of Fame**: Celebrate puzzle masters
- **📱 Responsive Design**: Works perfectly on all devices
- **🎨 Modern UI**: Built with Tailwind CSS for a beautiful experience
- **💾 Progress Tracking**: Automatically saves your progress
- **⚡ Fast Performance**: Optimized React/Next.js app

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd menagerie-puzzle-hunt
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Password

To access the puzzle hunt, you'll need the password. Check the website domain for hints!

## 🛠️ Built With

- **React 18** - Modern React with hooks
- **Next.js 15** - Full-stack React framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Inter & Montserrat typography

## 📁 Project Structure

```text
src/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── PasswordGate.tsx # Password protection
│   │   └── AnswerChecker.tsx # Puzzle answer validation
│   ├── context/             # React context providers
│   │   └── AuthContext.tsx  # Authentication state
│   ├── hints/               # Hints page
│   ├── hall-of-fame/        # Hall of Fame page
│   ├── info/                # Info & Errata page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
└── public/
    └── images/              # Puzzle card images
```

## 🎯 How to Play

1. **Enter the Password**: Use the hints to figure out the entry password
2. **Study the Cards**: Each puzzle image contains hidden patterns or messages
3. **Submit Answers**: Enter your answers in the format "Ace of Hearts", etc.
4. **Get Hints**: Stuck? Use the progressive hint system
5. **Complete All 8**: Solve every puzzle to join the Hall of Fame!

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Components

- **AuthProvider**: Manages password authentication state
- **PasswordGate**: Protects content behind password wall
- **AnswerChecker**: Validates puzzle answers and tracks progress
- **Header**: Responsive navigation with active states

## 🎨 Design System

- **Primary Color**: Green (#22c55e)
- **Typography**: Inter (body), Montserrat (headings)
- **Animations**: Smooth transitions and hover effects
- **Layout**: Responsive grid system with mobile-first approach

## 📱 Responsive Features

- Mobile-optimized navigation
- Touch-friendly interface
- Adaptive image sizing
- Collapsible sections on small screens

## 🔒 Security Features

- Client-side password protection
- LocalStorage for progress persistence
- No sensitive data exposure

## 🧪 Testing

The app has been tested with:

- ✅ All puzzle answer validation
- ✅ Progress saving/loading
- ✅ Responsive design
- ✅ Password protection
- ✅ Navigation between pages

## 📄 License

This project showcases the beautiful Enigma Deck from Theory11. The card designs are property of Theory11.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 🙏 Acknowledgments

- [Theory11](https://store.theory11.com/products/enigma-deck) for the beautiful Enigma Deck
- The puzzle hunting community for inspiration
- React and Next.js teams for amazing tools

---

## Ready to test your puzzle-solving skills? Enter The Menagerie! 🦁