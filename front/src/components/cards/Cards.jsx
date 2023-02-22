import Card from "../card/Card";

export default function Cards(props) {
  const { characters, onClose } = props;

  return (
    <div>
      {characters ? (
        characters.map((element) => (
          <Card
            name={element.name}
            species={element.species}
            gender={element.gender}
            image={element.image}
            key={element.id}
            id={element.id}
            onClose={() => onClose(element.id)}
          />
        ))
      ) : (
        <h3>No hay personajes</h3>
      )}
    </div>
  );
}
