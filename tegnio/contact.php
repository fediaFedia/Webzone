
<?php require_once("header.php"); ?>


<div class="header_wrapper" >
	<div class="header_big_noimage" >
	
				<img   id="preload" onload="fadeIn(this)"  src="images/map.png" style="padding-top:50px;display:block;margin:0 auto;height:50vh;">

		</div>
		
		
		
	</div>
</div>

<script>
// this function must be defined in the global scope
window.fadeIn = function(obj) {
    $(obj).fadeIn(1000);
}
</script>


    <div class="container">
      
      <div class="row">
      
        <div class="col-lg-12">
          <h1 class="page-header"><small>Contact our International Offices</small></h1>
          <ol class="breadcrumb">
            <li><a href="index.php">Home</a></li>
            <li class="active">Contact</li>
          </ol>
        </div>
        


      </div><!-- /.row -->
      
      <div class="row">

     

        <div class="col-sm-4" id="lon">
          <h3>Tegnio Europe / HQ</h3>
          <h4>London Headquarterss</h4>
          <p>
            76 Buckingham Palace Rd<br>
           London SW1W 9TQ, UK<br>
          </p>
          <p><i class="fa fa-phone"></i> <abbr title="Phone">P</abbr>: +447589615790</p>
          <p><i class="fa fa-envelope-o"></i> <abbr title="Email">E</abbr>: <a href="mailto:hq@tegnio.com">hq@tegnio.com</a></p>
          <p><i class="fa fa-clock-o"></i> <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:30 PM</p>
        </div>
		
		
        <div class="col-sm-4" id="lon">
          <h3>Tegnio Asia</h3>
          <h4>Operations in East Asia</h4>
          <p>
           Pacifico Yokohama, 1-1-1 Minatomirai<br>
           Nishi Ward, Yokohama, Kanagawa Prefecture 220-0012, Japan<br>
          </p>
          <p><i class="fa fa-phone"></i> <abbr title="Phone">P</abbr>: +8135358656</p>
          <p><i class="fa fa-envelope-o"></i> <abbr title="Email">E</abbr>: <a href="mailto:yokohama@tegnio.com">yokohama@tegnio.com</a></p>
          <p><i class="fa fa-clock-o"></i> <abbr title="Hours">H</abbr>: Monday - Saturday: 9:00 AM to 7:00 PM</p>
        </div>
		
		
		
        <div class="col-sm-4" id="lon">
          <h3>Tegnio East Coast</h3>
          <h4>East Coast Operations</h4>
          <p>
            204A W 115th St<br>
          New York, NY 10026, USA<br>
          </p>
          <p><i class="fa fa-phone"></i> <abbr title="Phone">P</abbr>: +1 543 984-3600</p>
          <p><i class="fa fa-envelope-o"></i> <abbr title="Email">E</abbr>: <a href="mailto:newyork@tegnio.com">newyork@tegnio.com</a></p>
          <p><i class="fa fa-clock-o"></i> <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 6:00 PM</p>
        </div>
		
		<hr style="clear:both;">
		
        <div class="col-sm-4" id="lon">
          <h3>Tegnio West Coast</h3>
          <h4>London Headquarterss</h4>
          <p>
          111 Stevenson St

<br>
       San Francisco, CA 94105, USA<br>
          </p>
          <p><i class="fa fa-phone"></i> <abbr title="Phone">P</abbr>: +1 643 984-3600</p>
          <p><i class="fa fa-envelope-o"></i> <abbr title="Email">E</abbr>: <a href="mailto:sanfrancisco@tegnio.com">sanfrancisco@tegnio.com</a></p>
          <p><i class="fa fa-clock-o"></i> <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 6:00 PM</p>
        </div>
		
		
		
        <div class="col-sm-4" id="lon">
          <h3>Tegnio Middle East</h3>
          <h4>London Headquarterss</h4>
          <p>
           6 Fatima Bint Mubarak St<br>
          Abu Dhabi, UAE<br>
          </p>
          <p><i class="fa fa-phone"></i> <abbr title="Phone">P</abbr>: +97133453674</p>
          <p><i class="fa fa-envelope-o"></i> <abbr title="Email">E</abbr>: <a href="mailto:abudhabi@tegnio.com">abudhabi@tegnio.com</a></p>
          <p><i class="fa fa-clock-o"></i> <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM</p>
        </div>
		
		
		<hr><br><br>
		
		
		   <div class="col-sm-8"><br><br>
          <h3>Online Inquires</h3>
          <p>Submit your inquiry using the form below. Our representatives will get back to you.</p>
			<?php  

                // check for a successful form post  
                if (isset($_GET['s'])) echo "<div class=\"alert alert-success\">".$_GET['s']."</div>";  
          
                // check for a form error  
                elseif (isset($_GET['e'])) echo "<div class=\"alert alert-danger\">".$_GET['e']."</div>";  

			?>
            <form role="form" method="POST" action="contact-form-submission.php">
	            <div class="row">
	              <div class="form-group col-lg-4">
	                <label for="input1">Name</label>
	                <input type="text" name="contact_name" class="form-control" id="input1">
	              </div>
	              <div class="form-group col-lg-4">
	                <label for="input2">Email Address</label>
	                <input type="email" name="contact_email" class="form-control" id="input2">
	              </div>
	              <div class="form-group col-lg-4">
	                <label for="input3">Phone Number</label>
	                <input type="phone" name="contact_phone" class="form-control" id="input3">
	              </div>
	              <div class="clearfix"></div>
	              <div class="form-group col-lg-12">
	                <label for="input4">Message</label>
	                <textarea name="contact_message" class="form-control" rows="6" id="input4"></textarea>
	              </div>
	              <div class="form-group col-lg-12">
	                <input type="hidden" name="save" value="contact">
	                <button type="submit" class="btn btn-primary">Submit</button>
	              </div>
              </div>
            </form>
        </div>
		
		
		
		
		
		
		
		
		

      </div><!-- /.row -->
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  

    </div><!-- /.container -->


	
<?php require_once("footer.php"); ?>