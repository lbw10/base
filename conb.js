async function operator(proxies = []) {
  const _ = lodash
  return proxies.map((p = {}) => {
    if(_.get(p, 'type') === 'vmess') {
      if (_.get(p, 'network') === 'ws') {
        if (_.get(p, 'tls') === true) {
          _.set(p, 'ws-opts.headers.Host', 'api5-normal-c-lq.amemv.com')
          _.set(p, 'sni', 'api5-normal-c-lq.amemv.com')
        }
        else {
          _.set(p, 'ws-opts.headers.Host', 'api5-normal-c-lq.amemv.com')
        }
      }
      if (_.get(p, 'network') === 'http') {
        _.set(p, 'http-opts.headers.Host', 'api5-normal-c-lq.amemv.com') 
        _.set(p, 'name', 'tcp') 
      }
    }
    if(_.get(p, 'type') === 'trojan') {
      _.set(p, 'skip-cert-verify', true)
      _.set(p, 'sni', 'api5-normal-c-lq.amemv.com')
    }
    return p
  })
}
