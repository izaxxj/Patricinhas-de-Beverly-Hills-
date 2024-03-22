var motivos = [
  "A escola realmente existe",
  "o papel da Cher quase foi passado para outra pessoa",
  "Alicia Silverstone ganhou todas as roupas que usou no filme",
  "A maioria dos atores eram realmente adolecentes",
    "A cena do assalto é inspirada em um fato real"
];

var imagens = [ "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1zz-bCK_BLZbE9FDyoimm9T8kn0sfvqLSZ5ODIEAL6AOAiL9DeybY5KSUVbEdn92LCQehZ9G6z0ofxIrx3UwpwDJB1KZfi4y3-pTE3i8A86Wuq5nePl68St1catbIzgnwIeao4pneobrW/s1600/clueless6.jpg",
  "https://pbs.twimg.com/media/EdKaHHeXoAE5rYu.png",
  "https://www.fashionismo.com.br/wp-content/uploads/2009/04/clueless-patricinhas-beverly-hills.jpg",
  "https://cinepop.com.br/wp-content/uploads/2017/02/249770-clueless-clueless-wallpaper.jpg" , "https://i.pinimg.com/170x/cd/cb/dc/cdcbdc6fecf5e6846e37484a7b5fd5eb.jpg"          
];

var i = 0;
function proximo() {  document.getElementById("album").src = imagens[i];
    document.getElementById("texto").innerHTML = motivos[i];
    
    i++;  
   if(i>4){
     i=0;
   }
}

