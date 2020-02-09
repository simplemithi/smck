<html>
    <head>
        <title>SMCK | Site Map</title>
        
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <?php include("includes/plugin_url.php"); ?>    

        <link rel="stylesheet" href="includes/main.css">
    </head>

    <body>
        <?php include("includes/nav.php"); ?>

        <div class="siteMapLi">
        <?php
            // START Function Implementation to list folder and files including childs
            function listFolderFiles($dir)
            {
                $folders = scandir($dir);
                echo '<ul>';

                $exclude_folders = [".", "..", ".htaccess", "fotorama-4.6.4", ".DS_Store", "tn", "web copy", "Thumbs.db"];
                
                foreach($folders as $file)
                {
                    if(!in_array($file, $exclude_folders))
                    {
                        echo '<li>'.$file;
                        if(is_dir($dir.'/'.$file)) listFolderFiles($dir.'/'.$file);
                        echo '</li>';
                    }
                }
                // Display the folders & files
                echo '</ul>';
            }
            // END Function Implementation to list folder and files including childs

            // Call Folder & File function
            listFolderFiles(getcwd());

            include("includes/footer.php");

            
        ?>
        </div>
    </body>
</html>