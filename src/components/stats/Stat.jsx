const Stat = ({ title, data }) => {
  return (
    <div className="stat-container">
      <span className="stat-title">{title}</span>

      <span className="stat-data">{data}</span>
    </div>
  );
};

export default Stat;
