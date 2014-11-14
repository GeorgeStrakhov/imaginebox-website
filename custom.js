console.log('Hey, looks like you like looking behind the curtain! \n\nThis is great. Yes, this is using reveal.js library and was mostly created by slides.com. \n\nNow, if you are curious and a hacker by nature - we may have more in common than you think. Ping us at hello@ten-x.red and may be we can work together on something interesting.');

var justDown = false;

var clients = [
  {
    names: ["TEN-X", "tenx", "ten-x", "Ten-X"],
    hash: "ten-x"
  }
];

//go to next slide
$('.reveal').on('click', function(e) {
  e.preventDefault();
  if(!justDown) {
    Reveal.down();
    justDown = true;
    setTimeout(function(){
      justDown = false;
    },250);
  }
});

//request
$('.requestNowLink').on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  var loc = "mailto:iwantone@imaginebox.red?subject=I want an ImagineBox";
  window.location.href = loc;
});


$('.goToTenX').on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  var loc = "http://ten-x.red";
  window.location.href = loc;
});

//client login modal
$('.client-login-link').on('click', function(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  vex.dialog.open({
    message: 'Enter your company name:',
    input: "<input name=\"companyname\" type=\"text\" placeholder=\"Company Name\" required />",
    buttons: [
    $.extend({}, vex.dialog.buttons.YES, {
      text: 'Login'
    }), $.extend({}, vex.dialog.buttons.NO, {
      text: 'Back'
    })
  ],
    callback: function(data) {
      if (data === false) {
        return console.log('Cancelled');
      }
      var cname = false;
      var inputCname = data.companyname;
      $.each(clients, function(k,v) {
        if($.inArray(inputCname, v.names) > -1) {
          cname = v.hash;
        }
      });
      if(cname) {
        window.location.href="http://"+cname+".imaginebox.red";
        return;
      } else {
        vex.dialog.alert('Looks like your company is doesn\'t have an ImagineBox yet. <br /> Contact us at <a href="mailto:iwantone@imaginebox.red" target="_blank">iwantone@imaginebox.red</a> to request yours.');
      }
    }
  });
});
