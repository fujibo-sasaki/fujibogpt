import { Menu, MenuContent, MenuHeader } from "@/components/menu";
import { FindAllChatThreadForCurrentUser } from "@/features/chat/chat-services/chat-thread-service";
import { MenuItems } from "./menu-items";
import { NewChat } from "./new-chat";
import './imgstyles.css';

export const ChatMenu = async () => {
  const items = await FindAllChatThreadForCurrentUser();
  const img_style = {};
  return (
    <Menu className=" p-2">
       <img src="/icon.jpg" className={imgstyle} />
      <MenuHeader className="justify-end">
        <NewChat />
      </MenuHeader>
      <MenuContent>
        <MenuItems menuItems={items} />
      </MenuContent>
    </Menu>
  );
};
