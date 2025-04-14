const arr = [1,1,2,3,4,4,3,5]

const unique = arr.filter((item,index)=>arr.indexOf(item) === index)
console.log(unique)
console.log(arr.indexOf(arr))


const names = "naveen"
let reverse = ""
for(let i=names.length-1;i>=0;i--){
    reverse = reverse + names[i]
}
console.log(reverse)

const a = [1,2,3,4,5]
const b= [4,6,7,9]
console.log("b",{...b})
 let obj = {}
for(let i = 0 ; i<a.length; i++){
    obj[i] = a[i]
}
console.log("obj",obj)

const entries = [["name", "Naveen"], ["age", 30]];
const out = Object.fromEntries(entries)

let matched = false

for(let i = 0; i<a.length; i++){
    for(let j = 0; j<b.length; j++){
        if(a[i] === b[j]){
            matched = true
            break
        }
    }
}
console.log(matched)

function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log("palindrome:", isPalindrome("naveen"));


let namess = "naveen"
let newname = names

console.log(namess)
console.log(newname)

// const out = JSON.stringify(newname)
// const value = JSON.parse(out)
// newname = "chander"
namess =20
console.log(namess)
console.log(newname)

let arra = [1,2,3,4]
let arrb = [6,7,8,9]

console.log([...arra,...arrb])
arrb = [...arra]
console.log(arrb)

let compemployees = {
    companyname:"cit",
    employess:[
        {name:"naveen"},
        {name:"dev"}
        ]
}

// namedetails = {...compemployees}
namedetails = JSON.parse(JSON.stringify(compemployees))
console.log(compemployees)
console.log(namedetails)

compemployees.companyname = "citpl"
compemployees.employess[0].name = "kalpna" 
console.log()
console.log(compemployees)
console.log(namedetails)


function printDiamondNumberPattern(n) {
  // Upper half
  for (let i = 1; i <= n; i++) {
    let str = ' '.repeat(n - i);

    for (let j = 1; j <= i; j++) {
      str += j;
    }

    for (let j = i - 1; j >= 1; j--) {
      str += j;
    }

    console.log(str);
  }

  // Lower half
  for (let i = n - 1; i >= 1; i--) {
    let str = ' '.repeat(n - i);

    for (let j = 1; j <= i; j++) {
      str += j;
    }

    for (let j = i - 1; j >= 1; j--) {
      str += j;
    }

    console.log(str);
  }
}

// Call the function with your desired number
printDiamondNumberPattern(5);

