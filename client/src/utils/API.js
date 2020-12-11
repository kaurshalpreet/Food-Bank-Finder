<html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
</head>
<body>
    <input id="inputText" type="text">
    <button id="searchButton"> Search </button>
    <script>
        var input = $("#inputText");
        var search = $("#searchButton");

        var url = "https://controllerdata.lacity.org/resource/v2mg-qsxf.json?zip_code="
        search.click(function(){
        $.ajax({
    url: url + input.val(),
    type: "GET",
    data: {
      "$limit" : 3,
      "$$app_token" : "hsOYCdlUPwwQcEJAKfxONgoU0"
    }
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});
});
    </script>
</body></html>