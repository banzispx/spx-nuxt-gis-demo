<template>
  <section class="order">
    <div class="collapse">
      <div class="collapse_container" :class="{ collapse_isactive : isActive}">
        <div @click="isActive = !isActive" class="collapse_header">
          <p class="content-p" :class="{ p_isactive : isActive}">
            <i class="el-icon-arrow-up"></i>
          </p>
          <!-- <h4 :class="{ h4_isactive : isActive}">图&nbsp;例</h4> -->
        </div>
        <div class="collapse_body" :class="{ collapse_body_isactive : isActive}">
          <div class="body-left">
            <p style="line-height:25px; text-align: left;">
              <span
                style="font-weight:bold;font-size:14px;color:rgba(51,51,51,1);padding-right: 80px;border-left: 2px solid #2ba3fd;padding-left: 5px;"
              >当前告警</span>
              <el-button type="primary" size="small">新建问题</el-button>
            </p>
            <!-- <p class="water-warn">雨量预警</p> -->
            <el-table
              :data="tableData"
              style="width: 100%;margin-top:15px;"
              size="mini"
              max-height="160"
            >
              <el-table-column fixed prop="date" label="测站名称" width="80"></el-table-column>
              <el-table-column prop="name" label="实时测值(m)" width="100" align="center"></el-table-column>
              <el-table-column prop="province" label="预警水位(m)" width="100" align="center"></el-table-column>
              <el-table-column fixed="right" label="操作" width="50">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small"
                  >推送</el-button>
                </template>
              </el-table-column>
            </el-table>
            <p class="water-warn" style="margin-top: 10px;">库区水情</p>
          </div>
          <div class="body-right" :class="{ bodyright_isactive : isActive}">
            <p style="line-height:25px; text-align: left;">
              <span class="right-span">上报信息列表</span>
              <nuxt-link to="/waterVolume/order/uploadMsg">更多>></nuxt-link>
            </p>
            <el-table
              :data="tableData"
              style="width: 100%;margin-top:21px; margin-left:15px;"
              size="mini"
              max-height="160"
              border
            >
              <el-table-column fixed prop="date" label="名称" align="center"></el-table-column>
              <el-table-column prop="name" label="时间" align="center"></el-table-column>
            </el-table>

            <p style="line-height:25px; text-align: left;">
              <span class="right-span">调度令列表</span>

              <nuxt-link to="/waterVolume/order/orderList">更多>></nuxt-link>
            </p>
            <el-table
              :data="tableData"
              style="width: 100%;margin-top:15px; margin-left:15px;"
              size="mini"
              max-height="160"
            >
              <el-table-column fixed prop="date" label="测站名称" align="center"></el-table-column>
              <el-table-column prop="name" label="实时测值(m)" align="center"></el-table-column>
            </el-table>

            <p style="line-height:25px; text-align: left;">
              <span class="right-span">实时工况</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      isActive: true,
      tableData: [
        {
          date: '坝前水位',
          name: '29.59',
          province: '29.59'
        },
        {
          date: '坝前水位',
          name: '29.59',
          province: '29.59'
        },
        {
          date: '坝前水位',
          name: '29.59',
          province: '29.59'
        }
      ]
    }
  },
  methods: {},
  mounted() {}
}
</script>

<style lang='scss' >
.order {
  .collapse_container {
    text-align: center;
    transition: all 0.5s ease;
    width: 380px;
    height: 483px;
    background-color: rgba(224, 224, 224, 1);
    box-shadow: 0px 4px 20px 0px rgba(33, 33, 33, 0.54);
    border-radius: 4px;
    .collapse_header {
      position: relative;
      width: 100%;
    }
    h4 {
      position: absolute;
      z-index: 5;
      width: 100%;
      margin: 0;
      height: 43px;
      line-height: 43px;
      font-size: 16px;
      font-weight: 500;
      color: rgba(124, 124, 124, 0.8);
      cursor: pointer;
      transition: all 0.5s ease;
    }
    .h4_isactive {
      height: 0;
      color: transparent;
    }
    .content-p {
      position: absolute;
      z-index: 4;
      top: 0px;
      left: -38px;
      text-align: center;
      line-height: 26px;
      cursor: pointer;
      transition: all 0.5s ease-in;
      display: inline-block;
      width: 38px;
      height: 63px;
      background-color: cornflowerblue;
    }
    .p_isactive {
      // transform: rotate(180deg);
    }
    .collapse_body {
      font-size: 12px;
      text-align: left;
      padding: 20px;
      height: 100%;
      overflow: hidden;
      width: 350px;
      width: 760px;
      transition: all 0.5s ease-in;
      display: flex;
      justify-content: flex-start;
      // display: none;
      .water-warn {
        font-size: 14px;
        font-weight: bold;
        color: rgb(51, 51, 51);
        text-align: left;
        display: inline-block;
        border-left: 2px solid #2ba3fd;
        padding-left: 5px;
      }
    }
    .collapse_body_isactive {
      // display: block;
      width: 760px;
      // overflow: hidden;
    }
  }
  .body-right {
    width: 380px;
    display: none;
    padding: 0 5px;
    .water-warn {
      font-size: 14px;
      font-weight: bold;
      color: rgb(51, 51, 51);
      text-align: left;
      display: inline-block;
      border-left: 2px solid #2ba3fd;
      padding-left: 5px;
    }
    .right-span {
      font-weight: bold;
      font-size: 14px;
      color: rgba(51, 51, 51, 1);
      padding-right: 210px;
      border-left: 2px solid #2ba3fd;
      padding-left: 5px;
    }
  }
  .bodyright_isactive {
    display: block;
  }
  .collapse_isactive {
    width: 760px;
  }
  .order,
  .el-table td,
  .el-table th {
    padding: 4px 0;
  }
}
</style>
