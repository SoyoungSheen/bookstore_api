const tl = gsap.timeline({ defaults: { duration: 0.75 } })

tl.fromTo('.introduce', { scale: 0.8, y: 100 }, { scale: 1, y: 0 });
tl.fromTo('.nav-text', '.nav-text2', { opacity: -1 }, { opacity: 1 })


//my rest_api_key: 



$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "BTS" },
  headers: { Authorization: "KakaoAK b0d05791d5bd9db3627ffb7d2c90a277" } // 본인 REST_API_KEY 넣기
})

  .done(function (msg) {



    $(".box").append("<img src='" + msg.documents[0].thumbnail + " class='bts1'/>");

    $(".box").append("<img src='" + msg.documents[1].thumbnail + "'/>");
    $(".box").append("<img src='" + msg.documents[2].thumbnail + "'/>");
    $(".box").append("<img src='" + msg.documents[3].thumbnail + "'/>");

    $(".box").append("<img src='" + msg.documents[5].thumbnail + "'/>");

    $(".box").append("<img src='" + msg.documents[7].thumbnail + "'/>");
    $(".box").append("<img src='" + msg.documents[8].thumbnail + "'/>");
    $(".box").append("<img src='" + msg.documents[9].thumbnail + "'/>");


  });


$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "LIFE" },
  headers: { Authorization: "KakaoAK b0d05791d5bd9db3627ffb7d2c90a277" } // 본인 REST_API_KEY 넣기
})

  .done(function (msg) {



    $(".box-2nd").append("<img src='" + msg.documents[0].thumbnail + "'/>");

    $(".box-2nd").append("<img src='" + msg.documents[1].thumbnail + "'/>");
    $(".box-2nd").append("<img src='" + msg.documents[2].thumbnail + "'/>");
    $(".box-2nd").append("<img src='" + msg.documents[3].thumbnail + "'/>");
    $(".box-2nd").append("<img src='" + msg.documents[4].thumbnail + "'/>");
    $(".box-2nd").append("<img src='" + msg.documents[5].thumbnail + "'/>");
    $(".box-2nd").append("<img src='" + msg.documents[6].thumbnail + "'/>");
    $(".box-2nd").append("<img src='" + msg.documents[7].thumbnail + "'/>");
    $(".box-2nd").append("<img src='" + msg.documents[8].thumbnail + "'/>");
    $(".box-2nd").append("<img src='" + msg.documents[9].thumbnail + "'/>");


  });


$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "LOVE" },
  headers: { Authorization: "KakaoAK b0d05791d5bd9db3627ffb7d2c90a277" } // 본인 REST_API_KEY 넣기
})

  .done(function (msg) {



    $(".box-3rd").append("<img src='" + msg.documents[0].thumbnail + "'/>");

    $(".box-3rd").append("<img src='" + msg.documents[1].thumbnail + "'/>");
    $(".box-3rd").append("<img src='" + msg.documents[2].thumbnail + "'/>");
    $(".box-3rd").append("<img src='" + msg.documents[3].thumbnail + "'/>");
    $(".box-3rd").append("<img src='" + msg.documents[4].thumbnail + "'/>");
    $(".box-3rd").append("<img src='" + msg.documents[5].thumbnail + "'/>");
    $(".box-3rd").append("<img src='" + msg.documents[6].thumbnail + "'/>");
    $(".box-3rd").append("<img src='" + msg.documents[20].thumbnail + "'/>");
    $(".box-3rd").append("<img src='" + msg.documents[8].thumbnail + "'/>");
    $(".box-3rd").append("<img src='" + msg.documents[11].thumbnail + "'/>");


  });


$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "FUN" },
  headers: { Authorization: "KakaoAK b0d05791d5bd9db3627ffb7d2c90a277" }
})
  .done(function (msg) {
    console.log(msg.documents[0].title);
    console.log(msg.documents[0].thumbnail);


    $(".book1").append("<img src='" + msg.documents[0].thumbnail + "'/>");
    $(".book1").append("<h3>" + msg.documents[0].title + "</h3>");
    $(".book1").append("<h6>" + msg.documents[0].authors[0] + "</h6>");
    $(".book1").append("<p>" + msg.documents[0].price + "원" + "</p>");



    $(".book2").append("<img src='" + msg.documents[1].thumbnail + "'/>");
    $(".book2").append("<h3>" + msg.documents[1].title + "</h3>");
    $(".book2").append("<h6>" + msg.documents[1].authors[1] + "</h6>");
    $(".book2").append("<p>" + msg.documents[1].price + "원" + "</p>");

    $(".book3").append("<img src='" + msg.documents[2].thumbnail + "'/>");
    $(".book3").append("<h3>" + msg.documents[2].title + "</h3>");
    $(".book3").append("<h6>" + msg.documents[2].authors[2] + "</h6>");
    $(".book3").append("<p>" + msg.documents[2].price + "원" + "</p>");

    $(".book4").append("<img src='" + msg.documents[3].thumbnail + "'/>");
    $(".book4").append("<h3>" + msg.documents[3].title + "</h3>");
    $(".book4").append("<h6>" + msg.documents[3].authors[3] + "</h6>");
    $(".book4").append("<p>" + msg.documents[3].price + "원" + "</p>");

    $(".book5").append("<img src='" + msg.documents[4].thumbnail + "'/>");
    $(".book5").append("<h3>" + msg.documents[4].title + "</h3>");
    $(".book5").append("<h6>" + msg.documents[4].authors[4] + "</h6>");
    $(".book5").append("<p>" + msg.documents[4].price + "원" + "</p>");

    $(".book6").append("<img src='" + msg.documents[5].thumbnail + "'/>");
    $(".book6").append("<h3>" + msg.documents[5].title + "</h3>");
    $(".book6").append("<h6>" + msg.documents[5].authors[5] + "</h6>");
    $(".book6").append("<p>" + msg.documents[5].price + "원" + "</p>");



  });