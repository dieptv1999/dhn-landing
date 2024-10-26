import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {Star} from "lucide-react";
import {Locale} from "@/i18n";
import {getTranslation} from "@/lib/i18n/getTranslation";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "/shop/shop_bep_xinh.jpeg",
    name: "Shop Bếp Xinh 247 - Đồ gia dụng",
    userName: "Chủ cửa hàng",
    comment:
      "Giải pháp rất hay, nhân viên của shop mình giờ không còn đóng thiếu hàng cho khách nữa. Có thiết bị giám sát là các bạn đóng gói cẩn thận hơn.",
    rating: 5.0,
  },
  {
    image: "/shop/me_nhim.jpeg",
    name: "Shop Mẹ Nhím - Đồ bỉm sửa",
    userName: "Chủ cửa hàng",
    comment:
      "Phần mềm dễ dùng lắm, không mất thời gian mà lại hiệu quả. Tôi giới thiệu thêm cho mấy shop cùng chung cư dùng rồi",
    rating: 4.8,
  },

  {
    image: "/shop/thu_cung.jpg",
    name: "Shop PetHome - Đồ thú cưng",
    userName: "Chủ cửa hàng",
    comment:
      "Tưởng đâu phải camera xịn mới quay được, DHN có giải pháp 2 camera rất tiện lợi mà không mất nhiều chi phí mua camera đắt tiền",
    rating: 4.9,
  },
  {
    image: "/shop/changhhie.jpg",
    name: "Shop ChangHie - Thời trang nữ",
    userName: "Chủ cửa hàng",
    comment:
      "Từ giờ không lo đơn bị tráo hàng nữa, trộm vía shop mình chưa thua kiện lần nào",
    rating: 5.0,
  },
  {
    image: "/shop/phukien.jpg",
    name: "Phụ kiện công nghệ Itech",
    userName: "Chủ cửa hàng",
    comment:
      "May mà có phần mềm, không thì tra camera an ninh nhìn lòi mắt không thấy được mã đơn, tra cứu rất tiện",
    rating: 5.0,
  },
  {
    image: "/shop/teashoes.jpg",
    name: "Teashoes - Giầy thời trang",
    userName: "Chủ cửa hàng",
    comment:
      "Shop mình hàng tháng 3000 đơn, nếu không có phần mềm thì không kiểm soát hết được đơn nào đóng rồi đơn nào chưa, mà ai đóng thiếu đóng sai là biết ngay. Quản lý rất hiệu quả",
    rating: 4.9,
  },
];

export const TestimonialSection = async ({lang}: { lang: Locale }) => {
  const translation = await getTranslation(lang);

  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          {translation('testimonials.title')}
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          {translation('testimonials.subTitle')}
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary"/>
                    <Star className="size-4 fill-primary text-primary"/>
                    <Star className="size-4 fill-primary text-primary"/>
                    <Star className="size-4 fill-primary text-primary"/>
                    <Star className="size-4 fill-primary text-primary"/>
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={review.image}
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </section>
  );
};
