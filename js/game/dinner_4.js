// is short
// What ARE you. Fake crying, and don't tell your dad
// Weave it

function Start_Dinner_4(){

	// n(". . .");
	n("……");
	// m("It's because your dad's almost never home, isn't it?");
	m("是因为你的爸爸经常不在家，对吧？");
	// m("Without a strong male role model, you become confused...");
	m("没有一个强壮的男性作为楷模，你有点不知所措了…");

	Choose({
		// "Yeah, coz Dad's SUCH a great role model.": function(message){
		"是啊，因为父亲是<b>那么</b>有男人味": function(message){
			n(message);
			// m("Nick, no matter what, he's your father. You should love him.");
			m("Nick,不管怎样，他是你的父亲。你应当爱他。");
			My_Fault();
		},
		// "That's not how it works. I'd be bi anyway.": function(message){
		"问题重点不在这里，不管怎样我都是双。": function(message){
			n(message);
			// m("How do you know?! Are you an expert in psychology?!");
			m("你怎么知道的？！你难道是心理学家吗？！");
			My_Fault();
		},
		// "You know what? Maybe you're right.": function(message){
		"你猜怎么着？也许你说的没错。": function(message){
			n(message);
			// m("I know...");
			m("我知道……");
			My_Fault();
		}
	});

}

function My_Fault(){
	
	Show("clock_time","clock_1930");

	// n(". . .");
	n("……");
	// m("This is all my fault...");
	m("这都是我的错……");
	// m("I told you to be careful around those kinds of people, but I told you too late...");
	m("我告诉过你了要小心你周围的那些孩子，但是我告诉你的太晚了…");

	Show("mom","mom_cry");

	// m("[sob]");
	m("[抽泣]");
	// m("Oh Nick! My poor baby!");
	m("Nick啊！我可怜的孩子啊！");

	Show("nicky","dinner_nicky_sit");

	Choose({
		// "Mom... please don't cry...": Cry_1,
		"妈…别哭了…": Cry_1,
		// "Quit your fake crying.": Cry_2,
		"别在装哭了。": Cry_2,
		// "[cry]": Cry_3
		"[跟着一起哭]": Cry_3
	});
}

function Cry_1(message){

	$.crying = "sympathy";

	n(message);
	// m("huu... huu... huu...");
	m("呜……呜……呜……");
	// n("I'm sorry. About Jack, the lies, everything.");
	n("对不起。Jack、说谎，一切都是我的错。");
	// m("owww... owww...");
	m("啊……啊……");
	// n("I take it all back.");
	n("这些都是我的过错。");
	// m("sniff...");
	m("[吸鼻涕]");
	// n("...please...");
	n("…妈…");
	What_Are_You();
}

function Cry_2(message){

	$.crying = "anger";
	Show("nicky","dinner_nicky_defiant");

	n(message);
	// m("huu... huu... huu...");
	m("呜……呜……呜……");
	// n("Seriously, it is SO fake.");
	n("说真的，<b>太</b>假了。");
	// m("owww... owww...");
	m("啊……啊……");
	// n("Will you shut up?!");
	n("能闭嘴吗？");
	// m("sniff...");
	m("[吸鼻涕]");
	// n("SHUT. UP.");
	n("<b>闭。嘴。</b>");
	What_Are_You();

}

function Cry_3(message){

	$.crying = "mocking";
	Show("nicky","dinner_nicky_outrage");

	// n("BAWWWWW");
	n("妈啊啊啊……");
	// m("huu... huu... huu...");
	m("呜……呜……呜……");
	// n("WAH WAH WAH WAH WAHHH");
	n("呜啊…呜啊…呜啊…呜啊啊…");
	// m("owww... owww...");
	m("啊……啊……");
	// n("BRRrrRR-BRR-BRbR BWAH BWAHRR rrrRRR-WaahHH WO WO WO RaaahhH");
	n("啊啊哇哇哇啊呜呜啊啊呜啊哇哇啊呜呜啊哇哇哇");
	// m("sniff...");
	m("[吸鼻涕]");

	Show("nicky","dinner_nicky_defiant");
	// n("Okay, we done?");
	n("哭完了吧？");
	What_Are_You();

}

function What_Are_You(){

	// m(". . .");
	m("……");
	// m("Nick... what are you?");
	m("Nick…你到底是什么？");
	// n("Excuse me?");
	n("你说啥？");

	Show("nicky","dinner_nicky_sit");

	Show("mom","mom_sit");
	// m("What <i>are</i> you?");
	m("你到底<i>是</i>什么？");

	Choose({
		// "I'm bisexual.": function(message){
		"我是双性恋": function(message){

			$.what_are_you = "bisexual";

			n(message);
			if($.admit_bisexuality){
				// m("...and you said that means...");
				m("…所以也就是你说过的…");
			}
			// n("Sexually attracted to both men and women.");
			n("无论男女我都可能会喜欢上。");
			// m("You can't be both.")
			m("不可能都喜欢的。")
			// m("You have to pick one.");
			m("你最终还是要选一个。");
			// n("That's... not how it works. At all.");
			n("不是…这个事根本不是这样的。");
			Have_You_Had_Sex();

		},
		// "I'm just confused.": function(message){
		"我也拿不准": function(message){

			$.what_are_you = "confused";

			n(message);
			// m("...I know.");
			m("…我知道。");
			// m("I'm sorry Jack confused you.");
			m("对不起我没能不让Jack干扰你。");
			// m("You're just going through a phase, it's okay.");
			m("可能需要一段时间，过一段时间就会没事的。");
			// n(". . .");
			n("……");
			// m("It's okay. It's okay...");
			m("没事……没事的……");
			Have_You_Had_Sex();

		},
		// "I'm your son, dammit.": function(message){
		"我的天，我是你儿子啊。": function(message){

			$.what_are_you = "son";

			n(message);
			// n(". . .");
			n("……");
			// n("Isn't that enough?");
			n("这还不够吗？");
			Have_You_Had_Sex();

		}
	});
}

function Have_You_Had_Sex(){
	// m(". . .");
	m("……");
	// m("Did you have sex with Jack.");
	m("你和Jack做过吗？");
	Choose({
		// "Yes.": function(message){
		"做过.": function(message){
			n(message);
			// m("[DRY HEAVE]");
			m("[干呕]");
			Have_You_Had_Sex_2();
		},
		// "No.": function(message){
		"没有.": function(message){
			n(message);
			// m("Please stop lying... I saw your texts...");
			m("别骗我了…我看了你的信息…");
			// n("We were just sexting, we didn't actually--");
			n("我们只是聊天而已，并没有——");
			// m("...and your photos...");
			m("…和你们的照片…");
			Have_You_Had_Sex_2();
		},
		// "I'm not saying.": function(message){
		"我不想说.": function(message){
			n(message);
			// m("oh my god... you did.");
			m("我的天啊…你确实…");
			Have_You_Had_Sex_2();
		}
	});
}

function Have_You_Had_Sex_2(){

	// n(". . .");
	n("……");
	// m("Which... one of you is the woman?");
	m("你们……哪一个是当女的？");

	Show("nicky","dinner_nicky_outrage");

	// n("OH COME ON!");
	n("<b>得了吧！</b>");
	// n("That's like asking which chopstick is the spoo--");
	n("这就是在问哪一跟筷子是用来喝——");
	// m("Which one of you?...");
	m("哪一个？…");

	Show("nicky","dinner_nicky_defiant");

	Choose({
		// "I'm usually the bottom.":function(message){
		"一般我在下面。":function(message){
			$.top_or_bottom = "bottom";

			n(message);
			Throw_Up();
		},
		// "Jack is, mostly.":function(message){
		"基本上，Jack是。":function(message){
			$.top_or_bottom = "top";

			n(message);
			// m("Th-that... means you could still be straight! R-right?...");
			m("所-所以…也就是说你还有可能是直的！对-对吧？…");
			// m("If... you know... you're the one who puts your...");
			m("就是…你知道…如果是你把你的…");
			// m("your...");
			m("你的……");
			Throw_Up();
		},
		// "We take turns.":function(message){
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
		// "what.": Father_Soon,
		"啥？": Father_Soon,
		// "whaaat.": Father_Soon,
		"什么？": Father_Soon,
		// "whaaaaaaaaaaaaaaat.": Father_Soon
		"这什么情况？": Father_Soon
	});

}

function Father_Soon(message){

	n(message);

	Show("mom","mom_sit");

	// m(". . .");
	m("……");
	// m("Your father will be back soon.");
	m("你父亲马上就回来了。");
	// n("The food's cold. Well, except for the spot you just uh, reversed, on.");
	n("饭都凉了。好吧，除了，呃，你刚才吃进去的那一块。");
	// m("Your dad's late. Must have been a stressful day at work.");
	m("你把这么晚回来。肯定上班压力比较大。");
	// m("So... please... when he's back...");
	m("所以……尽量……他回来的时候…");
	// m("Promise me you'll keep all this secret?");
	m("能不能别对他说咱们刚才说的半个字？");
	// n(". . .");
	n("……");

	// m("Don't tell him about Jack.");
	m("别跟他说Jack的事。");

	switch($.what_are_you){
		case "bisexual":
			// m("Don't tell him you think you're bisexual.");
			m("别跟他说你觉得你是双性恋的事。");
			break;
		case "confused":
			// m("Don't tell him you're confused about your sexuality.");
			m("别告诉他你拿不准性取向的事。");
			break;
		case "son":
			// m("Don't tell him you lied to us so you could... do things with Jack.");
			m("别跟他说你对我们说谎……还有和Jack一起做的事。");
			break;
	}

	switch($.top_or_bottom){
		case "top":
			// m("Don't tell him you make Jack a woman.");
			m("别跟他说你把Jack当成女的了。");
			break;
		case "bottom":
			// m("Don't tell him you act like a woman with Jack.");
			m("别跟他说你在Jack面前像个女的一样。");
			break;
		case "versatile":
			// m("Don't tell him you and Jack both act like women.");
			m("别跟他说你们俩都像是女的一样。");
			break;
	}

	m("Okay?...");

	Choose({
		// "Okay.": function(message){
		"好吧。": function(message){
			$.promise_silence = "yes";
			
			n(message);
			// m("Okay.");
			m("好吧。");
			// m(". . .");
			m("……");
			// m("Your father's here.");
			m("你父亲回来了。");
			Father_Soon_2();
		},
		// "No. Not okay.": function(message){
		"不，不行。": function(message){
			$.promise_silence = "no";
			
			n(message);
			// m("Nick, no no no, please--");
			m("Nick,求你千万别——");
			// m("Oh no. Your father's here.");
			m("天，你父亲回来了。");
			Father_Soon_2();
		},
		// "As long as you don't tell him, either.": function(message){
		"只要你也别说就行。": function(message){
			$.promise_silence = "tit for tat";
			
			n(message);
			// m("I won't.");
			m("我不会说的。");
			// n("Promise me you won't.");
			n("你得保证你不说。");
			// m("I pr--");
			m("我保——");
			// m("Shhh. Your father's here.");
			m("嘘。你爸回来了。");
			Father_Soon_2();
		}
	});

}

function Father_Soon_2(){
	Show("nicky","dinner_nicky_sit");
	Start_Dinner_5();
}
