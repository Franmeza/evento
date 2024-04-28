import { TEvent } from "@/lib/Types";

async function getEvent(slug: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event: TEvent = await response.json();
  return event;
}

export default getEvent;
