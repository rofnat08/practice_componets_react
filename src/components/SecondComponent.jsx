
export const SecondComponent = () => {

  const books = [
    "Harry Potter y la piedra filosofal",
    "Harry Potter y la camara secreta",
    "Harry Potter y el prisionero de Azcaban",
    "Harry Potter y el càliz de fuego",
    "Harry Potter y la orden del Fenix",
    "Harry Potter y el misterio del Principe",
    "Harry Potter y las reliquias de la muerte",
    "Animales Fantàsticos y donde enncontrarlos",
    "Otro libro"
  ];

  return (
    <>
      <h1>SecondComponent</h1>
      <div>
        <ul>
          {
            books.map((book, index) => {
              return <li key={index}>{book}</li>
            })
          }
        </ul>
      </div>
    </>
  )
}
