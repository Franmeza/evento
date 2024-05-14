import prisma from "@/lib/prisma";
import { capitalize } from "@/lib/utils";

async function getEvents(city: string, page = 1) {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });
  if (events.length === 0) {
    throw new Error(`There are no events for ${city}`);
  }

  const totalCount = await prisma.eventoEvent.count({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
  });
  return { events, totalCount };
}

export default getEvents;
