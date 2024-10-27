import DiscordIcon from "@/components/icons/discord-icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center gap-3">
                <Image src={'/logo_1.png'} alt={'logo'} width={66} height={66} className={'mr-2'}/>
                <div>
                  Bạn đã sẵn sàng cải thiện quy trình đóng gói cùng
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    DHN?
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Nhanh tay đăng ký để nhận ưu đãi miễn phí trải nghiệm tháng đầu tiên, giảm thất thoát chi phí ngày hôm nay! 🚀
            </CardContent>

            <CardFooter>
              <Button asChild>
                <Link href="#contact">
                  Đăng ký ngay
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
