console.log('Hello from Script');
console.log(window)
console.log(`Hey man, have been hacked, your url is ${location.href}`)

console.log(document.getElementById("myBtn"));
console.log(document.getElementById("myPara"));

//Example 1: Acessing DOM Elements

document.getElementById("myBtn").addEventListener('click', () => {
    document.getElementById("myPara").innerHTML = "You've changed the paragraph by clicking the btn";
})

//Example 2

document.getElementById("highlightFirstCity").addEventListener('click', function () {
    document.getElementById("citiesList").firstElementChild.classList.add('highlight')
})


// Example 3 (Manipulating DOM Element)

document.getElementById("changeOrder").addEventListener('click', function () {
    let text = document.getElementById("coffeeType")
    text.textContent = "Espresso";
    text.style.backgroundColor = 'yellowgreen'

})

//Example 4 Creating and Inserting Element

document.getElementById("addNewItem").addEventListener(
    'click', function () {

        let newItem = document.createElement('li')
        newItem.textContent = 'Egg'
        document.getElementById("shoppingList").appendChild(newItem)
    }
)

//Example 5: Removing the DOM Element

document.getElementById('removeLastTask').addEventListener('click',
    function () {
        let taskList = document.getElementById("taskList")
        taskList.lastElementChild.remove();
    }
)

//Example 6: Event Handling in the DOM

document.getElementById("clickMeBtn").addEventListener("dblclick",
    function () {
        alert('You Clicked Button')
    }
)

//Example 7: Event Deligation

document.getElementById("teaList").addEventListener("click",
    function (event) {
        if (event.target && event.target.matches(".teaItem"))
            alert(event.target.textContent);
    }
)

//Example 8: Form Handling  
document.getElementById("feedBackForm").addEventListener('submit',
    function (e) {
        e.preventDefault();
        let feedBackSubmited = document.getElementById('feedBackInput')
        let feedback = feedBackSubmited.value;
        let setPara = `The feedback Submitted by you is : ${feedback}`
        document.getElementById('feedBackDisplay').textContent = setPara;
    }
)


//Example 9: DOM Content Loaded

document.addEventListener('DOMContentLoaded', function () {
    alert('Click this to Fully Load the DOM')
    document.getElementById("domStatus").textContent = "DOM Fully Loaded"
}
)

//Example 10: CSS Classes Manipulation

document.getElementById('toggleHighlight').addEventListener(
    'click', function () {
        document.getElementById('descriptionText').classList.toggle('highlight')
    }
)