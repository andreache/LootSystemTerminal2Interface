//Dungeon Loot System
//CA 10

//Store loot items between button clicks
const Loot = [];

//Access HTML elements by using IDS
const LootName = document.getElementById("lootName");
const LootValue = document.getElementById("lootValue");
const AddLootButton = document.getElementById("addLootButton");
const LootList = document.getElementById("lootList");
const TotalValue = document.getElementById("totalValue");
const ValidationMessage = document.getElementById("validationMessage");

 // Run this code when the Add Loot button is clicked
 AddLootButton.addEventListener("click", function()
 {
     const name = LootName.value.trim();
     const valueInput = LootValue.value;
     const value = Number(valueInput);

     // Check the input before adding it to the array
     if (name === "")
     {
         ValidationMessage.textContent = "Please enter a loot name.";
     }
     else if (valueInput === "" || isNaN(value) || value < 0)
     {
         ValidationMessage.textContent = "Please enter a valid non-negative loot value.";
     }
     else
     {
         ValidationMessage.textContent = "";

         // Store the name and numeric value together
         Loot.push({ name: name, value: value });

         // Display the updated loot list
         let lootOutput = "";

         for (let i = 0; i < Loot.length; i++)
         {
             lootOutput += "<li>" + Loot[i].name + " - " + Loot[i].value + "</li>";
         }

         LootList.innerHTML = lootOutput;

         // Calculate the total using a separate loop
         let total = 0;

         for (let i = 0; i < Loot.length; i++)
         {
             total += Loot[i].value;
         }

         TotalValue.textContent = total;

         // Clear the fields after adding an item
         LootName.value = "";
         LootValue.value = "";
     }
 });
/*
Reflection: 
When I used the breakpoint, I saw that the loot array updated after adding an item, but the webpage didn't update right away. The loot listed updated after innerHTML and the total updated after textContent. 
*/