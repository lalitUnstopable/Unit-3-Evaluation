var data = JSON.parse(localStorage.getItem("products"))||[]

data.map(function (el,index){

    var div=document.createElement("div")
    var img=document.createElement("img")
    var p=document.createElement("p")
    var p1=document.createElement("p")
    var p2=document.createElement("p")
    var but=document.createElement("button")
    but.setAttribute("id","remove_products")
    but.innerText="Remove Items"
    but.addEventListener("click",function(){
        removeproduct(el,index)
    });
    img.src=el.image;
    p.innerText=el.type;
    p1.innerText=el.desc;
    p2.innerText=el.price;
    div.append(img,p,p1,p2,but)
    document.querySelector("#all_products").append(div)
});

function removeproduct(el,index){
    data.splice(index,1)
    window.location.reload()
    localStorage.setItem("products",JSON.stringify(data))
};