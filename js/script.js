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