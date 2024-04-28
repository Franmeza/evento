import EventCard from "./EventCard";
import getEvents from "@/api-requests/getEvents";

async function EventsList({ city }: { city: string }) {
  const events = await getEvents(city);
  return (
    <section className="flex gap-10 flex-wrap justify-center max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default EventsList;
