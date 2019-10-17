<!--
 * @Author: ZhuQiMing
 * @CreateTime: 2019/10/16 11:23
 -->
<template>
    <div id="resumeSixth">
        <el-page-header @back="$router.go(-1)" content="技能特长"></el-page-header>
        <div class="skills-info">
            <span>根据您的职业推荐的技能</span>
            <div class="skill-name">
                <el-button type="primary" size="mini" :plain="skill.plain" round v-for="(skill, index) in skillList" :key="index" @click="selectSkill(skill)">
                    {{skill.name}}
                </el-button>
            </div>
            <div class="myskill-content" v-if="mySkills.length > 0">
                <div class="myskill-list" v-for="(tag, index) in mySkills" :key="index">
                    <div class="myskill-tag">
                        <el-tag effect="plain" size="medium" closable @close="tagClose(tag)">
                            {{tag.name}}
                        </el-tag>
                    </div>
                    <el-slider v-model="tag.level" :format-tooltip="formatTooltip" @input="sliderChange(tag)"></el-slider>
                    <div>
                        <el-button type="info" size="mini">{{tag.levelName}}</el-button>
                    </div>
                </div>
            </div>
            <div class="myskill-btn">
                <el-button size="medium" @click="$router.go(-1)">上一步</el-button>
                <el-button type="primary" size="medium" @click="submitSkillForm()">下一步</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { skill } from '../../data/skill';
import { mapMutations } from 'vuex';

export default {
    data () {
        return {
            skillList: [],
            mySkills: []
        };
    },
    created () {
        let resumeInfo = this.$store.state.resumeInfo;
        if (JSON.stringify(resumeInfo) !== '{}') {
            if (resumeInfo.baseInfo) {
                let myskill = resumeInfo.baseInfo.position[1];
                let skillList = skill.find(item => myskill === item.label).children.split(',');
                this.skillList = skillList.map(value => {
                    return {
                        name: value,
                        plain: true,
                        level: 0,
                        levelName: '小白'
                    };
                });
            }
            if (resumeInfo.skillsInfo) {
                this.mySkills = resumeInfo.skillsInfo;
                this.mySkills.forEach(val => {
                    this.skillList = this.skillList.map(value => {
                        if (value.name === val.name) {
                            value = val;
                        }
                        return value;
                    });
                });
            }
        }
    },
    methods: {
        ...mapMutations([
            'setResumeInfo'
        ]),
        // 选择职业技能
        selectSkill (skill) {
            if (this.mySkills.length > 4) {
                this.$message.warning('警告哦，最多可添加5项技能！');
                return;
            }
            let index = this.mySkills.findIndex(item => item.name === skill.name);
            if (index < 0) {
                skill.plain = false;
                this.mySkills.push(skill);
            }
        },
        // 删除已选择的技能
        tagClose (tag) {
            this.mySkills.splice(this.mySkills.indexOf(tag), 1);
            this.skillList = this.skillList.map(value => {
                if (value.name === tag.name) {
                    value.plain = true;
                }
                return value;
            });
        },
        // 格式化滑块数据
        formatTooltip (val) {
            if (val < 25) {
                this.levelName = '小白';
                return '小白';
            } else if (val < 50) {
                this.levelName = '菜鸟';
                return '菜鸟';
            } else if (val < 75) {
                this.levelName = '老鸟';
                return '老鸟';
            } else if (val < 100) {
                this.levelName = '大神';
                return '大神';
            } else {
                this.levelName = '骨灰';
                return '骨灰';
            }
        },
        sliderChange (tag) {
            if (tag.level < 25) {
                tag.levelName = '小白';
            } else if (tag.level < 50) {
                tag.levelName = '菜鸟';
            } else if (tag.level < 75) {
                tag.levelName = '老鸟';
            } else if (tag.level < 100) {
                tag.levelName = '大神';
            } else {
                tag.levelName = '骨灰';
            }
        },
        // 下一步
        submitSkillForm () {
            if (this.mySkills.length === 0) {
                this.$message.error('错了哦，至少选择1项技能哦！');
            } else {
                let resumeInfo = this.$store.state.resumeInfo;
                resumeInfo.skillsInfo = this.mySkills;
                this.setResumeInfo(resumeInfo);
                this.$router.push(`/resumeseventh?step=7`);
            }
        }
    }
};
</script>

<style lang="less" scoped>
    #resumeSixth {
        .skills-info {
            width: 846px;
            margin: 0 auto;
            padding-top: 40px;
            .skill-name {
                max-height: 280px;
                overflow: auto;
                padding: 10px 10px 0px 10px;
                border-radius: 4px;
                background-color: #FFFFFF;
                button {
                    margin: 0px 10px 10px 0px;
                }
            }
            .myskill-content {
                margin-top: 22px;
                max-height: 280px;
                overflow: auto;
                border-radius: 4px;
                background-color: #FFFFFF;
                .myskill-list {
                    display: flex;
                    padding: 7px 15px;
                    align-items: center;
                    border-bottom: 1px solid #E9EEF3;
                    .myskill-tag {
                        width: 180px;
                    }
                    .el-slider {
                        flex: 1;
                        padding: 0px 30px;
                    }
                }
            }
            .myskill-btn {
                margin: 22px 0px;
            }
        }
    }
</style>
