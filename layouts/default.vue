<template>
  <el-container style="height: 100%; min-height: 800px;">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu
          :default-active="activeRoute"
          class="el-menu-vertical-demo"
          :router="true"
          @open="handleOpen"
          @close="handleClose"
          active-text-color="#f3927f"
          background-color="#f0f3f7"
        >
          <div v-for="(item,index) in pageName" :key="index">
            <el-submenu :index="index + ''" v-if="item.childs">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item-group>
                <nuxt-link
                  v-for="(child,ind) in item.childs"
                  :key="ind"
                  :to="`${item.path}${child.path}`"
                >
                  <el-menu-item
                    :index="item.path + child.path"
                    style="padding-left: 96px;"
                  >{{child.name}}</el-menu-item>
                </nuxt-link>
              </el-menu-item-group>
            </el-submenu>
            <nuxt-link :to="item.path" v-if="!item.childs" :disabled="item.disabled">
              <el-menu-item :index="item.path">
                <i :class="`${item.icon}`"></i>
                <span slot="title">{{item.name}}</span>
              </el-menu-item>
            </nuxt-link>
          </div>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <nuxt />
        </el-main>
        <!-- <el-footer></el-footer> -->
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      pageName: [
        {
          id: 1,
          path: '/gis',
          name: 'gis',
          icon: 'el-icon-star-on',
          childs: [
            { path: '/deal', name: '常规操作' },
            { path: '/common', name: '地图切换' }
          ]
        },
        { id: 2, path: '/svg', name: 'svg', icon: 'el-icon-help' },
        { id: 3, path: '/echart', name: 'echart', icon: 'el-icon-s-flag' },
        {
          id: 3,
          path: '/waterVolume',
          name: '水量管理',
          icon: 'el-icon-s-flag',
          childs: [
            { path: '/monitor', name: '监测预警' },
            { path: '/data', name: '数据管理' },
            { path: '/observe', name: '观测报表' },
            { path: '/balance', name: '平衡分析' },
            { path: '/order', name: '调令管理' }
          ]
        }
      ],
      activeRoute: '/'
    }
  },
  created() {
    // console.log(this.$route.path, 111)
    this.activeRoute = this.$route.path
  },
  watch: {
    $route(to, from) {
      //  console.log(this.$route.path);
    }
  },

  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.el-header,
.el-footer {
  background-color: #f3927f;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  position: relative;
  padding: 20px;
  background-color: #e9eef3;
  box-sizing: border-box;
  // color: #333;
  // text-align: center;
  // line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
