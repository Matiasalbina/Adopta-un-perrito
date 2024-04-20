export const Tags = ({text, color}) => {
  return <span className={`badge text-${color}`}>{text}</span>;
};
