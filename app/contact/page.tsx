// FILE: app/contact/page.tsx

import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Sales & Support | NeuralFlow AI",
  description: "Get in touch with the NeuralFlow AI team for custom enterprise integrations or trial setup.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactForm />
      <Footer />
    </>
  );
}
