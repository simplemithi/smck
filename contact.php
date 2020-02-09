<html>
    <head>
        <title>SMCK | Contact</title>
        
        <meta charset="utf-8">
        <meta name="description" content="SMCK Construction Custom Homes Contact Us">
        <meta name="keywords" content="smck, custom homes, contact us, smck contact us">
        <meta name="author" content="SimpleMithi">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <?php include("includes/plugin_url.php"); ?>    

        <link rel="stylesheet" href="includes/main.css">
    </head>

    <body>
        <?php include("includes/nav.php"); ?>
        
        <img src="http://www.impulsedynamic.com/wp-content/uploads/2017/03/contact-us-banner.jpg" alt="SMCK Contact Us Image Banner" class="cont_img_banner">

        <div class="contact row">
            <div class="cont_left_div col-md-1 col-sm-12"></div>
            <div class="col-md-5 col-sm-12">
                <div class="contact-us-info text-center">
                    <p> 
                        Areas Covered: GTA area, Toronto, Ajax, Pickering, Markham, North York, NewMarket, Aurora, Vaughan, Brampton, Mississauga. If your city is not listed here get in touh with us to see if we are able to accomodate your area. 
                    </p>
                    <p> 
                        <i class="fas fa-phone"></i> <a href="tel:647-979-7282"> 647-979-7282 </a> 
                    <p> 
                    <p> 
                        <i class="fas fa-envelope"></i> <a href="mailTo:smckconstructionltd@yahoo.com"> smckconstructionltd@yahoo.com </a> 
                    <p>
                </div>
            </div>

            <div class="col-md-5 col-sm-12">
                <div class="contact-us-form">

                    <form method="post" id="myform"> <br />
                        <div class="form-group">
                            <input class="form-control name" type="text" name="name" placeholder="Name" required>
                        </div>

                        <div class="form-group">
                            <input class="form-control email" typetype="email" name="email" placeholder="Email Address" required>
                        </div>

                        <div class="form-group">
                            <input class="form-control subject" typetypetype="text" name="subject" placeholder="Subject">
                        </div>

                        <div class="form-group">
                            <textarea class="form-control msg" type="text" name="msg" rows="3" col="50" placeholder="Inquiry..." required></textarea>
                        </div>

                        <?php
                            if ($_SESSION['email'])
                            {
                                echo "<div class=\"confirmation themeBackground\"> Your Message was {$_SESSION['email']} </div>";
                                unset($_SESSION['email']);
                            }
                            else
                            {
                                echo "<button class=\"btn btn-primary submit col-md-12 themeBackground\" type=\"submit\" name=\"submit\"> Submit </button>";
                            }
                        ?>
                    </form>
                </div>
            </div>
            <div class="cont_right_div col-md-1 col-sm-12"></div>
        </div>

        <?php include("includes/footer.php"); ?>

        <script> 
            $(() => {
                $(".submit").click(function(e) {
                    e.preventDefault();

                    var formData = {
                        name : $(".name").val(),
                        email : $(".email").val(),
                        subject : $(".subject").val(),
                        msg : $(".msg").val()
                    };

                    $.ajax({
                        url: 'includes/mail-handler.php',
                        type: 'POST',
                        data: formData,
                        success:function(data) {
                            console.log(data);
                        }
                    });
                });
            });
        </script>
    </body>
</html>