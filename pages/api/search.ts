import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  resultCount: number
  results: Song[]
}

type Song = {
  collectionName: string //album
  trackName: string //title
  artistName: string
}

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<Data>
  res: NextApiResponse
) {
  const term = req.query.term

  const data = await fetch("https://itunes.apple.com/search?term=" + term).then(
    (r) => r.json()
  )

  res.status(200).json(data)
}
