import H1 from "@/components/H1";
import { usePathname } from "next/navigation";

function EventsPage() {
  const city = usePathname;
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>Events in Austin</H1>
    </main>
  );
}

export default EventsPage;
