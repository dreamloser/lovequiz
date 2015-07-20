$(function() {
  'use strict';

  FastClick.attach(document.body);
  $('body').bind('touchstart', function() {});


var n = 1,
    playing = false,
    s = 0,
    w,
    u,
    k,
    l = 0;

    /* Start the Game */

  $("#start_btn").on("click", function() {
      w = Math.floor((Math.random()*(questions.length)));
      k = questions[w];
      questions.splice(w, 1);
      $("#welcome").addClass("bounceOutUp animatedFast");
      setTimeout(function(){$("#welcome").detach();}, 350);
      $("#start").prepend(p.t);
      $("div.board").fadeIn(3000);
      $("#musicIcon, #progressbar").fadeIn(3000);
      $(".questions").css("visibility", "visible").addClass("bounceInUp animated");
      $(".questionDes").html(k.describe).append(k.music, k.playButton);
      $("#choiceA").text(k.A.describe);
      $("#choiceB").text(k.B.describe);
      $("#choiceC").text(k.C.describe);
      document.getElementById("song").play();
      playing = true;
    });


  /* Change questions */
  $("button.choice").on("click", function() {
  var d = $(this).attr("data-choice"),
      m = k[d].score;
   /*   console.log(m); */
      console.log(n);
      document.getElementById("song").pause();
      s = s + m;
      l = l + 10;
      $("#progressbar>div").css("width", l + "%");
      $(".questions").removeClass("bounceInUp animated").addClass("bounceOutUp animatedFast");
      if (!$("body").hasClass("noHover")) {
        $("body").addClass("noHover");
      };

      

 
   setTimeout(
      function() {
    var a = Math.floor((Math.random()*(questions.length))),
        v = questions[a];
        k = v;
        questions.splice(a, 1);
        $(".questions").addClass("bounceInUp animated");
        $(".questionDes").html(v.describe).append(v.music, v.playButton);
        $("#choiceA").text(v.A.describe);
        $("#choiceB").text(v.B.describe);
        $("#choiceC").text(v.C.describe);
        document.getElementById("song").oncanplaythrough = document.getElementById("song").play();
        playing = true;
        n++;
     if (n > 10) {   
        document.title = "我的真实年龄居然是" + (s/10|0) +"岁，你也快来测一下吧~！"
      document.getElementById("song").pause();
      $("body").append(p.g, p.d);
      $("#finalScore").text(s/10|0);
      $("#restart").on("click", function(){
           window.location.reload();
         });
      $("#share").on("click", function(){
           $("#mask").css("display","block");
           $("#roland").css("display","none");
         });
      $("#mask").on("click", function(){
           $("#mask").css("display","none");
         });
     };

        $("body").removeClass("noHover"); 
      
       $("#pg").text(n - 1 + "/10");
    }, 200);
   console.log(s);
});

/* Music Play */
$("body").on("click", ".btn-info", function() {
  var audio = document.getElementById("song");
  if (!audio.paused){playing = true};
  if (playing == false) {
    audio.oncanplaythrough = audio.play();
    playing = true;
    $(".btn-info").html("<b>暂停</b>");
  } else {
    audio.pause();
    playing = false;
    $(".btn-info").html("<b>点击播放</b>");
  }
  audio.addEventListener("ended", function(){$(".btn-info").html("<b>点击播放</b>");playing = false;});
});

/*Hover Touch Exchange*/
$('body').bind('touchstart', function() {});

/*All the appending stuff*/
var p = {
  t: "<div hidden id='progressbar'><div><span id='pg'></span></div></div><div hidden id='musicIcon' class='center'><span class='glyphicon glyphicon-music'></span></div>",
  d: "<div id='dead_layer'></div>",
  g: "<div id='ending'><center><div id='mask'><img src='./images/share_arrow.png'></div><div class='roland bounceInDown animated'><img src='./images/roland.png'></div><p class='prologue bounceInDown animated' style='background-color:#F2E436;text-align:center;margin-top:1em;'>你的年龄为<br><br><span id='finalScore'></span><br><br><span class='statement'></span></p><button class='btn bounceInDown animatedDelayed' id='restart'>一点都不准！再测一次</button><button class='btn bounceInDown animatedDelayed' id='share'>迫不及待想知道朋友的结果了呢</button><button class='btn bounceInDown animatedDelayed' id='story'>题目背后的故事</button>"    
    },
    q = {
    q_1_1: {
    describe: "<b>这首歌来自哪部电影？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/变形金刚.mp3'></audio>",
    playButton: "<button type='button' id='button1' class='btn btn-info btn-sm'><b>暂停</b></button>",
   A: {
      score: Math.floor(Math.random() * (34 - 24 + 1)) + 24,
      describe: "变形金刚"
    },
    B: {
      score: Math.floor(Math.random() * (45 - 30 + 1)) + 30,
      describe: "速度与激情"
    },
    C: {
      score: Math.floor(Math.random() * (45 - 30 + 1)) + 30,
      describe: "美国队长"
    }
  },
  q_1_2: {
    describe: "<b>这段启动声音来自哪个系统？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/Windows95.mp3'></audio>",
    playButton: "<button type='button' id='button1' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
      describe: "Windows Me"
    },
    B: {
      score: Math.floor(Math.random() * (50 - 28 + 1)) + 24,
      describe: "Windows 95"
    },
    C: {
      score: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
      describe: "Windows 2000"
    }
  },
  q_1_3: {
    describe: "<b>这段音频来自哪个游戏？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/超级玛丽.mp3'></audio>",
    playButton: "<button type='button' id='button2' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
      describe: "冒险岛"
    },
    B: {
      score: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
      describe: "魂斗罗"
    },
    C: {
      score: Math.floor(Math.random() * (35 - 25 + 1)) + 25,
      describe: "超级玛丽"
    }
  },
  q_1_4: {
    describe: "<b>这首歌是哪部电影的主题曲？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/我好想你.mp3'></audio>",
    playButton: "<button type='button' id='button3' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (45 - 30 + 1)) + 30,
      describe: "何以笙箫默"
    },
    B: {
      score: Math.floor(Math.random() * (25 - 15 + 1)) + 15,
      describe: "小时代"
    },
    C: {
      score: Math.floor(Math.random() * (45 - 30 + 1)) + 30,
      describe: "左耳"
    }
  },
  q_1_5: {
    describe: "<b>这个片段来自谁的歌？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/双节棍.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (22 - 15 + 1)) + 15,
      describe: "张韶涵"
    },
    B: {
      score: Math.floor(Math.random() * (33 - 25 + 1)) + 25,
      describe: "周杰伦"
    },
    C: {
      score: Math.floor(Math.random() * (22 - 15 + 1)) + 15,
      describe: "方大同"
    }
  },
  q_1_6: {
    describe: "<b>这首歌是哪部日本连续剧主题曲？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/排球女将.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (22 - 15 + 1)) + 15,
      describe: "白色巨塔"
    },
    B: {
      score: Math.floor(Math.random() * (22 - 15 + 1)) + 15,
      describe: "东京爱情故事"
    },
    C: {
      score: Math.floor(Math.random() * (55 - 40 + 1)) + 40,
      describe: "排球女将"
    }
  },
  q_1_7: {
    describe: "<b>这首歌来自哪部电视剧？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/爱情公寓.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (25 - 15 + 1)) + 15,
      describe: "爱情公寓"
    },
    B: {
      score: Math.floor(Math.random() * (45 - 25 + 1)) + 25,
      describe: "欢乐家庭"
    },
    C: {
      score: Math.floor(Math.random() * (45 - 25 + 1)) + 25,
      describe: "一起来看流星雨"
    }
  },
  q_1_8: {
    describe: "<b>这是游戏《仙剑奇侠传》中什么时候的背景音乐？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/战斗胜利.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (40 - 28 + 1)) + 28,
      describe: "比武招亲"
    },
    B: {
      score: Math.floor(Math.random() * (22 - 15 + 1)) + 15,
      describe: "战斗胜利"
    },
    C: {
      score: Math.floor(Math.random() * (22 - 15 + 1)) + 15,
      describe: "升级"
    }
  },
  q_1_9: {
    describe: "<b>这首歌来自哪个综艺节目？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/快乐大本营.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (45 - 25 + 1)) + 25,
      describe: "奔跑吧兄弟"
    },
    B: {
      score: Math.floor(Math.random() * (45 - 25 + 1)) + 25,
      describe: "天天向上"
    },
    C: {
      score: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
      describe: "快乐大本营"
    }
  },
  q_1_10: {
    describe: "<b>这首歌叫什么名字？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/TFBOYS.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (40 - 25 + 1)) + 25,
      describe: "魔法城堡"
    },
    B: {
      score: Math.floor(Math.random() * (40 - 25 + 1)) + 25,
      describe: "左手右手"
    },
    C: {
      score: Math.floor(Math.random() * (20 - 10 + 1)) + 10,
      describe: "青春修炼手册"
    }
  },
  q_1_11: {
    describe: "<b>这段开头来自哪部样板戏？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/红灯记.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
      describe: "智取威虎山"
    },
    B: {
      score: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
      describe: "沙家浜"
    },
    C: {
      score: Math.floor(Math.random() * (45 - 35 + 1)) + 35,
      describe: "红灯记"
    }
  },
  q_1_12: {
    describe: "<b>这段歌曲来自哪部港剧？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/霍元甲.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
      describe: "叶问"
    },
    B: {
      score: Math.floor(Math.random() * (45 - 35 + 1)) + 35,
      describe: "霍元甲"
    },
    C: {
      score: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
      describe: "上海滩"
    }
  },
  q_1_13: {
    describe: "<b>这段旋律来自那首歌？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/流星雨.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (35 - 22 + 1)) + 22,
      describe: "流星雨"
    },
    B: {
      score: Math.floor(Math.random() * (25 - 15 + 1)) + 15,
      describe: "第一时间"
    },
    C: {
      score: Math.floor(Math.random() * (25 - 15 + 1)) + 15,
      describe: "烟火的季节"
    }
  },
  q_1_14: {
    describe: "<b>这首歌是圣斗士哪一篇的主题曲？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/圣斗士.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (25 - 15 + 1)) + 15,
      describe: "冥界篇"
    },
    B: {
      score: Math.floor(Math.random() * (25 - 15 + 1)) + 15,
      describe: "天界篇"
    },
    C: {
      score: Math.floor(Math.random() * (30 - 22 + 1)) + 22,
      describe: "冥王十二宫篇"
    }
  },
  q_1_15: {
    describe: "<b>这首歌来自哪部动画片？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/大力水手.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (25 - 15 + 1)) + 15,
      describe: "猫和老鼠"
    },
    B: {
      score: Math.floor(Math.random() * (40 - 25 + 1)) + 25,
      describe: "大力水手"
    },
    C: {
      score: Math.floor(Math.random() * (25 - 15 + 1)) + 15,
      describe: "米老鼠和唐老鸭"
    }
  },
  q_1_16: {
    describe: "<b>这首歌叫什么名字？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/我爱洗澡.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (25 - 15 + 1)) + 15,
      describe: "花仙子之歌"
    },
    B: {
      score: Math.floor(Math.random() * (25 - 15 + 1)) + 15,
      describe: "健康歌"
    },
    C: {
      score: Math.floor(Math.random() * (40 - 25 + 1)) + 25,
      describe: "我爱洗澡"
    }
  },
  q_1_17: {
    describe: "<b>这首歌是谁唱的？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/我想有个家.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (25 - 15 + 1)) + 15,
      describe: "韦唯"
    },
    B: {
      score: Math.floor(Math.random() * (40 - 25 + 1)) + 25,
      describe: "潘美辰"
    },
    C: {
      score: Math.floor(Math.random() * (25 - 15 + 1)) + 15,
      describe: "那英"
    }
  },
  q_1_18: {
    describe: "<b>这首歌来自哪部电视剧的主题曲？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/八月桂花香.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (35 - 22 + 1)) + 22,
      describe: "八月桂花香"
    },
    B: {
      score: Math.floor(Math.random() * (25 - 15 + 1)) + 15,
      describe: "一剪梅"
    },
    C: {
      score: Math.floor(Math.random() * (25 - 15 + 1)) + 15,
      describe: "一帘幽梦"
    }
  },
  q_1_19: {
    describe: "<b>这首歌来自哪部动画片？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/葫芦娃.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
      describe: "哪吒"
    },
    B: {
      score: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
      describe: "黑猫警长"
    },
    C: {
      score: Math.floor(Math.random() * (35 - 25 + 1)) + 25,
      describe: "葫芦兄弟"
    }
  },
  q_1_20: {
    describe: "<b>你听到的是谁的成名曲的开头？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/天黑黑.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (22 - 15 + 1)) + 15,
      describe: "王菲"
    },
    B: {
      score: Math.floor(Math.random() * (32 - 22 + 1)) + 22,
      describe: "孙燕姿"
    },
    C: {
      score: Math.floor(Math.random() * (22 - 15 + 1)) + 15,
      describe: "张惠妹"
    }
  },
  q_1_21: {
    describe: "<b>这段音乐来自哪个动画片的开头曲？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/ドラえもんのうた.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (22 - 15 + 1)) + 15,
      describe: "樱桃小丸子"
    },
    B: {
      score: Math.floor(Math.random() * (22 - 15 + 1)) + 15,
      describe: "魔女宅急便"
    },
    C: {
      score: Math.floor(Math.random() * (34 - 24 + 1)) + 24,
      describe: "哆啦A梦"
    }
  },
  q_1_22: {
    describe: "<b>这首歌叫什么名字？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/新鸳鸯蝴蝶梦.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (22 - 15 + 1)) + 15,
      describe: "爱江山更爱美人"
    },
    B: {
      score: Math.floor(Math.random() * (22 - 15 + 1)) + 15,
      describe: "涛声依旧"
    },
    C: {
      score: Math.floor(Math.random() * (45 - 35 + 1)) + 35,
      describe: "新鸳鸯蝴蝶梦"
    }
  },
  q_1_23: {
    describe: "<b>来自《不能说的秘密》的这段音乐是几只手弹的？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/几个手在弹.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (50 - 35 + 1)) + 35,
      describe: "2只"
    },
    B: {
      score: Math.floor(Math.random() * (35 - 22 + 1)) + 22,
      describe: "4只"
    },
    C: {
      score: Math.floor(Math.random() * (50 - 35 + 1)) + 35,
      describe: "6只"
    }
  },
  q_1_24: {
    describe: "<b>这首歌是哪个动画片的片头曲？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/灌篮高手.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (35 - 24 + 1)) + 24,
      describe: "灌篮高手"
    },
    B: {
      score: Math.floor(Math.random() * (22 - 15 + 1)) + 15,
      describe: "足球小将"
    },
    C: {
      score: Math.floor(Math.random() * (50 - 35 + 1)) + 35,
      describe: "棒球英豪"
    }
  },
  q_1_25: {
    describe: "<b>这首歌来自哪部电影？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/冰山上的雪莲.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (55 - 45 + 1)) + 45,
      describe: "冰山上的来客"
    },
    B: {
      score: Math.floor(Math.random() * (22 - 15 + 1)) + 15,
      describe: "追捕"
    },
    C: {
      score: Math.floor(Math.random() * (22 - 15 + 1)) + 15,
      describe: "柳堡的故事"
    }
  },
  q_1_26: {
    describe: "<b>“啊!朋友再见”这一句是哪部电影的插曲呢？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/桥.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (22 - 15 + 1)) + 15,
      describe: "再见了，姑娘"
    },
    B: {
      score: Math.floor(Math.random() * (22 - 15 + 1)) + 15,
      describe: "北非谍影"
    },
    C: {
      score: Math.floor(Math.random() * (55 - 40 + 1)) + 40,
      describe: "桥"
    }
  },
  q_1_27: {
    describe: "<b>这首歌是哪部动画片的主题曲？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/小马.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (35 - 25 + 1)) + 25,
      describe: "飞天小女警"
    },
    B: {
      score: Math.floor(Math.random() * (20 - 10 + 1)) + 10,
      describe: "小马宝莉"
    },
    C: {
      score: Math.floor(Math.random() * (35 - 25 + 1)) + 25,
      describe: "彩虹小马"
    }
  },
  q_1_28: {
    describe: "<b>这首歌是《还珠格格》第几部的主题曲？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/还珠格格.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (35 - 22 + 1)) + 22,
      describe: "第一部"
    },
    B: {
      score: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
      describe: "第二部"
    },
    C: {
      score: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
      describe: "第三部"
    }
  },
  q_1_29: {
    describe: "<b>这首歌是哪部电影中的？</b><br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/野蛮女友.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
      describe: "蓝色生死恋"
    },
    B: {
      score: Math.floor(Math.random() * (30 - 25 + 1)) + 25,
      describe: "我的野蛮女友"
    },
    C: {
      score: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
      describe: "色即是空"
    }
  },
  q_1_30: {
    describe: "<b>这首歌来自哪部电影？</b>10<br>",
    music: "<audio hidden preload class='songs' id='song' src='audios/Unchained_Melody.mp3'></audio>",
    playButton: "<button type='button' id='button4' class='btn btn-info btn-sm'><b>暂停</b></button>",
    A: {
      score: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
      describe: "魂断蓝桥"
    },
    B: {
      score: Math.floor(Math.random() * (40 - 30 + 1)) + 30,
      describe: "人鬼情未了"
    },
    C: {
      score: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
      describe: "蒂芙尼的早餐"
    }
  }
};

var questions = [q.q_1_1, q.q_1_2, q.q_1_3, q.q_1_4, q.q_1_5, q.q_1_6, q.q_1_7, q.q_1_8, q.q_1_9, q.q_1_10, q.q_1_11, q.q_1_12, q.q_1_13, q.q_1_14, q.q_1_15, q.q_1_16, q.q_1_17, q.q_1_18, q.q_1_19, q.q_1_20, q.q_1_21, q.q_1_22, q.q_1_23, q.q_1_24, q.q_1_25, q.q_1_26, q.q_1_27, q.q_1_28, q.q_1_29];

var randomProperty = function(obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};

});