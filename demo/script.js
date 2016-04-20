// 分辨率
var resX,resY,resTimes;

function resolution(){
	if($('.animationWrap').hasClass('hasDevice')){
		switch($('.animationWrap').data('res')){
			case 'device_ip4' : {
				resTimes = 2;
				break;
			}
			case 'device_ip5' : {
				resTimes = 2;
				break;
			}
			case 'device_ip6' : {
				resTimes = 2;
				break;
			}
			case 'device_ip6plus' : {
				resTimes = 2.6087;
				break;
			}
		}
		resX = Math.floor($('.m_stage .inner').width() * resTimes);
		resY = Math.floor($('.m_stage .inner').height() * resTimes);
	}else{
		resTimes = 1;
		resX = $('.m_stage').width();
		resY = $('.m_stage').height();
	}

	$('#txtDesc').text('Resolution: ' + resX + '*' + resY + ', Pixel Density: ' + resTimes * 100 + '%');
	bgBodySize(resTimes);
	bgStageSize(resTimes);
}
function loadNoBody(o){
	var imgM = [];
	imgM[0] = $(o).width();
	imgM[1] = $(o).height();
	showNoBody(imgM);
}
function loadNoStage(o){
	var imgM = [];
	imgM[0] = $(o).width();
	imgM[1] = $(o).height();
	showNoStage(imgM);
}
function bgBodySize(res){

	var bgImg = new Image();

	bgImg.src = $('body').css('background-image').replace("url(","").replace(")","").replace(/\"/g,"");

	$('#noBodyimg').data('res',res).attr('src',bgImg.src);

}
function bgStageSize(res){

	var bgImg = new Image();

	bgImg.src = $('.m_stage .inner').css('background-image').replace("url(","").replace(")","").replace(/\"/g,"");
	$('#noStageimg').data('res',res).attr('src',bgImg.src);

}
function showNoBody(num){
	var res = $('#noBodyimg').data('res');
	var bgs = '';
	bgs = Math.floor(num[0]/res) + 'px ' + Math.floor(num[1]/res) + 'px';
	if($('body').hasClass('img_bg4')){
		$('body').css({
			'background-size' : 'cover'
		});
	}else{
		$('body').css('background-size',bgs);
	}
}
function showNoStage(num){
	var res = $('#noStageimg').data('res');
	var bgs = '';
	bgs = Math.floor(num[0]/res) + 'px ' + Math.floor(num[1]/res) + 'px';
	if($('.m_stage').hasClass('img_bg4') || $('.m_stage .inner').hasClass('img_bg4')){
		$('.m_stage,.m_stage .inner').css({
			'background-size' : 'cover'
		});
	}else{
		$('.m_stage,.m_stage .inner').css('background-size',bgs);
	}
}

// 文件名称
var file_name = $('#ani_initFile').val();

// transform动画类型定义
var trans = new Object();
trans.anitype = []; // 动画类型
trans.anisort = []; // 动画类型顺序

// transform动画类型
for(var i = 0;i<$('#newPro option').length;i++){
	var $transoption = $('#newPro option:eq('+ i +')');
	if($transoption.data('transtype') == 'trans'){
		trans.anitype.push($transoption.val());
		trans.anisort.push($transoption.data('transsort'));
	}
};

// 动画transform关键帧数量
var trans_num = [];

// 动画transform属性合并临时存储
var trans_line_base = [];
var trans_pro_base = [];
var trans_val_base = [];
var trans_code_base = [];

// 动画基本属性定义
var common_line_base = ''; //基本css语句
var common_pro_num_base = ''; //基本css值对数
var common_code_base = []; //基本css值对
var common_pro_base = []; //基本css属性
var common_val_base = []; //基本css值
common_val_base[0] = $('#ani_initName').val();

// 动画全部关键帧属性定义
var css_line_base = []; //全部关键帧css语句
var css_pro_num_base = []; //全部关键帧css值对数
var css_code_base = []; //全部关键帧css值对
var css_pro_base = []; // 全部关键帧css属性记录
var css_val_base = []; // 全部关键帧css值记录
var css_keyframes_line_base = ''; // 全部关键帧css拼装
var css_keyframes_base = []; // 全部关键帧逐帧css

// 动画关键帧百分数
var key_pct_base = ["0"];

// 重要关键帧变量
var key_cur_base = $('#keyStep').text(); // 当前关键帧定位
var key_tl_num_base = $('.key_lb').length; // 全局关键帧数量

// data
var _cssData = {};
var _cssJSON = '';

// 面板显示
var panelVis = 0;

// 排序函数
function sortNumber(a,b){
	return a - b;
}

// 数组插入方法
Array.prototype.insert = function(index,item){
	this.splice(index,0,item);
}

//alert
function txtAlert(txt){
	$('#f_stage_alert .con').html(txt);
	$('#f_stage_alert').show();
    setTimeout(function(){
	    $('#f_stage_alert').hide();
    },2000);
    return false;
}

// 动画基本属性配置
function commonInit(){

	common_pro_num_base = $('.key_common').length; //css值对数量
	common_line_base = ''; //重置基本css语句
	common_pro_base = [];
	common_val_base = [];

	for(var i=0;i<common_pro_num_base;i++){

		var $thisCommon = $('.key_common:eq('+ i +')');

		common_pro_base[i] = $thisCommon.data('role');
		common_val_base[i] = '';

		if($thisCommon.data('role') == 'transform-origin'){ // transform-origin
			for(var j=0; j<$thisCommon.find('.key_val').length;j++){
				common_val_base[i] += ' ' + $thisCommon.find('.key_val:eq('+ j +')').val();
				common_code_base[i] = '  ' + common_pro_base[i] + ':' + common_val_base[i] + ';\r\n';
			}
		}else if($thisCommon.data('role') == 'animation-timing-function'){ // animation-timing-function
			var $timingFunctionVal = $thisCommon.find('.key_val');
			var $timingCount = $('#ani_initTimingfunction2 input');
			if($timingFunctionVal.val() == 'steps'){
				common_val_base[i] = 'steps('+ $timingCount.val() +')';
				common_code_base[i] = '  ' + common_pro_base[i] + ': ' + common_val_base[i] + ';\r\n';
			}else{
				common_val_base[i] = $thisCommon.find('.key_val').val() + $thisCommon.data('units');
				common_code_base[i] = '  ' + common_pro_base[i] + ': ' + common_val_base[i] + ';\r\n';
			}
		}else{ // common
			common_val_base[i] = $thisCommon.find('.key_val').val() + $thisCommon.data('units');
			common_code_base[i] = '  ' + common_pro_base[i] + ': ' + common_val_base[i] + ';\r\n';
		}

		common_line_base += common_code_base[i];
	}
}

// 动画关键帧属性配置
function cssInit(){

	// 重新获取重要关键帧变量
	key_cur_base = $('#keyStep').text(); // 当前关键帧定位
	key_tl_num_base = $('.key_lb').length; // 全局关键帧数量
	css_keyframes_line_base = '';

	// 关键帧
	for(var i=0;i<key_tl_num_base;i++){ //关键帧数量循环

		var key_pct = $('.key_pct:eq('+ i +')').text();

		// 当前关键帧的index为i，定义当前关键帧
		if(key_cur_base == key_pct){

			var css_pro_num = $('#keytb tr').length; //当前关键帧css值对数量

			css_line_base[i] = '';
			css_pro_base[i] = [];
			css_val_base[i] = [];
			css_code_base[i] = [];

			trans_line_base[i] = '';
			trans_pro_base[i] = [];
			trans_val_base[i] = [];
			trans_code_base[i] = [];

			if(css_pro_num > 0){

				for(var j=0;j<css_pro_num;j++){ //值对循环

					// 设置CSS属性和值
					css_pro_base[i][j] = $('#keytb tr:eq('+ j +')').find('.key_property').text(); //设置css属性
					css_val_base[i][j] = $('#keytb tr:eq('+ j +')').find('.key_val').val(); //设置css值

					css_code_base[i][j] = '    ' + css_pro_base[i][j] + ': ' + css_val_base[i][j] + ';\r\n'; //拼合属性值对

					for(var k=0;k<trans.anitype.length;k++){ //包含transform属性数量循环

						// 是否为transform属性
						if(css_pro_base[i][j] == trans.anitype[k]){

							trans_pro_base[i][j] = css_pro_base[i][j];
							trans_val_base[i][j] = css_val_base[i][j];

							trans_code_base[i][j] = ' ' + trans_pro_base[i][j] + '(' + trans_val_base[i][j] + ')';
							trans_line_base[i] += trans_code_base[i][j];

							css_pro_base[i][j] = '';
							css_val_base[i][j] = '';
							css_code_base[i][j] = '';
						}
					}
					css_line_base[i] += css_code_base[i][j]; // 拼合css语句
				}
				if(trans_line_base[i]!=''){
					trans_line_base[i] = '    transform:' + trans_line_base[i] + ';\r\n';
				}
				$('#trans_merge').val(trans_line_base[i]);
				css_line_base[i] = css_line_base[i] + trans_line_base[i];
			}
		}
		css_keyframes_base[i] = '  ' + key_pct + '%{\r\n'+ css_line_base[i] +'  }\r\n';
		css_keyframes_line_base += css_keyframes_base[i];
	}
	css_keyframes_line_base = '@keyframes ' + common_val_base[0] + '{\r\n' + css_keyframes_line_base + '}';
}

// 清空css代码
function cssReset(){
	$('#codewrap').text('.' + common_val_base[0] + '{\r\n}');
}

// 输出css代码
function cssPrint(){

	cssReset();

	setTimeout(function(){
		var css_all = '.' + common_val_base[0] + '{\r\n'+ common_line_base +'}\r\n' + css_keyframes_line_base;
		$('#codewrap').text(css_all);
		_cssData = {
			'name' : file_name,
			'value' : common_val_base[0],
			'css' : css_all.replace(/\r\n/g,'').replace(/\s+/g,'') // 清除格式
		}
		_cssJSON = $.toJSON(_cssData);
	},0);
}

// 当前视图
function currentStatus(){

	var current_line = ''; // 当前视图的style
	var current_css_code = '';
	var current_trans_code = '';
	var index = $('.lb_select').index();
	var playstage = $('#animation').css('animation-play-state');

	for(var i=0;i<css_pro_base[index].length;i++){ //值对循环

		// 普通css或transform属性
		if(css_pro_base[index][i] != ''){ // 对应设置时的css_pro_base[i][j]

			current_css_code += '  ' + css_pro_base[index][i] + ': ' + css_val_base[index][i] + ';\r\n'
		}else{

			current_trans_code += ' ' + trans_pro_base[index][i] + '(' + trans_val_base[index][i] + ')'
		}
	}

	if(current_trans_code != ''){
		current_line = current_css_code + '  transform:' + current_trans_code + ';\r\n';
	}else{
		current_line = current_css_code;
	}

	$('#codewrap').text('.' + common_val_base[0]+ '{\r\n' + current_line + '}');

}

// 关键帧配置面板
function cssPanel(o){

	$('.' + common_val_base[0] + ',.playarr').css('animation-play-state','running');
	$('#aniPause button,#aniStop button').attr('disabled',true);

	cssReset();
	$('#playTL').removeClass('playarr');

	cssInit();

	// 关键帧切换
	key_cur_base = $(o).find('.key_pct').text();
	$('#keyStep').text(key_cur_base);
	$('#key_new').val(key_cur_base);
	$('.key_lb').removeClass('lb_select');
	$(o).addClass('lb_select');

	// 关键帧配置
	$('#keytb').empty();

	var index = $(o).index(); //当前时间标签的index

	if(css_pro_base[index].length == 0){
		$('#f_emptypro').show();
	}else{
		$('#f_emptypro').hide();
	}

	for(var i=0;i<css_pro_base[index].length;i++){ //值对循环

		var $tr_demo = $('#keytb_demo tr').clone(true);
		$('#keytb').append($tr_demo);

		// 普通css或transform属性
		if(css_pro_base[index][i] != ''){ // 对应设置时的css_pro_base[i][j]
			$('#keytb').find('.key_property:eq('+ i +')').text(css_pro_base[index][i]);
			$('#keytb').find('.key_val:eq('+ i +')').val(css_val_base[index][i]);
		}else{
			$('#keytb').find('.key_property:eq('+ i +')').text(trans_pro_base[index][i]);
			$('#keytb').find('.key_val:eq('+ i +')').val(trans_val_base[index][i]);
		}

	}
	cssInit();
	currentStatus();

}

// 保存动画
function cssInsert(){

	commonInit(); // 动画基本属性配置
	cssInit(); // 动画关键帧属性配置
}

// 插入关键帧
function aniInsertCss(){

	cssInit();

	var key = $('#key_new').val(); // 新建关键帧的百分比值
	var keys = []; // 已有关键帧
	var pKey = ''; // 上一个关键帧的百分比值
	var pKeyIndex = '';

	key_pct_base = ["0"]; // 关键帧百分数数组重置 

	if(key>0 && key<=100){

		// 重复新建关键帧判断
		for(var i=0;i<key_tl_num_base;i++){
			keys[i] =  $('.key_lb:eq('+ i +') .key_pct').text();
			if(keys[i] == key){
				txtAlert('<span class="icon-warning"></span> 不能新建重复的关键帧！');
				return false;
			}
		}

		// 创建新关键帧标签
		for(var j=key_tl_num_base-1;j>=0;j--){

			// 获取上一个关键帧的百分比值
			pKey =  $('.key_lb:eq('+ j +') .key_pct').text();

			if(key - pKey > 0){

				$('#keyStep').text(key);
				$('.key_lb').removeClass('lb_select');
				
				// 复制上一个关键帧内容
				$('.key_lb:eq('+ j +')').before($('.key_lb:eq('+ j +')').clone(true)).addClass('lb_select').css('left',key + '%').find('.key_pct').text(key);
				
				pKeyIndex = $('.key_lb:eq('+ j +')').index(); // pKey的index

				break;
			}
		}

		key_tl_num_base = $('.key_lb').length; // 全局关键帧数量
		key_cur_base = $('#keyStep').text(); // 当前关键帧定位

		// 为关键帧设置位置(key_tl_num_base已+1)
		for(var i=0;i<key_tl_num_base;i++){
			keys[i] =  $('.key_lb:eq('+ i +') .key_pct').text();
			//keys = keys.sort(sortNumber);
			$('.key_lb:eq('+ i +')').css('left',keys[i] + '%');
			$('.key_lb:eq('+ i +') .key_pct').text(keys[i]);
		}

		// 将新值插入到关键帧配置面板中
		for(var i=0;i<key_tl_num_base;i++){ // 关键帧数量

			var key_pct = $('.key_pct:eq('+ i +')').text();

			if(key_cur_base == key_pct){

				css_pro_base.insert(i,css_pro_base[pKeyIndex]);
				css_val_base.insert(i,css_val_base[pKeyIndex]);
				trans_pro_base.insert(i,trans_pro_base[pKeyIndex]);
				trans_val_base.insert(i,trans_val_base[pKeyIndex]);

				$('#keytb').empty();

				for(var j=0;j<css_pro_base[i].length;j++){ //值对循环
					var $tr_demo = $('#keytb_demo tr').clone(true);
					$('#keytb').append($tr_demo);

					// 普通css或transform属性
					if(css_pro_base[i][j] != ''){
						$('#keytb').find('.key_property:eq('+ j +')').text(css_pro_base[i][j]);
						$('#keytb').find('.key_val:eq('+ j +')').val(css_val_base[i][j]);
					}else{
						$('#keytb').find('.key_property:eq('+ j +')').text(trans_pro_base[i][j]);
						$('#keytb').find('.key_val:eq('+ j +')').val(trans_val_base[i][j]);
					}
				}
			}

			// 为关键帧百分数数组赋值
			key_pct_base[i] = key_pct;

		}

		// 再赋新值
		cssInit();

		// cssPrint(); // 输出css代码

	}else{

		txtAlert('<span class="icon-warning"></span> 请输入0-100之间的数字');
	}
}

// 添加关键帧属性
function cssAddpro(){

	cssInit();

	for(var i=0;i<key_tl_num_base;i++){ // 关键帧数量
		var key_pct = $('.key_pct:eq('+ i +')').text();

		if(key_cur_base == key_pct){

			var prolen = css_pro_base[i].length + 1;

			// 给数组赋新值
			var newpro = $('#newPro').val();
			var newval = $('#newVal').val();
		
			// 拉取在页面中
			if(!newpro == '' && !newval == ''){
				css_pro_base[i][prolen] = newpro;
				css_val_base[i][prolen] = newval;
				var $tr_demo = $('#keytb_demo tr').clone(true);
				$('#keytb').append($tr_demo);
				$('#keytb').find('.key_property:last').text(css_pro_base[i][prolen]);
				$('#keytb').find('.key_val:last').val(css_val_base[i][prolen]);

				$('#newVal').val('');
				$('#f_emptypro').hide();
			}else{
				txtAlert('<span class="icon-warning"></span> 不能添加空属性！');
			}
		}
	}
	if($('#keytb tr').length<2){
		var helptxt = $('#keytb .inputTxt input').attr('title');
		$('#keytb .inputTxt').append('<div class="helptxt c_t2"></div>');
		$('#keytb .helptxt').html('<span class="vt_m icon-question mr5"></span><span class="vt_m">'+helptxt+'</span>');
		setTimeout(function(){	
			$('#keytb .helptxt').remove();
		},1000);
	}else{
		$('#keytb .helptxt').remove();
	}

	cssInit();
	currentStatus();
}

// 时间轴播放
function playTL(){
	$('#playTL').removeClass('playarr');
	setTimeout(function(){
		var styleTL = '.playarr{animation:styleTL '+ common_val_base[1] + ' ' + common_val_base[2] +' linear '+ common_val_base[3] +'; animation-direction:'+ common_val_base[4] +'; animation-timing-function:'+ common_val_base[5] +'; animation-fill-mode:' + common_val_base[6] + '}@keyframes styleTL{0%{transform:translateX(0)}100%{transform:translateX(100%)}}'
		$('#styleTL').text(styleTL);
		$('#playTL').addClass('playarr');
	},0);
}

//反向重播disabled
function ani_direction(){
	var countVal = $('#ani_initCount').val();
	if(countVal>1 || countVal == 'infinite'){
		$('#ani_initDirection').attr('disabled',false);
	}else{
		$('#ani_initDirection').val($(this)[0].defaultValue).attr('disabled',true);
	}
}

// 切换变形原点
function control_q(obj){

	$('.animationWrap .pos').show();
	setTimeout(function(){
		$('.animationWrap .pos').hide();
	},1000);
	$('#control_q .c').removeClass('cur');
	$(obj).addClass('cur');
	var og1 = $(obj).data('og1');
	var og2 = $(obj).data('og2');
	var pos1 = '';
	var pos2 = '';
	$('#ani_initOrigin1').val(og1);
	$('#ani_initOrigin2').val(og2);
	switch (og1){
		case 'left' : pos1 = 'left:0;'; break;
		case 'center' : pos1 = 'left:50%;'; break;
		case 'right' : pos1 = 'left:100%;'; break;
	}
	switch (og2){
		case 'top' : pos2 = 'top:0;'; break;
		case 'center' : pos2 = 'top:50%;'; break;
		case 'bottom' : pos2 = 'top:100%;'; break;
	}
	$('.animationWrap .pos').attr('style',pos1 + pos2);
	commonInit();
}

$(function(){

	// 分辨率
	resolution();

	// 导航切换
	$('.nav .item .txt').click(function(){

		// panel显示
		if(panelVis == 1){
			txtAlert('<span class="icon-warning"></span> 点击图片，显示所有面板');
			$('.SC').show();
			panelVis = 0;
		}

		var anict = $(this).data('role');
		$('.aniCate').hide();
		$('#aniCate' + anict).show();
		$('.nav .item .txt').parent().removeClass('select');
		$(this).parent().addClass('select');
		cssReset();
		$('#playTL').removeClass('playarr');
		$('body').scrollTop(0);

		$('#article').removeAttr('style');

		if(anict==3){
			$('#article').css('overflow','hidden');
			if($('#ajaxHtml').text()==''){
				$('#ajaxHtml').load($('#ajaxHtml').data('src') + ' #loadHtml',function(response, status, xhr){
					$.SyntaxHighlighter.init();
				});
				$('#aniCate3 .item:eq(0)').addClass('select');
			}
			$('#ajaxHtml').show();
			$('#css_code,#css_use,.m_stage,#css_display').hide();
		}else if(anict==1){
			$('#ajaxHtml,#css_code').hide();
			$('#css_use,.m_stage,#css_display').show();
		}else{
			$('#ajaxHtml,#css_use').hide();
			$('#css_code,.m_stage,#css_display').show();
			if(key_tl_num_base>1){
				cssInsert();
				cssPrint(); // 输出css代码
				playTL();
			}
		}
	});

	// CSS手册中异步
	$('.lab_loadurl').live('click',function(){
		$('#ajaxHtml').load('library/'+$(this).data('href')+' #loadHtml',function(response, status, xhr){
			$.SyntaxHighlighter.init();
		});
	});

	// animate.css库效果切换
	$('#aniCate1 .tagCloud .lk').click(function(){
		cssReset();
		if(!$('#animation').is(':animated')){
			$('#aniCate1 .item').removeClass('select');
			$(this).parent('.item').addClass('select');
			$('#animation').attr('class','animation animated ' + $(this).attr('title'));
			$('#animatecssMet').text($(this).attr('title'));
			setTimeout(function(){
				$('#animation').attr('class','animation');
			},1000);
			return false;
		}
	});
	$('#aniCate3 .tagCloud .lk').click(function(){
		$('#ajaxHtml').load('library/'+$(this).attr('title')+'.html #loadHtml',function(response, status, xhr){
			$.SyntaxHighlighter.init();
		});
		$('#aniCate3 .item').removeClass('select');
		$(this).parent('.item').addClass('select');
		return false;
	});

	// 插入关键帧
	$('#insertKey').click(function(){
		aniInsertCss();
	});

	// 添加属性
	$('#addPro').click(function(){
		cssAddpro();
	});

	//播放
	$('#aniPlay button').click(function(){

		$('.' + common_val_base[0] + ',.playarr').attr('style','').css('animation-play-state','running');

		$('.animationWrap .pos').hide();

		$('#animation').attr('class',common_val_base[0]);

		if($('.f_ins').length == 0){
			if(key_tl_num_base>1){

				$('#aniPause button,#aniStop button').attr('disabled',false);

				cssInsert();
				cssPrint(); // 输出css代码
				playTL();
			}else{
				txtAlert('<span class="icon-warning"></span> 至少需要2个关键帧才能播放动画');
			}	
		}else{
			txtAlert('<span class="icon-warning"></span> 请检查基本属性');
		}
		$.SyntaxHighlighter.init();
	});

	//暂停
	$('#aniPause button').click(function(){

		var anidom1 = $('.' + common_val_base[0]).css('animation-play-state');
		var anidom2 = $('.playarr').css('animation-play-state');

		if(anidom1 == 'paused' || anidom2 == 'paused'){
			$('.' + common_val_base[0] + ',.playarr').css('animation-play-state','running');
		}else{
			$('.' + common_val_base[0] + ',.playarr').css('animation-play-state','paused');
		}

	});

	//停止
	$('#aniStop button').click(function(){

		$('.' + common_val_base[0] + ',.playarr').css('animation-play-state','running');
		$('#aniPause button,#aniStop button').attr('disabled',true);

		cssReset();
		$('#playTL').removeClass('playarr');
	});

	//属性更改
	$('.key_val').on('input propertychange',function(){

		$(this).each(function(){

			// 文件名称
			file_name = $('#ani_initFile').val();

			// 正则匹配
			var objStr = $(this).val();
			var $p = $(this).parents('.inputVali');

			$p.removeClass('inputCur').siblings('.f_ins').remove();

			switch ($(this).data('type')){
				case 'float' : {
					var objReg = new RegExp(/^\d+(\.\d+)?$/g);
					if($p.siblings('.f_ins').length == 0){
						if(!objReg.test(objStr)){
							$p.addClass('inputCur');
							if(objStr == ''){
								$p.after('<div class="mt5 c_t2 f_ins">上面的文本框不能为空</div>');
							}else{
								$p.after('<div class="mt5 c_t2 f_ins">请输入数字，支持小数点</div>');
							}
						}
					}
					break;
				}
				case 'number' : {
					var objReg = new RegExp(/^\d*$/g);
					if($p.siblings('.f_ins').length == 0){
						if(!objReg.test(objStr)){
							$p.addClass('inputCur');
							$p.after('<div class="mt5 c_t2 f_ins">请输入整数</div>');
						}else if(objStr == ''){
							$p.addClass('inputCur');
							$p.after('<div class="mt5 c_t2 f_ins">上面的文本框不能为空</div>');
						}
					}
					break;
				}
				case 'string' : {
					var objReg = new RegExp(/^[a-zA-Z][a-zA-Z0-9_]*$/g);
					if($p.siblings('.f_ins').length == 0){
						if(!objReg.test(objStr)){
							$p.addClass('inputCur');
							if(objStr == ''){
								$p.after('<div class="mt5 c_t2 f_ins">上面的文本框不能为空</div>');
							}else{
								$p.after('<div class="mt5 c_t2 f_ins">支持英文、数字和下划线，必须以英文字母开头</div>');
							}
						}
					}
					break;
				}
				case 'text' : {
					if(objStr == ''){
						if($p.siblings('.f_ins').length == 0){
							$p.addClass('inputCur');
							$p.after('<div class="mt5 c_t2 f_ins">上面的文本框不能为空</div>');
						}
					}
					break;
				}
			}		
		});

		cssInsert();
		$('#playTL').removeClass('playarr');

		ani_direction();

		currentStatus();

	});

	$('#ani_initTimingfunction1').on('input propertychange',function(){
		if($(this).val() == 'steps'){
			$('#ani_initTimingfunction2').show();
		}else{
			$('#ani_initTimingfunction2 input').val(1);
			$('#ani_initTimingfunction2 .inputVali').removeClass('inputCur');
			$('#ani_initTimingfunction2 .f_ins').remove();
			$('#ani_initTimingfunction2').hide();
		}
	});

	//点击时间轴上的关键帧
	$('.key_lb').on('click',function(){
		cssPanel(this);
	});

	// 删除关键帧
	$('.lb_del').on('click',function(){

		//cssInit();

		var tIndex = $(this).parent('.key_lb').index();
		var pIndex = tIndex - 1; //当前时间标签的index

		$('#keyStep').text(key_pct_base[pIndex]);

		if($(this).siblings('.key_pct').text()!=0){

			if(css_pro_base[pIndex] == 0){

				$('#f_emptypro').show();
			}else{

				$('#f_emptypro').hide();
			}

			css_pro_base.splice(tIndex,1);
			css_val_base.splice(tIndex,1);
			trans_pro_base.splice(tIndex,1);
			trans_val_base.splice(tIndex,1);

			key_pct_base.splice(tIndex,1); // 删除关键帧百分数数组对应项

			$('.key_lb:eq('+pIndex+')').focus(); // 焦点返回上一关键帧

			$('#keytb').empty();

			for(var i=0;i<css_pro_base[pIndex].length;i++){ //值对循环

				var tr_demo = $('#keytb_demo tr').clone(true);
				$('#keytb').append(tr_demo);

				// 普通css或transform属性
				if(css_pro_base[pIndex][i] != ''){ // 对应设置时的css_pro_base[i][j]
					$('#keytb').find('.key_property:eq('+ i +')').text(css_pro_base[pIndex][i]);
					$('#keytb').find('.key_val:eq('+ i +')').val(css_val_base[pIndex][i]);
				}else{
					$('#keytb').find('.key_property:eq('+ i +')').text(trans_pro_base[pIndex][i]);
					$('#keytb').find('.key_val:eq('+ i +')').val(trans_val_base[pIndex][i]);
				}
			}

			$('#key_new').val($(this).siblings('.key_pct').text());
			$(this).parent('.key_lb').remove();

			key_tl_num_base = $('.key_lb').length; // 全局关键帧数量
			key_cur_base = $('.key_lb:eq('+ pIndex +')').text();

			$('.key_lb').removeClass('lb_select');
			$('.key_lb:eq('+ pIndex +')').addClass('lb_select');

			currentStatus();
			
		}else{
			txtAlert('<span class="icon-warning"></span> 不能删除0%的关键帧！')
		}
		return false;
	});

	// 删除关键帧属性
	$('.pro_del').on('click',function(){

		var index = $('.lb_select').index(); //当前时间标签的index
		var index_pro = $(this).parents('tr').index();

		css_pro_base[index].splice(index_pro,1);
		css_val_base[index].splice(index_pro,1);
		trans_pro_base[index].splice(index_pro,1);
		trans_val_base[index].splice(index_pro,1);

		if(css_pro_base[index].length == 0){
			$('#f_emptypro').show();
		}

		$(this).parents('tr').remove();
		$('#newVal').focus();

		currentStatus();

		return false;
	});

	// 编辑样式
	$('#lockedit').click(function(){
		$('#codewrap').attr('contenteditable',false).removeClass('c_t0');;
		$('#lockedit').hide();
		$('#unlockedit').show().focus();
	});
	$('#unlockedit').click(function(){
		$('#codewrap').attr('contenteditable',true).addClass('c_t0');
		$('#lockedit').show().focus();
		$('#unlockedit').hide();
	});

	// 帮助
	$('.inputHelp input,.inputHelp select,.inputHelp .inputVir').on('focus',function(){

		var helptxt = $(this).attr('title');

		$(this).after('<div class="helptxt c_t2"></div>');

		if($(this).attr('id') == 'newVal'){
			var units = $('#newPro option:selected').data('units');
			$(this).siblings('.helptxt').html('<span class="vt_m icon-question mr5"></span><span class="vt_m">'+units + helptxt+'</span>');

		}else{
			$(this).siblings('.helptxt').html('<span class="vt_m icon-question mr5"></span><span class="vt_m">'+helptxt+'</span>');
		}

	});
	$('.inputHelp input,.inputHelp select,.inputHelp .inputVir').on('blur',function(){

		$(this).siblings('.helptxt').remove();
	});

	// 切换显示
	$('#set_ufo').on('change',function(){
		$('#animation').attr('src',$(this).val());
	});
	$('#set_bg').on('change',function(){
		if($('.m_stage').hasClass('nobg')){
			$('.m_stage').attr('class','m_stage x-panel nobg '+$(this).val());
		}else{
			$('.m_stage').attr('class','m_stage x-panel '+$(this).val());
		}
		resolution();
	});

	// 切换设备
	$('#set_device').on('change',function(){
		if($(this).val() == 0){
			$('.m_stage').removeClass('nobg');
			$('.animationWrap').attr('class','animationWrap').removeAttr('data-res');
		}else{
			$('.m_stage').addClass('nobg');
			$('.animationWrap').attr('class','animationWrap hasDevice '+$(this).val()).data('res',$(this).val());
		}
		resolution();
	});

	// 复制
	// zeroClipboard config
	var $client = new ZeroClipboard($('.f_copy_btn'));

	$client.on( "ready", function( readyEvent ) {
	  // alert( "ZeroClipboard SWF is ready!" );

	  $client.on( "aftercopy", function( event ) {
	    // `this` === `client`
	    // `event.target` === the element that was clicked
	    // event.target.style.display = "none";
	    // alert("内容已复制: \r\n" + event.data["text/plain"] );
	    txtAlert('<span class="icon-checkmark"></span> 复制代码成功！');
	  } );
	} );

	(function(){
		$.SyntaxHighlighter.init();
		setTimeout(function(){
			cssPrint();
		},2000);
	})();
	
	$('pre').show();

	//获得焦点
	$('div[tabindex="0"],a[tabindex="0"],span[tabindex="0"],input[tabindex="0"],button[tabindex="0"],select[tabindex="0"]').on('focusin',function(){
		$(this).addClass('getfocus');
	}).on('focusout',function(){
		$(this).removeClass('getfocus');
	});
	$('input[tabindex="0"],.key_val').on('focus',function(){
		$(this)[0].focused = true;
		$(this)[0].selected = true;
	}).on('mouseup',function(){
		if($(this)[0].focused){
			$(this)[0].focused = false;
			return false;
		}
	});

	// 拖拽提示
	$('.m_stage').on('dragenter',function(){
		txtAlert('<span class="icon-warning"></span> 拖拽到画布中以自定义图片，支持png, jpg, gif, bmp');
	});

	// scroll
	var distance = $('#css_display').height();
	var thisTop = $(window).scrollTop();

	$(window).scroll(function(){

		distance = $('#css_display').height();
		thisTop = $(window).scrollTop();

		if(thisTop>distance){
			$('#css_code,#css_use').addClass('side_fixed');
		}else{
			$('#css_code,#css_use').removeClass('side_fixed');
		}
	});

	$('#animation').on('click',function(){
		togglePanel();
	});

});

// 隐藏显示面板
function togglePanel(){
	if(panelVis == 0){
		$('.SC').hide();
		txtAlert('<span class="icon-warning"></span> 点击图片，隐藏所有面板');
		panelVis = 1;
	}else{
		$('.SC').show();
		txtAlert('<span class="icon-warning"></span> 点击图片，显示所有面板');
		panelVis = 0;
	}
}

// 自定义图片
function customPic(e){
	$('#set_ufo .customPic').remove();
	$('#set_ufo').append('<option class="customPic" value="'+ e.target.result +'">自定义</option>').val(e.target.result);
}

window.onresize = function(){
	resolution();
}

// 快捷键
document.onkeydown=function(event){
  var e = event || window.event || arguments.callee.caller.arguments[0];
  switch (e && e.keyCode){
  	case 13 : { // 回车
  		if($('.getfocus').attr('id') == 'key_new'){
  			$('#insertKey').trigger('click');
  			$('#key_new').select();
  			break;
  		}else if($('.getfocus').attr('id') == 'newVal'){
  			$('#addPro').trigger('click');
  			$('#newPro').focus();
  			break;
  		}else if($('.getfocus').hasClass('f_copy_btn')){
  			txtAlert('<span class="icon-warning"></span> 键盘操作不支持回车复制，请继续tab至代码处进行拷贝');
  			break;
  		}
  		$('.getfocus').trigger('click');
  		break;
  	}
  	case 27 : { // ESC
  		$('#aniStop button').trigger('click');
		$('body').scrollTop(0);
  		$('.logo .c1').focus();

		// panel显示
		if(panelVis == 1){
			txtAlert('<span class="icon-warning"></span> 点击图片，显示所有面板');
			$('.SC').show();
			panelVis = 0;
		}
  	}
  	case 46 : { // delete
  		if($('.getfocus').hasClass('lb')){
  			$('.getfocus .lb_del').trigger('click');
  		}
  	}
  }
  if ((e.ctrlKey)&&(e.keyCode == 13)) { // Ctrl + 回车
  	$('#aniPlay button').trigger('click');
  };
}; 