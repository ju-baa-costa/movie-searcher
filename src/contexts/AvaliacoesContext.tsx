import { createContext, useContext, useEffect, useState } from "react";

interface AvaliacoesContextType {
  avaliacoes: Record<string, number>;

  avaliarFilme: (filmeId: number, nota: number) => void;

  removerAvaliacao: (filmeId: number) => void;
}

const AvaliacoesContext = createContext({} as AvaliacoesContextType);

export function AvaliacoesProvider({ children }: any) {
  const [avaliacoes, setAvaliacoes] = useState<Record<string, number>>({});
  useEffect(() => {
    const avaliacoesSalvas = localStorage.getItem("avaliacoes");

    if (avaliacoesSalvas) {
      setAvaliacoes(JSON.parse(avaliacoesSalvas));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("avaliacoes", JSON.stringify(avaliacoes));
  }, [avaliacoes]);

  function avaliarFilme(filmeId: number, nota: number) {
    setAvaliacoes((prev) => ({
      ...prev,
      [String(filmeId)]: nota,
    }));
  }

  function removerAvaliacao(filmeId: number) {
    setAvaliacoes((prev) => {
      const copia = { ...prev };

      delete copia[String(filmeId)];

      return copia;
    });
  }

  return (
    <AvaliacoesContext.Provider
      value={{
        avaliacoes,
        avaliarFilme,
        removerAvaliacao,
      }}
    >
      {children}
    </AvaliacoesContext.Provider>
  );
}

export function useAvaliacoes() {
  return useContext(AvaliacoesContext);
}
