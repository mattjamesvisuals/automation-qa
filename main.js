
document.getElementById("button").onclick = function displayPage() {

    let inputValue = document.getElementById("input").value;
    //alert(inputValue);
    //window.open(`https://${inputValue}`);
    const destination = document.getElementById("destination")
    destination.src = `https://www.${inputValue}.com?googfc`;
    destination.style.display = "inline";
}
