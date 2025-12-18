import { Head } from "$fresh/runtime.ts";
import Option9Layout from "../../components/layouts/Option9Layout.tsx";
import ExamesPage from "../../components/pages/ExamesPage.tsx";

export default function Option9Cadastro() {
  return (
    <>
      <Head>
        <title>Cadastro de Exames - Opção 9</title>
      </Head>
      <Option9Layout currentPage="cadastro">
        <ExamesPage variant="option9" />
      </Option9Layout>
    </>
  );
}

