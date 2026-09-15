"use client";

import { useActionState } from "react";
import { submitEstimate, type EstimateState } from "@/lib/actions";

const initial: EstimateState = { ok: false, error: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitEstimate, initial);

  return (
    <form action={formAction} className="bg-white p-6 md:p-8">
      <h2 className="display text-[28px] text-charcoal">Get a free quote</h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        Share a few details about the property and the water problem. A team member will
        review the request and follow up. Phone coming soon — this form is the current
        contact method.
      </p>
      {state.error ? (
        <p className="mt-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
          {state.error}
        </p>
      ) : null}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium text-navy">
          Full name
          <input
            name="name"
            required
            autoComplete="name"
            className="rounded-md border border-line px-3 py-2.5 font-normal text-charcoal outline-none ring-cyan focus:ring-2"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-navy">
          Callback number
          <input
            name="phone"
            required
            autoComplete="tel"
            className="rounded-md border border-line px-3 py-2.5 font-normal text-charcoal outline-none ring-cyan focus:ring-2"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-navy md:col-span-2">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="rounded-md border border-line px-3 py-2.5 font-normal text-charcoal outline-none ring-cyan focus:ring-2"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-navy">
          City
          <input
            name="city"
            required
            className="rounded-md border border-line px-3 py-2.5 font-normal text-charcoal outline-none ring-cyan focus:ring-2"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-navy">
          County
          <select
            name="county"
            required
            defaultValue=""
            className="rounded-md border border-line px-3 py-2.5 font-normal text-charcoal outline-none ring-cyan focus:ring-2"
          >
            <option value="" disabled>
              Select county
            </option>
            <option value="Milwaukee County">Milwaukee County</option>
            <option value="Waukesha County">Waukesha County</option>
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-navy md:col-span-2">
          Type of damage
          <select
            name="service"
            required
            defaultValue=""
            className="rounded-md border border-line px-3 py-2.5 font-normal text-charcoal outline-none ring-cyan focus:ring-2"
          >
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
            rows={5}
            className="rounded-md border border-line px-3 py-2.5 font-normal text-charcoal outline-none ring-cyan focus:ring-2"
            placeholder="Burst pipe, sump failure, appliance leak, hidden moisture, rebuild after drying…"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-cyan px-6 py-3 text-[13px] font-extrabold uppercase tracking-[0.06em] text-navy hover:bg-cyan-hover disabled:opacity-70"
      >
        {pending ? "Sending…" : "Submit estimate request"}
      </button>
    </form>
  );
}
