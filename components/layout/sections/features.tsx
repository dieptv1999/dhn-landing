import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import {Locale} from "@/i18n";
import {getTranslation} from "@/lib/i18n/getTranslation";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

export const FeaturesSection = async ({lang}: {lang: Locale}) => {
  const translation = await getTranslation(lang);

  const featureList: FeaturesProps[] = [
    {
      icon: "TabletSmartphone",
      title: "Đa nền tảng",
      description:
        "Tương thích iOS, Android, Windows.. Không quan trọng cấu hình. Có hỗ trợ máy quét",
    },
    {
      icon: "SearchCheck",
      title: "Tìm kiếm nhanh chóng",
      description:
        "Trích xuất và tải về nhanh chóng theo mã vận đơn. Video khiếu nại đủ tiêu chuẩn của sàn TMĐT",
    },
    {
      icon: "Cctv",
      title: "2 camera đồng thời",
      description:
        "Camera chính toàn cảnh đóng hàng, 1 camera soi mã vận đơn",
    },
    {
      icon: "Store",
      title: "Quản lý đa kho",
      description:
        "Chủ sở hữu có thể quản lý nhiều kho hàng với nhiều nhân viên (quản lý phân quyền) trong một kho.",
    },
    {
      icon: "Undo2",
      title: "Quản lý đơn hoàn",
      description:
        "Quay kiện hàng hoàn kiểm tra nguyên vẹn của sản phẩm.",
    },
    {
      icon: "Truck",
      title: "Quản lý gửi vận chuyển",
      description:
        "Lưu lại bằng chứng đã bàn giao các đơn hàng cho đơn vị vận chuyển",
    },
  ];
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        {translation('feature.title')}
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-8">
        {translation('feature.subTitle')}
      </h2>

      {/*<h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">*/}
      {/*  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem*/}
      {/*  fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio*/}
      {/*  facere tenetur.*/}
      {/*</h3>*/}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
