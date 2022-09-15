import { useSetRecoilState } from "recoil";
import { resultadoSorteio } from "../atom";
import { realizarSorteio } from "./helpers/realizarSorteio";
import { useListaDeParticipantes } from "./useListaDeParticipantes";

export const useSorteador = () => {
  const listaParticipantes = useListaDeParticipantes();
  const setResultado = useSetRecoilState(resultadoSorteio);

  return () => {
    const resultado = realizarSorteio(listaParticipantes);
    setResultado(resultado);
  };
};
