import { Head } from "$fresh/runtime.ts";
import Option3Layout from "../../components/layouts/Option3Layout.tsx";
import CadastroPage from "../../components/pages/CadastroPage.tsx";

export default function Option3Protocolo() {
  return (
    <>
      <Head>
        <title>Cadastro de Protocolo - Opção 3</title>
      </Head>
      <Option3Layout currentPage="cadastro">
        <CadastroPage variant="option3" />
      </Option3Layout>
    </>
  );
}

