const Tiger = require('./Tiger')// TODO 3
const Wolf = require('./Wolf')// TODO 4
 
const fighting = (tiger, wolf) => {
  if(tiger.strength > wolf.strength) {
    return tiger.growl();
  }
 
  if(wolf.strength > tiger.strength) {
    return wolf.howl();
  }
 
  console.log('Tiger and Wolf have same strength');
};
 
const tiger = new Tiger();
const wolf = new Wolf();
 
// const myTiger = new Tiger();
// const myWolf = new Wolf();

const result = fighting(tiger, wolf);
console.log(tiger,wolf,result);