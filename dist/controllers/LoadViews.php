<?php

class LoadViews {

    public function loadViews() {
        //get content through the model
        //load views that match the content
        require_once('views/head.php');
        require_once('views/nav.php');

        require_once('views/footer.php');
    }

}