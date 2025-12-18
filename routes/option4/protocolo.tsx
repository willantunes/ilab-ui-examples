import { Head } from "$fresh/runtime.ts";
import Option4Layout from "../../components/layouts/Option4Layout.tsx";
import CadastroPage from "../../components/pages/CadastroPage.tsx";

export default function Option4Protocolo() {
  return (
    <>
      <Head>
        <title>Cadastro de Protocolo - Opção 4</title>
      </Head>
      <Option4Layout currentPage="cadastro">
        <CadastroPage variant="option4" />
      </Option4Layout>
    </>
  );
}

