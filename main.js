$("#gpu-link").click(function () {
  const destiny = $("#gpus");
  $("html").animate(
    {
      scrollTop: destiny.offset().top,
    },
    800
  );
});

$("#cpu-link").click(function () {
  const destiny = $("#cpus");
  $("html").animate(
    {
      scrollTop: destiny.offset().top,
    },
    800
  );
});

$("#about-the-store-link").click(function () {
  const destiny = $("#about-the-store");
  $("html").animate(
    {
      scrollTop: destiny.offset().top,
    },
    800
  );
});
