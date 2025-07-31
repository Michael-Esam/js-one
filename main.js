let inNum = document.querySelector('[name="elements"]');
let inTxt = document.querySelector('[name="texts"]');
let inCreate = document.querySelector('[name="create"]') ;
let inSel = document.querySelector('[name="type"]') ;

let res = document.querySelector(".results");
inCreate.onclick = function (e){
   e.preventDefault()
   res.innerHTML=""
   for (let i=1; i <= +inNum.value; i++){
      let a = document.createElement("div");
      let txt = document.createTextNode(inTxt.value)
      if(inSel.value==="Section"){
         a.className="box"
      }else{
         a.className="box-two"
      }
      a.id=`"id-${i}"`
      a.title="Element"
      a.appendChild(txt)
      res.appendChild(a)
   }
}