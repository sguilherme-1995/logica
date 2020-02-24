var user = require('readline-sync');
var premio = [1000, 5000, 10000, 25000, 50000, 100000, 200000, 300000, 500000, 1000000];
var premioAcumu = 0;
var perguntas = [['De quantos anos e constituido um seculo?\n','Qual e o nome dado ao estado da agua em forma de gelo?','Quem e a namorada do Mickey?','Qual e o personagem do folclore brasileiro que tem uma perna so?',
'Quem proclamou a republica no Brasil em 1889?','Qual e o signo do zodiaco de quem nasce no dia do ano-novo?','Quem fundou a fabrica de automoveis Ford?',
'A agua ferve a quantos graus centigrados?','Como se chama o lugar onde sao armazenadas as balas de um revolver?','Qual cantor e o pai da dupla Sandy e Junior?'],
['Qual e o coletivo de caes?\n','Quem foi o criador dos personagens Pedrinho, Narizinho e Emilia?','Quem fundou a Microsoft?','Qual e o nome dado ao pneu reserva do carro?',
'Qual e o nome do cachorro medroso do Salsicha, dos desenhos animados?','Edinho, filho de Pele, jogou no Santos em que posiçao?','Qual e a pedra preciosa mais dura encontrada na natureza?','Como se chama o lugar onde se guardam vinhos?',
'Qual cantor ficou conhecido como “o rei do rock”?','Quem e o inimigo do Piu-Piu nos desenhos animados?'],['Qual e a maior floresta do planeta?\n','Quantos dias tem um ano bissexto?','Qual e o reptil que muda de cor conforme o lugar em que esta?','Qual era o codigo da identidade secreta de James Bond?',
'Como e conhecida a ponte que liga Rio de Janeiro a Niteroi?','Em que ano os portugueses descobriram o Brasil?','O rio Amazonas pertence a qual continente?','Quem esculpiu o boneco Pinoquio, no conto de Carlo Lorenzini?','Qual foi o placar no final da Copa de 98, quando o Brasil perdeu para a Franca?','Qual e a cidade conhecida como “terra da garoa”?'],
['Qual e o naipe do baralho que tem o desenho de coracao?\n','Qual ator do cinema brasileiro é conhecido por ter unhas enormes?','O violoncelo e um tipo de instrumento de?','Quem foi tecnico da Selecao brasileira de futebol na Copa de 98?','Em que cidade e realizada a corrida de São Silvestre?','Qual e a area da medicina que trata de criancas?','O saque e uma bebida tipica de qual pais?',
'O dromedario tem quantas corcovas?','Um adulto sadio tem quantos dentes na boca?','Qual dos sete anoes usa oculos?'],['Qual atriz estrelou no filme: “A lagoa azul”?\n','Quem e o Homem de Aco das historias em quadrinhos?','Cavalo, rainha e torre sao peças de qual jogo?','Turmalina e uma especie de que?','Qual e o santo casamenteiro?',
'Quem ocupou o cargo de Ministro da Saude do Brasil no ano de 2000?','Qual objeto e usado como arma pelo Pinguim do Batman?','Qual foi o nome dado ao movimento liderado por Tiradentes?','Quando e comemorado o dia da criança?','De qual lugar o personagem Tarzan era considerado rei?'], ['Qual e o pais do tango?\n',
'Quem e a mulher do Tarzan?','Em qual pais surgiu a mafia?','Qual e o profissional que usa o estetoscopio?','Qual destes e considerado o mes das noivas?','Quem inventou o telefone?','Qual e o esporte praticado com pequenos avioes de controle remoto?','Qual personagem lidera o bando da floresta de Sherwood?','Qual é a cor da pedra rubi?','Qual e a planta que fortalece o marinheiro Popeye?'],
['Que imperador pos fogo em Roma?','Quando e comemorado o dia de Santo Antonio?','Quem foi o amor do imperador Marco Antonio?','Qual estacao do ano fica entre o verao e o inverno?','Como Joana d‘Arc foi morta?','Quantos jogadores um jogo de volei reune na quadra?','A cidade de Pompeia, que foi soterrada por um vulcao fica em qual desses paises?','Em qual estadio Pele marcou seu milesimo gol?',
'Como eram chamados os pilotos suicidas da Segunda Guerra?','O que e gondola?'],['O que e um oboe?\n','Que animal e usado no jogo de polo?','Em que ano ocorreu o incendio do edificio Joelma, na cidade de Sao Paulo?','Sobre qual cidade do Japao foi lançada a primeira bomba atomica?','O daltonico e deficiente em?','Qual e o dia da Padroeira do Brasil?','Qual e a capital do Estado de Mato Grosso do Sul?',
'Quantos sao os continentes?','Por que nome sao conhecidas as pessoas do Polo Artico?','Qual foi o ultimo imperador do Brasil?'], ['Quantos quilates tem o ouro puro?','Quem dirigiu o filme “Central do Brasil”?','Em qual pais esta localizado o "Muro das lamentacoes"?','Qual desses paises nao fica na Asia?','Qual desses astros de filmes de acao e belga?','Onde foi conduzida a vitoria das forcas aliadas na Segunda Guerra Mundial?',
'Onde nasceu Van Gogh, o grande pintor impressionista?','O que significa literalmente Perestroika?','Qual desses quatro pesos e o mais leve?','Que conflito ideologico envolveu os EUA e a Uniao Sovietica?'],['Qual oceano tem o maior volume de agua?','Em que parte do nosso corpo esta o umero?','Qual o nome verdadeiro do jogador de futebol conhecido com Zico?','O que significa deprecar?','Que cidade foi capital do Imperio Inca?','Com que outro nome e conhecido o Cabo Canaveral?',
'Qual foi o material utilizado na construcao do Partenon de Atenas?','Quem foi aluno de Platao e tutor de Alexandre, o Grande?','“Guernica” e uma tela de qual pintor?','Em que ano foi inaugurada a estatua do Cristo Redentor no Rio de Janeiro?']];

var alterna = [['A) 50 \nB) 100 \nC) 1,000 \nD) 1,500 \n','A)Liquido \nB)Solido \nC)Gasoso \nD)Vaporoso \n','A)Margarida \nB)Minnie \nC)A pequena sereia \nD)Olivia palito \n','A)Cuca \nB)Negrinho do pastoreio \nC)Boitata \nD)Saci-Perere \n','A)Duque de Caxias \nB)Marechal Rondom \nC)Dom Pedro II \nD)Marechal Deodoro \n',
'A)Virgem \nB)Aquario \nC)Capricornio \nD)Aries \n','A)Harrison Ford \nB)Gerald Ford \nC)Henry Ford \nD)Anna Ford \n','A)200 \nB)100 \nC)170 \nD)220 \n','A)Cano \nB)Tambor \nC)Agulha \nD)Gatilho \n','A)Leonardo \nB)Xororo \nC)Zeze di Camargo \nD)Chitaozinho \n'],['A) Matilha \nB) Rebanho \nC) Cardume \nD) Manada \n','A)Mauricio de Souza \nB)Ziraldo \nC)Monteiro Lobato \nD)Machado de Assis \n',
'A)Sultao de Brunei \nB)Akio Morita \nC)Bill Gates \nD)Principe Charles \n','A)Calota \nB)Estepe \nC)Macaco \nD)Chave de roda \n','A)Floquinho \nB)Rin-Tin-Tin \nC)Lassie \nD)Scooby-Doo \n','A)Zagueiro \nB)Goleiro \nC)Atacante \nD)Armador \n',
'A)Esmeralda \nB)Rubi \nC)Perola \nD)Diamante \n','A)Adega \nB)Biblioteca \nC)Sotao \nD)Sala \n','A)Frank Sinatra \nB)Little Richard \nC)Elvis Presley \nD)Richie Valens \n','A)Felix \nB)Tom \nC)Frajola \nD)Mingau \n'],
['A) Negra \nB) de Sherwood \nC) da Tijuca \nD) Amazonica \n','A)364 \nB)365 \nC)366 \nD)367 \n','A)Sapo \nB)Camaleao \nC)Lagarto \nD)Jacare \n','A)707 \nB)907 \nC)008 \nD)007 \n','A)Golden Gate \nB)Rio-Niteroi \nC)Rio Sao Franscisco \nD)Brooklin \n','A)1450 \nB)1500 \nC)1550 \nD)1400 \n',
'A)Americano \nB)Africano \nC)Europeu \nD)Asiatico \n','A)Gepeto \nB)Fada \nC)Bruxa \nD)Gigante \n','A)Dois a Zero \nB)Tres a Zero \nC)Quatro a Zero \nD)Cinco a Zero \n','A)Rio de Janeiro \nB)Porto Alegre \nC)Piracicaba \nD)Sao Paulo \n'],['A) Ouros \nB) Paus \nC) Copas \nD) Espadas \n','A)Penadinho \nB)Ze do Caixao \nC)Ze do Casarao \nD)Toninho do Diabo \n','A)Sopro \nB)Cordas \nC)Percussao \nD)Repercussao \n',
'A)Zagalo \nB)Scolari \nC)Luxemburgo \nD)Carpegianni \n','A)Belo Horizonte \nB)Rio de Janeiro \nC)Sao Paulo \nD)Salvador \n','A)Geriatria \nB)Pediatria \nC)Infantologia \nD)Biologia \n','A)Estados Unidos \nB)Japao \nC)Coreia do Sul \nD)China \n','A)Uma \nB)Duas \nC)Tres \nD)Quatro \n','A)18 \nB)24 \nC)32 \nD)36 \n','A)Dunga \nB)Zangado \nC)Dengoso \nD)Mestre \n'],
['A) Alicia Silverstone \nB) Brooke Shields \nC) Julia Roberts \nD) Jessica Lange \n','A)Batman \nB)Hulk \nC)He-Man \nD)Super-Homem \n','A)Damas \nB)Xadrez \nC)Judo \nD)Domino \n','A)Flor \nB)Fruto \nC)Pedra \nD)Verdura \n','A)Sao Pedro \nB)Sao Paulo \nC)Sao Joao \nD)Santo Antonio \n','A)Adib Jatene \nB)Jose Serra \nC)Ciro Gomes \nD)Pedro Malan \n',
'A)Guarda-Chuva \nB)Chapeu \nC)Galocha \nD)Capa \n','A)Revolucao Francesa \nB)Guerra dos Emboabas \nC)Inconfidencia Mineira \nD)Segunda Guerra Mundial \n','A)12 de Outubro \nB)1 de Abril \nC)13 de Maio \nD)9 de Julho \n','A)da Selva \nB)da Noite \nC)da Tasmania \nD)das Mulheres \n'],['A) Uruguai \nB) Argentina \nC) Paraguai \nD) Espanha \n','A)Diana \nB)Louis Lane \nC)Jane \nD)Chita \n','A)Estados Unidos \nB)Inglaterra \nC)Italia \nD)Espanha \n',
'A)Engenheiro \nB)Mecanico \nC)Medico \nD)Aviador \n','A)Setembro \nB)Junho \nC)Maio \nD)Outubro \n','A)Graham Bell \nB)George Washington \nC)Thomas Edison \nD)Marconi \n','A)Automobilismo \nB)Iatismo \nC)Aeromobilismo \nD)Atletismo \n','A)Robin Cook \nB)Robin Banks \nC)Robin Hood \nD)Robin Days \n','A)Azul \nB)Verde \nC)Amarela \nD)Vermelha \n','A)Alface \nB)Espinafre \nC)Cenoura \nD)Repolho \n'],
['A) Trajano \nB) Nero \nC) Brutus \nD) Caligula \n','A)12 de Agosto \nB)11 de Janeiro \nC)7 de Setembro \nD)13 de Julho \n','A)Sherazade \nB)Lady Godiva \nC)Cleopatra \nD)Julieta \n','A)Verao \nB)Outono \nC)Inverno \nD)Primavera \n','A)Enforcada \nB)Afogada \nC)Queimada \nD)Asfixiada \n','A)Seis \nB)Oito \nC)Dez \nD)Doze \n','A)Japao \nB)Mexico \nC)Italia \nD)Estados Unidos \n','A)Morumbi \nB)Pacaembu \nC)Maracana \nD)Mineirao \n','A)Camicase \nB)Sashimis \nC)Haraquiris \nD)Sumos \n','A)Embarcacao \nB)Brinquedo \nC)Musica \nD)Simbolo \n'],
['A) Vulcao \nB) Comida \nC) Instrumento Musical \nD) Tribo indigena \n','A)Camelo \nB)Cavalo \nC)Macaco \nD)Cachorro \n','A)1971 \nB)1972 \nC)1973 \nD)1974 \n','A)Toquio \nB)Nagasaki \nC)Osaka \nD)Hiroxima \n','A)Sentir Dor \nB)Sentir Paladar \nC)Diferenciar cores \nD)Sentir Cheiro \n','A)12 de Outubro \nB)12 de Novembro \nC)11 de Dezembro \nD)1 de Janeiro \n','A)Cuiaba \nB)Varzea Grande \nC)Rondonopolis \nD)Campo Grande \n','A)Cinco \nB)Sete \nC)Tres \nD)Quatro \n','A)Sulista \nB)Esquimo \nC)Nortista \nD)Polares \n','A)D.Pedro II \nB)D.Pedro I \nC)D.Joao IV \nD)Deodoro da Fonseca \n'],
['A) 18 \nB) 20 \nC) 24 \nD) 30 \n','A)Bruno Barreto \nB)Hector Babenco \nC)Arnaldo Jabor \nD)Walter Salles Junior \n','A)Alemanha \nB)Brasil \nC)Venezuela \nD)Israel \n','A)Paquistao \nB)Japao \nC)Tailandia \nD)Egito \n','A)Arnold Schwarzenegger \nB)Sylverster Stallone \nC)Steven Seagal \nD)Jean Claude Van Damme \n','A)Cannes \nB)Normandia \nC)Capri \nD)Marselha \n','A)Polonia \nB)Franca \nC)Italia \nD)Holanda \n','A)Conversao \nB)Involucao \nC)Reestruturacao \nD)Regressao \n','A)10 Oncas \nB)10 Gramas \nC)10 Quilos \nD)10 Libras \n','A)Guerra Fria \nB)Guerra do Viatena \nC)Guerra nas Estrelas \nD)Guerra da Coreia \n'],
['A) Atlantico \nB) Pacifico\nC) Indico\nD) Artico \n','A)Braco \nB)Perna \nC)Quadril \nD)Coluna \n','A)Arthur Antunes Coimbra \nB)Arthur Alves Pinto \nC)Arthur da Tavola \nD)Arthur dos Santos \n','A)Renegar \nB)Sujeitar \nC)Desmaiar \nD)Pedir \n','A)La Paz \nB)Buenos Aires \nC)Bogota \nD)Cuzco \n','A)Cabo Jefferson \nB)Cabo Lincoln \nC)Cabo Kennedy \nD)Cabo Reagan \n','A)Marmore \nB)Granito \nC)Gesso \nD)Quartzo \n','A)Pitagoras \nB)Diderot \nC)Aristoteles \nD)Galileu Galilei \n','A)Monet \nB)Renoir \nC)Picasso \nD)Leonardo da Vinci \n','A)1921 \nB)1931 \nC)1941 \nD)1951 \n']]; 
var respCerta = [['b','b','b','d','d','c','c','b','b','b'],['a','c','c','b','d','b','d','a','c','c'],['d','c','b','d','b','b','a','a','b','d'],['c','b','b','a','c','b','b','a','c','d'],['b','d','b','c','d','b','a','c','a','a'],['b','c','c','c','c','a','c','c','d','b'],['b','d','c','b','c','d','c','c','a','a'],['c','b','d','d','c','a','d','a','b','a'],['c','d','d','d','d','b','d','c','b','a'],['b','a','a','d','d','c','a','c','c','b']];
var play = true;
var n = 0;



while(play = true){
    console.log("Comeca agora o show do milhao! ");
    while(n<10){
        n2 = Math.floor(Math.random() * 10);
        console.log("Essa pergunta vale "+premio[n]+" reais");
        var respUsu = user.question("Pergunta: \n "+perguntas[n][n2]+"\n"+alterna[n][n2]);
         if(respUsu != respCerta[n][n2]){
        console.log("Resposta errada!\n Infelizmente voce perdeu tudo!\n");
             break;
            }
            if(respUsu == respCerta[n][n2]){
                premioAcumu = premio[n]
                console.log("Certa resposta! ");}
                if(n < 9 && respUsu == respCerta[n][n2]){
                    var desistir = user.questionInt("Voce deseja desistir?\n 1 - Quero desistir!\n 2 - Quero continuar!\n ");
                    if(desistir == 1){
                        premioAcumu = premioAcumu/2;
                        play = false;
                        console.log("Voce esta saindo com "+premioAcumu+" reais");
                        break;
                    }
                }else{
                    break
                }
                n++
            }
            
            if(n==9 && respUsu == respCerta[n][n2]){
                console.log("--------------------  PARABENS  --------------------\n");
                console.log("----------  VOCE GANHOU UM MILHAO DE REAIS  ----------\n");
                play = false;
            }

            var desistir = user.questionInt("Voce deseja jogar novamente?\n 1 - Quero desistir!\n 2 - Quero continuar!\n ");
            if(desistir == 1){
                play = false;
                break;
            }
   
        
        // if(respUsu != respCerta[n]){
        // console.log("Resposta errada!\n Infelizmente voce perdeu tudo!\n Deseja jogar novamente?");}
        //    if(ganhou = 2){desistir == 1
        // } if(desistir == 1){
        //     play = false;
            
        
        
                // if(respUsu == respCerta[n]){console.log("Deseja jogar novamente?\n")}
                // var jogarDenovo = user.questionInt("1 - Sim\n 2 - Nao\n");
                //     if(jogarDenovo == 2){
                //         play = false;
                //         }
                                  
        n = 0
                    }
console.log("Jogo encerrado! \n Obrigado por jogar! ");


//ainda falta:
//sistema de pulo
//array multidimensional para multiplas perguntas, alternativas e respostas
//Math.round(Math.random()/100)*porcentagem para cada alternativa dentro do array multidimensional


