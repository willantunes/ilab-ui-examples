import { Head } from "$fresh/runtime.ts";
import Option1Layout from "../../components/layouts/Option1Layout.tsx";
import CadastroPage from "../../components/pages/CadastroPage.tsx";

export default function Option1Protocolo() {
  return (
    <>
      <Head>
        <title>Cadastro de Protocolo - Opção 1</title>
      </Head>
      <Option1Layout currentPage="cadastro">
        <CadastroPage variant="option1" />
      </Option1Layout>
    </>
  );
}

