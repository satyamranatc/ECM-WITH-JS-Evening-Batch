let ProductContainer = document.getElementById("ProductContainer");

function DisplayData(Data)
{
    Data.forEach((e) => 
    {
        ProductContainer.innerHTML +=
        `
        <div class="Product-Card">
        <div class="Product-Image">
            <img src=${e.image} alt="">
        </div>
        <div class="Product-Info">
            <h2>${e.title}</h2>
            <h3>Price: ${e.price}</h3>
            <p class = "Desc">Description: ${e.description}</p>
            <button>Buy Now</button>
            <button>Add To Cart</button>
        </div>
    </div>

        `
    });
}



async function GetProductData()
{

    let Data = await fetch("https://fakestoreapi.com/products");
    Data = await Data.json();
    console.log(Data)
    DisplayData(Data);
    
}

GetProductData()
