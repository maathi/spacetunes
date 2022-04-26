interface Props {
  text: string
  setText: Function
  setTerm: Function
}

function SearchForm({ text, setText, setTerm }: Props) {
  return (
    <div>
      <button onClick={() => setTerm(text)}>search</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setText("")}>effacer</button>
    </div>
  )
}

export default SearchForm
