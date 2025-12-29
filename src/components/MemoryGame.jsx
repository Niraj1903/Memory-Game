import { useState } from "react";

const MemoryGame = () => {
  const [gridSize, setGridSize] = useState(4);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [won, setWon] = useState(false);

  const initialGame = () => {
    const totalCards = gridSize * gridSize;
    const pairCount = Math.floor(totalCards / 2);
    const numbers = [...Array(pairCount).keys()].map((n) => n + 1);
    const shuffledCards = [...numbers, ...numbers].sort();
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-grey-100 p-4">
        <h1 className="text-3xl font-bold mb-6">Memory Game</h1>
        <div>
          <label className="mr-2" htmlFor="gridSize">
            Grid Size : (maz 10)
          </label>
          <input
            className="border-2 border-gray-300 rounded px-2 py-1"
            type="number"
            id="gridSize"
            min="2"
            max="10"
            value={gridSize}
            onChange={(e) => setGridSize(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default MemoryGame;
