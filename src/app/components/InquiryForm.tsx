import { useState } from "react";
import { CheckCircle, MessageCircle } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const productOptions = [
  { value: "round-neck", label: "Round Neck T-Shirt" },
  { value: "oversized", label: "Oversized T-Shirt" },
  { value: "polo", label: "Polo T-Shirt" },
  { value: "hoodie", label: "Premium Hoodie" },
  { value: "gym-vest", label: "Gym Vest" },
  { value: "tote-bag", label: "Tote Bag" },
  { value: "accessories", label: "Accessories" },
  { value: "diary", label: "Corporate Diary" },
  { value: "other", label: "Other / Custom" },
];

interface FormData {
  name: string;
  mobile: string;
  email: string;
  product: string;
  quantity: string;
  city: string;
  message: string;
}

interface Errors {
  name?: string;
  mobile?: string;
  email?: string;
  product?: string;
  quantity?: string;
  city?: string;
}

const WA_BASE = "https://wa.me/919136867622";

export function InquiryForm() {
  const [form, setForm] = useState<FormData>({ name: "", mobile: "", email: "", product: "", quantity: "", city: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name || form.name.trim().length < 2) e.name = "Please enter your full name";
    if (!form.mobile || !/^[6-9]\d{9}$/.test(form.mobile.trim())) e.mobile = "Enter a valid 10-digit mobile number";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address";
    if (!form.product) e.product = "Please select a product";
    if (!form.quantity || parseInt(form.quantity) < 1) e.quantity = "Please enter a quantity";
    if (!form.city || form.city.trim().length < 2) e.city = "Please enter your city";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Redirect to Google Form with pre-filled data
    const googleFormUrl = "https://forms.gle/LyAS3k5qw1QpGVQ48";
    window.open(googleFormUrl, "_blank");
    setSubmitted(true);
  };

  const waAlt = `${WA_BASE}?text=${encodeURIComponent("Hi Modish! I've submitted an inquiry and would like to discuss further.")}`;

  if (submitted) {
    return (
      <section id="inquiry" className="modish-section" style={{ background: "var(--modish-grey-100)" }}>
        <div className="modish-container" style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="modish-card-pad"
            style={{
              background: "var(--modish-white)",
              borderRadius: "var(--modish-radius-xl)",
              textAlign: "center",
              maxWidth: "480px",
              width: "100%",
              boxShadow: "var(--modish-shadow-md)",
            }}
          >
            <CheckCircle size={48} style={{ color: "var(--modish-whatsapp)", marginBottom: "var(--modish-space-4)" }} />
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "24px", color: "var(--modish-black)", margin: "0 0 var(--modish-space-3) 0" }}>
              Inquiry Submitted!
            </h3>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "15px", color: "var(--modish-grey-500)", lineHeight: 1.6, margin: "0 0 var(--modish-space-6) 0" }}>
              Thank you! We've received your inquiry. A Google Form was opened in a new tab — please complete it for faster processing. We'll get back to you within 24 hours.
            </p>
            <a
              href={waAlt}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--modish-space-2)",
                background: "var(--modish-whatsapp)",
                color: "var(--modish-white)",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "15px",
                padding: "14px 24px",
                borderRadius: "var(--modish-radius-md)",
                textDecoration: "none",
              }}
            >
              <MessageCircle size={18} />
              Follow Up on WhatsApp
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inquiry" className="modish-section" style={{ background: "var(--modish-grey-100)" }}>
      <div className="modish-container">
        <div style={{ textAlign: "center", marginBottom: "var(--modish-space-10)" }}>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--modish-grey-500)", margin: "0 0 8px 0" }}>
            GET A QUOTE
          </p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(20px, 3vw, 30px)", color: "var(--modish-black)", margin: "0 0 12px 0", lineHeight: 1.1 }}>
            Request a Quote
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "15px", color: "var(--modish-grey-500)", maxWidth: "560px", margin: "0 auto" }}>
            Fill in your details and we'll get back to you within 24 hours with pricing and mockup options.
          </p>
        </div>

        <div className="modish-inquiry-grid" style={{
          maxWidth: "960px",
          margin: "0 auto",
        }}>
          {/* Form Card */}
          <div
            className="modish-card-pad"
            style={{
              background: "var(--modish-white)",
              borderRadius: "var(--modish-radius-xl)",
              boxShadow: "var(--modish-shadow-md)",
            }}
          >
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--modish-space-5)" }}>
                {/* Name + Mobile Row */}
                <div className="modish-form-row">
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "14px", color: "var(--modish-black)", marginBottom: "8px" }}>
                      Full Name *
                    </label>
                    <Input
                      placeholder="Your full name"
                      value={form.name}
                      onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(err => ({ ...err, name: undefined })); }}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                    {errors.name && (
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#E53E3E", margin: "4px 0 0 0" }}>{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "14px", color: "var(--modish-black)", marginBottom: "8px" }}>
                      Mobile Number *
                    </label>
                    <Input
                      placeholder="10-digit mobile number"
                      value={form.mobile}
                      onChange={e => { setForm(f => ({ ...f, mobile: e.target.value })); setErrors(err => ({ ...err, mobile: undefined })); }}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                    {errors.mobile && (
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#E53E3E", margin: "4px 0 0 0" }}>{errors.mobile}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "14px", color: "var(--modish-black)", marginBottom: "8px" }}>
                    Email Address (Optional)
                  </label>
                  <Input
                    placeholder="your@email.com"
                    type="email"
                    value={form.email}
                    onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(err => ({ ...err, email: undefined })); }}
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                  {errors.email && (
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#E53E3E", margin: "4px 0 0 0" }}>{errors.email}</p>
                  )}
                </div>

                {/* Product + Quantity Row */}
                <div className="modish-form-row">
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "14px", color: "var(--modish-black)", marginBottom: "8px" }}>
                      Product Required *
                    </label>
                    <Select value={form.product} onValueChange={val => { setForm(f => ({ ...f, product: val })); setErrors(err => ({ ...err, product: undefined })); }}>
                      <SelectTrigger style={{ fontFamily: "var(--font-body)" }}>
                        <SelectValue placeholder="Select a product" />
                      </SelectTrigger>
                      <SelectContent>
                        {productOptions.map(opt => (
                          <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.product && (
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#E53E3E", margin: "4px 0 0 0" }}>{errors.product}</p>
                    )}
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "14px", color: "var(--modish-black)", marginBottom: "8px" }}>
                      Quantity *
                    </label>
                    <Input
                      placeholder="e.g. 50, 100, 500"
                      type="number"
                      value={form.quantity}
                      onChange={e => { setForm(f => ({ ...f, quantity: e.target.value })); setErrors(err => ({ ...err, quantity: undefined })); }}
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                    {errors.quantity && (
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#E53E3E", margin: "4px 0 0 0" }}>{errors.quantity}</p>
                    )}
                  </div>
                </div>

                {/* City */}
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "14px", color: "var(--modish-black)", marginBottom: "8px" }}>
                    City *
                  </label>
                  <Input
                    placeholder="Your city"
                    value={form.city}
                    onChange={e => { setForm(f => ({ ...f, city: e.target.value })); setErrors(err => ({ ...err, city: undefined })); }}
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                  {errors.city && (
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#E53E3E", margin: "4px 0 0 0" }}>{errors.city}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "14px", color: "var(--modish-black)", marginBottom: "8px" }}>
                    Message / Requirements (Optional)
                  </label>
                  <Textarea
                    placeholder="Tell us about your design, event, or any specific requirements..."
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>

                {/* Submit */}
                {/* using <button> instead of <Button>: form submit requires full-width layout with Modish brand styling (black bg + yellow text) not available in kit's primary variant */}
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "var(--modish-space-2)",
                    background: "var(--modish-black)",
                    color: "var(--modish-yellow)",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "16px",
                    padding: "16px 32px",
                    borderRadius: "var(--modish-radius-md)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    minHeight: "52px",
                  }}
                  onMouseEnter={e => { const b = e.currentTarget; b.style.background = "var(--modish-yellow)"; b.style.color = "var(--modish-black)"; }}
                  onMouseLeave={e => { const b = e.currentTarget; b.style.background = "var(--modish-black)"; b.style.color = "var(--modish-yellow)"; }}
                >
                  Get My Quote →
                </button>
              </div>
            </form>
          </div>

          {/* Info Panel */}
          <div
            className="modish-card-pad"
            style={{
              background: "var(--modish-white)",
              borderRadius: "var(--modish-radius-xl)",
              boxShadow: "var(--modish-shadow-md)",
              borderTop: "4px solid var(--modish-yellow)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--modish-space-6)",
            }}
          >
            <div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "22px", color: "var(--modish-black)", margin: "0 0 var(--modish-space-5) 0" }}>
                Getting a Quote is Easy
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--modish-space-4)" }}>
                {[
                  "Response within 24 hours",
                  "Free digital mockup provided",
                  "No minimum commitment to inquire",
                  "WhatsApp follow-up included",
                  "Bulk pricing available for 50+",
                ].map((benefit, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "var(--modish-space-3)" }}>
                    <CheckCircle size={18} style={{ color: "var(--modish-yellow)", flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "15px", color: "var(--modish-grey-700)", lineHeight: 1.4 }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderTop: "1px solid var(--modish-grey-200)", paddingTop: "var(--modish-space-5)" }}>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "14px", color: "var(--modish-grey-500)", margin: "0 0 var(--modish-space-3) 0" }}>
                Prefer to chat directly?
              </p>
              <a
                href={waAlt}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--modish-space-2)",
                  background: "var(--modish-whatsapp)",
                  color: "var(--modish-white)",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "15px",
                  padding: "13px 20px",
                  borderRadius: "var(--modish-radius-md)",
                  textDecoration: "none",
                  transition: "background 0.2s ease",
                  justifyContent: "center",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--modish-whatsapp-dark)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--modish-whatsapp)"; }}
              >
                <MessageCircle size={18} />
                Chat on WhatsApp Instead →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
