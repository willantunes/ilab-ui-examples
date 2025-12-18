import { Head } from "$fresh/runtime.ts";
import Option7Layout from "../../components/layouts/Option7Layout.tsx";
import HistoricoPage from "../../components/pages/HistoricoPage.tsx";

export default function Option7Historico() {
  return (
    <>
      <Head>
        <title>Histórico da Amostra - Opção 7</title>
      </Head>
      <Option7Layout currentPage="cadastro">
        <HistoricoPage variant="option7" />
      </Option7Layout>
    </>
  );
}

