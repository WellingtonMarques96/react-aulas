import React from "react";
import Titulo from "./Titulo";

const HomeTemplate = () => {
  return (
    <section>
      <Titulo texto='Home' />
      <p>Essa é a home do site.</p>
    </section>
  )
}

export default HomeTemplate;

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
