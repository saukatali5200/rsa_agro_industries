"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle, Clock, Loader2 } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  const CONTACT_ITEMS = [
    { icon: Phone,      label: "Phone / WhatsApp", val: SITE.phone,   href: `tel:${SITE.phone}`,         sub: "Call or WhatsApp anytime" },
    { icon: Mail,       label: "Email",             val: SITE.email,   href: `mailto:${SITE.email}`,      sub: "We reply within 24 hours"  },
    { icon: MapPin,     label: "Address",           val: SITE.address, href: SITE.maps,                   sub: `PIN: ${SITE.pincode}`      },
    { icon: Clock,      label: "Business Hours",    val: "Mon–Sat, 8 AM – 7 PM", href: null,             sub: "Sunday: 9 AM – 2 PM"       },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--bg-page) 30%, transparent)" }} />
        <div className="container relative z-10 max-w-3xl text-center">
          <div className="w-20 h-20 rounded-3xl theme-accent-subtle border theme-accent-border flex items-center justify-center mx-auto mb-8 shadow-lg" style={{ boxShadow: "var(--shadow-glow)" }}>
            <MessageSquare className="w-10 h-10 theme-accent" />
          </div>
          <span className="theme-badge inline-flex mb-6">Contact Us</span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="theme-text-secondary text-xl leading-relaxed">
            Have a question or want to place a bulk order? We&apos;re happy to help. Reach out directly or use the form below.
          </p>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* CONTACT INFO */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-bold theme-text mb-6">Contact Details</h2>
              {CONTACT_ITEMS.map(({ icon: Icon, label, val, href, sub }) => (
                <div key={label} className="theme-card p-5 flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl theme-accent-subtle border theme-accent-border flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 theme-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-bold theme-text-muted uppercase tracking-widest mb-1">{label}</div>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        className="font-semibold theme-text hover:theme-accent transition-colors text-sm block">
                        {val}
                      </a>
                    ) : (
                      <span className="font-semibold theme-text text-sm block">{val}</span>
                    )}
                    <span className="text-xs theme-text-muted">{sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* FORM */}
            <div className="lg:col-span-3">
              <div className="theme-card p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: "rgba(16,185,129,0.1)", border: "2px solid rgba(16,185,129,0.3)" }}>
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold theme-text mb-3">Message Sent!</h2>
                    <p className="theme-text-secondary mb-8">Thank you for reaching out. We&apos;ll get back to you within 1 business day.</p>
                    <button className="theme-btn-outline px-8 py-3 rounded-xl font-bold"
                      onClick={() => { setSubmitted(false); setForm({ name:"",phone:"",email:"",subject:"",message:"" }); }}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold theme-text mb-8">Send an Enquiry</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[
                          { name: "name",  label: "Your Name*",    type: "text",  placeholder: "RSA Agro Industries",         required: true  },
                          { name: "phone", label: "Phone Number*", type: "tel",   placeholder: "+91 9694929317",     required: true  },
                          { name: "email", label: "Email Address", type: "email", placeholder: "you@example.com",    required: false },
                        ].map(({ name, label, type, placeholder, required }) => (
                          <div key={name} className={name === "email" ? "sm:col-span-2" : ""}>
                            <label className="block text-xs font-bold theme-text-muted uppercase tracking-widest mb-2">{label}</label>
                            <input name={name} type={type} placeholder={placeholder} required={required}
                              value={(form as Record<string,string>)[name]} onChange={handleChange}
                              className="theme-input w-full rounded-xl px-4 py-3 text-sm" />
                          </div>
                        ))}
                      </div>
                      <div>
                        <label className="block text-xs font-bold theme-text-muted uppercase tracking-widest mb-2">Subject</label>
                        <input name="subject" type="text" placeholder="Bulk order enquiry / Product query..."
                          value={form.subject} onChange={handleChange}
                          className="theme-input w-full rounded-xl px-4 py-3 text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold theme-text-muted uppercase tracking-widest mb-2">Message*</label>
                        <textarea name="message" rows={3} required placeholder="Tell us what you need — quantity, product type, delivery location..."
                          value={form.message} onChange={handleChange}
                          className="theme-input w-full rounded-xl px-4 py-3 text-sm resize-none" />
                      </div>
                      <button type="submit" disabled={loading}
                        className="w-full theme-btn-primary py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 disabled:opacity-60">
                        {loading ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : <><Send className="w-5 h-5" /> Send Message</>}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
