jQuery(function(){
    setInterval(function() {
        jQuery.get("src/get.php", function(data) {
            jQuery("#nome").text(data);

            if (data === "") {
                jQuery("#usuario").text("Nenhum nome cadastrado no momento");
            } else {
                jQuery("#usuario").text(data);
            }
        });
    }, 1000);
});