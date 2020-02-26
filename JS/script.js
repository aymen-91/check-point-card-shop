
const quantity = Array.from(document.querySelectorAll(".quantity"))
const price = Array.from(document.querySelectorAll(".price"))
const add =Array.from( document.querySelectorAll('.addButton'))
const reduce =Array.from(document.querySelectorAll('.reduceButton'))



reduce.map((el, i) => {
 
   el.addEventListener("click", function() {
     Number(el.nextElementSibling.innerText) > 0
       ? el.nextElementSibling.innerText--
       : (el.nextElementSibling.innerText = 0)
 
       uppdateTotal();
   })
 })

for (let el of add){
    el.addEventListener('click' ,(e) =>{
      console.log(e)
      console.log(e.target)
      el.previousElementSibling.innerText =
      Number(el.previousElementSibling.innerText) + 1;
      uppdateTotal();
    }  
    )
}


  var remove= document.getElementsByClassName('remove-button') 
  for (i=0; i < remove.length ;i++){
    remove[i].addEventListener ('click', function(e){
           console.log(e.target.parentElement.parentElement)
           e.target.parentElement.parentElement.remove()
           uppdateTotal()
          }    
    )
  }

  var like= document.getElementsByClassName('like') 
  for (i=0; i < remove.length ;i++){
  
    like[i].addEventListener ('click', function(e){
      
            if (e.target.style.color == "red")
             {e.target.style.color = "black"} else 
            {e.target.style.color ="red"}
       
          
          }    
    )
  }


function uppdateTotal(){
let total = 0
   var row = document.getElementsByClassName('row') 
   for (i=1; i < row.length;i++){
   let p = row[i].getElementsByClassName("price")[0].innerText
   let q = row[i].getElementsByClassName("quantity")[0].innerText
   total += p* q
  }
  document.getElementById('total').innerHTML=total
}

