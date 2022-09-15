import shuffle from "just-shuffle";

export function realizarSorteio(participantes: string[]) {
  const totalParticipantes = participantes.length;
  const participantesEmbaralhados = shuffle(participantes);

  const resultado = new Map<string, string>();

  for (let index = 0; index < totalParticipantes; index++) {
    const indexParticipante = index === totalParticipantes - 1 ? 0 : index + 1;
    resultado.set(participantesEmbaralhados[index], participantesEmbaralhados[indexParticipante]);
  }

  return resultado;
}
