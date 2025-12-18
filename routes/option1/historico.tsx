import { Head } from "$fresh/runtime.ts";
import Option1Layout from "../../components/layouts/Option1Layout.tsx";
import HistoricoPage from "../../components/pages/HistoricoPage.tsx";

export default function Option1Historico() {
  return (
    <>
      <Head>
        <title>Histórico da Amostra - Opção 1</title>
      </Head>
      <Option1Layout currentPage="cadastro">
        <HistoricoPage variant="option1" />
      </Option1Layout>
    </>
  );
}

