const cep = document.getElementById('cep')
const showData = result => {
    for(let campo in result){
        const data = document.querySelector("#"+campo)
        if(data){
            data.value = result[campo]
        }
    }
}
cep.addEventListener("blur", e => {
    let search = cep.value.replace("-", "")
    const url = `https://viacep.com.br/ws/${search}/json/`
    fetch(url).then(res => res.json()).then(data => showData(data))
})



