<!--
 * @Author: ZhuQiMing
 * @CreateTime: 2019/10/11 14:18
 -->
<template>
    <el-container class="mian-container">
        <el-header>智能简历编辑</el-header>
        <el-container>
            <el-aside width="260px" v-if="stepIndex>-1">
                <el-steps direction="vertical" :active="stepIndex" align-center process-status="finish"
                          finish-status="success">
                    <el-step title="选择模板"></el-step>
                    <el-step title="基本信息"></el-step>
                    <el-step title="求职意向"></el-step>
                    <el-step title="教育背景"></el-step>
                    <el-step title="工作经验"></el-step>
                    <el-step title="技能特长"></el-step>
                    <el-step title="自我评价"></el-step>
                </el-steps>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data () {
        return {
            stepIndex: 0
        };
    },
    watch: {
        $route () {
            this.stepIndex = parseInt(this.$route.query.step) - 1;
        }
    },
    created () {
        this.stepIndex = parseInt(this.$route.query.step) - 1;
    }
};
</script>

<style lang="less" scoped>
    .mian-container {
        /*height: 100vh;*/
    }

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
        text-align: center;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        /*text-align: center;*/
        /*line-height: 200px;*/
    }

    .el-steps {
        /*padding: 20px 20px 10px;*/
        /*box-shadow: 2px 2px 3px rgba(0,0,0,.08);*/
        .el-step {
            margin: 0px auto;
        }
        .el-step:first-child {
            padding-top: 40px;
        }
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        /*text-align: center;*/
        height: calc(100vh - 60px);
    }

    .el-main > * {
        height: 100%;
    }
</style>
