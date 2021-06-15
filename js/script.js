function mostraAlerta() {

    alert('Implementação da função em Andamento!');

}
function projectsWeb(){

    window.open('https://github.com/FabioLucassc?tab=repositories&q=&type=&language=css','_blank');window.open('https://github.com/FabioLucassc?tab=repositories&q=&type=&language=html','_blank'); ; 
}

function Circlle(el) {

    $(el).circleProgress({ fill: { color: '#ff5c5c' } })
        .on('circle-animation-progress', function (event, progress, stepValue) {

            $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2) + '%');

        });
};

// Circlle('.porcentagem');

function carrega() {

    Circlle('.porcentagem');
    document.getElementById('final').onmouseover = null;

};
