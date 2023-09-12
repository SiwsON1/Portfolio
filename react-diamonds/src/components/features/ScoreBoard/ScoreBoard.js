const ScoreBoard = ({ score }) => {
    return (
      <div className="w-full text-center py-4">
        <span className="text-xl font-bold">Score: </span>
        <span className="text-xl">{score}</span>
      </div>
    );
  };

  export default ScoreBoard;