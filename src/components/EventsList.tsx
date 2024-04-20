import { TEvent } from "@/lib/Types";
import EventCard from "./EventCard";

type EventsListProps = {
  events: TEvent[];
};

function EventsList({ events }: EventsListProps) {
  return (
    <section>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default EventsList;
