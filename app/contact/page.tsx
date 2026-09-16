import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact / free quotation",
  description: "Request a free quotation from Excalibur Renovations Ltd in Bishop's Stortford.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Ask a question or request a free quotation"
        lead={`Call ${business.phoneMobileDisplay} or ${business.phoneOfficeDisplay}, or email ${business.email}. The demonstration form on this page does not send messages.`}
        imageSrc="/images/project-kitchen-detail.jpg"
        imageAlt="Finished kitchen detail"
      />
      <ContactSection />
    </>
  );
}
