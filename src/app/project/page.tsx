import Link from "next/link";
import {Card} from "./Card"

export default function Home() {
  return (
    <div id="app">
      <header>
        <nav>
          <Link href="/" id="logo"><input type="button" value="Korjov" /></Link>
          <Link href="/project" id="proj"><input type="button" value="My Project" /></Link>
          <Link href="/contact" id="cont"><input type="button" value="Cuntact" /></Link>
        </nav>
      </header>
      <main>
        <Card num={1} />
        <Card num={2} />
        <Card num={3} />
      </main>
      <footer>
        <a href="https://github.com/swarmgost404">GitHub</a>
      </footer>
    </div>
  );
}
