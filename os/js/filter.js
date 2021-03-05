
        $(document).ready(function () {
            //declare a global variable



$('#searchEntry').blur(function() {






        $('#searchEntry').removeClass("focus");

      })
      .focus(function() {
        $(this).addClass("focus")
		 $('#search').hide();
 $('#clear').show();
 	 $('#search').hide();
      });




            var filterVal;
            //check if sessionStorage exists and if so, if there is a var called fillTerm
            //if not, set it to a default value (all)
            if (sessionStorage && sessionStorage.getItem("filTerm")) {
                filterVal = sessionStorage.getItem("filTerm");
            } else {
                filterVal = "all";
                sessionStorage.setItem("filTerm", filterVal);
            }

            //now let's attach some interaction to our buttons
            $(".filter-button").on("click", function () {
                //get the value for our filter




                filterVal = $(this).attr("data-filter");



                //store it in the session storage
                sessionStorage.setItem("filTerm", filterVal);


                console.log(sessionStorage);
                console.log(filterVal);
                //call our view update function
                updateView();
            });

          $(".reset-button").on("click", function () {
                //get the value for our filter




                filterVal = $(this).attr("data-filter");



                //store it in the session storage
                sessionStorage.setItem("filTerm", filterVal);


                console.log(sessionStorage);
                console.log(filterVal);
                //call our view update function
                resetView();
            });



            //this is the function that manipulates the UI
            function updateView() {

$('#searchEntry').val(filterVal);
 $('#clear').show();
 	 $('#search').hide();
                //default situation: all is visible
                if (!filterVal || filterVal === "all") {
                    $('.filter').show();
					
                }
                    //hide all and show filtered values
                else {
                    $(".filter").hide();
                    $('.filter').filter('.' + filterVal).show();
              
                    console.log("searchTerm");
                    console.log("filterVal");
					
                }
            };

          //this is the function that manipulates the UI
            function resetView() {

console.log("resetting");

$('#searchEntry').val("");
 $('#clear').hide();
 	 $('#search').show();
                //default situation: all is visible
                if (!filterVal || filterVal === "all") {
                    $('.filter').show();
					
					
                }
                    //hide all and show filtered values
                else {
                    $(".filter").hide();
                    $('.filter').filter('.' + filterVal).show();
              
                }
            };





            //update the view when the page loads
            resetView();
       



            $("#searchEntry").keyup(function () {
				
				
				
				
				
 $('#clear').show();
 	 $('#search').hide();
            var term = $(this).val().toLowerCase();

       

 filterVal = term;
                //store it in the session storage
                sessionStorage.setItem("filTerm", filterVal);
                console.log(sessionStorage);
                console.log(filterVal);
				
				 	 $('.resultsSpotlight').show();
				
				
                //call our view update function
               
 $(".filter").hide();
 $(".filter").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(filterVal) > -1)
    });

              

            console.log("searchTerm" + term);
            console.log("filterTerm");
        })

        });


  //]]>