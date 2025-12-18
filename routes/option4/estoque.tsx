import { Head } from "$fresh/runtime.ts";
import Option4Layout from "../../components/layouts/Option4Layout.tsx";
import EtiquetasPage from "../../components/pages/EtiquetasPage.tsx";

export default function Option4Estoque() {
  return (
    <>
      <Head>
        <title>Estoque de kits - Opção 4</title>
      </Head>
      <Option4Layout currentPage="estoque">
        <EtiquetasPage variant="option4" />
      </Option4Layout>
    </>
  );
}

