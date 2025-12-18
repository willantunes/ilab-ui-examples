import { Head } from "$fresh/runtime.ts";
import Option7Layout from "../../components/layouts/Option7Layout.tsx";
import CadastroPage from "../../components/pages/CadastroPage.tsx";

export default function Option7Protocolo() {
  return (
    <>
      <Head>
        <title>Cadastro de Protocolo - Opção 7</title>
      </Head>
      <Option7Layout currentPage="cadastro">
        <CadastroPage variant="option7" />
      </Option7Layout>
    </>
  );
}

