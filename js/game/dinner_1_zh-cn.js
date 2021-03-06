function Start_Dinner_1(){

	/////// SET UP SCENE ////////

	Show("background","dinner");
	Show("clock","clock_ticking",{x:155,y:294});
	Show("clock_time","clock_1855",{x:155+5,y:294+37});
	Show("nicky","dinner_nicky_sit",{x:0,y:300});
	Show("dad",null,{x:0,y:300});
	Show("mom",null,{x:0,y:300});
	Show("table","dinner_table",{x:0,y:420});

	PlaySound("clock","dinner_ticking",{loop:-1});

	////////////////////////////

	Wait(2500);
	n("人都去哪了？…");
	n("…………");

	Choose({
		"妈~~~~？": Waiting_1,
		"爸~~~~？": Waiting_1,
		"人呢~~？": Waiting_1
	});

}

function Waiting_1(message){
	
	$.what_you_called_out = message;
	n(message);

	n(". . .");

	Choose({
		"[开始吃饭]": function(message){
			$.waiting_action = "eat";
			Waiting_2(message);
		},
		"[再等一会]": function(message){
			$.waiting_action = "wait";
			Waiting_2(message);
		},
		"[拨弄食物]": function(message){
			$.waiting_action = "play";
			Waiting_2(message);
		}
	});

}

function Waiting_2(message){
	
	n(message);
	n("…………");

	PlaySound("clock","dinner_meowing",{loop:-1});

	Show("clock","clock_meowing");
	Show("clock_time","clock_1900");
	Wait(1000);

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"别再嚎了，你这叫的也太难听了。": function(message){
			n(message);

			Show("mom","mom_stand");
			Show("clock","clock_ticking");
			PlaySound("clock","dinner_ticking",{loop:-1});

			if($.im_a_poet){
				m("难道你没能从你朋友那里学到哪怕一丝的文雅吗？");
			}else{
				m("就不能文雅一点吗？");
			}

			Show("nicky","dinner_nicky_sit");
			n("哦…妈…");
			
			Waiting_End();
		},
		"呃，为什么我们会有这玩意儿。": function(message){
			n(message);

			Show("mom","mom_stand");
			Show("clock","clock_ticking");
			PlaySound("clock","dinner_ticking",{loop:-1});

			m("这是你爷爷留给我们的。");

			Show("nicky","dinner_nicky_sit");
			n("哦！妈。");
			
			Waiting_End();
		},
		"喵！喵！喵！喵！": function(message){
			
			n("喵呜…");
			n("喵！");

			Show("nicky","dinner_nicky_outrage");
			n("<b>喵嗷!</b>");

			Show("mom","mom_stand");

			m("Nick，你在干嘛？");

			Show("clock","clock_ticking");
			PlaySound("clock","dinner_ticking",{loop:-1});
			Show("nicky","dinner_nicky_sit");

			n("<b>喵嗷</b>嗷嗷…啊没看到。妈…");

			Waiting_End();
		}
	});

}

function Waiting_End(){
	Start_Dinner_2();
}