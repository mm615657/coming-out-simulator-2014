function Start(){

	$ = {};
	
	/////// SET UP SCENE ////////

	Show("background","coffeehouse");
	Show("cup","cup_steam",{x:44,y:359});
	Show("nicky","coffee_nicky_still");

	PlaySound("bg","coffeehouse",{loop:-1, volume:0.7});

	//////////////////////////////

	N("<b>出柜模拟2014</b>");
	N("这是一个不太真实的游戏，取材于一个不太虚构的故事");
	N("嘿，屏幕对面的。欢迎来到这个游戏。很高兴能给您带来大概20分钟的游戏时间……大概吧。");
	N("那么接下来你准备要？");

	Choose({
		"咱们来直接开始玩吧。": Play,
		"你是谁？（制作人员）": function(){
			Credits("你是谁？");
		},
		"嗯，详细给我说明一下？（关于这个游戏）": function(){
			About("嗯，详细给我说明一下？");
		}
	});

}

function SipCoffee(message){
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);
	PlaySound("sfx","coffee_sip");
	p(message);
	Show("nicky","coffee_nicky_still");
	Show("cup","cup_steam");
}

function Play(message){
	
	SipCoffee(message);

	// Asked neither
	if(!$.asked_about && !$.asked_credits){
		N("直奔主题！可以！");
		N("完全不考虑看一看制作人员或者是关于游戏之类的——");
		p("嘘。");
		N("好好好。");
	}
	// Asked both
	if($.asked_about && $.asked_credits){
		p("…");
		p("既然只有这一个选项为啥还要做出来让我去点。");
		N("<b>鬼知道为什么</b>");
	// Asked either
	}else if($.asked_about || $.asked_credits){
		N("好了，咱们开始吧！");
	}

	N("首先我们来回到四年前，也就是2010年…");
	p("这是<b>四</b>年前的事？！");
	N("…那个改变了我一生的晚上。");

	N("那么你觉得，我亲爱的玩家，这个故事的结局是什么？");

	Choose({
		"鲜花彩虹之中基情四射地走向人生巅峰？": function(message){
			$.main_menu_convo_1 = 1;

			p(message);
			N("对，这就是这个游戏的结局。");
			p("真的吗？");
			N("其实不是。");
			Play_2();
		},
		"显然，就是你在星巴克里刷贴吧。": function(message){
			$.main_menu_convo_1 = 2;

			p(message);
			N("讲道理我现在正在堆代码。把我成人的故事变成你现在正在玩的游戏。");
			p("才不是，我看你就是在打发时间。");
			N("亏你有脸说别人。");
			p("得了吧。");
			N("随你怎么说…");
			Play_2();
		},
		"<b>血腥的死路一条</b>": function(message){
			$.main_menu_convo_1 = 3;

			p(message);
			N("呃，相比之下，我觉得我的故事倒没有那么悲剧。");
			N("尽管这个故事里面有一丢丢的…");
			p("血~~~");
			N("好吧…");
			Play_2();
		}
	});

}

function Play_2(){

	if(!$.asked_about){
		N("如果你没跳过“关于游戏”那部分的话你就会知道，这讲了个非常私人的故事。");
		p("嘘。");
	}

	N("这个游戏包括我，我的父母，还有…这么说吧，我的前男友之间的对话。");
	N("包括了所有我们发生过的，应该发生的，和没能发生的对话。");
	N("无论哪个是哪个。");
	N("现在都不重要了。");

	Choose({
		"没有正确选项我要怎么才能打通这个游戏啊？": function(message){
			$.main_menu_convo_2 = 2;

			p(message);
			N("就是这个意思。");
			p("……");
			Play_3();
		},
		"你这看起来有点悲观啊？": function(message){
			$.main_menu_convo_2 = 1;

			p(message);
			N("生活本身就不是一件值得乐观的事。");
			p("看来你确实是挺悲观的。");
			Play_3();
		},
		"所以这个“不太真实的游戏”其实到处都是编的？": function(message){
			$.main_menu_convo_2 = 3;

			p(message);
			N("就算游戏里的对话是完全准确的，那也还是编的。");
			p("……");
			Play_3();
		}
	});

}

function Play_3(){

	N("你将会扮演我，在大概2010年。");
	if(!$.asked_credits){
		N("因为你跳过了关于作者的部分，我简单提一下，我（暂时还没上户口本）的名字是Nicky Case。");
		p("嘘。");
	}

	var whatISay;
	switch($.main_menu_convo_1){
		case 1: whatISay = "这个游戏并没有基情四射的结局。"; break;
		case 2: whatISay = "这个游戏讲了我出柜，成人，接受的故事。"; break;
		case 3: whatISay = "这个游戏并没有血，只有泪。"; break;
	}
	switch($.main_menu_convo_2){
		case 1: whatISay += "很抱歉我之前有点悲观。"; break;
		case 2: whatISay += "并且这里没有正确答案。"; break;
		case 3: whatISay += "并且里面充斥着谎言。"; break;
	}
	N(whatISay);

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);

	p("嘿，我就说过。");

	// HACK - Just clear dialogue & stuff.
	Wait(1000);
	queue(ClearDialogue,0);

	Wait(500);
	Show("nicky","coffee_nicky_throw");
	PlaySound("sfx","coffee_throw");
	
	Wait(1000);
	Show("nicky","coffee_nicky_still_2");
	Wait(500);
	
	N("你在玩的时候……");
	N("小心地选择你要说什么。");
	N("每个人都会记住你曾经说了什么，或者你没说什么。");
	p("是啊，甚至在这个<b>主菜单</b>里都体现出了这一点。");
	N("没错。");

	N("……");
	N("有些事真的很难忘记。");
	
	Clear();
	Start_Jack_1();

}

function Credits(message){

	$.asked_credits = true;
	
	if($.asked_about){
		SipCoffee(message);
	}else{
		SipCoffee("你是谁啊？");
	}
	
	N("啊…看我多不会说话。先让我来自我介绍一下好了。");
	N("你好，我是Nicky Case。");
	N("这不是我的户口本姓名,这只是我的<b>真</b>名而已。");

	p("你这话说的好奇怪啊，大兄弟。");
	if($.asked_about){
		p("所以就像你之前说的那样，这是个你个人的经历？");
	}else{
		p("所以你做了这个游戏？");
	}

	N("嗯，我是出柜模拟2014的唯一文案/程序/美工。");

	if($.asked_about){
		p("这些都是你自己一个人做的？");
		p("虽然我之前说过了但是我还是想说…");
		p("没错，你个自恋狂。");
		N("好吧也不<b>全</b>是我做的。");
		N("声音和音效都是来自多个公有领域的");
	}else{
		N("不过声音和音效是来自多个公有领域的");
	}

	N("虽然，这个游戏基本全是我一个人做出来的…");
	N("…但是，有不少人和这个游戏中的故事有牵连。");

	if($.asked_about){
		Choose({
			"说了这么多，我们现在开始玩吧！": Play
		});
	}else{
		Choose({
			"扯了这么多，我们现在可以玩了吗？": Play,
			"你为什么做了这个游戏？（关于作者）": function(){
				About("你为什么做了这个游戏？");
			}
		});
	}

}

function About(message){

	$.asked_about = true;

	SipCoffee(message);

	if($.asked_credits){
		N("我想要讲一讲我自己身上的故事。");
	}else{
		N("这个游戏…");
		N("…更像是一个聊天模拟，讲的…");
		N("…是个真的很私人的故事");
	}
	
	p("你个自恋狂。");
	N("哈，没错。");

	if($.asked_credits){
		p("其实也不是，一个自恋狂应该会用他的真名。");
		N("我之前跟你说过了，这就<b>是</b>我的真——");
		p("好啦好啦，你个奇葩。");
	}

	N("我做这个游戏主要是为了参加#Nar8 Game Jam。所以这给了我做这个游戏的动机，当然还有一条deadline。");
	p("你一直拖到了最后一天才参加的，对不对。");
	N("对。");
	N("但是！这个游戏是没有版权的，属于公有领域。");
	N("就像我公开性取向一样公开源代码。");

	p("你这双关一点也不好。");
	N("那改成“Fork Me”这种程序员才懂的梗呢？");
	p("噫~~");

	if($.asked_credits){
		Choose({
			"让咱们现在开始玩这个游戏吧。": Play
		});
	}else{
		Choose({
			"关于烂梗先一放,咱们能开始玩了吗？": Play,
			"所以你到底是谁?（制作人员）": function(){
				Credits("所以你到底是谁？");
			}
		});
	}

}