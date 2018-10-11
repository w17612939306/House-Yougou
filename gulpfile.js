var gulp = require("gulp");//require:相当于<script src="gulp.js"></script>


//定义一个复制文件的任务
//task函数的第一个参数：copyHtml是任务名
//task函数的第一个参数function是任务copyHtml对应的功能

gulp.task("copy-index",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("D:/phpStudy/WWW/Project1"));//此处路径可以使用/或\\

});

//复制css文件架下所有文件
gulp.task("copy-css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:/phpStudy/WWW/Project1/css"));
});
//复制js文件架下所有文件
gulp.task("copy-js",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:/phpStudy/WWW/Project1/js"));
});
//复制img文件架下所有图片
gulp.task("copy-img",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:/phpStudy/WWW/Project1/img"));
});
//复制video文件架下所有视频
gulp.task("copy-video",function(){
	gulp.src("video/**/*")
	.pipe(gulp.dest("D:/phpStudy/WWW/Project1/video"));
});

gulp.task("build",["copy-index","copy-css","copy-js","copy-img","copy-video"],function(){
	console.log("OK");
	//一旦index.html的内容发生改变，那么就立即执行任务copyHtml;  
	//注意需要在控制台先输入gulp watchall 才能开启实时监视
	//gulp.watch("index.html",["copy-index"]);
});

//监听
gulp.task("watch",function(){
	//一旦index.html的内容发生改变，那么就立即执行任务copyHtml;  
	//注意需要在控制台先输入gulp watchall 才能开启实时监视
	gulp.watch("index.html",["copy-index"]);
	gulp.watch("css/**/*.css",["copy-css"]);
	gulp.watch("js/*.js",["copy-js"]);
	gulp.watch("img/**/*",["copy-img"]);
	gulp.watch("video/**/*",["copy-video"]);
});