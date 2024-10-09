//1.
// export default function Hola(){
//     return
// }
//2.
// const Hola = () => {

// }
// export default Hola
import React from "react";

const Hola = ( { name, lastName = "ValorPorDefecto" } ) => {
  // console.log(props.name);
  // const {name} = props;
  return <div>Hola {name} {lastName}</div>;
};

export default Hola;
