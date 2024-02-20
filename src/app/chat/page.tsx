import { Card } from "@/components/ui/card";
import { StartNewChat } from "@/features/chat/chat-ui/chat-empty-state/start-new-chat";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <Card className="h-full items-center flex justify-center flex-1">
    <img src="/icon.jpg" className="object-contain w-40 h-50 relative top-0 right-0" />
      <StartNewChat />
    </Card>
  );
}
