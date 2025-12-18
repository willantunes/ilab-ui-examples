import { Head } from "$fresh/runtime.ts";
import Option6Layout from "../../components/layouts/Option6Layout.tsx";
import ExamesPage from "../../components/pages/ExamesPage.tsx";

export default function Option6Cadastro() {
  return (
    <>
      <Head>
        <title>Cadastro de Exames - Opção 6</title>
      </Head>
      <Option6Layout currentPage="cadastro">
        <ExamesPage variant="option6" />
      </Option6Layout>
    </>
  );
}

