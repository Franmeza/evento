import { TEvent } from "@/lib/Types";
import EventCard from "./EventCard";

type EventsListProps = {
  events: TEvent[];
};

function EventsList({ events }: EventsListProps) {
  return (
    <section className="flex gap-10 flex-wrap justify-center max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default EventsList;
