<!--
 * @Author: ZhuQiMing
 * @CreateTime: 2019/10/14 09:07
 -->
<template>
    <div id="resumeFirst">
        <div class="resume-template">
            <div class="template-list" v-for="(template, index) in templateList" :key="index">
                <el-card shadow="hover">
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
export default {
    data () {
        return {
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
    methods: {
        // 开始编辑
        beginEdit (template) {
            this.$router.push(`/resumesecond?step=2&id=${template.id}`);
        }
    }
};
</script>

<style lang="less" scoped>
    #resumeFirst {
        .resume-template {
            width: 1300px;
            margin: 0 auto;
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
        }
    }
</style>
