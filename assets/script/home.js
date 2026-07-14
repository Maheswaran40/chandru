let username = localStorage.getItem("username")

document.getElementById("heading").innerHTML = `Welcome to home page ${username}`


const product = [
    { id: 1, name: "samsung", pirce: 20000, image: "../images/samsung.png" },
    { id: 1, name: "samsung", pirce: 20000, image: "../images/samsung.png" },
    { id: 1, name: "samsung", pirce: 20000, image: "../images/samsung.png" },
    { id: 2, name: "vivo", pirce: 180000, image: "../images/vivo.png" },
    { id: 3, name: "oppo", pirce: 10000, image: "../images/samsung.png" },
    { id: 4, name: "iphone", pirce: 40000, image: "../images/vivo.png" },
]


function showProduct(){
    let data=""
product.map((v)=>(
    data+=`
    <div class="col-lg-3 col-md-6 col-12">
        <div class="card">
            <img src="${v.image}" height="200px  width="200px" alt="image${v.id}">
            <div class="card-body">
                <h4>Name:${v.name}</h4>
                <h4>Price:${v.pirce}</h4>
                <button class="btn btn-primary">Cart</button>
            </div>
        </div>
    </div>
    `
))

document.getElementById("showData").innerHTML=data

}
showProduct()



function searchFun(e){
e.preventDefault()
let searchdata=document.getElementById("input").value
console.log("searchdata",searchdata);

let searchOutput=product.filter((v)=>v.name.toLowerCase().trim().includes(searchdata.toLowerCase().trim()) || v.pirce <= Number(searchdata))
console.log(searchOutput);

   let data=""
searchOutput.map((v)=>(
    data+=`
    <div class="col-lg-3 col-md-6 col-12">
        <div class="card">
            <img src="${v.image}" height="200px  width="200px" alt="image${v.id}">
            <div class="card-body">
                <h4>Name:${v.name}</h4>
                <h4>Price:${v.pirce}</h4>
                <button class="btn btn-primary">Cart</button>
            </div>
        </div>
    </div>
    `
))

document.getElementById("showSearchData").innerHTML=data

}


