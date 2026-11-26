import { BlockButton } from "@/components/brand";

const EMAIL = "drmaryam@mmjerniganassociates.com";
const WEBSITE = "www.mmjerniganassociates.com";

const codes = [
  {
    name: "NAICS",
    primary: "541611",
    secondary: ["611710", "621330", "541618", "541690", "611430"],
  },
  {
    name: "PSC",
    primary: "U008",
    secondary: ["B542", "AF32", "R410", "R406", "R405", "AF22"],
  },
];

/**
 * Capabilities page: NAICS / PSC codes and the point of contact. The section
 * is the page's `#contact` target.
 */
export function CapabilitiesContracting() {
  return (
    <section id="contact" className="scroll-mt-6 bg-paper-200 text-blue-900">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 lg:px-20 grid gap-x-10 gap-y-12 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:py-20">
        <div>
          <p className="type-eyebrow text-xs text-blue-500">
            Contracting details
          </p>
          <h2 className="font-serif text-[clamp(1.875rem,3.1vw,2.5rem)] leading-[1.05] tracking-[-0.015em] mt-4">
            <span className="block">Codes, Data</span>
            <span className="block">And Contact</span>
          </h2>

          <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-14">
            {codes.map(({ name, primary, secondary }) => (
              <div key={name}>
                <h3 className="type-eyebrow text-xs">{name}</h3>
                <dl>
                  <dt className="mt-4 text-xs text-blue-900/60">Primary</dt>
                  <dd className="mt-2">
                    <span className="inline-block bg-tan-300 px-3 py-2.5 font-serif text-[1.375rem] leading-none tracking-[-0.01em]">
                      {primary}
                    </span>
                  </dd>
                  <dt className="mt-5 text-xs text-blue-900/60">
                    Secondary
                  </dt>
                  <dd className="mt-2">
                    <ul className="flex max-w-[21rem] flex-wrap gap-2">
                      {secondary.map((code) => (
                        <li
                          key={code}
                          className="bg-white px-2.5 py-2 text-sm font-medium leading-none"
                        >
                          {code}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </dl>
              </div>
            ))}
          </div>
        </div>

        <aside
          aria-labelledby="contact-heading"
          className="bg-blue-900 p-7 text-white sm:p-8"
        >
          <h3 id="contact-heading" className="type-eyebrow text-xs text-tan-200">
            Contact
          </h3>
          <dl className="mt-6 space-y-5 text-[15px] leading-[1.45] [&_dt]:mb-2 [&_dt]:text-[10.5px] [&_dt]:font-semibold [&_dt]:uppercase [&_dt]:leading-none [&_dt]:tracking-[0.08em] [&_dt]:text-mist-300">
            <div>
              <dt>Legal name</dt>
              <dd>
                Jernigan and Associates Psychological and Educational
                Consulting, Inc.
              </dd>
            </div>
            <div>
              <dt>Point of contact</dt>
              <dd>Dr. Maryam M. Jernigan-Noesi, Principal</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a
                  href={`mailto:${EMAIL}`}
                  className="break-words hover:underline"
                >
                  {EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt>Address</dt>
              <dd>
                1655 Mount McKinley Drive
                <br />
                Grayson, GA 30017-2980
              </dd>
            </div>
            <div>
              <dt>Website</dt>
              <dd>
                <a href={`https://${WEBSITE}`} className="hover:underline">
                  {WEBSITE}
                </a>
              </dd>
            </div>
          </dl>
          <div className="mt-8">
            <BlockButton
              href={`mailto:${EMAIL}`}
              variant="tan"
              icon="arrow-up-right"
            >
              Email the POC
            </BlockButton>
          </div>
        </aside>
      </div>
    </section>
  );
}
