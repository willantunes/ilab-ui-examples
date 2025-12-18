import { Head } from "$fresh/runtime.ts";
import Option1Layout from "../../components/layouts/Option1Layout.tsx";
import ExamesPage from "../../components/pages/ExamesPage.tsx";

export default function Option1Cadastro() {
  return (
    <>
      <Head>
        <title>Cadastro de Exames - Opção 1</title>
      </Head>
      <Option1Layout currentPage="cadastro">
        <ExamesPage variant="option1" />
      </Option1Layout>
    </>
  );
}

