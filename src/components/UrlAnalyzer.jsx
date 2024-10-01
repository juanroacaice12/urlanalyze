import React, { useState } from "react";
import { analyzeUrl } from "../api/api";
import svg1 from "../assets/pointsFrameLanding.svg";
import svg2 from "../assets/vite.svg";
import fixlatLogo from "../assets/Fixlat_HD-removebg-preview.png"; // Importa el logo de FixLat

const UrlAnalyzer = () => {
  const [url, setUrl] = useState("");
  const [urlData, setUrlData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyzeUrl = async () => {
    setLoading(true);
    setError(null);
    setUrlData(null); // Limpiar los datos anteriores
    try {
      const data = await analyzeUrl(url);
      setUrlData(data.predict); // Ajusta para mostrar solo el resultado
    } catch (error) {
      setError("Error analizando la URL"); // Mostrar mensaje de error genérico
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-landing-bg w-screen lg:h-screen h-[70vw] overflow-hidden relative flex items-center justify-center">
      <img
        src={svg1}
        alt="Layer 1"
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      />
      <img
        src={svg2}
        alt="Layer 2"
        className="absolute inset-0 w-full h-full shadow-sm"
        style={{ pointerEvents: "none" }}
      />

      {/* Círculos con efectos */}
      <div className="absolute inset-0 flex justify-start items-start">
        <div className="absolute w-[70vw] h-[76vw] rounded-full bg-[radial-gradient(circle_at_top_left,_rgba(0,205,255,0.8),_rgba(0,44,190,0)_80%)] blur-[100px] top-[-38vw] left-[-38vw] animate-pulse-slow" />
      </div>
      <div className="absolute inset-0 flex justify-end items-end">
        <div className="absolute w-[70vw] h-[76vw] rounded-full bg-[radial-gradient(circle_at_bottom_right,_rgba(0,205,255,0.8),_rgba(0,44,190,0)_80%)] blur-[100px] bottom-[-38vw] right-[-38vw] animate-pulse-slow" />
      </div>

      {/* Logo de FixLat y el input */}
      <div className="relative z-20 flex flex-col items-center justify-center space-y-6 p-4">
        {/* Logo de FixLat */}
        <div>
          <img src={fixlatLogo} alt="FixLat Logo" className="w-60 h-auto mb-6" />
        </div>

        {/* Input para URL */}
        <div className="relative">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Introduce la URL aquí"
            className="p-3 mb-4 border border-white bg-transparent text-white rounded-md w-80"
            disabled={loading} // Desactivar el input durante la carga
          />
        </div>

        {/* Botón de analizar */}
        <button
          onClick={handleAnalyzeUrl}
          className={`p-2 ${loading ? "bg-gray-500" : "bg-custom-blue"} text-white rounded-md w-40`}
          disabled={loading}
        >
          {loading ? "Analizando..." : "Analizar URL"}
        </button>

        {error && <p className="mt-4 text-red-500">{error}</p>}

        {/* Mostrar Skeleton Loader solo si loading es true */}
        {loading && (
          <div className="mt-4 animate-pulse">
            <p className="text-gray-500">Generando el modelo de Machine Learning y prediciendo...</p>
            <div className="bg-gray-300 h-6 w-64 rounded mt-2"></div>
          </div>
        )}

        {/* Mostrar el resultado cuando no esté cargando */}
        {!loading && urlData && (
          <div className="mt-4 text-white text-center">
            <h3 className="font-thin text-lg">
              FixLat te informa que es: <span className="font-normal">{urlData}</span>
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlAnalyzer;
