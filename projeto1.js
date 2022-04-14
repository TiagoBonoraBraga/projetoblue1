const prompt = require('prompt-sync')()
console.log('JIMI HENDREX EXPERIANCE');
console.log('PRESSIONE ENTER PARA CONTINUAR');
prompt();

console.log(`O Mago das guitarras JIMI HENDRIX voltou ao plano TERRENO para resgatar sua PALHETA DO DESTINO.
                        Ajude o Metre a acha-la, respondendo essas simples 5 perguntas.
                                ...Responda "s" para sim e "n" para não...`);
 

                                
lista =[];


const perg1 = prompt('01 - Olhou dentro do case da Guitarra? ');
lista.push(perg1);
const perg2 = prompt('02 - Ela é Vermelha?');
lista.push(perg2);
const perg3 = prompt('03 - Perguntou para o LEMMY KILMISTER seu roadie?');
lista.push(perg3);
const perg4 = prompt('04 - Olhou dentro da garrafa de whisky? ');
lista.push(perg4);
const perg5 = prompt('05 - Perguntou para JANIS JOPLIN se ela a viu?');
lista.push(perg5);


console.log(`As respostas são:\npergunta 01 - ${perg1}\npergunta 02 - ${perg2}\npergunta 03 - ${perg3}\npergunta 04 - ${perg4}\npergunta 05 - ${perg5}`)

let resposta = 0 // variavel para receber o loop
for(let i=0;i<lista.length;i++){
    if(lista[i] == "s") {
        resposta++
 }
} // se a posição na lista tiver o sim add em resposta e corre para outra posição.


if(resposta == 0){
    console.log('Você falhou miseravelmente.');
}else if(resposta == 1 || resposta == 2){
    console.log('Você falhou, mais ainda consegue fugir da situação.');
}else if(resposta == 3){
    console.log('Você chegou perto de conseguir alcançar seu objetivo,mas acabou falhando por pouco.');
}else if(resposta == 4){
    console.log('Depois de muito esforço você conquistou seu objetivo, embora não de maneira perfeita.');
}else if(resposta == 5){
    console.log('Você triunfou de maneira inquestionavel e seus feitos serão lembrados por muitas gerações.');
}