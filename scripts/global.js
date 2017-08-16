var bgPpo = '<div class="bg_pop"></div>';
$(function(){
	$('.fixed_img').css({
		'top':( $(window).outerHeight()-$('.fixed_img').height() )/2,
		'left':( $(window).outerWidth()-$('.fixed_img').width() )/2-678
	})
	//查看影像
	$('.see_yingxiang').click(function(){
		$('.info_nav li').eq(2).click()
	})
	
	$(".info_nav li").on("click",function(){
		$(this).addClass("current").siblings().removeClass("current");
		$(".bd_info_con").eq($(this).index()).show().siblings().hide();
		if($(this).index()!==0){
			$('.fixed_img').hide(0)
		}else{
			$('.fixed_img').show(0)
		}
	});
	
	$("#xiaFa").on("click",function(){
		$("#xiaFaHide").show();
		$(".panel").css("overflow","hidden").append(bgPpo);
	});
	$("#hidePopSpan span").on("click",function(){
		$("#xiaFaHide").hide();
		$(".panel").css("overflow","auto");
		$(".bg_pop").remove();
	});
	
	$("#piLiang").on("click",function(){
		$("#zhaoHuiHide").show();
		$(".panel").css("overflow","hidden").append(bgPpo);
	});
	$("#hidePopSpanZh span").on("click",function(){
		$("#zhaoHuiHide").hide();
		$(".panel").css("overflow","auto");
		$(".bg_pop").remove();
	});
	
	$("#addShou").on("click",function(){
		var htmls = $("#addTable tr").eq(1).clone();
		$("#addTable").append(htmls);
		$("#addTable tr").eq($("#addTable tr").length-1).find(".has_tip").hide();
	});
	$("#deleteShou").on("click",function(){
		if($("#addTable tr").length > 2){
			$("#addTable tr").eq($("#addTable tr").length-1).remove();
		}
	});
	
	$("#addYin").on("click",function(){
		var htmls = $("#addTableYin tr").eq(1).clone();
		$("#addTableYin").append(htmls);
		$("#addTableYin tr").eq($("#addTableYin tr").length-1).find(".has_tip").hide();
	});
	$("#deleteYin").on("click",function(){
		if($("#addTableYin tr").length > 2){
			$("#addTableYin tr").eq($("#addTableYin tr").length-1).remove();
		}
	});
	
	var tip = '<span class="has_tip">A10010</span>';
	$(".fw_table .input,.fw_table_form .input,.fw_table .select,.fw_table_form .select").parent().append(tip);
	$("#jiu .has_tip").attr("id","tipYinJiu").show();
	$(".fw_table .input,.fw_table_form .input,.fw_table .select,.fw_table_form .select").on("change",function(){
		$(this).parent().find(".has_tip").show();
	});
	$(".fw_table").on("change",".select",function(){
		$(this).parent().find(".has_tip").show();
	});
	$(".fw_table").on("input",".select",function(){
		$(this).parent().find(".has_tip").show();
	});
	
	$("#showDateTips .has_tip").show().html("B1012").attr("id","dataTipsShow");
	//$(".fw_table_form").on("mouseout",".has_tip",function(){
	//	$("#dataTipsShow").hide();
	//});
	var tipCon2 = '<div class="show_tip_con show_tip_con_1">被保人（张三）年龄大于71岁，财务核保要求，请人工审核。</div>';
	$("#dataTipsShow").hover(function(){
		$(this).parent().append(tipCon2);
//		$(".panel").css("overflow","hidden").append(bgPpo);
	},function(){
		$(this).parent().css("background","none");
		$(".show_tip_con_1").remove();
		$(".panel").css("overflow","auto");
		$(".bg_pop").remove();
	});
	var tipCon = '<div class="show_tip_con show_tip_con_2">客户（张三）因健康原因（饮酒），转为体检件。</div>';
	$("#showTips").change(function(){
		$(this).parent().css("background","#fff");
	});
	$("#tipYinJiu").hover(function(){
		$(this).parent().append(tipCon);
	},function(){
		$(this).parent().css("background","none");
		$(".show_tip_con_2").remove();
	});
	
	$("#showEditZhou").focus(function(){
		$(".box_edit_zhou").show();
		$(this).parent().css("background","#fff");
	});
	$(".box_edit_zhou span").on("click",function(){
		$(".box_edit_zhou").hide();
		$("#showEditZhou").parent().css("background","none");
	});
	
	$("#getFuJiaXian").on("click",function(e){
		stopEvent(e);
		$(".box_tree").show();
	});
	$(".box_tree").on("click",function(e){
		stopEvent(e);
	});

	$("#areaYiJian").on("click",function(e){
		stopEvent(e);
		$(".list_dialog").show();
	});
	var getVal = '';
	$(".list_dialog li").on("click",function(){
		getVal = $("#areaYiJian").val();
		getVal += $(this).text();
		$("#areaYiJian").val(getVal);
		$(this).parent().hide();
	});

	$(".list_dialog").on("click",function(e){
		stopEvent(e);
	});
});

//tree
var setting = {
	callback: {
		beforeClick: beforeClick
	}
};
var zNodes =[
	{ name:"A0010"},
	{ name:"B1000", open:true,
		children: [
			{ name:"B10001",
				children: [
					{ name:"B100011"},
					{ name:"B100012"},
					{ name:"B100013"},
					{ name:"B100014"}
				]},
			{ name:"B10001",
				children: [
					{ name:"B100011"},
					{ name:"B100012"},
					{ name:"B100013"},
					{ name:"B100014"}
				]},
		]},
	{ name:"B1000", open:true,
		children: [
			{ name:"B10001",
				children: [
					{ name:"B100011"},
					{ name:"B100012"},
					{ name:"B100013"},
					{ name:"B100014"}
				]},
			{ name:"B10001",
				children: [
					{ name:"B100011"},
					{ name:"B100012"},
					{ name:"B100013"},
					{ name:"B100014"}
				]},
		]},
	{ name:"B1000", open:true,
		children: [
			{ name:"B10001",
				children: [
					{ name:"B100011"},
					{ name:"B100012"},
					{ name:"B100013"},
					{ name:"B100014"}
				]},
			{ name:"B10001",
				children: [
					{ name:"B100011"},
					{ name:"B100012"},
					{ name:"B100013"},
					{ name:"B100014"}
				]},
		]},

];
function beforeClick(treeId, treeNode, clickFlag) {
	$("#getFuJiaXian").val(treeNode.name);
	$(".box_tree").hide();
}

$(document).ready(function(){
	$(".panel").on("click",function(){
		$(".list_dialog,.box_tree").hide();
	});
	$.fn.zTree.init($("#treeDemo"), setting, zNodes);
//	$("#city").click(function (e) {
//      SelCity(this,e);
//  });
	$(".arrows").on("click",function(){
		if($(this).hasClass("arrows_down")){
			$(this).removeClass("arrows_down").css({"transform":"rotate(180deg)"});
		}else{
			$(this).addClass("arrows_down").css({"transform":"rotate(0deg)"});
		}
		$(this).parent().next().slideToggle(100);
	});

    $(".info").click(function () {
        $(".lpinfo").stop().hide();
        $(this).siblings(".lpinfo").stop().show();
        $(".panel").css("overflow","hidden").append(bgPpo);
    });
    $(".closebtn").click(function () {
        $(this).parent().parent().stop().hide();
        $(".bg_pop").remove();
    });
    
    $('.input_date').date_input();
    $(".date_selector").css({"z-index":"9"});
});

function stopEvent(event){ //阻止冒泡事件
	//取消事件冒泡
	var e=arguments.callee.caller.arguments[0]||event; //若省略此句，下面的e改为event，IE运行可以，但是其他浏览器就不兼容
	if(e && e.stopPropagation) {
		// this code is for Mozilla and Opera
		e.stopPropagation();
	}else if(window.event) {
		// this code is for IE
		 window.event.cancelBubble = true;
	}
}