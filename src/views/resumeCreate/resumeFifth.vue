<!--
 * @Author: ZhuQiMing
 * @CreateTime: 2019/10/16 10:10
 -->
<template>
    <div id="resumeFifth">
        <el-page-header @back="$router.go(-1)" content="工作经验"></el-page-header>
        <div class="experience-info">
            <el-form inline :model="experienceForm" :rules="experienceRules" ref="experienceForm" label-width="100px" size="medium">
                <div class="educational-list" v-for="(item, key) in experienceForm.experienceList" :key="key">
                    <el-form-item label="工作时间 :" :prop="`experienceList.${key}.worktime`" :rules="experienceRules.worktime" class="worktime-input">
                        <el-date-picker v-model="item.worktime" type="monthrange" range-separator="至" start-placeholder="开始月份" end-placeholder="结束月份" value-format="yyyy-MM">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="单位名称 :" :prop="`experienceList.${key}.company`" :rules="experienceRules.company">
                        <el-input v-model="item.company" maxlength="30" clearable placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="职位名称 :" :prop="`experienceList.${key}.position`" :rules="experienceRules.position">
                        <el-input v-model="item.position" maxlength="10" clearable placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="补充说明 :" :prop="`experienceList.${key}.remark`">
                        <el-input v-model="item.remark" type="textarea" maxlength="50" resize="none" :autosize="{minRows: 2, maxRows: 3}" show-word-limit placeholder="请输入"></el-input>
                    </el-form-item>
                    <div class="del-more">
                        <el-popover placement="top" width="160" v-model="item.visible">
                            <p>确定删除这条工作经验？</p>
                            <div style="text-align: right;">
                                <el-button size="mini" type="text" @click="item.visible = false">取消</el-button>
                                <el-button type="primary" size="mini" @click="delMoreExperience(item)">确定</el-button>
                            </div>
                            <el-button slot="reference" type="text" size="mini" icon="el-icon-delete">删除</el-button>
                        </el-popover>
                    </div>
                </div>
                <div class="add-more">
                    <el-button type="primary" size="small" icon="el-icon-edit" @click="addMoreExperience">添加更多</el-button>
                </div>
                <el-form-item>
                    <el-button @click="$router.go(-1)">上一步</el-button>
                    <el-button type="primary" @click="submitExperienceForm('experienceForm')">下一步</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data () {
        return {
            experienceForm: {
                experienceList: [
                    { worktime: '', company: '', position: '', remark: '', visible: false }
                ]
            },
            experienceRules: {
                worktime: [
                    { required: true, message: '请选择起止日期', trigger: 'change' }
                ],
                company: [
                    { required: true, message: '请输入单位名称', trigger: 'blur' }
                ],
                position: [
                    { required: true, message: '请输入职位名称', trigger: 'blur' }
                ]
            }
        };
    },
    created () {
        let resumeInfo = this.$store.state.resumeInfo;
        if (JSON.stringify(resumeInfo) !== '{}' && resumeInfo.experienceInfo) {
            this.experienceForm = resumeInfo.experienceInfo;
        }
    },
    methods: {
        ...mapMutations([
            'setResumeInfo'
        ]),
        // 删除更多工作经验
        delMoreExperience (item) {
            let index = this.experienceForm.experienceList.indexOf(item);
            if (index !== -1) {
                this.experienceForm.experienceList.splice(index, 1);
            }
        },
        // 添加更多工作经验
        addMoreExperience () {
            this.experienceForm.experienceList.push({
                worktime: '',
                company: '',
                position: '',
                remark: '',
                visible: false
            });
        },
        // 下一步
        submitExperienceForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let resumeInfo = this.$store.state.resumeInfo;
                    resumeInfo.experienceInfo = this.experienceForm;
                    this.setResumeInfo(resumeInfo);
                    this.$router.push(`/resumesixth?step=6`);
                } else {
                    return false;
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
    #resumeFifth {
        .experience-info {
            width: 846px;
            margin: 0 auto;
            padding-top: 40px;
            /deep/ .el-input, .el-textarea {
                width: 300px;
            }
            /deep/ .el-textarea {
                .el-input__count {
                    line-height: 12px;
                }
            }
            .worktime-input /deep/ .el-input__inner {
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
            .del-more {
                text-align: right;
                .el-button {
                    color: #F56C6C;
                }
            }
            .add-more {
                text-align: right;
                padding: 22px 0px;
            }
        }
    }
</style>
