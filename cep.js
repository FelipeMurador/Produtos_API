const URL="https://viacep.com.br/ws/02998000/json/";
async function chamarApi(){
    const resp = await fetch (URL); 

    if (resp.status === 200){
        const obj = await resp.json();
        console.log(obj);
    }
}
chamarApi()