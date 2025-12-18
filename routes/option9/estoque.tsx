import { Head } from "$fresh/runtime.ts";
import Option9Layout from "../../components/layouts/Option9Layout.tsx";
import EtiquetasPage from "../../components/pages/EtiquetasPage.tsx";

export default function Option9Estoque() {
  return (
    <>
      <Head>
        <title>Estoque de kits - Opção 9</title>
      </Head>
      <Option9Layout currentPage="estoque">
        <EtiquetasPage variant="option9" />
      </Option9Layout>
    </>
  );
}

