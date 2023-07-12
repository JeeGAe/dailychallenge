
function pickRandomNumber(min, max){
  return Math.floor( Math.random() * (max-min+1) ) + min 
}

function Tester(sleepTime, wakeupTime, breakupTime, tossTime, deltaWaveRate){
  this.sleepTime = sleepTime;
  this.wakeupTime = wakeupTime;
  this.breakupTime = breakupTime;
  this.tossTime = tossTime;
  this.deltaWaveRate = deltaWaveRate;
  this.sleepSatisfied = 0;
}
Tester.prototype = {
  CalculateSleepSatisfied(){
    this.sleepSatisfied = this.deltaWaveRate/(this.sleepTime * this.wakeupTime * this.breakupTime * this.tossTime);
    this.sleepSatisfied = Math.round(this.sleepSatisfied*100)/100;
  },
  get getSleepSatisfied(){
    return this.sleepSatisfied;
  }
}

function createGroup(){
  const group = Array(100);
  for(let i = 0; i < group.length; i++){
    const sleepTime = pickRandomNumber(1, 10);
    const wakeupTime = pickRandomNumber(1, 10);
    const breakupTime = pickRandomNumber(1, 5);
    const tossTime = pickRandomNumber(1, 10);
    const deltaWaveRate = pickRandomNumber(0, 50);
    const tester = new Tester(sleepTime, wakeupTime, breakupTime, tossTime, deltaWaveRate);
    tester.CalculateSleepSatisfied();
    group[i] = (tester.getSleepSatisfied);
  }
  return group;
}
function fillterHighSatisfied(point){
  return point >= 0.37;
}

const groupA = createGroup();
const groupB = createGroup();
const groupC = createGroup();
const satisfiedgroupA = groupA.filter(fillterHighSatisfied);
const satisfiedgroupB = groupB.filter(fillterHighSatisfied);
const satisfiedgroupC = groupC.filter(fillterHighSatisfied);
const groupRank = {A : satisfiedgroupA.length, B : satisfiedgroupB.length, C : satisfiedgroupC.length};
console.log(groupRank); 



function Station(name, latitude, longitude){
  this.name = name;
  this.latitude = latitude;
  this.longitude = longitude;
}
Station.prototype = {
  calculatePrice(anotherStation){
    const R = 6371e3;
    const φ1 = this.latitude * Math.PI / 180;
    const φ2 = anotherStation.latitude * Math.PI / 180;
    const Δφ = (anotherStation.latitude - this.latitude) * Math.PI / 180;
    const Δλ = (anotherStation.longitude - this.longitude) * Math.PI / 180;
    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
          Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return Math.round(distance/1000) * 100
  }
}

const seoul = new Station('서울역', 37.55620110026294, 126.97223116703012);
const deajeon = new Station('대전역', 36.332516127741, 127.43421099777726);
const daegu = new Station('동대구역', 35.88049128950934, 128.62837657353532);
const busan = new Station('부산역', 35.116613680508806, 129.04009077373016);

console.log(`서울역-대전역 : ${seoul.calculatePrice(deajeon)}`);
console.log(`대전역-동대구역 : ${deajeon.calculatePrice(daegu)}`);
console.log(`동대구역-부산역 : ${daegu.calculatePrice(busan)}`);
console.log(`서울역-동대구역 : ${seoul.calculatePrice(daegu)}`);
console.log(`서울역-부산역 : ${seoul.calculatePrice(busan)}`);
console.log(`대전역-부산역 : ${deajeon.calculatePrice(busan)}`);

const hairColors = ['black', 'brown', 'yellow', 'white', 'gold']
const hairTypes = ['curly', 'straight', 'wavy', 'coily']
const glasses = [true, false]
const heights = [150, 160, 170, 180, 190, 200]
const weights = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]

function Person(hairColors, hairTypes, glasses, heights, weights){
  this.hairColors = hairColors;
  this.hairTypes = hairTypes;
  this.glasses = glasses;
  this.heights = heights;
  this.weights = weights;
}

const persons = Array(10000);
for(let i = 0; i < persons.length; i++){
  const randomHairColors = hairColors[pickRandomNumber(0,hairColors.length-1)];
  const randomHairTypes = hairTypes[pickRandomNumber(0,hairTypes.length-1)];
  const randomGlasses = glasses[pickRandomNumber(0,glasses.length-1)];
  const randomHeights = heights[pickRandomNumber(0,heights.length-1)];
  const randomWeights = weights[pickRandomNumber(0,weights.length-1)];
  persons[i] = new Person(randomHairColors, randomHairTypes, randomGlasses, randomHeights, randomWeights);
}

function countHairColors(person){
  return person.hairColors === hairColors[this];
}
function countHairTypes(person){
  return person.hairTypes === hairTypes[this];
}
function countglasses(person){
  return person.glasses === glasses[this];
}
function countHeights(person){
  return person.heights === heights[this];
}
function countWeight(person){
  return person.weights === weights[this];
}

let character = {};

for(let i = 0; i < hairColors.length ; i++){
  const count = persons.filter(countHairColors,i).length;
  const newCharacter = {}
  newCharacter[`${hairColors[i]}`] = count;
  character = Object.assign(character, newCharacter);
}

for(let i = 0; i < hairTypes.length ; i++){
  const count = persons.filter(countHairTypes,i).length;
  const newCharacter = {}
  newCharacter[`${hairTypes[i]}`] = count;
  character = Object.assign(character, newCharacter);
}

for(let i = 0; i < glasses.length ; i++){
  if(i === 0){
    const count = persons.filter(countglasses,i).length;
    const newCharacter = {}
    newCharacter[`put on glasses`] = count;
    character = Object.assign(character, newCharacter);
  }else{
    const count = persons.filter(countglasses,i).length;
    const newCharacter = {}
    newCharacter[`no glasses`] = count;
    character = Object.assign(character, newCharacter);
  }
}

for(let i = 0; i < heights.length ; i++){
  const count = persons.filter(countHeights,i).length;
  const newCharacter = {}
  newCharacter[`${heights[i]}cm`] = count;
  character = Object.assign(character, newCharacter);
}

for(let i = 0; i < weights.length ; i++){
  const count = persons.filter(countWeight,i).length;
  const newCharacter = {}
  newCharacter[`${weights[i]}kg`] = count;
  character = Object.assign(character, newCharacter);
}

console.log(character);
