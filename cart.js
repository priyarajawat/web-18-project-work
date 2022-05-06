
var data = JSON.parse(localStorage.getItem("cart"));
console.log(data);

var newdata = JSON.parse(localStorage.getIt("newcart"))|| [];


data.forEach(function(ele){
    
    var img = document.querySelector("#img");
    img = ele.img;
    var h2 = document.querySelector("disc>h2");
     h2.innerText = ele.name;
     var p = document.querySelector("disc>h2+p");
     p.innerText = ele.strikeprice;
     var p2 = document.querySelector("disc>h2+p+p");
     p2.innerText = ele.price;
     
      var obj ={
          img:ele.img,
          h2: ele.name,
          p: ele.strikeprice, 
          p2:ele.price
      }
      newdata.push(obj);
      localStorage.setItem("newcart" ,JSON.stringify(newdata));
     

})