import H1 from "@/components/H1";
import Image from "next/image";

type EventsPageProps = {
  params: {
    slug: string;
  };
};

async function EventPage({ params }: EventsPageProps) {
  const { slug } = params;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event = await response.json();
  return (
    <main>
      <section className="flex justify-center items-center py-14 md:py-20 relative overflow-hidden ">
        <Image
          className="object-cover blur-3xl z-0"
          src={event.imageUrl}
          alt="Event background image"
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw, 1280px" //the image wont have standard height and width
          priority //since it is the largest image, the browser will load it first
        />
        <div className="flex flex-col md:flex-row z-1 relative gap-6 lg:gap-16">
          <Image
            className="rounded-xl border-2 border-white/50 object-cover"
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-white/75 text-xl">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 text-lg capitalize mt-5 lg:mt-auto w-[95vw] rounded-md border-white/10 border-2 py-2  sm:w-full hover:scale-105 active:scale-[1.02] transition">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="text-center px-5 py-16">
        <section className="mb-12 ">
          <h2 className="text-2xl mb-8">About this event</h2>
          <p className="text-lg leading-8 text-white/75 max-w-4xl mx-auto">
            {event.description}
          </p>
        </section>
        <section>
          <h2 className="text-2xl mb-8">Location</h2>
          <p className="text-lg leading-8 text-white/75 max-w-4xl mx-auto">
            {event.location}
          </p>
        </section>
      </div>
    </main>
  );
}

export default EventPage;
