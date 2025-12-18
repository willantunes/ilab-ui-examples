import { Head } from "$fresh/runtime.ts";
import Option10Layout from "../../components/layouts/Option10Layout.tsx";
import EtiquetasPage from "../../components/pages/EtiquetasPage.tsx";

export default function Option10Estoque() {
  return (
    <>
      <Head>
        <title>Estoque de kits - Opção 10</title>
      </Head>
      <Option10Layout currentPage="estoque">
        <EtiquetasPage variant="option10" />
      </Option10Layout>
    </>
  );
}

