import Hero from "./hero";
import Download from "./download";
import Instuctions from "../main/instructions";


export default function Main(): JSX.Element {
  return (
    <main
    >
      <Hero />
      <Download />
      <Instuctions/>
    </main>
  );
}
