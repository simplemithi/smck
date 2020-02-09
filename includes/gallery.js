$(document).ready(function(){
    $(".folder_name").click(function() {
        var id = this.id;
        if (id == 0) {
            $(".imgs").fadeIn(1000); // Show
        } else {
            $(".imgs").fadeOut('fast'); // Hide
            $("."+id).fadeIn(1000); // Show
        }
    });

    // $(".m_folder_name").on('selectmenuchange', function() {
    // $("select").on('change', function() {
    $('.row').on('change', '.m_folder_name', function() {
        // console.log($(this).children(":selected").attr("id"));
        var id = $(this).children(":selected").attr("id");
        if (id == 0) {
            $(".imgs").fadeIn(1000); // Show
        } else {
            $(".imgs").fadeOut('fast'); // Hide
            $("."+id).fadeIn(1000); // Show
        }
    });

    $(".imgs").on("click", function() {
        var id = this.id;
        var src = $('#'+id).attr('src');
        src = src.replace("tn/", "");
        // console.log(src);
        $('#imagepreview').attr('src', src); // here asign the image to the modal when the user click the enlarge link
        // $('#myModal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
    });
});