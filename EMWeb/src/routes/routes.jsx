import EventList from "../pages/EventList/EventList";
import FilterEvents from "../pages/FilterEvents/FilterEvents";
import EventDetail from "../pages/EventDetails/EventDetails";
import Login from "../pages/Login/Login";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import Dashboard from "../pages/Dashboard/Dashboard"; 

export const routes = [
  { path: "/", element: <EventList /> },
  { path: "/find-events", element: <FilterEvents /> },
  { path: "/events/:id", element: <EventDetail /> },
  { path: "/login", element: <Login /> },
  { path: "/create-event", element: <CreateEvent /> },
  { path: "/dashboard", element: <Dashboard /> }, 
];
