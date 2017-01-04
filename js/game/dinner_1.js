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
	// n("Where is everyone?...");
	n("人都去哪了？…");
	// n(". . .");
	n("…………");

	Choose({
		// "Moooom?": Waiting_1,
		"妈~~~~？": Waiting_1,
		// "Daaaaad?": Waiting_1,
		"爸~~~~？": Waiting_1,
		// "Hello, anybody?": Waiting_1
		"人呢~~？": Waiting_1
	});

}

function Waiting_1(message){
	
	$.what_you_called_out = message;
	n(message);

	n(". . .");

	Choose({
		// "[start eating]": function(message){
		"[开始吃饭]": function(message){
			$.waiting_action = "eat";
			Waiting_2(message);
		},
		// "[wait some more]": function(message){
		"[再等一会]": function(message){
			$.waiting_action = "wait";
			Waiting_2(message);
		},
		// "[play with food]": function(message){
		"[拨弄食物]": function(message){
			$.waiting_action = "play";
			Waiting_2(message);
		}
	});

}

function Waiting_2(message){
	
	n(message);
	// n(". . .");
	n("…………");

	PlaySound("clock","dinner_meowing",{loop:-1});

	Show("clock","clock_meowing");
	Show("clock_time","clock_1900");
	Wait(1000);

	Show("nicky","dinner_nicky_defiant");

	Choose({
		// "Cut the crying, cacophonous cat clock!": function(message){
		"别再嚎了，你这叫的也太难听了。": function(message){
			n(message);

			Show("mom","mom_stand");
			Show("clock","clock_ticking");
			PlaySound("clock","dinner_ticking",{loop:-1});

			if($.im_a_poet){
				// m("Did you learn poetry from a friend?");
				m("难道你没能从你朋友那里学到哪怕一丝的文雅吗？");
			}else{
				// m("Poetic.");
				m("要文雅。");
			}

			Show("nicky","dinner_nicky_sit");
			// n("Oh, hey mom.");
			n("哦…妈…");
			
			Waiting_End();
		},
		// "Ugh, why did we get that thing?": function(message){
		"呃，为什么我们会有这玩意儿。": function(message){
			n(message);

			Show("mom","mom_stand");
			Show("clock","clock_ticking");
			PlaySound("clock","dinner_ticking",{loop:-1});

			// m("Your grandfather gave it to us.");
			m("这是你爷爷留给我们的。");

			Show("nicky","dinner_nicky_sit");
			// n("Oh! Hey mom.");
			n("哦！妈。");
			
			Waiting_End();
		},
		// "Meow! Meow! Meow! Meow!": function(message){
		"喵！喵！喵！喵！": function(message){
			
			// n("Meow.");
			n("喵呜…");
			// n("Meow!");
			n("喵！");

			Show("nicky","dinner_nicky_outrage");
			// n("MEOW!");
			n("<b>喵嗷!</b>");

			Show("mom","mom_stand");

			// m("Nick, what are you doing?...");
			m("Nick，你在干嘛？");

			Show("clock","clock_ticking");
			PlaySound("clock","dinner_ticking",{loop:-1});
			Show("nicky","dinner_nicky_sit");

			// n("MEOOOhhhh didn't see you. Ahem. Hey mom.");
			n("<b>喵嗷</b>嗷嗷…啊没看到。妈…");

			Waiting_End();
		}
	});

}

function Waiting_End(){
	Start_Dinner_2();
}