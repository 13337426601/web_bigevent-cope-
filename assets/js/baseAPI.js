// 注意：每次调用$.get()或$.post()或$.ajax()的时候，会先调用ajaxPrefilter这个函数
// 在这个函数中，可以拿到我们给的Ajax提供的配置对象
$.ajaxPrefilter(function(options){
    // 在发起真正的Ajax请求前，同意拼接请求的根路径
    // console.log(options.url);
    options.url = 'http://www.liulongbin.top:3007' + options.url
    console.log(options.url);
})