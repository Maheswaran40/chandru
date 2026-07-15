let username = localStorage.getItem("username")

document.getElementById("heading").innerHTML = `Welcome to home page ${username}`


const product = [
    { id: 1, name: "samsung", pirce: 20000, image: "../images/samsung.png" },
    { id: 2, name: "vivo", pirce: 180000, image: "../images/vivo.png" },
    { id: 3, name: "oppo", pirce: 10000, image: "../images/samsung.png" },
    { id: 4, name: "iphone", pirce: 40000, image: "../images/vivo.png" },
]


function showProduct() {
    let data = ""
    product.map((v) => (
        data += `
    <div class="col-lg-3 col-md-6 col-12">
        <div class="card">
            <img src="${v.image}" height="200px  width="200px" alt="image${v.id}">
            <div class="card-body">
                <h4>Name:${v.name}</h4>
                <h4>Price:${v.pirce}</h4>
                <button class="btn btn-primary" onclick="CartFun(${v.id})">Cart</button>
            </div>
        </div>
    </div>
    `
    ))

    document.getElementById("showData").innerHTML = data

}
showProduct()



function searchFun(e) {
    e.preventDefault()
    let searchdata = document.getElementById("input").value
    console.log("searchdata", searchdata);

    let searchOutput = product.filter((v) => v.name.toLowerCase().trim().includes(searchdata.toLowerCase().trim()) || v.pirce <= Number(searchdata))
    console.log(searchOutput);

    let data = ""
    searchOutput.map((v) => (
        data += `
    <div class="col-lg-3 col-md-6 col-12">
        <div class="card">
            <img src="${v.image}" height="200px  width="200px" alt="image${v.id}">
            <div class="card-body">
                <h4>Name:${v.name}</h4>
                <h4>Price:${v.pirce}</h4>
                <button class="btn btn-primary" onclick="CartFun(${v.id})">Cart</button>
            </div>
        </div>
    </div>
    `
    ))

    document.getElementById("showSearchData").innerHTML = data

}



var cart = []


function CartFun(proID) {
   
    let cartData = product.find((v) => v.id == proID)
    console.log("cartData", cartData);

    let existing = cart.find((v) => v.id == proID)
    console.log("existing",existing);
    
    if (!existing) {
        cartData.qunatity = 1
         cart.push(cartData)
         alert("data added")
         
    }
    else {
       cartData.qunatity++
       alert("quantity increased")
        
    }
    console.log("cart", cart);
    showCart(cart)

}




function showCart(cart) {
    let data = ""
    cart.map((v) => (
        data += `
    <tr>
              <th><img src="${v.image}" height="100px" width="100px" alt=""></th>
              <th>${v.name}</th>
              <th>${v.pirce}</th>
              <th>${v.qunatity}</th>
              <th><button class="btn-close" onclick="removeData(${v.id})"></button></th>
            </tr>
    `
    ))

    document.getElementById("cartDatashow").innerHTML = data

}

function removeData(proID){
    let removeItem=cart.find((v)=>v.id==proID)
    if(removeItem.qunatity > 1){
        removeItem.qunatity--
        alert("quantity decreased")
    }
    else{
        cart=cart.filter((v)=>v.id!=proID)
alert("data remover")
    }
    showCart(cart)
}