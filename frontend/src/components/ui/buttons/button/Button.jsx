import React, { useState } from "react";
import { SButton } from "./style";
import ContactForm from "../../../contactform";

export default function Home({ children }) {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <SButton onClick={handleShowForm}>{children}</SButton>
      {showForm && <ContactForm />}
    </>
  );
}
