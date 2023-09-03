let audioObj;



fetch('https://complex.in.ua/status-json.xsl?mount=/yantarne')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data.icestats.source);
            $('.trackTitle').text(data.icestats.source.title)


            setInterval(function(){fetch('https://complex.in.ua/status-json.xsl?mount=/yantarne')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                    $('.trackTitle').text(data.icestats.source.title)
            }); },100)      
        audioObj = new Audio(data.icestats.source.listenurl)
    });
   
let soundOn =false
    $('#soundIcon').click(function(){
        if(soundOn==false){
            $('#soundIcon').removeClass('fa-volume-xmark')
            $('#soundIcon').addClass('fa-volume-high')
            audioObj.play()
             soundOn=true
        }else{
            $('#soundIcon').removeClass('fa-volume-high')
            $('#soundIcon').addClass('fa-volume-xmark')
            audioObj.pause()
            soundOn=false
        }
      
    })
    $('#volumeInput').on('input',function(){
        console.log(volumeInput.value*0.01)
        let soundVolume =volumeInput.value*0.01;
        audioObj.volume=soundVolume;
    })
    // $('#timetable').click(function(){
    //     window.scrollBy({top:-200} );
    // })