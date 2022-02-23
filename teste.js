function teste1(){
    a = new Promise(resolve=>{
        setTimeout(()=>{
            resolve(10)
        },5000)
    })
    return a
}


function mensagem(){
    for(var i = 0; i <5; i++)
    console.log('rodou a mensagem')

}
function teste2(){
    console.log('rodou a função 2')
}

async function apresentar(){
    const retorno = await teste1()
    console.log(retorno)
} 

teste1().then(resolve=>{
    console.log(resolve)
})

apresentar()

mensagem()
teste2()