import './App.css';
import Card from './Card/Card';
import DeleteButton from './DeleteButton/DeleteButton';
import React from 'react';

let vector = [
  {
    url: 'https://placeimg.com/80/80/people?id=1',
    title: 'Titulo 1',
    description: 'Descripcion imagen 1',
  },
  {
    url: 'https://placeimg.com/80/80/people?id=2',
    title: 'Titulo 2',
    description: 'Descripcion imagen 2',
  },
  {
    url: 'https://placeimg.com/80/80/people?id=3',
    title: 'Titulo 3',
    description: 'Descripcion imagen 3',
  },
  {
    url: 'https://placeimg.com/80/80/people?id=4',
    title: 'Titulo 4',
    description: 'Descripcion imagen 4',
  },
];
function App() {
  const [array, setArray] = React.useState(vector);

  const deleteElement = (url) => {
    vector = vector.filter((item) => item.url !== url);
    setArray(vector);
  };

  const respuesta = array.map(({ url, title, description }) => {
    return (
      <div className="card-item">
        <Card url={url} title={title} description={description} />
        <DeleteButton deleteElement={() => deleteElement(url)} />
      </div>
    );
  });

  return <div className="App">{respuesta}</div>;
}

export default App;
