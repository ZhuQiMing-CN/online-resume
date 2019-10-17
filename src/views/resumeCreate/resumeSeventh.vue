<!--
 * @Author: ZhuQiMing
 * @CreateTime: 2019/10/17 10:06
 -->
<template>
    <div id="resumeSeventh">
        <el-page-header @back="$router.go(-1)" content="自我评价"></el-page-header>
        <div class="evaluate-info">
            <span>此项为非必选项，根据实际情况填写</span>
            <el-input type="textarea" v-model="evaluate" :autosize="{minRows: 10}" resize="none" maxlength="800" show-word-limit :placeholder="placeholder"></el-input>
            <div class="evaluate-demo">
                <el-carousel trigger="click" height="280px" indicator-position="none">
                    <el-carousel-item v-for="item in evaluateDemo" :key="item">
                        <el-card>
                            <div slot="header">
                                <span>案例参考</span>
                                <el-button class="apply-btn" type="text" @click="applyDemo(item)">应用此案例</el-button>
                            </div>
                            <div class="apply-content">{{item}}</div>
                        </el-card>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="evaluate-btn">
                <el-button size="medium" @click="$router.go(-1)">上一步</el-button>
                <el-button type="primary" size="medium" @click="submitEvaluateForm()">完成</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { evaluate } from '../../data/evaluate';
import { mapMutations } from 'vuex';
export default {
    data () {
        return {
            evaluate: '',
            placeholder: '篇幅不要太长，注意结合简历整体的美观度，自我评价应做到突出自身符合目标岗位要求的“卖点”，避免过多使用形容词，而应该通过数据及实例来对自身价值进行深化。',
            evaluateDemo: []
        };
    },
    created () {
        let resumeInfo = this.$store.state.resumeInfo;
        if (JSON.stringify(resumeInfo) !== '{}') {
            if (resumeInfo.evaluateInfo) {
                this.evaluate = resumeInfo.evaluateInfo;
            }
            if (resumeInfo.baseInfo) {
                let myposition = resumeInfo.baseInfo.position[2];
                this.evaluateDemo = evaluate.find(item => myposition === item.label).content;
            }
        }
    },
    methods: {
        ...mapMutations([
            'setResumeInfo'
        ]),
        // 应用案例
        applyDemo (value) {
            this.evaluate = value;
        },
        // 完成
        submitEvaluateForm () {
            let resumeInfo = this.$store.state.resumeInfo;
            resumeInfo.evaluateInfo = this.evaluate;
            this.setResumeInfo(resumeInfo);
            this.$router.push(`/resumepreview`);
        }
    }
};
</script>

<style lang="less" scoped>
    #resumeSeventh {
        .evaluate-info {
            width: 846px;
            margin: 0 auto;
            padding-top: 40px;
            .evaluate-btn {
                margin: 22px 0px;
            }
        }
        .evaluate-demo {
            margin-top: 22px;
            .apply-btn {
                float: right;
                padding: 3px 0px;
            }
            .apply-content {
                color: #666;
                height: 220px;
                overflow: auto;
                font-size: 14px;
            }
        }
    }
</style>
