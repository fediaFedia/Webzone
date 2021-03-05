<!--[if IE ]><![endif]-->
<!DOCTYPE html>

<!--[if lt IE 7]><html  class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7 " lang="en-GB"> <![endif]-->
<!--[if IE 7]><html  class="no-js lt-ie10 lt-ie9 lt-ie8 " lang="en-GB"> <![endif]-->
<!--[if IE 8]><html  class="no-js lt-ie10 lt-ie9 " lang="en-GB"> <![endif]-->
<!--[if IE 9]><html  class="no-js lt-ie10 " lang="en-GB"> <![endif]-->
<!--[if gt IE 9]><!-->

<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tegnio - A New Tomorrow</title>
    <meta name="HandheldFriendly" content="True">
	<meta name="DCS.dcssta" content="200">
	
	<meta name="guid" />
	<meta name="page-type" content="BasePageType" />
	<meta name="track_meta_tag" />	
	
    <link href="css/common.css" rel="stylesheet">
    <link href="css/tegnio.css" rel="stylesheet">
		  <script src="js/datetime.js"></script>
	<style>
	
	body {background:url('images/map_transparent.png') center center fixed no-repeat, -webkit-linear-gradient(top, #011c3a 0%,#00254f 50%,#013856 100%);
	
	
	
	
	
	}
	#tables table {z-index:0;opacity:0.5;font-size:16px;position:fixed;bottom:40px;color:#fff;width:100%;text-align:center;}
#tables	table b {opacity:1.0;color:#fff;font-size:20px;margin-bottom:0px;}

</style>
	
	
</head>

<body>


	

	<!--
    you can substitue the span of reauth email for a input with the email and
    include the remember me checkbox
    -->
    <div class="container">

	
        <div class="card card-container">
			<img src="images/logo_resized_i.png" style="width:100%;" />
            <!-- <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->
          
			<p id="profile-name" class="profile-name-card"></p>
            <form class="form-signin">
                <span id="reauth-email" class="reauth-email"></span>
                <input id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
				<Br>
                <input  id="inputPassword" class="form-control" placeholder="Password" required>
                <div id="remember" class="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me"> Remember me
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
            </form><!-- /form -->
            <a href="#" class="forgot-password">
                Forgot password
            </a>
		
        </div><!-- /card-container -->
    </div><!-- /container -->
	
	
	<div id="tables">
	<table>
	<tr>
	<td>
	<script language="javascript1.2">
	<!-- hide it
	document.write('<b>San Francisco</b><br>');
	document.write(sf_hour + ':' + min + sf_ampm + '<br>');
	//-->

	</script>
	</td>
	<td>
	<script language="javascript1.2">
	<!-- hide it
	document.write('<b>New York</b><br>');
	document.write(ny_hour + ':' + min + ny_ampm + '<br>');
	//-->

	</script>
	</td>
	<td>
	<script language="javascript1.2">
	<!-- hide it
	document.write('<b>London</b><br>');
	document.write(lon_hour + ':' + min + lon_ampm + '<br>');
	//-->

	</script>
	</td>
	<td>
	<script language="javascript1.2">
	<!-- hide it
	document.write('<b>Dubai</b><br>');
	document.write(mos_hour + ':' + min + mos_ampm + '<br>');
	//-->

	</script>
	</td>
	<td>
	<script language="javascript1.2">
	<!-- hide it
	document.write('<b>Yokohama</b><br>');
	document.write(tok_hour + ':' + min + tok_ampm + '<br>');
	//-->

	</script>
	</td>
	  </tr>
	</table>
	</div>
	
	

    <script src="js/jquery-1.10.2.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/modern-business.js"></script>