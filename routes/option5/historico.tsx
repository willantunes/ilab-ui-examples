import { Head } from "$fresh/runtime.ts";
import Option5Layout from "../../components/layouts/Option5Layout.tsx";
import HistoricoPage from "../../components/pages/HistoricoPage.tsx";

export default function Option5Historico() {
  return (
    <>
      <Head>
        <title>Histórico da Amostra - Opção 5</title>
      </Head>
      <Option5Layout currentPage="cadastro">
        <HistoricoPage variant="option5" />
      </Option5Layout>
    </>
  );
}

