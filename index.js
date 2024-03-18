// const closure = () => {
//     const initialValue = 12;
//     let x = initialValue
//     function showX() {
//         return x;
//     }
//     function addThree(){
//         x = x + 3
//     }
//     function multiplyByThree() {
//         x = x * 3
//     }
//     function reset() {
//         x = initialValue;
//     }
//     return {showX, addThree, multiplyByThree, reset}   
// }
// const { showX, addThree, multiplyByThree, reset } = closure()
// addThree()
// addThree()
// addThree()
// console.log(showX(), '1')
// multiplyByThree()
// console.log(showX(), '2')
// reset()
// console.log(showX(), '3')
//const arr = [1,2,3,4,5,6]
// const arr1 = [7,8,9]
// const returnValue = arr.push(7)
// console.log(returnValue)
// const concatResult = arr.concat(arr1)
// console.log(concatResult)
// console.log(arr)
// console.log(arr1)
// const mapedArr = arr.map((item, index) => {
//     return <h2>{item}</h2>;
// })
// console.log(mapedArr)
// const arr = [1,2,3,4,5,6]
// arr.length = 3
// console.log(arr)

function closureCifre() {
    let cifre = [1, 2, 3, 4, 5, 6];
    //returnează array-ul cifre
    function getArrayCifre() {
        return cifre;
    }
    //returnează un array cu doar cifrele pare din cifre
    function getArrayCifrePare() {
        const cifrePare = cifre.filter((element) => element % 2 === 0);
        return cifrePare;
    }
    //returnează un array cu doar cifrele impare din cifre
    function getArrayCifreImpare() {
        const cifreImpare = cifre.filter((element) => element % 2 !== 0);
        return cifreImpare;
    }
    // calculează și returnează suma tuturor cifrelor din cifre
    function getSumaCifrelor() {
        let suma = 0;
        for (const cifra of cifre) {
            suma += cifra;
        }
        return suma;
    }
    // adaugă o nouă cifră la sfârșitul array-ului cifre
    function adaugaCifra(nouaCifra) {
        cifre.push(nouaCifra);
    }

    return {
        getArrayCifre,
        getArrayCifrePare,
        getArrayCifreImpare,
        getSumaCifrelor,
        adaugaCifra,
    };
}
//const manipulareCifre = closureCifre();

// afisare si utilizare functii

// console.log(manipulareCifre.getArrayCifre()); // [1, 2, 3, 4, 5, 6]
// console.log(manipulareCifre.getArrayCifrePare()); // [2, 4, 6]
// console.log(manipulareCifre.getArrayCifreImpare()); // [1, 3, 5]
// console.log(manipulareCifre.getSumaCifrelor()); // 21
// manipulareCifre.adaugaCifra(7);
// console.log(manipulareCifre.getArrayCifre()); // [1, 2, 3, 4, 5, 6, 7]
///////pct 2
const manipulareCifre = closureCifre();

function afiseazaRezultate() {
  const cifrePare = manipulareCifre.getArrayCifrePare();
  const sumaCifrelor = manipulareCifre.getSumaCifrelor();

  console.log(`Cifre pare: ${cifrePare}`);
  console.log(`Suma cifrelor: ${sumaCifrelor}`);
}

afiseazaRezultate();
manipulareCifre.adaugaCifra(8);
afiseazaRezultate();