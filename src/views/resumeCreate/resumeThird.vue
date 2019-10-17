<!--
 * @Author: ZhuQiMing
 * @CreateTime: 2019/10/15 09:57
 -->
<template>
    <div id="resumeThird">
        <el-page-header @back="$router.go(-1)" content="求职意向"></el-page-header>
        <div class="expect-position">
            <el-form :model="expectForm" :rules="expectedRules" ref="expectForm" label-width="140px" size="medium">
                <el-form-item label="期望职位 :" prop="position">
                    <el-cascader v-model="expectForm.position" :options="positions" :props="{value: 'label'}" :show-all-levels="false" filterable placeholder="请选择">
                    </el-cascader>
                </el-form-item>
                <el-form-item label="工作城市 :" prop="city">
                    <el-cascader v-model="expectForm.city" :options="citys" :props="{value: 'label'}" filterable placeholder="请选择">
                    </el-cascader>
                </el-form-item>
                <el-form-item label="入职时间 :" prop="entrytime">
                    <el-select v-model="expectForm.entrytime" placeholder="请选择">
                        <el-option label="随时到岗" value="随时到岗"></el-option>
                        <el-option label="1周内到岗" value="1周内到岗"></el-option>
                        <el-option label="1个月内到岗" value="1个月内到岗"></el-option>
                        <el-option label="3个月内到岗" value="3个月内到岗"></el-option>
                        <el-option label="到岗时间另议" value="到岗时间另议"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="薪资要求 :" prop="salaryfrom" class="salary-input">
                    <el-select v-model="expectForm.salaryfrom" @change="salaryfromChange" placeholder="请选择">
                        <el-option v-for="(option, key) in salaryfromList" :label="option.label" :value="option.value" :key="key"></el-option>
                    </el-select>
                    <span style="padding: 0px 20px" v-if="expectForm.salaryfrom !== 0">~</span>
                    <el-select v-model="expectForm.salaryto" placeholder="请选择" v-if="expectForm.salaryfrom !== 0" :disabled="expectForm.salaryfrom == 0">
                        <el-option v-for="(option, key) in salarytoList" :label="option.label" :value="option.value" :key="key"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button @click="$router.go(-1)">上一步</el-button>
                    <el-button type="primary" @click="submitExpectForm('expectForm')">下一步</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { position } from '../../data/position';
import { city } from '../../data/city';
import { mapMutations } from 'vuex';
export default {
    data () {
        return {
            positions: position,
            citys: city,
            expectForm: {
                position: '',
                city: '',
                entrytime: '',
                salaryfrom: '',
                salaryto: ''
            },
            expectedRules: {
                position: [
                    { required: true, message: '请选择期望职位', trigger: 'change' }
                ],
                city: [
                    { required: true, message: '请输入工作城市', trigger: 'change' }
                ],
                entrytime: [
                    { required: true, message: '请选择工作年限', trigger: 'change' }
                ],
                salaryfrom: [
                    { required: true, message: '请输入薪资要求', trigger: 'change' }
                ]
            },
            salaryfromList: [
                { label: '面议', value: 0 },
                { label: '3K', value: 3 },
                { label: '4K', value: 4 },
                { label: '5K', value: 5 },
                { label: '6K', value: 6 },
                { label: '7K', value: 7 },
                { label: '8K', value: 8 },
                { label: '9K', value: 9 },
                { label: '10K', value: 10 },
                { label: '12K', value: 12 },
                { label: '14K', value: 14 },
                { label: '16K', value: 16 },
                { label: '18K', value: 18 },
                { label: '20K', value: 20 }
            ],
            salarytoList: []
        };
    },
    created () {
        let resumeInfo = this.$store.state.resumeInfo;
        if (JSON.stringify(resumeInfo) !== '{}') {
            if (resumeInfo.expectInfo) {
                this.expectForm = resumeInfo.expectInfo;
                let val = resumeInfo.expectInfo.salaryfrom;
                let salarytoList = [];
                if (val < 10) {
                    for (let i = val + 1; i <= val * 2; i++) {
                        salarytoList.push({
                            label: i + 'K',
                            value: i
                        });
                        this.salarytoList = salarytoList;
                        this.expectForm.salaryto = salarytoList[0].value;
                    }
                } else {
                    for (let i = val + 2; i <= 30; i += 2) {
                        salarytoList.push({
                            label: i + 'K',
                            value: i
                        });
                        this.salarytoList = salarytoList;
                        this.expectForm.salaryto = salarytoList[0].value;
                    }
                }
            }
            if (resumeInfo.baseInfo) {
                this.expectForm.position = resumeInfo.baseInfo.position;
            }
        }
    },
    methods: {
        ...mapMutations([
            'setResumeInfo'
        ]),
        // 选择薪资
        salaryfromChange (val) {
            let salarytoList = [];
            if (val === 0) {
                this.expectForm.salaryto = 0;
            }
            if (val < 10) {
                for (let i = val + 1; i <= val * 2; i++) {
                    salarytoList.push({
                        label: i + 'K',
                        value: i
                    });
                    this.salarytoList = salarytoList;
                    this.expectForm.salaryto = salarytoList[0].value;
                }
            } else {
                for (let i = val + 2; i <= 30; i += 2) {
                    salarytoList.push({
                        label: i + 'K',
                        value: i
                    });
                    this.salarytoList = salarytoList;
                    this.expectForm.salaryto = salarytoList[0].value;
                }
            }
        },
        // 下一步
        submitExpectForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let resumeInfo = this.$store.state.resumeInfo;
                    resumeInfo.expectInfo = this.expectForm;
                    resumeInfo.baseInfo.position = this.expectForm.position;
                    this.setResumeInfo(resumeInfo);
                    this.$router.push(`/resumefour?step=4`);
                } else {
                    return false;
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
    #resumeThird {
        .expect-position {
            width: 960px;
            margin: 0 auto;
            padding-top: 40px;
            /deep/ .el-input {
                width: 450px;
            }
            .salary-input /deep/ .el-input {
                width: 200px;
            }
        }
    }
</style>
