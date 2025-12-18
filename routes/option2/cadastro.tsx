import { Head } from "$fresh/runtime.ts";
import Option2Layout from "../../components/layouts/Option2Layout.tsx";
import ExamesPage from "../../components/pages/ExamesPage.tsx";

export default function Option2Cadastro() {
  return (
    <>
      <Head>
        <title>Cadastro de Exames - Opção 2</title>
      </Head>
      <Option2Layout currentPage="cadastro">
        <ExamesPage variant="option2" />
      </Option2Layout>
    </>
  );
}

