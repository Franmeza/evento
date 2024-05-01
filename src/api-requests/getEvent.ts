import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  if (!event) {
    return notFound();
  }
  return event;
}

export default getEvent;
