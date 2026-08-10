import {
    Mail,
    MessageCircle,
    Code,
    MapPin,
} from "lucide-react";

export const contact = {
    hero: {
        title: "Let's Build Something Great Together",
        intro:
            "Have an idea, startup or business project? I'd love to hear about it. Whether it's a new application, AI solution or business website, let's discuss how we can bring it to life.",
    },

    methods: [
        {
            icon: Mail,
            title: "Email",
            value: "ashlabs.office@gmail.com",
            href: "mailto:ashlabs.office@gmail.com",
        },
        {
            icon: MessageCircle,
            title: "WhatsApp",
            value: "+91-7619217425",
            href: "https://wa.me/917619217425",
        },
        {
            icon: Code,
            title: "GitHub",
            value: "github.com/ashlabsdev",
            href: "https://github.com/ashlabsdev",
        },
        {
            icon: MapPin,
            title: "Location",
            value: "India • Remote Worldwide",
        },
    ],

    faq: [
        {
            question: "How quickly do you respond?",
            answer: "Usually within 24 hours.",
        },
        {
            question: "Do you work remotely?",
            answer: "Yes, I work with clients worldwide.",
        },
        {
            question: "Can you maintain existing software?",
            answer: "Absolutely. I can improve, refactor and extend existing applications.",
        },
        {
            question: "Do you build MVPs?",
            answer: "Yes. MVPs are one of my favorite types of projects.",
        },
    ],
};