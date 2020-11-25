var dance,mountains,food,pillar,been,bird,king,lotus,painting,painting1,
palace,sitar,tabla,thali,tiger,veena,danceImg, mtImg,foodImg,pillarImg,
beenImg,birdImg,kingImg,lotusImg,mountainsImg,paintingImg,painting1Img,
palaceImg,sitarImg,tablaImg,thaliImg,tigerImg,veenaImg,bgImg;

var imgArray= ["kathakali.png","mountains.png","Thali.png","ashokstambh.png","been.png","bird.png",
"king.png","lotus.png","painting.png","painting1.png","palaces.png","sitar.png","Tabla.png","Thali.png","tiger.png",
"veena.png"];

function preload()
{
  danceImg = loadImage("images/kathakali.png");
  mtImg = loadImage("images/mountains.png");
  foodImg = loadImage("images/Thali.png"); 
  pillarImg = loadImage("images/ashokstambh.png");
  beenImg = loadImage("images/been.png");
  birdImg = loadImage("images/bird.png");
  kingImg = loadImage("images/king.png");
  lotusImg = loadImage("images/lotus.png");
  paintingImg = loadImage("images/painting.png");
  painting1Img = loadImage("images/painting1.png");
  palaceImg = loadImage("images/palaces.png");
  sitarImg = loadImage("images/sitar.png");
  tablaImg = loadImage("images/Tabla.png");
  thaliImg = loadImage("images/Thali.png");
  tigerImg = loadImage("images/tiger.png");
  veenaImg = loadImage("images/veena.png");
  bgImg = loadImage("images/bg.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  /*dance = createSprite(100,200,50,50);
  dance.addImage("dance", danceImg);

  palace = createSprite(400,200,50,50);
  palace.addImage("palace", palaceImg);
  palace.scale = 0.8;

  food = createSprite(700,200,50,50);
  food.addImage("food", foodImg);
  food.scale = 0.8;

  pillar = createSprite(100,400,50,50);
  pillar.addImage("pillar", pillarImg);
  pillar.scale = 0.8;

  been = createSprite(400,400,50,50);
  been.addImage("been", beenImg);
  been.scale = 0.8;

  bird = createSprite(700,400,50,50);
  bird.addImage("bird", birdImg);
  bird.scale = 0.7;

  king = createSprite(100,600,50,50);
  king.addImage("king", kingImg);
  king.scale = 0.8;

  lotus = createSprite(400,600,50,50);
  lotus.addImage("lotus", lotusImg);
  lotus.scale = 0.8;

  mountains = createSprite(700,600,50,50);
  mountains.addImage("mt", mtImg);
  mountains.scale = 0.7;

  /*painting = createSprite(100,800,50,50);
  painting.addImage("p", paintingImg);
  painting.scale = 0.5;

  painting1 = createSprite(400,800,50,50);
  painting1.addImage("p1", painting1Img);
  painting1.scale = 0.7;

  tabla = createSprite(700,800,50,50);
  tabla.addImage("tabla", tablaImg);
  tabla.scale = 0.8;*/

}

function draw() {
  background(bgImg);  
  getRandomImage(imgArray,"images/");
 // getRandomImage2(imgArray,"images/");
  drawSprites();
}

function getRandomImage(imgArray, path) {
 // path = path + 'images/'; // default path here
  var num = Math.floor( Math.random() * imgArray.length );
  var img = imgArray[ num ];
  var imgStr = '<img src="' + path + img + '" alt = "">';
  document.write(imgStr); document.close();

  var image = createSprite(500,400,50,50);
  image.addImage("15",path + img);

}

/*function getRandomImage2(imgArray, path) {
  // path = path + 'images/'; // default path here
   var num = Math.floor( Math.random() * imgArray.length );
   var img = imgArray[ num ];
   var imgStr = '<img src="' + path + img + '" alt = "">';
   document.write(imgStr); document.close();
 
   var image = createSprite(800,400,50,50);
   image.addImage("15",path + img);
 
 }*/