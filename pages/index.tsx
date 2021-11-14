import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ConeXperto: Reserva charlas, recibe consejos</title>
        <meta
          name="description"
          content="ConeXperto: Reserva charlas, recibe consejos"
        />
      </Head>
      <main className={styles.main}>
        <Image
          src="/assets/conexperto.svg"
          alt="Conexperto"
          layout="fixed"
          width="400"
          height="200"
        />
        <h1 className={styles.title}>
          Welcome to <a href="https://conexperto.com">Conexperto!</a>
        </h1>

        <p className={styles.description}>Website in construction</p>

        <Link href="/components">
          <a>To view developed components</a>
        </Link>
      </main>
    </div>
  );
}
