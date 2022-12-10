
let vendor01 = {
	name: "Staples",
	min_order: 20,
	delivery_fee: 5,
	supplies: {
		"Paper": {
			0: {
				name: "Printer Paper",
				description: "odio semper cursus. Integer mollis.",
				stock: 3,
				price: 5.50
			},
			1: {
				name: "Copy Paper",
				description: "elit pede, malesuada vel, venenatis.",
				stock: 6,
				price: 6.00
			},
			2: { 
				name: "Specialty Paper",
				description: "tellus sem mollis dui, in",
				stock: 15,
				price: 11.50
			},
			3: {
				name: "Notebook",
				description: "sit amet nulla. Donec non",
				stock: 45,
				price: 3.99
			},
			4: {
				name: "Cardstock",
				description: "Lorem ipsum dolor sit amet,",
				stock: 45,
				price: 10.50
			},
			5: {
				name: "Calendar",
				description: "Aliquam tincidunt, nunc ac mattis",
				stock: 6,
				price: 7.00
			}
		},
		"Writing Supplies": {
			6: {
				name: "Pen",
				description: "tellus. Aenean egestas hendrerit neque",
				stock: 60,
				price: 4.99
			},
			7: {
				name: "Mechanical Pencil Lead",
				description: "magna, malesuada vel, convallis in,",
				stock: 8,
				price: 4.00
			},
			8: {
				name: "Pencils (pack of 10)",
				description: "nec quam. Curabitur vel lectus.",
				stock: 33,
				price: 9.75
			},
			9: {
				name: "Markers",
				description: "Aliquam tincidunt, nunc ac mattis",
				stock: 4,
				price: 13.33

			},
			10: {
				name: "Eraser",
				description: "odio. Etiam ligula tortor, dictum",
				stock: 17,
				price: 1.50
			},
			11: {
				name: "Pencil Sharpener",
				description: "tincidunt, nunc ac mattis ornare,",
				stock: 2,
				price: 3.99
			},
			12: {
				name: "Fine Writing Pen Case",
				description: "Sed pharetra, felis eget varius",
				stock: 6,
				price: 15.99
			}
		},
		"Accessories": {
			13: {
				name: "Scissors",
				description: "Nam tempor diam dictum sapien.",
				stock: 10,
				price: 9.99
			},
			14: {
				name: "Glue Sticks (pack of 3)",
				description: "ipsum primis in faucibus orci",
				stock: 19,
				price: 4.99
			},
			15: {
				name: "3-Digit Combination Lock",
				description: "aliquet. Proin velit. Sed malesuada",
				stock: 4,
				price: 11.99
			}
		}
	}
}

let vendor02 = {
	name: "Indigo",
	min_order: 15,
	delivery_fee: 3.99,
	supplies: {
		"Creativity": {
			0: {
				name: "ABT MARKERS, PINK 5PK",
				description: "Sed auctor odio a purus.",
				stock: 30,
				price: 10.50
			},
			1: {
				name: "SET 0F 12 DUSTLESS CHALK",
				description: "quis arcu vel quam dignissim",
				stock: 10,
				price: 12.55
			},
			2: {
				name: "SET OF 12 DUAL ENDED COLOURING PENCILS",
				description: "diam luctus lobortis. Class aptent",
				stock: 11,
				price: 12.99
			}
		},
		"Journals": {
			3: {
				name: "SET OF 3 SPIRAL NOTEBOOKS, LAVENDER",
				description: "eget, volutpat ornare, facilisis eget",
				stock: 8,
				price: 15.00
			},
			4: {
				name: "COPTIC TAB NOTEBOOK, PINK",
				description: "euismod enim. Etiam gravida molestie",
				stock: 9,
				price: 11.00
			},
			5: {
				name: "A5 3-SUBJECT SPIRAL NOTEBOOK, ABSTRACT",
				description: "Donec vitae erat vel pede",
				stock: 14,
				price: 12.99
			}
		}
	}
}

let vendor03 = {
	name: "Grand and Toy",
	min_order: 35,
	delivery_fee: 8,
	supplies: {
		"Whiteboards": {
			0: {
				name: "Cork Board",
				description: "Nunc sed orci lobortis augue",
				stock: 7,
				price: 19.00
			},
			1: {
				name: "Glass Dry-Erase Board",
				description: "nisl. Quisque fringilla euismod enim.",
				stock: 2,
				price: 149.00
			},
			2: {
				name: "Planning Board",
				description: "arcu. Sed et libero. Proin",
				stock: 19,
				price: 11.99
			}

		},
		"Organizers": {
			3: {
				name: "Desk Pad",
				description: "euismod enim. Etiam gravida molestie",
				stock: 4,
				price: 4.50
			},
			4: {
				name: "Document Holder",
				description: "lobortis quis, pede. Suspendisse dui",
				stock: 19,
				price: 5.99
			},
			5: {
				name: "Cubicle Hook",
				description: "lobortis quam a felis ullamcorper",
				stock: 11,
				price: 1.99
			}
		},
		"Paper": {
			6: {
				name: "Coloured Printer Paper",
				description: "sed pede. Cum sociis natoque",
				stock: 6,
				price: 7.00
			},
			7: {
				name: "Photo Paper",
				description: "Nunc laoreet lectus quis massa.",
				stock: 19,
				price: 17.70
			},
			8: {
				name: "Thermal Roll",
				description: "Donec egestas. Duis ac arcu.",
				stock: 4,
				price: 6.99
			}
		},
		"Craft Supplies": {
			9: {
				name: "Stickers (pack of 100)",
				description: "luctus ut, pellentesque eget, dictum",
				stock: 60,
				price: 3.99
			},
			10: {
				name: "Pom Poms (pack of 300)",
				description: "Nam ac nulla. In tincidunt",
				stock: 3,
				price: 8.00
			},
			11: {
				name: "Glitter Glue (300ml)",
				description: "interdum enim non nisi. Aenean",
				stock: 40,
				price: 5.99
			}
		},
		"Writing Supplies": {
			12: {
				name: "Highlighters (pack of 5)",
				description: "Phasellus dolor elit, pellentesque a,",
				stock: 19,
				price: 7.95
			},
			13: {
				name: "Blue Ink Pens (pack of 10)",
				description: "fames ac turpis egestas. Aliquam",
				stock: 3,
				price: 11.50
			},
			14: {
				name: "Sharpie Markers (pack of 3)",
				description: "aliquet odio. Etiam ligula tortor,",
				stock: 5,
				price: 5.99
			},
			15: {
				name: "Pen Refills (pack of 20)",
				description: "semper, dui lectus rutrum urna,",
				stock: 67,
				price: 10.58
			}
		},
		"Storage": {
			16: {
				name: "Storage Box",
				description: "at auctor ullamcorper, nisl arcu",
				stock: 9,
				price: 5.78
			},
			17: {
				name: "Binding Cases (pack of 10)",
				description: "penatibus et magnis dis parturient",
				stock: 39,
				price: 7.99
			},
			18: {
				name: "File Storage Drawer",
				description: "Pellentesque ut ipsum ac mi",
				stock: 2,
				price: 46.50
			},
			19: {
				name: "Portable Plastic File/Storage Box",
				description: "rhoncus. Proin nisl sem, consequat",
				stock: 5,
				price: 16.79
			}
		},
		"Security": {
			20: {
				name: "Key Cabinet",
				description: "mus. Donec dignissim magna a",
				stock: 1,
				price: 115.00
			},
			21: {
				name: "Key Safe",
				description: "cursus. Integer mollis. Integer tincidunt",
				stock: 5,
				price: 57.99
			}
		}
	}
}

//global variables
let vendors = { "Staples": vendor01, "Indigo": vendor02, "Grand and Toy": vendor03 };
let select = document.getElementById("vendor-select");
let order = {};
let tax = 0
let deliveryFee = 0
let total = 0


//main where functions are called
function init() {
	defaultPage();
	basicInfo();
	grabCurrentCategory();
	subtTotal();
	genSubmitButton();
}

//default page
function defaultPage() {
	let defaultCategories =  Object.keys(vendor01.supplies)
	document.getElementById("vendor-select").innerHTML = genSelList();
	document.getElementById("vendor-name").innerHTML = "Staples"
	document.getElementById("vendor-min-order").innerHTML = "Minimum Order: $20";
	document.getElementById("vendor-shipping").innerHTML = "Delivery: $5";
	
	document.getElementById("delivery-fee").innerHTML = "Delivery: " + "$5.00";
		
	//default category and supplies
	let defaultCategoryList= defaultCategories.map((category) => {
			return `<a href="#">${category}</a>`
		}
		)
	document.getElementById("Categories").innerHTML = defaultCategoryList.join(" <br><br> ");
	document.getElementById("Items").innerHTML = genProductList("Paper");
	

	}



//display and swap Vendor name, Minimum Order, Shipping and Categories based off of vendor selected
function basicInfo(){
	
	//event listener for vendor select
	document.getElementById("vendor-select").addEventListener("change", ()  => {
		if (order != {}){
			
			//clear order if vendor is change all contents of page when swapped
			if (confirm("Are you sure you want to change vendors? Your current order will be lost.") == true)
			{
				order = {};
				let currentSelected = select.selectedIndex;
				let deliveryFee = vendors[select.options[currentSelected].text].delivery_fee;
				document.getElementById("vendor-name").innerHTML = select.options[currentSelected].text;
		
		
				//display vendor minimum order and shipping
				let vendor = vendors[select.options[currentSelected].text];
				//change and display items in vendor
				document.getElementById("vendor-min-order").innerHTML = "Minimum Order: $" + vendor.min_order;
				document.getElementById("vendor-shipping").innerHTML = "Delivery: $" + vendor.delivery_fee;
				document.getElementById("delivery-fee").innerHTML = "Delivery Fee: $" + deliveryFee.toFixed(2);
		
				//grab object keys and display in category selection
				let categories = Object.keys(vendor.supplies)
				let categoryList = categories.map((category) => {
					return `<a href="#">${category}</a>`
				}
				)

				//display and change items based off of category selected
				if ( select.options[currentSelected].text == "Indigo") {
					document.getElementById("Items").innerHTML = genProductList("Creativity");
				}
				else if (select.options[currentSelected].text == "Grand and Toy") {
					document.getElementById("Items").innerHTML = genProductList("Whiteboards");
				}
				else{
					document.getElementById("Items").innerHTML = genProductList("Paper");
					
				}
				document.getElementById("Categories").innerHTML = categoryList.join(" <br><br> ");

				//reset order display
				document.getElementById("Order").innerHTML = "";
				 totalPrice = 0;
				 tax = 0
				 deliveryFee = 0
				 total = 0	
				 document.getElementById("sub-total").innerHTML = "Subtotal: $" + totalPrice.toFixed(2);
				 document.getElementById("tax").innerHTML = "Tax $" + tax.toFixed(2)
				 document.getElementById("grand-total").innerHTML = "Grand Total: $" + total.toFixed(2);
	
			}
		}
		}



	);
}



//generate vendor select list
function genSelList() {

	let result = '<select name="vendor-select" id="vendor-select">';
	Object.keys(vendors).forEach(elem => {
		result += `<option value="${elem}">${elem}</option>`
	});
	result += "</select>";
	return result;
}


//event listeners
function grabCurrentCategory() {

	//event listener for category selection and keeps track of current category
	document.getElementById("Categories").addEventListener("click", (e) => {
		let categoryName = e.target.innerHTML;
		//display items based off of category selected
		document.getElementById("Items").innerHTML = genProductList(categoryName);
	
	});

	//event listener that calls add to cart when add to cart button is clicked
	document.getElementById("Items").addEventListener('click', (event) => {
		const [ product,CategoryName ] = event.target.id.split('-');
		addToCart(product,CategoryName);
	  });

	  //event listener that calls remove from cart when remove from cart button is clicked
	document.getElementById("Order").addEventListener('click', (event) => {
		const [ product, categoryName] = event.target.id.split('-');
		removeFromCart(product,categoryName);
	  });
}
	
//generate product list function based off category selected
function genProductList(CategoryName) {

	let currentSelected = select.selectedIndex;
	let categories = vendors[select.options[currentSelected].text];
	let products = categories.supplies[CategoryName];

	let productList = Object.keys(products).map((product) => {
		return `<div class="product">
				<div class="product-name">${products[product].name} $${products[product].price} (stock = ${products[product].stock})<div class="add-to-cart"><img id="${product}-${CategoryName}" src="add.png" width="15 px"></div> </div>
				<div class="product-description">${products[product].description}</div>
				</div>`
	});

	return productList.join("<br>");


}



//add to cart function which is called when add to cart button is clicked
function addToCart(id, category) 	{	
	let currentSelected = select.selectedIndex;
	let categories = vendors[select.options[currentSelected].text];
	let products = categories.supplies[category];
	let item = products[id];
	

	if (item.stock > 0) {
		if (order[id] == undefined) {
			order[id] = item;
			order[id].quantity = 1;
			item.stock -= 1;
		}
		else {
		
			order[id].quantity += 1;
			item.stock -= 1;
		}
	}
	else {
		alert("Out of stock");
		totalPrice -= order[item].price;
		

	}
	//console.log(order[id]);

	//display subtotal, tax, and grand total
	document.getElementById("Order").innerHTML = subtTotal();
	//display items in cart
	document.getElementById("Order").innerHTML = genCartList();

}

function submit(){
	//event listener for submit button
	document.getElementById("submit").addEventListener("click", function() {

		//if total is less than vendor min order then alert user
		let currentSelected = select.selectedIndex;
		let vendor = vendors[select.options[currentSelected].text];
		if (totalPrice < vendor.min_order) {
			alert("Minimum order not met");
		}

		//else submit order and reset page
		else {
			alert("Order submitted");
			window.location.reload();


		}
	});

		
	
}

//function to create submit button and call submit function
function genSubmitButton() {
	let submitButton = document.createElement("button");
	submitButton.innerHTML = "Submit";
	submitButton.id = "submit";
	document.getElementById("right").appendChild(submitButton);
	submit();
}
;



function subtTotal(){
	
	//dont calculate previous total
	//for each item in order multiply price by quantity
	//add to total
	totalPrice = 0;
	for (let item in order) {
		totalPrice += order[item].price * order[item].quantity;
	}
	let currentSelected = select.selectedIndex;
	let tax = totalPrice * 0.10;
	let deliveryFee = vendors[select.options[currentSelected].text].delivery_fee;
	let total = totalPrice + tax + deliveryFee;

	document.getElementById("sub-total").innerHTML = "Subtotal: $" + totalPrice.toFixed(2);
	document.getElementById("tax").innerHTML = "Tax $" + tax.toFixed(2)
	document.getElementById("grand-total").innerHTML = "Grand Total: $" + total.toFixed(2);


}


//remove from cart function which is called when remove from cart button is clicked
function removeFromCart(id) {
	console.log(order[id].stock);
	if(order[id]) {
		order[id].quantity -= 1;
		order[id].stock += 1;
		
		totalPrice -= order[id].price;
		
		Object.keys(order).forEach((item) => {
			totalPrice -= order[item].price;
	
		});
		subtTotal();
		
		if (order[id].quantity == 0) {
			delete order[id];
		}
	}
	else {
		alert("Item not in cart");
	}

	//update display
	document.getElementById("Order").innerHTML = genCartList();


}


//generate cart list function
function genCartList(){
	
	
	let orderList = Object.keys(order).map((item) => {
		return `<div class="product">
				<div class="product-name"> ${order[item].quantity} x ${order[item].name} ($${order[item].price})<div class="add-to-cart"><img id="${item}-${order}" src="remove.png" width="15 px"></div> </div> </div>
				</div>`
	});

	return orderList.join("<br>");
	
}








