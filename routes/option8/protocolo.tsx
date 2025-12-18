import { Head } from "$fresh/runtime.ts";
import Option8Layout from "../../components/layouts/Option8Layout.tsx";
import CadastroPage from "../../components/pages/CadastroPage.tsx";

export default function Option8Protocolo() {
  return (
    <>
      <Head>
        <title>Cadastro de Protocolo - Opção 8</title>
      </Head>
      <Option8Layout currentPage="cadastro">
        <CadastroPage variant="option8" />
      </Option8Layout>
    </>
  );
}

