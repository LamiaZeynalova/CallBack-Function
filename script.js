// sual1/ 4 esas funksiyaniz olacaq(Topla(),Cixma(),Vurma(),Bolme()).
// Bir Callback funksiyaniz olacaq(Output()).
// Kalkulyator yazacaqsiz.Işləmə prinsipi aşağıdakı kimi olacaq.

// let a=10;
// let b=2


function vurma(a, b, cedvel) {
  result = a * b;
  cedvel(result);
}
function bolme(a, b, cedvel) {
  result = a / b;
  cedvel(result);
}
function toplama(a, b, cedvel) {
    result = a + b;
    cedvel(result);
  }
  function cixma(a, b, cedvel) {
    result = a - b;
     cedvel(result);
  }
  function OutPut(result) {
    console.log(result);
  }
  
  let choose = "bolme";
  switch (choose) {
    case "toplama":
      toplama(a, b, OutPut);
        break; 
    case "cixma":
      cixma(a, b, OutPut);
      break;
    case "vurma":
      vurma(a, b, OutPut);
      break;
    case "bolme":
      bolme(a, b, OutPut);
      break;
    default:
        break;
      }

//   sual2 //  Toplamda 3 funksiyaniz olacaq.
// Verilən arrayda ilk funksiyada tək ədədləri tapacaqsız.
// İkinci funksiyada bu tək ədədlərdən 3 və 5ə bölünənləri tapib Output funksiyasına göndərəcəksiz.  
 
function findOdd(arr) {
    return arr.filter(n => n % 2 !== 0);
}

function filter35(nums) {
    return nums.filter(n => n % 15=== 0 );
}

function output(filteredNums) {
    console.log(filteredNums);
}

let  arr = [1, 2, 5, 15,25, 30, 33, 45];

let  oddNums = findOdd(arr);
let  filteredNums = filter35(oddNums);
output(filteredNums);
      
      