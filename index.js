// edit 2 earlier these were having on array as a
//  value now this object also refers to a object itself







const breakfast1 = {
  food:{eggs: 2000,
  bread :1000,
  juice: 4000}
}
const lunch1 = {
  food : { pasta:5000,
      pizza:6000,
      cheese:7000,

}

}
const dinner1 = {

  food: {paneer:3000,
      roti:8000,
      sabji:9000}
}

//creating object
function Restro(data){
  Object.assign(this,data)
  this.food = data.food
  
  this.allFoodItems = function(){

      let fooditems = this.food

      return fooditems

      
  }
}

const finalBreakfast = new Restro(breakfast1)
const finallunch = new Restro(lunch1)
const finaldinner = new Restro(dinner1)




let foodyBreakfast = finalBreakfast.allFoodItems()
let foodyLunch = finallunch.allFoodItems()
let foodyDinner = finaldinner.allFoodItems()
console.log(foodyBreakfast)

console.log(foodyLunch)

console.log(foodyDinner)
//my first time actully using google properly for this code this code helps us get the key 
// and its values easily earlier we can get key vakues but didnt know how to fetch the key itself
//for reference i will comment it out and use again by manipulation for our project


// for (var key in foodyBreakfast) {
//     if (foodyBreakfast.hasOwnProperty(key)) {
//         console.log(key + " -> " + foodyBreakfast[key]);
//     }
// }

console.log(foodyBreakfast)
let count = 0;
let html1 = ""

for (var key in foodyBreakfast) {
  if (foodyBreakfast.hasOwnProperty(key)) {
      html1 += `<button  class = "dark ${key}"> ${key}'s price   => ${foodyBreakfast[key]}</button>`

  }
}


// console.log(html1);

let html2 = ""
for (var key in foodyLunch) {
  if (foodyLunch.hasOwnProperty(key)) {
      html2 += `<button class = "dark ${key}"> ${key}'s price   => ${foodyLunch[key]}</button>`
  }
}

let html3 = ""
for (var key in foodyDinner) {
  if (foodyDinner.hasOwnProperty(key)) {
      html3 += `<button class = "dark ${key}"> ${key}'s price   => ${foodyDinner[key]}</button>`
  }
}
// the div or any function which has inner
//  html must be attached to the outside of constructor.
/*


let htmlArray =foodyLunch.map(function(string){
                                                                     
  return `<li>${foodyBreakfast}</li>`                        earlier we had a array so we mapped those array to the new array with
                                                             elements but now we have object so we use above function directly

})
console.log(htmlArray.length)


*/

// for (let i=0 ;i< htmlArray.length;i++){

//   html += htmlArray[i]               
// }
// console.log(html)




// now we have the html and lets render this using innerhtml on our page


document.getElementById("breakfast").addEventListener("click",function(){

  // const elementsNumber =  document.getElementsByClassName("dark")

  // console.log(elementsNumber)

  document.getElementById("container2").innerHTML=`${html1}`
  display()
}) 


document.getElementById("lunch").addEventListener("click",function(){

  document.getElementById("container2").innerHTML=`${html2}`
  display()
}) 


document.getElementById("dinner").addEventListener("click",function(){

  document.getElementById("container2").innerHTML=`${html3}`
  display()
}) 



  // let x = document.getElementsByClassName(`dark ${key}`).length


  // console.log(x)

  const elementsNumber =  document.getElementsByClassName("dark")

  console.log(elementsNumber)

  let total = 0;

function display(){

  for (let i = 0;i <3;i++) {

      document.getElementsByClassName("dark")[i].addEventListener("click",function(e){                                                                              //This returns something like a array
  
          //  const ourItems = Array.from(e.target.classList)[1] //used for changing to array

          //  console.log(e)

            let y = parseInt(e.target.textContent.slice(-4))

            total += y;
          // console.log(total)  // used for getting value of upto 4 digits

          document.getElementById("container3").innerHTML += `<p>${e.target.textContent}</p>`


          document.getElementById("total").textContent = `${"FINAL AMOUNT : " + total}`


         
          // paymentFinalAmount(total)
      })
     
    };
      
}
console.log(total)
//   console.log(total)

// console.log(document.getElementById("total").textContent)
// let provider = new ethers.providers.Web3Provider(
//     window.ethereum,
//     "ropsten"
// );

document.getElementById('connectButton').addEventListener("click",function(){


  ethereum.request({ method: 'eth_requestAccounts' })

  
  // .catch((error) => {
  //   if (error.code === 4001) {
  //     // EIP-1193 userRejectedRequest error
  //     console.log('Please connect to MetaMask.');
  //   } else {
  //     console.error(error);
  //   }
  // })

})



let contractAddress = "0x8Ca7e93Fc3E3f8Cab9858174eEaeaB80ec161a1b"

let contractAbi =[
	{
		"inputs": [],
		"name": "sendMoney",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getOwnerBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
// let dappContract
// let signer




// provider.listAccounts().then(function (accounts) {
//     signer = provider.getSigner(accounts[0]);
//     let dappContract = new ethers.Contract(
//         contractAddress,
//         contractAbi,
//       signer
//     );

  // })

  // async function pay(totalling){
  //     const amount = ethers.utils.parseEther(totalling)
  //     // const finalPrice = ethers.utils.parseEther()
  //     // console.log(finalPrice*1000)

  //     const userPayPromise = await dappContract.amountToPay({value: amount});
  //     await userPayPromise.wait()
  // }
  

  const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "ropsten");
     

      document.getElementById("payment").addEventListener("click",paymentFinalAmount)

      // provider.listAccounts().then(function (accounts) {

        

       

      
      //         })
              const signer = provider.getSigner()

              const contract = new ethers.Contract(contractAddress,contractAbi,signer)
              

  async function paymentFinalAmount(){

      const amount = ethers.utils.parseEther((total/10000000).toString())

      console.log(amount)
 
              const userPayPromise = await contract.sendMoney({value: amount});
              await userPayPromise.wait()

     
    }

 