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

const conceitoJSON=function(){
    let aluno={
        nome: 'José da Silva',
        telefone: '1147237102',
        celular: '1194236754'
    }
    let aluno2={
        nome: 'Maria da Silva',
        telefone: '1141945942',
        celular: '1191193750'
    }
    let aluno3={
        nome:'André da Silva',
        telefone: '1141945942',
        celular: '1191193750'
    }
    let arrayAlunos=[]
    arrayAlunos.push(aluno,aluno2,aluno3)
    aluno.email='jose@gmail.com'
    aluno.ra=123456
    //console.log(aluno)
    //console.log('O nome do aluno é: '+aluno.nome)
    //console.log(arrayAlunos[1].nome)
    //console.log(arrayAlunos[1].celular)
    //console.table(arrayAlunos)
    arrayAlunos.forEach(function(aluno){
        console.log('Nome do aluno: '+aluno.nome)
        console.log('Telefone do aluno: '+aluno.telefone)
        console.log('Celular do aluno: '+aluno.celular)
        if(aluno.email!=undefined)
            console.log('Email do aluno: '+aluno.email)
        if(aluno.ra!=undefined)
            console.log('RA do aluno: '+aluno.ra)
        console.log('         *********      ')
    })
}

const cadastroProdutos=function(){
    let arrayProdutos=[]
    let JSONProdutos={}
    let categorias=[
        {
            id: 1,
            nome_categoria: 'Hardware',
            descricao_categoria: 'Equipamentos de hardware para PC'
        },
        {
            id: 2,
            nome_categoria: 'Periféricos',
            descricao_categoria: 'Periféricos para PC',
        },
        {
            id: 3,
            nome_categoria: 'Games',
            descricao_categoria: 'Jogos e acessórios para PC'
        },
        {
            id: 4,
            nome_categoria: 'Escritório',
            descricao_categoria: 'Itens de informática para escritório',
        },
        {
            id: 5,
            nome_categoria: 'Acessórios',
            descricao_categoria: 'Acessórios para PC',
        }
    ]
    let cores=[
        {
            id:1,
            nome_cor:'Preto'
        },
        {
            id:2,
            nome_cor:'Branco'
        },
        {
            id:3,
            nome_cor:'Cinza'
        },
        {
            id:4,
            nome_cor:'Azul'
        },
        {
            id:5,
            nome_cor:'Vermelho'
        }
    ]
    let marcas=[
        {
            id:1,
            nome_marca:'Dell',
            telefone:'1154362345',
            email:'dell@gmail.com'
        },
        {
            id:2,
            nome_marca:'Intel',
            telefone:'11310164182',
            email:'intel@gmail.com'
        },
        {
            id:3,
            nome_marca:'AMD',
            telefone:'114852376237',
            email:'amd@gmail.com'
        },
        {
            id:4,
            nome_marca:'Multilaser',
            telefone:'11325346134',
            email:'multilaser@gmail.com'
        },
        {
            id:5,
            nome_marca:'Logitech',
            telefone:'11235315234',
            email:'logitech@gmail.com'
        },
        {
            id:6,
            nome_marca:'Positivo',
            telefone:'11514627352',
            email:'positivo@gmail.com'
        }
    ]
    let produto1={
        id:1,
        nome:'Mouse',
        descricao:'Mouse óptico com fio',
        valor:80,
        qtde:200,
        categoria: categorias[1],
        cor: [
            cores[0],
            cores[1]
        ],
        marca: marcas[0]
    }
    let produto2={
        id:2,
        nome:'Teclado',
        descricao:'Teclado de membrana com fio',
        valor:100,
        qtde:40,
        categoria: categorias[1],
        cor: cores,
        marca: marcas[4]
    }
    let produto3={
        id:3,
        nome:'Caixa de Som',
        descricao:'Caixa de som com fio',
        valor:100,
        qtde:80,
        categoria: categorias[4],
        cor: [
            cores[0],
            cores[1],
            cores[2]
        ],
        marca: marcas[3]
    }
    arrayProdutos.push(produto1,produto2,produto3)
    JSONProdutos.produtos=arrayProdutos
    JSONProdutos.count=arrayProdutos.length
    return JSONProdutos
}

const exibirProdutos=function(cadastroProdutos){
    let JSONProdutos=cadastroProdutos.JSONProdutos
    console.log(JSONProdutos)
}

//conceitoJSON()
cadastroProdutos()
exibirProdutos()

//console.log(filtrarProduto('MouSe'))
//percorrendoArray()
//conceitoArray()