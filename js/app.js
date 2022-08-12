const pokemonName = document.querySelector('.pokemonname');
const pokemonID = document.querySelector('.pokemonid');
const pokemonImage = document.querySelector('.pokemonimg');

const form = document.querySelector('.form');
const input = document.querySelector('.inputsearch')
const btnnxt = document.querySelector('.btn-next');
const btnprv = document.querySelector('.btn-prev');

let seachPoke = 1;

const fetchPokemon = async(pokemon) =>{
    const ApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(ApiResponse.status === 200){
       const data = await ApiResponse.json()

        return data; 
    }
    
}
const renderPokemon = async(pokemon) =>{
    pokemonName.innerHTML = 'Loading...';
    pokemonID.innerHTML = '';
    const data = await fetchPokemon(pokemon);
    if(data){
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonID.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = '';
        seachPoke = data.id;
    }else{
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Not Found';
        pokemonID.innerHTML = '';
    }
    
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
})
btnprv.addEventListener('click', ()=>{
   if(seachPoke>1){
    seachPoke--;
    renderPokemon(seachPoke)
   }
    
})

btnnxt.addEventListener('click', ()=>{
  
    seachPoke++;
    renderPokemon(seachPoke)
})
renderPokemon(seachPoke);

//ADICIONAR MAIS FUNCIONALIDADE COLOCANDO MAIS INFOS TIPO LOCALIDADE ETC...