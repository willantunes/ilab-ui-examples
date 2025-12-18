import { Head } from "$fresh/runtime.ts";
import Option5Layout from "../../components/layouts/Option5Layout.tsx";
import CadastroPage from "../../components/pages/CadastroPage.tsx";

export default function Option5Protocolo() {
  return (
    <>
      <Head>
        <title>Cadastro de Protocolo - Opção 5</title>
      </Head>
      <Option5Layout currentPage="cadastro">
        <CadastroPage variant="option5" />
      </Option5Layout>
    </>
  );
}

