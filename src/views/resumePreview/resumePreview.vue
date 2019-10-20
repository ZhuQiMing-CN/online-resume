<!--
 * @Author: ZhuQiMing
 * @CreateTime: 2019/10/17 13:58
 -->
<template>
    <div id="resumePreview">
        <el-page-header @back="$router.go(-1)" content="简历预览"></el-page-header>
        <div class="resume-data">
            <h3 class="user-name">{{baseInfo.name}}</h3>
            <span v-if="baseInfo.introduce" class="introduce">{{baseInfo.introduce}}</span>
            <div class="base-info">
                <h4 v-if="templateId !== 2">基本信息</h4>
                <p>
                    <span>{{baseInfo.sex}}</span> |
                    <span>{{baseInfo.age}} 岁</span> |
                    <span v-if="baseInfo.worktime==0">应届生</span>
                    <span v-else>{{baseInfo.worktime}} 年工作经验 </span> |
                    <span>{{baseInfo.phone}}</span> |
                    <span>{{baseInfo.email}}</span>
                </p>
                <p v-if="baseInfo.website">个人博客 : {{baseInfo.website}}</p>
            </div>
            <div class="expect-info">
                <h4>求职意向</h4>
                <p>
                    <span>
                        <i class="el-icon-suitcase"></i>
                        {{expectInfo.position[2]}}
                    </span>
                    <span>
                        <i class="el-icon-office-building"></i>
                        {{expectInfo.city[1]}}
                    </span>
                    <span>
                        <i class="el-icon-time"></i>
                        {{expectInfo.entrytime}}
                    </span>
                    <span v-if="expectInfo.salaryfrom!==0">
                        <i class="el-icon-money"></i>
                        {{expectInfo.salaryfrom}}K ~ {{expectInfo.salaryto}}K
                    </span>
                    <span v-else>
                        <i class="el-icon-money"></i>
                        面议
                    </span>
                </p>
            </div>
            <div class="educate-info" v-if="educateInfo.educateList.length > 0">
                <h4>教育背景</h4>
                <div v-for="(item, key) in educateInfo.educateList" :key="key">
                    <span>{{item.dates[0]}} 至 {{item.dates[1]}}</span>
                    <span>{{item.school}}</span>
                    <span>{{item.degree}}</span>
                    <span>{{item.major}}</span>
                </div>
            </div>
            <div class="experience-info" v-if="experienceInfo.experienceList.length > 0">
                <h4>工作经验</h4>
                <div v-for="(item, key) in experienceInfo.experienceList" :key="key">
                    <span>{{item.worktime[0]}} 至 {{item.worktime[1]}}</span>
                    <span>{{item.company}}</span>
                    <span>{{item.position}}</span>
                    <p>{{item.remark}}</p>
                </div>
            </div>
            <div class="skills-info">
                <h4>技能特长</h4>
                <div class="skill-list">
                    <div v-for="(item, key) in skillsInfo" :key="key">
                        <el-tag  v-if="templateId == 2">{{item.name}}</el-tag>
                        <div v-else>
                            <el-progress type="circle" :percentage="item.level" :width="100"></el-progress>
                            <el-badge :value="item.levelName" type="primary">
                                {{item.name}}
                            </el-badge>
                        </div>
                    </div>
                </div>
            </div>
            <div class="evaluate-info" v-if="evaluateInfo">
                <h4>自我评价</h4>
                <div>
                    {{evaluateInfo}}
                </div>
            </div>
        </div>
        <div class="resume-btn">
            <el-button type="danger" size="small" plain @click="handleDownPdf">简历下载</el-button>
            <el-button type="danger" size="small" @click="handleWindowPrint">在线打印</el-button>
        </div>
    </div>
</template>

<script>
import { downloadPDF, countAge } from '../../utils/util';
export default {
    data () {
        return {
            templateId: '',
            baseInfo: {},
            expectInfo: {},
            educateInfo: {},
            experienceInfo: {},
            skillsInfo: [],
            evaluateInfo: ''
        };
    },
    created () {
        let resumeInfo = this.$store.state.resumeInfo;
        if (JSON.stringify(resumeInfo) !== '{}') {
            this.templateId = resumeInfo.templateId;
            this.baseInfo = resumeInfo.baseInfo;
            this.baseInfo.age = countAge(resumeInfo.baseInfo.birthdate);
            this.expectInfo = resumeInfo.expectInfo;
            this.educateInfo = resumeInfo.educateInfo;
            this.experienceInfo = resumeInfo.experienceInfo;
            this.skillsInfo = resumeInfo.skillsInfo;
            this.evaluateInfo = resumeInfo.evaluateInfo;
            require(`./template_less/template_${this.templateId}.less`);
        }
    },
    methods: {
        // 下载PDF文件
        handleDownPdf () {
            downloadPDF(document.querySelector('.resume-data'), this.baseInfo.name);
        },
        // 浏览器方式打印
        handleWindowPrint () {
            document.body.innerHTML = document.querySelector('.resume-data').outerHTML;
            setTimeout(() => {
                window.print();
                window.location.reload();
            }, 20);
        }
    }
};
</script>

<style lang="less" scoped>
    #resumePreview {
        width: 960px;
        margin: 0 auto;
        .resume-data {
            padding: 20px;
            margin: 20px 0px;
            background-color: #FFFFFF;
        }
        .resume-btn {
            text-align: center;
            margin-bottom: 20px;
        }
    }
</style>
