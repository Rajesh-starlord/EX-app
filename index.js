//There’s an old saying that men and women can’t be “just friends” because someone will always end up feeling something more and falling in love.
// But men and women are absolutely capable of being just friends.
// There are many perks to having a girl best friend if you’re a guy.
// If you have one, you know how special they are.
//Having a girl best friend means you’ll always have someone to open up to about the scary stuff without fear of being judged.
var data={
  wicky:{
    wiki:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor"
  },
  life_lessions:{
    les1:"sum is a+ a++",
    les2:"Hum karte the sum=a++",
    les3:"me bhul jati hu naaa",
    les4:"thik heeee",
    les5:"he_naaaaa",
    les6:"bhaya hindi me bat karo na",
  },
  voice:{
    voice1:"purnima sound",
    voice2:"song1",
    voice3:"song2"
  }
};

$("#Wiki").on('click',function () {
  console.log("hiii");
  $(".sub_container").html('<h1>wiki</h1>');
  $(".sub_container").empty();
  $(".sub_container").loadTemplate($('#wikitemp'),data.wicky,{append:true});
});

$("#life_lessions").on('click',function () {
  console.log("hii");
  $(".sub_container").html('<h1>life_lessions</h1>');
  $(".sub_container").empty();
  $(".sub_container").loadTemplate($('#life_lessions_temp'),data.life_lessions,{append:true});
});

$("#Sweet_voice").on('click',function () {
  console.log("hii");
  $(".sub_container").html('<h1>Sweet_voice</h1>');
  $(".sub_container").empty();
  $(".sub_container").loadTemplate($('#sweet_temp'),data.voice,{append:true});
});
