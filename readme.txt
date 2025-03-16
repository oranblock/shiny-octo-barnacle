# Red Light, Green Light Game

A modern web implementation of the classic "Red Light, Green Light" children's game using webcam-based motion detection. The game uses your device's camera to detect if you move during the "red light" phase.

![Red Light, Green Light Game](https://i.imgur.com/placeholder.jpg)

## 🎮 How to Play

1. Allow camera access when prompted
2. When the screen shows "MOVE!", you are free to move around
3. When the screen shows "FREEZE!", you must remain completely still
4. Your score increases each time you successfully transition to the "MOVE" phase
5. If you move during the "FREEZE" phase, you'll be eliminated
6. Try to achieve a high score!

## 📋 Features

- Real-time motion detection using your webcam
- Three difficulty levels (Easy, Medium, Hard)
- Score tracking and high score recording
- Visual feedback for game phases
- Responsive design that works on various screen sizes

## 🔧 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/red-light-green-light.git
   cd red-light-green-light
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
│
├── components/
│   ├── Camera.tsx         # Webcam component with motion detection
│   └── GameUI.tsx         # Game UI components (timer, score, etc.)
│
├── lib/
│   └── utils.ts           # Utility functions
│
├── store/
│   └── gameStore.ts       # Game state management with Zustand
│
├── App.tsx                # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## 🛠️ Technologies Used

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Zustand** - State management
- **TailwindCSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Web APIs** - MediaDevices, Canvas API

## 📝 Technical Details

### Motion Detection

The game uses a pixel-differencing algorithm to detect motion:
1. Captures images from the webcam feed
2. Compares consecutive frames pixel by pixel
3. Calculates the average difference in pixel values
4. Triggers elimination if the difference exceeds the sensitivity threshold

### State Management

Game state is managed using Zustand, providing a simple and efficient way to handle:
- Game phases (MOVE, FREEZE, GAME_OVER)
- Timer countdown
- Score tracking
- Player elimination

## 🔮 Future Improvements

- Add sound effects and background music
- Implement multiplayer support
- Add customizable game settings (round time, sensitivity)
- Create custom themes and visual styles
- Add a leaderboard with backend integration

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- Inspired by the classic children's game and the popular Korean Netflix series
- Built with modern web technologies for an interactive experience
