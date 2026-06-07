function orderFood(foodName){
    alert("✅ " + foodName + " added successfully!");
}

function placeOrder(){
    alert("🎉 Order Placed Successfully!");

    let inputs = document.querySelectorAll("input");

    inputs.forEach(input=>{
        input.value="";
    });
}

function searchFood(){

    let input =
    document.getElementById("searchBox")
    .value.toLowerCase();

    let cards =
    document.getElementsByClassName("card");

    for(let i=0;i<cards.length;i++){

        let foodName =
        cards[i].getElementsByTagName("h2")[0]
        .innerText.toLowerCase();

        if(foodName.includes(input)){
            cards[i].style.display="block";
        }
        else{
            cards[i].style.display="none";
        }
    }
}
