<?php 
    require_once "includes/mobile_detect/Mobile_Detect.php";
    $detect = new Mobile_Detect();
    $PLATFORM = "desktop";
    if( $detect->isMobile()){
        $PLATFORM = "mobile";
    }
    if( $detect->isTablet() ){
        $PLATFORM = "tab";
    }
?>
<style>
    .mobile-container {
        width: 100%;
        height: 60px;
        margin: 1px 10px 1px 5px;
        color: white;
        border-radius: 10px;
    }

    .topnav {
        overflow: hidden;
        position: relative;
    }

    .topnav #myLinks {
        display: none;
    }

    .topnav a {
        float: left;
        color: white;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }

    .topnav a.icon {
        float: right;
    }

    .topnav a:hover {
        background-color: #ddd;
        color: black;
    }

    .active {
        color: white;
    }
</style>

<script>
    function myFunction() {
        $('.logoImg').hide();

        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
</script>


<div class="header">
    <div class="nav row">
        
        <?php if ($PLATFORM == "mobile" ) { ?>
            <div class="mobile-container">
                <!-- Top Navigation Menu -->
                <div class="topnav">
                    <a href="/" class="active">
                        <img class="logoImg" width="100" height="30" src="assets/smck-images/logo.png" alt="SMCK Custom Homes Logo" title="SMCK Custom Homes Logo" />
                    </a>
                    <div id="myLinks">
                        <a href="/">Home</a>
                        <a href="gallery">Gallery</a>
                        <a href="about">About</a>
                        <a href="contact">Contact</a>
                    </div>
                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
            </div>
        <?php } else { ?>

            <div class="socialMedia col-md-2 col-sm-2">
                <ul>
                    <li class="logo"> 
                        <a href="/"> 
                            <img class="logoImg" width="125" height="50" src="assets/smck-images/logo.png" alt="SMCK Custom Homes Logo" title="SMCK Custom Homes Logo" />
                        </a> 
                    </li>
                </ul>
            </div>

            <div class="socialMedia col-md-2">
                <ul>
                    <li> <a href="/"> Home </a> </li>
                </ul>
            </div>
            <div class="socialMedia col-md-2">
                <ul>
                    <li> <a href="gallery"> Gallery </a> </li>
                </ul>
            </div>
            <div class="socialMedia col-md-2">
                <ul>
                    <li> <a href="about"> About Us </a> </li>
                </ul>
            </div>
            <div class="socialMedia col-md-2">
                <ul>
                    <li> <a href="contact"> Contact Us </a> </li>
                </ul>
            </div>

            <div class="socialMedia col-md-2">
                <ul>
                    <li> 
                        <a href="mailTo:smckconstructionltd@yahoo.com"> 
                            <img class="email-img" height="30" src="assets/smck-images/social-media-icons/email.png" title="SMCK E-Mail" alt="SMCK E-Mail" /> 
                        </a> 
                    </li>
                    <!--<li> <a href=""> <img src="/smck/smck-images/social-media-icons/facebook.png" title="SMCK FaceBook" alt="SMCK FaceBook" /> </a> </li>
                    <li> <a href=""> <img src="/smck/smck-images/social-media-icons/instagram.png" title="SMCK Instagram" alt="SMCK Instagram" /> </a> </li>
                    <li> <a href=""> <img src="/smck/smck-images/social-media-icons/twitter.png" title="SMCK Twitter" alt="SMCK Twitter" /> </a> </li>-->
                </ul>    
            </div>
        <?php } ?>
    </div>
</div>