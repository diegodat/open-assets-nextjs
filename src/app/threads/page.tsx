import { Box, Container, Section } from "@radix-ui/themes";
import { Tabs, TabsContent, TabsList } from "@/packages/components/ui/tabs";
import TimeLine from "@/components/threads/TimeLine";
import Recruitment from "@/components/threads/Recruitment";
import Organize from "@/components/threads/Organize";
import { TabsTriggerThreads } from "@/components/threads/components/TabsThreads";

function Threads() {
  return (
    <Box py="8">
      <Container asChild>
        <Section>
          <Tabs defaultValue="timeline">
            <TabsList className="flex bg-transparent p-0">
              <TabsTriggerThreads value="timeline">
                タイムライン
              </TabsTriggerThreads>
              <TabsTriggerThreads value="recruitment">募集</TabsTriggerThreads>
              <TabsTriggerThreads value="organize">組織</TabsTriggerThreads>
            </TabsList>
            <TabsContent value="timeline">
              <TimeLine />
            </TabsContent>
            <TabsContent value="recruitment">
              <Recruitment />
            </TabsContent>
            <TabsContent value="organize">
              <Organize />
            </TabsContent>
          </Tabs>
        </Section>
      </Container>
    </Box>
  );
}

export default Threads;
