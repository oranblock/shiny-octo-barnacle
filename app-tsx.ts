import React, { useEffect } from 'react';
import { Camera } from './components/Camera';
import { GameUI } from './components/GameUI';
import { useGameStore } from './store/gameStore';
import { generateRandomNumber } from './lib/utils';

function App() {
  const {
    phase,
    setPhase,
    timeLeft,
    setTimeLeft,
    setPlayerNumber,
    resetGame,
    isEliminated,
    difficulty,
    setDifficulty
  } = useGameStore();

  // Initialize the game when component mounts
  useEffect(() => {
    setPlayerNumber(generateRandomNumber(1, 999));
  }, [setPlayerNumber]);

  // Game loop with fixed dependencies
  useEffect(() => {
    const gameLoop = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          // Handle phase transitions
          if (isEliminated) {
            setPhase('GAME_OVER');
            return 0;
          }
          // Use a callback to get the latest phase value
          setPhase((currentPhase) => 
            currentPhase === 'MOVE' ? 'FREEZE' : 'MOVE'
          );
          // Set appropriate time for next phase
          return phase === 'MOVE' ? 1 : 4;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(gameLoop);
  }, [setPhase, setTimeLeft, isEliminated]); // Removed phase from dependencies

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Red Light, Green Light
        </h1>
        
        <div className="relative">
          <Camera />
          <GameUI />
        </div>

        {phase === 'GAME_OVER' && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
            <div className="bg-white text-black p-8 rounded-lg max-w-md text-center">
              <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
              <p className="mb-6">You were eliminated. Better luck next time!</p>
              <button
                onClick={resetGame}
                className="px-6 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg"
              >
                Play Again
              </button>
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={resetGame}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
          >
            New Game
          </button>
          
          <select 
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;