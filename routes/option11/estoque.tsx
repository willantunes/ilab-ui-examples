import { Head } from "$fresh/runtime.ts";
import Option11Layout from "../../components/layouts/Option11Layout.tsx";
import EtiquetasPage from "../../components/pages/EtiquetasPage.tsx";

export default function Option11Estoque() {
  return (
    <>
      <Head>
        <title>Estoque de kits - Opção 11</title>
      </Head>
      <Option11Layout currentPage="estoque">
        <EtiquetasPage variant="option11" />
      </Option11Layout>
    </>
  );
}

