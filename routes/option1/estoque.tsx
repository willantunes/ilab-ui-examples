import { Head } from "$fresh/runtime.ts";
import Option1Layout from "../../components/layouts/Option1Layout.tsx";
import EtiquetasPage from "../../components/pages/EtiquetasPage.tsx";

export default function Option1Estoque() {
  return (
    <>
      <Head>
        <title>Estoque de kits - Opção 1</title>
      </Head>
      <Option1Layout currentPage="estoque">
        <EtiquetasPage variant="option1" />
      </Option1Layout>
    </>
  );
}

