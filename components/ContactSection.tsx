import { business } from "@/lib/business";

export function ContactSection() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="shell contact-layout">
        <div className="contact-panel">
          <p className="eyebrow">Get a quotation</p>
          <h2 id="contact-title">Request a free quotation</h2>
          <p>
            Use the published phone numbers or email. WhatsApp is also offered on the current site
            via {business.whatsappE164}.
          </p>
          <ul className="contact-list">
            <li>
              <span>Name</span>
              <span>{business.name}</span>
            </li>
            <li>
              <span>Mobile</span>
              <a href={`tel:${business.phoneMobileTel}`}>{business.phoneMobileDisplay}</a>
            </li>
            <li>
              <span>Office</span>
              <a href={`tel:${business.phoneOfficeTel}`}>{business.phoneOfficeDisplay}</a>
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${business.email}?subject=Free%20quotation%20request`}>
                {business.email}
              </a>
            </li>
            <li>
              <span>Address</span>
              <span>
                {business.address.line1}, {business.address.locality}, {business.address.postcode}
              </span>
            </li>
          </ul>
        </div>
        <div className="contact-panel contact-demo">
          <h3>Demonstration enquiry form</h3>
          <p className="demo-note">
            This form is a <strong>demonstration only</strong> and is <strong>not connected</strong> —
            it does not send messages. Please use phone or email for a real enquiry.
          </p>
          <div className="demo-form" role="group" aria-label="Demonstration form fields">
            <label>
              Name
              <input name="name" type="text" autoComplete="name" disabled />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" disabled />
            </label>
            <label>
              Project notes
              <textarea name="message" rows={4} disabled />
            </label>
            <button type="button" className="button" disabled>
              Form not connected
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
