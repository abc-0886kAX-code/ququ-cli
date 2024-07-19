<!--
 * @FilePath: \vue2.7_admin_template-master\src\layout\Home.vue
 * @Author: zhangxin
 * @Date: 2023-04-12 13:14:28
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-11-16 17:22:35
 * @Description:
-->
<script setup>
import MenuItem from './menu-item.vue';
import { useMenu } from '@/hooks/useMenu.js';
import { routes } from '@/router/useRouter.js';

import Weather from "@/components/weather/weather.vue";
import { useUserStore } from "@/store/useUser";
import { usePermissionStore } from '@/store/usePermission';
const { proxy } = getCurrentInstance();
const user = useUserStore();
const permission = usePermissionStore();
const menu = useMenu();
const defaultActive = computed(() => {
    return proxy.$route.name
})

const menuList = computed(() => {
    return routes.find((item) => item.name === "layout").children;
})
function handleUser(params) { }
function handleCommand(command) {
    command === "userLogout" && userLogout();
}
function userLogout() {
    user.emptyUserInfo();
    proxy.$router.push({ name: "login" });
}
function routerSelect(routeName) {
    const routeOptions = { name: routeName };
    proxy.$router.push(routeOptions);
}
</script>

<template>
    <el-container class="home">
        <el-header class="home-header">
            <div class="home-header-weather">
                <Weather></Weather>
            </div>
            <el-dropdown class="home-header-user" size="small" split-button type="primary" @command="handleCommand"
                @click="handleUser">
                用户名称
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="userLogout">注销登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-header>

        <el-container class="home-main">
            <el-aside class="home-mian-menu" width="250px">
                <el-menu background-color="#fff" text-color="#000" active-text-color="#3F63EA"
                    :default-active="defaultActive" @select="routerSelect" mode="vertical" unique-opened>
                    <template v-for="cell in menuList" :key="cell.name">
                        <MenuItem v-if="menu.renderSubmenu(cell)" :cell="cell">
                        </MenuItem>

                        <el-menu-item v-else-if="menu.renderMenu(cell)" :index="cell.name">
                            <i :class="menu.getIcon(cell)"></i>
                            <span>{{ menu.getTitle(cell) }}</span>
                        </el-menu-item>
                    </template>
                </el-menu>
            </el-aside>
            <el-main class="home-main-content" :key="defaultActive">
                <RouterView v-slot="{ Component }">
                    <transition name="el-fade-in-linear">
                        <component :is="Component" />
                    </transition>
                </RouterView>

            </el-main>
        </el-container>
    </el-container>
</template>

<style scoped lang="scss">
.home {
    background-color: transparent;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &-header {
        display: flex;
        justify-content: space-between;
        z-index: 1;
        background-color: #303248;

        &-weather {
            height: 100%;
        }

        &-user {
            height: 100%;
            width: auto;
            display: flex;
            align-items: center;
        }

        img {
            width: 400px;
            height: 30px;
            font-size: 0;
            overflow: hidden;
            margin-top: 15px;
        }
    }

    &-main {
        position: relative;
        z-index: 1;
        width: 100%;
        height: calc(100% - 80px);
        overflow: hidden;
        box-sizing: border-box;

        &-menu {
            width: 200px;
            height: 100%;
        }

        &-content {
            width: calc(100% - 250px);
            height: 100%;
            padding: 0 !important;
            background-color: #F2F6FA;
        }
    }
}

:deep(.el-menu) {
    width: 100%;
    height: 100%;
    overflow-x: hidden !important;
    border-right: none !important;
}
</style>
