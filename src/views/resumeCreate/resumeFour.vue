<!--
 * @Author: ZhuQiMing
 * @CreateTime: 2019/10/15 14:10
 -->
<template>
    <div id="resumeFour">
        <el-page-header @back="$router.go(-1)" content="教育背景"></el-page-header>
        <div class="educational-info">
            <el-form :model="baseForm" :rules="baseRules" ref="baseForm" label-width="140px" size="medium">
                <el-form-item label="起止日期 :" prop="dates">
                    <el-date-picker v-model="baseForm.dates" type="monthrange" range-separator="至" start-placeholder="开始月份" end-placeholder="结束月份" value-format="yyyy-MM">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="学校名称 :" prop="school">
                    <el-autocomplete v-model="baseForm.school" clearable :fetch-suggestions="schoolQuerySearch" placeholder="请输入"></el-autocomplete>
                </el-form-item>
                <el-form-item label="专业名称 :" prop="major">
                    <el-input v-model.number="baseForm.major" maxlength="11" clearable placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="学位 :" prop="degree">
                    <el-select v-model="baseForm.degree" placeholder="请选择">
                        <el-option label="中专/技校" value="中专/技校"></el-option>
                        <el-option label="高中" value="高中"></el-option>
                        <el-option label="大专" value="大专"></el-option>
                        <el-option label="本科" value="本科"></el-option>
                        <el-option label="硕士" value="硕士"></el-option>
                        <el-option label="博士" value="博士"></el-option>
                    </el-select>
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
import { school } from '../../data/school';
import { mapMutations } from 'vuex';
export default {
    data () {
        return {
            schools: school,
            baseForm: {
                dates: '',
                school: '',
                major: '',
                degree: ''
            },
            baseRules: {
                dates: [
                    { required: true, message: '请选择起止日期', trigger: 'change' }
                ],
                school: [
                    { required: true, message: '请输入学校名称', trigger: 'blur' }
                ],
                major: [
                    { required: true, message: '请输入专业名称', trigger: 'blur' }
                ],
                degree: [
                    { required: true, message: '请选择学位', trigger: 'change' }
                ]
            }
        };
    },
    methods: {
        ...mapMutations([
            'setResumeInfo'
        ]),
        // 学校名称的模糊搜索
        schoolQuerySearch (queryString, cb) {
            var schools = this.schools;
            var results = queryString ? schools.filter(this.createFilter(queryString)) : schools;
            cb(results);
        },
        // 过滤结果列表的数据
        createFilter (queryString) {
            return (restaurant) => {
                return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        // 下一步
        submitBaseForm (formName) {
            console.log(this.baseForm);
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let resumeInfo = this.$store.state.resumeInfo;
                    resumeInfo.baseInfo = this.baseForm;
                    // this.setResumeInfo(resumeInfo);
                    // this.$router.push(`/resumethird?step=3`);
                } else {
                    return false;
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
    #resumeFour {
        .educational-info {
            width: 960px;
            margin: 0 auto;
            padding-top: 40px;
            /deep/ .el-input {
                /*width: 450px;*/
            }
        }
    }
</style>
