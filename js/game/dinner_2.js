xi// PLOT POINTS:
// 1) Studying at Jack's
// 2) Suspecting Jack is gay
// 3) Trying to get you a private tutor (threatening your relationship)

function Start_Dinner_2(){

	// m("Hi sweetie.");
	m("小宝贝。");
	Show("mom","mom_sit");

	switch($.waiting_action){
		case "eat":
			// m("Oh, you started eating without me. You're very impatient.");
			m("哦？所以你没等我就直接开始吃了？就不能有点耐心吗？");
			// n("...right.");
			n("……好吧。");
			break;
		case "wait":
			// m("You could have started without me. No need to let your food get cold.");
			m("你本来可以不用等我的，饭凉了就不好了。");
			// n("...sure.");
			n("…嗯。");
			break;
		case "play":
			// m("It's immature to play with your food, you know.");
			m("你应该知道你这个年纪不应该再去拨弄吃的了");
			// n("Yeah, yeah.");
			n("嗯嗯嗯嗯嗯。");
			break;
	}

	// m("Your father's running late. He'll be joining us for dinner in an hour's time.");
	m("你父亲回来需要晚一会，大概会在一个小时之内回家。");

	Choose({
		// "Cool. Let's eat.": function(message){
		"好啊，那咱开始吃吧。": function(message){
			n(message);
			// n("*nom nom nom*");
			n("*吧唧吧唧*");
			// m(". . .");
			m("……");
			// m("What's your plans for tomorrow?");
			m("你明天怎么计划的？");
			Start_Dinner_2_1();
		},
		// "I have something to tell both of you.": function(message){
		"我有点事情告诉你们两个。": function(message){
			n(message);
			// m("Alright. Tell us both later when he comes back.");
			m("行啊，等他回来你说就是了。");
			// n("Oh. Okay.");
			n("啊，嗯。");
			// m(". . .");
			m("……");
			// n("*nom nom nom*");
			n("*吧唧吧唧*");
			// m("So, what's your plans for tomorrow?");
			m("那你明天有什么计划吗？");
			Start_Dinner_2_1();
		},
		// "There's something I need to tell just you first.": function(message){
		"我有点事情想先告诉你。": function(message){
			n(message);
			// m("Hold on Nick, I haven't asked about your day yet!");
			m("等一下，我还没问你你今天过得怎么样。");
			// n("Today was fine.");
			n("今天还好啊。");
			// m("Okay. And what's your plans for tomorrow?");
			m("好，那你明天有什么计划");
			Start_Dinner_2_1();
		}
	});

}

function Start_Dinner_2_1(){

	// n("Oh. Uh... studying.")
	n("哦。呃…学习。")
	// n("Yeah. Tomorrow I'm studying.");
	n("嗯，明天我准备学习。");
	// m("What subject?");
	m("学哪一门？");
	// n("Er...");
	n("呃…");

	Choose({
		// "Chemistry.": function(message){
		"化学。": function(message){
			// $.studying_subject = "Chemistry";
			$.studying_subject = "化学";
			Start_Dinner_2_2(message);
		},
		// "Calculus.": function(message){
		"高数。": function(message){
			// $.studying_subject = "Calculus";
			$.studying_subject = "高数";
			Start_Dinner_2_2(message);
		},
		// "Compsci.": function(message){
		"计算机。": function(message){
			// $.studying_subject = "Computer Science";
			$.studying_subject = "计算机";
			Start_Dinner_2_2(message);
		}
	});

}

function Start_Dinner_2_2(message){

	n(message);
	// m("Good.");
	m("不错。");
	// m("You really, really could improve your grades in your "+$.studying_subject+" class.");
	m("你的"+$.studying_subject+"成绩真的本来应该更好的");
	// n(". . .");
	n("……");
	// m("So, I'll be at the library tomorrow.");
	m("所以，我明天会去自习室。");
	// m("Will I see you studying there?");
	m("到时候自习室见？");
	// n("Actually, I'm gonna study at Jack's place.");
	n("实际上，我准备去Jack他家学习");
	// m("Again?");
	m("又是他？");
	// m("You spend a lot of time with him.");
	m("你和他在一块不是一天两天了");

	Choose({
		// "We just study together, that's all.": function(message){
		"我们只是在一起学习，仅此而已。": function(message){
			$.relationship = "study";
			Buddy_1(message);
		},
		// "Mom, Jack is... more than a friend.": function(message){
		"妈，Jack不是我一般的朋友。": function(message){
			
			$.relationship = "best friend";
			n(message);
			
			$.lying_about_hanging_out = true;
			// m("Oh, like best friends?");
			m("那就是最好的朋友？");
			// n("Um. Well--");
			n("呃…是这样--");
			// m("So you're just hanging out, not studying.");
			m("所以你们就是组团出去玩了，而不是学习。");
			// n("We ARE studying!");
			n("我们<b>是</b>在学习。");
			// m(". . .");
			m("……");
			// m("Alright, just don't lie to me.");
			m("好吧，别跟我撒谎。");
			// n("I'm not.");
			n("我没有。");
			Buddy_1_point_5();
		},
		// "Well yeah, that's what good pals do.": function(message){
		"对啊，好朋友就是这样的。": function(message){
			$.relationship = "friend";
			Buddy_1(message);
		}
	});

}


///////////////////////////////////////
////// 2) SUSPECTING Jack IS GAY ///////
///////////////////////////////////////


function Buddy_1(message){
	n(message);

	if($.relationship!="study"){
		$.lying_about_hanging_out = true;
		// m("Oh. So you're just hanging out, not studying.");
		m("哦，所以你们是出去玩了，没有学习。");
		// n("We ARE studying!");
		n("我们<b>在</b>学习！");
		// m(". . .");
		m("……");
		// m("Alright, just don't lie to me.");
		m("好吧，别跟我撒谎。");
		// n("I'm not.");
		n("我没有。");
	}else{
		// m("Okay. I'm just making sure.");
		m("好吧，我只是确认一下。");
		// n("Of... what?");
		n("确认……啥？");
	}

	Buddy_1_point_5();
}

function Buddy_Caught_Lying_1(message,callback){
	n(message);
	// m("Wait...");
	m("等等…");
	// m("I thought you said you 'just study together'.");
	m("我记得你说的是“只是在一起学习”。");
	// m("You didn't tell me you were friends.");
	m("你没说你们俩是朋友。");
	$.lying_about_relationship = true;
	Choose({
		// "Oops, I meant he's just a studymate.": callback,
		"啊…我意思是他只是同学而已。": callback,
		// "Well, he can also be my friend...": callback,
		"但是，这不妨碍他也是我的朋友啊。": callback,
		// "No, I always said we were friends.": callback
		"没啊，我一直都说的都是我们是朋友": callback
	});
}

function Buddy_1_point_5(){

	// m("Just... don't hang around him too much.");
	m("就是…别和他在一起时间太久了");
	// m("People might get the wrong idea.");
	m("有些时候人可能会产生一些不好的想法");

	Choose({
		// "Oh. No, yeah, we're just friends.": function(message){
		"啊，不会的。我们只是朋友而已。": function(message){
			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,Buddy_2);
			}else{
				Buddy_2(message);
			}
		},
		// "The wrong idea might be the right idea.": Buddy_4,
		"不好的想法也许不一定是不好的呢？": Buddy_4,
		// "What do you mean by... wrong idea?": Buddy_3
		"你说的不好的想法…是什么意思？": Buddy_3
	});

}

function Buddy_2(message){
	n(message);
	// m("Okay.");
	m("好吧。");
	if($.lying_about_relationship){
		// m("Just don't lie to me.");
		m("总之别对我撒谎。");
		// n("I won't.");
		n("我不会的。");
		// m(". . .");
		m("……");
		// m("But... about you hanging out with Jack.");
		m("不过…关于你和Jack一起出去玩的事。");
	}
	// m("It's just that some people might assume things, since...");
	m("只是有些事情可能会让人觉得…比如…");
	// m("You know... he looks like...");
	m("你懂得…他看着像……");
	// m("A gay?");
	m("同性恋？");
	Buddy_Choice();
}

function Buddy_3(message){
	n(message);
	// m("Just between mother and son, I think he might be... you know...");
	m("Just between mother and son, I think he might be... you know...");
	// n("No, what?");
	n("No, what?");
	// m("A gay!");
	m("A gay!");
	// m("He looks and talks like a gay.");
	m("He looks and talks like a gay.");
	Buddy_Choice();
}

function Buddy_4(message){
	n(message);
	// m("Oh, that's like a zen thing, right?");
	m("哦？这听起来有点禅意啊。");
	// n("Um.");
	n("呃。");
	// m("Zen is also about nature, and your classmate Jack, he...");
	m("禅是关于自然的，但是你的同学Jack，他…");
	// m("...you know, doesn't seem natural?");
	m("…你懂的，看起来不太自然？");
	Choose({
		// "You think he's gay.": function(message){
		"你觉得他是个同性恋。": function(message){
			n(message);
			// m("Yes!");
			m("对！");
			// m("You suspect it, too!");
			m("你也发现了！");
			Buddy_Choice();
		},
		// "Don't say that about my friend!": function(message){
		"别这么说我的朋友！": function(message){

			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,function(message){

					n(message);
					// m("Okay.");
					m("好吧。");
					// m("Just don't lie to me.");
					m("但是别跟我撒谎。");
					// n("I won't.");
					n("我没有。");
					// m(". . .");
					m("……");

					// m("But yes, even you agree that it's bad to be seen as 'not natural'.");
					m("不过，既然你也觉得看起来“不自然”是不好的。");
					// n("I never said--");
					n("我可没这么说--");
					// m("And I'm just looking out for you! Because he acts like, you know...");
					m("而且我一直帮你盯着他，因为它看起来是个…你知道的……");
					// m("A gay!");
					m("同性恋！");
					Buddy_Choice();

				});
			}else{

				n(message);
				// m("I'm just being honest.");
				m("我实话说了吧。");
				// m("But yes, even you agree that it's bad to be seen as 'not natural'.");
				m("不过，既然你也觉得看起来“不自然”是不好的。");
				// n("I never said--");
				n("我可没这么说--");
				// m("And I'm just looking out for you! Because he acts like, you know...");
				m("而且我一直帮你盯着他，因为它看起来是个…你知道的……");
				// m("A gay!");
				m("同性恋！");
				Buddy_Choice();

			}

		},
		// "What do you mean, he's not natural?": Buddy_3
		"他看起来“不自然”指的是什么意思？": Buddy_3
	});
}

function Buddy_Choice(){
	if($.relationship=="friend"){
		// m("And since you say he's a 'good pal'...");
		m("既然你说过他是你的“好朋友”。");
		// m("People might think you're a gay like him, too.");
		m("人们也许会认为你和他一样是个同性恋。");
	}
	if($.relationship=="best friend"){
		// m("And since you say he's your BEST friend...");
		m("既然你说过他是你<b>最好</b>的朋友。");
		// m("People might think you're a gay like him, too.");
		m("人们也许会认为你和他一样是个同性恋。");
	}
	Choose({
		// "Ha, he sure acts gay. Luckily, he's not.": function(message){
		"哈，他确实看起来像是个同性恋，但是幸好，他不是。": function(message){
			n(message);
			// m("See? You also think there's something not right about it.");
			m("你看，你也觉得有些事情并不自然。");
			// n("...sure.");
			n("……对啊。");
			Buddy_Aftermath();
		},
		// "What's wrong with being gay?!": function(message){
		"是同性恋有什么不好的吗？！": function(message){
			n(message);
			// m("Nothing! Nothing.");
			m("没有！没有。");
			Buddy_Aftermath();
		},
		// "Maybe... my friend might be gay.": function(message){
		"也许吧…也许我朋友是个同性恋。": function(message){

			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,function(message){
					n(message);
					// m("Okay.");
					m("好吧。");
					// m("Just don't lie to me.");
					m("别跟我撒谎。");
					// n("I won't.");
					n("我不会的。");
					// m(". . .");
					m("…………");
					Buddy_Aftermath();
				});
			}else{
				n(message);
				Buddy_Aftermath();
			}
			
		}
	});
}


function Buddy_Aftermath(){

	// m("Don't get me wrong.");
	m("别理解错了。");
	// m("I'm not saying those kind of people are bad!");
	m("我不是说这种人不好。");
	// m("I just think... you should be careful around one of them.");
	m("我只是觉得…你在这种人身边应该小心点。");
	// m("Jack might, you know, try to recruit you.");
	m("Jack有可能，你懂的，在掰弯你。");

	Show("clock_time","clock_1910");
	Show("nicky","dinner_nicky_defiant");

	Choose({
		// "what.": Buddy_Aftermath_2,
		"啥？": Buddy_Aftermath_2,
		// "whaaat.": Buddy_Aftermath_2,
		"你说啥？": Buddy_Aftermath_2,
		// "whaaaaaaaaaaaaaaat.": Buddy_Aftermath_2
		"你在说啥？？": Buddy_Aftermath_2
	});
}

function Buddy_Aftermath_2(message){
	
	n(message);

	// n("How do you even...");
	n("你怎么会…");
	// n("Ugh, nevermind.");
	n("呃，算了。");
	// m("Nick, I'm sorry you find me annoying.");
	m("Nick，我很抱歉这么唠叨。");
	// n("No, mom, stop doing th--");
	n("不不不，妈，别再--");
	// m("Let's go back to talking about your grades.");
	m("我们接着谈谈学习？");
	// m("Now, what did you say you were studying tomorrow?");
	m("你之前说你准备学什么来着？");

	Show("nicky","dinner_nicky_sit");
	// n(". . .");
	n("……");
	// n(". . .");
	n("……");
	// n("Errrmmmmm...");
	n("呃……");
	// n("Errrmmmmm...");
	n("恩……");

	// add: 强制玩家犹豫
	Wait(3000);

	Choose({
		// "Compsci?": function(message){
		"计算机？": function(message){
			// $.studying_subject_2 = "Computer Science";
			$.studying_subject_2 = "计算机";
			Grades_Start(message);
		},
		// "Chemistry?": function(message){
		"化学？": function(message){
			// $.studying_subject_2 = "Chemistry";
			$.studying_subject_2 = "化学";
			Grades_Start(message);
		},
		// "Calculus?": function(message){
		"高数？": function(message){
			// $.studying_subject_2 = "Calculus";
			$.studying_subject_2 = "高数";
			Grades_Start(message);
		}
	});

}


//////////////////////////////////////////
////// 3) A POSSIBLE PRIVATE TUTOR ///////
//////////////////////////////////////////

function Grades_Start(message){
	n(message);
	// m(". . .");
	m("……");
	if($.studying_subject!=$.studying_subject_2){
		Grades_Start_1();
	}else{
		Grades_Start_2();
	}
}

function Grades_Start_1(){
	// m("You first told me it was "+$.studying_subject+".");
	m("你先是告诉我你要学"+$.studying_subject+"。");
	// m("Now you tell me it's "+$.studying_subject_2+"?");
	m("现在你跟我说你要学"+$.studying_subject_2+"？");
	$.lying_about_studying = true;
	// n("Mom, I was just confus--");
	n("妈，我有点乱-");
	if($.lying_about_hanging_out || $.lying_about_relationship){
		// m("This is TWICE you've lied to me during this dinner.");
		m("这顿饭上你已经是<b>第二次</b>对我撒谎了");
		// n("I didn't lie about--");
		n("我没对你撒--");
	}
	// m("Either way, your grades in both subjects are terrible.");
	m("而且不管怎么说，你这两门课程的成绩都很糟糕。");
	// n(". . .");
	n("……");
	Grades_Explaining();
}

function Grades_Start_2(){
	// m("You hesitated for a moment there.");
	m("你犹豫了一下。");
	// n("I was eating.");
	n("我在吃饭。");
	// m("Okay.");
	m("好吧。");
	if($.lying_about_hanging_out){
		// m("I wonder if you're studying with Jack at all, or just always hanging out.");
		m("我在想你和Jack是在学习，还是一直在出去玩。");
		// n("We study.");
		n("是在学习。");
	}
	// m(". . .");
	m("……");
	// m("Still, your grades in your "+$.studying_subject_2+" class are terrible.");
	m("不过，你"+$.studying_subject_2+"的成绩还是很糟糕。");
	// n(". . .");
	n("……");
	Grades_Explaining();
}

function Grades_Explaining(){
	Start_Dinner_3();
}
