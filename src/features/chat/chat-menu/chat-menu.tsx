import { Menu, MenuContent, MenuHeader } from "@/components/menu";
import { FindAllChatThreadForCurrentUser } from "@/features/chat/chat-services/chat-thread-service";
import { MenuItems } from "./menu-items";
import { NewChat } from "./new-chat";
import "./imgstyle.css";

export const ChatMenu = async () => {
  const items = await FindAllChatThreadForCurrentUser();

  
  return (
    <Menu className=" p-2">
       <img src="/icon.jpg" className="object-contain" />
      <MenuHeader className="justify-end">
        <NewChat />
      </MenuHeader>
      <MenuContent>
        <MenuItems menuItems={items} />
      </MenuContent>
    </Menu>
  );
};
