var database;
var state = 0;

function setup() {
  createCanvas(1000,500);
  database = firebase.database();
  form = new Form();
}

function draw() {
  background(220);  
  
  if(state === 0){
    form.display();
  }
  
}