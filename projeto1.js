const prompt = require('prompt-sync')()
console.log('JIMI HENDRIX EXPERIENCE');
console.log('PRESSIONE ENTER PARA CONTINUAR');
prompt();
console.log();


console.log(`O Mago das guitarras JIMI HENDRIX voltou ao plano TERRENO para resgatar sua PALHETA DO DESTINO.
                        Ajude o Metre a acha-la, respondendo essas simples 5 perguntas.
                                ...Responda "s" para sim e "n" para não...`);
 

                                
lista =[];

let perg1 = prompt('01 - Olhou dentro do case da Guitarra? ');
while (perg1 !== "s" && perg1 !== "n") {
    console.log("ERRO -  Digite s para sim e n para não. ");
    perg1 = prompt('01 - Olhou dentro do case da Guitarra? ');
}
lista.push(perg1);

let perg2 = prompt('02 - Ela é vermelha? ');
while (perg2 !== "s" && perg2 !== "n") {
    console.log("ERRO -  Digite s para sim e n para não. ");
    perg2 = prompt('02 - Ela é vermelha? ');
}
lista.push(perg2);
   
let perg3 = prompt('03 - Perguntou para o LEMMY KILMISTER seu roadie? ');
while (perg3 !== "s" && perg3 !== "n") {
    console.log("ERRO -  Digite s para sim e n para não. ");
    perg3 = prompt('03 - Perguntou para o LEMMY KILMISTER seu roadie? ');
}
lista.push(perg3);

let perg4 = prompt('04 - Olhou dentro da garrafa de whisky? ');
while(perg4 !== "s" && perg4 !== "n") {
    console.log('ERRO -  Digite s para sim e n para não. ');
    perg4 = prompt('04 - Olhou dentro da garrafa de whisky? ');
}
lista.push(perg4);

let perg5 = prompt('05 - Perguntou para JANIS JOPLIN se ela a viu? ');
while(perg5 !== "s" && perg5 !== "n") {
    console.log('ERRO -  Digite s para sim e n para não. ');  
    perg5 = prompt('05 - Perguntou para JANIS JOPLIN se ela a viu? ');
} 
lista.push(perg5);



console.log(`As respostas são:\npergunta 01 - ${perg1}\npergunta 02 - ${perg2}\npergunta 03 - ${perg3}\npergunta 04 - ${perg4}\npergunta 05 - ${perg5}`)

let resposta = 0 // variavel para receber o loop
for(let i=0;i<lista.length;i++){
    if(lista[i] == "s") {
        resposta++
 }
} // se a posição na lista tiver o sim add em resposta e corre para outra posição.
console.log();
if(resposta == 0){
    console.log('Você não conseguiu ajudar o MESTRE a encontrar sua PALHETA DO DESTINO...');
}else if(resposta == 1 || resposta == 2){
    console.log('Você falhou, mais conseguiu algumas pistas...');
}else if(resposta == 3){
    console.log('Você chegou perto de conseguir achar a PALHETA DO DESTINO, mas acabou falhando por pouco...');
}else if(resposta == 4){
    console.log('Depois de muito esforço você achou a PALHETA DO DESTINO, embora não de maneira perfeita...');
}else if(resposta == 5){
    console.log('HELLYEAHHH... Você conseguiu pistas para achar a PALHETA DO DESTINO, como premiação: Ganhou um FREEPASS para assistir ao show do MESTRE quando desencarnar da matéria...');
}
