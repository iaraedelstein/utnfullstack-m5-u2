import React from 'react';

export default function DeleteButton({ deleteElement }) {
  const onPresionoBoton = () => {
    console.log('Presiono botón');
    deleteElement();
  };

  return (
    <>
      <button onClick={onPresionoBoton}>x</button>
    </>
  );
}
