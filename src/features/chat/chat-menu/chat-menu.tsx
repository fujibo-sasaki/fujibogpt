import { Menu, MenuContent, MenuHeader } from "@/components/menu";
import { FindAllChatThreadForCurrentUser } from "@/features/chat/chat-services/chat-thread-service";
import { MenuItems } from "./menu-items";
import { NewChat } from "./new-chat";

export const ChatMenu = async () => {
  const items = await FindAllChatThreadForCurrentUser();

  
  return (
    <Menu className=" p-2">
   {/* <img src="/icon.jpg" className="object-contain w-40 h-50" /> */} 
      <MenuHeader className="justify-end">
        <NewChat />
      </MenuHeader>
      <MenuContent>
        <MenuItems menuItems={items} />
      </MenuContent>
    </Menu>
  );
};
