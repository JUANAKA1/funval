let contenedor = document.querySelector(".contenedor");

let traerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    
  }
};
traerPokemones();

function carsPoke(params) {
    array.forEach(element => {
        
    });
    
}
