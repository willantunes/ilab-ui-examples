import { Head } from "$fresh/runtime.ts";
import Option11Layout from "../../components/layouts/Option11Layout.tsx";
import ExamesPage from "../../components/pages/ExamesPage.tsx";

export default function Option11Cadastro() {
  return (
    <>
      <Head>
        <title>Cadastro de Exames - Opção 11</title>
      </Head>
      <Option11Layout currentPage="cadastro">
        <ExamesPage variant="option11" />
      </Option11Layout>
    </>
  );
}

