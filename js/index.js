// Save the reference to text-field into a variable. | <input type="text">
let items = document.getElementById('items')
// Save the reference to new-item button into a variable. | <button>ADD ITEM</button>
let btn = document.getElementById('add')
// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
let ul = document.getElementById('list')
// Save the reference to paragraph for feedback | <p class="feedback"></p>
let error = document.getElementById('.feedback')
// Start function addItem.
function addItem() {
    // Create list-item and store output in a variable.
    let val = item.value;
    val = val.trim();
    // Check if user entered the value in input text-field.
    if (val.length !== 0) {
    // If so:
       // Use textContent property on created list-item
       // and assign it with the value of the text written in the text-field
        let li = document.createElement("li");
        li.innerText = val;
       // Append list item to unordered list.
        ul.appendChild(li);
       // Clear a feedback-message.
        error.innerText = "";
       // Clear the text-field.
        items.value = "";
       // Put the cursor back to text-field 
        items.focus();
    // End if.
    }else {
    // Otherwise:
       // Print the message nothing entered in the paragraph "feedback"
        error.innerText = "Nothing entered in the list"
    // End otherwise.
    }
// End function addItem.
}
// Register your function addItem for click event on button.
btn.addEventListener("click", addItem);