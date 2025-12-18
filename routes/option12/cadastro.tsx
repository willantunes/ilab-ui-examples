import { Head } from "$fresh/runtime.ts";
import Option12Layout from "../../components/layouts/Option12Layout.tsx";
import ExamesPage from "../../components/pages/ExamesPage.tsx";

export default function Option12Cadastro() {
  return (
    <>
      <Head>
        <title>Cadastro de Exames - Opção 12</title>
      </Head>
      <Option12Layout currentPage="cadastro">
        <ExamesPage variant="option12" />
      </Option12Layout>
    </>
  );
}

