$(function() {
    
    $("#filter-submit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "ALL") {
            $(".contact").show();
        }
    });
    
                           
    $("#filter-submit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "PHY") {
            $(".contact").hide();
            $(".contact").each(function() {
                if ($(this).data("category") === "physical") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filter-submit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "DIG") {
            $(".contact").hide();
            $(".contact").each(function() {
                if ($(this).data("category") === "digital") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filter-submit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "SAL") {
            $(".contact").hide();
            $(".contact").each(function() {
                if ($(this).find("h3").data("department") === "sales") {
                    $(this).show();
                }
            });
        }
    });
    
    $("#filter-submit").on("click", function(event) {
        event.preventDefault();
        
        if ($("#filter").val() === "SUP") {
            $(".contact").hide();
            $(".contact").each(function() {
                if ($(this).find("h3").data("department") === "support") {
                    $(this).show();
                }
            });
        }
    });
          
});