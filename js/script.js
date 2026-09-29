
$(function(){
  const page = document.body.dataset.page;
  $(".nav-links a").each(function(){
    if($(this).data("page") === page) $(this).addClass("active");
  });
  $("#menuBtn").on("click", function(){
    $(".nav-links").toggleClass("open");
    $(this).find("i").toggleClass("fa-bars fa-xmark");
  });
  $(".nav-links a").on("click", function(){
    $(".nav-links").removeClass("open");
    $("#menuBtn i").removeClass("fa-xmark").addClass("fa-bars");
  });
  $("#year").text(new Date().getFullYear());
  $("#contactForm").on("submit", function(e){
    e.preventDefault();
    $("#formMessage").text("Thank you! Your message form is ready. Connect this form to a backend or Formspree when you deploy it.");
    this.reset();
  });
});
