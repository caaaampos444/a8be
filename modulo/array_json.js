/******************************************************
 * Objetivo: Trabalhar com conceitos de ARRAY e JSON
 * Data: 27/09/2023
 * Autor: Gustavo Campos
 * Versão: 1.0
******************************************************/
const conceitoArray=function(){
    let listaDeNome=[
        'José',
        'Maria',
        'Luis',
        'Ana',
        10
    ]
    console.log(listaDeNome)
    console.table(listaDeNome)
    console.log(listaDeNome[2])
    console.log(typeof(listaDeNome))
    console.log(typeof(listaDeNome[0]))
    console.log(typeof(listaDeNome[4]))
    listaDeNome.push('André da Silva')
    console.table(listaDeNome)
    listaDeNome.pop()
    console.table(listaDeNome)
    listaDeNome.splice(2,1)
    console.table(listaDeNome)
}

const percorrendoArray=function(){
    let listaDeProdutos=[
        'Mouse',
        'Teclado',
        'Monitor',
        'Computador',
        'Caixa de Som',
        'Impressora',
        'Fone de Ouvido',
        'Webcam',
        'Microfone',
        'HD',
        'Memória RAM'
    ]
    //console.log(listaDeProdutos.length)
    /*let cont=0
    while(cont<listaDeProdutos.length){
        console.log(`Nome do produto: ${listaDeProdutos[cont]}`)
        cont++
    }*/

    /*for(let cont=0;cont<listaDeProdutos.length;cont++)
        console.log(`Nome do produto: ${listaDeProdutos[cont]}`)*/

    /*listaDeProdutos.forEach(function(produto){
        console.log(`Nome do produto: ${produto}`)
    })*/

    console.table(listaDeProdutos)
    console.log(listaDeProdutos.indexOf('Impressora'))
    console.log(listaDeProdutos.includes())
}

const filtrarProduto=function(nomeProduto){
    let listaDeProdutos=[
        'Mouse',
        'Teclado',
        'Monitor',
        'Computador',
        'Caixa de Som',
        'Impressora',
        'Fone de Ouvido',
        'Webcam',
        'Microfone',
        'HD',
        'Memória RAM'
    ]
    let nome=nomeProduto
    let status=false
    let cont=0
    //if(listaDeProdutos.indexOf(nome)>=0)
      //  status=true
    //if(listaDeProdutos.includes(nome))
      //  status=true
    listaDeProdutos.forEach(function(produto){
        if(produto.toUpperCase()==nome.toUpperCase())
            //status=true
            cont++
    })
    return cont
}

console.log(filtrarProduto('MouSe'))
//percorrendoArray()
//conceitoArray()