import { Head } from "$fresh/runtime.ts";
import Option10Layout from "../../components/layouts/Option10Layout.tsx";
import ExamesPage from "../../components/pages/ExamesPage.tsx";

export default function Option10Cadastro() {
  return (
    <>
      <Head>
        <title>Cadastro de Exames - Opção 10</title>
      </Head>
      <Option10Layout currentPage="cadastro">
        <ExamesPage variant="option10" />
      </Option10Layout>
    </>
  );
}

