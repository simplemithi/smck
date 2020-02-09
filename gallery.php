<html>
    <head>
        <title>SMCK | Gallery</title>
        
        <meta charset="utf-8">
        <meta name="description" content="SMCK Construction Custom Homes Gallery">
        <meta name="keywords" content="smck, custom homes, smck gallery, custom homes, renovation, bathroom, basement, landscaping, fence and deck, masonery, fireplace, coffered ceilings, waiscot panels, crown molding, columns, demo and escavation, finish carpentering">
        <meta name="author" content="SimpleMithi">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <?php 
            include("includes/plugin_url.php"); 
            include("includes/nav.php"); 
            require_once "includes/mobile_detect/Mobile_Detect.php";
        ?>    

        <link rel="stylesheet" href="includes/main.css">
    </head>

    <body>
        <?php 
            $detect = new Mobile_Detect();
            $PLATFORM = "desktop";
            if( $detect->isMobile()){
                $PLATFORM = "mobile";
            }
            if( $detect->isTablet() ){
                $PLATFORM = "tab";
            }
        ?>
        
        <div class="wrapper">
            <?php
                //$path = '/home/simplemithi/public_html/smck/assets/smck-images/web';
                $path = getcwd().'/assets/smck-images/web';

                $folders = glob($path . '/*' , GLOB_ONLYDIR);
                $count = 1;

                // Display the folder names
                echo "<div class=\"row text-center\">";
                    if ($PLATFORM == "mobile") { 
                        echo "<select class=\"m_folder_name\" style=\"color:#000; background:#fff; margin:10px auto;\">"; 
                        echo "<option class=\"btn folder_name show_all_btn\" id=\"0\"> Show All </option>";
                    } else {
                        echo "<div class=\"col-md-12 folder_name_div\">";
                        echo "<button class=\"btn folder_name show_all_btn\" id=\"0\"> Show All </button>";
                    }
                    foreach ($folders as $key => $folder) {
                        $folderName = preg_replace("(.*web)", "", $folder);
                        $file_num = preg_replace('/[^0-9.]+/', '', basename($folder));
                        $num = array("/","-",0,1,2,3,4,5,6,7,8,9);
                        $fileName =  str_replace($num, null, $folderName);
                        $fileName = preg_replace('/(?<!\ )[A-Z]/', ' $0', $fileName);

                        if ($PLATFORM == "mobile") {
                            echo "<option class=\"btn folder_name all_folder_names_btn\" id=\"$file_num\"> ".ucfirst($fileName)." </option>";
                        } else {
                            echo "<button class=\"btn folder_name all_folder_names_btn\" id=\"$file_num\"> ".ucfirst($fileName)." </button>";
                        }
                    }
                    if ($PLATFORM == "mobile") { 
                        echo "<select>"; 
                    } else {
                        echo "</div>";
                    }

                    // Display the images
                    echo "<div class=\"col-md-10 offset-md-1 all_img_div\">";
                    foreach ($folders as $key => $folder) 
                    {
                        $folderName = preg_replace("(.*web)", "", $folder."/tn");
                        $files = scandir($folder."/tn");
                        $files = array_diff(scandir($folder), array('.', '..', '.DS_Store'));
                        $file_num = preg_replace('/[^0-9.]+/', '', basename($folder));
                        $supported_format = array('gif','jpg','jpeg','png');
                        $ext = strtolower(pathinfo($image_name, PATHINFO_EXTENSION));
                        
                        foreach ($files as $index => $file)
                        {
                            // if ($count >=1 AND $count <= 37) {
                            // if ($file_num == 94) {
                            if (in_array(pathinfo($file, PATHINFO_EXTENSION), $supported_format)) {
                                
                                echo "<img width=\"100\" class=\"imgs $file_num\" id=\"img_$count\" src=\"assets/smck-images/web/$folderName/$file\" data-toggle=\"modal\" data-target=\"#lg_img_modal\" data-toggle=\"tooltip\" title=\"Click to enlarge the image\">";
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

                    <div class="modal-body" style="padding:2px; background:#000;">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="position:absolute; background:none;">
                            <i class="fas fa-times-circle" style="color:#000;"></i>
                        </button>
                        <img src="" id="imagepreview" >
                    </div>

                </div>
            </div>
        </div>

        <script src="includes/gallery.js"> </script>
        <?php include("includes/footer.php"); ?>
    </body>
</html>