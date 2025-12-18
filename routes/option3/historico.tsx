import { Head } from "$fresh/runtime.ts";
import Option3Layout from "../../components/layouts/Option3Layout.tsx";
import HistoricoPage from "../../components/pages/HistoricoPage.tsx";

export default function Option3Historico() {
  return (
    <>
      <Head>
        <title>Histórico da Amostra - Opção 3</title>
      </Head>
      <Option3Layout currentPage="cadastro">
        <HistoricoPage variant="option3" />
      </Option3Layout>
    </>
  );
}

