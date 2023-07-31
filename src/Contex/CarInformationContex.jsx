import { createContext, useState } from "react";

const CarInformationContext = createContext({
  pickUpDateContex: '',
  pickUpLocationContex: '',
  dropOffDateContex: '',
  setPickUpLocationContex() {},
  setdropOffDateContex() {},
  setPickUpDateContex() {},


});

export const CarInformationProvider = (props) => {
  const [pickUpDateContex, setPickUpDateContex] = useState();
  const [pickUpLocationContex, setPickUpLocationContex] = useState();
  const [dropOffDateContex, setdropOffDateContex] = useState();

  return (
    <CarInformationContext.Provider
      value={{
        pickUpDateContex,
        setPickUpDateContex,
        pickUpLocationContex,
        setPickUpLocationContex,
        dropOffDateContex,
        setdropOffDateContex,
      }}
    >
      {props.children}
    </CarInformationContext.Provider>
  );
};

export default CarInformationContext;
