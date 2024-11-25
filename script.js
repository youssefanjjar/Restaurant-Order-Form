function changeNbrPersonne(selectElement, countFieldId) {
    const countField = document.getElementById(countFieldId);
  
    if (selectElement.value === "none") {
      countField.value = 0;
    } else if (countField.value == 0) {
      countField.value = 1;
    }
  }
  
  function generateBill() {
    const starter = document.getElementById("starter");
    const starterCount = parseInt(document.getElementById("starterCount").value);
    const main = document.getElementById("main");
    const mainCount = parseInt(document.getElementById("mainCount").value);
    const dessert = document.getElementById("dessert");
    const dessertCount = parseInt(document.getElementById("dessertCount").value);
  
    const prices = {
      salad: 5,
      soup: 4,
      steak: 15,
      pasta: 12,
      cake: 6,
      icecream: 4
    };
  
    let total = 0;
    let billDetails = "Your Order:\n";
  
    if (starter.value !== "none") {
      const starterPrice = prices[starter.value] * starterCount;
      billDetails += `Starter: ${starter.value} x ${starterCount} = $${starterPrice}\n`;
      total += starterPrice;
    }
  
    if (main.value !== "none") {
      const mainPrice = prices[main.value] * mainCount;
      billDetails += `Main Course: ${main.value} x ${mainCount} = $${mainPrice}\n`;
      total += mainPrice;
    }
  
    if (dessert.value !== "none") {
      const dessertPrice = prices[dessert.value] * dessertCount;
      billDetails += `Dessert: ${dessert.value} x ${dessertCount} = $${dessertPrice}\n`;
      total += dessertPrice;
    }
  
    if (total > 20) {
      billDetails += "Congratulations! You get a free dessert!\n";
    }
  
    billDetails += `\nTotal: $${total}`;
    document.getElementById("bill").value = billDetails;
  }
  