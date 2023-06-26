import React, { useState } from "react";
import { SButton } from "./style";
import ContactForm from "../../../contactform";

export default function Home({ children }) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <SButton onClick={handleOpen}>{children}</SButton>
      {openModal && <ContactForm openModal={openModal} handleClose={handleClose} /> }
    </>
  );
}
