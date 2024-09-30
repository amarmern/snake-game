const Dice = ({ onRoll }) => {
  const rollDice = () => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    onRoll(diceValue);
  };

  return (
    <div>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
};

export default Dice;
