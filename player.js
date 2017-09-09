

// mouse event in player

      console.log("               Intuition Intelligence Player");
      console.log("");

      //video is ready to play and its in idle state.

      jwplayer('easy').onReady(function(){
        console.log("Video is in",jwplayer('easy').getState(),"state ready to play, press start button", )
      });

      //video is playing now

      jwplayer().onPlay(function(event){ 
        console.log("Video is started to play");
      });

      //video is paused

      jwplayer().onPause(function(event){ 
  
       var pos=jwplayer('easy').getPosition();
        console.log("Video is paused at",secondsToHms(pos));
      });


      //get quality of video

      jwplayer().on('levelsChanged',function(e) {
        var quality=jwplayer('easy').getCurrentQuality();
          switch(quality)
          {
            case 0:  console.log("The current quality is 720");
            break;
            case 1:  console.log("The current quality is 360");
            break;
            case 2:  console.log("The current quality is 240");
            break;
          }
      });

      //mute settings events

      jwplayer().onMute(function(event){
        var muted = jwplayer().getMute();
        var ce=jwplayer().getPosition();
        var count=0;
        ce=Math.floor(ce);
        if (muted){
          console.log("The video is mute on at",secondsToHms(ce));
        }
        else {
          console.log("The video is mute off at",secondsToHms(ce));         
        }
      });  

      //working with fullscreen

      jwplayer().on('fullscreen', function(e) { 
        console.log("The getFullscreen :  "+ jwplayer('easy').getFullscreen());
      });

      jwplayer().on('fullscreen', function(e) {
        console.log("The getFullscreen :  "+ jwplayer('easy').getWidth());
      });

      //video complete event

      jwplayer().onComplete(function(event){ 
        console.log("Video Completed");
      });

      //current video

      jwplayer().onVolume(function(event){ 
        console.log("The cuurent volume is", jwplayer('easy').getVolume());
      });

      // seek
  
       jwplayer().onSeek(function(event){ 
       var seek=jwplayer('easy').getPosition();
       console.log("The video is seeked");
        console.log("The curent duration is", secondsToHms(seek));
      });

// click event in button

        //Get current status of video

      $( document ).ready(function() {
        $("#get-current-status").click(function() {

            var vol=jwplayer().getState();
            var ce=jwplayer().getPosition();
            document.getElementById("sta").innerHTML = vol+" --- "+secondsToHms(ce);
              console.log("The current Status :  "+vol + "----------"    +secondsToHms(ce) );
        });
      });     

      // Get current duration of video

      $( document ).ready(function() {
        $("#get-current-volume").click(function() {
            var vol=jwplayer().getVolume(); 
            document.getElementById("vol").innerHTML = vol;
              console.log("The current volume :  "+vol);
        });
      });

      //Get current Mute Status

      $( document ).ready(function() {
        $("#get-mute-status").click(function() {
              var muted = jwplayer().getMute();
              var ce=jwplayer().getPosition();
              var count=0;
                  if (muted){
                    document.getElementById("mute").innerHTML = "Mute On at "+secondsToHms(ce);
                     console.log(" The vidoe is Mute On at "+secondsToHms(ce));       
                  }
                  else {
                    document.getElementById("mute").innerHTML =  "Mute Off at "+secondsToHms(ce);
                    console.log(" The vidoe is Mute Off at "+secondsToHms(ce));         
                  }
        });
      });

      // Get current quality of video

      $( document ).ready(function() {
        $("#get-quality").click(function() {
            var qua=jwplayer('easy').getCurrentQuality();
                    switch(qua)
                {
                  case 0:  console.log("The current quality is 720p");
                  document.getElementById("quality").innerHTML = "720p";
                  break;
                  case 1:  console.log("The current quality is 360p");
                  document.getElementById("quality").innerHTML = "360p";
                  break;
                  case 2:  console.log("The current quality is 240p");
                  document.getElementById("quality").innerHTML = "240p";
                 break;
                }
        });
      });

      // Get current video duration or position

      $( document ).ready(function() {
        $("#get-duration").click(function() {
            var ce=jwplayer('easy').getPosition();
            document.getElementById("dur").innerHTML =secondsToHms(ce) ;
              console.log( "Get duration =  "+secondsToHms(ce));     
        });     
      });
                // convert duration into sec
                  function secondsToHms(d) {
                      d=Math.floor(d);
                    d = Number(d);
                    var h = Math.floor(d / 3600);
                    var m = Math.floor(d % 3600 / 60);
                    var s = Math.floor(d % 3600 % 60); 
                    return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
                  }
      
      //Set volume of video

      $( document ).ready(function() {
        $("#set-volume").click(function() { 
            jwplayer('easy').setVolume(70);
            var vol=jwplayer().getVolume(); 
            document.getElementById("vol1").innerHTML =vol ;
              console.log("The volume is set to :  "+vol);
        });
      });

      //Set quality of video

      $( document ).ready(function() {
        $("#set-quality").click(function() {
            jwplayer('easy').setCurrentQuality(1);
            var qua=jwplayer().getCurrentQuality();
             document.getElementById("quality1").innerHTML ="360p" ;
              
        });
      });

      // pause the video

      $( document ).ready(function() {
        $("#pause").click(function() { 
              jwplayer('easy').pause();
              var ce=jwplayer('easy').getPosition();
               document.getElementById("pa").innerHTML = jwplayer('easy').getState()+ " at " + secondsToHms(ce) ;
                console.log(" The video is "+ jwplayer('easy').getState(), "at" , secondsToHms(ce));
        });
      });

      // stopping the video
      $( document ).ready(function() {
        $("#stop").click(function() { 
              jwplayer('easy').stop();
              var ce=jwplayer('easy').getPosition();
               document.getElementById("st").innerHTML = "Stopped" ;
              console.log("The video is stopped and its coming to "+ jwplayer('easy').getState(), "state at" , secondsToHms(ce));
        });
      });

     // playing the video
      $( document ).ready(function() {
        $("#play").click(function() { 
              jwplayer('easy').play();
              var ce=jwplayer('easy').getPosition();
                document.getElementById("pl").innerHTML = jwplayer('easy').getState()+ " at " + secondsToHms(ce) ;       
              console.log("The video is "+ jwplayer('easy').getState(), " at" , secondsToHms(ce))
        });
      });

      // set mute off the volume

      $( document ).ready(function() {
         $("#mute-off").click(function() { 
            var muted = jwplayer().getMute();
            if(muted)
               {
                jwplayer('easy').setMute(false);
                 var ce=jwplayer('easy').getPosition();
                document.getElementById("mute2").innerHTML = "Mute Off at "+secondsToHms(ce);
                 console.log("The video is mute off");
              }
         });
      });

      // set mute on the volume

      $( document ).ready(function() {
        $("#mute-on").click(function() { 
            var muted = jwplayer().getMute();
            if(!muted)
              {
              jwplayer('easy').setMute(true);   
                var ce=jwplayer('easy').getPosition();
                document.getElementById("mute1").innerHTML = "Mute On at "+secondsToHms(ce);
                  console.log(" The vidoe is Mute On at "+secondsToHms(ce)); 
             }
        });
      });




