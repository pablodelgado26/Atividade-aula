//verificar se a idade do aluno é maior do que 7 anos.

let idadeAluno = 13;

if (idadeAluno > 7 && idadeAluno < 13) {
    console.log("aluno pode se matricular na categoria infantil");
} else if (idadeAluno > 12 && idadeAluno < 18) {
    console.log("aluno pode se matricular na categoria Adolescente");
} else if (idadeAluno > 17) {
    console.log("aluno pode se matricular na categoria adulto");
} else {
    console.log("aluno não pode se matricular");
}

/*-Infantil: para alunos de 8 a 12 anos.
-Adolescentes: para alunos de 13 a 17 anos. 
-Adultos: para alunos maiores de 18 anos*/

