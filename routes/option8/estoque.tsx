import { Head } from "$fresh/runtime.ts";
import Option8Layout from "../../components/layouts/Option8Layout.tsx";
import EtiquetasPage from "../../components/pages/EtiquetasPage.tsx";

export default function Option8Estoque() {
  return (
    <>
      <Head>
        <title>Estoque de kits - Opção 8</title>
      </Head>
      <Option8Layout currentPage="estoque">
        <EtiquetasPage variant="option8" />
      </Option8Layout>
    </>
  );
}

