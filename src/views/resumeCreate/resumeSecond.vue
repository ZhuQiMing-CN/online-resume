<!--
 * @Author: ZhuQiMing
 * @CreateTime: 2019/10/14 13:50
 -->
<template>
    <div id="resumeSecond">
        <el-page-header @back="$router.go(-1)" content="基本信息"></el-page-header>
        <div class="base-info">
            <el-form :model="baseForm" :rules="baseRules" ref="baseForm" label-width="140px" size="medium">
                <el-form-item label="姓名 :" prop="name">
                    <el-input v-model.trim="baseForm.name" maxlength="5" clearable placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="联系电话 :" prop="phone">
                    <el-input v-model.number="baseForm.phone" maxlength="11" clearable placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="期望职位 :" prop="position">
                    <el-cascader v-model="baseForm.position" :options="positions" :props="{value: 'label'}" :show-all-levels="false" filterable placeholder="请选择">
                    </el-cascader>
                </el-form-item>
                <el-form-item label="电子邮箱 :" prop="email">
                    <el-input v-model="baseForm.email" type="email" clearable placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="出生年月 :" prop="birthdate">
                    <el-date-picker v-model="baseForm.birthdate" type="date" value-format="yyyy-MM-dd" placeholder="请选择"></el-date-picker>
                </el-form-item>
                <el-form-item label="工作年限 :" prop="worktime">
                    <el-select v-model="baseForm.worktime" placeholder="请选择">
                        <el-option label="应届生" value="0"></el-option>
                        <el-option label="1年经验" value="1"></el-option>
                        <el-option label="2年经验" value="2"></el-option>
                        <el-option label="3年经验" value="3"></el-option>
                        <el-option label="4年经验" value="4"></el-option>
                        <el-option label="5年经验" value="5"></el-option>
                        <el-option label="6年经验" value="6"></el-option>
                        <el-option label="7年经验" value="7"></el-option>
                        <el-option label="8年经验" value="8"></el-option>
                        <el-option label="9年经验" value="9"></el-option>
                        <el-option label="10年经验" value="10"></el-option>
                        <el-option label="10年以上经验" value="10+"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="个人博客 :" prop="website">
                    <el-input v-model="baseForm.website" type="url" clearable placeholder="https://www.zhuqiming.cn"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="$router.go(-1)">上一步</el-button>
                    <el-button type="primary" @click="submitBaseForm('baseForm')">下一步</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { position } from '../../data/position';
import { mapMutations } from 'vuex';

export default {
    data () {
        return {
            positions: position,
            baseForm: {
                name: '',
                phone: '',
                position: '',
                email: '',
                birthdate: '',
                worktime: '',
                website: ''
            },
            baseRules: {
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                    { min: 2, max: 5, message: '姓名在 2 到 5 个字符', trigger: 'blur' }
                ],
                phone: [
                    { type: 'number', required: true, message: '请输入联系电话', trigger: 'blur' }
                ],
                position: [
                    { required: true, message: '请选择期望职位', trigger: 'change' }
                ],
                email: [
                    { type: 'email', required: true, message: '请输入电子邮箱', trigger: 'blur' }
                ],
                birthdate: [
                    { required: true, message: '请选择出生年月', trigger: 'change' }
                ],
                worktime: [
                    { required: true, message: '请选择工作年限', trigger: 'change' }
                ],
                website: [
                    { type: 'url', message: '请输入个人博客地址', trigger: 'blur' }
                ]
            }
        };
    },
    created () {
        let resumeInfo = this.$store.state.resumeInfo;
        if (JSON.stringify(resumeInfo) !== '{}' && resumeInfo.baseInfo) {
            this.baseForm = resumeInfo.baseInfo;
        }
    },
    methods: {
        ...mapMutations([
            'setResumeInfo'
        ]),
        // 下一步
        submitBaseForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let resumeInfo = this.$store.state.resumeInfo;
                    resumeInfo.baseInfo = this.baseForm;
                    this.setResumeInfo(resumeInfo);
                    this.$router.push(`/resumethird?step=3`);
                } else {
                    return false;
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
    #resumeSecond {
        .base-info {
            width: 960px;
            margin: 0 auto;
            padding-top: 40px;
            /deep/ .el-input {
                width: 450px;
            }
        }
    }
</style>
