import { useState } from "react"
import styles from "../styles/search.module.css"
import SearchForm from "./searchForm"

interface Props {
  text: string
  setText: Function
  setTerm: Function
}

function Search({ text, setText, setTerm }: Props) {
  return (
    <div className={styles.search}>
      <h1>SpaceTunes</h1>
      <SearchForm text={text} setText={setText} setTerm={setTerm} />
    </div>
  )
}

export default Search
