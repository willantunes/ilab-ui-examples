import { Head } from "$fresh/runtime.ts";
import Option4Layout from "../../components/layouts/Option4Layout.tsx";
import HistoricoPage from "../../components/pages/HistoricoPage.tsx";

export default function Option4Historico() {
  return (
    <>
      <Head>
        <title>Histórico da Amostra - Opção 4</title>
      </Head>
      <Option4Layout currentPage="cadastro">
        <HistoricoPage variant="option4" />
      </Option4Layout>
    </>
  );
}

