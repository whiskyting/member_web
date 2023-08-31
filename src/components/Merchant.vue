<template>
    <el-row>
        <el-col :span="12">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>商家設定</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">基本資料</el-menu-item>
                        <el-menu-item index="1-2">通知設定</el-menu-item>
                        <el-menu-item index="1-3">時段設定</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>

                <el-sub-menu index="2">
                    <template #title>
                        <el-icon>
                            <IconMenu />
                        </el-icon>
                        <span>訂單管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">代辦訂單</el-menu-item>
                        <el-menu-item index="1-2">取消訂單</el-menu-item>
                        <el-menu-item index="1-3">過去訂單</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>

                <el-sub-menu index="3">
                    <template #title>
                        <el-icon>
                            <document />
                        </el-icon>
                        <span>服務管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">現有服務</el-menu-item>
                        <el-menu-item index="1-2">新增服務</el-menu-item>
                        <el-menu-item index="1-3">其他</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>

                <el-sub-menu index="4">
                    <template #title>
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>數據中心</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">數據管理</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>

                <el-sub-menu index="5">
                    <template #title>
                        <el-icon>
                            <Bell />
                        </el-icon>
                        <span>評價中心</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">評價管理</el-menu-item>
                        <!-- <el-menu-item index="1-2">item two</el-menu-item> -->
                    </el-menu-item-group>
                    <!-- <el-menu-item-group title="Group Two">
                        <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group> -->
                    <!-- <el-sub-menu index="1-4">
                        <template #title>item four</template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu> -->
                </el-sub-menu>

                <el-sub-menu index="6">
                    <template #title>
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>帳務管理</span>
                    </template>
                    <el-menu-item-group>
                        <!-- <el-menu-item index="1-1">代辦訂單</el-menu-item>
                        <el-menu-item index="1-2">取消訂單</el-menu-item>
                        <el-menu-item index="1-3">過去訂單</el-menu-item> -->
                    </el-menu-item-group>
                    <!-- <el-sub-menu index="1-4">
                        <template #title>item four</template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu> -->
                </el-sub-menu>

                <el-menu-item index="7">
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>通知中心</span>
                </el-menu-item>
            </el-menu>




        </el-col>
        
    </el-row>

    <el-row>
        <el-col :span="12">
            <div class="grid-content ep-bg-purple" >
                
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content ep-bg-purple-light" />
            
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="8">
            <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="8">
            <div class="grid-content ep-bg-purple-light" />
        </el-col>
        <el-col :span="8">
            <div class="grid-content ep-bg-purple" />
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple-light" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple-light" />
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="4">
            <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="4">
            <div class="grid-content ep-bg-purple-light" />
        </el-col>
        <el-col :span="4">
            <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="4">
            <div class="grid-content ep-bg-purple-light" />
        </el-col>
        <el-col :span="4">
            <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="4">
            <div class="grid-content ep-bg-purple-light" />
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const dialogFormVisible = ref(false)
const formLabelWidth = '100px'

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: ''
})

const loginForm = reactive({
    account: '',
    password: ''
})
const login = () => { }

import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    Bell,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>





<style lang="scss">
.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.login {
    text-align: center;
    top: 50%;
}

.loginForm {
    display: inline-block;
    vertical-align: middle;
}

.el-button--text {
    margin-right: 15px;
}

.el-select {
    width: 300px;
}

.el-input {
    width: 300px;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}</style>
  