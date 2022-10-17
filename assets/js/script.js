var inicio = document.getElementById('inicio');
var confirmar = document.getElementById('confirmar');
var start = document.getElementById('start');

var game = document.getElementById('game');
var telaGame = document.getElementById('telaGame');
var contador = document.getElementById('contador');
var nivelValue;
var numero;
var ajuda = document.getElementById('ajuda');
var img_ajuda = document.getElementById('img-ajuda');
var tentar = document.getElementById('tentar');
var vitoria = document.getElementById('vitoria');
var derrota = document.getElementById('derrota');
var numeroSorte = document.getElementById('numeroSorte');
var p_s = document.getElementById('p-s');
var replay = document.getElementById('replay');

var i = 0;

game.style.display = 'none';
start.style.display = 'none';
vitoria.style.display = 'none';
derrota.style.display = 'none';
ajuda.style.display = 'none';
numeroSorte.style.display = 'none';
p_s.style.display = 'none'
replay.style.display = 'none'

function showBtnStart() {
    start.style.display = 'block';
}

confirmar.onclick = function showBtnStart() {
                        confirmar.style.display = 'none';
                        start.style.display = 'block';
                        nivel.style.background = '#C8A2C8';
                        nivel.style.pointerEvents = 'none';
                        nivel.style.touchAction = 'none';
                        nivelValue = document.getElementById('nivel').value;
                    }

start.onclick = function showGame() {
                    game.style.display = 'block';
                    inicio.style.display = 'none';

                    if(nivelValue === 'nivel1'){
                        var vRandom = 10;
                    }else if(nivelValue === 'nivel2'){
                        var vRandom = 100;
                    }else if(nivelValue === 'nivel3'){
                        var vRandom = 1000;
                    }
                    
                    var nSorte = Math.floor(Math.random() * vRandom) + 1;
                    numeroSorte.innerHTML = nSorte

                    tentar.onclick = function tentativa(){
                        i++;
                        contador.innerHTML = i + "/5";
                        numero = document.getElementById('numero').value;
                        if(numero === ""){
                            numero = 0;
                        }

                        if(i === 5 && numero != nSorte){
                            img_ajuda.style.display = 'none'
                            game.style.display = 'none'
                            derrota.style.display = 'block'
                            p_s.style.display = 'block'
                            numeroSorte.style.display = 'block'
                            replay.style.display = 'block'
                        }else if(numero == nSorte){
                            img_ajuda.style.display = 'none'
                            game.style.display = 'none'
                            p_s.style.display = 'block'
                            vitoria.style.display = 'block'
                            numeroSorte.style.display = 'block'
                            replay.style.display = 'block'
                        }else if(numero < nSorte){
                            img_ajuda.style.display = 'none'
                            ajuda.style.display = 'block';
                            ajuda.innerHTML = '>'
                        }else if(numero > nSorte){
                            img_ajuda.style.display = 'none'
                            ajuda.style.display = 'block';
                            ajuda.innerHTML = '<'
                        }
                    }
                }

function showReplay(){
    window.location.reload()
}