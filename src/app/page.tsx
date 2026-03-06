import Header from "./components/Header";
import Buscar from "./components/Home/Buscar";
import Produtos from "./components/Home/Produtos";

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-2 md:max-w-7xl md:w-4/5 mx-auto">
        <Buscar />
        <Produtos />
      </main>
    </>
  );
}
