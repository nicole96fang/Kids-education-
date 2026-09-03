/* ===================================================
   Hao Yan Learn · 词库数据
   - 一年级上册 / 下册 人教版 / 部编版 生字
   - 英文单词、短语、绘本、语法 等
   - 所有日期相关通过"每日 5 个"随机种子+日期 实现「每日更新不重复」
   =================================================== */

window.HY_DATA = {

  // ========== 元数据 ==========
  meta: {
    appName: "Hao Yan Learn",
    cnName: "皓言学习工作台",
    version: "1.0.0",
    subject: "小学一年级"
  },

  // ========== 拼音表 ==========
  pinyinInitials: ['b','p','m','f','d','t','n','l','g','k','h','j','q','x','zh','ch','sh','r','z','c','s','y','w'],
  pinyinFinals:   ['a','o','e','i','u','ai','ei','ui','ao','ou','iu','ie','üe','er','an','en','in','un','ün','ang','eng','ing','ong'],

  // ========== 一年级汉字 (人教版 · 上下册 · 大约 300+ 常用字) ==========
  // lesson 字段表示单元编号
  charList: [
    // 一上：天地人 + 拼音
    {char:"天",pinyin:"tiān",stroke:"4",lesson:"1",meaning:"sky / 天上",example:"天上有星星。",emoji:"🌌"},
    {char:"地",pinyin:"dì",stroke:"6",lesson:"1",meaning:"ground / 土地",example:"地上有花。",emoji:"🌍"},
    {char:"人",pinyin:"rén",stroke:"2",lesson:"1",meaning:"person 人",example:"我是中国人。",emoji:"🧍"},
    {char:"你",pinyin:"nǐ",stroke:"7",lesson:"1",meaning:"you 你",example:"你好！",emoji:"👋"},
    {char:"我",pinyin:"wǒ",stroke:"7",lesson:"1",meaning:"I / me",example:"我爱爸爸妈妈。",emoji:"😊"},
    {char:"他",pinyin:"tā",stroke:"5",lesson:"1",meaning:"he / him",example:"他是我的朋友。",emoji:"🧒"},

    // 一上：金木水火土
    {char:"一",pinyin:"yī",stroke:"1",lesson:"2",meaning:"one 一",example:"一只手。",emoji:"☝️"},
    {char:"二",pinyin:"èr",stroke:"2",lesson:"2",meaning:"two 二",example:"我有二个苹果。",emoji:"2️⃣"},
    {char:"三",pinyin:"sān",stroke:"3",lesson:"2",meaning:"three 三",example:"三只小鸟。",emoji:"3️⃣"},
    {char:"上",pinyin:"shàng",stroke:"3",lesson:"2",meaning:"up 上",example:"太阳在山上。",emoji:"⬆️"},
    {char:"口",pinyin:"kǒu",stroke:"3",lesson:"2",meaning:"mouth 口",example:"我有一张嘴。",emoji:"👄"},
    {char:"耳",pinyin:"ěr",stroke:"6",lesson:"2",meaning:"ear 耳",example:"我的耳朵灵。",emoji:"👂"},
    {char:"目",pinyin:"mù",stroke:"5",lesson:"2",meaning:"eye 目",example:"我的大眼睛。",emoji:"👁️"},
    {char:"手",pinyin:"shǒu",stroke:"4",lesson:"2",meaning:"hand 手",example:"我有一双手。",emoji:"✋"},
    {char:"足",pinyin:"zú",stroke:"7",lesson:"2",meaning:"foot 足",example:"走万里路。",emoji:"🦶"},
    {char:"站",pinyin:"zhàn",stroke:"10",lesson:"2",meaning:"stand 站",example:"我站在草地上。",emoji:"🧍"},
    {char:"坐",pinyin:"zuò",stroke:"7",lesson:"2",meaning:"sit 坐",example:"我坐在椅子上。",emoji:"🪑"},

    // 一上：日月水火
    {char:"日",pinyin:"rì",stroke:"4",lesson:"3",meaning:"sun 日",example:"日出东方。",emoji:"☀️"},
    {char:"月",pinyin:"yuè",stroke:"4",lesson:"3",meaning:"moon 月",example:"月亮很圆。",emoji:"🌕"},
    {char:"水",pinyin:"shuǐ",stroke:"4",lesson:"3",meaning:"water 水",example:"我喝水。",emoji:"💧"},
    {char:"火",pinyin:"huǒ",stroke:"4",lesson:"3",meaning:"fire 火",example:"火很热。",emoji:"🔥"},
    {char:"山",pinyin:"shān",stroke:"3",lesson:"3",meaning:"mountain 山",example:"高山真美。",emoji:"⛰️"},
    {char:"石",pinyin:"shí",stroke:"5",lesson:"3",meaning:"stone 石",example:"石头硬。",emoji:"🪨"},
    {char:"田",pinyin:"tián",stroke:"5",lesson:"3",meaning:"field 田",example:"农田绿油油。",emoji:"🌾"},
    {char:"禾",pinyin:"hé",stroke:"5",lesson:"3",meaning:"grain 禾",example:"禾苗青青。",emoji:"🌱"},

    // 一上：春夏秋冬
    {char:"春",pinyin:"chūn",stroke:"9",lesson:"4",meaning:"spring 春",example:"春天花儿开。",emoji:"🌸"},
    {char:"夏",pinyin:"xià",stroke:"10",lesson:"4",meaning:"summer 夏",example:"夏天可以游泳。",emoji:"🍉"},
    {char:"秋",pinyin:"qiū",stroke:"9",lesson:"4",meaning:"autumn 秋",example:"秋天叶子黄了。",emoji:"🍁"},
    {char:"冬",pinyin:"dōng",stroke:"5",lesson:"4",meaning:"winter 冬",example:"冬天会下雪。",emoji:"❄️"},
    {char:"雪",pinyin:"xuě",stroke:"11",lesson:"4",meaning:"snow 雪",example:"下雪啦！",emoji:"🌨️"},
    {char:"花",pinyin:"huā",stroke:"7",lesson:"4",meaning:"flower 花",example:"花儿真美。",emoji:"🌺"},

    // 一上：家人
    {char:"爸",pinyin:"bà",stroke:"8",lesson:"5",meaning:"father 爸",example:"爸爸真高大。",emoji:"👨"},
    {char:"妈",pinyin:"mā",stroke:"6",lesson:"5",meaning:"mother 妈",example:"妈妈最漂亮。",emoji:"👩"},
    {char:"爷",pinyin:"yé",stroke:"6",lesson:"5",meaning:"grandpa 爷",example:"爷爷慈祥。",emoji:"👴"},
    {char:"奶",pinyin:"nǎi",stroke:"5",lesson:"5",meaning:"grandma 奶奶",example:"奶奶做饭香。",emoji:"👵"},
    {char:"哥",pinyin:"gē",stroke:"10",lesson:"5",meaning:"older brother 哥",example:"哥哥会打球。",emoji:"👦"},
    {char:"姐",pinyin:"jiě",stroke:"8",lesson:"5",meaning:"older sister 姐",example:"姐姐真漂亮。",emoji:"👧"},
    {char:"弟",pinyin:"dì",stroke:"7",lesson:"5",meaning:"younger brother 弟",example:"弟弟笑哈哈。",emoji:"👶"},

    // 一上：课文常用字
    {char:"大",pinyin:"dà",stroke:"3",lesson:"6",meaning:"big 大",example:"大象很大。",emoji:"🐘"},
    {char:"小",pinyin:"xiǎo",stroke:"3",lesson:"6",meaning:"small 小",example:"小猫真小。",emoji:"🐱"},
    {char:"多",pinyin:"duō",stroke:"6",lesson:"6",meaning:"many 多",example:"花真多。",emoji:"➕"},
    {char:"少",pinyin:"shǎo",stroke:"4",lesson:"6",meaning:"few 少",example:"人少。",emoji:"➖"},
    {char:"牛",pinyin:"niú",stroke:"4",lesson:"6",meaning:"cow 牛",example:"牛在吃草。",emoji:"🐄"},
    {char:"羊",pinyin:"yáng",stroke:"6",lesson:"6",meaning:"sheep 羊",example:"小羊咩咩。",emoji:"🐑"},
    {char:"鱼",pinyin:"yú",stroke:"8",lesson:"6",meaning:"fish 鱼",example:"小鱼游。",emoji:"🐟"},
    {char:"鸟",pinyin:"niǎo",stroke:"5",lesson:"6",meaning:"bird 鸟",example:"小鸟飞。",emoji:"🐦"},

    {char:"马",pinyin:"mǎ",stroke:"3",lesson:"7",meaning:"horse 马",example:"小马跑。",emoji:"🐎"},
    {char:"车",pinyin:"chē",stroke:"4",lesson:"7",meaning:"vehicle 车",example:"汽车来啦。",emoji:"🚗"},
    {char:"船",pinyin:"chuán",stroke:"11",lesson:"7",meaning:"boat 船",example:"小船在水里。",emoji:"⛵"},
    {char:"飞",pinyin:"fēi",stroke:"3",lesson:"7",meaning:"fly 飞",example:"小鸟飞。",emoji:"🪽"},

    {char:"云",pinyin:"yún",stroke:"4",lesson:"8",meaning:"cloud 云",example:"白云飘。",emoji:"☁️"},
    {char:"雨",pinyin:"yǔ",stroke:"8",lesson:"8",meaning:"rain 雨",example:"雨点滴滴。",emoji:"🌧️"},
    {char:"风",pinyin:"fēng",stroke:"4",lesson:"8",meaning:"wind 风",example:"风儿吹。",emoji:"🌬️"},
    {char:"好",pinyin:"hǎo",stroke:"6",lesson:"8",meaning:"good 好",example:"大家好。",emoji:"👍"},
    {char:"书",pinyin:"shū",stroke:"4",lesson:"8",meaning:"book 书",example:"我爱看书。",emoji:"📚"},
    {char:"本",pinyin:"běn",stroke:"5",lesson:"8",meaning:"root / 本",example:"一本书。",emoji:"📒"},
    {char:"笔",pinyin:"bǐ",stroke:"10",lesson:"8",meaning:"pen 笔",example:"我会用笔写字。",emoji:"🖊️"},
    {char:"包",pinyin:"bāo",stroke:"5",lesson:"8",meaning:"bag 包",example:"我的小书包。",emoji:"🎒"},

    // 一下
    {char:"学",pinyin:"xué",stroke:"16",lesson:"9",meaning:"study 学",example:"我爱学习。",emoji:"📖"},
    {char:"习",pinyin:"xí",stroke:"3",lesson:"9",meaning:"practice 习",example:"认真练习。",emoji:"✏️"},
    {char:"爱",pinyin:"ài",stroke:"13",lesson:"9",meaning:"love 爱",example:"我爱爸爸妈妈。",emoji:"❤️"},
    {char:"家",pinyin:"jiā",stroke:"10",lesson:"9",meaning:"home 家",example:"我有一个幸福的家。",emoji:"🏡"},
    {char:"校",pinyin:"xiào",stroke:"10",lesson:"9",meaning:"school 校",example:"我的学校真美。",emoji:"🏫"},
    {char:"国",pinyin:"guó",stroke:"8",lesson:"9",meaning:"country 国",example:"我爱我的祖国。",emoji:"🇨🇳"},
    {char:"旗",pinyin:"qí",stroke:"12",lesson:"9",meaning:"flag 旗",example:"五星红旗。",emoji:"🚩"},

    {char:"吃",pinyin:"chī",stroke:"6",lesson:"10",meaning:"eat 吃",example:"我吃饭。",emoji:"🍚"},
    {char:"喝",pinyin:"hē",stroke:"12",lesson:"10",meaning:"drink 喝",example:"我喝牛奶。",emoji:"🥛"},
    {char:"跑",pinyin:"pǎo",stroke:"12",lesson:"10",meaning:"run 跑",example:"我跑得快。",emoji:"🏃"},
    {char:"跳",pinyin:"tiào",stroke:"13",lesson:"10",meaning:"jump 跳",example:"我会跳绳。",emoji:"🤸"},
    {char:"唱",pinyin:"chàng",stroke:"11",lesson:"10",meaning:"sing 唱",example:"我爱唱歌。",emoji:"🎤"},
    {char:"歌",pinyin:"gē",stroke:"14",lesson:"10",meaning:"song 歌",example:"一首儿歌。",emoji:"🎵"},

    {char:"笑",pinyin:"xiào",stroke:"10",lesson:"11",meaning:"laugh 笑",example:"开口笑。",emoji:"😄"},
    {char:"哭",pinyin:"kū",stroke:"11",lesson:"11",meaning:"cry 哭",example:"弟弟哭了。",emoji:"😢"},
    {char:"红",pinyin:"hóng",stroke:"6",lesson:"11",meaning:"red 红",example:"红旗红。",emoji:"🔴"},
    {char:"黄",pinyin:"huáng",stroke:"11",lesson:"11",meaning:"yellow 黄",example:"油菜花黄。",emoji:"🟡"},
    {char:"蓝",pinyin:"lán",stroke:"13",lesson:"11",meaning:"blue 蓝",example:"天空蓝蓝的。",emoji:"🔵"},
    {char:"绿",pinyin:"lǜ",stroke:"11",lesson:"11",meaning:"green 绿",example:"小草绿绿的。",emoji:"🟢"},

    {char:"走",pinyin:"zǒu",stroke:"7",lesson:"12",meaning:"walk 走",example:"我们走路回家。",emoji:"🚶"},
    {char:"看",pinyin:"kàn",stroke:"9",lesson:"12",meaning:"see 看",example:"看黑板。",emoji:"👀"},
    {char:"听",pinyin:"tīng",stroke:"7",lesson:"12",meaning:"listen 听",example:"认真听讲。",emoji:"👂"},
    {char:"说",pinyin:"shuō",stroke:"9",lesson:"12",meaning:"speak 说",example:"老师说话。",emoji:"🗣️"},
    {char:"读",pinyin:"dú",stroke:"10",lesson:"12",meaning:"read 读",example:"我爱读故事。",emoji:"📕"},
    {char:"写",pinyin:"xiě",stroke:"5",lesson:"12",meaning:"write 写",example:"写汉字。",emoji:"✍️"},

    {char:"白",pinyin:"bái",stroke:"5",lesson:"13",meaning:"white 白",example:"白雪。",emoji:"⚪"},
    {char:"黑",pinyin:"hēi",stroke:"12",lesson:"13",meaning:"black 黑",example:"黑夜里。",emoji:"⚫"},
    {char:"高",pinyin:"gāo",stroke:"10",lesson:"13",meaning:"high 高",example:"高山。",emoji:"📈"},
    {char:"低",pinyin:"dī",stroke:"7",lesson:"13",meaning:"low 低",example:"低头。",emoji:"📉"},
    {char:"长",pinyin:"cháng",stroke:"4",lesson:"13",meaning:"long 长",example:"长江长。",emoji:"📏"},
    {char:"圆",pinyin:"yuán",stroke:"9",lesson:"13",meaning:"round 圆",example:"圆月。",emoji:"⭕"},

    {char:"明",pinyin:"míng",stroke:"8",lesson:"14",meaning:"bright 明",example:"天明了。",emoji:"💡"},
    {char:"亮",pinyin:"liàng",stroke:"9",lesson:"14",meaning:"bright 亮",example:"灯真亮。",emoji:"🔆"},
    {char:"早",pinyin:"zǎo",stroke:"6",lesson:"14",meaning:"early 早",example:"早安！",emoji:"🌅"},
    {char:"午",pinyin:"wǔ",stroke:"4",lesson:"14",meaning:"noon 午",example:"午饭。",emoji:"🍱"},
    {char:"晚",pinyin:"wǎn",stroke:"11",lesson:"14",meaning:"evening 晚",example:"晚安！",emoji:"🌙"},

    {char:"朋",pinyin:"péng",stroke:"8",lesson:"15",meaning:"friend 朋",example:"朋友。",emoji:"🤝"},
    {char:"友",pinyin:"yǒu",stroke:"4",lesson:"15",meaning:"friend 友",example:"好朋友。",emoji:"🫂"},
    {char:"公",pinyin:"gōng",stroke:"4",lesson:"15",meaning:"public 公",example:"公园。",emoji:"🏞️"},
    {char:"园",pinyin:"yuán",stroke:"7",lesson:"15",meaning:"garden 园",example:"花园真美。",emoji:"🏡"},
    {char:"林",pinyin:"lín",stroke:"8",lesson:"15",meaning:"forest 林",example:"树林。",emoji:"🌲"},
    {char:"森",pinyin:"sēn",stroke:"12",lesson:"15",meaning:"forest 森",example:"森林。",emoji:"🌳"},

    {char:"心",pinyin:"xīn",stroke:"4",lesson:"16",meaning:"heart 心",example:"开心。",emoji:"❤️"},
    {char:"情",pinyin:"qíng",stroke:"11",lesson:"16",meaning:"feeling 情",example:"心情好。",emoji:"😊"},
    {char:"美",pinyin:"měi",stroke:"9",lesson:"16",meaning:"beautiful 美",example:"美丽。",emoji:"🌸"},
    {char:"丽",pinyin:"lì",stroke:"7",lesson:"16",meaning:"pretty 丽",example:"艳丽。",emoji:"💐"},
    {char:"善",pinyin:"shàn",stroke:"12",lesson:"16",meaning:"kind 善",example:"善良。",emoji:"🕊️"},
    {char:"勇",pinyin:"yǒng",stroke:"9",lesson:"16",meaning:"brave 勇",example:"勇敢。",emoji:"💪"},

    {char:"星",pinyin:"xīng",stroke:"9",lesson:"17",meaning:"star 星",example:"星星亮。",emoji:"⭐"},
    {char:"空",pinyin:"kōng",stroke:"8",lesson:"17",meaning:"sky 空",example:"蓝空。",emoji:"🌌"},
    {char:"海",pinyin:"hǎi",stroke:"10",lesson:"17",meaning:"sea 海",example:"大海。",emoji:"🌊"},
    {char:"洋",pinyin:"yáng",stroke:"9",lesson:"17",meaning:"ocean 洋",example:"海洋。",emoji:"🌊"},
    {char:"江",pinyin:"jiāng",stroke:"6",lesson:"17",meaning:"river 江",example:"长江。",emoji:"🏞️"},
    {char:"河",pinyin:"hé",stroke:"8",lesson:"17",meaning:"river 河",example:"小河。",emoji:"💧"},

    {char:"红",pinyin:"hóng",stroke:"6",lesson:"18",meaning:"red 红",example:"苹果红。",emoji:"🍎"},
    {char:"苹",pinyin:"píng",stroke:"19",lesson:"18",meaning:"apple 苹果",example:"苹果。",emoji:"🍏"},
    {char:"香",pinyin:"xiāng",stroke:"9",lesson:"18",meaning:"fragrant 香",example:"花香。",emoji:"🌺"}
  ],

  // ========== 中文词汇 (含句子) ==========
  // 二字词 + 句子
  vocabList: [
    {word:"天空",pinyin:"tiān kōng",emoji:"🌌",sentence:"天空蓝蓝的。"},
    {word:"大地",pinyin:"dà dì",emoji:"🌍",sentence:"我们站在大地上。"},
    {word:"白云",pinyin:"bái yún",emoji:"☁️",sentence:"蓝天上有白云。"},
    {word:"小河",pinyin:"xiǎo hé",emoji:"💧",sentence:"小河弯弯。"},
    {word:"大树",pinyin:"dà shù",emoji:"🌳",sentence:"大树下好乘凉。"},
    {word:"小鸟",pinyin:"xiǎo niǎo",emoji:"🐦",sentence:"小鸟在唱歌。"},
    {word:"花儿",pinyin:"huā er",emoji:"🌸",sentence:"花儿真美丽。"},
    {word:"草地",pinyin:"cǎo dì",emoji:"🌿",sentence:"绿绿的草地。"},
    {word:"石头",pinyin:"shí tou",emoji:"🪨",sentence:"石头很硬。"},
    {word:"朋友",pinyin:"péng yǒu",emoji:"🤝",sentence:"我们是好朋友。"},
    {word:"老师",pinyin:"lǎo shī",emoji:"👩‍🏫",sentence:"老师真辛苦。"},
    {word:"同学",pinyin:"tóng xué",emoji:"🧒",sentence:"我和同学一起上学。"},
    {word:"学校",pinyin:"xué xiào",emoji:"🏫",sentence:"学校真美丽。"},
    {word:"花园",pinyin:"huā yuán",emoji:"🌷",sentence:"花园里花儿开。"},
    {word:"公园",pinyin:"gōng yuán",emoji:"🏞️",sentence:"我们去公园玩。"},
    {word:"故事",pinyin:"gù shì",emoji:"📖",sentence:"我喜欢听故事。"},
    {word:"音乐",pinyin:"yīn yuè",emoji:"🎵",sentence:"音乐真好听。"},
    {word:"彩虹",pinyin:"cǎi hóng",emoji:"🌈",sentence:"雨后有彩虹。"},
    {word:"月亮",pinyin:"yuè liang",emoji:"🌙",sentence:"月亮真圆。"},
    {word:"星星",pinyin:"xīng xing",emoji:"⭐",sentence:"星星眨眼睛。"},
    {word:"太阳",pinyin:"tài yáng",emoji:"☀️",sentence:"太阳出来了。"},
    {word:"空气",pinyin:"kōng qì",emoji:"💨",sentence:"空气真新鲜。"},
    {word:"水果",pinyin:"shuǐ guǒ",emoji:"🍎",sentence:"我爱吃水果。"},
    {word:"苹果",pinyin:"píng guǒ",emoji:"🍏",sentence:"红红的苹果。"},
    {word:"香蕉",pinyin:"xiāng jiāo",emoji:"🍌",sentence:"香蕉黄黄的。"},
    {word:"西瓜",pinyin:"xī guā",emoji:"🍉",sentence:"夏天吃西瓜。"},
    {word:"米饭",pinyin:"mǐ fàn",emoji:"🍚",sentence:"我要吃米饭。"},
    {word:"牛奶",pinyin:"niú nǎi",emoji:"🥛",sentence:"我喝牛奶。"},
    {word:"糖果",pinyin:"táng guǒ",emoji:"🍬",sentence:"糖果甜甜的。"},
    {word:"蛋糕",pinyin:"dàn gāo",emoji:"🍰",sentence:"生日蛋糕。"},
    {word:"玩具",pinyin:"wán jù",emoji:"🧸",sentence:"我爱玩玩具。"},
    {word:"书本",pinyin:"shū běn",emoji:"📚",sentence:"读书好。"},
    {word:"铅笔",pinyin:"qiān bǐ",emoji:"✏️",sentence:"我用铅笔写字。"},
    {word:"桌子",pinyin:"zhuō zi",emoji:"🪑",sentence:"桌子上有书。"},
    {word:"椅子",pinyin:"yǐ zi",emoji:"🪑",sentence:"我坐在椅子上。"},
    {word:"窗户",pinyin:"chuāng hu",emoji:"🪟",sentence:"窗户真亮。"},
    {word:"门铃",pinyin:"mén líng",emoji:"🚪",sentence:"门铃响了。"},
    {word:"早晨",pinyin:"zǎo chén",emoji:"🌅",sentence:"早晨空气好。"},
    {word:"晚上",pinyin:"wǎn shang",emoji:"🌙",sentence:"晚上看星星。"},
    {word:"谢谢",pinyin:"xiè xie",emoji:"🙏",sentence:"谢谢老师。"},
    {word:"再见",pinyin:"zài jiàn",emoji:"👋",sentence:"明天再见。"},
    {word:"新年",pinyin:"xīn nián",emoji:"🎆",sentence:"新年快乐。"},
    {word:"圣诞",pinyin:"shèng dàn",emoji:"🎄",sentence:"圣诞老人。"},
    {word:"生日",pinyin:"shēng rì",emoji:"🎂",sentence:"我的生日到了。"},
    {word:"中秋",pinyin:"zhōng qiū",emoji:"🥮",sentence:"中秋赏月。"},
    {word:"端午",pinyin:"duān wǔ",emoji:"🐲",sentence:"端午节吃粽子。"},
    {word:"春天",pinyin:"chūn tiān",emoji:"🌸",sentence:"春天花儿开。"},
    {word:"夏天",pinyin:"xià tiān",emoji:"🍉",sentence:"夏天可游泳。"},
    {word:"秋天",pinyin:"qiū tiān",emoji:"🍁",sentence:"秋天真凉爽。"},
    {word:"冬天",pinyin:"dōng tiān",emoji:"❄️",sentence:"冬天会下雪。"}
  ],

  // ========== 成语 (含典故) ==========
  idiomList: [
    {idiom:"画蛇添足",pinyin:"huà shé tiān zú",meaning:"多此一举",story:"画一条蛇，已经画好了，又给它添上脚。"},
    {idiom:"守株待兔",pinyin:"shǒu zhū dài tù",meaning:"坐等好运",story:"等在树桩边等兔子撞死。"},
    {idiom:"狐假虎威",pinyin:"hú jiǎ hǔ wēi",meaning:"仗势欺人",story:"狐狸借老虎的威风吓别人。"},
    {idiom:"刻舟求剑",pinyin:"kè zhōu qiú jiàn",meaning:"死板固执",story:"在船上刻记号找掉到水里的剑。"},
    {idiom:"亡羊补牢",pinyin:"wáng yáng bǔ láo",meaning:"及时补救",story:"丢了羊再补羊圈。"},
    {idiom:"坐井观天",pinyin:"zuò jǐng guān tiān",meaning:"眼界狭窄",story:"坐在井底看天。"},
    {idiom:"对牛弹琴",pinyin:"duì niú tán qín",meaning:"白费口舌",story:"给牛弹琴，牛不理。"},
    {idiom:"拔苗助长",pinyin:"bá miáo zhù zhǎng",meaning:"急于求成",story:"把苗拔高让它长。"},
    {idiom:"一举两得",pinyin:"yī jǔ liǎng dé",meaning:"做一件事得到两个收获",story:"一件事两个好处。"},
    {idiom:"三心二意",pinyin:"sān xīn èr yì",meaning:"心思不专一",story:"三个心两个意。"},
    {idiom:"五颜六色",pinyin:"wǔ yán liù sè",meaning:"色彩丰富",story:"五种颜色六种色。"},
    {idiom:"四面八方",pinyin:"sì miàn bā fāng",meaning:"各个地方",story:"四面八方的方向。"},
    {idiom:"七上八下",pinyin:"qī shàng bā xià",meaning:"心里不安",story:"七上八下乱得很。"},
    {idiom:"九牛一毛",pinyin:"jiǔ niú yī máo",meaning:"微不足道",story:"九头牛身上的一根毛。"},
    {idiom:"十全十美",pinyin:"shí quán shí měi",meaning:"十分完美",story:"完美到极点。"},
    {idiom:"天真可爱",pinyin:"tiān zhēn kě ài",meaning:"纯真可爱",story:"小孩的天真。"},
    {idiom:"日日夜夜",pinyin:"rì rì yè yè",meaning:"每天每夜",story:"天天夜夜。"},
    {idiom:"山清水秀",pinyin:"shān qīng shuǐ xiù",meaning:"风景优美",story:"山青水秀的地方。"},
    {idiom:"人山人海",pinyin:"rén shān rén hǎi",meaning:"人非常多",story:"人堆成山海。"},
    {idiom:"鸟语花香",pinyin:"niǎo yǔ huā xiāng",meaning:"春景美好",story:"鸟儿唱花儿香。"}
  ],

  // ========== 趣味识字 (教学方法) ==========
  funMethods: [
    {ic:"🖼️",t:"图文识字",d:"看图想字，'鸟'字像小鸟"},
    {ic:"🎬",t:"动画识字",d:"演字起源故事"},
    {ic:"象",t:"象形字",d:"'日'像太阳，'山'像山"},
    {ic:"氵",t:"部首识字",d:"三点水→江海河湖"},
    {ic:"🧩",t:"字谜识字",d:"一口咬掉牛尾巴——告"},
    {ic:"⚖️",t:"对比识字",d:"明-暗 上-下 大-小"},
    {ic:"📖",t:"儿歌识字",d:"节奏韵律记得牢"},
    {ic:"🎲",t:"游戏识字",d:"拼音接龙 / 找朋友"}
  ],

  // ========== 阅读理解分级 ==========
  readingList: [
    {title:"小白兔",level:"短句",passage:"小白兔，长耳朵，爱吃萝卜爱吃菜。蹦蹦跳跳真可爱。",q:"小白兔爱吃什么？",a:"萝卜和菜。"},
    {title:"小鸟学飞",level:"儿歌",passage:"小麻雀，叫喳喳，跟着妈妈学飞翔。扑扑翅膀飞起来，小小鸟儿本领大。",q:"小麻雀跟谁学飞？",a:"妈妈。"},
    {title:"小熊请客",level:"小故事",passage:"小熊过生日，请朋友们来家玩。小兔来了，送萝卜。小羊来了，送青草。小猫来了，送鱼。大家一起唱歌跳舞，真开心！",q:"谁送了萝卜？",a:"小兔。"},
    {title:"彩虹",level:"小故事",passage:"雨停了，太阳出来了。天上挂着一道彩虹，红橙黄绿青蓝紫，真漂亮！小白兔看见了，说：'真美丽！'",q:"彩虹有几种颜色？",a:"七种。"},
    {title:"小马过河",level:"短文",passage:"小马要把一袋麦子送到磨坊去。来到一条小河边，小马不知道河水是深是浅，问牛伯伯，牛伯伯说很浅；小松鼠说很深。妈妈告诉小马：'只有自己试了才知道。'小马小心地走过了河。",q:"河水到底深不深？",a:"要自己试了才知道。"},
    {title:"揠苗助长",level:"记叙文",passage:"古时候有个农夫，他嫌禾苗长得慢，就把每棵禾苗都拔高了一些。回到家里，他对家人说：'今天真累，我帮禾苗都长高了。'儿子听了，第二天跑到田里一看，禾苗都枯死了。",q:"禾苗为什么枯死了？",a:"因为农夫把它们都拔断了。"}
  ],

  // ========== 中文绘本 (每日 5 本自动更新) ==========
  // 共 30 本；通过日期种子挑选 5 本展示
  cnBooks: [
    {title:"小蝌蚪找妈妈",cover:"🐸",desc:"找到青蛙妈妈",sentences:["暖和的春天来了。","青蛙妈妈产下了许多卵。","小蝌蚪睁开了眼睛。","小蝌蚪去找妈妈。","它们先遇见了鲤鱼。","再遇见了乌龟。","最后找到了青蛙妈妈。"]},
    {title:"小熊请客",cover:"🐻",desc:"分享真快乐",sentences:["今天小熊请客。","小兔带来萝卜。","小羊带来青菜。","小猫带来小鱼。","大家吃得真开心。"]},
    {title:"乌鸦喝水",cover:"🐦",desc:"动脑筋的小乌鸦",sentences:["一只乌鸦口渴了。","它看见一个瓶子。","瓶子里水很少。","它把小石子一颗一颗放进去。","水慢慢升高了。","乌鸦喝到了水。"]},
    {title:"小猫钓鱼",cover:"🐱",desc:"做事要专心",sentences:["小猫和妈妈去钓鱼。","小猫一会儿捉蝴蝶。","一会儿捉蜻蜓。","妈妈钓到一条大鱼。","小猫什么也没钓到。","小猫专心钓鱼，钓到了鱼。"]},
    {title:"小马过河",cover:"🐴",desc:"尝试才知深浅",sentences:["小马要过河。","牛伯伯说水很浅。","小松鼠说水很深。","小马自己试着过了河。"]},
    {title:"司马光砸缸",cover:"🪨",desc:"遇事要冷静",sentences:["小朋友在花园里玩。","一个孩子掉进大水缸。","大家慌了。","司马光举起石头砸缸。","水流出来了。"]},
    {title:"曹冲称象",cover:"🐘",desc:"聪明的曹冲",sentences:["有人送曹操一只大象。","大家想称它有多重。","曹冲有办法。","他把大象赶上船。","在船上刻记号。","再装石头称石头。","石头的重量就是大象的重量。"]},
    {title:"守株待兔",cover:"🐰",desc:"不可侥幸",sentences:["农夫在田里干活。","一只兔子撞在树桩上死了。","农夫高兴地捡起兔子。","他天天守在树桩旁。","再也没等到兔子。","田里的禾苗都枯了。"]},
    {title:"狐假虎威",cover:"🦊",desc:"看清真相",sentences:["老虎抓住了一只狐狸。","狐狸说自己是天帝派来的。","老虎不信。","狐狸说：你跟我走一趟。","动物们看见老虎都跑了。","老虎信了。"]},
    {title:"龟兔赛跑",cover:"🐢",desc:"坚持就是胜利",sentences:["乌龟和兔子比赛。","兔子跑得快，跑了一会儿就睡。","乌龟慢慢爬。","乌龟一直爬不停。","乌龟到了终点。","兔子才醒来。"]},
    {title:"小蝌蚪找妈妈 (续)",cover:"🐸",desc:"青蛙本领大",sentences:["青蛙妈妈教小蝌蚪。","学跳远。","学捉虫。","学游泳。","小蝌蚪变成了小青蛙。"]},
    {title:"春天来了",cover:"🌸",desc:"春天的变化",sentences:["小燕子飞回来了。","柳树发芽了。","花儿开了。","小草绿了。","小蜜蜂采蜜。"]},
    {title:"夏天的夜晚",cover:"🌙",desc:"星星眨眼睛",sentences:["夏夜真美。","萤火虫飞舞。","青蛙呱呱叫。","风轻轻吹。","我们数星星。"]},
    {title:"秋天的叶子",cover:"🍁",desc:"秋叶五彩",sentences:["秋风吹来。","叶子黄了。","叶子红了。","叶子落下来。","像蝴蝶飞舞。"]},
    {title:"冬天的雪",cover:"❄️",desc:"雪花飞舞",sentences:["冬天来了。","雪花飘下来。","房子白了。","树白了。","小朋友堆雪人。"]},

    {title:"孔融让梨",cover:"🍐",desc:"谦让传统",sentences:["孔融四岁让梨。","把大的给哥哥。","把小的留给自己。"]},
    {title:"铁杵成针",cover:"🪡",desc:"坚持不懈",sentences:["李白看见老婆婆磨铁杵。","李白问她为什么磨。","她说要磨成针。","李白感动了。","李白发奋读书。"]},
    {title:"凿壁偷光",cover:"🕯️",desc:"刻苦学习",sentences:["匡衡爱读书。","家里没有灯。","他凿墙借邻居的灯光。","终于成了大学问家。"]},
    {title:"画龙点睛",cover:"🐉",desc:"关键的一笔",sentences:["张僧繇画龙。","不点睛。","点睛龙飞走。"]},
    {title:"草船借箭",cover:"⛵",desc:"智慧胜过天",sentences:["诸葛亮借箭。","大雾夜里。","草船两边受箭。","十万支箭。"]},
    {title:"老爷爷的胡子",cover:"👴",desc:"奇妙想象",sentences:["老爷爷的胡子很长。","小鸟来筑巢。","蝴蝶来玩耍。","真有趣。"]},
    {title:"会走路的树",cover:"🌳",desc:"爱护自然",sentences:["小兔子发现一棵树会走路。","它跟着树走。","原来是小鹿角。","大家保护树。"]},
    {title:"鸭子骑车记",cover:"🦆",desc:"勇敢尝试",sentences:["鸭子想骑自行车。","一开始会摔。","多练几次就会了。","动物们都来学。"]},
    {title:"我的宠物龙",cover:"🐲",desc:"想象力",sentences:["我有一条小龙。","它是绿色的。","它会喷火但不伤人。","我们一起去冒险。"]},
    {title:"雪地上的脚印",cover:"👣",desc:"观察自然",sentences:["下雪了。","小动物出来留下脚印。","兔子的、鹿的、小鸟的。","像画一样。"]},
    {title:"月亮姑娘做衣裳",cover:"🌔",desc:"月相变化",sentences:["月亮姑娘做衣裳。","她去量身材。","每天身材都变。","衣裳总不合身。","原来是月相在变化。"]},
    {title:"小壁虎借尾巴",cover:"🦎",desc:"动物再生",sentences:["小壁虎尾巴被蛇咬住。","它挣断尾巴跑了。","它去向小鱼借尾巴。","小鱼要用尾巴拨水。","它去向老牛借尾巴。","老牛要用尾巴赶苍蝇。","它去向燕子借尾巴。","燕子说：'你的尾巴会长出来。'","小壁虎果然长出新尾巴。"]},
    {title:"要下雨了",cover:"☁️",desc:"自然现象",sentences:["小白兔割草。","它看见小燕子低飞。","它看见小鱼透气。","它看见蚂蚁搬家。","妈妈说：'要下雨了，快回家！'"]},
    {title:"雨点儿",cover:"🌧️",desc:"水的循环",sentences:["雨点儿从云里落下来。","落在花上。","落在田里。","落在小溪里。","汇成江河大海。","太阳一晒又变云。"]},
    {title:"小猴子下山",cover:"🐒",desc:"不能三心二意",sentences:["小猴子下山。","掰了一个玉米。","看见桃子扔玉米。","看见西瓜扔桃子。","看见兔子扔西瓜。","回家什么也没有。"]},
    {title:"雪孩子",cover:"☃️",desc:"友情与牺牲",sentences:["兔妈妈堆了雪孩子。","小白兔和雪孩子玩。","屋里着火。","雪孩子冲进火里。","救出小白兔。","自己化成了水。","飞上天空成了云。"]}
  ],

  // ============ 英文 ============

  // 26 个字母发音
  abcLetters: [
    {L:"A",w:"Apple",e:"🍎",s:"a"},{L:"B",w:"Ball",e:"⚽",s:"b"},{L:"C",w:"Cat",e:"🐱",s:"k"},{L:"D",w:"Dog",e:"🐶",s:"d"},
    {L:"E",w:"Egg",e:"🥚",s:"e"},{L:"F",w:"Fish",e:"🐟",s:"f"},{L:"G",w:"Goat",e:"🐐",s:"g"},{L:"H",w:"Hat",e:"🎩",s:"h"},
    {L:"I",w:"Ice",e:"🧊",s:"i"},{L:"J",w:"Jam",e:"🍯",s:"dʒ"},{L:"K",w:"Kite",e:"🪁",s:"k"},{L:"L",w:"Lion",e:"🦁",s:"l"},
    {L:"M",w:"Moon",e:"🌙",s:"m"},{L:"N",w:"Nest",e:"🪺",s:"n"},{L:"O",w:"Orange",e:"🍊",s:"ɒ"},{L:"P",w:"Pig",e:"🐷",s:"p"},
    {L:"Q",w:"Queen",e:"👸",s:"kw"},{L:"R",w:"Rabbit",e:"🐰",s:"r"},{L:"S",w:"Sun",e:"☀️",s:"s"},{L:"T",w:"Tree",e:"🌳",s:"t"},
    {L:"U",w:"Umbrella",e:"☂️",s:"ʌ"},{L:"V",w:"Van",e:"🚐",s:"v"},{L:"W",w:"Water",e:"💧",s:"w"},{L:"X",w:"X-ray",e:"🩻",s:"ks"},
    {L:"Y",w:"Yo-yo",e:"🪀",s:"j"},{L:"Z",w:"Zebra",e:"🦓",s:"z"}
  ],

  // ========== 英文单词词库（约 100 个，分日 5 个） ==========
  enWords: [
    {w:"cat",m:"猫",ex:"This is a cat.",zh:"这是一只猫。",e:"🐱"},
    {w:"dog",m:"狗",ex:"My dog is big.",zh:"我的狗很大。",e:"🐶"},
    {w:"book",m:"书",ex:"I read a book.",zh:"我读一本书。",e:"📖"},
    {w:"pen",m:"钢笔",ex:"This is my pen.",zh:"这是我的笔。",e:"🖊️"},
    {w:"bag",m:"包",ex:"It is a school bag.",zh:"这是书包。",e:"🎒"},
    {w:"sun",m:"太阳",ex:"The sun is bright.",zh:"太阳很亮。",e:"☀️"},
    {w:"moon",m:"月亮",ex:"The moon is round.",zh:"月亮圆圆的。",e:"🌙"},
    {w:"star",m:"星星",ex:"I see a star.",zh:"我看到一颗星星。",e:"⭐"},
    {w:"tree",m:"树",ex:"The tree is tall.",zh:"树很高。",e:"🌳"},
    {w:"flower",m:"花",ex:"This is a flower.",zh:"这是一朵花。",e:"🌸"},
    {w:"bird",m:"鸟",ex:"A bird can fly.",zh:"鸟会飞。",e:"🐦"},
    {w:"fish",m:"鱼",ex:"The fish is small.",zh:"鱼很小。",e:"🐟"},
    {w:"apple",m:"苹果",ex:"I like apples.",zh:"我喜欢苹果。",e:"🍎"},
    {w:"banana",m:"香蕉",ex:"I eat a banana.",zh:"我吃香蕉。",e:"🍌"},
    {w:"milk",m:"牛奶",ex:"I drink milk.",zh:"我喝牛奶。",e:"🥛"},
    {w:"egg",m:"蛋",ex:"I have an egg.",zh:"我有一个蛋。",e:"🥚"},
    {w:"water",m:"水",ex:"I want water.",zh:"我想喝水。",e:"💧"},
    {w:"rice",m:"米饭",ex:"I like rice.",zh:"我喜欢米饭。",e:"🍚"},
    {w:"happy",m:"开心",ex:"I am happy.",zh:"我很开心。",e:"😄"},
    {w:"sad",m:"难过",ex:"I feel sad.",zh:"我感到难过。",e:"😢"},
    {w:"good",m:"好的",ex:"Good morning!",zh:"早上好！",e:"👍"},
    {w:"bad",m:"坏的",ex:"It is bad.",zh:"这不好。",e:"👎"},
    {w:"hot",m:"热",ex:"It is hot.",zh:"天热。",e:"🥵"},
    {w:"cold",m:"冷",ex:"It is cold.",zh:"天冷。",e:"🥶"},
    {w:"big",m:"大",ex:"It is big.",zh:"它很大。",e:"🐘"},
    {w:"small",m:"小",ex:"It is small.",zh:"它很小。",e:"🐭"},
    {w:"run",m:"跑",ex:"I can run.",zh:"我会跑。",e:"🏃"},
    {w:"jump",m:"跳",ex:"I can jump.",zh:"我会跳。",e:"🤸"},
    {w:"sing",m:"唱",ex:"I like to sing.",zh:"我喜欢唱歌。",e:"🎤"},
    {w:"dance",m:"跳舞",ex:"Let's dance!",zh:"我们跳舞吧！",e:"💃"},
    {w:"read",m:"读",ex:"I read books.",zh:"我读书。",e:"📕"},
    {w:"write",m:"写",ex:"I write letters.",zh:"我写信。",e:"✍️"},
    {w:"red",m:"红色",ex:"The apple is red.",zh:"苹果是红色的。",e:"🔴"},
    {w:"blue",m:"蓝色",ex:"The sky is blue.",zh:"天空是蓝色的。",e:"🔵"},
    {w:"yellow",m:"黄色",ex:"The sun is yellow.",zh:"太阳是黄色的。",e:"🟡"},
    {w:"green",m:"绿色",ex:"Grass is green.",zh:"草是绿色的。",e:"🟢"},
    {w:"one",m:"一",ex:"I have one apple.",zh:"我有一个苹果。",e:"1️⃣"},
    {w:"two",m:"二",ex:"I have two eyes.",zh:"我有两只眼睛。",e:"2️⃣"},
    {w:"three",m:"三",ex:"There are three cats.",zh:"有三只猫。",e:"3️⃣"},
    {w:"four",m:"四",ex:"I have four legs.",zh:"我有四条腿。",e:"4️⃣"},
    {w:"five",m:"五",ex:"Five fingers.",zh:"五根手指。",e:"5️⃣"},
    {w:"ten",m:"十",ex:"I count to ten.",zh:"我数到十。",e:"🔟"},
    {w:"mom",m:"妈妈",ex:"I love my mom.",zh:"我爱妈妈。",e:"👩"},
    {w:"dad",m:"爸爸",ex:"Dad is tall.",zh:"爸爸很高。",e:"👨"},
    {w:"sister",m:"姐姐/妹妹",ex:"My sister is kind.",zh:"我姐姐很善良。",e:"👧"},
    {w:"brother",m:"哥哥/弟弟",ex:"My brother is fun.",zh:"我哥哥很有趣。",e:"👦"},
    {w:"friend",m:"朋友",ex:"You are my friend.",zh:"你是我的朋友。",e:"🤝"},
    {w:"school",m:"学校",ex:"I go to school.",zh:"我去上学。",e:"🏫"},
    {w:"home",m:"家",ex:"I go home.",zh:"我回家。",e:"🏡"},
    {w:"bed",m:"床",ex:"I sleep in bed.",zh:"我在床上睡觉。",e:"🛏️"},
    {w:"chair",m:"椅子",ex:"Sit on the chair.",zh:"坐在椅子上。",e:"🪑"},
    {w:"table",m:"桌子",ex:"The book is on the table.",zh:"书在桌子上。",e:"🪑"},
    {w:"door",m:"门",ex:"Open the door.",zh:"开门。",e:"🚪"},
    {w:"window",m:"窗户",ex:"Look out the window.",zh:"看窗外。",e:"🪟"},
    {w:"car",m:"汽车",ex:"The car is fast.",zh:"汽车快。",e:"🚗"},
    {w:"bus",m:"公共汽车",ex:"I take the bus.",zh:"我坐公共汽车。",e:"🚌"},
    {w:"bike",m:"自行车",ex:"I ride a bike.",zh:"我骑自行车。",e:"🚲"},
    {w:"plane",m:"飞机",ex:"The plane flies.",zh:"飞机飞。",e:"✈️"},
    {w:"park",m:"公园",ex:"I play in the park.",zh:"我在公园玩。",e:"🏞️"},
    {w:"zoo",m:"动物园",ex:"I see a panda at the zoo.",zh:"我在动物园看到熊猫。",e:"🦁"},
    {w:"rain",m:"雨",ex:"It is rain.",zh:"下雨了。",e:"🌧️"},
    {w:"snow",m:"雪",ex:"I play in the snow.",zh:"我在雪里玩。",e:"❄️"},
    {w:"wind",m:"风",ex:"The wind blows.",zh:"风吹。",e:"🌬️"},
    {w:"hat",m:"帽子",ex:"I wear a hat.",zh:"我戴帽子。",e:"🎩"},
    {w:"shoe",m:"鞋",ex:"My shoes are new.",zh:"我的鞋是新的。",e:"👟"},
    {w:"shirt",m:"衬衫",ex:"My shirt is white.",zh:"我的衬衫是白色的。",e:"👕"},
    {w:"ball",m:"球",ex:"I play with a ball.",zh:"我玩球。",e:"⚽"},
    {w:"kite",m:"风筝",ex:"I fly a kite.",zh:"我放风筝。",e:"🪁"},
    {w:"cake",m:"蛋糕",ex:"The cake is sweet.",zh:"蛋糕很甜。",e:"🍰"},
    {w:"candy",m:"糖果",ex:"I like candy.",zh:"我喜欢糖果。",e:"🍬"},
    {w:"toy",m:"玩具",ex:"It is my toy.",zh:"这是我的玩具。",e:"🧸"},
    {w:"ear",m:"耳朵",ex:"I hear with my ears.",zh:"我用耳朵听。",e:"👂"},
    {w:"eye",m:"眼睛",ex:"I see with my eyes.",zh:"我用眼睛看。",e:"👁️"},
    {w:"nose",m:"鼻子",ex:"I smell with my nose.",zh:"我用鼻子闻。",e:"👃"},
    {w:"mouth",m:"嘴巴",ex:"I eat with my mouth.",zh:"我用嘴巴吃。",e:"👄"},
    {w:"hand",m:"手",ex:"I hold with my hands.",zh:"我用手拿。",e:"✋"},
    {w:"foot",m:"脚",ex:"I walk with my feet.",zh:"我用脚走路。",e:"🦶"},
    {w:"morning",m:"早上",ex:"Good morning!",zh:"早上好！",e:"🌅"},
    {w:"afternoon",m:"下午",ex:"Good afternoon!",zh:"下午好！",e:"🌇"},
    {w:"evening",m:"晚上",ex:"Good evening!",zh:"晚上好！",e:"🌆"},
    {w:"night",m:"夜晚",ex:"Good night!",zh:"晚安！",e:"🌙"},
    {w:"today",m:"今天",ex:"Today is sunny.",zh:"今天是晴天。",e:"📅"},
    {w:"tomorrow",m:"明天",ex:"See you tomorrow.",zh:"明天见。",e:"➡️"},
    {w:"boy",m:"男孩",ex:"He is a boy.",zh:"他是一个男孩。",e:"👦"},
    {w:"girl",m:"女孩",ex:"She is a girl.",zh:"她是一个女孩。",e:"👧"},
    {w:"hello",m:"你好",ex:"Hello, my friend!",zh:"你好，我的朋友！",e:"👋"},
    {w:"thank",m:"谢谢",ex:"Thank you!",zh:"谢谢你！",e:"🙏"},
    {w:"please",m:"请",ex:"Please help me.",zh:"请帮帮我。",e:"🙏"},
    {w:"sorry",m:"对不起",ex:"I am sorry.",zh:"对不起。",e:"😔"},
    {w:"yes",m:"是",ex:"Yes, I can.",zh:"是的，我可以。",e:"✅"},
    {w:"no",m:"不",ex:"No, I can't.",zh:"不，我不能。",e:"❌"},
    {w:"goodbye",m:"再见",ex:"Goodbye!",zh:"再见！",e:"👋"},
    {w:"fine",m:"好",ex:"I am fine.",zh:"我很好。",e:"😊"},
    {w:"look",m:"看",ex:"Look at me!",zh:"看我！",e:"👀"},
    {w:"listen",m:"听",ex:"Listen to me.",zh:"听我说。",e:"👂"},
    {w:"eat",m:"吃",ex:"Eat your food.",zh:"吃你的食物。",e:"🍴"},
    {w:"drink",m:"喝",ex:"Drink water.",zh:"喝水。",e:"🥤"},
    {w:"play",m:"玩",ex:"Let's play!",zh:"我们玩吧！",e:"🎮"},
    {w:"sleep",m:"睡觉",ex:"I sleep early.",zh:"我睡得早。",e:"😴"},
    {w:"wake",m:"醒",ex:"I wake up at 7.",zh:"我7点起床。",e:"⏰"},
    {w:"wash",m:"洗",ex:"Wash your face.",zh:"洗脸。",e:"🧼"},
    {w:"love",m:"爱",ex:"I love you.",zh:"我爱你。",e:"❤️"},
    {w:"like",m:"喜欢",ex:"I like cats.",zh:"我喜欢猫。",e:"👍"},
    {w:"see",m:"看见",ex:"I can see.",zh:"我能看见。",e:"👁️"},
    {w:"go",m:"去",ex:"Let's go!",zh:"我们走吧！",e:"🚶"},
    {w:"come",m:"来",ex:"Come here!",zh:"过来！",e:"👋"},
    {w:"help",m:"帮助",ex:"Help me, please.",zh:"请帮帮我。",e:"🆘"}
  ],

  // ========== 自然拼读：字母音 ==========
  phonicsLetters: [
    {s:"a",w:"ant / apple",e:"ant"},
    {s:"e",w:"egg / elephant",e:"elephant"},
    {s:"i",w:"igloo / it",e:"🍦"},
    {s:"o",w:"orange / ox",e:"🍊"},
    {s:"u",w:"umbrella / up",e:"☂️"},
    {s:"b",w:"ball / bear",e:"🐻"},
    {s:"c",w:"cat / cup",e:"🐱"},
    {s:"d",w:"dog / desk",e:"🐶"},
    {s:"f",w:"fish / frog",e:"🐸"},
    {s:"g",w:"goat / girl",e:"🐐"},
    {s:"h",w:"hat / horse",e:"🐴"},
    {s:"j",w:"jam / jar",e:"🍯"},
    {s:"k",w:"kite / king",e:"🪁"},
    {s:"l",w:"lion / leg",e:"🦁"},
    {s:"m",w:"moon / map",e:"🌙"},
    {s:"n",w:"nest / net",e:"🪺"},
    {s:"p",w:"pig / pen",e:"🐷"},
    {s:"qu",w:"queen / quack",e:"👸"},
    {s:"r",w:"rabbit / red",e:"🐰"},
    {s:"s",w:"sun / snake",e:"🐍"},
    {s:"t",w:"tiger / ten",e:"🐯"},
    {s:"v",w:"van / vet",e:"🚐"},
    {s:"w",w:"water / web",e:"💧"},
    {s:"x",w:"x-ray / box",e:"📦"},
    {s:"y",w:"yak / yellow",e:"🐃"},
    {s:"z",w:"zebra / zip",e:"🦓"}
  ],

  // ========== CVC 拼读 ==========
  cvcWords: [
    {w:"cat",s:"c-a-t",zh:"猫"},{w:"dog",s:"d-o-g",zh:"狗"},{w:"sun",s:"s-u-n",zh:"太阳"},
    {w:"pen",s:"p-e-n",zh:"钢笔"},{w:"cup",s:"c-u-p",zh:"杯子"},{w:"bag",s:"b-a-g",zh:"包"},
    {w:"hat",s:"h-a-t",zh:"帽子"},{w:"pig",s:"p-i-g",zh:"猪"},{w:"map",s:"m-a-p",zh:"地图"},
    {w:"ten",s:"t-e-n",zh:"十"},{w:"red",s:"r-e-d",zh:"红"},{w:"box",s:"b-o-x",zh:"盒子"},
    {w:"bus",s:"b-u-s",zh:"巴士"},{w:"bed",s:"b-e-d",zh:"床"},{w:"fan",s:"f-a-n",zh:"风扇"}
  ],

  // ========== Phonics 规则 ==========
  phonicsRules: [
    {r:"sh",ex:"ship / shop / fish",zh:"发 'sh' 音"},
    {r:"ch",ex:"chair / child / lunch",zh:"发 'ch' 音"},
    {r:"th",ex:"think / three",zh:"发 'th' 音"},
    {r:"ph",ex:"phone / photo",zh:"发 'f' 音"},
    {r:"wh",ex:"what / where",zh:"发 'w' 音"},
    {r:"ck",ex:"cat / duck / rock",zh:"ck 一起发 'k'"},
    {r:"ai",ex:"rain / train",zh:"发长 a 音"},
    {r:"ee",ex:"tree / see",zh:"发长 e 音"},
    {r:"oa",ex:"boat / coat",zh:"发长 o 音"},
    {r:"oo",ex:"book / moon",zh:"短或长 u 音"}
  ],

  // ========== 短语分类 ==========
  phraseCats: [
    {cat:"日常作息",emoji:"🌅",list:[
      {en:"wake up",zh:"起床",ex:"I wake up at 7.",zh_ex:"我七点起床。"},
      {en:"get up",zh:"起床",ex:"Get up, my friend!",zh_ex:"起床啦，我的朋友！"},
      {en:"brush teeth",zh:"刷牙",ex:"I brush my teeth.",zh_ex:"我刷牙。"},
      {en:"wash face",zh:"洗脸",ex:"Wash your face.",zh_ex:"洗脸。"},
      {en:"have breakfast",zh:"吃早饭",ex:"I have breakfast.",zh_ex:"我吃早饭。"},
      {en:"have lunch",zh:"吃午饭",ex:"I have lunch at 12.",zh_ex:"我十二点吃午饭。"},
      {en:"have dinner",zh:"吃晚饭",ex:"We have dinner.",zh_ex:"我们吃晚饭。"},
      {en:"go to bed",zh:"睡觉",ex:"I go to bed.",zh_ex:"我上床睡觉。"},
      {en:"go to school",zh:"去上学",ex:"I go to school.",zh_ex:"我去上学。"},
      {en:"come home",zh:"回家",ex:"I come home.",zh_ex:"我回家。"}
    ]},
    {cat:"学校学习",emoji:"🏫",list:[
      {en:"open the book",zh:"打开书",ex:"Open the book.",zh_ex:"打开书。"},
      {en:"write a word",zh:"写单词",ex:"Write a word.",zh_ex:"写一个单词。"},
      {en:"read a story",zh:"读故事",ex:"I read a story.",zh_ex:"我读一个故事。"},
      {en:"raise your hand",zh:"举手",ex:"Raise your hand.",zh_ex:"请举手。"},
      {en:"sit down",zh:"坐下",ex:"Sit down, please.",zh_ex:"请坐。"},
      {en:"stand up",zh:"起立",ex:"Stand up!",zh_ex:"起立！"},
      {en:"do homework",zh:"做作业",ex:"I do my homework.",zh_ex:"我做作业。"},
      {en:"ask the teacher",zh:"问老师",ex:"Ask the teacher.",zh_ex:"问老师。"},
      {en:"answer the question",zh:"回答问题",ex:"Answer the question.",zh_ex:"回答问题。"},
      {en:"clean the desk",zh:"擦桌子",ex:"Clean the desk.",zh_ex:"擦桌子。"}
    ]},
    {cat:"家庭生活",emoji:"🏡",list:[
      {en:"help mom",zh:"帮妈妈",ex:"I help mom.",zh_ex:"我帮妈妈。"},
      {en:"help dad",zh:"帮爸爸",ex:"I help dad.",zh_ex:"我帮爸爸。"},
      {en:"love my family",zh:"爱家人",ex:"I love my family.",zh_ex:"我爱我的家人。"},
      {en:"watch TV",zh:"看电视",ex:"I watch TV.",zh_ex:"我看电视。"},
      {en:"read a book",zh:"看书",ex:"I read a book.",zh_ex:"我看书。"},
      {en:"play with toys",zh:"玩玩具",ex:"I play with toys.",zh_ex:"我玩玩具。"},
      {en:"make the bed",zh:"整理床铺",ex:"Make your bed.",zh_ex:"整理床铺。"},
      {en:"set the table",zh:"摆餐具",ex:"Set the table.",zh_ex:"摆好餐具。"}
    ]},
    {cat:"兴趣运动",emoji:"⚽",list:[
      {en:"play football",zh:"踢足球",ex:"I play football.",zh_ex:"我踢足球。"},
      {en:"play basketball",zh:"打篮球",ex:"He plays basketball.",zh_ex:"他打篮球。"},
      {en:"ride a bike",zh:"骑自行车",ex:"I ride a bike.",zh_ex:"我骑自行车。"},
      {en:"draw a picture",zh:"画画",ex:"I draw a picture.",zh_ex:"我画画。"},
      {en:"sing a song",zh:"唱歌",ex:"Sing a song!",zh_ex:"唱首歌！"},
      {en:"dance with me",zh:"和我跳舞",ex:"Dance with me.",zh_ex:"和我跳舞。"},
      {en:"fly a kite",zh:"放风筝",ex:"Let's fly a kite.",zh_ex:"我们放风筝吧。"},
      {en:"play the piano",zh:"弹钢琴",ex:"She plays piano.",zh_ex:"她弹钢琴。"},
      {en:"read picture book",zh:"看绘本",ex:"I read picture book.",zh_ex:"我看绘本。"},
      {en:"skate on ice",zh:"滑冰",ex:"I skate on ice.",zh_ex:"我滑冰。"}
    ]},
    {cat:"食物饮品",emoji:"🍎",list:[
      {en:"have some water",zh:"喝点水",ex:"Have some water.",zh_ex:"喝点水。"},
      {en:"drink milk",zh:"喝牛奶",ex:"I drink milk.",zh_ex:"我喝牛奶。"},
      {en:"eat an apple",zh:"吃苹果",ex:"I eat an apple.",zh_ex:"我吃苹果。"},
      {en:"taste the cake",zh:"尝蛋糕",ex:"Taste the cake.",zh_ex:"尝尝蛋糕。"},
      {en:"make a sandwich",zh:"做三明治",ex:"Mom makes a sandwich.",zh_ex:"妈妈做三明治。"},
      {en:"I am hungry",zh:"我饿了",ex:"I am hungry.",zh_ex:"我饿了。"},
      {en:"I am thirsty",zh:"我渴了",ex:"I am thirsty.",zh_ex:"我渴了。"},
      {en:"It is sweet",zh:"真甜",ex:"The apple is sweet.",zh_ex:"苹果真甜。"}
    ]},
    {cat:"方位地点",emoji:"📍",list:[
      {en:"on the desk",zh:"在桌上",ex:"The book is on the desk.",zh_ex:"书在桌上。"},
      {en:"under the chair",zh:"在椅子下",ex:"The cat is under the chair.",zh_ex:"猫在椅子下面。"},
      {en:"in the box",zh:"在盒子里",ex:"The toy is in the box.",zh_ex:"玩具在盒子里。"},
      {en:"next to the door",zh:"门旁边",ex:"Mom is next to the door.",zh_ex:"妈妈在门旁边。"},
      {en:"behind me",zh:"在我后面",ex:"You are behind me.",zh_ex:"你在我后面。"},
      {en:"in front of",zh:"在前面",ex:"I am in front of the school.",zh_ex:"我在学校前面。"},
      {en:"between A and B",zh:"在 A 和 B 之间",ex:"I sit between Tom and Bob.",zh_ex:"我坐在 Tom 和 Bob 之间。"}
    ]},
    {cat:"动作行为",emoji:"🏃",list:[
      {en:"run fast",zh:"跑得快",ex:"I run fast.",zh_ex:"我跑得快。"},
      {en:"jump high",zh:"跳得高",ex:"I jump high.",zh_ex:"我跳得高。"},
      {en:"walk slowly",zh:"慢慢走",ex:"Walk slowly.",zh_ex:"慢慢走。"},
      {en:"sit quietly",zh:"安静坐",ex:"Sit quietly.",zh_ex:"安静地坐。"},
      {en:"listen carefully",zh:"认真听",ex:"Listen carefully.",zh_ex:"认真听。"},
      {en:"speak politely",zh:"礼貌说",ex:"Speak politely.",zh_ex:"礼貌说。"},
      {en:"look at me",zh:"看着我",ex:"Look at me.",zh_ex:"看着我。"},
      {en:"open the door",zh:"开门",ex:"Open the door.",zh_ex:"开门。"},
      {en:"close the window",zh:"关窗",ex:"Close the window.",zh_ex:"关窗。"}
    ]},
    {cat:"时间天气",emoji:"☀️",list:[
      {en:"today",zh:"今天",ex:"Today is fun.",zh_ex:"今天有趣。"},
      {en:"yesterday",zh:"昨天",ex:"Yesterday was cold.",zh_ex:"昨天冷。"},
      {en:"tomorrow",zh:"明天",ex:"Tomorrow is Monday.",zh_ex:"明天是周一。"},
      {en:"morning",zh:"早晨",ex:"It is morning.",zh_ex:"现在是早晨。"},
      {en:"afternoon",zh:"下午",ex:"Good afternoon!",zh_ex:"下午好！"},
      {en:"night",zh:"夜晚",ex:"It is night.",zh_ex:"现在是夜晚。"},
      {en:"It is sunny",zh:"晴天",ex:"It is sunny.",zh_ex:"今天是晴天。"},
      {en:"It is cloudy",zh:"多云",ex:"It is cloudy.",zh_ex:"多云。"},
      {en:"It is rainy",zh:"下雨",ex:"It is rainy.",zh_ex:"下雨。"},
      {en:"It is snowy",zh:"下雪",ex:"It is snowy.",zh_ex:"下雪。"},
      {en:"It is windy",zh:"刮风",ex:"It is windy.",zh_ex:"刮风。"}
    ]},
    {cat:"情绪描述",emoji:"😊",list:[
      {en:"I am happy",zh:"我很开心",ex:"I am happy!",zh_ex:"我很开心！"},
      {en:"I am sad",zh:"我难过",ex:"I am sad.",zh_ex:"我难过。"},
      {en:"I am tired",zh:"我累了",ex:"I am tired.",zh_ex:"我累了。"},
      {en:"I am hungry",zh:"我饿了",ex:"I am hungry.",zh_ex:"我饿了。"},
      {en:"I am sleepy",zh:"我困了",ex:"I am sleepy.",zh_ex:"我困了。"},
      {en:"I am scared",zh:"我害怕",ex:"I am scared.",zh_ex:"我害怕。"},
      {en:"I am excited",zh:"我兴奋",ex:"I am excited!",zh_ex:"我很兴奋！"},
      {en:"I am angry",zh:"我生气",ex:"I am angry.",zh_ex:"我生气了。"},
      {en:"I love you",zh:"我爱你",ex:"I love you!",zh_ex:"我爱你！"},
      {en:"I miss you",zh:"我想你",ex:"I miss you.",zh_ex:"我想你。"}
    ]}
  ],

  // ========== 语法小课堂 ==========
  grammarTopics: [
    {
      title:"There be / have / has",
      intro:"表示'有'，区分用法",
      content:[
        {rule:"There is + 单数名词 (后面单数)",ex:"There is a cat on the desk.",zh:"桌子上有一只猫。"},
        {rule:"There are + 复数名词 (后面复数)",ex:"There are five cats.",zh:"有五只猫。"},
        {rule:"have/has 用于'拥有'",ex:"I have a cat. / He has a cat.",zh:"我有一只猫。/ 他有一只猫。"},
        {rule:"主语是 I/you/we/they 用 have",ex:"We have a big family.",zh:"我们有一个大家庭。"},
        {rule:"主语是 he/she/it/单数名 用 has",ex:"She has a smile.",zh:"她有一个微笑。"}
      ]
    },
    {
      title:"疑问句 How to ask questions",
      intro:"学会用疑问词提问",
      content:[
        {rule:"What — 什么",ex:"What is your name?",zh:"你叫什么名字？答: My name is ..."},
        {rule:"Where — 在哪儿",ex:"Where is the cat?",zh:"猫在哪儿？答: It is on the ..."},
        {rule:"Who — 谁",ex:"Who is she?",zh:"她是谁？答: She is my ..."},
        {rule:"When — 什么时候",ex:"When is your birthday?",zh:"你什么时候生日？答: It is in ..."},
        {rule:"Why — 为什么",ex:"Why are you sad?",zh:"你为什么难过？答: Because ..."},
        {rule:"How — 怎样",ex:"How are you?",zh:"你好吗？答: I am fine, thank you."},
        {rule:"How old — 多大",ex:"How old are you?",zh:"你几岁？答: I am 7."},
        {rule:"How many — 多少(可数)",ex:"How many apples?",zh:"多少个苹果？答: Five."},
        {rule:"Which — 哪一个",ex:"Which book do you want?",zh:"你想要哪本书？答: The red one."}
      ]
    },
    {
      title:"方位介词 Prepositions of Place",
      intro:"搭配图案，看图认方位",
      pairs:[
        {a:"on",b:"在...上面",ex:"The book is on the desk.",zh_ex:"书在桌子上。"},
        {a:"in",b:"在...里面",ex:"The cat is in the box.",zh_ex:"猫在盒子里。"},
        {a:"under",b:"在...下面",ex:"The ball is under the chair.",zh_ex:"球在椅子下面。"},
        {a:"beside",b:"在...旁边",ex:"I sit beside Mom.",zh_ex:"我坐在妈妈旁边。"},
        {a:"next to",b:"紧挨...旁边",ex:"The dog is next to the cat.",zh_ex:"狗在猫旁边。"},
        {a:"between",b:"在两者之间",ex:"I am between Tom and Ann.",zh_ex:"我在 Tom 和 Ann 之间。"},
        {a:"behind",b:"在...后面",ex:"The ball is behind the door.",zh_ex:"球在门后面。"},
        {a:"in front of",b:"在...前面",ex:"I am in front of you.",zh_ex:"我在你前面。"},
        {a:"above",b:"在...上方",ex:"The lamp is above the bed.",zh_ex:"灯在床上方。"},
        {a:"below",b:"在...下方",ex:"The fish is below the water.",zh_ex:"鱼在水面下。"}
      ]
    },
    {
      title:"代词大全 Pronouns",
      intro:"人称代词 + 物主代词 + 指示代词",
      content:[
        {rule:"人称代词 主格",ex:"I我 / you你 / he他 / she她 / it它 / we我们 / you你们 / they他们",zh:"用于作主语"},
        {rule:"人称代词 宾格",ex:"me我 / you你 / him他 / her她 / it它 / us我们 / them他们",zh:"用于作宾语"},
        {rule:"形容词性物主代词",ex:"my我的 / your你的 / his他的 / her她的 / its它的 / our我们的 / their他们的",zh:"后面接名词"},
        {rule:"名词性物主代词",ex:"mine我的 / yours你的 / his他的 / hers她的 / ours我们的 / theirs他们的",zh:"单独使用"},
        {rule:"指示代词 this/that",ex:"this 这(近) / that 那(远)",zh:"指示事物"},
        {rule:"指示代词 these/those",ex:"these 这些(近) / those 那些(远)",zh:"指示复数"}
      ]
    },
    {
      title:"动词学习 Verbs",
      intro:"动词搭配与时态",
      content:[
        {rule:"一般现在时 (每天做)",ex:"I play football every day.",zh:"我每天踢足球。"},
        {rule:"现在进行时 (正在做)",ex:"I am playing football now.",zh:"我正在踢足球。"},
        {rule:"一般过去时 (过去做)",ex:"I played football yesterday.",zh:"我昨天踢了足球。"},
        {rule:"一般将来时 (将来做)",ex:"I will play football tomorrow.",zh:"我明天要踢足球。"},
        {rule:"情态动词 can",ex:"I can run fast.",zh:"我能跑得很快。"},
        {rule:"动词搭配 play",ex:"play + 球类/游戏",zh:"我打篮球。"},
        {rule:"动词搭配 have",ex:"have lunch / have a class",zh:"吃午饭 / 上一节课"},
        {rule:"动词搭配 do",ex:"do homework / do sports",zh:"做作业 / 做运动"}
      ]
    },
    {
      title:"一年级必学句型",
      intro:"一年级课本的核心句型",
      content:[
        {rule:"打招呼",ex:"Hello! / Hi!",zh:"你好！"},
        {rule:"介绍自己",ex:"I am Tom. I am 7.",zh:"我叫 Tom，我七岁。"},
        {rule:"介绍物品",ex:"This is my book.",zh:"这是我的书。"},
        {rule:"表达喜欢",ex:"I like apples.",zh:"我喜欢苹果。"},
        {rule:"表达位置",ex:"It is on the desk.",zh:"它在桌子上。"},
        {rule:"表达时间",ex:"It is 7 o'clock.",zh:"现在是7点。"},
        {rule:"表达天气",ex:"It is sunny.",zh:"今天是晴天。"},
        {rule:"请求帮助",ex:"Can you help me?",zh:"你能帮我吗？"},
        {rule:"感谢与道歉",ex:"Thank you. / Sorry.",zh:"谢谢。/ 对不起。"},
        {rule:"表达数量",ex:"I have five apples.",zh:"我有五个苹果。"}
      ]
    }
  ],

  // ========== 一年级必学 100 词 ==========
  g1Words: [
    "a","an","and","are","at","be","big","blue","book","boy","but","by","can","cat","come","dad","day","do","dog","down",
    "eat","eye","face","family","father","fish","five","for","four","friend","fun","game","get","girl","give","go","good","green","happy","has",
    "have","he","head","hello","help","her","here","hi","him","his","home","house","how","I","in","is","it","its","jump","just",
    "kid","know","like","little","look","love","make","me","mom","my","name","new","nice","no","not","of","oh","old","on","one",
    "or","our","out","park","pen","pencil","pink","play","please","pretty","red","ride","run","sad","say","school","see","she","sing","sister",
    "six","sleep","small","so","some","stop","sun","ten","thank","that","the","their","them","they","this","three","time","to","today","too",
    "toy","two","up","us","use","very","want","we","what","when","where","white","who","why","will","with","work","year","yes","you"
  ],

  // ========== 英文绘本 (Storybooks) ==========
  enBooks: [
    {title:"The Very Hungry Caterpillar",cover:"🐛",desc:"一条毛毛虫的成长",sentences:["In the light of the moon a little egg lay on a leaf.","One Sunday morning the warm sun came up.","A tiny and very hungry caterpillar came out.","He started to look for some food.","He ate through lots of food.","He built a small house called a cocoon.","He stayed inside for more than two weeks.","Then he nibbled a hole in the cocoon.","He pushed his way out and … he was a beautiful butterfly!"]},
    {title:"Brown Bear, Brown Bear",cover:"🐻",desc:"棕熊棕熊你看见了什么",sentences:["Brown bear, brown bear, what do you see?","I see a red bird looking at me.","Red bird, red bird, what do you see?","I see a yellow duck looking at me."]},
    {title:"Goodnight Moon",cover:"🌙",desc:"晚安，月亮",sentences:["In the great green room, there was a telephone.","And a red balloon.","And a picture of — a cow jumping over the moon.","Goodnight room.","Goodnight moon.","Goodnight nobody.","Goodnight mush."]},
    {title:"The Cat in the Hat",cover:"🎩",desc:"戴帽子的猫",sentences:["The sun did not shine.","It was too wet to play.","So we sat in the house.","All that cold, cold, wet day.","Then I saw the Cat in the Hat."]},
    {title:"Where the Wild Things Are",cover:"🐺",desc:"野兽出没的地方",sentences:["One night Max wore his wolf suit.","He made mischief of one kind and another.","'We'll eat you up!' they said.","But Max said 'No!'","And he sailed back over the year, in and out of weeks."]},
    {title:"The Snowy Day",cover:"☃️",desc:"下雪天",sentences:["One winter morning Peter woke up and looked out the window.","Snow had fallen during the night.","It covered everything white.","He put on his snowsuit and went outside.","Peter was glad."]},
    {title:"Pancakes",cover:"🥞",desc:"煎饼",sentences:["Today is Saturday.","Mom is making pancakes.","I help pour the milk.","I help mix the batter."]},
    {title:"My Lucky Day",cover:"🍀",desc:"幸运的一天",sentences:["A little pig walks to the market.","A wolf meets him.","The pig says he is dirty."]},
    {title:"Guess How Much I Love You",cover:"🐰",desc:"猜猜我有多爱你",sentences:["Little Nutbrown Hare said: 'I love you right up to the moon.'","'Oh,' said Big Nutbrown Hare, 'that is very far.'"]},
    {title:"I Went Walking",cover:"🚶",desc:"我去散步",sentences:["I went walking.","What did I see?","I saw a black cat looking at me."]},
    {title:"The Little Mouse",cover:"🐭",desc:"小老鼠找狮子",sentences:["The little mouse is looking for the big lion."]},
    {title:"Big and Small",cover:"🐘",desc:"大和小",sentences:["Some animals are big.","Some animals are small.","Some are in between."]},
    {title:"Colors of the Rainbow",cover:"🌈",desc:"彩虹的颜色",sentences:["Red and orange.","Yellow and green.","Blue and purple.","What a rainbow!"]},
    {title:"My Family",cover:"👨‍👩‍👧",desc:"我的家人",sentences:["This is my family.","I love Mom and Dad.","I love Grandma and Grandpa."]},
    {title:"The Seasons",cover:"🌸",desc:"四季",sentences:["In spring, flowers bloom.","In summer, we swim.","In autumn, leaves fall.","In winter, snow comes."]},
    {title:"My Day",cover:"🌅",desc:"我的一天",sentences:["In the morning, I wake up.","At noon, I have lunch.","At night, I go to bed."]},
    {title:"At the Zoo",cover:"🦁",desc:"在动物园",sentences:["I see a lion.","I see a monkey.","I see an elephant."]},
    {title:"Birds and Bees",cover:"🐝",desc:"小鸟与蜜蜂",sentences:["Birds can fly in the sky.","Bees can fly too.","Look up!"]},
    {title:"The Shapes",cover:"🔺",desc:"形状",sentences:["A circle is round.","A square has four sides.","A triangle has three corners."]},
    {title:"My Birthday",cover:"🎂",desc:"我的生日",sentences:["Today is my birthday.","I have a cake.","I have a present.","I am happy."]},
    {title:"On the Farm",cover:"🐄",desc:"在农场",sentences:["There is a cow on the farm.","There are chickens on the farm.","There are horses too."]},
    {title:"Going to School",cover:"🏫",desc:"去上学",sentences:["I get up early.","I take my school bag.","I go to school."]},
    {title:"The Ocean",cover:"🌊",desc:"大海",sentences:["The ocean is big.","There is a whale in the ocean.","There are fish in the ocean."]},
    {title:"My Pet",cover:"🐶",desc:"我的宠物",sentences:["I have a dog.","I feed him every day.","He is my best friend."]},
    {title:"The Moon and Stars",cover:"🌌",desc:"月亮和星星",sentences:["The moon is round.","The stars are bright.","I wish upon a star."]},
    {title:"My Toys",cover:"🧸",desc:"我的玩具",sentences:["I have a bear.","I have a ball.","I have a car."]},
    {title:"Fruits I Like",cover:"🍓",desc:"我喜欢的水果",sentences:["I like apples.","I like bananas.","I like strawberries."]},
    {title:"Feelings",cover:"😊",desc:"感受",sentences:["Sometimes I feel happy.","Sometimes I feel sad.","That is OK."]},
    {title:"My Body",cover:"👤",desc:"我的身体",sentences:["I have ten fingers.","I have ten toes.","I have two eyes."]},
    {title:"Good Friends",cover:"🤝",desc:"好朋友",sentences:["A friend helps you.","A friend shares with you.","A friend loves you."]}
  ]

};

// 工具函数：基于日期的种子随机数
window.HY_DATA.dailySeed = function(){
  const d = new Date();
  return parseInt(`${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}`, 10);
};
window.HY_DATA.todayIndex = function(list, slot=0){
  const seed = window.HY_DATA.dailySeed();
  const n = list.length;
  return (seed + slot) % n;
};
window.HY_DATA.dailyPick = function(list, count, slot=0){
  // 每次取 count 个不重复；连续日次偏移，不重复
  const seed = window.HY_DATA.dailySeed() + slot;
  const n = list.length;
  const order = [];
  for(let i=0;i<n;i++) order.push(i);
  // Fisher-Yales with stable seed
  let s = seed;
  for(let i=n-1;i>0;i--){
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i+1));
    [order[i],order[j]] = [order[j],order[i]];
  }
  return order.slice(0, count).map(i => list[i]);
};
