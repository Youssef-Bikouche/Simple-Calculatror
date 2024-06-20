const resultCalcul=document.querySelector("#result-calcul");
const reset=document.querySelector(".reset");
const buttons=document.querySelectorAll("button");


buttons.forEach(element => {
  element.addEventListener("click",((element)=>{
    if(element.target.value != "="){
    resultCalcul.value+=element.target.value;
    }
    else{
      resultCalcul.value=eval(resultCalcul.value);
    }
  }));

});
reset.addEventListener('click',()=>{
  resultCalcul.value="";
})
// let fr=['a','b','c'];
// fr.forEach(element => {
//   console.log(element)
// });
// fr.push('anaaa');
// fr.forEach(element => {
//   console.log(element)
// });
// const bb=()=>{
//   console.log("hhhhh");
// }
