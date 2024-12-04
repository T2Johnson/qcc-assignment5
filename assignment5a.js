const lucasMass = 78;
const lucasHeight = 1.69;
const peterMass = 92;
const peterHeight = 1.95;

const lucasBMI = lucasMass / (lucasHeight * lucasHeight);
const peterBMI = peterMass / (peterHeight * peterHeight);

const lucasHigherBMI = lucasBMI > peterBMI;

console.log(`The BMI of Peter is ${peterBMI.toFixed(2)}, The BMI of Lucas is ${lucasBMI.toFixed(2)}, Peter's BMI is higher than Lucas's BMI that is ${!lucasHigherBMI}`);
