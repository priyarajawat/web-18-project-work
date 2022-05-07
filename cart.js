
var data = JSON.parse(localStorage.getItem("cart1"));


var newdata = JSON.parse(localStorage.getItem("newcart"))|| [];


data.forEach(function(ele){
  

        var img = document.querySelector("#img");
        img.innerText = ele.image_url;
        var h2 = document.querySelector("#disc>h2");
         h2.innerText = ele.name;
         var h3 = document.querySelector(".green>p");
         h3.innerText = ele.name;
         var p = document.querySelector("#disc>h2+p");
         p.innerText = ele.strprice;
         var p2 = document.querySelector("#disc>h2+p+p");
         p2.innerText = ele.price;

         
         var btn = document.querySelector("#cart>button");
         btn.addEventListener("click" , function (){
             bookcart(ele);
         });
})

function bookcart (ele){
   console.log(ele)
}



    
  