var studentArray = ["https://pbs.twimg.com/profile_images/423635742011580416/MJuTgcm6.jpeg", "https://pbs.twimg.com/profile_images/423624048073900032/b1g1y2jP.jpeg", "https://pbs.twimg.com/profile_images/378800000080638564/f9252ff289a564317e5670ca940924c8.jpeg", "https://pbs.twimg.com/profile_images/378800000483453055/82fb01cbb86dface943e8bd51fe594d8.jpeg", "https://pbs.twimg.com/profile_images/3183445333/aa0a901ad253fadd19cce75da232e535.jpeg", "https://pbs.twimg.com/profile_images/430741383310094336/1oPfRHIy.jpeg", "https://pbs.twimg.com/profile_images/2223594153/linkedin.jpg", "https://pbs.twimg.com/profile_images/3307682161/b414190922f97ff34523771eba4d89cd.jpeg", "https://pbs.twimg.com/profile_images/431665440381628416/bPWBe9BY.jpeg", "https://pbs.twimg.com/profile_images/3755709051/1b91f68fad6fc7eaddd37afc75adb44f.jpeg", "https://pbs.twimg.com/profile_images/378800000577538930/752fefb6d56076296db292c06d7f6a7d.jpeg", "https://pbs.twimg.com/profile_images/424179628648198144/OqJWa4az.jpeg", "https://pbs.twimg.com/profile_images/2322415130/htuzsdqvq2bq6jjv2055.jpeg", "https://pbs.twimg.com/profile_images/378800000831574653/178e40dda3a4c87298e59efb473694f4.jpeg", "https://pbs.twimg.com/profile_images/414087539394240513/f0PzS2mm.jpeg", "https://pbs.twimg.com/profile_images/418156829462372352/-RBzwpZP.jpeg", "https://pbs.twimg.com/profile_images/2828067538/0e16457d0e5c32ec7b39eeb99c5ce697.jpeg", "https://pbs.twimg.com/profile_images/1136772632/dressdocs.jpg"];
studentArray.sort(function() {return 0.5 - Math.random() });

$( document ).ready(function() {
  $('#one').append('<img src=' +studentArray[0] +'>');
  $('#two').append('<img src=' +studentArray[1] +'>');
  $('#three').append('<img src=' +studentArray[2] +'>');
  $('#four').append('<img src=' +studentArray[3] +'>');
  $('#five').append('<img src=' +studentArray[4] +'>');
  $('#six').append('<img src=' +studentArray[5] +'>');
  $('#seven').append('<img src=' +studentArray[6] +'>');
  $('#eight').append('<img src=' +studentArray[7] +'>');
  $('#nine').append('<img src=' +studentArray[8] +'>');
  $('#ten').append('<img src=' +studentArray[9] +'>');

  $( 'li' ).click(function() {
    $( this ).siblings().hide();
    $( this ).addClass("chosen");

  });




});

