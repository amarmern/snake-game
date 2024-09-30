const Player = ({ player, position }) => {
  return (
    <div className={`player player-${player}`}>
      Player {player}: Position {position}
    </div>
  );
};

export default Player;
