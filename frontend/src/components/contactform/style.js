import styled from "styled-components";

export const SImg3 = styled.img`
  position: absolute;
  top: -35%;
  left: -8%;
  transform: scale(0.5);
  opacity: 0;
  transition: all 0.3s ease-in-out;
`;

export const SImg4 = styled.img`
  position: absolute;
  bottom: -40%;
  right: -8%;
  transform: scale(0.5);
  opacity: 0;
  transition: all 0.3s ease-in-out;
`;

export const SButtonContact = styled(Button)`
  && {
    width: 200px;
    height: 56px;
    border-radius: 5px;
    background: var(--green);
    border: 5px solid var(--green);
    box-shadow: 0px 3px 6px var(--green);
    text-transform: none;
    font-family: Poppins Medium;
    font-size: 20px;
    font-weight: 500;
    color: var(--white);
    margin-top: 33px;
    position: relative;
    &:hover {
      background: transparent;
      ${SImg3} {
        transform: scale(1);
        top: -48px;
        left: -70px;
        opacity: 1;
      }
      ${SImg4} {
        transform: scale(1);
        bottom: -58px;
        right: -70px;
        opacity: 1;
      }
    }
  }
`;

export const STypographyBtn = styled(Typography)`
  && {
    font-family: Poppins Regular;
    font-size: 20px;
    font-weight: 400;
    color: var(--green);
    text-transform: none;
    display: none;
  }
`;

export const SButtonContactFixed = styled(Button)`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  position: fixed;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    width: 212px;
    border: 2px solid var(--green);
    content: "Fale Conosco";
    transition: width 0.3s ease-in-out;
    ${STypographyBtn} {
      display: block;
      transition: 0.3s ease-in-out;
    }
  }
`;

export const SGrid = styled(Grid)`
  && {
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    padding: 64px;
    position: relative;
    @media (max-width: 600px) {
      padding: 16px;
    }
  }
`;

export const SText = styled(Typography)`
  && {
    font-family: Poppins Medium;
    font-size: 28px;
    width: 100%;
    font-weight: 500;
    color: var(--white);
    text-shadow: 0px 3px 6px var(--green-second);
    text-align: center;
    @media (max-width: 600px) {
      font-size: 20px;
    }
  }
`;

export const SImg = styled.img`
  position: absolute;
  top: -3%;
  left: -0.5%;
  width: 50%;
`;

export const SImg2 = styled.img`
  position: absolute;
  bottom: -8%;
  right: -2%;
  width: 50%;
`;

export const SContainerContact = styled(Container)`
  && {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: 32px;
    backdrop-filter: blur(30px);
  }
`;

export const GridContainer1 = styled(Grid)`
  && {
    padding: 32px;
    border-radius: 8px;
    box-shadow: 0px 0px 6px var(--green-third);
    background: var(--white);
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

export const GridContainer2 = styled(Grid)`
  && {
    padding: 32px;
    border-radius: 8px;
    box-shadow: 0px 0px 6px var(--green-third);
    background: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const STypographyContactTitle = styled(Typography)`
  && {
    font-size: 30px;
    font-weight: 600;
    font-family: Poppins SemiBold;
    color: var(--blue);
  }
`;

export const STypographyContactSubText = styled(Typography)`
  && {
    font-size: 26px;
    font-weight: 300;
    font-family: Poppins Light;
    color: var(--dark-gray);
  }
`;

export const STypographyContactText = styled(Typography)`
  && {
    font-size: 20px;
    font-weight: 400;
    font-family: Poppins Regular;
    color: var(--dark-gray);
  }
`;

export const SLabel = styled(FormLabel)`
  && {
    font-size: 20px;
    font-weight: 400;
    font-family: Poppins Regular;
    color: var(--blue);
  }
`;

export const SInput = styled(Input)`
  && {
    width: 100%;
    height: 36px;
    padding-left: 12px;
    margin: 0;
    margin-bottom: 20px;
    border-radius: 5px;
    background: rgba(223, 222, 222, 0.33);
    text-decoration: none;
  }
`;

export const SSelect = styled(Select)`
  width: 100%;
  height: 36px;
  border-radius: 5px;
  background: rgba(223, 222, 222, 0.33);
  font-size: 20px;
  font-weight: 300;
  font-family: Poppins Light;
  color: var(--blue);
`;

export const SCheckbox = styled(Checkbox)`
  && {
    width: 22px;
    height: 22px;
    border-radius: 5px;
    color: var(--white);
    border: 1px solid var(--blue);
    margin-right: 10px;
  }
`;

export const STypographyCheck = styled(Typography)`
  && {
    font-size: 14px;
    font-weight: 400;
    font-family: Poppins Regular;
    color: var(--dark);
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
`;

export const SButtonSend = styled(Button)`
  && {
    border-radius: 8px;
    background: var(--blue);
    width: 147px;
    height: 36px;
    color: var(--white);
    font-size: 20px;
    font-family: Poppins Regular;
    font-weight: 400;
    &:hover {
      background: var(--blue);
    }
    @media (max-width: 600px) {
      margin-top: 16px;
      width: 100%;
    }
  }
`;
