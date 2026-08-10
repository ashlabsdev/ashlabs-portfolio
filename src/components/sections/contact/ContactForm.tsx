import { useState } from "react";

import Button from "../../ui/Button";
import Card from "../../ui/Card";
import Heading from "../../ui/Heading";
import Section from "../../ui/Section";
import FormField from "../../ui/FormField";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import TextArea from "../../ui/TextArea";

import { sendContactEmail } from "../../../services/email";
import Toast from "../../ui/Toast";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        project: "",
        budget: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [toast, setToast] = useState<{
        message: string;
        type: "success" | "error";
    } | null>(null);

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        project: "",
        budget: "",
        message: "",
    });

    function validate() {
        const newErrors = {
            name: "",
            email: "",
            project: "",
            budget: "",
            message: "",
        };

        if (!form.name.trim())
            newErrors.name = "Please enter your name.";

        if (!form.email.trim())
            newErrors.email = "Please enter your email.";

        else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
        )
            newErrors.email = "Please enter a valid email.";

        if (!form.project)
            newErrors.project = "Select a project type.";

        if (!form.budget)
            newErrors.budget = "Select an estimated budget.";

        if (!form.message.trim())
            newErrors.message = "Tell us about your project.";

        setErrors(newErrors);

        return !Object.values(newErrors).some(Boolean);
    }

    function handleChange(
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLSelectElement |
            HTMLTextAreaElement
        >
    ) {

        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    }

    async function handleSubmit() {
        setSubmitted(true);

        if (!validate()) return;

        try {
            setLoading(true);

            await sendContactEmail(form);

            setToast({
                message:
                    "Thanks for reaching out! We'll get back to you within 24 hours.",
                type: "success",
            });

            setForm({
                name: "",
                email: "",
                project: "",
                budget: "",
                message: "",
            });

            setErrors({
                name: "",
                email: "",
                project: "",
                budget: "",
                message: "",
            });

            setSubmitted(false);
        } catch (error) {
            console.error(error);

            setToast({
                message:
                    "Something went wrong while sending your enquiry. Please try again.",
                type: "error",
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}

            <Section className="pt-0">

                <Heading
                    title="Start Your Project"
                    subtitle="Tell us a little about your idea and we'll get back to you."
                    align="center"
                />

                <div className="mt-14 grid gap-8 lg:grid-cols-[2fr_1fr]">

                    {/* FORM */}
                    <Card>

                        <div className="grid gap-6">

                            <FormField
                                label="Your Name"
                                required
                                error={submitted ? errors.name : ""}
                            >
                                <Input
                                    name="name"
                                    placeholder="John Doe"
                                    value={form.name}
                                    onChange={handleChange}
                                    error={submitted ? errors.name : ""}
                                />
                            </FormField>

                            <FormField
                                label="Email Address"
                                required
                                error={submitted ? errors.email : ""}
                            >
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    error={submitted ? errors.email : ""}
                                />
                            </FormField>

                            <FormField
                                label="Project Type"
                                required
                                error={submitted ? errors.project : ""}
                            >
                                <Select
                                    name="project"
                                    value={form.project}
                                    onChange={handleChange}
                                    error={submitted ? errors.project : ""}
                                >
                                    <option value="">Select Project Type</option>
                                    <option value="Business Website">Business Website</option>
                                    <option value="Web Application">Web Application</option>
                                    <option value="Internal Tool">Internal Tool</option>
                                    <option value="AI Solution">AI Solution</option>
                                    <option value="Other">Other</option>
                                </Select>
                            </FormField>

                            <FormField
                                label="Estimated Budget"
                                required
                                error={submitted ? errors.budget : ""}
                            >
                                <Select
                                    name="budget"
                                    value={form.budget}
                                    onChange={handleChange}
                                    error={submitted ? errors.budget : ""}
                                >
                                    <option value="">Select Estimated Budget</option>
                                    <option value="Under ₹25,000">Under ₹25,000</option>
                                    <option value="₹25,000 - ₹75,000">₹25,000 - ₹75,000</option>
                                    <option value="₹75,000+">₹75,000+</option>
                                    <option value="Let's Discuss">Let's Discuss</option>
                                </Select>
                            </FormField>

                            <FormField
                                label="Project Details"
                                required
                                error={submitted ? errors.message : ""}
                            >
                                <TextArea
                                    rows={7}
                                    name="message"
                                    placeholder="Tell us about your project..."
                                    value={form.message}
                                    onChange={handleChange}
                                    error={submitted ? errors.message : ""}
                                />
                            </FormField>

                            <Button onClick={handleSubmit} disabled={loading}>
                                {loading ? "Sending..." : "Send Enquiry →"}
                            </Button>

                        </div>

                    </Card>

                    {/* WHATSAPP */}

                    <Card className="h-fit">

                        <div className="flex h-full flex-col justify-between">

                            <div>

                                <h3 className="font-heading text-2xl font-bold">
                                    Prefer a quick chat?
                                </h3>

                                <p className="mt-4 leading-7 text-[var(--muted)]">
                                    If you have a quick question or want to discuss your idea,
                                    feel free to reach out directly on WhatsApp.
                                </p>

                            </div>

                            <a
                                href="https://wa.me/917619217425"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-10"
                            >
                                <Button variant="outline">
                                    💬 Message on WhatsApp
                                </Button>
                            </a>

                        </div>

                    </Card>

                </div>

            </Section>
        </>
    );
}