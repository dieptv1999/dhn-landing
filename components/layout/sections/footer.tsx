import {Separator} from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {Locale} from "@/i18n";
import {getTranslation} from "@/lib/i18n/getTranslation";

type Props = {
  lang: Locale;
};
export const FooterSection = async ({ lang }: Props) => {
  const translation = await getTranslation(lang);

  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              {/*<ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />*/}
              <Image src={'/logo_1.png'} alt={'logo'} width={36} height={36} className={'mr-2'}/>
              <h3 className="text-2xl">DHN</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">{translation('footer.trContact')}</h3>
            <div>
              <Link href="https://www.facebook.com/profile.php?id=61566379889600" className="opacity-60 hover:opacity-100">
                Facebook
              </Link>
            </div>

            {/*<div>*/}
            {/*  <Link href="#" className="opacity-60 hover:opacity-100">*/}
            {/*    Tiktok*/}
            {/*  </Link>*/}
            {/*</div>*/}

            <div>
              <Link href="https://www.youtube.com/@dhnvn" className="opacity-60 hover:opacity-100">
                Youtube
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">{translation('footer.trPlatform')}</h3>
            {/*<div>*/}
            {/*  <Link href="#" className="opacity-60 hover:opacity-100">*/}
            {/*    iOS*/}
            {/*  </Link>*/}
            {/*</div>*/}

            {/*<div>*/}
            {/*  <Link href="#" className="opacity-60 hover:opacity-100">*/}
            {/*    Android*/}
            {/*  </Link>*/}
            {/*</div>*/}

            <div>
              <Link href="https://dhn.io.vn/" className="opacity-60 hover:opacity-100">
                Web
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">{translation('footer.trHelp')}</h3>
            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                {translation('footer.tdHelpContactUs')}
              </Link>
            </div>

            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                {translation('footer.tdHelpFeedback')}
              </Link>
            </div>
          </div>

          {/*<div className="flex flex-col gap-2">*/}
          {/*  <h3 className="font-bold text-lg">{translation('footer.trSocial')}</h3>*/}
          {/*  <div>*/}
          {/*    <Link href="#" className="opacity-60 hover:opacity-100">*/}
          {/*      Facebook*/}
          {/*    </Link>*/}
          {/*  </div>*/}

          {/*  <div>*/}
          {/*    <Link href="#" className="opacity-60 hover:opacity-100">*/}
          {/*      Zalo*/}
          {/*    </Link>*/}
          {/*  </div>*/}

          {/*  /!*<div>*!/*/}
          {/*  /!*  <Link href="#" className="opacity-60 hover:opacity-100">*!/*/}
          {/*  /!*    Dribbble*!/*/}
          {/*  /!*  </Link>*!/*/}
          {/*  /!*</div>*!/*/}
          {/*</div>*/}
        </div>

        <Separator className="my-6"/>
        <section className="">
          <h3 className="">
            &copy; 2024 Designed and developed by
            <Link
              target="_blank"
              href="https://github.com/dieptv1999"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              DHN
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
