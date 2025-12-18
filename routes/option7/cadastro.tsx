import { Head } from "$fresh/runtime.ts";
import Option7Layout from "../../components/layouts/Option7Layout.tsx";
import ExamesPage from "../../components/pages/ExamesPage.tsx";

export default function Option7Cadastro() {
  return (
    <>
      <Head>
        <title>Cadastro de Exames - Opção 7</title>
      </Head>
      <Option7Layout currentPage="cadastro">
        <ExamesPage variant="option7" />
      </Option7Layout>
    </>
  );
}

