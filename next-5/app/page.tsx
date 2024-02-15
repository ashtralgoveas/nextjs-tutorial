// Shows reusing of components restricted to indivaidual files.
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main className={inter.className}></main>;
}
