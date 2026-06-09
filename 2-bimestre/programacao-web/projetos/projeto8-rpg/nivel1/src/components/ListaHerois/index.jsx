import "./style.css"; 

export default function ListaHerois({ herois }) {
  return (

    <section className="lista-herois">
      <h2>Heróis cadastrados</h2>


      {herois.length === 0 ? (
        <p>Nenhum herói cadastrado ainda...</p>
      ) : (

        <ul>
          
          {herois.map((heroi, index) => (

            <li key={index}>{heroi}</li>
          ))}
        </ul>
      )}
    </section>
  );
}