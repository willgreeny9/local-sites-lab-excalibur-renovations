import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy notes for the Local Sites Lab concept site for Excalibur Renovations Ltd.",
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="shell prose">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy notes for this concept site</h1>
        <p>
          This is an independent Local Sites Lab concept website. It is not the official Excalibur
          Renovations Ltd website and has not been approved by the business.
        </p>
        <p>
          The demonstration enquiry form does not send messages and does not collect live customer
          data to a connected destination. Please contact the business using the published phone
          numbers or email on the <Link href="/contact">contact page</Link>.
        </p>
        <p>
          Page metadata and robots.txt instruct search engines not to index this concept. Analytics
          or marketing cookies are not intentionally configured on this sample.
        </p>
        <p>
          For Local Sites Lab enquiries about concept websites, visit{" "}
          <a href="https://localsiteslab.com">localsiteslab.com</a>.
        </p>
      </div>
    </section>
  );
}
