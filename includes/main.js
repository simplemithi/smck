<?php 
    $LOCAL_ENV = "/~SimpleMithi/smck";
    $SERVER_ENV = "";

    if ($_SERVER['SERVER_NAME'] == "localhost") {
		$ROOT_PATH = "/~SimpleMithi/smck";
	} else {
		$ROOT_PATH = "";
	}
?>

<html>
    <head>
        <title>SMCK Custom Homes</title>
        
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

        <style>
            .home {
                -webkit-column-count: 4;
                -moz-column-count: 4;
                column-count: 4;
                -webkit-column-width: 20%;
                -moz-column-width: 20%;
                column-width: 20%; 
                margin: 5px 10px;
                /* height: 88%; */
            }

            .home .pics {
                -webkit-transition: all 350ms ease;
                transition: all 350ms ease; }
                .home .animation {
                -webkit-transform: scale(1);
                -ms-transform: scale(1);
                transform: scale(1); 
            }
            
            @media (max-width: 450px) {
                .home {
                    -webkit-column-count: 1;
                    -moz-column-count: 1;
                    column-count: 1;
                    -webkit-column-width: 100%;
                    -moz-column-width: 100%;
                    column-width: 100%;
                }
            }
            
            @media (max-width: 400px) {
                .btn.filter {
                    padding-left: 1.1rem;
                    padding-right: 1.1rem;
                }
            }

            body {font-family:serif; background: #2c394a;/*background:url("https://s3.envato.com/files/218429202/Preview_Image_.jpg");*/}

            /* START - Header */
            .header, .nav{height:50px}
            .nav div {height:50px;}
            .email-img {margin-top:10px;}
            li {list-style:none; display:inline-block; text-align:center; line-height:50px;}
            li a {text-transform:uppercase; padding:10px; color:#fff;}
            /* END - Header */

            /* START - Home */
            .home .pics img {border-radius:2px; border:1px solid gray;}
            /* END - Home */

            /* START - About Us */
            .aboutUs .row p {padding-top:5px; text-align:center}
            .aboutUs .row img {width:-webkit-fill-available; margin:3px; border-radius: px;}
            .aboutUs .row div .col_inner {background:#3F729B; color:#fff; border-radius:5px; border:1px solid black; margin:1px; margin:10px; height:575px;}
            hr {width:80%; margin:5px 10%; background:#fff;}
            /* END - About Us */

            
            /* START - Gallery */
            .show_all_btn {margin:4px; padding:1px 5px; background:#34661f; color:#fff;}
            .show_all_btn:hover {background:#fff; color:34661f; border:1px solid #34661f;}
            .all_folder_names_btn:hover {background:#fff; color:000; border:1px solid #3E4551;}
            .folder_name_div {margin:10px 0px;}
            .all_folder_names_btn {margin:4px; padding:1px 5px; background:#3E4551; color:#fff;}
            .all_img_div {margin-bottom:10px; background:#3e45500f; padding:5px; border-radius:2px; border:1px solid gray;}
            .imgs {margin:1px; border-radius:3px; max-height:100px;}
            .imgs:hover {cursor:pointer;}
            .modal-content button {padding:5px; background:#2f4f4f;}
            .modal_body {padding-top:5px;}
            #imagepreview {max-width:100%; max-height:100%;}
            /* END - Gallery */

            /* START - Footer */
            .footer {background:#f5f5f5;}
            .footer p a {color:#ccc;}
            /* END - Footer */
        </style>
    </head>

    <body>
        <div class="header">
            <div class="nav row">
                <div class="socialMedia col-md-2 col-sm-2">
                    <ul>
                        <li class="logo"> 
                            <a href="/"> 
                                <img class="logoImg" width="125" height="50" src="<?php echo $ROOT_PATH;?>/smck-images/logo.png" alt="SMCK Custom Homes Logo" title="SMCK Custom Homes Logo" />
                            </a> 
                        </li>
                    </ul>
                </div>

                <div class="socialMedia col-md-2">
                    <ul>
                        <li> <a href="<?php echo $ROOT_PATH;?>/"> Home </a> </li>
                    </ul>
                </div>
                <div class="socialMedia col-md-2">
                    <ul>
                        <li> <a href="<?php echo $ROOT_PATH;?>/gallery"> Gallery </a> </li>
                    </ul>
                </div>
                <div class="socialMedia col-md-2">
                    <ul>
                        <li> <a href="<?php echo $ROOT_PATH;?>/about-us"> About Us </a> </li>
                    </ul>
                </div>
                <div class="socialMedia col-md-2">
                    <ul>
                        <li> <a href="<?php echo $ROOT_PATH;?>/contact-us"> Contact Us </a> </li>
                    </ul>
                </div>

                <div class="socialMedia col-md-2">
                    <ul>
                        <li> 
                            <a href="mailTo:smckconstructionltd@yahoo.com"> 
                                <img class="email-img" height="30" src="<?php echo $ROOT_PATH;?>/smck-images/social-media-icons/email.png" title="SMCK E-Mail" alt="SMCK E-Mail" /> 
                            </a> 
                        </li>
                        <!--<li> <a href=""> <img src="/smck/smck-images/social-media-icons/facebook.png" title="SMCK FaceBook" alt="SMCK FaceBook" /> </a> </li>
                        <li> <a href=""> <img src="/smck/smck-images/social-media-icons/instagram.png" title="SMCK Instagram" alt="SMCK Instagram" /> </a> </li>
                        <li> <a href=""> <img src="/smck/smck-images/social-media-icons/twitter.png" title="SMCK Twitter" alt="SMCK Twitter" /> </a> </li>-->
                    </ul>    
                </div>
            </div>
        </div>

        <!-- Grid row -->
        <!-- <div class="home" id="home">
            <div class="mb-1 pics animation all 2">
                <img class="img-fluid" src="<?php echo $ROOT_PATH;?>/smck-images/web/1-customHomes/20150925_105254.jpg" alt="Card image cap">
            </div>
            
            <div class="mb-1 pics animation all 1">
                <img class="img-fluid"src="<?php echo $ROOT_PATH;?>/smck-images/web/91-wainscotPanels/20170317_145005.jpg" alt="Card image cap">
            </div>

            <div class="mb-1 pics animation all 2">
                <img class="img-fluid" src="<?php echo $ROOT_PATH;?>/smck-images/web/7-masonery/IMG_0133.JPG" alt="Card image cap">
            </div>

            <div class="mb-1 pics animation all 2">
                <img class="img-fluid" src="<?php echo $ROOT_PATH;?>/smck-images/web/6-fenceAndDeck/20140917_124350.jpg" alt="Card image cap">
            </div>

            <div class="mb-1 pics animation all 1">
                <img class="img-fluid" src="<?php echo $ROOT_PATH;?>/smck-images/web/6-fenceAndDeck/20150717_182138.jpg" alt="Card image cap">
            </div>

            <div class="mb-1 pics animation all 1">
                <img class="img-fluid" src="<?php echo $ROOT_PATH;?>/smck-images/web/3-bathroom/20160809_191252.jpg" alt="Card image cap">
            </div>

            <div class="mb-1 pics animation all 2">
                <img class="img-fluid" src="<?php echo $ROOT_PATH;?>/smck-images/web/5-landscaping/20140820_100859.jpg" alt="Card image cap">
            </div>

            <div class="mb-1 pics animation all 1">
                <img class="img-fluid" src="<?php echo $ROOT_PATH;?>/smck-images/web/92-crownMollding/20150118_183039.jpg" alt="Card image cap">
            </div>

            <div class="mb-1 pics animation all 1">
                <img class="img-fluid" src="<?php echo $ROOT_PATH;?>/smck-images/web/7-masonery/P1090196.jpg" alt="Card image cap">
            </div>

            <div class="mb-1 pics animation all 1">
                <img class="img-fluid" src="<?php echo $ROOT_PATH;?>/smck-images/web/8-fierplace/20161221_223203.jpg" alt="Card image cap">
            </div>
        </div> -->
        <!-- Grid row -->

<!-- ---------- -->

        <!-- <div class="aboutUs">
            <div class="row">
                <div class="para_1 col-md-3">
                    <div class="col_inner">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWnf9atnjRvVva78LBVsAmvQidZqNbTfUqVguoyyPLFikChmhw&s" alt="">
                        <hr />
                        <p>
                            SMCK Construction Ltd Renovation is an Ontario based company. We specialize in house renovations, repairs and improvements, for residential, commercial and industrial customers. 
                        </p>
                    </div>
                </div>

                <div class="para_2 col-md-3">
                    <div class="col_inner">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQqVTdaWcu-UrzZlJ3QC3diGTiX4UKyPfymVKg0CPOS6NPK_5D&s" alt="">
                        <hr />
                        <p>
                            SMCK Construction Ltd is dedicated to providing the highest quality on every job. With a proud team of qualified artisans, we strive to complete every project in a timely and safe manner. 
                        </p>
                    </div>
                </div>

                <div class="para_3 col-md-3">
                    <div class="col_inner">
                        <img src="data:image/png;base64,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" alt="">
                        <hr />
                        <p>
                            Our mission is to offer a unique and reliable service in renovations and repairs in the Greater Toronto Area, differentiating ourselves from the competition by means of always delivering what we promise, on time and on budget. 
                        </p>
                    </div>
                </div>

                <div class="para_4 col-md-3">
                    <div class="col_inner">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfqhbOIh0c0CIrdVxz_3334c6z2u5FmW1ZZDkvndiABTY-RJIe&s" alt="">
                        <hr />
                        <p>
                            Our commitment to excellence is our core value. Customer satisfaction is our main goal, and we reach it every day by relying on our attention to customer service. 
                            By providing customized solutions for every job, we guarantee that we will never compromise on quality, safety and efficiency. 
                            This approach together with our experience and knowledge allows us to effectively handle a wide variety of projects, from small to big, indoors or outdoors, renovations or repairs.
                        </p>
                    </div>
                </div>
            </div>
        </div> -->

    <!-- -------------- -->

        <!-- <img src="http://www.impulsedynamic.com/wp-content/uploads/2017/03/contact-us-banner.jpg" alt="" style="display:block; margin:auto; margin-top:5px; max-width:100%">

        <div class="row" style="background:#0f446d; margin:0px 28px; margin-bottom:5px; color:#fff">
            <div class="col-md-1 col-sm-12" style="background:#fff"></div>
            <div class="col-md-5 col-sm-12">
                <div class="contact-us-info text-center" style="padding:100px 20px">
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

            <div class="col-md-5 col-sm-12" style="padding:0">
                <div class="contact-us-form" style="background:#fff; margin:5px; padding:10px; border-radius:3px">

                    <form method="post" action="mail-handler.php"> <br />
                        <div class="form-group">
                            <input class="form-control" type="text" name="name" placeholder="Name" required>
                        </div>

                        <div class="form-group">
                            <input class="form-control" typetype="email" name="email" placeholder="Email Address" required>
                        </div>

                        <div class="form-group">
                            <input class="form-control" typetypetype="text" name="subject" placeholder="Subject">
                        </div>

                        <div class="form-group">
                            <textarea class="form-control" type="text" name="comment" rows="3" col="50" placeholder="Inquiry..." required></textarea>
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
            <div class="col-md-1 col-sm-12" style="background:#fff"></div>
        </div> -->

    <!-- -------------------- -->

        <div class="gallery">
            <?php
                //$path = '/home/simplemithi/public_html/smck/smck-images/web';
                $path = getcwd().'/smck-images/web';

                $folders = glob($path . '/*' , GLOB_ONLYDIR);
                $count = 1;

                // Display the folder names
                echo "<div class=\"row text-center\">";
                    echo "<div class=\"col-md-12 folder_name_div\">";
                    echo "<button class=\"btn folder_name show_all_btn\" id=\"0\"> Show All </button>";
                    
                    foreach ($folders as $key => $folder) {
                        $folderName = preg_replace("(.*web)", "", $folder);
                        $file_num = preg_replace('/[^0-9.]+/', '', $folder);
                        $num = array("/","-",0,1,2,3,4,5,6,7,8,9);
                        $fileName =  str_replace($num, null, $folderName);
                        $fileName = preg_replace('/(?<!\ )[A-Z]/', ' $0', $fileName);

                        echo "<button class=\"btn folder_name all_folder_names_btn\" id=\"$file_num\"> ".ucfirst($fileName)." </button>";
                    }
                    echo "</div>";

                    // Display the images
                    echo "<div class=\"col-md-10 offset-md-1 all_img_div\">";
                    foreach ($folders as $key => $folder) 
                    {
                        $folderName = preg_replace("(.*web)", "", $folder."/tn");
                        $files = scandir($folder."/tn");
                        $files = array_diff(scandir($folder), array('.', '..', '.DS_Store'));
                        $file_num = preg_replace('/[^0-9.]+/', '', $folder);
                        $supported_format = array('gif','jpg','jpeg','png');
                        $ext = strtolower(pathinfo($image_name, PATHINFO_EXTENSION));
                        
                        foreach ($files as $index => $file)
                        {
                            // if ($count >=1 AND $count <= 37) {
                            // if ($file_num == 94) {
                            if (in_array(pathinfo($file, PATHINFO_EXTENSION), $supported_format)) {
                                
                                echo "<img width=\"100\" class=\"imgs $file_num\" id=\"img_$count\" src=\"$ROOT_PATH/smck-images/web/$folderName/$file\" data-toggle=\"modal\" data-target=\"#lg_img_modal\" data-toggle=\"tooltip\" title=\"Click to enlarge the image\">";
                            }
                            $count++;
                        }
                    }
                    echo "</div>";
                echo "</div>";
            ?>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="lg_img_modal" tabindex="-1" role="dialog" aria-labelledby="lg_img_modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="fas fa-times-circle"></i>
                    </button>

                    <div class="modal-body">
                        <img src="" id="imagepreview" >
                    </div>

                </div>
            </div>
        </div>


        <div class="footer text-center">
            <p>
                | &copy; <?php echo date("Y"); ?> SMCK Construction Ltd - Custom Home Builders |
                <a href="site-map.php"> Site Map </a> |
                <span class="simplemithi"> Site by <a href="https://www.linkedin.com/in/mithiladesilva/" target="_blank"> SimpleMithi </a> </span> | <br />
            </p>
        </div>

        <script>
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

                $(".imgs").on("click", function() {
                    var id = this.id;
                    var src = $('#'+id).attr('src');
                    src = src.replace("tn/", "");
                    console.log(src);
                    $('#imagepreview').attr('src', src); // here asign the image to the modal when the user click the enlarge link
                    $('#myModal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
                });
            });

            
        </script>
    </body>
</html>