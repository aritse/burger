$(function() {
  $(".devour-btn").click(function() {
    const id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      method: "PUT",
      data: { devoured: 1 }
    })
      .then(() => location.reload())
      .catch(err => console.log(err));
  });

  $("#add-form").submit(function(event) {
    event.preventDefault();
    const burgerName = { burger_name: $("#burger-name").val() };
    console.log("burgerName", burgerName);

    $.ajax("/api/burgers/", {
      method: "POST",
      data: burgerName
    })
      .then(() => location.reload())
      .catch(err => console.log(err));
  });
});
