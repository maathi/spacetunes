import styles from "../styles/nav.module.css"
import { FaShoppingCart } from "react-icons/fa"
import SearchForm from "./searchForm"

interface Props {
  text: string
  setText: Function
  term: string
  setTerm: Function
  panier: number[]
}

function Nav({ text, setText, term, setTerm, panier }: Props) {
  return (
    <div className={styles.nav}>
      {term && <SearchForm text={text} setText={setText} setTerm={setTerm} />}

      {panier.length !== 0 ? (
        <div style={{ color: "red" }}>
          <FaShoppingCart /> [{panier.length}]
        </div>
      ) : (
        <div>
          <FaShoppingCart />
        </div>
      )}
    </div>
  )
}
export default Nav
