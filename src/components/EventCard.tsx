import { TEvent } from "@/lib/Types";
import React from "react";

type EventCardProps = {
  event: TEvent;
};

function EventCard({ event }: EventCardProps) {
  return <section>{event.name}</section>;
}

export default EventCard;
