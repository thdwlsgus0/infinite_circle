class Circle {
  constructor(){
    this.x = Math.floor(Math.random() * 1000 + 1);
    this.y = Math.floor(Math.random() * 1000 + 1);
    this.radius = Math.floor(Math.random() * 100 + 1);
  }

  move(){

  }
}

const array = new Array(100);

for(let i=0; i<10; i++){
  const arr = new Circle();
  console.log(arr);
}