<?php

class LoadViews {

    public function loadViews() {

        require_once('views/head.php');
        require_once('views/nav.php');

        if(isset($_GET['pg']) && ($_GET['pg'] == 'agricultural' || $_GET['pg'] == 'industrial' || $_GET['pg'] == 'commercial')) {
            require_once('views/'.$_GET['pg'].'.php');
        }else {
            // header('Location: ');
            require_once('views/home.php');
        }
        require_once('views/footer.php');
    }

}