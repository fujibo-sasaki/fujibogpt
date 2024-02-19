import Typography from "@/components/typography";
import { Card } from "@/components/ui/card";
import { AI_NAME } from "@/features/theme/customise";
import { FC } from "react";
import { NewChat } from "../../chat-menu/new-chat";

interface Prop {}

export const StartNewChat: FC<Prop> = (props) => {
  
　const a_style = {color: "blue"};
  const font_style = {color: "red"};
  
  return (
    <div className="grid grid-cols-1 w-full items-center container mx-auto max-w-4xl justify-center h-full gap-9">
      {/* <div className="col-span-2 gap-5 flex flex-col flex-1">
        <img src="/ai-icon.png" className="w-36" />
      </div>  */}
       <img src="/icon.jpg" className="object-contain w-40 h-50" />
      <Card className="gap-5 p-5 ">
        <Typography variant="h4" className="text-primary">
        {AI_NAME}にようこそ！
        </Typography>
        <br/>
        <div className="flex flex-col gap-2">
          <p className="">
          富士紡GPTは文章の要約や生成、WEB検索が可能な富士紡グループ独自の生成AI(ChatGPT)です。<br/>
          </p>
          <p>この度、DXの一環として、2024年3月からプレビュー版を社内利用限定で公開いたします。</p>
          <p>以下の注意事項をご確認の上、富士紡GPTのご利用をお願いいたします。詳細はマニュアルをご参照下さい。<br/></p>
          <p style={font_style}>※富士紡GPTで質問した内容は、外部に漏れないようにセキュリティ対策を行っております</p>
          <br/>
          <p>【注意事項】<br/>
          ・第三者の著作物を入力しない。固有名詞(既存著作物、作家名、作品の名称)を入力しない<br/>
          ・生成された回答結果に著作権侵害（既存の著作物との類似性・依拠性）がないか確認する<br/>
          ・回答結果の出典(根拠・裏付け)の確認や、回答結果の正確性を確認する<br/>
          ・業務以外のプライベートな利用は控える
          </p>
          <p>【マニュアル】<br/>
          &nbsp;&nbsp;
            <a href="http://groupeip1.intrafujibo.co.jp/keijiban/helppdf.nsf/MainTopicCopyCreationView/25EE7DC54E5E10D3492589250028B477?openDocument" target="_blank" style={a_style}>
            操作マニュアル
            </a>
          </p>
          <br/>
          <p>下記の➕を押して会話を開始できます</p>
        </div>
        <div className="-mx-1 -mb-1 p-1 flex flex-col border-t bg-muted">
          <NewChat />
        </div>
      </Card>
    </div>
  );
};
