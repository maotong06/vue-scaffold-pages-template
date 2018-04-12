export default {
  name: '[%=code%]',
  data() {
    return {
      metauiJson: [%=$imports.stringify(cfg)%]
    }
  },
  async created(){
    // let res = await this.loadCfg('[%=_module.code%]', code)
    // this.metauiJson = res
    this.init_g(this.metauiJson)
  },{{if metaData.router_keepAlive}}
  activated(){
    this.init_g(this.metauiJson)
  },{{/if}}
  methods: {
    init_g() {
      document.title = this.metauiJson.title
    }
  }
}