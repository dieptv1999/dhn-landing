import Image from "next/image";

export default function BannerCenterSection() {
    return (
        <section id="banner-center" className="container py-24 sm:py-32 flex justify-center">
            <div className={'rounded-lg overflow-hidden'}>
                <Image src={'/sec2.jpeg?v=1'} alt={'banner 2'} width={1080} height={412} quality={100}
                       className={'object-cover'}/>
            </div>
        </section>
    )
}