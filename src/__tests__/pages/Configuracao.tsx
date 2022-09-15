import React from "react";
import { render } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Configuracao from "../../pages/Configuracao";

const mockNavegacao = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavegacao,
  };
});

describe("a página de configuração", () => {
  test("deve ser renderizada corretamente", () => {
    const { container } = render(
      <RecoilRoot>
        <Configuracao />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
