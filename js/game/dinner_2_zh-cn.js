// PLOT POINTS:
// 1) Studying at Jack's
// 2) Suspecting Jack is gay
// 3) Trying to get you a private tutor (threatening your relationship)

function Start_Dinner_2(){

	m("宝贝。");
	Show("mom","mom_sit");

	switch($.waiting_action){
		case "eat":
			m("哦？所以你没等我就直接开始吃了？就不能有点耐心吗？");
			n("……好吧。");
			break;
		case "wait":
			m("你本来可以不用等我的，饭凉了就不好了。");
			n("…嗯。");
			break;
		case "play":
			m("你应该知道你这个年纪不应该再去拨弄吃的了。");
			n("嗯嗯嗯嗯嗯。");
			break;
	}

	m("你父亲回来需要晚一会，大概会在一个小时之内回家。");

	Choose({
		"好啊，那咱开始吃吧。": function(message){
			n(message);
			n("[开始吃饭]");
			m("……");
			m("你明天怎么计划的？");
			Start_Dinner_2_1();
		},
		"我有点事情告诉你们两个。": function(message){
			n(message);
			m("行啊，等他回来你说就是了。");
			n("啊，嗯。");
			m("……");
			n("[开始吃饭]");
			m("那你明天有什么计划吗？");
			Start_Dinner_2_1();
		},
		"我有点事情想先告诉你。": function(message){
			n(message);
			m("等一下，我还没问你你今天过得怎么样。");
			n("今天还好啊。");
			m("好，那你明天有什么计划");
			Start_Dinner_2_1();
		}
	});

}

function Start_Dinner_2_1(){

	n("哦。呃…学习。")
	n("嗯，明天我准备学习。");
	m("学哪一门？");
	n("呃…");

	Choose({
		"化学。": function(message){
			$.studying_subject = "化学";
			Start_Dinner_2_2(message);
		},
		"高数。": function(message){
			$.studying_subject = "高数";
			Start_Dinner_2_2(message);
		},
		"计算机。": function(message){
			$.studying_subject = "计算机";
			Start_Dinner_2_2(message);
		}
	});

}

function Start_Dinner_2_2(message){

	n(message);
	m("不错。");
	m("你的"+$.studying_subject+"成绩真的本来应该更好的");
	n("……");
	m("所以，我明天会去自习室陪你一起学。");
	m("到时候自习室见？");
	n("实际上，我准备去Jack他家学习。");
	m("又是他？");
	m("你和他一起不是一天两天了。");

	Choose({
		"我们只是在一起学习，仅此而已。": function(message){
			$.relationship = "study";
			Buddy_1(message);
		},
		"妈，Jack不是我一般的朋友。": function(message){
			
			$.relationship = "best friend";
			n(message);
			
			$.lying_about_hanging_out = true;
			m("那就是最好的朋友？");
			n("呃…是这样——");
			m("也就是说你去他那里主要是因为他而不是学习？");
			n("我们<b>是</b>在学习。");
			m("……");
			m("好吧，别跟我撒谎。");
			n("我没有。");
			Buddy_1_point_5();
		},
		"对啊，好哥们就是这样的。": function(message){
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
		m("哦，所以你去他那里主要是因为他而不是学习？");
		n("我们<b>在</b>学习！");
		m("……");
		m("好吧，别跟我撒谎。");
		n("我没有。");
	}else{
		m("好吧，我只是确认一下。");
		n("确认……啥？");
	}

	Buddy_1_point_5();
}

function Buddy_Caught_Lying_1(message,callback){
	n(message);
	m("等等…");
	m("我记得你说的是“只是在一起学习”。");
	m("你没说你们俩是朋友。");
	$.lying_about_relationship = true;
	Choose({
		"啊…我意思是他只是同学而已。": callback,
		"但是，这不妨碍他也是我的朋友啊。": callback,
		"没啊，我一直都说的都是我们是朋友。": callback
	});
}

function Buddy_1_point_5(){

	m("就是…别和他在一起时间太久了。");
	m("有些时候人可能会产生一些不好的想法。");

	Choose({
		"啊，不会的。我们只是朋友而已。": function(message){
			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,Buddy_2);
			}else{
				Buddy_2(message);
			}
		},
		"不好的想法也许不一定是不好的呢？": Buddy_4,
		"你说的不好的想法…是什么意思？": Buddy_3
	});

}

function Buddy_2(message){
	n(message);
	m("好吧。");
	if($.lying_about_relationship){
		m("总之别对我撒谎。");
		n("我不会的。");
		m("……");
		m("不过…关于你和Jack一起出去玩的事。");
	}
	m("只是有些事情可能会让人觉得…比如…");
	m("你也许能看出来…他看着像……");
	m("同性恋？");
	Buddy_Choice();
}

function Buddy_3(message){
	n(message);
	m("就咱们母子，我觉得他可能是个…你懂的…");
	n("啥？");
	m("同性恋！");
	m("他的言谈举止看上去都像是同性恋。");
	Buddy_Choice();
}

function Buddy_4(message){
	n(message);
	m("哦？这听起来有点禅意啊。");
	n("呃。");
	m("禅是关于自然的，但是你的同学Jack，他…");
	m("…你懂的，看起来不太自然？");
	Choose({
		"你觉得他是个同性恋。": function(message){
			n(message);
			m("对！");
			m("你也发现了！");
			Buddy_Choice();
		},
		"别这么说我的朋友！": function(message){

			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,function(message){

					n(message);
					m("好吧。");
					m("但是别跟我撒谎。");
					n("我没有。");
					m("……");

					m("不过，既然你也觉得看起来“不自然”是不好的。");
					n("我可没这么说——");
					m("而且我一直帮你盯着他，因为它看起来是个…你知道的……");
					m("同性恋！");
					Buddy_Choice();

				});
			}else{

				n(message);
				m("我实话说了吧。");
				m("不过，既然你也觉得看起来“不自然”是不好的。");
				n("我可没这么说——");
				m("而且我一直帮你盯着他，因为它看起来是个…你知道的……");
				m("同性恋！");
				Buddy_Choice();

			}

		},
		"他看起来“不自然”指的是什么意思？": Buddy_3
	});
}

function Buddy_Choice(){
	if($.relationship=="friend"){
		m("既然你说过他是你的“好哥们”。");
		m("人们也许会认为你和他一样是个同性恋。");
	}
	if($.relationship=="best friend"){
		m("既然你说过他是你<b>最好</b>的朋友。");
		m("人们也许会认为你和他一样是个同性恋。");
	}
	Choose({
		"哈，他确实看起来像是个同性恋，但是幸好，他不是。": function(message){
			n(message);
			m("你看，你也觉得有些事情并不自然。");
			n("……对啊。");
			Buddy_Aftermath();
		},
		"是同性恋有什么不好的吗？！": function(message){
			n(message);
			m("没有！没有。");
			Buddy_Aftermath();
		},
		"也许吧…也许我朋友是个同性恋。": function(message){

			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,function(message){
					n(message);
					m("好吧。");
					m("别跟我撒谎。");
					n("我不会的。");
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

	m("别理解错了。");
	m("我不是说这种人不好。");
	m("我只是觉得…你在这种人身边应该小心点。");
	m("Jack有可能，你懂的，在掰弯你。");

	Show("clock_time","clock_1910");
	Show("nicky","dinner_nicky_defiant");

	Choose({
		"啥？": Buddy_Aftermath_2,
		"你说啥？": Buddy_Aftermath_2,
		"你在说什么？": Buddy_Aftermath_2
	});
}

function Buddy_Aftermath_2(message){
	
	n(message);

	n("你怎么会…");
	n("呃，算了。");
	m("Nick，我很抱歉这么唠叨。");
	n("不不不，妈，别再——");
	m("我们接着谈谈学习？");
	m("你之前说你准备学什么来着？");

	Show("nicky","dinner_nicky_sit");
	n("…");
	n("……");
	n("呃……");
	n("恩………");

	Choose({
		"计算机？": function(message){
			$.studying_subject_2 = "计算机";
			Grades_Start(message);
		},
		"化学？": function(message){
			$.studying_subject_2 = "化学";
			Grades_Start(message);
		},
		"高数？": function(message){
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
	m("……");
	if($.studying_subject!=$.studying_subject_2){
		Grades_Start_1();
	}else{
		Grades_Start_2();
	}
}

function Grades_Start_1(){
	m("你先是告诉我你要学"+$.studying_subject+"。");
	m("现在你跟我说你要学"+$.studying_subject_2+"？");
	$.lying_about_studying = true;
	n("妈，我有点乱——");
	if($.lying_about_hanging_out || $.lying_about_relationship){
		m("这顿饭上你已经是<b>第二次</b>对我撒谎了。");
		n("我没对你撒——");
	}
	m("而且不管怎么说，你这两门课程的成绩都很糟糕。");
	n("……");
	Grades_Explaining();
}

function Grades_Start_2(){
	m("你犹豫了一下。");
	n("刚才我在吃饭。");
	m("好吧。");
	if($.lying_about_hanging_out){
		m("我在想你和Jack是在学习，还是一直在出去玩。");
		n("是在学习。");
	}
	m("……");
	m("不过，你"+$.studying_subject_2+"的成绩还是很糟糕。");
	n("……");
	Grades_Explaining();
}

function Grades_Explaining(){
	Start_Dinner_3();
}
