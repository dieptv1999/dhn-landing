import Image from "next/image";
import React from "react";
import {CheckCheckIcon} from "lucide-react";

interface ServiceProps {
    title: string;
    description: string | React.ReactNode;
    image: string;
    reverse?: boolean;
}

const serviceList: ServiceProps[] = [
    {
        title: "Dễ dàng sử dụng",
        description:
            <div className={'flex flex-col gap-3'}>
                <span>Cài đặt và sử dụng dễ dàng với các thiết bị PC, điện thoại. Giúp tiết kiệm chi phí đầu tư thiết bị cho người dùng</span>
                <ul className={'flex flex-col gap-2'}>
                    <li className={'inline-flex gap-1 items-center'}><CheckCheckIcon color={'green'}/> Máy bắn barcode
                        cầm tay
                    </li>
                    <li className={'inline-flex gap-1 items-center'}><CheckCheckIcon color={'green'}/> Laptop / máy
                        tính/ điện thoại
                    </li>
                    <li className={'inline-flex gap-1 items-center'}><CheckCheckIcon color={'green'}/> Webcam máy tính
                    </li>
                </ul>
            </div>,
        image: '/usage/t1.jpeg'
    },
    {
        title: "2 camera truy xuất mã đơn",
        description:
            <div className={'flex flex-col gap-3'}>
                <span>Tối ưu hóa quy trình quay video</span>
                <ul className={'flex flex-col gap-2'}>
                    <li className={'inline-flex gap-1 items-center'}><CheckCheckIcon color={'green'}/> <span
                        className={'flex-1'}>Camera quay toàn cảnh: Ghi lại toàn bộ quá trình đóng gói, từ đầu đến cuối.</span>
                    </li>
                    <li className={'inline-flex gap-1 items-center'}><CheckCheckIcon color={'green'}/> <span
                        className={'flex-1'}>Camera soi mã vận đơn: Đảm bảo mã vận đơn được quét chính xác, giảm thiểu sai sót.</span>
                    </li>
                </ul>
            </div>,
        image: '/usage/t2.jpeg',
        reverse: true,
    },
    {
        title: "Tiết kiệm chi phí",
        description: <div>
            <ul className={'flex flex-col gap-2'}>
                <li className={'inline-flex gap-1 items-center'}><CheckCheckIcon color={'green'}/> Không đầu tư nhiều
                    vào hệ thống và thiết bị
                </li>
                <li className={'inline-flex gap-1 items-center'}><CheckCheckIcon color={'green'}/> Dữ liệu được lưu trên
                    cloud
                </li>
                <li className={'inline-flex gap-1 items-center'}><CheckCheckIcon color={'green'}/> Mua theo gói đúng nhu
                    cầu sử dụng
                </li>
            </ul>
        </div>,
        image: '/usage/t3.jpeg',
    },
    {
        title: "Truy xuất nhanh",
        description: <div>
            <ul className={'flex flex-col gap-2'}>
                <li>Dễ dàng gen link trực tiếp gửi khiếu nại đến các nền tảng thương mại điện tử Shopee, Lazada, Tiktok Shop</li>
                <li className={'inline-flex gap-1 items-center mt-2'}><CheckCheckIcon color={'green'}/>
                    <span className={'flex-1'}>Dễ dạng tạo link theo dõi và gửi cho các sàn TMĐT</span>
                </li>
                <li className={'inline-flex gap-1 items-center'}><CheckCheckIcon color={'green'}/> Tìm lại video chỉ mất 2s khi nhập mã vẫn đơn
                </li>
            </ul>
        </div>,
        image: '/usage/t4.png?v=1',
        reverse: true,
    },
];

export const UsageSection = () => {
    return (
        <section id="usage" className="container py-12 sm:py-24 flex flex-col gap-16 md:gap-32">
            {serviceList.map((service) => (
                <div key={service.title}
                     className={`md:h-[400px] w-full flex flex-col-reverse md:flex-row gap-3 ${service.reverse ? 'md:flex-row-reverse' : ''}`}>
                    <div className={'flex-1 flex flex-col gap-3 items-center'}>
                        <div className={'max-w-full md:max-w-[540px] w-full flex flex-col gap-3 md:gap-6'}>
                            <span className={'text-xl lg:text-4xl xl:text-5xl font-semibold'}>{service.title}</span>
                            <span
                                className={'text-xl text-gray-600 dark:text-muted-foreground'}>{service.description}</span>
                        </div>
                    </div>
                    <div className={'flex-1 w-full flex justify-center items-center'}>
                        <div className={'rounded-lg overflow-hidden'}>
                            <Image src={service.image} alt={service.title} width={540} height={540}
                                   className={'max-w-full md:max-w-[540px] object-contain'}/>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};
