import { Head } from "$fresh/runtime.ts";
import Option2Layout from "../../components/layouts/Option2Layout.tsx";
import EtiquetasPage from "../../components/pages/EtiquetasPage.tsx";

export default function Option2Estoque() {
  return (
    <>
      <Head>
        <title>Estoque de kits - Opção 2</title>
      </Head>
      <Option2Layout currentPage="estoque">
        <EtiquetasPage variant="option2" />
      </Option2Layout>
    </>
  );
}

