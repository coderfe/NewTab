$(function () {
  // 获取内容
  $.ajax({
    url: 'http://news-at.zhihu.com/api/4/news/latest',
    type: 'GET',
    async: true,
    success: function (data) {
      // 获取文章的id
      var ids = data.stories[0]['id'];
      // 请求文章的内容
      $.ajax({
        url: 'http://news-at.zhihu.com/api/4/news/' + ids,
        type: 'GET',
        success: function (article) {
          $('#container').append(article.body);
        }
      });
    },
    error: function (xhr) {
      console.log(xhr.status);
      alert('抱歉，当前无法获取文章！')
    }
  });

  // 回到顶部
  $('#js-top').click(function () {
    // if(document.body.scrollTop > 0) {
    //   timer = setInterval(function() {
    //     document.body.scrollTop -= 10;        
    //   }, 30);
    // } else if (document.body.scrollTop = 0) {
    //   clearInterval(timer);
    // }
    
    document.body.scrollTop = 0;
  });
});