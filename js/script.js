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
    $("#myForm").submit(function (event) {
        event.preventDefault();
        var name = parseInt($("#name").val());
        var size = parseInt($("#size").val());
        var crust = parseInt($("#crust").val());
        var topping = parseInt($("#topping").val());
        var quantity = parseInt($("input#quantity").val());
        var delivery = $("#delivery").val();

        pizzprice = prices[size - 1]

        toppizza = toppingprice[topping - 1]

        crustpizza = crustPrices[crust - 1]




        newpizzaorder = new Getpizza(pizaaprice, crustpizaa, toppizaa)


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


