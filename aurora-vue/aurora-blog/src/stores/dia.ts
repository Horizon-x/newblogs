import { defineStore } from 'pinia'
import { AuroraDia, DiaConfig } from '@/utils/aurora-dia'

export const useDiaStore = defineStore('diaStore', {
  state: () => {
    return {
      dia: new AuroraDia(),
      aurora_bot: {
        enable: true,
        locale: 'en',
        bot_type: 'dia',
        tips: {
          messages: [
            '你好，我是 <span>Dia</span>，好高兴遇见你～',
            '好久不见，日子过得好快呢……',
            '<span>大坏蛋！</span>你都多久没理人家了呀，嘤嘤嘤～',
            '嗨～快来逗我玩吧！',
            '拿小拳拳锤你胸口！',
            '学习使我们快乐，快乐使我们更想学习～',
            '你知道吗？你可以<span>点击我</span>返回页面顶部哦！～',
            'showQuote'
          ],
          console: '哈哈，你打开了控制台，是想要看看我的小秘密吗？',
          copy: '你都复制了些什么呀，转载要记得加上出处哦！',
          visibility_change: '老朋友，你怎么才回来呀～',
          welcome: {
            '24': '你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？',
            '5_7': '早上好！一日之计在于晨，美好的一天就要开始了。',
            '7_11': '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！',
            '11_13': '中午了，工作了一个上午，现在是午餐时间！',
            '13_17': '午后很容易犯困呢，今天的运动目标完成了吗？',
            '17_19': '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红～',
            '19_21': '晚上好，今天过得怎么样？',
            '21_23': ['已经这么晚了呀，早点休息吧，晚安～', '深夜时要爱护眼睛呀！']
          },
          referrer: {
            self: '欢迎来到<span>「[PLACEHOLDER]」</span>',
            baidu: 'Hello！来自 百度搜索 的朋友<br>你是搜索 <span>「[PLACEHOLDER]」</span> 找到的我吗？',
            so: 'Hello！来自 360搜索 的朋友<br>你是搜索 <span>「[PLACEHOLDER]」</span> 找到的我吗？',
            google: 'Hello！来自 谷歌搜索 的朋友<br>欢迎阅读<span>「[PLACEHOLDER]」</span>',
            site: 'Hello！来自 <span>[PLACEHOLDER]</span> 的朋友',
            other: '感谢您阅读： <span>「[PLACEHOLDER]」</span>'
          },
          mouseover: [
            {
              selector: '#Aurora-Dia',
              text: [
                '哇啊啊啊啊啊啊... <span>你想干嘛</span>? O.O',
                '请您轻一点，我是<span>很昂贵</span>的机器人哦! O.O',
                '<span>领导，我在呢!</span> 我有什么可以帮到你呢? O.O'
              ]
            },
            {
              selector: "[data-menu='Home']",
              text: [
                '点击前往首页，想回到上一页可以使用浏览器的后退功能哦。',
                '点它就可以回到首页啦！',
                '回首页看看吧。'
              ]
            },
            {
              selector: "[data-menu='About']",
              text: ['你想知道我家主人是谁吗？', '这里有一些关于我家主人的秘密哦，要不要看看呢？', '发现主人出没地点！']
            },
            {
              selector: "[data-menu='Archives']",
              text: ['这里存储了主人的所有作品哦！', '想看看主人的图书馆吗？']
            },
            {
              selector: "[data-menu='Tags']",
              text: ['点击就可以看文章的标签啦！', '使用标签可以更好的分类你的文章哦～']
            },
            {
              selector: "[data-dia='language']",
              text: '主人的博客支持多种语言。'
            },
            {
              selector: "[data-dia='light-switch']",
              text: '您可以点击这里切换黑白模式哦！'
            },
            {
              selector: "[data-dia='author']",
              text: ['这是我主人的简介。', '点击其中任何一个链接都可以传送到我主人的其他世界。']
            },
            {
              selector: "[data-dia='jump-to-comment']",
              text: ['你想看看评论吗?', '点击这里可以帮助你直接跳转到评论部分。']
            }
          ],
          click: [
            {
              selector: "[data-dia='search']",
              text: ['没有看到你想要的文章，那么就输入你想搜索的关键词吧～', '可以使用 ctrl/cmd + k 快捷键打开搜索哦～']
            },
            {
              selector: "[data-dia='article-link']",
              text: [
                '希望你会喜欢这篇文章：<span>「{text}」</span>.',
                '您的选择真的不错哦！好好享受这篇文章吧～',
                '希望您能从 <span>「{text}」</span>这篇文章中学到点东西。'
              ]
            },
            {
              selector: '.gt-header-textarea',
              text: [
                '要吐槽些什么呢？',
                '一定要认真填写喵～',
                '有什么想说的吗？',
                '如果觉得文章不错的话，就给博主留个言吧～'
              ]
            },
            {
              selector: '.veditor',
              text: [
                '要吐槽些什么呢？',
                '一定要认真填写喵～',
                '有什么想说的吗？',
                '如果觉得文章不错的话，就给博主留个言吧～'
              ]
            }
          ],
          events: [
            {
              date: '01/01',
              text: '<span>元旦</span>了呢，新的一年又开始了，今年是{year}年～'
            },
            {
              date: '02/14',
              text: '又是一年<span>情人节</span>，{year}年找到对象了嘛～'
            },
            {
              date: '03/08',
              text: '今天是<span>国际妇女节</span>！'
            },
            {
              date: '03/12',
              text: '今天是<span>植树节</span>，要保护环境呀！'
            },
            {
              date: '04/01',
              text: '悄悄告诉你一个秘密～<span>今天是愚人节，不要被骗了哦～</span>'
            },
            {
              date: '05/01',
              text: '今天是<span>五一劳动节</span>，计划好假期去哪里了吗～'
            },
            {
              date: '06/01',
              text: '<span>儿童节</span>了呢，快活的时光总是短暂，要是永远长不大该多好啊…'
            },
            {
              date: '09/03',
              text: '<span>中国人民抗日战争胜利纪念日</span>，铭记历史、缅怀先烈、珍爱和平、开创未来。'
            },
            {
              date: '09/10',
              text: '<span>教师节</span>，在学校要给老师问声好呀～'
            },
            {
              date: '10/01',
              text: '<span>国庆节</span>到了，为祖国母亲庆生！'
            },
            {
              date: '11/05-11/12',
              text: '今年的<span>双十一</span>是和谁一起过的呢～'
            },
            {
              date: '12/20-12/31',
              text: '这几天是<span>圣诞节</span>，主人肯定又去剁手买买买了～'
            }
          ]
        }
      }
    }
  },
  actions: {
    initializeBot(configs: DiaConfig): void {
      this.dia.installSoftware(configs)
      this.dia.on()
    }
  }
})
