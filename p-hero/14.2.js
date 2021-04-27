// Inch to Feet 
// 12 inch = 1 Feet

const inchToFeet = function(inch){
    const feet = inch/12;
    return `${inch} inch = ${feet.toFixed(3)} feet`;
}
console.log(inchToFeet(5));


const feetToInch = (feet) => (feet*12).toFixed(3);
console.log(feetToInch(2.2));