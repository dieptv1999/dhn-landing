"use client";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {useTheme} from "next-themes";
import Image from "next/image";
import Link from "next/link";


interface Props {
    title: string;
    description: string;
    getStartedButtonLabel: string;
    contactButtonLabel: string;
    highlightLabel: string;
}

export const HeroSection = ({title, getStartedButtonLabel, contactButtonLabel, description, highlightLabel}: Props) => {
    const {theme} = useTheme();
    return (
        <section className="container w-full">
            <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-12 md:py-32">
                <div className="text-center space-y-8">
                    <Badge variant="outline" className="text-sm py-2 cursor-pointer">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
                        <span> {highlightLabel}! </span>
                    </Badge>

                    <div className="max-w-[850px] mx-auto text-center text-3xl md:text-6xl font-bold">
                        <h1 className={'leading-[1.09] flex flex-col'}>
                            <span>Quay video đóng hàng </span>
                            <span>và truy xuất nhanh chóng</span>
                            <span
                                className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">với DHN</span>
                        </h1>
                    </div>

                    <p className="max-w-screen-md mx-auto text-lg md:text-xl text-muted-foreground">
                        {description}
                    </p>

                    <div className="space-y-4 md:space-y-0 md:space-x-4">
                        <Link href={'https://dhn.io.vn'} target={'_blank'}>
                            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
                                {getStartedButtonLabel}
                                <ArrowRight
                                    className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"/>
                            </Button>
                        </Link>

                        <Button
                            asChild
                            variant="secondary"
                            className="w-5/6 md:w-1/4 font-bold"
                        >
                            <Link
                                href="#contact"
                            >
                                {contactButtonLabel}
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="relative group mt-8 md:mt-14">
                    <div
                        className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
                    <Image
                        width={1200}
                        height={1200}
                        className="hidden md:flex w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none items-center border border-t-2 border-secondary  border-t-primary/30"
                        src={
                            theme === "light"
                                ? "/hero-light.jpeg?v=1"
                                : "/hero-light.jpeg?v=1"
                        }
                        alt="dashboard"
                    />
                    <Image
                        width={768}
                        height={768}
                        className="md:hidden w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
                        src={
                            theme === "light"
                                ? "/hero.jpg?v=1"
                                : "/hero.jpg?v=1"
                        }
                        alt="dashboard"
                        quality={100}
                    />

                    <div
                        className="absolute bottom-0 left-0 w-full h-0 md:h-28 bg-gradient-to-b from-background/0 md:via-background/50 to-background rounded-lg"></div>
                </div>
            </div>
        </section>
    );
};
