/*
 * @Author: ZhuQiMing
 * @CreateTime: 2019/10/14 14:24
 */
let position = [{
    label: '职能支持',
    value: 'znzc',
    children: [
        {
            label: '市场',
            value: 'sc',
            children: [
                { label: '营销推广', value: 'yingxiaotg' },
                { label: '品牌公关', value: 'pinpaigg' },
                { label: '商务合作', value: 'shangwuhz' },
                { label: '销售代表', value: 'xiaosoudb' },
                { label: '市场调研', value: 'diaoyandy' }]
        }, {
            label: '财务',
            value: 'cw',
            children: [
                { label: '财务', value: 'caiwu' },
                { label: '会计', value: 'kuaiji' },
                { label: '审计', value: 'shenji' },
                { label: '出纳', value: 'chuna' },
                { label: '税务', value: 'shuiwu' },
                { label: '统计', value: 'tongji' },
                { label: '成本管理', value: 'chengben' },
                { label: '资产管理', value: 'zichan' }]
        }, {
            label: '法务',
            value: 'fw',
            children: [
                { label: '法务', value: 'fawu' },
                { label: '律师', value: 'lvshi' },
                { label: '合规', value: 'hegui' },
                { label: '知识产权', value: 'zhishicq' },
                { label: '法律顾问', value: 'falvgw' }]
        }, {
            label: '人事',
            value: 'rs',
            children: [
                { label: '人力资源', value: 'renli' },
                { label: 'HRBP', value: 'hrbp' },
                { label: '猎头', value: 'lietou' },
                { label: '薪酬福利', value: 'xinchou' },
                { label: '绩效考核', value: 'jixiao' },
                { label: '企业文化', value: 'wenhua' },
                { label: '招聘', value: 'zhaopin' },
                { label: '培训', value: 'peixun' }]
        }, {
            label: '行政',
            value: 'xz',
            children: [
                { label: '行政', value: 'xingzheng' },
                { label: '前台', value: 'qiantai' },
                { label: '秘书', value: 'mishu' },
                { label: '文员', value: 'wenyuan' },
                { label: '总助', value: 'zongzhu' },
                { label: '总机', value: 'zongji' }]
        }]
}, {
    label: '互联网通信',
    value: 'hlwtx',
    children: [
        {
            label: '技术',
            value: 'js',
            children: [
                { label: '前端开发', value: 'qianduan' },
                { label: '后端开发', value: 'houduan' },
                { label: '移动开发', value: 'yidong' },
                { label: '测试', value: 'ceshi' },
                { label: '运维', value: 'yunwei' },
                { label: 'DBA', value: 'dba' },
                { label: '硬件开发', value: 'yingjian' },
                { label: '项目管理', value: 'xiangmugl21' },
                { label: '网络运输', value: 'wangluo' }]
        }, {
            label: '产品',
            value: 'chanpin',
            children: [
                { label: '产品经理', value: 'chanpingjl22' },
                { label: '产品策划', value: 'chanpinch' },
                { label: '游戏策划', value: 'youxich' },
                { label: '产品助理', value: 'chanpinzl' }]
        }, {
            label: '设计',
            value: 'sheji',
            children: [
                { label: 'UI交互设计', value: 'ui' },
                { label: '平面设计', value: 'pingmiansj' },
                { label: '网页设计', value: 'wangyesj' },
                { label: '动画人物设计', value: 'donghuarw' },
                { label: '游戏原画', value: 'youxiyh' },
                { label: '游戏场景', value: 'youxicj' },
                { label: '游戏特效设计', value: 'youxitx' }]
        }, {
            label: '运营编辑',
            value: 'yy',
            children: [
                { label: '产品运营', value: 'chanpinyy' },
                { label: '新媒体运营', value: 'xinmeitiyy' },
                { label: '游戏运营', value: 'youxiyy' },
                { label: '用户运营', value: 'yonghuyy' },
                { label: '活动运营', value: 'huodongyy' },
                { label: '社区运营', value: 'shequyy' },
                { label: '内容运营', value: 'neirongyy' },
                { label: '客服', value: 'kefu' }]
        }]
}, {
    label: '金融投资',
    value: 'jrtz',
    children: [
        {
            label: '银行',
            value: 'yh',
            children: [
                { label: '客户经理', value: 'kehujl31' },
                { label: '大堂经理', value: 'datangjl31' },
                { label: '银行柜员', value: 'guiyuan' },
                { label: '支行行长', value: 'zhihanghz' },
                { label: '风险控制', value: 'fengxiankz31' }]
        }, {
            label: '证券基金',
            value: 'zqjj',
            children: [
                { label: '交易员', value: 'jiaoyi' },
                { label: '投资顾问', value: 'touzigw' },
                { label: '客户经理', value: 'kehujl32' },
                { label: '基金经理', value: 'jijinjl' },
                { label: '证券分析', value: 'zhengquanfx' },
                { label: '风险控制', value: 'fengxiankz32' },
                { label: '债券发行', value: 'zhaiquanfx' },
                { label: '基金会计', value: 'jijinkj' },
                { label: '行业研究', value: 'hangyeyj' }]
        }, {
            label: '保险',
            value: 'bx',
            children: [
                { label: '销售代表', value: 'xiaoshoudb33' },
                { label: '综合柜员', value: 'zonghegy' },
                { label: '培训讲师', value: 'peixunjs33' },
                { label: '业务员', value: 'yewu' },
                { label: '理财规划', value: 'licaigh' },
                { label: '风险控制', value: 'fengxiankz33' },
                { label: '产品研发', value: 'chanpinyf' }]
        }, {
            label: '信托期货',
            value: 'xtqh',
            children: [
                { label: '客户经理', value: 'kehujl34' },
                { label: '信托经理', value: 'xintuojl' },
                { label: '产品经理', value: 'chanpinjl34' },
                { label: '资产管理', value: 'zichangl34' },
                { label: '资产证券化', value: 'zichanzqh' },
                { label: '风险控制', value: 'fengxiankz34' },
                { label: '期货经纪人', value: 'qihuojjr' }]
        }]
}, {
    label: '房地产建筑',
    value: 'fdcjz',
    children: [
        {
            label: '房地产',
            value: 'fdc',
            children: [
                { label: '投资分析', value: 'touzifx41' },
                { label: '项目策划', value: 'xiangmuch' },
                { label: '项目管理', value: 'xiangmugl41' },
                { label: '项目招投标', value: 'xiangmuztb' },
                { label: '资产管理', value: 'zichangl41' },
                { label: '合同管理', value: 'hetonggl' },
                { label: '房产中介', value: 'fangchanzj' },
                { label: '房产经纪人', value: 'fangchanjjr' }]
        }, {
            label: '土建',
            value: 'tj',
            children: [
                { label: '建筑工程师', value: 'jianzhugc' },
                { label: '工程造价', value: 'gongchengzj' },
                { label: '给排水工程师', value: 'geipaishui' },
                { label: '测绘工程师', value: 'cehuigc42' },
                { label: '水电工程师', value: 'shuidian' },
                { label: '工程监理', value: 'jianli' },
                { label: '现场管理', value: 'xianchang' }]
        }, {
            label: '物业',
            value: 'wy',
            children: [
                { label: '物业管理', value: 'wuyegl' },
                { label: '设施管理', value: 'sheshigl' },
                { label: '物业招商', value: 'wuyezs' },
                { label: '客服顾问', value: 'kefugw' },
                { label: '物业维修', value: 'wuyewx' },
                { label: '机电维修', value: 'jidianwx' },
                { label: '保洁', value: 'baojie' },
                { label: '绿化', value: 'lvhua' },
                { label: '保安', value: 'baoan' }]
        }, {
            label: '设计',
            value: 'sj4',
            children: [
                { label: '室内设计', value: 'shineisj' },
                { label: '景观设计', value: 'jingguansj' },
                { label: '结构设计', value: 'jiegousj' },
                { label: '软装设计', value: 'ruanzhuang' },
                { label: '硬装设计', value: 'yingzhuang' },
                { label: '幕墙设计', value: 'muqiang' },
                { label: '城市规划', value: 'chengshigh' }]
        }, {
            label: '家装',
            value: 'jz',
            children: [
                { label: '工长', value: 'gongzhang' },
                { label: '木工', value: 'mugong' },
                { label: '泥瓦工', value: 'niwa' },
                { label: '油漆工', value: 'youqi' },
                { label: '水电工', value: 'shuidiang' },
                { label: '安装施工', value: 'anzhang' }]
        }]
}, {
    label: '休闲服务',
    value: 'xxfw',
    children: [
        {
            label: '旅游',
            value: 'ly',
            children: [
                { label: '导游', value: 'daoyou' },
                { label: '旅游顾问', value: 'lvyougw' },
                { label: '线路策划', value: 'xianluch' },
                { label: '计调', value: 'jidiao' },
                { label: '领队', value: 'lingdui' },
                { label: '票务', value: 'piaowu' },
                { label: '会展策划', value: 'huizhan' }]
        }, {
            label: '酒店',
            value: 'jd',
            children: [
                { label: '大堂经理', value: 'datangjl5' },
                { label: '礼宾', value: 'libin' },
                { label: '总机', value: 'zongji5' },
                { label: '商务中心', value: 'shangwuzx' },
                { label: '行李员', value: 'xingli' },
                { label: '客房服务', value: 'kefangfw' },
                { label: '餐厅服务', value: 'cantingfw' },
                { label: '厨师', value: 'chushi' }]
        }, {
            label: '餐饮',
            value: 'cy',
            children: [
                { label: '西餐厨师', value: 'xican' },
                { label: '中餐厨师', value: 'zhongcan' },
                { label: '面点师', value: 'miandian' },
                { label: '调酒师', value: 'tiaojiu' },
                { label: '咖啡师', value: 'kafei' },
                { label: '服务员', value: 'fuwu' },
                { label: '传菜员', value: 'chuancai' }]
        }, {
            label: '美容',
            value: 'mr',
            children: [
                { label: '美容师', value: 'meirong' },
                { label: '发型师', value: 'faxing' },
                { label: '美甲师', value: 'meijia' },
                { label: '化妆师', value: 'huazhuang' },
                { label: '美体师', value: 'meiti' },
                { label: '美发培训', value: 'meifapx' },
                { label: '美容整形', value: 'meirongzx' }]
        }, {
            label: '体育保健',
            value: 'tybj',
            children: [
                { label: '健身教练', value: 'jianshenjl' },
                { label: '健身顾问', value: 'jianshengw' },
                { label: '按摩师', value: 'anmo' },
                { label: '足疗师', value: 'zuliao' },
                { label: '体育教练', value: 'tiyujl' },
                { label: '赛事策划', value: 'saishich' },
                { label: '体育馆管理', value: 'tiyuguan' },
                { label: '运动员', value: 'yundong' }]
        }, {
            label: '生活',
            value: 'sh',
            children: [
                { label: '家政', value: 'jiazheng' },
                { label: '保姆', value: 'baomu' },
                { label: '月嫂', value: 'yuesao' },
                { label: '钟点工', value: 'zhongdian' },
                { label: '家电维修', value: 'jiadianwx' },
                { label: '婚礼策划', value: 'hunlich' },
                { label: '宠物美容', value: 'chongwumr' },
                { label: '摄影师', value: 'sheying' }]
        }]
}, {
    label: '教育培训',
    value: 'jypx',
    children: [
        {
            label: '教育',
            value: 'jy',
            children: [
                { label: '舞蹈老师', value: 'wudaols' },
                { label: '英语老师', value: 'yingyuls' },
                { label: '音乐老师', value: 'yinyuels' },
                { label: '语文老师', value: 'yuwenls' },
                { label: '化学老师', value: 'huaxuels' },
                { label: '数学老师', value: 'shuxuels' },
                { label: '物理老师', value: 'wulils' },
                { label: '政治老师', value: 'zhengzhils' },
                { label: '历史老师', value: 'lishils' },
                { label: '幼师', value: 'youshi' },
                { label: '家教', value: 'jiajiao' }]
        }, {
            label: '培训',
            value: 'px',
            children: [
                { label: '培训讲师', value: 'peixunjs' },
                { label: '教务助理', value: 'jiaowuzl' },
                { label: '课程顾问', value: 'kechenggw' },
                { label: '课程设计', value: 'kechengsj' }]
        }, {
            label: '咨询',
            value: 'zx',
            children: [
                { label: '法律咨询', value: 'falvzx' },
                { label: '翻译咨询', value: 'fanyi' },
                { label: '心理咨询', value: 'xinlizx' },
                { label: '财务咨询', value: 'caiwuzx' },
                { label: '调研员', value: 'diaoyan' }]
        }]
}, {
    label: '广告传媒',
    value: 'ggcm',
    children: [
        {
            label: '广告',
            value: 'gg',
            children: [
                { label: '广告销售', value: 'guanggaoxs' },
                { label: '广告优化', value: 'guanggaoyh' },
                { label: '广告设计', value: 'guanggaosj' },
                { label: '文案策划', value: 'wenanch' },
                { label: '广告执行', value: 'guanggaozx' }]
        }, {
            label: '影视',
            value: 'ys1',
            children: [
                { label: '导演', value: 'daoyan' },
                { label: '编导', value: 'biandao' },
                { label: '导演助理', value: 'daoyanzl' },
                { label: '影视制作', value: 'yingshizz' },
                { label: '艺术指导', value: 'yishuzd' },
                { label: '摄像师', value: 'shexiang' },
                { label: '后期制作', value: 'houqizz' },
                { label: '音效师', value: 'yinxiao' },
                { label: '配音员', value: 'peiyin' },
                { label: '灯光师', value: 'dengguang' }]
        }, {
            label: '媒体',
            value: 'mt',
            children: [
                { label: '主编', value: 'zhubian' },
                { label: '编辑', value: 'bianji' },
                { label: '记者', value: 'jizhe' },
                { label: '美术编辑', value: 'meishubj' },
                { label: '排版设计', value: 'paiban' },
                { label: '出版', value: 'chuban' }]
        }, {
            label: '娱乐',
            value: 'yule',
            children: [
                { label: '经纪人', value: 'jingjiren' },
                { label: '练习生', value: 'lianxi' },
                { label: '主持人', value: 'zhuchi' },
                { label: '模特', value: 'mote' },
                { label: '演员', value: 'yanyuan' },
                { label: '歌手', value: 'geshou' }]
        }]
}, {
    label: '医疗制药',
    value: 'ylzy',
    children: [
        {
            label: '医疗服务',
            value: 'ylfw',
            children: [
                { label: '外科医生', value: 'waike' },
                { label: '内科医生', value: 'neike' },
                { label: '放射科医生', value: 'fangshe' },
                { label: '麻醉医生', value: 'mazui' },
                { label: '护士', value: 'hushi' },
                { label: '理疗师', value: 'liliao' },
                { label: '中医', value: 'zhongyi' },
                { label: '心理医生', value: 'xinliys' },
                { label: '检验师', value: 'jianyan' },
                { label: '药剂师', value: 'yaoji' },
                { label: '兽医', value: 'shouyi' }]
        }, {
            label: '医疗器械',
            value: 'yiliaoqx',
            children: [
                { label: '器械销售', value: 'qixiexs' },
                { label: '质量管理', value: 'zhilianggl' },
                { label: '器械采购', value: 'qixiecg' },
                { label: '器械研发', value: 'qixieyf' },
                { label: '供应链', value: 'gongyingl82' },
                { label: '器械维修', value: 'qixiewx' }]
        }, {
            label: '制药',
            value: 'zhiyao',
            children: [
                { label: '药品研发', value: 'yaopinyf' },
                { label: '化学分析', value: 'huaxuefx' },
                { label: '药品注册', value: 'yaopinzc' },
                { label: '产品经理', value: 'chanpjl83' },
                { label: '医药代表', value: 'yiyaodb' },
                { label: '医药招商', value: 'yiyaozs' }]
        }]
}, {
    label: '消费运输',
    value: 'xfys',
    children: [
        {
            label: '消费品',
            value: 'xfp',
            children: [
                { label: '研发', value: 'yanfa' },
                { label: '产品', value: 'chanpin9' },
                { label: '生产', value: 'shengchan' },
                { label: '品牌', value: 'pinpai' },
                { label: '采购', value: 'caigou' },
                { label: '供应链', value: 'gongyingl91' },
                { label: '质检', value: 'zhijian' }]
        }, {
            label: '贸易',
            value: 'my',
            children: [
                { label: '跟单', value: 'gendan' },
                { label: '买手', value: 'maishou' },
                { label: '采购', value: 'caigou92' }]
        }, {
            label: '交通运输',
            value: 'ys2',
            children: [
                { label: '铁路乘务员', value: 'tielucwy' },
                { label: '列车长', value: 'lieche' },
                { label: '公交司机', value: 'gongjiao' },
                { label: '的士司机', value: 'dishi' },
                { label: '飞行员', value: 'feixing' },
                { label: '空乘', value: 'kongcheng' },
                { label: '地勤', value: 'diqin' },
                { label: '船长', value: 'chuanzhang' },
                { label: '水手', value: 'shuishou' },
                { label: '安检', value: 'anjian' },
                { label: '调度员', value: 'diaodu' },
                { label: '海关事务', value: 'haiguan' }]
        }, {
            label: '物流仓储',
            value: 'wl',
            children: [
                { label: '快递', value: 'kuaidi' },
                { label: '邮递', value: 'youdi' },
                { label: '理货', value: 'lihuo' },
                { label: '仓库管理', value: 'cangkugl' },
                { label: '订单处理', value: 'dingdan' },
                { label: '集装箱业务', value: 'jizhuangx' },
                { label: '物流管理', value: 'wuliugl' },
                { label: '货运代理', value: 'huoyundl' }]
        }]
}, {
    label: '制造能源',
    value: 'zhizaony',
    children: [
        {
            label: '汽车制造',
            value: 'qczz',
            children: [
                { label: '机械设计', value: 'jixiesj' },
                { label: '动力系统工程师', value: 'donglixt' },
                { label: '底盘工程师', value: 'dipan' },
                { label: '总装工艺工程师', value: 'zongzhuangy' },
                { label: '项目管理', value: 'xiangmugl101' },
                { label: '二手车评估师', value: 'qichepg' },
                { label: '汽车销售', value: 'qichexs' },
                { label: '汽车美容', value: 'qichemr' }]
        }, {
            label: '机械制造',
            value: 'jxzz',
            children: [
                { label: '机械工程师', value: 'jixiegc' },
                { label: '自动化工程师', value: 'zidonghua' },
                { label: '机电工程师', value: 'jidiangc' },
                { label: '结构工程师', value: 'jiegougc' },
                { label: '焊接工艺工程师', value: 'hanjiegy' },
                { label: '液压工程师', value: 'yeyagc' },
                { label: '模具设计工程', value: 'mujusj' }]
        }, {
            label: '能源',
            value: 'ny',
            children: [
                { label: '燃气技术', value: 'ranqijs' },
                { label: '热能工程师', value: 'renenggc' },
                { label: '电力工程师', value: 'dianligc' },
                { label: '管道设计', value: 'guandaosj' },
                { label: '自控工程师', value: 'zikonggc' },
                { label: '水利工程师', value: 'shuiligc' },
                { label: '测绘工程师', value: 'cehuigc103' },
                { label: '地质工程师', value: 'dizhigc' },
                { label: '钻井工程师', value: 'zuanjing' },
                { label: '地质勘查', value: 'dizhikc' },
                { label: '采矿', value: 'caikuang' }]
        }, {
            label: '化工',
            value: 'hg',
            children: [
                { label: '材料工程师', value: 'cailiao' },
                { label: '配方工程师', value: 'peifang' },
                { label: '工艺工程师', value: 'gongyi' }]
        }]
}, {
    label: '公共事业',
    value: 'ggsy',
    children: [
        {
            label: '公务事业',
            value: 'gwsy',
            children: [
                { label: '警察', value: 'jingcha' },
                { label: '公务员', value: 'gongwu' },
                { label: '事业单位人员', value: 'shiyedw' },
                { label: '国企员工', value: 'guoqi' }]
        }, {
            label: '学术科研',
            value: 'xsky',
            children: [
                { label: '大学教授', value: 'jiaoshou' },
                { label: '研究员', value: 'yanjiu' }]
        }, {
            label: '非盈利组织',
            value: 'fylzz',
            children: [
                { label: '义工', value: 'yigong' },
                { label: '志愿者', value: 'zhiyuanz' },
                { label: '支教老师', value: 'zhijiao' }]
        }, {
            label: '农林牧渔',
            value: 'nlmy',
            children: [
                { label: '饲养员', value: 'siyang' },
                { label: '农艺师', value: 'nongyi' },
                { label: '畜牧师', value: 'xumu' },
                { label: '护林员', value: 'hulin' },
                { label: '园艺师', value: 'yuanyi' },
                { label: '动物养殖', value: 'dongwuyz' },
                { label: '饲料研发', value: 'siliaoyf' }]
        }]
}];
export { position };
