import { Head } from "$fresh/runtime.ts";
import Option8Layout from "../../components/layouts/Option8Layout.tsx";
import ExamesPage from "../../components/pages/ExamesPage.tsx";

export default function Option8Cadastro() {
  return (
    <>
      <Head>
        <title>Cadastro de Exames - Opção 8</title>
      </Head>
      <Option8Layout currentPage="cadastro">
        <ExamesPage variant="option8" />
      </Option8Layout>
    </>
  );
}

