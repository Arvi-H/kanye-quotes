document.getElementById("myBtn").addEventListener("click", function(event)) {
    event.preventDefault();
    //const element = document.getElementById("getquotes");
    //element.addEventListener("click", function1);

    //function function1 {
    const myurl = "https://api.kanye.rest";
    console.log(myurl);
    fetch(myurl)
        .then(function(response)) {
            console.log(response);
            return response.json();
        }).then(function(json) {
    console.log(json);
    let page = "<p>";
    page += json.quote[];
    page += "</p>";
    document.getElementById("getquotes").innerHTML = page;
});
//}
}
