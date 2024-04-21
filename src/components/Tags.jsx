export const Tags = ({ text, color }) => {
  return (
    <button type="button" className={`btn btn-${color}`}>
      {text}
    </button>
  );
};
