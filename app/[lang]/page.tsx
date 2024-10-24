import {BenefitsSection} from "@/components/layout/sections/benefits";
import {CommunitySection} from "@/components/layout/sections/community";
import {ContactSection} from "@/components/layout/sections/contact";
import {FAQSection} from "@/components/layout/sections/faq";
import {FeaturesSection} from "@/components/layout/sections/features";
import {FooterSection} from "@/components/layout/sections/footer";
import {HeroSection} from "@/components/layout/sections/hero";
import {PricingSection} from "@/components/layout/sections/pricing";
import {ServicesSection} from "@/components/layout/sections/services";
import {SponsorsSection} from "@/components/layout/sections/sponsors";
import {TeamSection} from "@/components/layout/sections/team";
import {TestimonialSection} from "@/components/layout/sections/testimonial";
import {Locale} from "@/i18n";
import {getTranslation} from "@/lib/i18n/getTranslation";
import {Navbar} from "@/components/layout/navbar";
import React from "react";

export const metadata = {
  title: "Giải pháp quay video đóng hàng thương mại điện tử",
  description: "Giải pháp quay video đóng hàng thương mại điện tử",
  openGraph: {
    type: "website",
    url: "/preview.jpg",
    title: "Giải pháp quay video đóng hàng thương mại điện tử",
    description: "Giải pháp quay video đóng hàng thương mại điện tử",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Giải pháp quay video đóng hàng thương mại điện tử",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "/preview.jpg",
    title: "Giải pháp quay video đóng hàng thương mại điện tử",
    description: "Giải pháp quay video đóng hàng thương mại điện tử",
    images: [
      "/preview.jpg",
    ],
  },
};

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Home({params: {lang}}: Props) {
  const translation = await getTranslation(lang);

  return (
    <>
      <Navbar
        featureLabel={translation('nav.feature')}
        localSelectorLabel={translation('nav.localeSelector.message')}
        contactLabel={translation('nav.contact')}
      />
      <HeroSection
        title={''}
        description={translation('hero.description')}
        getStartedButtonLabel={translation('hero.getStarted')}
        contactButtonLabel={translation('hero.contact')}
        highlightLabel={translation('hero.highlight')}
      />
      <SponsorsSection
        title={translation('partner.title')}
      />
      <BenefitsSection lang={lang}/>
      <FeaturesSection lang={lang}/>
      <ServicesSection/>
      <TestimonialSection lang={lang}/>
      <TeamSection lang={lang}/>
      <CommunitySection/>
      <PricingSection/>
      <ContactSection
        title={translation('contact.title')}
        description={translation('contact.description')}
        keyLabel={translation('contact.key')}
        formMessagePlaceholder={translation('contact.form.messagePlaceholder')}
        formMessage={translation('contact.form.message')}
        firstNameLabel={translation('contact.form.firstName')}
        emailPlaceholder={translation('contact.form.emailPlaceholder')}
        lastNameLabel={translation('contact.form.lastName')}
        subjectLabel={translation('contact.form.subject')}
      />
      <FAQSection title={translation('faq.title')}/>
      <FooterSection lang={lang}/>
    </>
  );
}
