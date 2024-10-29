import {Button} from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Check} from "lucide-react";
import Link from "next/link";

enum PopularPlan {
    NO = 0,
    YES = 1,
}

interface PlanProps {
    title: string;
    popular: PopularPlan;
    price: number;
    description: string;
    buttonText: string;
    benefitList: string[];
}

const plans: PlanProps[] = [
    {
        title: "Miễn phí",
        popular: 0,
        price: 0,
        description:
            "Với gói trải nghiệm này, bạn có thể ghi lại toàn bộ quá trình đóng gói.",
        buttonText: "Bắt đầu dùng thử",
        benefitList: [
            "5GB dung lượng",
            "1 người dùng",
            "1 cửa hàng",
            "Khung hình 2 camera",
            "Lưu video 20 ngày",
            "Thời lượng 1 video: 5 phút",
        ],
    },
    {
        title: "Gói cơ bản",
        popular: 0,
        price: 99,
        description:
            "Chỉ với 1,650đ/GB! Chi phí cực kỳ hợp lý.",
        buttonText: "Đăng ký",
        benefitList: [
            "60GB dung lượng",
            "2 người dùng",
            "2 cửa hàng",
            "Khung hình 2 camera",
            "Lưu video 25 ngày",
            "Thời lượng 1 video: 10 phút",
        ],
    },
    {
        title: "Gói tiết kiệm",
        popular: 1,
        price: 179,
        description:
            "Chỉ với 1,490đ/GB! Chi phí cực kỳ hợp lý.",
        buttonText: "Đăng ký",
        benefitList: [
            "120GB dung lượng",
            "10 người dùng",
            "10 cửa hàng",
            "Khung hình 2 camera",
            "Lưu video 25 ngày",
            "Thời lượng 1 video: 10 phút",
        ],
    },
    {
        title: "Gói cao cấp",
        popular: 0,
        price: 279,
        description:
            "Chỉ với 1,395đ/GB! Chi phí cực kỳ hợp lý.",
        buttonText: "Đăng ký",
        benefitList: [
            "200GB dung lượng",
            "20 người dùng",
            "20 cửa hàng",
            "Khung hình 2 camera",
            "Lưu video 25 ngày",
            "Thời lượng 1 video: 10 phút",
        ],
    },
];

export const PricingSection = () => {
    return (
        <section id={'pricing'} className="container py-12 sm:py-24">
            <h2 className="text-3xl md:text-4xl text-primary text-center mb-2 tracking-wider">
                Bảng giá
            </h2>

            {/*<h2 className="text-3xl md:text-4xl text-center font-bold mb-4">*/}
            {/*  Bảng giá */}
            {/*</h2>*/}

            <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
                Chọn một gói giá cả phải chăng có nhiều tính năng tốt phù hợp với nhu cầu của bạn.
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                {plans.map(
                    ({title, popular, price, description, buttonText, benefitList}) => (
                        <Card
                            key={title}
                            className={
                                popular === PopularPlan?.YES
                                    ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                                    : ""
                            }
                        >
                            <CardHeader>
                                <CardTitle className="pb-2">{title}</CardTitle>

                                <CardDescription className="pb-4">
                                    {description}
                                </CardDescription>

                                <div>
                                    <span className="text-3xl font-bold">{price}.000đ</span>
                                    <span className="text-muted-foreground"> /tháng</span>
                                </div>
                            </CardHeader>

                            <CardContent className="flex">
                                <div className="space-y-4">
                                    {benefitList.map((benefit) => (
                                        <span key={benefit} className="flex">
                      <Check className="text-primary mr-2"/>
                      <h3>{benefit}</h3>
                    </span>
                                    ))}
                                </div>
                            </CardContent>

                            <CardFooter>
                                <Link href={'#contact'} className={'w-full'}>
                                    <Button
                                        variant={
                                            popular === PopularPlan?.YES ? "default" : "secondary"
                                        }
                                        className="w-full hover:border-primary"
                                    >
                                        {buttonText}
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    )
                )}
            </div>
        </section>
    );
};
