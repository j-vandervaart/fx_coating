<section id="contact">
    <div class="container">
        <h1 class="mainHdg"><span>Contact</span> Us</h1>
        <div id="contactInfo">
            <div id="contactType">
                <div class="contentBreakdown">
                    <h4>Phone:</h4>
                    <p>519.828.3783</p>
                </div>
                <div class="contentBreakdown">
                    <h4>TOLL FREE:</h4>
                    <p>1.888.828.3783</p>
                </div>
                <div class="contentBreakdown">
                    <h4>Cell:</h4>
                    <p>519.630.3639</p>
                </div>
                <div class="contentBreakdown">
                    <h4>Email:</h4>
                    <a href="mailto:rick@fxcoating.ca?Subject=Website%20Inquiry" target="_top">rick@fxcoating.ca</a>
                </div>
            </div>

            <div id="map"></div>
                <script>
                var map;
                function initMap() {
                    map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: 43.00717048507984, lng:-81.81145445602745},
                    zoom: 9
                    });

                    var contentString = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">6264 Wisbeach Rd.</h1>'+
                    '<div id="bodyContent">'+
                    '<p>6264 Wisbeach Rd, Watford, ON N0M 2S0</p>'+
                    '</div>'+
                    '</div>';

                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                var marker = new google.maps.Marker({
                    position: {lat: 43.00717048507984, lng:-81.81145445602745},
                    map: map,
                    title: '6264 Wisbeach Rd, Watford, ON N0M 2S0'
                });
                window.addEventListener('load', function() {
                    infowindow.open(map, marker);
                });
                }
                </script>
                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB4XMMKia7dVi2UNNqfwaMtEafE7w6_nbU&callback=initMap"
                async defer></script>
        </div>
    </div>
</section>