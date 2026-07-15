import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Fyora Abel Real Estate – Aftaza Properties",
  description:
    "Learn how Fyora Abel Real Estate and Aftaza Properties collect, use, and protect your personal information. We are committed to your privacy.",
};

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "information-we-collect", title: "2. Information We Collect" },
  { id: "how-we-use", title: "3. How We Use Your Information" },
  { id: "sharing", title: "4. Sharing of Information" },
  { id: "cookies", title: "5. Cookies & Tracking" },
  { id: "data-retention", title: "6. Data Retention" },
  { id: "your-rights", title: "7. Your Rights" },
  { id: "security", title: "8. Data Security" },
  { id: "third-party", title: "9. Third-Party Links" },
  { id: "children", title: "10. Children's Privacy" },
  { id: "changes", title: "11. Changes to This Policy" },
  { id: "contact", title: "12. Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-clay">
      {/* ── Hero Banner ── */}
      <div
        className="relative bg-charcoal text-white py-24 px-4 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2D2D2D 0%, #4A2F27 100%)" }}
      >
        {/* decorative circles */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #C65D47, transparent)" }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #D4AF37, transparent)" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-terracotta/20 border border-terracotta/40 flex items-center justify-center">
              <Shield size={24} className="text-terracotta" />
            </div>
            <span className="text-terracotta text-sm font-semibold uppercase tracking-widest">
              Legal Document
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-white">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Fyora Abel Real Estate &amp; Aftaza Properties is committed to
            protecting your personal information and being transparent about how
            we use it.
          </p>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/50">
            <span>
              <span className="text-white/80 font-medium">Effective Date:</span>{" "}
              July 15, 2026
            </span>
            <span>
              <span className="text-white/80 font-medium">Last Updated:</span>{" "}
              July 15, 2026
            </span>
            <span>
              <span className="text-white/80 font-medium">Jurisdiction:</span>{" "}
              Federal Democratic Republic of Ethiopia
            </span>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">

          {/* ── Sticky sidebar TOC ── */}
          <aside className="hidden lg:block">
            <div
              className="sticky top-8 rounded-2xl border border-charcoal/10 bg-white shadow-sm overflow-hidden"
              style={{ maxHeight: "calc(100vh - 4rem)" }}
            >
              <div className="bg-charcoal px-6 py-4">
                <p className="text-white text-xs font-bold uppercase tracking-widest">
                  Table of Contents
                </p>
              </div>
              <nav className="p-4 overflow-y-auto">
                <ul className="space-y-1">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block text-sm text-charcoal/70 hover:text-terracotta hover:bg-terracotta/5 rounded-lg px-3 py-2 transition-colors"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* ── Main content ── */}
          <article className="prose-custom">

            {/* Quick-summary card */}
            <div
              className="rounded-2xl border border-terracotta/20 bg-terracotta/5 p-6 mb-12"
            >
              <h2 className="font-serif text-lg font-bold text-charcoal mb-2 mt-0">
                Summary at a Glance
              </h2>
              <ul className="space-y-2 text-sm text-charcoal/80 list-none m-0 p-0">
                {[
                  "We only collect information you voluntarily provide or that is automatically generated when you visit our site.",
                  "We never sell your personal data to third parties.",
                  "You may request deletion or correction of your data at any time.",
                  "We use industry-standard security practices to keep your information safe.",
                  "This policy applies to fyoraabel.com and any related services.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full bg-terracotta text-white flex items-center justify-center text-xs font-bold mt-0.5"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Section 1 ── */}
            <section id="introduction">
              <SectionHeading number="1" title="Introduction" />
              <p>
                Welcome to the website of <strong>Fyora Abel Real Estate</strong>, operated
                by Aftaza Properties (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). We are a
                licensed real estate agency headquartered in Bole, Addis Ababa,
                Ethiopia.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and
                protect information about you when you visit our website, submit
                an inquiry form, contact us by phone or email, or otherwise
                engage with our services.
              </p>
              <p>
                By using our website or services, you agree to the practices
                described in this Privacy Policy. If you do not agree, please
                discontinue using our website.
              </p>
            </section>

            <Divider />

            {/* ── Section 2 ── */}
            <section id="information-we-collect">
              <SectionHeading number="2" title="Information We Collect" />
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                2.1 Information You Provide Directly
              </h3>
              <p>
                When you fill in a contact or inquiry form, call us, or send an
                email, we may collect:
              </p>
              <ul>
                <li>Full name</li>
                <li>Phone number and/or WhatsApp number</li>
                <li>Email address</li>
                <li>
                  Details of your property inquiry (budget, preferred location,
                  property type)
                </li>
                <li>Any additional information you voluntarily share</li>
              </ul>

              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3 mt-6">
                2.2 Information Collected Automatically
              </h3>
              <p>
                When you visit our website, our servers and analytics tools may
                automatically record:
              </p>
              <ul>
                <li>IP address and approximate geographic location</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited, time on site, and referring URLs</li>
                <li>Device identifiers</li>
              </ul>
            </section>

            <Divider />

            {/* ── Section 3 ── */}
            <section id="how-we-use">
              <SectionHeading number="3" title="How We Use Your Information" />
              <p>
                We use the information we collect for the following purposes:
              </p>
              <Table
                rows={[
                  ["Purpose", "Legal Basis"],
                  ["Respond to property inquiries and contact requests", "Legitimate interest / contract performance"],
                  ["Schedule property viewings and appointments", "Contract performance"],
                  ["Send property listings or market updates (with consent)", "Consent"],
                  ["Improve our website and user experience", "Legitimate interest"],
                  ["Comply with legal obligations", "Legal obligation"],
                  ["Prevent fraud and ensure platform security", "Legitimate interest"],
                ]}
              />
              <p className="mt-4">
                We will <strong>never</strong> use your information for purposes
                incompatible with those stated above without first obtaining your
                explicit consent.
              </p>
            </section>

            <Divider />

            {/* ── Section 4 ── */}
            <section id="sharing">
              <SectionHeading number="4" title="Sharing of Information" />
              <p>
                We do <strong>not sell, rent, or trade</strong> your personal
                information to any third party. We may share your information
                only in the following limited circumstances:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> Trusted vendors who assist
                  us in operating our website, such as hosting providers or
                  analytics platforms, under strict confidentiality agreements.
                </li>
                <li>
                  <strong>Aftaza Properties:</strong> Our parent brokerage, for
                  the purpose of delivering real estate services to you.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by
                  applicable Ethiopian law, court order, or government authority.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the unlikely event of a
                  merger, acquisition, or asset sale, your information may be
                  transferred, subject to the same privacy protections.
                </li>
              </ul>
            </section>

            <Divider />

            {/* ── Section 5 ── */}
            <section id="cookies">
              <SectionHeading number="5" title="Cookies &amp; Tracking Technologies" />
              <p>
                Our website uses cookies and similar technologies to enhance your
                browsing experience and gather analytics data. Cookies are small
                text files stored on your device.
              </p>
              <Table
                rows={[
                  ["Cookie Type", "Purpose", "Duration"],
                  ["Essential", "Core site functionality and security", "Session"],
                  ["Analytics", "Understand how visitors use our site (e.g., Google Analytics)", "Up to 2 years"],
                  ["Preference", "Remember your settings and preferences", "Up to 1 year"],
                  ["Marketing", "Measure ad campaign effectiveness (only with consent)", "Up to 90 days"],
                ]}
              />
              <p className="mt-4">
                You may disable cookies through your browser settings. Note that
                disabling certain cookies may limit the functionality of our
                website.
              </p>
            </section>

            <Divider />

            {/* ── Section 6 ── */}
            <section id="data-retention">
              <SectionHeading number="6" title="Data Retention" />
              <p>
                We retain your personal information only for as long as necessary
                to fulfil the purposes for which it was collected, including for
                the purposes of satisfying any legal, accounting, or reporting
                requirements.
              </p>
              <ul>
                <li>
                  <strong>Inquiry data:</strong> Retained for up to 3 years from
                  the date of last contact.
                </li>
                <li>
                  <strong>Client transaction data:</strong> Retained for a
                  minimum of 7 years in accordance with Ethiopian tax and
                  financial record-keeping obligations.
                </li>
                <li>
                  <strong>Analytics data:</strong> Retained in aggregated,
                  anonymised form for up to 26 months.
                </li>
              </ul>
              <p>
                Upon expiry of the applicable retention period, your personal
                information will be securely deleted or anonymised.
              </p>
            </section>

            <Divider />

            {/* ── Section 7 ── */}
            <section id="your-rights">
              <SectionHeading number="7" title="Your Rights" />
              <p>
                Subject to applicable law, you have the following rights
                regarding your personal information:
              </p>
              <ul>
                <li>
                  <strong>Right of Access:</strong> Request a copy of the
                  personal data we hold about you.
                </li>
                <li>
                  <strong>Right to Rectification:</strong> Ask us to correct
                  inaccurate or incomplete information.
                </li>
                <li>
                  <strong>Right to Erasure:</strong> Request deletion of your
                  personal data where we no longer have a lawful basis to retain
                  it.
                </li>
                <li>
                  <strong>Right to Restrict Processing:</strong> Ask us to limit
                  how we use your data under certain circumstances.
                </li>
                <li>
                  <strong>Right to Object:</strong> Object to processing based on
                  legitimate interests or for direct marketing purposes.
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> Receive your
                  personal data in a structured, machine-readable format.
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> Withdraw consent at
                  any time where processing is based on consent, without
                  affecting the lawfulness of prior processing.
                </li>
              </ul>
              <p>
                To exercise any of the above rights, please contact us using the
                details in <a href="#contact">Section 12</a>. We will respond
                within 30 days.
              </p>
            </section>

            <Divider />

            {/* ── Section 8 ── */}
            <section id="security">
              <SectionHeading number="8" title="Data Security" />
              <p>
                We implement appropriate technical and organisational measures to
                protect your personal information against unauthorised access,
                loss, alteration, disclosure, or destruction. These measures
                include:
              </p>
              <ul>
                <li>HTTPS / TLS encryption on all web traffic</li>
                <li>Access controls and role-based permissions for staff</li>
                <li>Regular security reviews of our systems and vendors</li>
                <li>Secure disposal of data at end of retention period</li>
              </ul>
              <p>
                While we take every reasonable precaution, no method of
                transmission over the internet is 100% secure. We encourage you
                to use strong passwords and to notify us immediately if you
                suspect any unauthorised use of your information.
              </p>
            </section>

            <Divider />

            {/* ── Section 9 ── */}
            <section id="third-party">
              <SectionHeading number="9" title="Third-Party Links" />
              <p>
                Our website may contain links to third-party websites, social
                media platforms, or partner listings. This Privacy Policy applies
                solely to our website. We encourage you to review the privacy
                policies of any third-party sites you visit, as we have no
                control over their content or privacy practices.
              </p>
            </section>

            <Divider />

            {/* ── Section 10 ── */}
            <section id="children">
              <SectionHeading number="10" title="Children's Privacy" />
              <p>
                Our website and services are not directed to individuals under the
                age of 18. We do not knowingly collect personal information from
                minors. If you believe we have inadvertently collected information
                from a minor, please contact us immediately and we will promptly
                delete such information.
              </p>
            </section>

            <Divider />

            {/* ── Section 11 ── */}
            <section id="changes">
              <SectionHeading number="11" title="Changes to This Policy" />
              <p>
                We reserve the right to update this Privacy Policy at any time to
                reflect changes in our practices, technology, legal requirements,
                or other factors. When we make material changes, we will:
              </p>
              <ul>
                <li>Update the &ldquo;Last Updated&rdquo; date at the top of this page.</li>
                <li>
                  Where appropriate, notify you by email or a prominent notice on
                  our website.
                </li>
              </ul>
              <p>
                Your continued use of our website or services after the effective
                date of any changes constitutes your acceptance of the revised
                Privacy Policy.
              </p>
            </section>

            <Divider />

            {/* ── Section 12 ── */}
            <section id="contact">
              <SectionHeading number="12" title="Contact Us" />
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us:
              </p>
              <div className="rounded-2xl border border-charcoal/10 bg-white p-8 mt-6 shadow-sm">
                <p className="font-serif text-xl font-bold text-charcoal mb-6">
                  Fyora Abel Real Estate — Aftaza Properties
                </p>
                <div className="space-y-4 text-charcoal/80 text-sm">
                  <ContactRow label="Agent" value="Fyora Abel" />
                  <ContactRow label="Phone / WhatsApp" value="+251 900 575 151" />
                  <ContactRow label="Email" value="fyora.abel@aftazaproperties.com" />
                  <ContactRow
                    label="Office Address"
                    value="Bole, Addis Ababa, Ethiopia — Aftaza Properties HQ"
                  />
                  <ContactRow label="Business Hours" value="Mon – Sat, 8:00 AM – 6:00 PM (EAT)" />
                </div>
              </div>
            </section>

            {/* Back to top */}
            <div className="mt-16 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta hover:underline"
              >
                ↑ Back to top
              </a>
              <p className="text-xs text-charcoal/40 mt-4">
                © {new Date().getFullYear()} Fyora Abel Real Estate &amp; Aftaza Properties. All rights reserved.
              </p>
            </div>

          </article>
        </div>
      </div>
    </div>
  );
}

/* ── Small helper components ── */

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className="flex-shrink-0 w-8 h-8 rounded-full bg-terracotta text-white text-sm font-bold flex items-center justify-center"
      >
        {number}
      </span>
      <h2 className="font-serif text-2xl font-bold text-charcoal m-0">
        {title}
      </h2>
    </div>
  );
}

function Divider() {
  return (
    <hr className="my-10 border-t border-charcoal/10" />
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
      <span className="font-semibold text-charcoal w-40 flex-shrink-0">{label}</span>
      <span>{value}</span>
    </div>
  );
}

function Table({ rows }: { rows: string[][] }) {
  const [header, ...body] = rows;
  return (
    <div className="overflow-x-auto rounded-xl border border-charcoal/10 mt-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-charcoal text-white">
            {header.map((cell) => (
              <th
                key={cell}
                className="px-4 py-3 text-left font-semibold tracking-wide text-xs uppercase"
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr
              key={ri}
              className={ri % 2 === 0 ? "bg-white" : "bg-clay"}
            >
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 text-charcoal/80 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
