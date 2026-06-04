"use client";

import { useTranslations, useLocale } from "next-intl";

/* ── Content types ─────────────────────────────────────────────────────────── */

type Block =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "address"; lines: string[] };

interface Section {
  title: string;
  blocks: Block[];
}

/* ── Privacy policy content (EN / DE) ─────────────────────────────────────── */

const CONTENT: Record<string, Section[]> = {
  en: [
    {
      title: "1. Controller",
      blocks: [
        { type: "paragraph", text: "The controller responsible for the processing of personal data on this website is:" },
        { type: "address", lines: ["Unfold Creative S.R.L.", "Ioan Corneli 2", "Oradea, 410595 Romania", "info@unfoldcreative-design.com", "+40 778788571"] },
      ],
    },
    {
      title: "2. General Information on Data Processing",
      blocks: [
        { type: "paragraph", text: "We take the protection of your personal data very seriously. Personal data is processed on this website only to the extent necessary to provide a functional website, respond to inquiries, or comply with legal requirements." },
        { type: "paragraph", text: "Personal data means any information that can be used to personally identify you, such as your name, email address, IP address, or usage data." },
      ],
    },
    {
      title: "3. Access Data and Server Log Files",
      blocks: [
        { type: "paragraph", text: "When you access this website, information is automatically collected by the hosting provider and stored in so-called server log files. This may include, in particular:" },
        { type: "list", items: ["IP address", "Date and time of access", "Page or file accessed", "Browser type and browser version", "Operating system used", "Referrer URL", "Hostname of the accessing device"] },
        { type: "paragraph", text: "This data is processed to ensure the secure and stable operation of the website. The legal basis is Art. 6(1)(f) GDPR. Our legitimate interest lies in the technical provision, security, and optimization of the website." },
        { type: "paragraph", text: "The data is deleted as soon as it is no longer required for the purpose of processing, unless statutory retention obligations apply." },
      ],
    },
    {
      title: "4. Hosting",
      blocks: [
        { type: "paragraph", text: "This website is hosted by:" },
        { type: "address", lines: ["Vercel", "https://vercel.com/"] },
        { type: "paragraph", text: "The hosting provider processes personal data generated when visiting this website, in particular technical access data. The processing is carried out to provide and securely deliver the website." },
        { type: "paragraph", text: "Where required, a data processing agreement pursuant to Art. 28 GDPR has been concluded with the hosting provider." },
      ],
    },
    {
      title: "5. Contact",
      blocks: [
        { type: "paragraph", text: "If you contact us by email, contact form, or any other means, we process the data you provide in order to handle your inquiry." },
        { type: "paragraph", text: "The following data may be processed in particular:" },
        { type: "list", items: ["Name", "Email address", "Content of the message", "Time of contact"] },
        { type: "paragraph", text: "The legal basis is Art. 6(1)(b) GDPR, insofar as your inquiry relates to a contract or pre-contractual measures. In other cases, processing is based on Art. 6(1)(f) GDPR, as we have a legitimate interest in responding to inquiries." },
        { type: "paragraph", text: "Messages submitted through the contact form are transmitted via Resend Inc. (USA), an email delivery service provider. A data processing agreement pursuant to Art. 28 GDPR has been concluded with Resend. The transfer of data to the USA is carried out on the basis of Standard Contractual Clauses (Art. 46(2)(c) GDPR)." },
        { type: "paragraph", text: "The data is deleted once the inquiry has been finally processed and no statutory retention obligations apply." },
      ],
    },
    {
      title: "6. Cookies",
      blocks: [
        { type: "paragraph", text: "This website uses cookies. Cookies are small text files stored on your device." },
        { type: "paragraph", text: "Technically necessary cookies are used to ensure that the website functions properly. The legal basis is Art. 6(1)(f) GDPR. Our legitimate interest lies in the secure and user-friendly provision of the website." },
        { type: "paragraph", text: "In particular, this website sets a cookie named NEXT_LOCALE to store your language preference (e.g. English or German). This cookie is technically necessary and does not track personal behaviour." },
        { type: "paragraph", text: "This website does not use analytics or marketing cookies." },
      ],
    },
    {
      title: "7. External Links",
      blocks: [
        { type: "paragraph", text: "This website may contain links to external websites. The respective operators are solely responsible for the content and privacy practices of external providers." },
      ],
    },
    {
      title: "8. Your Rights",
      blocks: [
        { type: "paragraph", text: "Under the GDPR, you have the following rights:" },
        { type: "list", items: [
          "Right of access to the personal data stored by us",
          "Right to rectification of inaccurate data",
          "Right to erasure",
          "Right to restriction of processing",
          "Right to data portability",
          "Right to object to certain processing activities",
          "Right to withdraw consent previously given",
        ]},
        { type: "paragraph", text: "To exercise your rights, you may contact us at any time at info@unfoldcreative-design.com." },
      ],
    },
    {
      title: "9. Right to Lodge a Complaint with a Supervisory Authority",
      blocks: [
        { type: "paragraph", text: "You also have the right to lodge a complaint with a data protection supervisory authority if you believe that the processing of your personal data violates data protection law." },
        { type: "paragraph", text: "The supervisory authority competent for our company is:" },
        { type: "address", lines: ["Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)", "B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, 010336 București, Romania", "www.dataprotection.ro"] },
        { type: "paragraph", text: "You may also contact the data protection authority of your country of residence." },
      ],
    },
    {
      title: "10. Retention Period",
      blocks: [
        { type: "paragraph", text: "We store personal data only for as long as necessary for the respective processing purposes or as required by statutory retention obligations. Once the purpose of processing no longer applies and no statutory retention periods prevent deletion, the data will be deleted." },
      ],
    },
    {
      title: "11. Changes to This Privacy Policy",
      blocks: [
        { type: "paragraph", text: "We reserve the right to update this Privacy Policy if the website, services used, or legal requirements change." },
        { type: "paragraph", text: "Last updated: June 2026" },
      ],
    },
  ],

  de: [
    {
      title: "1. Verantwortlicher",
      blocks: [
        { type: "paragraph", text: "Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:" },
        { type: "address", lines: ["Unfold Creative S.R.L.", "Ioan Corneli 2", "Oradea, 410595 Rumänien", "info@unfoldcreative-design.com", "+40 778788571"] },
      ],
    },
    {
      title: "2. Allgemeine Hinweise zur Datenverarbeitung",
      blocks: [
        { type: "paragraph", text: "Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden auf dieser Website nur verarbeitet, soweit dies zur Bereitstellung einer funktionsfähigen Website, zur Bearbeitung von Anfragen oder aufgrund gesetzlicher Vorgaben erforderlich ist." },
        { type: "paragraph", text: "Personenbezogene Daten sind alle Informationen, mit denen Sie persönlich identifiziert werden können, zum Beispiel Name, E-Mail-Adresse, IP-Adresse oder Nutzungsdaten." },
      ],
    },
    {
      title: "3. Zugriffsdaten und Server-Logfiles",
      blocks: [
        { type: "paragraph", text: "Beim Aufrufen dieser Website werden durch den Hosting-Anbieter automatisch Informationen erhoben und in sogenannten Server-Logfiles gespeichert. Dies können insbesondere sein:" },
        { type: "list", items: ["IP-Adresse", "Datum und Uhrzeit des Zugriffs", "aufgerufene Seite oder Datei", "Browsertyp und Browserversion", "verwendetes Betriebssystem", "Referrer-URL", "Hostname des zugreifenden Rechners"] },
        { type: "paragraph", text: "Die Verarbeitung dieser Daten erfolgt, um den sicheren und stabilen Betrieb der Website zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der technischen Bereitstellung, Sicherheit und Optimierung der Website." },
        { type: "paragraph", text: "Die Daten werden gelöscht, sobald sie für den Zweck der Verarbeitung nicht mehr erforderlich sind, sofern keine gesetzlichen Aufbewahrungspflichten bestehen." },
      ],
    },
    {
      title: "4. Hosting",
      blocks: [
        { type: "paragraph", text: "Diese Website wird gehostet bei:" },
        { type: "address", lines: ["Vercel", "https://vercel.com/"] },
        { type: "paragraph", text: "Der Hosting-Anbieter verarbeitet personenbezogene Daten, die beim Besuch dieser Website anfallen, insbesondere technische Zugriffsdaten. Die Verarbeitung erfolgt zur Bereitstellung und sicheren Auslieferung der Website." },
        { type: "paragraph", text: "Sofern erforderlich, wurde mit dem Hosting-Anbieter ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO abgeschlossen." },
      ],
    },
    {
      title: "5. Kontaktaufnahme",
      blocks: [
        { type: "paragraph", text: "Wenn Sie uns per E-Mail, Kontaktformular oder auf anderem Weg kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten zur Bearbeitung Ihrer Anfrage." },
        { type: "paragraph", text: "Dabei können insbesondere folgende Daten verarbeitet werden:" },
        { type: "list", items: ["Name", "E-Mail-Adresse", "Inhalt der Nachricht", "Zeitpunkt der Kontaktaufnahme"] },
        { type: "paragraph", text: "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit einem Vertrag oder vorvertraglichen Maßnahmen zusammenhängt. In anderen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, da wir ein berechtigtes Interesse an der Bearbeitung von Anfragen haben." },
        { type: "paragraph", text: "Nachrichten, die über das Kontaktformular übermittelt werden, werden über Resend Inc. (USA), einen E-Mail-Versanddienstleister, weitergeleitet. Mit Resend wurde ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO abgeschlossen. Die Datenübermittlung in die USA erfolgt auf Grundlage von Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO)." },
        { type: "paragraph", text: "Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet wurde und keine gesetzlichen Aufbewahrungspflichten entgegenstehen." },
      ],
    },
    {
      title: "6. Cookies",
      blocks: [
        { type: "paragraph", text: "Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden." },
        { type: "paragraph", text: "Technisch notwendige Cookies werden eingesetzt, damit die Website ordnungsgemäß funktioniert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren und nutzerfreundlichen Bereitstellung der Website." },
        { type: "paragraph", text: "Insbesondere setzt diese Website ein Cookie mit dem Namen NEXT_LOCALE, um Ihre Sprachpräferenz (z. B. Deutsch oder Englisch) zu speichern. Dieses Cookie ist technisch notwendig und verfolgt kein persönliches Nutzerverhalten." },
        { type: "paragraph", text: "Diese Website verwendet keine Analyse- oder Marketing-Cookies." },
      ],
    },
    {
      title: "7. Externe Links",
      blocks: [
        { type: "paragraph", text: "Diese Website kann Links zu externen Websites enthalten. Für die Inhalte und Datenschutzpraktiken externer Anbieter sind ausschließlich die jeweiligen Betreiber verantwortlich." },
      ],
    },
    {
      title: "8. Ihre Rechte",
      blocks: [
        { type: "paragraph", text: "Sie haben nach der DSGVO folgende Rechte:" },
        { type: "list", items: [
          "Recht auf Auskunft über die bei uns gespeicherten personenbezogenen Daten",
          "Recht auf Berichtigung unrichtiger Daten",
          "Recht auf Löschung",
          "Recht auf Einschränkung der Verarbeitung",
          "Recht auf Datenübertragbarkeit",
          "Recht auf Widerspruch gegen bestimmte Verarbeitungen",
          "Recht auf Widerruf einer erteilten Einwilligung",
        ]},
        { type: "paragraph", text: "Zur Ausübung Ihrer Rechte können Sie uns jederzeit unter info@unfoldcreative-design.com kontaktieren." },
      ],
    },
    {
      title: "9. Beschwerderecht bei einer Aufsichtsbehörde",
      blocks: [
        { type: "paragraph", text: "Sie haben außerdem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen Datenschutzrecht verstößt." },
        { type: "paragraph", text: "Die für unser Unternehmen zuständige Aufsichtsbehörde ist:" },
        { type: "address", lines: ["Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)", "B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, 010336 București, Rumänien", "www.dataprotection.ro"] },
        { type: "paragraph", text: "Sie können sich auch an die Datenschutzbehörde Ihres Wohnsitzlandes wenden." },
      ],
    },
    {
      title: "10. Speicherdauer",
      blocks: [
        { type: "paragraph", text: "Wir speichern personenbezogene Daten nur so lange, wie dies für die jeweiligen Verarbeitungszwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Sobald der Zweck der Verarbeitung entfällt und keine gesetzlichen Aufbewahrungsfristen entgegenstehen, werden die Daten gelöscht." },
      ],
    },
    {
      title: "11. Änderung dieser Datenschutzerklärung",
      blocks: [
        { type: "paragraph", text: "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich die Website, eingesetzte Dienste oder rechtliche Anforderungen ändern." },
        { type: "paragraph", text: "Stand: Juni 2026" },
      ],
    },
  ],
};

/* ── Component ─────────────────────────────────────────────────────────────── */

export default function Privacy() {
  const t = useTranslations("privacy");
  const locale = useLocale();
  const sections = CONTENT[locale] ?? CONTENT["en"];

  return (
    <section className="bg-white text-black py-24 px-8 md:px-16 min-h-[60vh]">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-[20px] font-bold tracking-wide uppercase mb-12">
          {t("heading")}
        </h1>

        <div className="flex flex-col gap-10">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-[15px] font-bold mb-4">{section.title}</h2>
              <div className="flex flex-col gap-3">
                {section.blocks.map((block, j) => {
                  if (block.type === "paragraph") {
                    return (
                      <p key={j} className="text-[14px] text-[#5E5E5E] leading-relaxed">
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "list") {
                    return (
                      <ul key={j} className="list-disc list-inside flex flex-col gap-1 pl-2">
                        {block.items.map((item, k) => (
                          <li key={k} className="text-[14px] text-[#5E5E5E] leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === "address") {
                    return (
                      <address key={j} className="not-italic flex flex-col gap-0.5">
                        {block.lines.map((line, k) => (
                          <span key={k} className="text-[14px] text-[#5E5E5E]">{line}</span>
                        ))}
                      </address>
                    );
                  }
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
