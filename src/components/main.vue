<!--
 * @Author: ZhuQiMing
 * @CreateTime: 2019/10/11 14:18
 -->
<template>
    <el-container class="mian-container">
        <!--<left-side></left-side>-->
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>王2</span>
            </el-header>

            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script>
import LeftSide from './LeftSide';
export default {
    components: {
        // LeftSide
    },
    data () {
        const item = {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 15181 弄'
        };
        return {
            tableData: Array(20).fill(item)
        };
    },
    methods: {}
};
</script>

<style lang="less" scoped>
    .mian-container {
        height: calc(100vh - 20px);
        border: 1px solid red;
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
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
        line-height: 160px;
    }
</style>
