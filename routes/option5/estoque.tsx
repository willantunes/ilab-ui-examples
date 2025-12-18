import { Head } from "$fresh/runtime.ts";
import Option5Layout from "../../components/layouts/Option5Layout.tsx";
import EtiquetasPage from "../../components/pages/EtiquetasPage.tsx";

export default function Option5Estoque() {
  return (
    <>
      <Head>
        <title>Estoque de kits - Opção 5</title>
      </Head>
      <Option5Layout currentPage="estoque">
        <EtiquetasPage variant="option5" />
      </Option5Layout>
    </>
  );
}

