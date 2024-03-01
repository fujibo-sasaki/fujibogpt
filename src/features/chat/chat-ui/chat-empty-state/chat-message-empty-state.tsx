import Typography from "@/components/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UpdateIndicator } from "../../../change-log/update-indicator";
import { Card } from "@/components/ui/card";
import { FC } from "react";
import { useChatContext } from "../chat-context";
import { ChatFileUI } from "../chat-file/chat-file-ui";
import { ChatStyleSelector } from "./chat-style-selector";
import { ChatTypeSelector } from "./chat-type-selector";
import { AI_NAME } from "@/features/theme/customise";
import { useSession } from "next-auth/react";
import {
  LayoutDashboard,
  MessageCircle,
  PanelLeftClose,
  PanelRightClose,
  Info,
  HelpCircle,
  AppWindow,
} from "lucide-react";

interface Prop {}

export const ChatMessageEmptyState: FC<Prop> = (props) => {
  const { fileState } = useChatContext();
  const { data: session } = useSession();

  const { showFileUpload } = fileState;

  return (
    <div className="grid grid-cols-1 w-full items-center container mx-auto max-w-4xl justify-center h-full gap-9">
      <Card className="col-span-3 flex flex-col gap-2 p-5 ">
        <Typography variant="h4" className="text-primary">
          {AI_NAME}にようこそ！
        </Typography>
        {/* <p className="text-xs text-muted-foreground">
            このChatGPT搭載のAIチャットボットは、2024年1月からプレビューで社内利用限定で公開されています。
            まだまだ未熟なAIですが、皆様のご協力により、AIの成長を目指しています。
            ご利用の際は、以下の項目を選択してください。
            </p>
        */}
        <p className="text-sm">
        富士紡ChatGPTは文章の要約や生成、WEB検索が可能な富士紡グループ独自の生成AI(ChatGPT)です。<br/>
        </p>
        <p className="text-sm">この度、DXの一環として、2024年3月からプレビュー版を社内利用限定で公開いたします。</p>
        <p className="text-sm">
        以下の注意事項をご確認の上、富士紡ChatGPTのご利用をお願いいたします。詳細は
        <b>
          <a href="http://groupeip1.intrafujibo.co.jp/pdf/富士紡ChatGPT利用マニュアル.pdf" target="_blank" className="text-blue-600 hover:underline">
            マニュアル
          </a>
        </b>
        をご参照下さい。
        <br/>
        </p>
        <p className="text-sm text-red-500">※富士紡ChatGPTで質問した内容は、外部に漏れないようにセキュリティ対策を行っております<br/><br/></p>
        <p className="text-sm">【注意事項】<br/>
          ・第三者の著作物を入力しない。固有名詞(既存著作物、作家名、作品の名称)を入力しない<br/>
          ・生成された回答結果に著作権侵害（既存の著作物との類似性・依拠性）がないか確認する<br/>
          ・回答結果の出典(根拠・裏付け)の確認や、回答結果の正確性を確認する<br/>
          ・業務以外のプライベートな利用は控える
        </p>
        <div className="flex justify-center flex-wrap gap-1 p-2">
          <div className="flex-none w-7 h-10 gap-0"><AppWindow /></div>
          <div className="flex-none w-80 h-10">
            画面の説明は
            <b>
              <a href="http://groupeip1.intrafujibo.co.jp/pdf/富士紡ChatGPT利用マニュアル.pdf" target="_blank" className="text-blue-600 hover:underline">
                こちら
              </a>
            </b>
          </div>
          <div className="flex-none w-7 h-10 gap-0"><HelpCircle /></div>
          <div className="flex-none w-80 h-10">
            会話スタイル・利用機能については
            <b>
              <a href="http://groupeip1.intrafujibo.co.jp/pdf/富士紡ChatGPT利用マニュアル.pdf" target="_blank" className="text-blue-600 hover:underline">
                こちら
              </a>
            </b>
          </div>
          <div className="flex-none w-7 h-10 gap-0"><Info /></div>
          <div className="flex-none w-64 h-10">
            活用事例については
            <b>
              <a href="http://groupeip1.intrafujibo.co.jp/pdf/富士紡ChatGPT利用マニュアル.pdf" target="_blank" className="text-blue-600 hover:underline">
                こちら
              </a>
            </b>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
          会話スタイルを選択してください。
          </p>
          <ChatStyleSelector disable={false} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            利用機能を選択してください。
          </p>
          <ChatTypeSelector disable={false} />
        </div>
        {showFileUpload === "data" && <ChatFileUI />}
      </Card>
    </div>
  );
};
