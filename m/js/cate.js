$(function () {

    //
    // // 一级分类 1.默认渲染 2.第一个一级分类对应的二级分类
    //
    // getCategoryData(function (data) {
    //
    //     // 模板的使obj用顺序：json数据，定义模板，调用模板，返回html
    //     console.log(data);
    //
    //     $('.contain-cate').html(template('firstTemplate',data));
    //     var categoryId=$('.contain-cate a:first-child').attr('data-id');
    // //     // 点击一级分类 得到对应的二级分类
    //     getSecondCategoryData({
    //             id:categoryId
    //         },
    //         function (data) {
    //             console.log(data);
    //             $('.mui-slider-group-second').html(template('secondTemplate',data));
    //
    //         });
    //
    // });



    //选择卡 切换事件
    document.getElementById('slider').addEventListener('slide', function(e) {
        if (e.detail.slideNumber === 0) {

        }else{


        }
    });
});

// var getCategoryData =function (callback) {
//
//     $.ajax ({
//         type:'GET',
//         url:'json/pro1.json',
//         data:'',
//         dataType:'json',
//         success:function (data) {
//             callback && callback(data);
//         }
//     });
// };
// // 二级分类
// var getSecondCategoryData =function (params,callback) {
//
//     $.ajax ({
//         type:'GET',
//         url:'json/pro.json',
//         data:params,
//         dataType:'json',
//         success:function (data) {
//             callback && callback(data);
//         }
//     });
// };

