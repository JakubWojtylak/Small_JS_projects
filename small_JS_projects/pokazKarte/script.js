
var cards =[];
var licznik = [];
var kliknieta = null;

function deck(){
    this.names = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
        'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
    this.suits = ['Hearts','Diamonds','Spades','Clubs'];

    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            cards.push(this.names[n]+" of "+this.suits[s]);
        }
    }


}




deck();




window.onload = start;




function start() {
    document.getElementById("pokazana").innerHTML = '<img src="cards/tyl.png" id="imageBox1 " width="200" height="300"/>'
    var tresc_diva = "";

    for (i = 0; i < 52; i++)
    { var identi='card'+i;

        tresc_diva = tresc_diva + '<div class="karta" onclick="zmien('+i+')"'+'id="'+identi+'">'+cards[i]+'</div>';
        if ((i + 1) % 6 == 0) tresc_diva = tresc_diva + '<div style= "clear:both;"></div>'
    }

    document.getElementById("karty").innerHTML = tresc_diva;

}

function zmien(nr) {
    reset();
    console.log(nr);
    document.getElementById("pokazana").innerHTML = '<img src="cards/' + 'card' + '(' + nr + ')' + '.png" id="imageBox ' + nr + '" width="200" height="300"/>'
    var element = "card" + nr;

    document.getElementById(element).style.background = "#003300";
    document.getElementById(element).style.color = "#00C000";
    document.getElementById(element).style.border = "3px solid #00C000";

kliknieta = nr;
    }

function reset() {
    if (kliknieta != null) {

    var element = 'card' + kliknieta;
    document.getElementById(element).style.background = "#333333";
    document.getElementById(element).style.color = "gray";
    document.getElementById(element).style.border = "3px solid gray";
}
}
