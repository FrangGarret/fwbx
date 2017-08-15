$(function(){
	$(".info_nav li").on("click",function(){
		$(this).addClass("current").siblings().removeClass("current");
		$(".bd_info_con").eq($(this).index()).show().siblings().hide();
	});
	
	var bgPpo = '<div class="bg_pop"></div>';
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
	
	$(".fw_table").on("mouseout",".has_tip",function(){
		$(this).hide();
	})
	var tipCon = '<div class="show_tip_con">客户（张三）因健康原因（饮酒），转为体检件。</div>';
	$("#showTips").change(function(){
		$(this).parent().css("background","#fff");
	});
	$("#tipYinJiu").hover(function(){
		$(this).parent().append(tipCon);
		$(".panel").css("overflow","hidden").append(bgPpo);
	},function(){
		$(this).parent().css("background","none");
		$(".show_tip_con").remove();
		$(".panel").css("overflow","auto");
		$(".bg_pop").remove();
	});
	
	$("#showEditZhou").focus(function(){
		$(".box_edit_zhou").show();
		$(this).parent().css("background","#fff");
		$(".panel").css("overflow","hidden").append(bgPpo);
	});
	$(".box_edit_zhou span").on("click",function(){
		$(".box_edit_zhou").hide();
		$("#showEditZhou").parent().css("background","none");
		$(".bg_pop").remove();
		$(".panel").css("overflow","auto");
	});
	
	$("#getFuJiaXian").on("click",function(){
		$(".box_tree").show();
	});

	$("#areaYiJian").on("click",function(){
		$(".list_dialog").show();
	});
	var getVal = '';
	$(".list_dialog li").on("click",function(){
		getVal = $("#areaYiJian").val();
		getVal += $(this).text();
		$("#areaYiJian").val(getVal);
		$(this).parent().hide();
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
	$.fn.zTree.init($("#treeDemo"), setting, zNodes);
//	$("#city").click(function (e) {
//      SelCity(this,e);
//  });
	$("#areaYiJian").focus(function(){
		
	});
	$(".arrows").on("click",function(){
		if($(this).hasClass("arrows_down")){
			$(this).removeClass("arrows_down").css({"transform":"rotate(180deg)"});
		}else{
			$(this).addClass("arrows_down").css({"transform":"rotate(0deg)"});
		}
		$(this).parent().next().slideToggle(100);
	});
});