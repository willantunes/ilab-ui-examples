import { Head } from "$fresh/runtime.ts";
import Option6Layout from "../../components/layouts/Option6Layout.tsx";
import HistoricoPage from "../../components/pages/HistoricoPage.tsx";

export default function Option6Historico() {
  return (
    <>
      <Head>
        <title>Histórico da Amostra - Opção 6</title>
      </Head>
      <Option6Layout currentPage="cadastro">
        <HistoricoPage variant="option6" />
      </Option6Layout>
    </>
  );
}

