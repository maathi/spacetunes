import { useEffect, useState } from "react"
import Card from "./card"
import styles from "../styles/list.module.css"

interface Props {
  term: string
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

function List({ term, panier, setPanier }: Props) {
  const [songs, setSongs] = useState<Song[]>([])

  useEffect(() => {
    fetch("/api/search?term=" + term)
      .then((r) => r.json())
      .then((d) => {
        console.log(d.results)
        let res = d.results.map((r: any) => {
          return {
            id: r.trackId,
            title: r.trackName,
            album: r.collectionName,
            artist: r.artistName,
            image: r.artworkUrl100,
          }
        })
        setSongs(res)
      })
      .catch((e) => console.log(e))
  }, [term])

  useEffect(() => {
    console.log(songs)
  }, [songs])

  return (
    <div className={styles.list}>
      {songs.map((s) => (
        <Card song={s} panier={panier} setPanier={setPanier} />
      ))}
    </div>
  )
}

export default List
