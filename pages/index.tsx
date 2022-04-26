import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import List from "../components/list"
import Nav from "../components/nav"
import Search from "../components/search"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  const [text, setText] = useState("")
  const [term, setTerm] = useState("")
  const [panier, setPanier] = useState<number[]>([])

  return (
    <div>
      <Head>
        <title>SpaceTunes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav
        text={text}
        setText={setText}
        term={term}
        setTerm={setTerm}
        panier={panier}
      />

      {!term && <Search text={text} setText={setText} setTerm={setTerm} />}

      <List term={term} panier={panier} setPanier={setPanier} />
    </div>
  )
}

export default Home
