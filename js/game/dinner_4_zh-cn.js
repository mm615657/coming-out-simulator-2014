// is short
// What ARE you. Fake crying, and don't tell your dad
// Weave it

function Start_Dinner_4(){

	n("……");
	m("是因为你的爸爸经常不在家，对吧？");
	m("没有一个强壮的男性作为楷模，你有点不知所措了…");

	Choose({
		"是啊，因为父亲是<b>那么</b>有男人味": function(message){
			n(message);
			m("Nick,不管怎样，他是你的父亲。你应当爱他。");
			My_Fault();
		},
		"问题重点不在这里，不管怎样我都是双。": function(message){
			n(message);
			m("你怎么知道的？！你难道是心理学家吗？！");
			My_Fault();
		},
		"你猜怎么着？也许你说的没错。": function(message){
			n(message);
			m("我知道……");
			My_Fault();
		}
	});

}

function My_Fault(){
	
	Show("clock_time","clock_1930");

	n("……");
	m("这都是我的错……");
	m("我告诉过你了要小心你周围的那些孩子，但是我告诉你的太晚了…");

	Show("mom","mom_cry");

	m("[抽泣]");
	m("Nick啊！我可怜的孩子啊！");

	Show("nicky","dinner_nicky_sit");

	Choose({
		"妈…别哭了…": Cry_1,
		"别在装哭了。": Cry_2,
		"[跟着一起哭]": Cry_3
	});
}

function Cry_1(message){

	$.crying = "sympathy";

	n(message);
	m("呜……呜……呜……");
	n("对不起。Jack、说谎，一切都是我的错。");
	m("啊……啊……");
	n("这些都是我的过错。");
	m("[吸鼻涕]");
	n("…妈…");
	What_Are_You();
}

function Cry_2(message){

	$.crying = "anger";
	Show("nicky","dinner_nicky_defiant");

	n(message);
	m("呜……呜……呜……");
	n("说真的，<b>太</b>假了。");
	m("啊……啊……");
	n("能闭嘴吗？");
	m("[吸鼻涕]");
	n("<b>闭。嘴。</b>");
	What_Are_You();

}

function Cry_3(message){

	$.crying = "mocking";
	Show("nicky","dinner_nicky_outrage");

	n("妈啊啊啊……");
	m("呜……呜……呜……");
	n("呜啊…呜啊…呜啊…呜啊啊…");
	m("啊……啊……");
	n("啊啊哇哇哇啊呜呜啊啊呜啊哇哇啊呜呜啊哇哇哇");
	m("[吸鼻涕]");

	Show("nicky","dinner_nicky_defiant");
	n("哭完了吧？");
	What_Are_You();

}

function What_Are_You(){

	m("……");
	m("Nick…你到底是什么？");
	n("你说啥？");

	Show("nicky","dinner_nicky_sit");

	Show("mom","mom_sit");
	m("你到底<i>是</i>什么？");

	Choose({
		"我是双性恋": function(message){

			$.what_are_you = "bisexual";

			n(message);
			if($.admit_bisexuality){
				m("…所以也就是你说过的…");
			}
			n("无论男女我都可能会喜欢上。");
			m("不可能都喜欢的。")
			m("你最终还是要选一个。");
			n("不是…这个事根本不是这样的。");
			Have_You_Had_Sex();

		},
		"我也拿不准": function(message){

			$.what_are_you = "confused";

			n(message);
			m("…我知道。");
			m("对不起我没能不让Jack干扰你。");
			m("可能需要一段时间，过一段时间就会没事的。");
			n("……");
			m("没事……没事的……");
			Have_You_Had_Sex();

		},
		"我的天，我是你儿子啊。": function(message){

			$.what_are_you = "son";

			n(message);
			n("……");
			n("这还不够吗？");
			Have_You_Had_Sex();

		}
	});
}

function Have_You_Had_Sex(){
	m("……");
	m("你和Jack做过吗？");
	Choose({
		"做过.": function(message){
			n(message);
			m("[干呕]");
			Have_You_Had_Sex_2();
		},
		"没有.": function(message){
			n(message);
			m("别骗我了…我看了你的信息…");
			n("我们只是聊天而已，并没有——");
			m("…和你们的照片…");
			Have_You_Had_Sex_2();
		},
		"我不想说.": function(message){
			n(message);
			m("我的天啊…你确实…");
			Have_You_Had_Sex_2();
		}
	});
}

function Have_You_Had_Sex_2(){

	n("……");
	m("你们……哪一个是当女的？");

	Show("nicky","dinner_nicky_outrage");

	n("<b>得了吧！</b>");
	n("这就是在问哪一跟筷子是用来喝——");
	m("哪一个？…");

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"一般我在下面。":function(message){
			$.top_or_bottom = "bottom";

			n(message);
			Throw_Up();
		},
		"基本上，Jack是。":function(message){
			$.top_or_bottom = "top";

			n(message);
			m("所-所以…也就是说你还有可能是直的！对-对吧？…");
			m("就是…你知道…如果是你把你的…");
			m("你的……");
			Throw_Up();
		},
		"我们轮流来。":function(message){
			$.top_or_bottom = "versatile";

			n(message);
			Throw_Up();
		}
	});
}

function Throw_Up(){

	PlaySound("sfx","dinner_vomit");

	Show("clock_time","clock_1940");
	Show("mom","mom_vomit");
	Show("table","dinner_table_2");
	Wait(1000);

	Choose({
		"啥？": Father_Soon,
		"什么？": Father_Soon,
		"这什么情况？": Father_Soon
	});

}

function Father_Soon(message){

	n(message);

	Show("mom","mom_sit");

	m("……");
	m("你父亲马上就回来了。");
	n("饭都凉了。好吧，除了，呃，你刚才吃进去的那一块。");
	m("你把这么晚回来。肯定上班压力比较大。");
	m("所以……尽量……他回来的时候…");
	m("能不能别对他说咱们刚才说的半个字？");
	n("……");

	m("别跟他说Jack的事。");

	switch($.what_are_you){
		case "bisexual":
			m("别跟他说你觉得你是双性恋的事。");
			break;
		case "confused":
			m("别告诉他你拿不准性取向的事。");
			break;
		case "son":
			m("别跟他说你对我们说谎……还有和Jack一起做的事。");
			break;
	}

	switch($.top_or_bottom){
		case "top":
			m("别跟他说你把Jack当成女的了。");
			break;
		case "bottom":
			m("别跟他说你在Jack面前像个女的一样。");
			break;
		case "versatile":
			m("别跟他说你们俩都像是女的一样。");
			break;
	}

	m("好吗？……");

	Choose({
		"好吧。": function(message){
			$.promise_silence = "yes";
			
			n(message);
			m("好吧。");
			m("……");
			m("你父亲回来了。");
			Father_Soon_2();
		},
		"不，不行。": function(message){
			$.promise_silence = "no";
			
			n(message);
			m("Nick,求你千万别——");
			m("天，你父亲回来了。");
			Father_Soon_2();
		},
		"只要你也别说就行。": function(message){
			$.promise_silence = "tit for tat";
			
			n(message);
			m("我不会说的。");
			n("你得保证你不说。");
			m("我保——");
			m("嘘。你爸回来了。");
			Father_Soon_2();
		}
	});

}

function Father_Soon_2(){
	Show("nicky","dinner_nicky_sit");
	Start_Dinner_5();
}
