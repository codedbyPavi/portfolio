import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Code2, Link, Loader2, Mail, Sparkles, User } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { profile } from "../data/portfolioData";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitErrorMessage, setSubmitErrorMessage] = useState("");

  const SERVICE_IDS = ["service_q1f2oe5", "service_e5v1brk"];
  const TEMPLATE_ID = "template_htxszve";
  const PUBLIC_KEY = "cMb4Z265sHlb3XrSU";

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const validate = useMemo(
    () => (values) => {
      const nextErrors = {};
      if (!values.name.trim()) nextErrors.name = "Name is required.";
      if (!values.email.trim()) nextErrors.email = "Email is required.";
      else if (!isValidEmail(values.email)) nextErrors.email = "Enter a valid email address.";
      if (!values.message.trim()) nextErrors.message = "Message is required.";
      return nextErrors;
    },
    []
  );

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setSuccess(false);
    setSubmitError(false);
    setSubmitErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    setSuccess(false);
    setSubmitError(false);
    setSubmitErrorMessage("");

    try {
      let lastError = null;
      for (const serviceId of SERVICE_IDS) {
        try {
          await emailjs.send(
            serviceId,
            TEMPLATE_ID,
            {
              name: form.name,
              email: form.email,
              message: form.message,
            },
            PUBLIC_KEY
          );
          lastError = null;
          break;
        } catch (error) {
          lastError = error;
        }
      }

      if (lastError) {
        throw lastError;
      }

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitError(true);
      setSubmitErrorMessage(error?.text || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="section-wrap pb-20">
      <SectionTitle eyebrow="Contact" title="Let&apos;s build something exceptional together" />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card p-6">
          <p className="mb-4 text-[#9CA3AF]">Reach me through these platforms:</p>
          <div className="space-y-3">
            <a className="contact-link icon-link" href={`mailto:${profile.email}`}>
              <Mail size={18} />
              <span>{profile.email}</span>
            </a>
            <a className="contact-link icon-link" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Link size={18} />
              <span>LinkedIn</span>
            </a>
            <a className="contact-link icon-link" href={profile.github} target="_blank" rel="noreferrer">
              <Code2 size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <motion.form
          onSubmit={handleSubmit}
          className="glass-card space-y-4 p-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <label className="form-field">
            <span className="input-icon">
              <User size={16} />
            </span>
            <input
              className={`input input-with-icon ${errors.name ? "input-error" : ""}`}
              placeholder="Your name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
          </label>
          {errors.name && <p className="form-error">{errors.name}</p>}

          <label className="form-field">
            <span className="input-icon">
              <Mail size={16} />
            </span>
            <input
              className={`input input-with-icon ${errors.email ? "input-error" : ""}`}
              placeholder="Email address"
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
          </label>
          {errors.email && <p className="form-error">{errors.email}</p>}

          <label className="form-field">
            <span className="input-icon">
              <Sparkles size={16} />
            </span>
            <textarea
              className={`input input-with-icon min-h-32 ${errors.message ? "input-error" : ""}`}
              placeholder="Your message"
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              required
            />
          </label>
          {errors.message && <p className="form-error">{errors.message}</p>}

          <button type="submit" className="cta-btn w-full justify-center" disabled={loading}>
            {loading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
            <span>{loading ? "Sending..." : "Send Message"}</span>
          </button>
          {success && <p className="form-success">Message sent successfully 🎉</p>}
          {submitError && <p className="form-error">{submitErrorMessage || "Something went wrong"}</p>}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
