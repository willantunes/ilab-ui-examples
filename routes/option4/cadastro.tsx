import { Head } from "$fresh/runtime.ts";
import Option4Layout from "../../components/layouts/Option4Layout.tsx";
import ExamesPage from "../../components/pages/ExamesPage.tsx";

export default function Option4Cadastro() {
  return (
    <>
      <Head>
        <title>Cadastro de Exames - Opção 4</title>
      </Head>
      <Option4Layout currentPage="cadastro">
        <ExamesPage variant="option4" />
      </Option4Layout>
    </>
  );
}

