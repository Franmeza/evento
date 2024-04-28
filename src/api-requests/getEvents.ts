import prisma from "@/lib/prisma";
import { capitalize } from "@/lib/utils";

async function getEvents(city: string) {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
  });
  return events;
}

export default getEvents;
