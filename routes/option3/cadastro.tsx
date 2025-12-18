import { Head } from "$fresh/runtime.ts";
import Option3Layout from "../../components/layouts/Option3Layout.tsx";
import ExamesPage from "../../components/pages/ExamesPage.tsx";

export default function Option3Cadastro() {
  return (
    <>
      <Head>
        <title>Cadastro de Exames - Opção 3</title>
      </Head>
      <Option3Layout currentPage="cadastro">
        <ExamesPage variant="option3" />
      </Option3Layout>
    </>
  );
}

