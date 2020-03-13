<template>
  <div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="container" ref="getWidth">
      <div class="progress-container">
        <div
          class="progress-content"
          ref="progress"
          :style="{height:heights,background:bgColor,width:widths}"
        >
          <div class="textInside" v-if="!lineData&&showType&&!noData">{{percentage+'%'}}</div>
        </div>
      </div>
      <div class="percentage" v-if="!lineData&&!showType&&!noData">{{percentage+'%'}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    bgColor: {
      type: String,
      default: "rgb(64, 158, 255)"
    },
    height: {
      type: String / Number,
      default: "6"
    },
    isAnimate: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number / String,
      default: 3000
    },
    noData: {
      type: Boolean,
      default: false
    },
    lineData: {
      type: Boolean,
      default: false
    },
    showType: {
      type: Number / String,
      default: 0
    }
  },
  methods: {},
  mounted() {
    if (this.isAnimate) {
      let dom = this.$refs.progress;
      let withs = this.$refs.getWidth.offsetWidth * this.percentage * 0.01;
      dom.style.transition = `width ${this.duration}ms ease`;
      dom.style.width = withs + "px";
    }
  },
  watch: {},
  computed: {
    heights() {
      if (this.showType) {
        return this.height > 12 ? this.height + "px" : "12px";
      } else {
        return this.height + "px";
      }
    },
    widths() {
      if (this.isAnimate) {
        return;
      } else {
        return this.percentage + "%";
      }
    }
  }
};
</script>

<style scoped lang='scss'>
.content {
  display: flex;
  justify-content: flex-end;

  align-items: center;
  margin-bottom: 10px;
  color: #666;
}
.container {
  display: flex;
  align-items: center;
  .progress-container {
    width: 100%;
    background: #ebeef5;
    border-radius: 100px;

    .progress-content {
      width: 0;
      display: flex;
      justify-content: flex-end;
      border-radius: 100px;

      .textInside {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        margin-right: 5px;
        font-size: 12px;
      }
    }
  }
  .percentage {
    margin-left: 6px;
    font-size: 12px;
    width: 30px;
  }
}
</style>