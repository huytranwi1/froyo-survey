const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false
};


//modify the value
customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];

// delete some customer info

delete customer["zipCode"];
delete customer["favoriteStore"];

// adding using dot notation
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"]
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

// print just the key
console.log(Object.keys(customer));
