import CotizadorContext from "../context/CotizadorProvider";
import { useContext } from "react";

const useCotizador = () => {
  return useContext(CotizadorContext);
};

export default useCotizador;
