<!--
 * @Author: ZhuQiMing
 * @CreateTime: 2019/10/17 13:58
 -->
<template>
    <div id="resumePreview">
        <el-page-header @back="$router.go(-1)" content="简历预览"></el-page-header>
        <div class="resume-data">
            <h3>{{baseInfo.name}}</h3>
            <span>一句话介绍自己，告诉HR为什么选择你而不是别人</span>
            <div class="base-info">
                <h4>基本信息</h4>
                <p>
                    {{baseInfo.age}} 岁 |
                    {{baseInfo.worktime}} 年工作经验 |
                    {{baseInfo.phone}} |
                    {{baseInfo.email}} |
                    {{baseInfo.website}}
                </p>
            </div>
            <div>
                <h4>求职意向</h4>
                <p>
                    <i class="el-icon-suitcase"></i> {{expectInfo.position[2]}}
                    <i class="el-icon-office-building"></i> {{expectInfo.city[1]}}
                    <i class="el-icon-time"></i> {{expectInfo.entrytime}}
                    <i class="el-icon-money"></i> {{expectInfo.salaryfrom}}K ~ {{expectInfo.salaryto}}K
                </p>
            </div>
            <div>
                <h4>教育背景</h4>
                <div v-for="(item, key) in educateInfo.educateList" :key="key">
                    <span>{{item.dates[0]}} 至 {{item.dates[1]}}</span>
                    <span>{{item.school}}</span>
                    <span>{{item.degree}}</span>
                    <span>{{item.major}}</span>
                </div>
            </div>
            <div>
                <h4>工作经验</h4>
                <div v-for="(item, key) in experienceInfo.experienceList" :key="key">
                    <span>{{item.worktime[0]}} 至 {{item.worktime[1]}}</span>
                    <span>{{item.company}}</span>
                    <span>{{item.position}}</span>
                    <span>{{item.remark}}</span>
                </div>
            </div>
            <div>
                <h4>技能特长</h4>
                <div style="display: flex">
                    <div v-for="(item, key) in skillsInfo" :key="key">
                        <el-progress type="circle" :percentage="item.level" :width="100"></el-progress>
                        <el-badge :value="item.levelName" type="primary">
                            {{item.name}}
                        </el-badge>
                    </div>
                </div>
            </div>
            <div>
                <h4>自我评价</h4>
                <div>
                    {{evaluateInfo}}
                </div>
            </div>
        </div>
        <el-button type="danger" size="mini" @click="handleDownPdf">PDF 下载</el-button>
        <el-button type="danger" size="mini" @click="handleWindowPrint">PDF 打印</el-button>
    </div>
</template>

<script>
import { downloadPDF, countAge } from '../../utils/util';
export default {
    data () {
        return {
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
            let templateId = resumeInfo.templateId;
            this.baseInfo = resumeInfo.baseInfo;
            this.baseInfo.age = countAge(resumeInfo.baseInfo.birthdate);
            this.expectInfo = resumeInfo.expectInfo;
            this.educateInfo = resumeInfo.educateInfo;
            this.experienceInfo = resumeInfo.experienceInfo;
            this.skillsInfo = resumeInfo.skillsInfo;
            this.evaluateInfo = resumeInfo.evaluateInfo;
            require(`./template_less/template_${templateId}.less`);
        }
    },
    methods: {
        // 下载PDF文件
        handleDownPdf () {
            downloadPDF(document.querySelector('.resumeData'), this.resumeData.baseInfo.name);
        },
        // 浏览器方式打印
        handleWindowPrint () {
            document.body.innerHTML = document.querySelector('.resumeData').outerHTML;
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
    }
</style>
