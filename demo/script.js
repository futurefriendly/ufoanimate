// 检测浏览器语言

function checklang(){
  
    /* get browser default lang */    
    if (navigator.userLanguage) {    
        baseLang = navigator.userLanguage.substring(0,2).toLowerCase();    
    } else {    
        baseLang = navigator.language.substring(0,2).toLowerCase();    
    }
    switchlang(baseLang);
}

function switchlang(bl){

	var lang = {
		la_1 : ['UFO Animate','UFO Animate'],
		la_2 : ['常规飞行','Animate.css'],
		la_3 : ['自定义飞行','Custom'],
		la_4 : ['标准飞行','Animate.css'],
		la_5 : ['CSS手册','CSS Manual (Chinese Only)'],
		la_6 : ['引起注意','Attention Seekers'],
		la_7 : ['弹跳','bounce'],
		la_8 : ['闪烁','flash'],
		la_9 : ['果冻','jello'],
		la_10 : ['脉冲','pulse'],
		la_11 : ['橡皮','rubberBand'],
		la_12 : ['抖动','shake'],
		la_13 : ['钟摆','swing'],
		la_14 : ['秋千','tada'],
		la_15 : ['摇晃','wobble'],
		la_16 : ['弹跳进入','Bouncing Entrances'],
		la_17 : ['弹跳向内进入','bounceIn'],
		la_18 : ['弹跳向下进入','bounceInDown'],
		la_19 : ['弹跳向右进入','bounceInLeft'],
		la_20 : ['弹跳向左进入','bounceInRight'],
		la_21 : ['弹跳向上进入','bounceInUp'],
		la_22 : ['弹跳退出','Bouncing Exits'],
		la_23 : ['弹跳向外退出','bounceOut'],
		la_24 : ['弹跳向下退出','bounceOutDown'],
		la_25 : ['弹跳向左退出','bounceOutLeft'],
		la_26 : ['弹跳向右退出','bounceOutRight'],
		la_27 : ['弹跳向上退出','bounceOutUp'],
		la_28 : ['淡入进入','Fading Entrances'],
		la_29 : ['淡入','fadeIn'],
		la_30 : ['向下淡入','fadeInDown'],
		la_31 : ['加强版向下淡入','fadeInDownBig'],
		la_32 : ['向右淡入','fadeInLeft'],
		la_33 : ['加强版向右淡入','fadeInLeftBig'],
		la_34 : ['向左淡入','fadeInRight'],
		la_35 : ['加强版向左淡入','fadeInRightBig'],
		la_36 : ['向上淡入','fadeInUp'],
		la_37 : ['加强版向上淡入','fadeInUpBig'],
		la_38 : ['淡出退出','Fading Exits'],
		la_39 : ['淡出','fadeOut'],
		la_40 : ['向下淡出','fadeOutDown'],
		la_41 : ['加强版向下淡出','fadeOutDownBig'],
		la_42 : ['向左淡出','fadeOutLeft'],
		la_43 : ['加强版向左淡出','fadeOutLeftBig'],
		la_44 : ['向右淡出','fadeOutRight'],
		la_45 : ['加强版向右淡出','fadeOutRightBig'],
		la_46 : ['向上淡出','fadeOutUp'],
		la_47 : ['加强版向上淡出','fadeOutUpBig'],
		la_48 : ['翻转','Flippers'],
		la_49 : ['普通翻转','flip'],
		la_50 : ['X轴翻转进入','flipInX'],
		la_51 : ['Y轴翻转进入','flipInY'],
		la_52 : ['X轴翻转退出','flipOutX'],
		la_53 : ['Y轴翻转退出','flipOutY'],
		la_54 : ['惯性','Lightspeed'],
		la_55 : ['惯性进入','lightSpeedIn'],
		la_56 : ['惯性退出','lightSpeedOut'],
		la_57 : ['旋转进入','Rotating Entrances'],
		la_58 : ['旋转向内进入','rotateIn'],
		la_59 : ['左上方旋转进入','rotateInDownLeft'],
		la_60 : ['右上方旋转进入','rotateInDownRight'],
		la_61 : ['右下方旋转进入','rotateInUpLeft'],
		la_62 : ['左下方旋转进入','rotateInUpRight'],
		la_63 : ['旋转退出','Rotating Exits'],
		la_64 : ['旋转向外退出','rotateOut'],
		la_65 : ['右下方旋转退出','rotateOutDownLeft'],
		la_66 : ['左下方旋转退出','rotateOutDownRight'],
		la_67 : ['左上方旋转退出','rotateOutUpLeft'],
		la_68 : ['右上方旋转退出','rotateOutUpRight'],
		la_69 : ['滑动进入','Sliding Entrances'],
		la_70 : ['向下滑动进入','slideInDown'],
		la_71 : ['向右滑动进入','slideInLeft'],
		la_72 : ['向左滑动进入','slideInRight'],
		la_73 : ['向上滑动进入','slideInUp'],
		la_74 : ['滑动退出','Sliding Exits'],
		la_75 : ['向下滑动退出','slideOutDown'],
		la_76 : ['向左滑动退出','slideOutLeft'],
		la_77 : ['向右滑动退出','slideOutRight'],
		la_78 : ['向上滑动退出','slideOutUp'],
		la_79 : ['特殊','Specials'],
		la_80 : ['悬挂掉落','hinge'],
		la_81 : ['滚过来','rollIn'],
		la_82 : ['滚粗去','rollOut'],
		la_83 : ['放大进入','Zoom Entrances'],
		la_84 : ['普通放大进入','zoomIn'],
		la_85 : ['向下放大进入','zoomInDown'],
		la_86 : ['向右放大进入','zoomInLeft'],
		la_87 : ['向左放大进入','zoomInRight'],
		la_88 : ['向上放大进入','zoomInUp'],
		la_89 : ['缩小退出','Zoom Exits'],
		la_90 : ['普通缩小退出','zoomOut'],
		la_91 : ['向下缩小退出','zoomOutDown'],
		la_92 : ['向左缩小退出','zoomOutLeft'],
		la_93 : ['向右缩小退出','zoomOutRight'],
		la_94 : ['向上缩小退出','zoomOutUp'],
		la_95 : ['基本配置','Configuration'],
		la_96 : ['飞碟名称','UFO Name'],
		la_97 : ['航线名称','Airline Name'],
		la_98 : ['飞行时间','Flight Duration'],
		la_99 : ['起飞前延误','Delay'],
		la_100 : ['秒','s'],
		la_101 : ['飞行次数','Flight Times'],
		la_102 : ['无限循环','infinite'],
		la_103 : ['播放1次','flight once'],
		la_104 : ['往返飞行','Direction'],
		la_105 : ['单方向飞行','normal'],
		la_106 : ['往返方向飞行','alternate'],
		la_107 : ['加速度','Acceleration'],
		la_108 : ['匀速','linear'],
		la_109 : ['渐慢','ease'],
		la_110 : ['加速','ease-in'],
		la_111 : ['减速','ease-out'],
		la_112 : ['慢快慢','ease-in-out'],
		la_113 : ['跳帧','steps'],
		la_114 : ['跳帧数量','Step Count'],
		la_115 : ['帧','step or steps'],
		la_116 : ['始终模式','Fill Mode'],
		la_117 : ['不启用始终模式','none'],
		la_118 : ['动画结束后以最终状态停止','forwards'],
		la_119 : ['动画开始前以最初状态预备','backwards'],
		la_120 : ['同时应用2种模式','both'],
		la_121 : ['注册点','Reg Point'],
		la_122 : ['时间轴','Timeline'],
		la_123 : ['插入关键帧','Insert keyframes'],
		la_124 : ['插入','Insert'],
		la_125 : ['关键帧','Keyframes'],
		la_126 : ['此关键帧没有设置属性','This keyframe has no properties set'],
		la_127 : ['添加属性','Add properties'],
		la_128 : ['宽度','width'],
		la_129 : ['高度','height'],
		la_130 : ['背景','background'],
		la_131 : ['圆角','border-radius'],
		la_132 : ['顶部距离','top'],
		la_133 : ['右侧距离','right'],
		la_134 : ['底部距离','bottom'],
		la_135 : ['左侧距离','left'],
		la_136 : ['透明度','opacity'],
		la_137 : ['X轴旋转','rotateX'],
		la_138 : ['Y轴旋转','rotateY'],
		la_139 : ['Z轴旋转','rotateZ'],
		la_140 : ['X轴位置变换','translateX'],
		la_141 : ['Y轴位置变换','translateY'],
		la_142 : ['Z轴位置变换','translateZ'],
		la_143 : ['X轴缩放','scaleX'],
		la_144 : ['Y轴缩放','scaleY'],
		la_145 : ['Z轴缩放','scaleZ'],
		la_146 : ['X轴倾斜','skewX'],
		la_147 : ['Y轴倾斜','skewY'],
		la_148 : ['透视','perspective'],
		la_149 : ['添加属性','Add property'],
		la_150 : ['显示','Display'],
		la_151 : ['设备','Device'],
		la_152 : ['视图尺寸','View Ratio'],
		la_153 : ['背景','Background'],
		la_154 : ['栅格','Grids'],
		la_155 : ['太空','Space'],
		la_156 : ['选择UFO','Select UFO'],
		la_157 : ['自定义飞碟图片','Custom UFO picture'],
		la_158 : ['引入文件','Import Files'],
		la_159 : ['复制','Copy'],
		la_160 : ['使用此动画','Use this animation'],
		la_161 : ['回调函数(可选)','Callback function (optional)'],
		la_162 : ['解锁编辑','Unlock'],
		la_163 : ['锁定编辑','Lock'],
		la_164 : ['恢复更改','Revert'],
		la_165 : ['关于','About']
	};
	var thislang = '';
         
    /* language match */   
    switch(bl)
    {      
        case "en":
            /* english */
            $('[data-lang]').each(function(){
            	thislang = $(this).data('lang')
            	$(this).text(eval('lang.' + thislang)[1]);
            });
            $('#langs').text('简体中文');
            break;
        case "zh":
            /* 简体中文 */
            $('[data-lang]').each(function(){
            	thislang = $(this).data('lang');
            	$(this).text(eval('lang.' + thislang)[0]);
            });
            $('#langs').text('English');
            break;
        default:
            /* default no match */   
    }   
}

function handleSwitchlang(){
	if($('#langs').text() == 'English'){
		switchlang('en')
	}else{
		switchlang('zh')
	}
}

// 初始视图
var zoomval = 1;

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
			case 'device_ipx' : {
				resTimes = 3;
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

	$('#txtDesc').html('resolution: ' + resX + '*' + resY + ', <br /> pixel density: ' + resTimes * 100 + '%, <br />view ratio: <span class="j_zoom">' + zoomval * 100 + '%</span>');
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
function txtAlert(txtgroup){

	if($('#langs').text() == 'English'){

		$('#f_stage_alert .con').html(txtgroup[1]);

	}else{

		$('#f_stage_alert .con').html(txtgroup[0]);

	}
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
				txtAlert(['<span class="icon-warning"></span> Cannot create duplicate keyframes!','<span class="icon-warning"></span> 不能新建重复的关键帧！']);
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

		txtAlert(['<span class="icon-warning"></span> Please enter a number between 0-100','<span class="icon-warning"></span> 请输入0-100之间的数字']);
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
				txtAlert(['<span class="icon-warning"></span> Cannot add properties without a value!','<span class="icon-warning"></span> 不能添加空属性！']);
			}
		}
	}
	if($('#keytb tr').length<2){

		var helptxt = '';
		if($('#langs').text() == 'English'){
			helptxt = $('#keytb .inputTxt input').data('cntitle');
		}else{
			helptxt = $('#keytb .inputTxt input').data('entitle');
		}

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

	// 语言
	checklang();

	// 分辨率
	resolution();

	$('#langs').click(function(){
		handleSwitchlang();
		return false;
	});

	// 导航切换
	$('.nav .j_panel .txt').click(function(){

		// panel显示
		if(panelVis == 1){
			txtAlert(['<span class="icon-warning"></span> Click UFO to show all panels','<span class="icon-warning"></span> 点击图片，显示所有面板']);
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
			$('#css_code,#css_use,.m_stage,#css_display,#about').hide();
		}else if(anict==4){
			$('#ajaxHtml,#css_code,#css_use,.m_stage,#css_display').hide();
			$('#about').show();
		}else if(anict==1){
			$('#ajaxHtml,#css_code,#about').hide();
			$('#css_use,.m_stage,#css_display').show();
		}else{
			$('#ajaxHtml,#css_use,#about').hide();
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
		$('#ajaxHtml').load('./demo/library/'+$(this).data('href')+' #loadHtml',function(response, status, xhr){
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
		$('#ajaxHtml').load('./demo/library/'+$(this).attr('title')+'.html #loadHtml',function(response, status, xhr){
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
				txtAlert(['<span class="icon-warning"></span> At least 2 keyframes are required to play the animation','<span class="icon-warning"></span> 至少需要2个关键帧才能播放动画']);
			}	
		}else{
			txtAlert(['<span class="icon-warning"></span> Please check the configuration','<span class="icon-warning"></span> 请检查基本配置']);
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

								if($('#langs').text() == 'English'){
									$p.after('<div class="mt5 tx_12 c_t2 f_ins">上面的文本框不能为空</div>');
								}else{
									$p.after('<div class="mt5 tx_12 c_t2 f_ins">The input box above cannot be empty</div>');
								}
								
							}else{

								if($('#langs').text() == 'English'){
								$p.after('<div class="mt5 tx_12 c_t2 f_ins">请输入数字，支持小数点</div>');
								}else{
								$p.after('<div class="mt5 tx_12 c_t2 f_ins">Please enter a number, decimal point was supported</div>');
								}
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

							if($('#langs').text() == 'English'){
								$p.after('<div class="mt5 tx_12 c_t2 f_ins">请输入整数</div>');
							}else{
								$p.after('<div class="mt5 tx_12 c_t2 f_ins">Please enter an integer</div>');
							}
						}else if(objStr == ''){
							$p.addClass('inputCur');

							if($('#langs').text() == 'English'){
								$p.after('<div class="mt5 tx_12 c_t2 f_ins">上面的文本框不能为空</div>');
							}else{
								$p.after('<div class="mt5 tx_12 c_t2 f_ins">The input box above cannot be empty</div>');
							}
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

								if($('#langs').text() == 'English'){
									$p.after('<div class="mt5 tx_12 c_t2 f_ins">上面的文本框不能为空</div>');
								}else{
									$p.after('<div class="mt5 tx_12 c_t2 f_ins">The input box above cannot be empty</div>');
								}
							}else{

								if($('#langs').text() == 'English'){
									$p.after('<div class="mt5 tx_12 c_t2 f_ins">支持英文、数字和下划线，必须以英文字母开头</div>');
								}else{
									$p.after('<div class="mt5 tx_12 c_t2 f_ins">letters, numbers, and underscores are supported, must begin with a letter</div>');
								}
							}
						}
					}
					break;
				}
				case 'text' : {
					if(objStr == ''){
						if($p.siblings('.f_ins').length == 0){
							$p.addClass('inputCur');
							if($('#langs').text() == 'English'){
								$p.after('<div class="mt5 tx_12 c_t2 f_ins">上面的文本框不能为空</div>');
							}else{
								$p.after('<div class="mt5 tx_12 c_t2 f_ins">The input box above cannot be empty</div>');
							}
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
			txtAlert(['<span class="icon-warning"></span> Cannot delete 0% keyframe!','<span class="icon-warning"></span> 不能删除0%的关键帧！'])
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

		var helptxt = '';
		if($('#langs').text() == 'English'){
			helptxt = $(this).data('cntitle');
		}else{
			helptxt = $(this).data('entitle');
		}

		$(this).after('<div class="helptxt c_t2"></div>');

		if($(this).attr('id') == 'newVal'){

			var units = '';

			if($('#langs').text() == 'English'){
				units = $('#newPro option:selected').data('cnunits');
			}else{
				units = $('#newPro option:selected').data('enunits');
			}

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

	// 切换视图大小
	function set_view(){
		zoomval = $('#set_view').val() / 100;
		$('.animationWrap').css('zoom',zoomval);
		$('.j_zoom').text(Math.floor(zoomval * 100) + '%');
		return zoomval;
	}
	$('#set_view').on('input',function(){
		set_view(this);
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
	    txtAlert(['<span class="icon-checkmark"></span> Copy success!','<span class="icon-checkmark"></span> 复制代码成功！']);
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
		txtAlert(['<span class="icon-warning"></span> Drag and drop a custom picture to the canvas, support png, jpg, gif, bmp','<span class="icon-warning"></span> 拖拽到画布中以自定义图片，支持png, jpg, gif, bmp']);
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
		txtAlert(['<span class="icon-warning"></span> Click UFO to hide all panels','<span class="icon-warning"></span> 点击图片，隐藏所有面板']);
		panelVis = 1;
	}else{
		$('.SC').show();
		txtAlert(['<span class="icon-warning"></span> Click UFO to show all panels','<span class="icon-warning"></span> 点击图片，显示所有面板']);
		panelVis = 0;
	}
}

// 自定义图片
function customPic(e){
	$('#set_ufo .customPic').remove();
	$('#set_ufo').append('<option class="customPic" value="'+ e.target.result +'">Custom UFO</option>').val(e.target.result);
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
  			txtAlert(['<span class="icon-warning"></span> Copy operation does not support a keyboard, please manually copy the code','<span class="icon-warning"></span> 键盘操作不支持回车复制，请继续tab至代码处进行拷贝']);
  			break;
  		}
  		$('.getfocus').trigger('click');
  		break;
  	}
  	case 27 : { // ESC
  		$('#aniStop button').trigger('click');
		$('body').scrollTop(0);
  		$('.logo .c3').focus();

		// panel显示
		if(panelVis == 1){
			txtAlert(['<span class="icon-warning"></span> Click UFO to show all panels','<span class="icon-warning"></span> 点击图片，显示所有面板']);
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