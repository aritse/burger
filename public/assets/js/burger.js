$(function() {
  $(".devour-button").on("click", function(event) {
    const id = $(this).data("id");
    $.ajax({
      method: "PUT",
      url: "/api/burgers/" + id,
      data: ///////////////////////// needs to pass the burger name to the PUT requests
    }).then(() => {
      console.log("devoured burger id:", id);
      location.reload();
    });
  });
});
