import EventCard from "../../components/EventCard/EventCard.jsx";
import { getAllEvents, deleteEvent } from "../../utils/EventDatabase.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import "./EventList.css";
import { useState, useEffect } from "react";

const EventList = () => {
  const [allEvents, setAllEvents] = useState([]);

  const refreshEvents = () => {
    const combinedEvents = getAllEvents();
    setAllEvents(combinedEvents);
  };

  useEffect(() => {
    // Get all events (static + custom)
    refreshEvents();
  }, []);

  // Listen for when the component comes back into focus (e.g., when user navigates back)
  useEffect(() => {
    const handleFocus = () => {
      refreshEvents();
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const handleDeleteEvent = async (eventId) => {
    try {
      await deleteEvent(eventId);
      refreshEvents(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting event:', error);
      alert(error.message || 'Failed to delete event');
    }
  };

  const renderEventCards = () => {
    return allEvents.map(({ id, date, heading, location, img }) => {
      return (
        <EventCard
          key={id}
          id={id}
          date={date}
          heading={heading}
          location={location}
          img={img}
          onDelete={handleDeleteEvent}
        />
      );
    });
  };

  return (
    <div>
      <Navigation/>
      <div className="event-list-wrapper">
        <div className="event-list">
          {allEvents.length > 0 ? (
            renderEventCards()
          ) : (
            <p>No events available</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default EventList;