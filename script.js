//your code here!

const mainList = document.getElementById("infi-list");
function addListItems(count) {
    for (let i = 0; i < count; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Item ${mainList.children.length + 1}`;
        mainList.appendChild(listItem);
    }
}
addListItems(10);
mainList.addEventListener("scroll", () => {
	if (mainList.scrollTop + mainList.clientHeight > mainList.scrollHeight-1) {
        // Add 2 more list items when the end is reached
		alert("Reached bottom");
        addListItems(2);
    }
});









