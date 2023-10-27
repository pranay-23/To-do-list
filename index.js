$("#input").change(function(){
    let change=$(this).val();
    $("ul").append("<li>"+ change +"<i class='fa-solid fa-check'></i><i class='fa-solid fa-trash'></i></li>");
    $(this).val('');
});

$("ul").on("click",".fa-trash",function(){
    $(this).parent("li").fadeOut(300);
});

$("ul").on("click",".fa-check",function(){
    $(this).parent("li").toggleClass("checked");
});