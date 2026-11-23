"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import { services, site } from "@/content/site";
import {
  emptyProposal,
  validateProposal,
  type ProposalErrors,
  type ProposalFields,
} from "@/lib/proposal";

const inputClass =
  "mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 text-foreground shadow-sm shadow-navy/[0.02] transition placeholder:text-muted/60 hover:border-navy/30 focus:border-teal focus:outline-none disabled:opacity-60 aria-[invalid=true]:border-red-400";

export function ProposalForm() {
  const [fields, setFields] = useState<ProposalFields>(emptyProposal);
  const [errors, setErrors] = useState<ProposalErrors>({});
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  function update(key: keyof ProposalFields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateProposal(fields);
    setErrors(nextErrors);
    setFormError(null);
    if (Object.keys(nextErrors).length > 0) {
      setSubmittedName(null);
      return;
    }

    setPending(true);
    try {
      const response = await fetch("/api/proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
        errors?: ProposalErrors;
      };

      if (!response.ok) {
        if (data.errors) setErrors(data.errors);
        setFormError(
          data.error ||
            "We could not send that request. Please call us instead.",
        );
        return;
      }

      setSubmittedName(fields.name.trim());
      setFields(emptyProposal);
    } catch {
      setFormError("We could not send that request. Please call us instead.");
    } finally {
      setPending(false);
    }
  }

  if (submittedName) {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 md:p-10" role="status">
        <span className="flex size-12 items-center justify-center rounded-full bg-teal/15 text-teal-deep">
          <Icon name="check" className="size-6" strokeWidth={2.5} />
        </span>
        <p className="mt-6 font-display text-2xl font-bold text-navy-deep">
          Thanks, {submittedName}.
        </p>
        <p className="mt-3 leading-7 text-muted">
          Your request is in, and a confirmation is on its way to your inbox.
          We will review it and get back to you to schedule a short discovery
          conversation.
        </p>
        <button
          type="button"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-teal-deep"
          onClick={() => setSubmittedName(null)}
        >
          Send another request
          <Icon name="arrowRight" className="size-4" />
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-line bg-white p-8 shadow-xl shadow-navy/5 md:p-10"
    >
      <p className="font-display text-xl font-bold text-navy-deep">Tell us about the work</p>
      <p className="mt-1 text-sm text-muted">Fields marked optional can be left blank.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field
          id="name"
          label="Full name"
          value={fields.name}
          error={errors.name}
          onChange={(value) => update("name", value)}
          autoComplete="name"
          disabled={pending}
        />
        <Field
          id="email"
          label="Work email"
          type="email"
          value={fields.email}
          error={errors.email}
          onChange={(value) => update("email", value)}
          autoComplete="email"
          disabled={pending}
        />
        <Field
          id="company"
          label="Company"
          value={fields.company}
          onChange={(value) => update("company", value)}
          autoComplete="organization"
          optional
          disabled={pending}
        />
        <div>
          <label htmlFor="service" className="text-sm font-medium text-navy-deep">
            Service of interest <span className="font-normal text-muted">(optional)</span>
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={fields.service}
              disabled={pending}
              onChange={(event) => update("service", event.target.value)}
              className={`${inputClass} appearance-none pr-10`}
            >
              <option value="">Not sure yet</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </select>
            <Icon
              name="chevronDown"
              className="pointer-events-none absolute top-1/2 right-4 mt-1 size-4 -translate-y-1/2 text-muted"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="need" className="text-sm font-medium text-navy-deep">
            What do you need?
          </label>
          <textarea
            id="need"
            name="need"
            rows={6}
            value={fields.need}
            disabled={pending}
            placeholder="Describe the problem, the systems involved, and any timing that matters."
            onChange={(event) => update("need", event.target.value)}
            aria-invalid={errors.need ? true : undefined}
            aria-describedby={errors.need ? "need-error" : undefined}
            className={inputClass}
          />
          {errors.need ? <ErrorText id="need-error">{errors.need}</ErrorText> : null}
        </div>
      </div>
      {formError ? (
        <p className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {formError}{" "}
          <a href={site.phoneHref} className="font-semibold underline">
            {site.phone}
          </a>
        </p>
      ) : null}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          We use this only to respond to your request.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-navy/20 transition hover:bg-navy-deep disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? "Sending…" : "Request a proposal"}
          {!pending ? <Icon name="arrowRight" className="size-4" /> : null}
        </button>
      </div>
    </form>
  );
}

function ErrorText({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} className="mt-2 text-sm text-red-600">
      {children}
    </p>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  optional = false,
  disabled = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  optional?: boolean;
  disabled?: boolean;
}) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-navy-deep">
        {label}
        {optional ? <span className="font-normal text-muted"> (optional)</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        disabled={disabled}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={inputClass}
      />
      {error ? <ErrorText id={errorId}>{error}</ErrorText> : null}
    </div>
  );
}
