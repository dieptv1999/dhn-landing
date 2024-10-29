import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import {Locale} from "@/i18n";
import {getTranslation} from "@/lib/i18n/getTranslation";

interface BenefitsProps {
  icon: string;
  title: string;
  description: any;
}

export const BenefitsSection = async ({lang}: {lang: Locale}) => {
  const translation = await getTranslation(lang);

  const benefitList: BenefitsProps[] = [
    {
      icon: "CircleDollarSign",
      title: "Mất hàng mất tiền",
      description:
        'Mất hàng mất tiền từ những đơn trả hàng mà khiếu nại thua',
    },
    {
      icon: "ArrowLeftRight",
      title: "Tráo hàng",
      description:
        "Người mua hàng đánh tráo sản phẩm và trả hàng",
    },
    {
      icon: "StarOff",
      title: "Bị đánh giá thấp",
      description:
        "Shop bị đánh giá thấp do nhân viên đóng thiếu hoặc sai đơn hàng",
    },
    {
      icon: "Scale",
      title: "Bằng chứng giao hàng",
      description:
        "Không có bằng chứng giao hàng cho shipper với đơn thất lạc",
    },
  ];
  return (
    <section id="benefits" className="container py-12 sm:py-24">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">{translation('benefit.title')}</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {translation('benefit.description')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-start">
            {translation('benefit.descriptionDetail')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
