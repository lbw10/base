async function operator(proxies = []) {
  const _ = lodash
  return proxies.map((p = {}) => {
    if(_.get(p, 'type') === 'vmess') {
      const name = _.get(p, 'name') || ''
      const port = _.get(p, 'port') || ''
      const type =_.get(p, 'type') || ''
      //_.set(p, 'name', port + name +'name|host') 
      _.set(p, 'ws-opts.headers.Host', 'gw.alicdn.com') 
      _.set(p, 'xudp', true) // 开 xudp clash meta 核 vmess 支持 xudp

      // _.set(p, 'udp', true) // 开 udp 一般不用在脚本里改 可以界面上开
      // _.set(p, 'tfo', true) // 开 tfo 一般不用在脚本里改 可以界面上开
    }
      return p
  })
}
