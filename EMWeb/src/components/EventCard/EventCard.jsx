import { Link } from "react-router-dom";
import { canDeleteEvent } from "../../utils/EventDatabase.jsx";
import "./EventCard.css";

const EventCard = ({ id, heading, date, location, img, onDelete }) => {
  const { year, month } = date;
  const isDeletable = canDeleteEvent(id);

  const handleDelete = (e) => {
    e.preventDefault(); // Prevent navigation
    e.stopPropagation(); // Prevent event bubbling
    
    if (window.confirm(`Are you sure you want to delete "${heading}"?`)) {
      onDelete(id);
    }
  };

  return (
    <Link to={`/events/${id}`}>
      <div className="card">
        {isDeletable && (
          <button 
            className="delete-btn" 
            onClick={handleDelete}
            title="Delete event"
          >
            ✕
          </button>
        )}
        <div className="card-content">
          <h3>{heading}</h3>
          <p>
            <span>Year: {year}</span>
            <span>Month: {month}</span>
          </p>
          <p>{location}</p>
        </div>

        <div className="card-img-wrapper">
          <img src={img} alt="image not found" />
        </div>
      </div>
    </Link>
  );
};

export default EventCard;