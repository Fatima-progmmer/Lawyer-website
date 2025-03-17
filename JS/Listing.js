document.getElementById("searchIcon").addEventListener("click", function () {
    let searchText = document.getElementById("searchInput").value;
    if (searchText.trim() !== "") {
        document.body.classList.add("fade-out");
        setTimeout(() => {
            window.location.href = "HTML/searching result.html";
                }, 700); 
            }
        });

document.getElementById("searchInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("searchIcon").click();
            }
        });
