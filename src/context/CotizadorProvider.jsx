import { createContext, useState } from "react";
import {
  calcularMarca,
  calcularPlan,
  obtenerDiferenciaYear,
  formatearDinero,
} from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [data, setData] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState("");
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);
  const handleChangeData = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });
  const cotizarSeguro = () => {
    let resultado = 2000;
    let diferencia = obtenerDiferenciaYear(data.year);
    resultado -= (diferencia * 3 * resultado) / 100;
    resultado *= calcularMarca(data.marca);
    resultado *= calcularPlan(data.plan);
    resultado = formatearDinero(resultado);
    setCargando(true);
    setTimeout(() => {
      setResultado(resultado);
      setCargando(false);
    }, 3000);
  };
  return (
    <CotizadorContext.Provider
      value={{
        data,
        handleChangeData,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };
export default CotizadorContext;
