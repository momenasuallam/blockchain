$("#nftdesign").on("click", function () {
  $(".nftdesignmodal").show();
});
$("#nftsmartcontract").on("click", function () {
  $(".nftsmartcontractmodal").show();
});
$("#nftwallet").on("click", function () {
  $(".nftwalletmodal").show();
});
$("#etherblockchain").on("click", function () {
  $(".etherblockchainmodal").show();
});
$("#solanbcha").on("click", function () {
  $(".solanbchamodal").show();
});
$("#marketinggrowth").on("click", function () {
  $(".marketinggrowthamodal").show();
});
$("#communitymgmt").on("click", function () {
  $(".communitymgmtmodal").show();
});
$("#contentprep").on("click", function () {
  $(".contentprepmodal").show();
});
$("#designnft2").on("click", function () {
  $(".designnft2modal").show();
});
$("#thinkingcollecting").on("click", function () {
  $(".thinkingcollectingmodal").show();
  $(".mdlbtncl").show();
    $(".formstate1").show();
  $(".formstate2").hide();
  $(".formstate3").hide();
  $(".formstate4").hide();
  $(".formstate5").hide();
  $(".formstate6").hide();
  $(".formstate7").hide();
});
$(".formstate2").hide();
$(".formstate3").hide();
$(".formstate4").hide();
$(".formstate5").hide();
$(".formstate6").hide();
$(".formstate7").hide();
$("#exit1").on("click", function () {
  $(".formstate1").hide();
  $(".formstate2").show();
});
$("#back1").on("click", function () {
  $(".formstate1").show();
  $(".formstate2").hide();
});
$("#exit2").on("click", function () {
  $(".formstate1").hide();
  $(".formstate2").hide();
  $(".formstate3").show();
});
$("#back2").on("click", function () {
  $(".formstate1").hide();
  $(".formstate2").show();
  $(".formstate3").hide();
});
$("#exit3").on("click", function () {
  $(".formstate1").hide();
  $(".formstate2").hide();
  $(".formstate3").hide();
  $(".formstate4").show();
});
$("#back3").on("click", function () {
  $(".formstate1").hide();
  $(".formstate2").hide();
  $(".formstate3").show();
  $(".formstate4").hide();
});
$("#exit4").on("click", function () {
  $(".formstate1").hide();
  $(".formstate2").hide();
  $(".formstate3").hide();
  $(".formstate4").hide();
  $(".formstate5").show();
});
$("#back4").on("click", function () {
  $(".formstate1").hide();
  $(".formstate2").hide();
  $(".formstate3").hide();
  $(".formstate4").show();
  $(".formstate5").hide();
});
$("#exit5").on("click", function () {
  $(".formstate1").hide();
  $(".formstate2").hide();
  $(".formstate3").hide();
  $(".formstate4").hide();
  $(".formstate5").hide();
  $(".formstate6").show();
});
$("#back5").on("click", function () {
  $(".formstate1").hide();
  $(".formstate2").hide();
  $(".formstate3").hide();
  $(".formstate4").hide();
  $(".formstate5").show();
  $(".formstate6").hide();
});
$("#submitme1").on("click", function () {
  $(".mdlbtncl").hide();
  $(".formstate1").hide();
  $(".formstate2").hide();
  $(".formstate3").hide();
  $(".formstate4").hide();
  $(".formstate5").hide();
  $(".formstate6").hide();
  $(".formstate7").show();
  $(".formstate6").fadeOut(4000);

// let iconMenu = document.getElementById("#lottiethankyou");

// let animationMenu = bodymovin.loadAnimation({
//   container: iconMenu,
//   renderer: "svg",
//   loop: false,
//   autoplay: false,
//   path: "https://finallyfreeproductions.com/blockchain/thankyou.json",
// });
//  animationMenu.play();

  setTimeout(function () {
    $(".thinkingcollectingmodal").hide();
  }, 3000);

});


$(".btn-close").on("click", function () {
  $(".modal").hide();
});



