"use client";

import { type FormEvent, useState } from "react";
import { Glyph } from "@/components/icons";

const field =
  "h-9 w-full border border-blue-900/15 bg-white px-3 text-[13px] text-blue-900 placeholder:text-blue-900/40 focus:border-blue-700 focus:outline-none";

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block text-xs font-medium tracking-[0.01em]">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className={`mt-1.5 font-normal ${field}`}
      />
    </label>
  );
}

/**
 * Inquiry form. There is no mail service wired up yet, so submitting opens the
 * visitor's email app with the inquiry written out, addressed to the practice.
 * Swap `handleSubmit` for a server action or API call when one exists.
 */
export function InquiryForm({
  inbox: INBOX,
  sectors,
  services,
}: {
  /** Where inquiries are addressed. */
  inbox: string;
  sectors: string[];
  /** Practice areas offered as interests. */
  services: string[];
}) {
  const [interests, setInterests] = useState<string[]>(services.slice(0, 1));
  const [sent, setSent] = useState(false);

  const toggle = (service: string) =>
    setInterests((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();
    const lines = [
      `Name: ${get("name")}`,
      `Organization: ${get("organization")}`,
      `Role: ${get("role")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Sector: ${get("sector")}`,
      `Service interest: ${interests.join(", ")}`,
      "",
      get("goals"),
    ];
    const subject = `Inquiry from ${get("name")}${
      get("organization") ? `, ${get("organization")}` : ""
    }`;
    window.location.href = `mailto:${INBOX}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-paper-100 p-6 text-blue-900 sm:p-7"
    >
      <h2 className="font-serif text-[1.625rem] leading-tight tracking-[-0.015em]">
        Send an inquiry
      </h2>

      <div className="mt-3.5 grid gap-x-3 gap-y-3 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <Field
            label="Name"
            name="name"
            placeholder="Your full name"
            autoComplete="name"
            required
          />
        </div>
        <div className="sm:col-span-3">
          <Field
            label="Organization"
            name="organization"
            placeholder="Organization name"
            autoComplete="organization"
          />
        </div>
        <div className="sm:col-span-2">
          <Field
            label="Role"
            name="role"
            placeholder="Your title"
            autoComplete="organization-title"
          />
        </div>
        <div className="sm:col-span-2">
          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="name@organization.org"
            autoComplete="email"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <Field
            label="Phone"
            name="phone"
            type="tel"
            placeholder="(000) 000-0000"
            autoComplete="tel"
          />
        </div>

        <label className="block text-xs font-medium tracking-[0.01em] sm:col-span-6">
          Sector
          <span className="relative mt-1.5 block">
            <select
              name="sector"
              defaultValue=""
              className={`appearance-none pr-12 font-normal ${field}`}
            >
              <option value="">Select a sector</option>
              {sectors.map((sector) => (
                <option key={sector}>{sector}</option>
              ))}
            </select>
            <svg
              viewBox="0 0 10 6"
              width={11}
              height={7}
              aria-hidden="true"
              className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2"
            >
              <path
                d="M1 1l4 4 4-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
              />
            </svg>
          </span>
        </label>

        <fieldset className="sm:col-span-6">
          <legend className="text-xs font-medium tracking-[0.01em]">
            Service interest
          </legend>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {services.map((service) => {
              const on = interests.includes(service);
              return (
                <button
                  key={service}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(service)}
                  className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                    on
                      ? "border-blue-900 bg-blue-900 text-white"
                      : "border-blue-900/25 bg-white hover:border-blue-900"
                  }`}
                >
                  {service}
                </button>
              );
            })}
          </div>
        </fieldset>

        <label className="block text-xs font-medium tracking-[0.01em] sm:col-span-6">
          What are you hoping to accomplish?
          <textarea
            name="goals"
            rows={3}
            placeholder="Tell us about your goals, timeline and the people involved."
            className={`mt-1.5 h-auto resize-none py-2.5 font-normal leading-relaxed ${field}`}
          />
        </label>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <p
          role="status"
          className="max-w-[17rem] text-[11px] leading-snug text-blue-900/65"
        >
          {sent
            ? "Your email app should now be open with your inquiry ready to send."
            : "By submitting, you agree to be contacted about your inquiry."}
        </p>
        <button
          type="submit"
          className="inline-flex gap-[3px] text-[13px] font-medium"
        >
          <span className="flex h-10 items-center bg-blue-900 px-4 text-white">
            Send inquiry
          </span>
          <span className="flex size-10 items-center justify-center bg-blue-900 text-white">
            <Glyph name="arrow-right" size={15} />
          </span>
        </button>
      </div>
    </form>
  );
}
