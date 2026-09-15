"use server";

import { redirect } from "next/navigation";

export type EstimateState = {
  ok: boolean;
  error: string;
};

export async function submitEstimate(
  _prev: EstimateState,
  formData: FormData,
): Promise<EstimateState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const city = String(formData.get("city") ?? "").trim();
  const county = String(formData.get("county") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !phone || !email || !city || !county || !service || !message) {
    return { ok: false, error: "Please complete every field so we can follow up." };
  }

  if (!email.includes("@")) {
    return { ok: false, error: "Enter a valid email address." };
  }

  redirect("/contact/thank-you");
}
