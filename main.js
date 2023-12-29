function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

function test() {
    var selectBox = document.getElementById("btn");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    console.log(selectedValue);
    if (selectedValue != "Почати лекцію")
        window.location.replace("/UsingSite/KiberBez.html");
}
