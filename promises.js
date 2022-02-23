
function contar(){
    let retorno = new Promise(resolve=>{
        let contador = ""
        for(var i=0; i <= 11100; i++){
            contador += i + " - "
        }
        resolve(contador)
    })
    return retorno
}

function mensagem(){
    console.log('contando')
}


/* 
contar().then(result=>{
    console.log(result)
})
 */
async function mensagemContagem(){
    const contagem = await contar()
    console.log(contagem)
}

mensagemContagem()

mensagem()