import { Head } from "$fresh/runtime.ts";
import Option5Layout from "../../components/layouts/Option5Layout.tsx";
import ExamesPage from "../../components/pages/ExamesPage.tsx";

export default function Option5Cadastro() {
  return (
    <>
      <Head>
        <title>Cadastro de Exames - Opção 5</title>
      </Head>
      <Option5Layout currentPage="cadastro">
        <ExamesPage variant="option5" />
      </Option5Layout>
    </>
  );
}

