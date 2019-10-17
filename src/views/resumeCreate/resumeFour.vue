<!--
 * @Author: ZhuQiMing
 * @CreateTime: 2019/10/15 14:10
 -->
<template>
    <div id="resumeFour">
        <el-page-header @back="$router.go(-1)" content="教育背景"></el-page-header>
        <div class="educational-info">
            <el-form inline :model="educateForm" :rules="educateRules" ref="educateForm" label-width="100px" size="medium">
                <div class="educational-list" v-for="(item, key) in educateForm.educateList" :key="key">
                    <el-form-item label="学位 :" :prop="`educateList.${key}.degree`" :rules="educateRules.degree">
                        <el-select v-model="item.degree" placeholder="请选择">
                            <el-option label="中专/技校" value="中专/技校"></el-option>
                            <el-option label="高中" value="高中"></el-option>
                            <el-option label="大专" value="大专"></el-option>
                            <el-option label="本科" value="本科"></el-option>
                            <el-option label="硕士" value="硕士"></el-option>
                            <el-option label="博士" value="博士"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="起止日期 :" :prop="`educateList.${key}.dates`" :rules="educateRules.dates" class="dates-input">
                        <el-date-picker v-model="item.dates" type="monthrange" range-separator="至" start-placeholder="开始月份" end-placeholder="结束月份" value-format="yyyy-MM">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="学校名称 :" :prop="`educateList.${key}.school`" :rules="educateRules.school">
                        <el-autocomplete v-model="item.school" clearable :fetch-suggestions="schoolQuerySearch" placeholder="请输入"></el-autocomplete>
                    </el-form-item>
                    <el-form-item label="专业名称 :" :prop="`educateList.${key}.major`" :rules="educateRules.major">
                        <el-input v-model="item.major" maxlength="10" clearable placeholder="请输入"></el-input>
                    </el-form-item>
                </div>
                <div class="add-more">
                    <el-button type="primary" size="small" icon="el-icon-edit" @click="addMoreEducate">添加更多</el-button>
                </div>
                <el-form-item>
                    <el-button @click="$router.go(-1)">上一步</el-button>
                    <el-button type="primary" @click="submitEducateForm('educateForm')">下一步</el-button>
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
            educateForm: {
                educateList: [
                    { degree: '', dates: '', school: '', major: '' }
                ]
            },
            educateRules: {
                degree: [
                    { required: true, message: '请选择学位', trigger: 'change' }
                ],
                dates: [
                    { required: true, message: '请选择起止日期', trigger: 'change' }
                ],
                school: [
                    { required: true, message: '请输入学校名称', trigger: 'change' }
                ],
                major: [
                    { required: true, message: '请输入专业名称', trigger: 'blur' }
                ]
            }
        };
    },
    created () {
        let resumeInfo = this.$store.state.resumeInfo;
        if (JSON.stringify(resumeInfo) !== '{}' && resumeInfo.educateInfo) {
            this.educateForm = resumeInfo.educateInfo;
        }
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
        // 添加更多教育背景
        addMoreEducate () {
            this.educateForm.educateList.push({
                degree: '',
                dates: '',
                school: '',
                major: ''
            });
        },
        // 下一步
        submitEducateForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let resumeInfo = this.$store.state.resumeInfo;
                    resumeInfo.educateInfo = this.educateForm;
                    this.setResumeInfo(resumeInfo);
                    this.$router.push(`/resumefifth?step=5`);
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
            width: 846px;
            margin: 0 auto;
            padding-top: 40px;
            /deep/ .el-input {
                width: 300px;
            }
            .dates-input /deep/ .el-input__inner {
                width: 300px;
            }
            .educational-list {
                width: 820px;
                margin-top: 30px;
                border-radius: 6px;
                padding: 22px 12px 0px;
                border: 1px solid #D8D8D8;
                background-color: #FFFFFF;
            }
            .educational-list:first-child {
                margin-top: 0px;
            }
            .add-more {
                text-align: right;
                padding: 22px 0px;
            }
        }
    }
</style>
