let lucasWeight = 72;
let lucasHeight = 1.75;
let peterWeight = 85;
let peterHeight = 1.8;

let lucasBMI = lucasWeight / (lucasHeight * lucasHeight);
let peterBMI = peterWeight / (peterHeight * peterHeight);

if (lucasBMI > peterBMI) {
    console.log(`Lucas' BMI (${lucasBMI.toFixed(1)}) is higher than Peter's (${peterBMI.toFixed(1)})`);
} else if (peterBMI > lucasBMI) {
    console.log(`Peter's BMI (${peterBMI.toFixed(1)}) is higher than Lucas' (${lucasBMI.toFixed(1)})`);
} else {
    console.log(`Lucas and Peter have the same BMI (${lucasBMI.toFixed(1)})`);
}
