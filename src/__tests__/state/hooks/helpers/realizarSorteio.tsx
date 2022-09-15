import React from "react";
import { realizarSorteio } from "../../../../state/hooks/helpers/realizarSorteio";

describe("durante um sorteio de amigo secreto", () => {
  const participantes = ["1", "2", "3", "4", "5"];

  test("cada participante não pode sortear o próprio nome", () => {
    const sorteio = realizarSorteio(participantes);

    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
