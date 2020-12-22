var input = $("#inputText");
var search = $("#searchButton");

var url = "https://controllerdata.lacity.org/resource/v2mg-qsxf.json?zip_code=";
search.click(function () {
  $.ajax({
    url: url + input.val(),
    type: "GET",
    data: {
      $limit: 3,
      $$app_token: "hsOYCdlUPwwQcEJAKfxONgoU0",
    },
  }).done(function (data) {
    alert("Retrieved " + data.length + " records from the dataset!");
    console.log(data);
  });
});
