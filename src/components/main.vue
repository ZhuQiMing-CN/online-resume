<!--
 * @Author: ZhuQiMing
 * @CreateTime: 2019/10/11 14:18
 -->
<template>
    <el-container class="mian-container">
        <el-container>
            <el-header>智能简历编辑系统</el-header>
            <el-steps :active="stepIndex" align-center process-status="finish" finish-status="success" v-if="stepIndex>-1">
                <el-step title="步骤1" description="请选择模板"></el-step>
                <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
                <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
                <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
            </el-steps>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
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
        height: 100vh;
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-steps {
        padding: 20px;
        box-shadow: 2px 2px 3px rgba(0,0,0,.08);
    }
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    }
</style>
