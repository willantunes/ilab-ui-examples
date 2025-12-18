import { Head } from "$fresh/runtime.ts";
import Option6Layout from "../../components/layouts/Option6Layout.tsx";
import EtiquetasPage from "../../components/pages/EtiquetasPage.tsx";

export default function Option6Estoque() {
  return (
    <>
      <Head>
        <title>Estoque de kits - Opção 6</title>
      </Head>
      <Option6Layout currentPage="estoque">
        <EtiquetasPage variant="option6" />
      </Option6Layout>
    </>
  );
}

