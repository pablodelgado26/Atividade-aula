/*Armazene essa informação em uma variável chamada intensidade.
Gerar os aplausos: Utilize um laço de repetição for para exibir no console a 
quantidade de palmas "👏" correspondente a intensidade escolhida.*/

let intensidade = 20;
let palmas = "";

for (let i = 1; i < intensidade; i++ ) {
    palmas += "👏";
}

console.log(palmas);
