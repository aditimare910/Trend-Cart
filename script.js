

// Search Products

function searchProduct() {
    let filter = document.getElementById("searchInput").value.toLowerCase();

    let products = document.querySelectorAll(".product-card");

    products.forEach(function(product) {
        let name = product.querySelector("h3").textContent.toLowerCase();

        if (name.includes(filter)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}


// Add Product to Cart

let addButton = document.getElementById("addCart");

if(addButton){

    addButton.addEventListener("click", function(){

     let quantity = document.querySelector("input[type='number']").value;

        let product = {
            name: "Running Shoes",
            price: 1999,
            quantity: quantity
        };

        localStorage.setItem(
            "cartProduct",
            JSON.stringify(product)
        );

        alert("Product added to cart!");

    });

}

// Display Cart Product

let cartItems = document.getElementById("cartItems");
let totalPrice = document.getElementById("totalPrice");

if(cartItems){

    let product = JSON.parse(localStorage.getItem("cartProduct"));

    if(product){

        cartItems.innerHTML = `
<tr>
    <td>${product.name}</td>
    <td>₹${product.price}</td>
    <td>${product.quantity}</td>
    <td>
        <button id="removeBtn">Remove</button>
    </td>
</tr>
`;
        

        totalPrice.innerHTML = "Total: ₹" + (product.price * product.quantity);

    }

}

document.addEventListener("click", function(e){

    if(e.target.id === "removeBtn"){

        localStorage.removeItem("cartProduct");

        location.reload();

    }

});

// Back to Top

let topButton = document.getElementById("topBtn");

if (topButton) {

    window.onscroll = function () {

        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }

    };

}

function topFunction() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
