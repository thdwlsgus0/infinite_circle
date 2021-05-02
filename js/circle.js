class Circle {
  constructor(){
    this.x = Math.floor(Math.random() * 1000 + 1);
    this.y = Math.floor(Math.random() * 1000 + 1);
    this.RADIUS = 50;
  }

  create() {
    const canvasElement = document.createElement('canvas');
    const context = canvasElement.getContext('2d');
    context.beginPath();
    context.arc(this.x,this.y,this.RADIUS,0,Math.PI*2);
    context.stroke();
    document.body.appendChild(canvasElement);
  }

  move(){

  }
}
const array = [];
const CIRCLE_NUMBER = 30;

for(let i=0; i<CIRCLE_NUMBER; i++){
  const circle = new Circle();
  circle.create();
}

const screenSize = () => {

}
window.addEventListener('resize', )


