
//Sent WhatsApp
$(document).ready(function() {
$(".form-con").submit(function(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var nomor = document.getElementById('telp').value;
    var pesan = document.getElementById('message').value;
    var win = window.open('https://api.whatsapp.com/send?phone=6281804411197&text='+name+ '%0A' +email+ '%0A' +nomor+ '%0A' +pesan);
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
return false;
});
});

//JSON to Object 
$(document).ready(function() {
  $.getJSON('api/data_p.json', function(result){
    let field0 = result.title;
    let field1 = result.about;
    let field2 = result.resume;
    let field3 = result.portofolio;
    let field4 = result.hobby;
    let field5 = result.skills;

    $.each(field0, function(i, data){
      $('#header-title').append(data.main);
      $('#sub-title').append(data.main_skill);
    });

    $.each(field1, function(i, data){
      let field11 = data.data_diri;
      let field111 = data.link;
      $('#caption-about').append(data.caption);
      $('#profile-img').append('<img class="img-fluid" src="' + data.foto + '" alt="Gambar: Saya" style="float: left;height: auto;padding-right: 15px;padding-bottom: 15px;width: 100%;"/>');

      $.each(field11, function(i, data){
        $('#caps-about').append(data.caption);
        $('#data-diri').append('<li><strong>Nama:</strong> ' + data.nama + '</li><li><strong>TTL:</strong> ' + data.ttl + '</li><li><strong>Umur:</strong> ' + age + '</li>');
      });
      $.each(field111, function(i, data){
        $('#sosmed-url').append('<a target="_blank" href="' + data.url + '" class="' + data.class + '"><i class="' + data.iclass + '"></i></a>');
      });
    });
    
    $.each(field2, function(i, data){
      let field22 = data.pendidikan;
      $('#caption-resume').append(data.caption);
      $.each(field22, function(i, data){
         $('#data-studi').append('<li><a target="_blank" href="' + data.link + '">' + data.sekolah + '</a><p class="float-right"><strong>' + data.tahun + '</strong></p><p>' + data.deskripsi + '</p></li>');
      });
    });
    $.each(field2, function(i, data){
      let field222 = data.karir;
      $.each(field222, function(i, data){
         $('#data-karir').append('<li><a target="_blank" href="' + data.link + '">' + data.perusahaan + '</a><p class="float-right"><strong>' + data.tahun + '</strong></p><p>' + data.deskripsi + '</p></li>');
      });
    });

    $.each(field3, function(i, data){
      let field33 = data.konten;
      $('#caption-porto').append(data.caption);
      $.each(field33, function(i, data){
      if (data.type == 'images'){
         $('#data-porto').append('<div class="col-sm-3" style="padding-bottom: 30px;"><div class="hovereffect"><img src="' + data.thumbs + '" alt="' + data.title + '" class="porimg img-fluid" style="width: 100%;"/><div class="overlay"><a class="info venobox" data-gall="portfolioGallery" href="' + data.img + '" title="' + data.title + '"><i class="fa fa-eye"></i>&nbsp;Lihat</a></div></div></div>');
      }else{
         $('#data-porto').append('<div class="col-sm-3" style="padding-bottom: 30px;"><div class="hovereffect"><img src="' + data.thumbs + '" alt="' + data.title + '" class="porimg img-fluid" style="width: 100%;"/><div class="overlay"><a class="info venobox" data-gall="portfolioGallery" href="' + data.img + '" style="margin:5px;" title="' + data.title + '"><i class="fa fa-eye"></i>&nbsp;Lihat</a><a class="info" target="_blank" href="' + data.href + '" title="' + data.title + '"><i class="fa fa-link"></i>&nbsp;Link</a></div></div></div>');
      }
      });
    });

    $.each(field4, function(i, data){
      $('#data-hobby').append(data.caption);
      $('#data-hobby-list').append(data.lists);
    });

    $.each(field5, function(i, data){
      let field55 = data.skilllist;
      $('#data-skills').append(data.caption);
      $.each(field55, function(i, data){
         $('#data-skills-list').append('<h6>' + data.nama_skill + '</h6><div class="progress" style="margin-bottom: 1em;"><div class="progress-bar" role="progressbar" aria-valuenow="' + data.progress + '" aria-valuemin="0" aria-valuemax="100" style="width:' + data.progress + '%"><strong>' + data.progress + '%</strong><span class="sr-only">' + data.progress + '% Complete</span></div></div>');
      });
    });
  });
});

//Venobox
$(document).on("mouseover", '.info', function() {
  $('.venobox').venobox({                            
    frameheight: '500px',                            // default: ''
    // border     : '10px',                             // default: '0'
    // bgcolor    : '#5dff5e',                          // default: '#fff'
    // titleattr  : 'data-title',                       // default: 'title'
    // numeratio  : true,                               // default: false
    // infinigall : true,                               // default: false
    // share      : ['facebook', 'twitter', 'download'] // default: []
  });
});

//Auto age & year
  var birthdate = new Date("1993/07/30");
  var cur = new Date();
  var diff = cur-birthdate;
  var age = Math.floor(diff/31536000000);
  //document.getElementById("agee").innerHTML = age;

  var date = new Date();
  var year = date.getFullYear();
  document.getElementById("yearnow").innerHTML = year;