<template>
  <div>
    <div class="container">
      <div>
        <LButton @click="click">default</LButton>
      </div>
      <div>
        <LButton type="primary">
          primary
          <!-- <template v-slot:head>
            <div>头部</div>
          </template>-->
        </LButton>
      </div>
      <div>
        <LButton type="success">success</LButton>
      </div>
      <div>
        <LButton type="info">info</LButton>
      </div>
      <div>
        <LButton type="warning">warning</LButton>
      </div>
      <div>
        <LButton type="danger">danger</LButton>
      </div>
    </div>
    <div class="container">
      <div>
        <LButton plain>default</LButton>
      </div>
      <div>
        <LButton type="primary" plain>
          primary
          <!-- <template v-slot:head>
            <div>头部</div>
          </template>-->
        </LButton>
      </div>
      <div>
        <LButton type="success" plain>success</LButton>
      </div>
      <div>
        <LButton type="info" plain>info</LButton>
      </div>
      <div>
        <LButton type="warning" plain>warning</LButton>
      </div>
      <div>
        <LButton type="danger" plain>danger</LButton>
      </div>
    </div>
    <div class="container">
      <div>
        <LButton plain round>default</LButton>
      </div>
      <div>
        <LButton type="primary" round plain>
          primary
          <!-- <template v-slot:head>
            <div>头部</div>
          </template>-->
        </LButton>
      </div>
      <div>
        <LButton type="success" round plain>success</LButton>
      </div>
      <div>
        <LButton type="info" round plain>info</LButton>
      </div>
      <div>
        <LButton type="warning" round plain>warning</LButton>
      </div>
      <div>
        <LButton type="danger" round plain>danger</LButton>
      </div>
    </div>
    <div class="container">
      <div>
        <LButton icon="icon-del" circle></LButton>
      </div>
      <div>
        <LButton type="primary" icon="icon-edit" circle>
          <!-- <template v-slot:head>
            <div>头部</div>
          </template>-->
        </LButton>
      </div>
      <div>
        <LButton type="success" icon="icon-check" circle></LButton>
      </div>
      <div>
        <LButton type="info" icon="icon-del" circle>info</LButton>
      </div>
      <div>
        <LButton type="warning" icon="icon-edit">warning</LButton>
      </div>
      <div>
        <LButton type="danger" icon="icon-check">danger</LButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  props: {},
  methods: {
    click(e) {
      console.log(e);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 20xp;
  div {
    margin: 5px;
  }
}
</style>
