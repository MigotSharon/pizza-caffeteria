function Getpizza(name, size, crust, topping) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;

}

Getpizza.prototype.fullorder = function () {
    return this.name + ", " + this.size + ", " + this.crust + ", " + this.topping

};

function Total(prices, crustprices, toppingprices, number) {
    this.prices = prices;
    this.crustprices = crustprices;
    this.toppingprices = toppingprices;
    this.number = number;
}
Total.prototype.totalprice = function () {
    return ((this.prices + this.crustprices + this.toppingprices) * this.number);
}

var prices = [1000, 1700, 1900]
var toppingprices = [120, 40, 95, 50, 125, 60]
var crustPrices = [109, 115, 130]

var pizzasize = ['Small', 'Medium', 'Large']
var pizzatopping = ['Tomato', 'Onions', 'Mushroom', 'Green Pepper', 'Spinach', 'Beef Peperoni', 'Periperi Chicken']
var pizzacrust = ['Crispy', 'Stuffed', 'Gluten-free']

$(document).ready(function () {
    $("#form").click(function (event) {
        event.preventDefault();
        var name = ($("#name").val());
        alert(name);
        var size = parseInt($("#size").val());
        alert(size);
        var crust = parseInt($("#crust").val());
        alert(crust);
        var topping = parseInt($("#topping").val());
        alert(topping);
        var number = parseInt($("#number").val());
        alert(number);

        var pizzasize = pizzasize[size - 1]
        var pizzacrust = pizzacrust[crust - 1]
        var pizzatopping = pizzatopping[topping - 1]



        pizaaprice = prices[size - 1]

        toppizaa = toppingprices[topping - 1]

        crustpizaa = crustPrices[crust - 1]

        newpizzaorder = new Getpizza(name, pizzasize, pizzacrust, pizzatopping)

        newTotal = new Total(pizaaprice, crustpizaa, toppizaa, number)


        if (number) {
            alert("Your order is" + newTotal.totalprice())
            console.log(newTotal.totalprice())
        }
        if (number) {
            alert("Your pizza order" + newpizzaorder.fullorder())
            console.log(newpizzaorder.fullorder())
        }

    });

});
$(function () {
    $("#delivery").click(function () {
        // $("#data").show();
        let inputedName = $("#name").val();
        let inputedPhone = $("#phone").val();
        let inputedLocation = $("#location").val();
        alert(inputedName + " " + "We have recieved your order and the delivery wil be made at " + inputedLocation)
    });

    $("#pick").click(function () {
        alert("Thank you for choosing Us")
    })


});