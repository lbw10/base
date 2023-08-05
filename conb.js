async function operator(proxies = []) {
  const _ = lodash
  return proxies.map((p = {}) => {
    if(_.get(p, 'type') === 'vmess') {
      if (_.get(p, 'network') === 'ws') {
        _.set(p, 'ws-opts.headers.Host', 'p11.douyinpic.com')
        //_.set(p, 'name', 'ws' + name +'name')
      }
      if (_.get(p, 'network') === 'http'){
        _.set(p, 'http-opts.headers.Host', 'p11.douyinpic.com') 
        _.set(p, 'name', 'tcp') 
      }
      //const name = _.get(p, 'name') || ''
      //const port = _.get(p, 'port') || ''     
      //_.set(p, 'name', port + name +'name') 
      //_.set(p, 'xudp', true) // 开 xudp clash meta 核 vmess 支持 xudp
      // _.set(p, 'udp', true) // 开 udp 一般不用在脚本里改 可以界面上开
      // _.set(p, 'tfo', true) // 开 tfo 一般不用在脚本里改 可以界面上开
    }
    if(_.get(p, 'type') === 'trojan') {
      //const name = _.get(p, 'name') || '' 
      //const port = _.get(p, 'port') || ''
      //_.set(p, 'name', port + name+'name')
      _.set(p, 'skip-cert-verify', true)  // 改跳过证书验证
      _.set(p, 'sni', 'p11.douyinpic.com') // 改混淆
      // _.set(p, 'udp', true) // 开 udp 一般不用在脚本里改 可以界面上开
      // _.set(p, 'tfo', true) // 开 tfo 一般不用在脚本里改 可以界面上开
    }
      return p
  })
}
