import { Head } from "$fresh/runtime.ts";
import Option3Layout from "../../components/layouts/Option3Layout.tsx";
import EtiquetasPage from "../../components/pages/EtiquetasPage.tsx";

export default function Option3Estoque() {
  return (
    <>
      <Head>
        <title>Estoque de kits - Opção 3</title>
      </Head>
      <Option3Layout currentPage="estoque">
        <EtiquetasPage variant="option3" />
      </Option3Layout>
    </>
  );
}

