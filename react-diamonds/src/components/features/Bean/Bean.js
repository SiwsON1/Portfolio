const Bean = ({ color, draggable, onDragStart, onDragEnd, onDrop }) => {
    return (
      <svg
        viewBox="0 0 100 100"
        draggable={draggable}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDrop={onDrop}
        style={{ transition: 'all 0.9s ease-in-out' }}
      >
        <circle cx="50" cy="50" r="50" fill={color} />
      </svg>
    );
  };

  export default Bean;