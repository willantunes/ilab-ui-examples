import { Head } from "$fresh/runtime.ts";
import Option2Layout from "../../components/layouts/Option2Layout.tsx";
import HistoricoPage from "../../components/pages/HistoricoPage.tsx";

export default function Option2Historico() {
  return (
    <>
      <Head>
        <title>Histórico da Amostra - Opção 2</title>
      </Head>
      <Option2Layout currentPage="cadastro">
        <HistoricoPage variant="option2" />
      </Option2Layout>
    </>
  );
}

