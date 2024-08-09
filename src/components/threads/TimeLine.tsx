import { Section } from "@radix-ui/themes";
import Entry from "./components/Entry";
import AddThread from "./components/AddThread";
import { ScrollArea } from "@/packages/components/ui/scroll-area";

function TimeLine() {
  return (
    <Section>
      {/* list threads */}
      <ScrollArea className="overflow-y-auto">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <Entry key={i} />
          ))}
      </ScrollArea>
      <AddThread />
    </Section>
  );
}

export default TimeLine;
