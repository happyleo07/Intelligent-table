  var H = document.documentElement.clientHeight; //获取当前屏幕可视高度
  // console.log(H);
  $(".left,.right,.right_content,.show_btn").css({
      "height": H,
  }); //设置高度
  $(".table_box").css({
      "height": H - 60,
  });
  $(".table,.third_box").css({
      "height": H - 60 - 59,
  });
  $(".table .tal").css({
      "height": H - 60 - 59 - 50,
  }); //   右侧表格区域高度设置
  $(window).resize(function() {
      var H = document.documentElement.clientHeight;
      $(".left,.right,.right_content,.show_btn").css({
          "height": H,
      });
      $(".table_box").css({
          "height": H - 60,
      });
      $(".table,.third_box").css({
          "height": H - 60 - 59,
      });
      $(".table .tal").css({
          "height": H - 60 - 59 - 50,
      });
  }); //设置高度

  //左侧导航收缩js
  $(".cli").click(function() {
      $(".left").animate({
          marginLeft: "-198px"
      }, 300);
      $(".show_btn").animate({
          marginLeft: "0px"
      });
  });
  $(".show_btn").click(function() {
      $(".left").animate({
          marginLeft: "0"
      }, 300);
      $(".show_btn").animate({
          marginLeft: "-40px"
      });
  });
  $(".left > ul>li a").click(function() {
      var $this = $(this).parent();
      if ($this.hasClass("cur")) {
          $this.find("ul").slideUp(300);
          $this.removeClass("cur");
      } else {
          $this.addClass("cur").siblings().removeClass("cur");
          $this.find("ul").slideDown(300);
          $this.siblings().find("ul").slideUp(300);
      }
  });

  //   表格复选框
  $('.r-check li input').click(function() {
      if ($(this).parents('li').hasClass('gou-active')) {
          $(this).parents('li').removeClass('gou-active');
      } else {
          $(this).parents('li').addClass('gou-active');
      }
  })