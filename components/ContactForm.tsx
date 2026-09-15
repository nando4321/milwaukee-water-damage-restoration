"use client";

import { useActionState } from "react";
import { submitEstimate, type EstimateState } from "@/lib/actions";

const initial: EstimateState = { ok: false, error: "" };

const fieldClass =
  "rounded-md border border-line px-3 py-2.5 font-normal text-charcoal outline-none ring-cyan focus:ring-2";

export function ContactForm({
  variant = "default",
  id,
}: {
  variant?: "default" | "compact";
  id?: string;
}) {
  const [state, formAction, pending] = useActionState(submitEstimate, initial);
  const compact = variant === "compact";

  return (
    <form
      id={id}
      action={formAction}
      className={
        compact
          ? "rounded-2xl bg-white p-5 shadow-[0_20px_50px_rgba(6,30,96,0.28)] md:p-6"
          : "bg-white p-6 md:p-8"
      }
    >
      <h2 className={`display ${compact ? "text-[22px] text-navy" : "text-[28px] text-charcoal"}`}>
        {compact ? "Get a free estimate" : "Get a free quote"}
      </h2>
      <p className={`mt-2 leading-6 text-muted ${compact ? "text-xs" : "text-sm"}`}>
        {compact
          ? "Phone coming soon — this form is the contact method. Milwaukee County and Waukesha County only."
          : "Share a few details about the property and the water problem. A team member will review the request and follow up. Phone coming soon — this form is the current contact method."}
      </p>
      {state.error ? (
        <p className="mt-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
          {state.error}
        </p>
      ) : null}
      <div className={`grid gap-4 md:grid-cols-2 ${compact ? "mt-4 gap-3" : "mt-6"}`}>
        <label className="grid gap-1.5 text-sm font-medium text-navy">
          Full name
          <input name="name" required autoComplete="name" className={fieldClass} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-navy">
          Callback number
          <input name="phone" required autoComplete="tel" className={fieldClass} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-navy md:col-span-2">
          Email
          <input name="email" type="email" required autoComplete="email" className={fieldClass} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-navy">
          City
          <input name="city" required className={fieldClass} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-navy">
          County
          <select name="county" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select county
            </option>
            <option value="Milwaukee County">Milwaukee County</option>
            <option value="Waukesha County">Waukesha County</option>
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-navy md:col-span-2">
          Type of damage
          <select name="service" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a service
            </option>
            <option value="Water damage restoration">Water damage restoration</option>
            <option value="Mold remediation">Mold remediation</option>
            <option value="Rebuilding after water damage">Rebuilding after water damage</option>
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-navy md:col-span-2">
          What happened?
          <textarea
            name="message"
            required
            rows={compact ? 3 : 5}
            className={fieldClass}
            placeholder="Burst pipe, sump failure, appliance leak, hidden moisture, rebuild after drying…"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={pending}
        className="mt-5 inline-flex items-center justify-center rounded-full bg-cyan px-6 py-3 text-[13px] font-extrabold uppercase tracking-[0.06em] text-navy hover:bg-cyan-hover disabled:opacity-70"
      >
        {pending ? "Sending…" : "Submit estimate request"}
      </button>
    </form>
  );
}
