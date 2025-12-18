import { Head } from "$fresh/runtime.ts";
import Option8Layout from "../../components/layouts/Option8Layout.tsx";
import HistoricoPage from "../../components/pages/HistoricoPage.tsx";

export default function Option8Historico() {
  return (
    <>
      <Head>
        <title>Histórico da Amostra - Opção 8</title>
      </Head>
      <Option8Layout currentPage="cadastro">
        <HistoricoPage variant="option8" />
      </Option8Layout>
    </>
  );
}

