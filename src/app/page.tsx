import Image from "next/image";
import Hero from "./components/Hero";
import Decks from "./components/Decks";

export default function Home() {
  return (
    <>
		<Hero />
		<Decks />
	</>
  );
}
