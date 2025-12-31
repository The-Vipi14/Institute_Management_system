import "./RoleCard.css";

const RoleCard = ({
  title,
  description,
  points,
  buttonText,
  color,
  outline,
}) => {
  return (
    <div className={`role-card ${color}`}>
      <div className="role-icon">🎓</div>

      <h3>{title}</h3>
      <p className="role-desc">{description}</p>

      <ul>
        {points.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>

      <button className={outline ? "btn-outline" : "btn-primary"}>
        {buttonText} →
      </button>
    </div>
  );
};

export default RoleCard;
