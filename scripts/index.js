//store the products array in localstorage as "products"

function Products(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;

}

function inputData(){
    event.preventDefault();
    document.querySelector("#products");

    let Type=products.type.value;
    let Desc=products.desc.value;
    let Price=products.price.value;
    let Image=products.image.value;

    let data=new Products(Type,Desc,Price,Image);

    let arr=JSON.parse(localStorage.getItem("products")) || [];
     
    arr.push(data);

    console.log(arr)

    localStorage.setItem("products",JSON.stringify(arr));

    document.querySelector("#type").value=null;
    document.querySelector("#desc").value=null;
    document.querySelector("#price").value=null;
    document.querySelector("#image").value=null;


}
