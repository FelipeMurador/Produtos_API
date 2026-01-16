const URL="https://pokeapi.co/api/v2/pokemon/Pikachu";
async function chamarApi(){
    const resp = await fetch (URL); 

    if (resp.status === 200){
        const obj = await resp.json();
        console.log(obj);
    }
}
chamarApi()