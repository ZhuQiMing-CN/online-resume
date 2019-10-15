<!--
 * @Author: ZhuQiMing
 * @CreateTime: 2019/10/14 09:07
 -->
<template>
    <div id="resumeFirst">
        <div class="resume-template">
            <div class="template-list" v-for="(template, index) in templateList" :key="index">
                <el-card shadow="hover" :class="{'el-card-select': template.id == templateId}">
                    <img :src="template.url" width="235px">
                    <div>
                        <p>{{template.name}}</p>
                        <el-button type="text" @click="beginEdit(template)">开始编辑</el-button>
                    </div>
                </el-card>
            </div>
        </div>

    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data () {
        return {
            templateId: '',
            templateList: [
                {
                    id: 1,
                    name: '精简1',
                    url: require('../../assets/img/template/template_01.png')
                },
                {
                    id: 2,
                    name: '精简2',
                    url: require('../../assets/img/template/template_01.png')
                },
                {
                    id: 3,
                    name: '精简3',
                    url: require('../../assets/img/template/template_01.png')
                }
            ]
        };
    },
    created () {
        let resumeInfo = this.$store.state.resumeInfo;
        if (JSON.stringify(resumeInfo) !== '{}') {
            this.templateId = resumeInfo.templateId;
        }
    },
    methods: {
        ...mapMutations([
            'setResumeInfo'
        ]),
        // 开始编辑
        beginEdit (template) {
            let resumeInfo = this.$store.state.resumeInfo;
            resumeInfo.templateId = template.id;
            this.setResumeInfo(resumeInfo);
            this.$router.push(`/resumesecond?step=2`);
        }
    }
};
</script>

<style lang="less" scoped>
    #resumeFirst {
        .resume-template {
            display: flex;
            flex-flow: wrap;
            justify-content: center;
            .template-list {
                margin: 12px;
                .el-card {
                    border: 2px solid #EBEEF5;
                }
                .el-card:hover {
                    border: 2px solid #00C091;
                }
            }
            .el-card-select {
                border: 2px solid #00C091!important;
            }
        }
    }
</style>
