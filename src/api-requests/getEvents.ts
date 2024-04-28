import { TEvent } from "@/lib/Types";

async function getEvents(city: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  const events: TEvent[] = await response.json();
  return events;
}

export default getEvents;
