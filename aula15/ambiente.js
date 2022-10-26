let num = [5, 8, 2, 9, 3]
num.push(1)//Incrementa um valor no vetor
num.sort()//Organiza os valores do vetor em ordem crescente
console.log(num)
console.log(`o vetor tem ${num.length} posições`)//"num.length" diz quantos elementos o vetor possui
console.log(`O primeiro valor do vetor é ${num[0]}`)//Escolhe o valor a ser impresso na tela
let pos = num.indexOf(4)
if(pos == -1){
    console.log('O valor não foi encontrado')
}else {
    console.log(`O valor 8 está na posição ${pos}`)
    }