import { Head } from "$fresh/runtime.ts";
import Option6Layout from "../../components/layouts/Option6Layout.tsx";
import CadastroPage from "../../components/pages/CadastroPage.tsx";

export default function Option6Protocolo() {
  return (
    <>
      <Head>
        <title>Cadastro de Protocolo - Opção 6</title>
      </Head>
      <Option6Layout currentPage="cadastro">
        <CadastroPage variant="option6" />
      </Option6Layout>
    </>
  );
}

