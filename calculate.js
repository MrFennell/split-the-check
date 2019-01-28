function calculate(){
  var cost = document.getElementById("total_cost").value;
  var service = document.getElementById("service").value;
  var split = document.getElementById("split").value;

  //alert the user to enter a check value if blank and stop scripts
  if (cost === 0 || cost === ""){
    alert("Please enter an amount!");
    return;
  }
  //set the number of people to 1 if it set to zero/blank to prevent error
  if (split === 0 || split === ""){
    split = 1;
  }

  //calculate the tip per person and round
  var tip_per_person = (cost * service) / split;
  tip_per_person = Math.round(tip_per_person * 100) / 100;
  tip_per_person = tip_per_person.toFixed(2);

  //calculate the total tip and round
  var tip_total = (cost * service);
  tip_total = Math.round(tip_total * 100) / 100;
  tip_total = tip_total.toFixed(2);

  //calculate the total cost of the meal
  var total_cost = parseFloat(cost) + parseFloat(tip_total);
  total_cost = Math.round(total_cost * 100) / 100;
  total_cost = total_cost.toFixed(2);

  //calculate the total cost per costPerPerson
  var total_per_person = (total_cost / split);
  total_per_person = Math.round(total_per_person * 100) / 100;;
  total_per_person = total_per_person.toFixed(2);

  //display the results
  document.getElementById("resultContainer").style.display = "block";
  document.getElementById("totalPerPerson").innerHTML = "$" + total_per_person;
  document.getElementById("tipPerPerson").innerHTML = "$" + tip_per_person;
  document.getElementById("totalTip").innerHTML = "$" + tip_total;
  document.getElementById("totalCost").innerHTML = "$" + total_cost;
}
