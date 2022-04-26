import styles from "../styles/card.module.css"

interface Props {
  song: Song
  panier: number[]
  setPanier: Function
}

interface Song {
  id: number
  title: string
  album: string
  artist: string
  image: string
}

function Card({ song, panier, setPanier }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img src={song.image} alt="" />
      </div>

      <div className={styles.infos}>
        <span>
          <b>{song.title}</b>
        </span>
        <small>Album : {song.album}</small>
        <small>chanteur : {song.artist}</small>

        {panier.includes(song.id) ? (
          <button
            onClick={() => setPanier(panier.filter((p) => p !== song.id))}
          >
            supprimer
          </button>
        ) : (
          <button onClick={() => setPanier([...panier, song.id])}>
            ajouter
          </button>
        )}
      </div>
    </div>
  )
}
export default Card
