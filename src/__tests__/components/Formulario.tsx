import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Formulario from "../../components/Formulario/index";
import { RecoilRoot } from "recoil";

describe("comportamento do Formulario.tsx", () => {
  test("quando o input estiver vazio, novos participantes não podem ser adicionados", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    // encontrar no DOM o input
    const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
    // encontar o botão
    const button = screen.getByText("Adicionar");
    // garantir que o input esteja no documento
    expect(input).toBeInTheDocument();
    // garantir que o botão esteja desabilitado
    expect(button).toBeDisabled();
  });

  test("adicionar um participante caso exista um nome preenchido", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    // encontrar no DOM o input
    const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
    // encontar o botão
    const button = screen.getByText("Adicionar");
    // inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Gabe",
      },
    });
    // clicar no botão de submeter
    fireEvent.click(button);
    // garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus();
    // garantir que o input não tenha um valor
    expect(input).toHaveValue("");
  });

  test("nomes duplicados não podem ser adicionados na lista", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    // encontrar no DOM o input
    const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
    // encontar o botão
    const button = screen.getByText("Adicionar");
    // adicionar um nome na lista de participantes
    fireEvent.change(input, {
      target: {
        value: "Gabe",
      },
    });
    // clicar no botão de submeter
    fireEvent.click(button);
    // adicionar um nome na lista de participantes
    fireEvent.change(input, {
      target: {
        value: "Gabe",
      },
    });
    // clicar no botão de submeter
    fireEvent.click(button);
    // encontrar a mensagem de erro
    const mensagemErro = screen.getByRole("alert");
    // garantir que a mensagem possua o texto de erro
    expect(mensagemErro.textContent).toBe("Nomes duplicados não são permitidos!");
  });

  test("a mensagem de erro deve sumir após os timers", () => {
    jest.useFakeTimers();

    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    // encontrar no DOM o input
    const input = screen.getByPlaceholderText("Insira os nomes dos participantes");
    // encontar o botão
    const button = screen.getByText("Adicionar");
    // adicionar um nome na lista de participantes
    fireEvent.change(input, {
      target: {
        value: "Gabe",
      },
    });
    // clicar no botão de submeter
    fireEvent.click(button);
    // adicionar um nome na lista de participantes
    fireEvent.change(input, {
      target: {
        value: "Gabe",
      },
    });
    // clicar no botão de submeter
    fireEvent.click(button);

    // encontrar a mensagem de erro
    let mensagemErro = screen.queryByRole("alert");
    // garantir que a mensagem possua o texto de erro
    expect(mensagemErro).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    // esperar N segundos
    mensagemErro = screen.queryByRole("alert");
    // espera que a mensagem de erro seja null
    expect(mensagemErro).toBeNull();
  });
});
