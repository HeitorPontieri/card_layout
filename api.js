'use strict'

const mostrarAlunos = async (alunos) =>{
    const url = `https://testeleonid.herokuapp.com/alunos`
    const response = await fetch(url)
    const listaAlunos = await response.json()
    console.log(listaAlunos)
    // return listaAlunos
}

export{
    mostrarAlunos
}