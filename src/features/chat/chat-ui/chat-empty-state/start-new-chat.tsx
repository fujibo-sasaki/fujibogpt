import Typography from "@/components/typography";
import { Card } from "@/components/ui/card";
import { AI_NAME } from "@/features/theme/customise";
import { FC } from "react";
import { NewChat } from "../../chat-menu/new-chat";
import {
  LayoutDashboard,
  MessageCircle,
  PanelLeftClose,
  PanelRightClose,
  AppWindow,
} from "lucide-react";

interface Prop {}

export const StartNewChat: FC<Prop> = (props) => {

  const p_style = {fontSize: "15px"};
  return (
    <div className="grid grid-cols-1 w-full items-center container mx-auto max-w-4xl justify-center h-full gap-9 overflow-auto">
      <Card className="gap-5 p-5">
        <Typography variant="h4" className="text-primary">
        {AI_NAME}にようこそ！
        </Typography>
        <br/>
        <div className="flex flex-col gap-2">
          <p style={p_style}>
          富士紡ChatGPTは文章の要約や生成、WEB検索が可能な富士紡グループ独自の生成AI(ChatGPT)です。<br/>
          </p>
          <p style={p_style}>この度、DXの一環として、2024年3月からプレビュー版を社内利用限定で公開いたします。</p>
          <p style={p_style}>
            以下の注意事項をご確認の上、富士紡ChatGPTのご利用をお願いいたします。
            <br/>
          </p>
          <p className="text-red-500" style={p_style}>※富士紡ChatGPTで質問した内容は、外部に漏れないようにセキュリティ対策を行っております</p>
          <p className="text-red-500" style={p_style}>※富士紡ChatGPT以外の個人向け生成AIは、情報漏洩の危険性があるため、利用を控えてください</p>
          <br/>
          <p style={p_style}>【注意事項】<br/>
          ・第三者の著作物を入力しない。固有名詞(既存著作物、作家名、作品の名称)を入力しない<br/>
          ・生成された回答結果に著作権侵害（既存の著作物との類似性・依拠性）がないか確認する<br/>
          ・回答結果の出典(根拠・裏付け)の確認や、回答結果の正確性を確認する<br/>
          ・業務以外のプライベートな利用は控える
          </p>
          <div className="flex justify-start flex-wrap gap-1 p-2">
           <div className="w-7 h-10 gap-0"><AppWindow /></div>
           <div className="w-auto h-10 min-w-3">
            本画面の説明は
            <b>
             <a href="http://groupeip1.intrafujibo.co.jp/pdf/富士紡ChatGPT利用マニュアル.pdf" target="_blank" className="text-blue-600 hover:underline">
                こちら
             </a>
            </b>
           </div>
          </div>
        </div>
        <div className="-mx-1 -mb-1 p-1 flex flex-col">
          <p>下記の➕を押して会話を開始できます</p>
        </div>
        <div className="-mx-1 -mb-1 p-1 flex flex-col border-t bg-muted">
          <NewChat />
        </div>
      </Card>
    </div>
  );
};
