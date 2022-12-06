import { MARCAS, YEARS, PLANES } from "../constants/index";
import { Fragment } from "react";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

const Formulario = () => {
  const { data, handleChangeData, setError, error, cotizarSeguro } =
    useCotizador();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(data).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("");
    cotizarSeguro();
  };
  return (
    <>
      {error && <Error />}
      <form className="my-5" onSubmit={handleSubmit}>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => handleChangeData(e)}
          >
            <option value="">-- Seleccionar Marca --</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Año
          </label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => handleChangeData(e)}
          >
            <option value="">-- Seleccionar Año --</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Elige un plan
          </label>
          <div className="flex gap-3">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  onChange={(e) => handleChangeData(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-700 cursor-pointer transition-colors text-white p-3 uppercase font-bold"
          value="COTIZAR"
        />
      </form>
    </>
  );
};

export default Formulario;
