import { Menu, MenuContent, MenuHeader } from "@/components/menu";
import { FindAllChatThreadForCurrentUser } from "@/features/chat/chat-services/chat-thread-service";
import { MenuItems } from "./menu-items";
import { NewChat } from "./new-chat";

export const ChatMenu = async () => {
  const items = await FindAllChatThreadForCurrentUser();

  return (
    <Menu className=" p-2">
       <img src="/ai-icon.png" width="20px" height="20px" />
      <MenuHeader className="justify-end">
        <NewChat />
      </MenuHeader>
      <MenuContent>
        <MenuItems menuItems={items} />
      </MenuContent>
    </Menu>
  );
};
