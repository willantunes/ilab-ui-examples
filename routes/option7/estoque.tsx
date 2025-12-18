import { Head } from "$fresh/runtime.ts";
import Option7Layout from "../../components/layouts/Option7Layout.tsx";
import EtiquetasPage from "../../components/pages/EtiquetasPage.tsx";

export default function Option7Estoque() {
  return (
    <>
      <Head>
        <title>Estoque de kits - Opção 7</title>
      </Head>
      <Option7Layout currentPage="estoque">
        <EtiquetasPage variant="option7" />
      </Option7Layout>
    </>
  );
}

