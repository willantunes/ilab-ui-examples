import { Head } from "$fresh/runtime.ts";
import Option12Layout from "../../components/layouts/Option12Layout.tsx";
import EtiquetasPage from "../../components/pages/EtiquetasPage.tsx";

export default function Option12Estoque() {
  return (
    <>
      <Head>
        <title>Estoque de kits - Opção 12</title>
      </Head>
      <Option12Layout currentPage="estoque">
        <EtiquetasPage variant="option12" />
      </Option12Layout>
    </>
  );
}

