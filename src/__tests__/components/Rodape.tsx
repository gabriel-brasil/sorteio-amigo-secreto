import React from "react";

import { RecoilRoot } from "recoil";
import { fireEvent, render, screen } from "@testing-library/react";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";

import Rodape from "../../components/Rodape";

jest.mock("../../state/hooks/useListaDeParticipantes", () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

const mockNavegacao = jest.fn();
const mockSorteio = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavegacao,
  };
});
jest.mock("../../state/hooks/useSorteador", () => {
  return {
    useSorteador: () => mockSorteio,
  };
});

describe("se não possuir participantes suficientes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });

  test("o sorteio não pode ser iniciado", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByText("Iniciar brincadeira!");

    expect(botao).toBeDisabled();

    // end test
  });
});

describe("se possuir participantes suficientes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(["Jean", "Gabe", "Jão"]);
  });

  test("o sorteio pode ser iniciado", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByText("Iniciar brincadeira!");

    expect(botao).not.toBeDisabled();

    // end test
  });

  test("o sorteio é iniciado", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );
    const botao = screen.getByText("Iniciar brincadeira!");

    fireEvent.click(botao);

    expect(mockNavegacao).toHaveBeenCalledTimes(1);
    expect(mockNavegacao).toHaveBeenCalledWith("/sorteio");
    expect(mockSorteio).toHaveBeenCalledTimes(1);

    // end test
  });
});
