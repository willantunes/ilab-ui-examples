import { Head } from "$fresh/runtime.ts";
import Option2Layout from "../../components/layouts/Option2Layout.tsx";
import CadastroPage from "../../components/pages/CadastroPage.tsx";

export default function Option2Protocolo() {
  return (
    <>
      <Head>
        <title>Cadastro de Protocolo - Opção 2</title>
      </Head>
      <Option2Layout currentPage="cadastro">
        <CadastroPage variant="option2" />
      </Option2Layout>
    </>
  );
}

