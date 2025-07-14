import { useParams } from "react-router-dom";
import { findEventById } from "../../utils/EventDatabase";
import Navigation from "../../components/Navigation/Navigation";
import {MdCalendarMonth} from "react-icons/md";
import {IoLocationSharp} from "react-icons/io5"
import "./EventDetails.css";
const EventDetails = ()=>{
  const {id}=useParams()
  const numId = Number(id)

  const filteredEvent = findEventById(numId)

  if (!filteredEvent) {
    return (
      <div className="event-details-container">
        <Navigation />
        <div className="event-details-wrapper">
          <div className="event-not-found">
            <h2>Event Not Found</h2>
            <p>The event you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    )
  }

  return(
    <div className="event-details-container">
      <Navigation />
      <div className="event-details-wrapper">
        <img src={filteredEvent.img} alt="Event" />
        <div className="event-details-content">
          <h3>Event Name : {filteredEvent.heading}</h3>
          <div className="small-details">
            <p className="date">
              <MdCalendarMonth className="icon" />
              <span className="font-weight-med">
                {filteredEvent.date.month}
              </span>
              <span className="font-weight-med">{filteredEvent.date.year}</span>
            </p>
            <p className="location font-weight-med">
              <IoLocationSharp className="icon" />
              {filteredEvent.location}
            </p>
            {filteredEvent.time && (
              <p className="time font-weight-med">
                <span className="font-weight-med">Time: {filteredEvent.time}</span>
              </p>
            )}
          </div>
          <p className="description">
            <span className="description-heading">Event Description:</span>
            <span className="description-heading-para">
              {filteredEvent.description}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
export default EventDetails;