function _0x5b3a(){const _0x5dcf7a=['fragment','188.114.99.18#优选IP-047','172.67.163.14#优选IP-108','CF_ACCOUNT_ID','172.65.127.225#优选IP-034','has','vless=','104.19.169.53#优选IP-061','servername','preferredDomains','104.21.215.255#优选IP-247','xhttp-opts','2c0f:f248::/32','104.18.119.34#优选IP-016','已保存并生效','\x20\x20\x20\x20\x20\x20path:\x20','104.25.161.217#优选IP-140','https://cloudflare-dns.com/dns-query?name=','cf.0sm.com','104.16.45.249#优选IP-287','NaN','域名-','SOCKS5\x20连接失败\x20码','done','\x0a#\x20====================\x20锚点配置\x20====================\x0a#\x20代理提供者模板\x20-\x20订阅源基础配置\x0a\x0a#\x20节点筛选正则表达式\x20-\x20仅保留常用地区\x0aFilterHK:\x20&FilterHK\x20\x27^(?=.*(?i)(港|🇭🇰|HK|Hong|HKG))(?!.*5x).*$\x27\x0aFilterSG:\x20&FilterSG\x20\x27^(?=.*(?i)(坡|🇸🇬|SG|Sing|SIN|XSP))(?!.*5x).*$\x27\x0aFilterJP:\x20&FilterJP\x20\x27^(?=.*(?i)(日|🇯🇵|JP|Japan|NRT|HND|KIX|CTS|FUK))(?!.*(尼日利亚|5x)).*$\x27\x0aFilterUS:\x20&FilterUS\x20\x27^(?=.*(?i)(美|🇺🇸|US|USA|JFK|SJC|LAX|ORD|ATL|DFW|SFO|MIA|SEA|IAD))(?!.*(Plus|Australia|5x)).*$\x27\x0a#\x20注意：🇼🇸\x20是萨摩亚旗帜，不是台湾，已移除，避免误匹配\x0aFilterTW:\x20&FilterTW\x20\x27^(?=.*(?i)(台|🇹🇼|TW|tai|TPE|TSA|KHH))(?!.*5x).*$\x27\x0a\x0a#\x20====================\x20监听器\x20====================\x0alisteners:\x0a\x20\x20#\x20Shadowsocks监听器\x20-\x20远程连接家庭网络，端口和密码使用时请修改（默认密码请勿用于公网）\x0a\x20\x20-\x20{name:\x20SS-IN,\x20\x20type:\x20shadowsocks,\x20listen:\x20\x27::\x27,\x20port:\x2010000,\x20udp:\x20true,\x20password:\x20Xf3#Lp9WqZ,\x20cipher:\x20aes-256-gcm}\x0a\x20\x20#\x20Mixed监听器\x20-\x20分地区专用端口\x20玩法：本地浏览器插件或手机APP配置代理，实现分地区访问\x0a\x20\x20-\x20{name:\x20MIXED-SG,\x20type:\x20mixed,\x20port:\x2050000,\x20proxy:\x20新加坡节点}\x0a\x20\x20-\x20{name:\x20MIXED-US,\x20type:\x20mixed,\x20port:\x2050001,\x20proxy:\x20美国节点}\x0a\x20\x20-\x20{name:\x20MIXED-TW,\x20type:\x20mixed,\x20port:\x2050002,\x20proxy:\x20台湾节点}\x0a\x20\x20-\x20{name:\x20MIXED-HK,\x20type:\x20mixed,\x20port:\x2050003,\x20proxy:\x20香港节点}\x0a\x20\x20-\x20{name:\x20MIXED-JP,\x20type:\x20mixed,\x20port:\x2050004,\x20proxy:\x20日本节点}\x0a\x20\x20-\x20{name:\x20MIXED-AL,\x20type:\x20mixed,\x20port:\x2050007,\x20proxy:\x20一键连接}\x0a\x0a#\x20====================\x20核心配置\x20====================\x0amode:\x20rule\x0aport:\x207890\x0asocks-port:\x207891\x0aredir-port:\x207892\x0amixed-port:\x207893\x0atproxy-port:\x207895\x0aipv6:\x20true\x0aallow-lan:\x20true\x0aunified-delay:\x20true\x0atcp-concurrent:\x20true\x0alog-level:\x20warning\x0abind-address:\x20\x27*\x27\x0afind-process-mode:\x20\x27always\x27\x0akeep-alive-interval:\x2015\x0akeep-alive-idle:\x20600\x0a\x0a#\x20认证配置（默认凭据请务必修改！）\x0aauthentication:\x0a\x20\x20-\x20mihomo:yyds666\x0askip-auth-prefixes:\x0a\x20\x20-\x20192.168.1.0/24\x0a\x20\x20-\x20192.168.31.0/24\x0a\x20\x20-\x20192.168.100.0/24\x0a\x20\x20-\x20127.0.0.1/8\x0a\x0a#\x20实验性功能\x0aexperimental:\x0a\x20\x20quic-go-disable-gso:\x20true\x0a\x0a#\x20管理面板配置\x0aexternal-ui-url:\x20https://github.com/Zephyruso/zashboard/releases/latest/download/dist.zip\x0aexternal-ui-name:\x20zashboard\x0aexternal-ui:\x20ui\x0aexternal-controller:\x20127.0.0.1:9090\x0asecret:\x20yyds666\x20\x20\x20\x20#\x20请修改为自定义密钥\x0a#\x20允许网页面板跨域访问\x0aexternal-controller-cors:\x0a\x20\x20allow-origins:\x0a\x20\x20\x20\x20-\x20\x22*\x22\x0a\x20\x20allow-private-network:\x20true\x0a\x0a#\x20配置存储\x0aprofile:\x0a\x20\x20store-selected:\x20true\x0a\x20\x20store-fake-ip:\x20true\x0a\x0a#\x20流量嗅探\x0asniffer:\x0a\x20\x20enable:\x20true\x0a\x20\x20force-dns-mapping:\x20true\x20\x20\x20#\x20强制\x20DNS\x20映射，提高分流准确度\x0a\x20\x20parse-pure-ip:\x20true\x20\x20\x20\x20\x20\x20\x20#\x20解析纯\x20IP\x20连接\x0a\x20\x20override-destination:\x20true\x0a\x20\x20sniff:\x0a\x20\x20\x20\x20HTTP:\x0a\x20\x20\x20\x20\x20\x20ports:\x20[80,\x208080-8880]\x0a\x20\x20\x20\x20TLS:\x0a\x20\x20\x20\x20\x20\x20ports:\x20[443,\x208443]\x0a\x20\x20\x20\x20QUIC:\x0a\x20\x20\x20\x20\x20\x20ports:\x20[443,\x208443]\x0a\x20\x20skip-domain:\x0a\x20\x20\x20\x20-\x20\x22+.push.apple.com\x22\x0a\x0a#\x20TUN模式配置\x0atun:\x0a\x20\x20enable:\x20false\x0a\x20\x20stack:\x20mixed\x0a\x20\x20mtu:\x201480\x0a\x20\x20dns-hijack:\x0a\x20\x20\x20\x20-\x20\x22any:53\x22\x0a\x20\x20\x20\x20-\x20\x22tcp://any:53\x22\x0a\x20\x20udp-timeout:\x20300\x0a\x20\x20auto-route:\x20true\x0a\x20\x20strict-route:\x20true\x0a\x20\x20auto-redirect:\x20true\x0a\x20\x20auto-detect-interface:\x20true\x0a\x20\x20#\x20提示：系统级防泄露的最强手段是开启\x20TUN（自动劫持全部\x20DNS\x20流量）；\x0a\x20\x20#\x20不开\x20TUN\x20时，请把系统\x20/\x20LAN\x20设备的\x20DNS\x20指向\x20127.0.0.1:53（本机）或本机局域网\x20IP:53。\x0a\x0ahosts:\x0a\x20\x20miwifi.com:\x20192.168.31.2\x0a\x20\x20\x22epdg.epc.mnc010.mcc234.pub.3gppnetwork.org\x22:\x20[87.194.8.8,\x2087.194.88.8,\x2087.194.89.8,\x2087.194.9.8]\x0a\x20\x20services.googleapis.cn:\x20services.googleapis.com\x0a\x20\x20cn.bing.com:\x20www4.bing.com\x0a\x0a\x0adns:\x0a\x20\x20enable:\x20true\x0a\x20\x20listen:\x200.0.0.0:53\x20\x20\x20\x20\x20\x20\x20\x20#\x20本机\x20/\x20LAN\x20设备可把\x20DNS\x20指向此地址，避免走运营商\x20DNS\x0a\x20\x20ipv6:\x20true\x0a\x20\x20prefer-h3:\x20false\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20respect-rules\x20下官方不推荐\x20DoH3；且\x20QUIC\x20已被规则拦截\x0a\x20\x20cache-algorithm:\x20arc\x20\x20\x20\x20\x20\x20#\x20性能更优的\x20ARC\x20缓存算法\x0a\x20\x20cache-size:\x204096\x0a\x20\x20enhanced-mode:\x20fake-ip\x0a\x20\x20fake-ip-range:\x20198.18.0.1/16\x0a\x20\x20fake-ip-filter:\x0a\x20\x20\x20\x20-\x20\x22+.lan\x22\x0a\x20\x20\x20\x20-\x20\x22+.local\x22\x0a\x20\x20\x20\x20-\x20\x22+.localhost\x22\x0a\x20\x20\x20\x20-\x20\x22+.home.arpa\x22\x0a\x20\x20\x20\x20-\x20\x22+.internal\x22\x0a\x20\x20\x20\x20#\x20系统连通性检测（防止\x20fake-ip\x20导致“无网络”判断，回退\x20ISP\x20DNS\x20造成泄露）\x0a\x20\x20\x20\x20-\x20\x22+.msftconnecttest.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.msftncsi.com\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20通配已覆盖\x20dns.msftncsi.com\x0a\x20\x20\x20\x20-\x20\x22captive.apple.com\x22\x0a\x20\x20\x20\x20-\x20\x22connectivitycheck.gstatic.com\x22\x0a\x20\x20\x20\x20-\x20\x22detectportal.firefox.com\x22\x0a\x20\x20\x20\x20#\x20时间同步\x0a\x20\x20\x20\x20-\x20\x22time.nist.gov\x22\x0a\x20\x20\x20\x20-\x20\x22+.pool.ntp.org\x22\x0a\x20\x20\x20\x20-\x20\x22time.*.com\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20通配已覆盖\x20time.windows.com\x0a\x20\x20\x20\x20-\x20\x22ntp.*.com\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20通配已覆盖\x20ntp.ubuntu.com\x0a\x20\x20\x20\x20#\x20运营商\x20Wi-Fi\x20登录页\x0a\x20\x20\x20\x20-\x20\x22+.cmpassport.com\x22\x0a\x20\x20\x20\x20-\x20\x22id6.me\x22\x0a\x20\x20\x20\x20-\x20\x22open.e.189.cn\x22\x0a\x20\x20\x20\x20-\x20\x22mdn.open.wo.cn\x22\x0a\x20\x20\x20\x20-\x20\x22opencloud.wostore.cn\x22\x0a\x20\x20\x20\x20-\x20\x22auth.wosms.cn\x22\x0a\x20\x20\x20\x20-\x20\x22+.10099.com.cn\x22\x0a\x20\x20\x20\x20#\x20原配置保留项\x0a\x20\x20\x20\x20-\x20\x22+.market.xiaomi.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.pub.3gppnetwork.org\x22\x0a\x20\x20\x20\x20-\x20\x22+.push.apple.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.bing.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.miwifi.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.docker.io\x22\x0a\x20\x20\x20\x20#\x20国内应用登录（+.qq.com\x20已覆盖\x20localhost.ptlogin2.qq.com）\x0a\x20\x20\x20\x20-\x20\x22+.qq.com\x22\x0a\x20\x20\x20\x20#\x20直连\x20/\x20国内类规则集：返回真实\x20IP\x0a\x20\x20\x20\x20-\x20rule-set:Direct\x0a\x20\x20\x20\x20-\x20rule-set:Private\x0a\x20\x20\x20\x20-\x20rule-set:China\x0a\x20\x20use-hosts:\x20true\x0a\x20\x20respect-rules:\x20true\x0a\x20\x20#\x20引导用\x20DNS（解析\x20DoH/DoT\x20服务器自身的域名），必须是\x20IP\x0a\x20\x20default-nameserver:\x0a\x20\x20\x20\x20-\x20223.5.5.5\x0a\x20\x20\x20\x20-\x20119.29.29.29\x0a\x20\x20#\x20默认解析：未命中\x20nameserver-policy\x20的域名（国内\x20DoH，直连）\x0a\x20\x20nameserver:\x0a\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20#\x20直连出口的解析\x0a\x20\x20direct-nameserver:\x0a\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20#\x20解析代理节点域名（防套娃\x20/\x20防循环，用国内直连可达的\x20DoH）\x0a\x20\x20proxy-server-nameserver:\x0a\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20nameserver-policy:\x0a\x20\x20\x20\x20#\x20广告域名直接返回空应答\x0a\x20\x20\x20\x20\x22rule-set:Advertising,AWAvenueAds\x22:\x20rcode://success\x0a\x20\x20\x20\x20#\x20直连类：国内\x20DoH（微软已并入直连，微软域名走国内解析后直连）\x0a\x20\x20\x20\x20\x22rule-set:Direct,Private,China,Microsoft\x22:\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20\x20\x20#\x20走代理类：国外\x20DoH（连接本身经代理隧道，不直连暴露查询）\x0a\x20\x20\x20\x20\x22rule-set:AI,Telegram,Twitter,SocialMedia,Netflix,YouTube,Spotify,TikTok,disney,Google,Proxy\x22:\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://dns.google/dns-query\x22\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://cloudflare-dns.com/dns-query\x22\x0a\x0a#\x20====================\x20代理策略组（9\x20个可见\x20+\x206\x20个隐藏自动子组）\x20====================\x0aproxy-groups:\x0a\x20\x20#\x20主入口：默认自动选择，可手动切换各地区\x20/\x20故障转移\x20/\x20全部节点\x20/\x20直接连接\x0a\x20\x20-\x20{name:\x20一键连接,\x20\x20\x20\x20\x20type:\x20select,\x20proxies:\x20[自动选择,\x20故障转移,\x20香港节点,\x20台湾节点,\x20日本节点,\x20美国节点,\x20新加坡节点,\x20全部节点,\x20直接连接],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Static.png}\x0a\x20\x20#\x20自动选择：隐藏（面板不可手动选择），纯自动优选延时最低节点；故障转移：按序自动切换\x0a\x20\x20-\x20{name:\x20自动选择,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20hidden:\x20true,\x20empty-fallback:\x20REJECT,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20故障转移,\x20\x20\x20\x20\x20type:\x20fallback,\x20proxies:\x20[香港节点,\x20台湾节点,\x20日本节点,\x20美国节点,\x20新加坡节点,\x20全部节点],\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/ULB.png}\x0a\x20\x20#\x20常用地区节点组（select：默认选中“XX自动”=自动优选该地区最快节点，也可手动指定单个节点）\x0a\x20\x20-\x20{name:\x20香港节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterHK,\x20proxies:\x20[香港自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Hong_Kong.png}\x0a\x20\x20-\x20{name:\x20台湾节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterTW,\x20proxies:\x20[台湾自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Taiwan.png}\x0a\x20\x20-\x20{name:\x20日本节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterJP,\x20proxies:\x20[日本自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Japan.png}\x0a\x20\x20-\x20{name:\x20美国节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterUS,\x20proxies:\x20[美国自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/United_States.png}\x0a\x20\x20-\x20{name:\x20新加坡节点,\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterSG,\x20proxies:\x20[新加坡自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Singapore.png}\x0a\x20\x20#\x20全部节点（手动挑选任意节点；首个选项“自动选择”=全部节点中最快）\x0a\x20\x20-\x20{name:\x20全部节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20proxies:\x20[自动选择],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Global.png}\x0a\x20\x20#\x20各地区自动优选子组（隐藏，作为各地区分组内的“自动选择”选项）\x0a\x20\x20-\x20{name:\x20香港自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterHK,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20台湾自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterTW,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20日本自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterJP,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20美国自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterUS,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20新加坡自动,\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterSG,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20#\x20直连分组（放在最下方）\x0a\x20\x20-\x20{name:\x20直接连接,\x20\x20\x20\x20\x20type:\x20select,\x20proxies:\x20[DIRECT],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Direct.png}\x0a\x0a#\x20====================\x20规则路由\x20====================\x0arules:\x0a\x20\x20#\x20广告拦截（常用：直接拒绝；如需临时放行可改为一键连接）\x0a\x20\x20-\x20RULE-SET,Tracking,REJECT\x0a\x20\x20-\x20RULE-SET,AWAvenueAds,REJECT\x0a\x20\x20-\x20RULE-SET,Advertising,REJECT\x0a\x0a\x20\x20#\x20DNS\x20服务器域名：解析通道固定，避免\x20DNS\x20流量走错路径（防泄露关键）\x0a\x20\x20-\x20DOMAIN-SUFFIX,alidns.com,直接连接\x0a\x20\x20-\x20DOMAIN-SUFFIX,doh.pub,直接连接\x0a\x20\x20-\x20DOMAIN,dns.google,一键连接\x0a\x20\x20-\x20DOMAIN,cloudflare-dns.com,一键连接\x0a\x0a\x20\x20#\x20大陆直连优先（置于国外服务规则之前：大陆应用一律直连，不被国外服务规则集抢先命中）\x0a\x20\x20-\x20RULE-SET,Private,直接连接\x0a\x20\x20-\x20RULE-SET,Direct,直接连接\x0a\x20\x20-\x20RULE-SET,Download,直接连接\x0a\x20\x20-\x20RULE-SET,AppleCN,直接连接\x0a\x20\x20-\x20RULE-SET,Microsoft,直接连接\x20\x20\x20\x20\x20\x20\x20\x20#\x20微软全家桶直连（Office\x20/\x20OneDrive\x20/\x20Windows\x20更新\x20/\x20Teams\x20/\x20Xbox\x20等）\x0a\x20\x20-\x20RULE-SET,China,直接连接\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20国内域名直连\x0a\x20\x20#\x20阻止走代理的\x20QUIC（强制回退\x20TCP，避免\x20QUIC\x20绕过代理\x20/\x20被干扰）。\x0a\x20\x20#\x20放在直连规则之后：直连\x20QUIC（大陆\x20/\x20微软\x20/\x20苹果）不受影响。如需\x20Telegram\x20语音等\x20UDP，可删除此行。\x0a\x20\x20-\x20AND,((DST-PORT,443),(NETWORK,UDP)),REJECT\x0a\x0a\x20\x20#\x20常用国外服务（统一走一键连接）\x0a\x20\x20-\x20RULE-SET,AI,一键连接\x0a\x20\x20-\x20RULE-SET,Telegram,一键连接\x0a\x20\x20-\x20RULE-SET,Twitter,一键连接\x0a\x20\x20-\x20RULE-SET,SocialMedia,一键连接\x0a\x20\x20-\x20RULE-SET,Netflix,一键连接\x0a\x20\x20-\x20RULE-SET,YouTube,一键连接\x0a\x20\x20-\x20RULE-SET,Spotify,一键连接\x0a\x20\x20-\x20RULE-SET,TikTok,一键连接\x0a\x20\x20-\x20RULE-SET,disney,一键连接\x0a\x20\x20-\x20RULE-SET,Google,一键连接\x0a\x20\x20-\x20RULE-SET,github,一键连接\x0a\x20\x20-\x20RULE-SET,Proxy,一键连接\x0a\x0a\x20\x20#\x20IP规则\x0a\x20\x20-\x20RULE-SET,PrivateIP,直接连接,no-resolve\x0a\x20\x20-\x20RULE-SET,TelegramIP,一键连接,no-resolve\x0a\x20\x20-\x20RULE-SET,ProxyIP,一键连接,no-resolve\x0a\x20\x20-\x20RULE-SET,ChinaIP,直接连接,no-resolve\x0a\x0a\x20\x20#\x20大陆\x20IP\x20兜底直连：覆盖规则集未收录的域名\x20/\x20纯\x20IP\x20连接的大陆应用（GEOIP\x20库覆盖面更全）\x0a\x20\x20-\x20GEOIP,CN,直接连接,no-resolve\x0a\x0a\x20\x20#\x20兜底规则：其余（国外）走一键连接\x0a\x20\x20-\x20MATCH,一键连接\x0a\x0a#\x20====================\x20规则集\x20====================\x0a#\x20规则集行为模板\x0aBehaviorDN:\x20&BehaviorDN\x20{type:\x20http,\x20behavior:\x20domain,\x20format:\x20mrs,\x20interval:\x2086400}\x0aBehaviorDY:\x20&BehaviorDY\x20{type:\x20http,\x20behavior:\x20domain,\x20format:\x20yaml,\x20interval:\x2086400}\x0aBehaviorIP:\x20&BehaviorIP\x20{type:\x20http,\x20behavior:\x20ipcidr,\x20format:\x20mrs,\x20interval:\x2086400}\x0aClassicalYaml:\x20&ClassicalYaml\x20{type:\x20http,\x20behavior:\x20classical,\x20interval:\x203600,\x20format:\x20yaml,\x20proxy:\x20DIRECT}\x0aBehaviorCL:\x20&BehaviorCL\x20{type:\x20http,\x20behavior:\x20classical,\x20interval:\x2086400,\x20format:\x20yaml,\x20proxy:\x20DIRECT}\x20\x20\x20#\x20经典规则集（blackmatrix7\x20等，DOMAIN/DOMAIN-SUFFIX/DOMAIN-KEYWORD/PROCESS-NAME）\x0a\x0a#\x20规则提供者（仅保留常用）\x0arule-providers:\x0a\x20\x20#\x20广告\x0a\x20\x20Tracking:\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Tracking.mrs}\x0a\x20\x20Advertising:\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Advertising.mrs}\x0a\x20\x20AWAvenueAds:\x20\x20\x20\x20{<<:\x20*BehaviorDY,\x20url:\x20https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main/Filters/AWAvenue-Ads-Rule-Clash.yaml}\x0a\x20\x20#\x20直连\x20/\x20国内\x0a\x20\x20Direct:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Direct.mrs}\x0a\x20\x20Private:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Private.mrs}\x0a\x20\x20Download:\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Download.mrs}\x0a\x20\x20AppleCN:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/AppleCN.mrs}\x0a\x20\x20China:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorCL,\x20url:\x20https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/ChinaMaxNoIP/ChinaMaxNoIP_No_Resolve.yaml}\x20\x20\x20#\x20大陆直连全量：ChinaMaxNoIP（11万+\x20域名，含大陆可达国际服务），每日更新\x0a\x20\x20#\x20常用国外服务\x0a\x20\x20AI:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/AI.mrs}\x0a\x20\x20Telegram:\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Telegram.mrs}\x0a\x20\x20Twitter:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Twitter.mrs}\x0a\x20\x20SocialMedia:\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/SocialMedia.mrs}\x0a\x20\x20Netflix:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Netflix.mrs}\x0a\x20\x20YouTube:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/YouTube.mrs}\x0a\x20\x20Google:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Google.mrs}\x0a\x20\x20Microsoft:\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorCL,\x20url:\x20https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Microsoft/Microsoft.yaml}\x20\x20\x20#\x20微软全家桶全量：blackmatrix7（Office/OneDrive/Xbox/Teams/Skype/Bing/Azure\x20等）\x0a\x20\x20Proxy:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Proxy.mrs}\x0a\x20\x20#\x20媒体（DustinWin）\x0a\x20\x20Spotify:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/spotify.mrs}\x0a\x20\x20TikTok:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/tiktok.mrs}\x0a\x20\x20disney:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/disney.mrs}\x0a\x20\x20#\x20GitHub\x0a\x20\x20github:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*ClassicalYaml,\x20url:\x20https://rule.kelee.one/Clash/GitHub.yaml}\x0a\x20\x20#\x20IP规则\x0a\x20\x20PrivateIP:\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/Private.mrs}\x0a\x20\x20TelegramIP:\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/Telegram.mrs}\x0a\x20\x20ProxyIP:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/Proxy.mrs}\x0a\x20\x20ChinaIP:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/China.mrs}\x0a\x0a#\x20====================\x20EOF\x20====================\x0a\x0a','172.65.11.191#优选IP-122','STR','131.0.72.0/22','max',',\x20ws-headers=Host:','CHINATELECOM','182682','ips','probeAlive','104.18.26.28#优选IP-168','104.18.18.214#优选IP-172','&host=','headerLength','enableVless','trim','speed.cloudflare.com','_quotaCap','18WqHFyK','polling','197.234.240.0/22','104.27.4.144#优选IP-125','Proxy-Authorization:\x20Basic\x20','104.17.169.109#优选IP-217','162.159.228.231#优选IP-260','\x20\x20\x20\x20alpn:\x20[h2]','104.25.36.200#优选IP-151','104.16.223.195#优选IP-056','&path=','chacha20-poly1305','172.65.45.102#优选IP-250','aes-128gcm','|rf','马来西亚','微测网\x20优选域名','includes',',\x20ws=true,\x20ws-path=','https://8.8.8.8/dns-query','find','trojan','headers','188.114.98.27#优选IP-244','104.27.113.151#优选IP-101','stash','104.24.25.178#优选IP-284','https://bestcf.pages.dev/random-region/HK/100.txt\x0ahttps://bestcf.pages.dev/random-region/TW/100.txt\x0ahttps://bestcf.pages.dev/random-region/JP/100.txt\x0ahttps://bestcf.pages.dev/random-region/SG/100.txt\x0ahttps://bestcf.pages.dev/random-region/US/100.txt\x0ahttps://bestcf.pages.dev/random-region/KR/100.txt','104.21.61.179#优选IP-078','PAICNI/CFNext','text','TTL','162.159.136.73#优选IP-040','104.18.37.92#优选IP-024','Answer','MUC','162.159.26.248#优选IP-252','PROBE_ALIVE','172.67.255.83#优选IP-114','encode','104.18.28.48#优选IP-156','tokenish','查询失败:\x20','104.17.44.9','162.159.134.174#优选IP-227',',\x20obfs-uri=','162.159.241.11#优选IP-204','优选地址','HKG','\x20=\x20trojan,\x20','all','quota','188.114.96.1#优选IP-011','prefDomain','CF\x20API\x20限流(429)，请\x2015\x20分钟后再试','SS\x20AEAD\x20数据过短','latest','190.93.240.0/20','cpuTimeP50','173.245.48.0/20','SEL','viewer','timeout','SOCKS5\x20服务器要求认证但未提供凭据','\x20\x20\x20\x20\x20\x20x-padding-header:\x20','encryption=none&',',\x20obfs-host=','arrayBuffer','104.16.238.98#优选IP-094','UNICOM','Not\x20Found','ECH','162.159.192.111#优选IP-232','104.21.7.133#优选IP-226','cloudflare.9jy.cc','172.67.127.122#优选IP-237','errors','104.25.113.22#优选IP-243','User-Agent','172.65.3.67#优选IP-181','104.24.168.96#优选IP-130','list','waitUntil','104.25.33.126#优选IP-238','api','uuid','&type=','104.25.141.168#优选IP-042','103.21.244.0/22','104.18.173.224#优选IP-131','requests','now','presetErr','cloudflare-ech.com','admin',',\x20username=','size','104.19.78.144#优选IP-184','104.20.15.15','握手头超过\x2064KB，关闭连接','getUint16','_ctx','&ech=','\x20\x20\x20\x20servername:\x20','104.17.99.0#优选IP-143','优选\x20IP\x20列表','host','https://bestcf.pages.dev/random-region/US/100.txt','优选IP-S','线路名称','188.114.97.0#优选IP-205','://','172.67.174.143#优选IP-176','releaseLock','\x20\x20\x20\x20server:\x20','ALPN','LHR','104.18.185.40#优选IP-041','104.17.118.180#优选IP-090','\x20\x20\x20\x20tls:\x20true','172.67.71.106#优选IP-294','104.18.40.93#优选IP-023','preferredIPs','104.19.214.25#优选IP-073','any','NRT','issued','shadowrocket','104.25.129.238#优选IP-180','text/plain','server','104.19.88.253#优选IP-039','gbk','2803:f800::/32','\x20\x20\x20\x20\x20\x20mode:\x20','188.114.98.19#优选IP-154','optimizer','setUint16','xhttp\x20代理错误:\x20','send','162.159.235.27#优选IP-072','indexOf','104.25.246.123#优选IP-043','value','prefIp','cf.zhetengsha.eu.org','162.159.44.214#优选IP-032','172.65.35.169#优选IP-092','https://223.5.5.5/dns-query','Upgrade','104.24.46.127#优选IP-200','2437038THoKQe','103.22.200.0/22','104.18.255.187#优选IP-050','104.17.127.180#优选IP-001','x-padding-obfs-mode','104.16.88.7','SOCKS5\x20握手失败','/main/','ceil','encryption=none','_skipIssued','some','tlsOnly','104.16.128.11','subUrl','toString','trojan://','security=none&host=','close','8.889288.xyz','罗马尼亚','172.65.173.221#优选IP-051','mozilla','104.24.2.253#优选IP-077','HostMonit\x20优选','预设源:\x20','saas.sin.fan','104.24.178.200#优选IP-210','block','<tr','104.25.197.107#优选IP-105','172.64.145.202#优选IP-088','quantumultx','signal','type','162.159.236.19#优选IP-255','意大利','162.159.5.175#优选IP-015','cdn.tzpro.xyz','198.41.128.0/17','replace','stream-one','720kxIkex','x-padding-method','get','cf.090227.xyz','不支持的\x20SS\x20加密方式:\x20','body','2606:4700::','add','/login?setup=1&next=','104.24.51.58#优选IP-138','104.24.49.39#优选IP-299','cf.zerone-cdn.pp.ua','ws-opts','Mozilla/5.0\x20(CFNext)','https://www.wetest.vip/page/cloudflare/cname.html','104.24.230.213#优选IP-109','104.16.0.0/13','obfuscated','104.25.181.74#优选IP-209','random','104.19.191.31','菲律宾','vless://','162.159.6.246#优选IP-199','info','\x20\x20\x20\x20\x20\x20host:\x20','update','141.101.64.0/18','162.159.228.164#优选IP-295','http:','selector','string','104.24.184.158#优选IP-123','172.67.229.44#优选IP-137','proxyip.se.cmliussss.net','kind','CHINAMOBILE','&security=none','#!MANAGED-CONFIG\x0a[General]\x0aloglevel\x20=\x20notify\x0adns-server\x20=\x20223.5.5.5,\x20119.29.29.29\x0a\x0a[Proxy]\x0a','|raw','172.67.85.54#优选IP-300','https://cf.090227.xyz/ip.164746.xyz','href','?name=','binaryType','_preamble','toUpperCase','IPv6','next','%20','104.25.0.1','104.16.77.112#优选IP-214','104.18.43.224#优选IP-022','104.25.73.92#优选IP-187','104.16.218.231#优选IP-155','葡萄牙','stringify','luma_auth=','YXURL','HEL','https://','172.65.64.7#优选IP-037','VLESS\x20头部过短','floor','\x20\x20\x20\x20port:\x20','104.16.132.229#优选IP-007','下载速度','104.19.143.220#优选IP-256','readable','104.18.28.140#优选IP-095','新西兰','188.114.98.144#优选IP-046','proxyip.us.cmliussss.net','catch','ADMIN','bestcf','importKey','https://raw.githubusercontent.com/','104.17.127.106#优选IP-048','104.18.34.34','🐟\x20漏网之鱼','104.25.143.238#优选IP-059','104.25.101.186#优选IP-057','俄罗斯','accept','today','sing-box','104.27.23.242#优选IP-150','104.18.211.8#优选IP-193',';\x20charset=utf-8','104.24.46.107#优选IP-274','新加坡','172.66.157.150#优选IP-166','172.67.189.246#优选IP-115','keyLen','\x20\x20\x20\x20sni:\x20','endsWith','application/json','172.65.45.248#优选IP-290','172.65.139.108#优选IP-224','application/octet-stream','proxyip.gb.cmliussss.net','\x20HTTP/1.1\x0d\x0aHost:\x20','104.17.107.217#优选IP-133','162.159.14.18#优选IP-136','POST','连接被关闭','surfboard','\x20\x20\x20\x20ws-opts:','土耳其','104.16.125.96#优选IP-004','customErr','104.16.124.96#优选IP-003','\x20\x20\x20\x20client-fingerprint:\x20chrome','https://bestcf.pages.dev/random-region/KR/100.txt','104.16.91.33#优选IP-161','\x20\x20\x20\x20ech-opts:','enable','application/dns-json','104.17.160.131#优选IP-194','no-store','proxyip.de.cmliussss.net','104.25.62.39#优选IP-265','连接超时（SYN\x20被静默丢弃）','\x0a<!DOCTYPE\x20html>\x0a<html\x20lang=\x22zh-CN\x22\x20data-theme=\x22dark\x22>\x0a<head>\x0a<meta\x20charset=\x22utf-8\x22>\x0a<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1\x22>\x0a<title>CFNext\x20·\x20首次设置</title>\x0a<link\x20rel=\x22icon\x22\x20href=\x22data:image/svg+xml,%3Csvg\x20xmlns=\x27http://www.w3.org/2000/svg\x27\x20viewBox=\x270\x200\x2024\x2024\x27%3E%3Crect\x20x=\x273\x27\x20y=\x273\x27\x20width=\x2718\x27\x20height=\x2718\x27\x20rx=\x275\x27\x20fill=\x27%23f6821f\x27/%3E%3Cpath\x20d=\x27M8\x2015V9l8\x206V9\x27\x20stroke=\x27%230d131b\x27\x20stroke-width=\x272\x27\x20fill=\x27none\x27\x20stroke-linecap=\x27round\x27\x20stroke-linejoin=\x27round\x27/%3E%3C/svg%3E\x22>\x0a<style>\x0a*{box-sizing:border-box;margin:0;padding:0}\x0a:root{--bg:#0b0f14;--card:#131a23;--border:#243041;--text:#e8eef6;--dim:#8fa3ba;--accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13)}\x0a[data-theme=\x22light\x22]{--bg:#f3f5f9;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);--err:#d94848;--err-dim:rgba(217,72,72,.10)}\x0abody{background:var(--bg);color:var(--text);font-family:\x22PingFang\x20SC\x22,\x22Microsoft\x20YaHei\x22,\x22Segoe\x20UI\x22,system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}\x0a.box{width:340px;max-width:100%;background:var(--card);border:1px\x20solid\x20var(--border);border-radius:16px;padding:30px\x2028px;box-shadow:0\x2018px\x2050px\x20rgba(0,0,0,.25)}\x0a[data-theme=\x22light\x22]\x20.box{box-shadow:0\x2014px\x2040px\x20rgba(30,45,70,.10)}\x0a.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}\x0a.mark{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center}\x0a.mark\x20svg{width:20px;height:20px}\x0a.mark\x20path{stroke:#0d131b}\x0a.brand\x20.bt{display:flex;flex-direction:column;line-height:1.25}\x0a.brand\x20.bt\x20b{font-size:16px}\x0a.brand\x20.bt\x20span{font-size:11.5px;color:var(--dim)}\x0ah1{font-size:15px;margin-bottom:4px}\x0ap{color:var(--dim);font-size:13px;margin-bottom:18px}\x0ainput{width:100%;background:var(--bg);border:1px\x20solid\x20var(--border);color:var(--text);border-radius:9px;padding:10px\x2013px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit}\x0ainput:focus{border-color:var(--accent);box-shadow:0\x200\x200\x203px\x20var(--accent-dim)}\x0abutton{width:100%;background:linear-gradient(135deg,var(--accent),var(--accent2));border:none;color:#201308;border-radius:9px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit}\x0abutton:hover{filter:brightness(1.06)}\x0abutton:disabled{opacity:.6;cursor:not-allowed}\x0a.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px\x2012px;border-radius:8px}\x0a.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}\x0a</style>\x0a</head>\x0a<body>\x0a<div\x20class=\x22box\x22>\x0a\x20\x20<div\x20class=\x22brand\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22mark\x22><svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><path\x20d=\x22M4\x2012h4l3-7\x204\x2014\x203-7h2\x22/></svg></div>\x0a\x20\x20\x20\x20<div\x20class=\x22bt\x22><b>CFNext</b><span>Cloudflare\x20全新代理管理面板</span></div>\x0a\x20\x20</div>\x0a\x20\x20<h1>设置管理密码</h1>\x0a\x20\x20<p>部署后首次访问请设置管理密码。设置后访问面板需登录。</p>\x0a\x20\x20<div\x20class=\x22msg\x22\x20id=\x22msg\x22>设置失败，请重试</div>\x0a\x20\x20<form\x20id=\x22form\x22>\x0a\x20\x20\x20\x20<input\x20type=\x22password\x22\x20id=\x22pwd\x22\x20placeholder=\x22设置管理密码（至少\x204\x20位）\x22\x20autofocus\x20autocomplete=\x22new-password\x22>\x0a\x20\x20\x20\x20<input\x20type=\x22password\x22\x20id=\x22pwd2\x22\x20placeholder=\x22确认管理密码\x22\x20autocomplete=\x22new-password\x22>\x0a\x20\x20\x20\x20<button\x20type=\x22submit\x22\x20id=\x22btn\x22>设置并进入面板</button>\x0a\x20\x20</form>\x0a\x20\x20<div\x20class=\x22foot\x22>密码保存在\x20Cloudflare\x20KV\x20中，之后可在「面板设置」中修改</div>\x0a</div>\x0a<script>\x0a(function(){\x0a\x20\x20var\x20t\x20=\x20\x27dark\x27;\x0a\x20\x20try\x20{\x20t\x20=\x20localStorage.getItem(\x27tp_theme\x27)\x20||\x20\x27dark\x27;\x20}\x20catch(e)\x20{}\x0a\x20\x20var\x20resolved\x20=\x20t\x20===\x20\x27auto\x27\x0a\x20\x20\x20\x20?\x20(window.matchMedia\x20&&\x20matchMedia(\x27(prefers-color-scheme:\x20light)\x27).matches\x20?\x20\x27light\x27\x20:\x20\x27dark\x27)\x0a\x20\x20\x20\x20:\x20t;\x0a\x20\x20document.documentElement.setAttribute(\x27data-theme\x27,\x20resolved);\x0a\x20\x20var\x20next\x20=\x20new\x20URLSearchParams(location.search).get(\x27next\x27)\x20||\x20\x27/\x27;\x0a\x20\x20document.getElementById(\x27form\x27).addEventListener(\x27submit\x27,\x20function(e){\x0a\x20\x20\x20\x20e.preventDefault();\x0a\x20\x20\x20\x20var\x20p1\x20=\x20document.getElementById(\x27pwd\x27).value,\x20p2\x20=\x20document.getElementById(\x27pwd2\x27).value;\x0a\x20\x20\x20\x20var\x20msg\x20=\x20document.getElementById(\x27msg\x27);\x0a\x20\x20\x20\x20var\x20btn\x20=\x20document.getElementById(\x27btn\x27);\x0a\x20\x20\x20\x20if\x20(p1.length\x20<\x204)\x20{\x20msg.textContent\x20=\x20\x27密码至少\x204\x20位\x27;\x20msg.style.display\x20=\x20\x27block\x27;\x20return;\x20}\x0a\x20\x20\x20\x20if\x20(p1\x20!==\x20p2)\x20{\x20msg.textContent\x20=\x20\x27两次输入的密码不一致\x27;\x20msg.style.display\x20=\x20\x27block\x27;\x20return;\x20}\x0a\x20\x20\x20\x20btn.disabled\x20=\x20true;\x20msg.style.display\x20=\x20\x27none\x27;\x0a\x20\x20\x20\x20fetch(\x27/login\x27,\x20{\x20method:\x20\x27POST\x27,\x20headers:\x20{\x20\x27Content-Type\x27:\x20\x27application/x-www-form-urlencoded\x27\x20},\x20body:\x20\x27setup=1&password=\x27\x20+\x20encodeURIComponent(p1)\x20+\x20\x27&next=\x27\x20+\x20encodeURIComponent(next)\x20})\x0a\x20\x20\x20\x20\x20\x20.then(function(r){\x20return\x20r.json();\x20})\x0a\x20\x20\x20\x20\x20\x20.then(function(r){\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(r\x20&&\x20r.ok){\x20location.href\x20=\x20r.next\x20||\x20\x27/\x27;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20{\x20msg.textContent\x20=\x20(r\x20&&\x20r.msg)\x20||\x20\x27设置失败，请重试\x27;\x20msg.style.display\x20=\x20\x27block\x27;\x20btn.disabled\x20=\x20false;\x20}\x0a\x20\x20\x20\x20\x20\x20})\x0a\x20\x20\x20\x20\x20\x20.catch(function(){\x20msg.textContent\x20=\x20\x27网络错误，请重试\x27;\x20msg.style.display\x20=\x20\x27block\x27;\x20btn.disabled\x20=\x20false;\x20});\x0a\x20\x20});\x0a})();\x0a</script>\x0a</body>\x0a</html>\x0a\x0a','3813900USbUMA','fmt','188.114.97.108#优选IP-203','useCidr','doh\x20unavailable','test','188.114.96.164#优选IP-211','opened','104.17.195.133#优选IP-152','172.67.64.12#优选IP-021','104.19.168.107#优选IP-074','172.67.159.243#优选IP-242','172.65.50.167#优选IP-254','CF\x20API\x20限流(429)，显示缓存数据（可能滞后）','split','cfAccountId','AES-GCM','GET\x20/\x20HTTP/1.1\x0d\x0aHost:\x20','region','\x20\x20\x20\x20alpn:\x20[http/1.1]','addr','then','decrypt','hostname','mixed','以色列','混淆版','104.16.98.7','507884eIlvny','188.114.98.53#优选IP-080','172.67.64.94#优选IP-128','path','🎯\x20全球直连','104.21.192.230#优选IP-099','empty','SS\x20分片长度非法\x20','&alpn=','104.21.2.1','\x20\x20\x20\x20network:\x20','188.114.96.89#优选IP-175','2a06:98c0::/29','cloudflare-ip.mofashi.ltd','172.67.161.136#优选IP-142','104.16.123.96#优选IP-002','https://bestcf.pages.dev/random-region/HK/100.txt','push','\x0a🌐\x20全球直连\x20=\x20select,\x20DIRECT\x0a🐟\x20漏网之鱼\x20=\x20select,\x20🚀\x20节点选择\x0a\x0a[Rule]\x0aGEOIP,CN,DIRECT\x0aFINAL,🐟\x20漏网之鱼\x0a','162.159.228.244#优选IP-071','loon','103.31.4.0/22','tcp\x20timeout','filter','104.27.21.175#优选IP-298','pagesFunctionsInvocationsAdaptiveGroups','data-label','104.17.100.40#优选IP-261','%25','getUint32','wetest_v4','hasUpdate','command','104.17.245.237#优选IP-221','188.114.97.80#优选IP-202','，请换一个数据源','162.159.128.1','\x0a\x0a[Proxy\x20Group]\x0a🚀\x20节点选择\x20=\x20select,\x20','toLowerCase','ech','subrequests','&type=ws&path=','\x20\x20\x20\x20type:\x20','172.65.118.105#优选IP-225','188.114.98.91#优选IP-064','162.159.6.39#优选IP-195','unknown','network','cdns.doon.eu.org','172.65.202.216#优选IP-190','decode','TLS','%3F','未授权（需要管理密码）','172.65.44.103#优选IP-218','104.17.25.173#优选IP-167','subtle','parse','IP地址','ech-opts','162.159.135.234#优选IP-249','quotaAuto','ms\x20','put','password','104.27.97.130#优选IP-236','172.65.162.213#优选IP-113','188.114.96.94#优选IP-104','104.17.121.245#优选IP-258','proxyip.oracle.cmliussss.net','\x20=\x20vless,\x20','104.17.146.117#优选IP-141','104.24.54.254#优选IP-044','澳大利亚','proxyip.fi.cmliussss.net','172.64.0.0/13','\x20\x20\x20\x20xhttp-opts:','2405:b500::/32','172.66.164.60#优选IP-251','limit','tls',',\x20tls=false','http/1.1','getUint8','count','https://1.1.1.1/dns-query','https://dns.google/dns-query','CF\x20API\x20HTTP\x20','cname.xirancdn.us','微测网\x20IPv4','104.25.122.6#优选IP-053','quantiles','104.25.44.144#优选IP-066','https://bestcf.pages.dev/random-region/TW/100.txt','boolean','104.24.250.89#优选IP-296','slice','188.114.96.0/20','104.18.184.243#优选IP-035',',\x20over-tls=true,\x20tls-host=','quantumult','resolve','104.25.166.112#优选IP-159','https://dns.alidns.com/resolve','超时/网络错误','vless','104.19.69.150#优选IP-186','sum','type=xhttp','104.25.24.66#优选IP-148','CF优选\x20','104.27.66.179#优选IP-076','\x0a<!DOCTYPE\x20html>\x0a<html\x20lang=\x22zh-CN\x22\x20data-theme=\x22dark\x22>\x0a<head>\x0a<meta\x20charset=\x22utf-8\x22>\x0a<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1\x22>\x0a<title>CFNext\x20·\x20登录</title>\x0a<link\x20rel=\x22icon\x22\x20href=\x22data:image/svg+xml,%3Csvg\x20xmlns=\x27http://www.w3.org/2000/svg\x27\x20viewBox=\x270\x200\x2024\x2024\x27%3E%3Crect\x20x=\x273\x27\x20y=\x273\x27\x20width=\x2718\x27\x20height=\x2718\x27\x20rx=\x275\x27\x20fill=\x27%23f6821f\x27/%3E%3Cpath\x20d=\x27M8\x2015V9l8\x206V9\x27\x20stroke=\x27%230d131b\x27\x20stroke-width=\x272\x27\x20fill=\x27none\x27\x20stroke-linecap=\x27round\x27\x20stroke-linejoin=\x27round\x27/%3E%3C/svg%3E\x22>\x0a<style>\x0a*{box-sizing:border-box;margin:0;padding:0}\x0a:root{--bg:#0b0f14;--card:#131a23;--border:#243041;--text:#e8eef6;--dim:#8fa3ba;--accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13)}\x0a[data-theme=\x22light\x22]{--bg:#f3f5f9;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);--err:#d94848;--err-dim:rgba(217,72,72,.10)}\x0abody{background:var(--bg);color:var(--text);font-family:\x22PingFang\x20SC\x22,\x22Microsoft\x20YaHei\x22,\x22Segoe\x20UI\x22,system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}\x0a.box{width:340px;max-width:100%;background:var(--card);border:1px\x20solid\x20var(--border);border-radius:16px;padding:30px\x2028px;box-shadow:0\x2018px\x2050px\x20rgba(0,0,0,.25)}\x0a[data-theme=\x22light\x22]\x20.box{box-shadow:0\x2014px\x2040px\x20rgba(30,45,70,.10)}\x0a.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}\x0a.mark{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center}\x0a.mark\x20svg{width:20px;height:20px}\x0a.mark\x20path{stroke:#0d131b}\x0a.brand\x20.bt{display:flex;flex-direction:column;line-height:1.25}\x0a.brand\x20.bt\x20b{font-size:16px}\x0a.brand\x20.bt\x20span{font-size:11.5px;color:var(--dim)}\x0ah1{font-size:15px;margin-bottom:4px}\x0ap{color:var(--dim);font-size:13px;margin-bottom:18px}\x0ainput{width:100%;background:var(--bg);border:1px\x20solid\x20var(--border);color:var(--text);border-radius:9px;padding:10px\x2013px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit}\x0ainput:focus{border-color:var(--accent);box-shadow:0\x200\x200\x203px\x20var(--accent-dim)}\x0abutton{width:100%;background:linear-gradient(135deg,var(--accent),var(--accent2));border:none;color:#201308;border-radius:9px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit}\x0abutton:hover{filter:brightness(1.06)}\x0abutton:disabled{opacity:.6;cursor:not-allowed}\x0a.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px\x2012px;border-radius:8px}\x0a.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}\x0a</style>\x0a</head>\x0a<body>\x0a<div\x20class=\x22box\x22>\x0a\x20\x20<div\x20class=\x22brand\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22mark\x22><svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><path\x20d=\x22M4\x2012h4l3-7\x204\x2014\x203-7h2\x22/></svg></div>\x0a\x20\x20\x20\x20<div\x20class=\x22bt\x22><b>CFNext</b><span>Cloudflare\x20全新代理管理面板</span></div>\x0a\x20\x20</div>\x0a\x20\x20<h1>登录</h1>\x0a\x20\x20<p>请输入管理密码以继续</p>\x0a\x20\x20<div\x20class=\x22msg\x22\x20id=\x22msg\x22>密码错误，请重试</div>\x0a\x20\x20<form\x20id=\x22form\x22>\x0a\x20\x20\x20\x20<input\x20type=\x22password\x22\x20id=\x22pwd\x22\x20placeholder=\x22管理密码\x22\x20autofocus\x20autocomplete=\x22current-password\x22>\x0a\x20\x20\x20\x20<button\x20type=\x22submit\x22\x20id=\x22btn\x22>登录</button>\x0a\x20\x20</form>\x0a\x20\x20<div\x20class=\x22foot\x22>配置保存在\x20Cloudflare\x20KV\x20中，密码错误\x2024\x20小时后自动失效</div>\x0a</div>\x0a<script>\x0a(function(){\x0a\x20\x20var\x20t\x20=\x20\x27dark\x27;\x0a\x20\x20try\x20{\x20t\x20=\x20localStorage.getItem(\x27tp_theme\x27)\x20||\x20\x27dark\x27;\x20}\x20catch(e)\x20{}\x0a\x20\x20var\x20resolved\x20=\x20t\x20===\x20\x27auto\x27\x0a\x20\x20\x20\x20?\x20(window.matchMedia\x20&&\x20matchMedia(\x27(prefers-color-scheme:\x20light)\x27).matches\x20?\x20\x27light\x27\x20:\x20\x27dark\x27)\x0a\x20\x20\x20\x20:\x20t;\x0a\x20\x20document.documentElement.setAttribute(\x27data-theme\x27,\x20resolved);\x0a\x20\x20var\x20next\x20=\x20new\x20URLSearchParams(location.search).get(\x27next\x27)\x20||\x20\x27/\x27;\x0a\x20\x20document.getElementById(\x27form\x27).addEventListener(\x27submit\x27,\x20function(e){\x0a\x20\x20\x20\x20e.preventDefault();\x0a\x20\x20\x20\x20var\x20btn\x20=\x20document.getElementById(\x27btn\x27);\x0a\x20\x20\x20\x20var\x20msg\x20=\x20document.getElementById(\x27msg\x27);\x0a\x20\x20\x20\x20btn.disabled\x20=\x20true;\x20msg.style.display\x20=\x20\x27none\x27;\x0a\x20\x20\x20\x20fetch(\x27/login\x27,\x20{\x20method:\x20\x27POST\x27,\x20headers:\x20{\x20\x27Content-Type\x27:\x20\x27application/x-www-form-urlencoded\x27\x20},\x20body:\x20\x27password=\x27\x20+\x20encodeURIComponent(document.getElementById(\x27pwd\x27).value)\x20+\x20\x27&next=\x27\x20+\x20encodeURIComponent(next)\x20})\x0a\x20\x20\x20\x20\x20\x20.then(function(r){\x20return\x20r.json();\x20})\x0a\x20\x20\x20\x20\x20\x20.then(function(r){\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(r\x20&&\x20r.ok){\x20location.href\x20=\x20r.next\x20||\x20\x27/\x27;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20{\x20msg.style.display\x20=\x20\x27block\x27;\x20btn.disabled\x20=\x20false;\x20}\x0a\x20\x20\x20\x20\x20\x20})\x0a\x20\x20\x20\x20\x20\x20.catch(function(){\x20msg.textContent\x20=\x20\x27网络错误，请重试\x27;\x20msg.style.display\x20=\x20\x27block\x27;\x20btn.disabled\x20=\x20false;\x20});\x0a\x20\x20});\x0a})();\x0a</script>\x0a</body>\x0a</html>\x0a\x0a','plain','relay','104.16.248.248#优选IP-008','from','不支持的\x20VLESS\x20版本','检测失败:\x20','\x20\x20\x20\x20\x20\x20query-server-name:\x20','BER','enableTrojan','104.18.42.54#优选IP-026','104.25.109.0#优选IP-275','104.25.93.154#优选IP-126','\x0a🌐\x20全球直连\x20=\x20select,\x20DIRECT\x0a🐟\x20漏网之鱼\x20=\x20select,\x20','162.159.236.5#优选IP-065','alpn','104.16.234.241#优选IP-288','104.24.41.240#优选IP-212','pathname','未绑定\x20KV\x20命名空间，无需重置','104.25.86.143#优选IP-235','pass','name','162.159.237.243#优选IP-119','188.114.96.64#优选IP-171','节点-','104.21.213.24#优选IP-017','\x0d\x0aUser-Agent:\x20Mozilla/5.0\x0d\x0aConnection:\x20close\x0d\x0a\x0d\x0a','无法识别的地址类型','162.159.199.220#优选IP-263','104.24.244.237#优选IP-075','172.65.78.200#优选IP-283','only','172.65.167.52#优选IP-241','优选IP-','Host','getReader','1841203NKonDJ','colo','https://bestcf.pages.dev/random-region/SG/100.txt','security','sort','raw','104.25.223.90#优选IP-239','104.24.230.144#优选IP-102','TROJAN_PASSWORD','data','xPaddingObfsMode','lastIndexOf','startsWith',';\x20Path=/;\x20Max-Age=86400;\x20HttpOnly;\x20Secure;\x20SameSite=Lax','2405:8100::/32','104.19.247.23#优选IP-147','stats','104.25.173.14#优选IP-273','CONNECT\x20','luma','customPref','set','getRandomValues','104.19.1.1','未知\x20API:\x20','login','toISOString','SS\x20AEAD\x20解密失败（密码/加密方式与服务器不匹配）','query\x20getBillingMetrics($accountId:\x20string!,\x20$filter:\x20AccountWorkersInvocationsAdaptiveFilter_InputObject)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20viewer\x20{\x20accounts(filter:{accountTag:$accountId})\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20workersInvocationsAdaptive(limit:10000,\x20filter:$filter)\x20{\x20sum\x20{\x20requests\x20subrequests\x20}\x20quantiles\x20{\x20cpuTimeP50\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pagesFunctionsInvocationsAdaptiveGroups(limit:1000,\x20filter:$filter)\x20{\x20sum\x20{\x20requests\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20}','172.65.184.114#优选IP-189','arraybuffer','721764nyvnrA','104.16.66.7','&security=tls&sni=','104.24.18.62#优选IP-289','cfip.cfcdn.vip','2606:4700::/32','[General]\x0adns-server\x20=\x20223.5.5.5,\x20119.29.29.29\x0a\x0a[Proxy]\x0a','write','104.18.194.107#优选IP-228','未在仓库中找到版本信息','map','findIndex','SOCKS5\x20认证失败','104.19.32.220#优选IP-192','104.17.13.179#优选IP-091','\x20\x20-\x20name:\x20','match','104.18.41.168#优选IP-231','104.18.217.109#优选IP-033','text/yaml','104.27.94.231#优选IP-129','https','172.64.144.49#优选IP-027',',\x20tls-verification=true,\x20tag=','x-padding-placement','104.21.224.5#优选IP-197','比利时','chacha20poly1305','delete','port','8AXUJUm','randomUUID','padStart','utf-8','race','104.18.176.111#优选IP-052','seal','setUTCHours','digest','104.17.87.46#优选IP-201','162.159.2.86#优选IP-222','104.18.84.180#优选IP-068','104.20.1.1','cfApiToken','user','SIN','https://www.wetest.vip/page/cloudflare/address_v4.html','%23','aes-256-gcm','Trojan\x20头部过短','108.162.192.0/18','内置·保底-','byteLength','&extra=','104.27.20.220#优选IP-266','https://cloudflare-dns.com/dns-query','sub','104.27.207.36#优选IP-098','172.67.195.152#优选IP-188','172.66.161.31#优选IP-084','104.25.123.130#优选IP-240','Sec-WebSocket-Protocol','密码错误','162.159.137.71#优选IP-276','/login?next=','echHost','104.19.246.234#优选IP-280','104.18.185.26#优选IP-297',',\x20password=','custom','\x20\x20\x20\x20\x20\x20x-padding-placement:\x20','乌克兰','104.16.123.26#优选IP-149','162.159.46.167#优选IP-067','chacha20-ietf-poly1305','read','echDns','setUint32','nekoray','status','every','round','DUS','charCodeAt','172.67.232.109#优选IP-182','1030MZobcU','SS\x20连接被关闭','&fp=chrome','http\x20timeout','proxyIP','104.17.234.5#优选IP-018','（未指定）','xhttp','104.16.127.96#优选IP-006','reduce','proxyip.multacom.cmliussss.net','HTTP\x20','buffer','162.159.137.205#优选IP-036','HAM','subRandomCount','proxyip.vultr.cmliussss.net','104.25.245.147#优选IP-083','isArray','HOST','trojanPassword','104.25.45.44#优选IP-038','proxyip.digitalocean.cmliussss.net','byteOffset','104.19.181.118#优选IP-215','queryInHeader','encrypt','config','104.27.116.114#优选IP-262','🚀\x20节点选择','nodeLimitCount','104.21.57.47#优选IP-112','仅支持\x20POST','x-padding-key','CHACHA20-POLY1305','cloudflare','104.16.201.45#优选IP-160','outboundMode','application/json;\x20charset=utf-8','未找到账户数据（检查账户\x20ID\x20与令牌权限）','direct',',\x20tag=','candidates','sub://','code','min','\x20\x20\x20\x20\x20\x20\x20\x20Host:\x20','length','initPool','&type=A','http',',\x20img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png\x0astatic=🌐\x20全球直连,\x20direct,\x20img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Direct.png\x0astatic=🐟\x20漏网之鱼,\x20🚀\x20节点选择,\x20direct,\x20img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png\x0a[filter_local]\x0ageoip,\x20cn,\x20🌐\x20全球直连\x0afinal,\x20🐟\x20漏网之鱼\x0a','writable','xPaddingPlacement','message','outboundProxy','104.17.97.72#优选IP-213','function','mode','匈牙利','https://www.wetest.vip/page/cloudflare/address_v6.html','FRA','latency','104.24.58.243#优选IP-097','104.16.126.96#优选IP-005','104.16.249.249#优选IP-009','https://bestcf.pages.dev/random-region/JP/100.txt','奥地利','wetest_cname','104.16.245.187#优选IP-019','security=none','104.27.46.114#优选IP-271','v2ray','freeyx.cloudflare88.eu.org','fn.130519.xyz','redirect','source','104.16.0.133#优选IP-093','\x20\x20\x20\x20\x20\x20x-padding-key:\x20','\x20\x20\x20\x20udp:\x20true','attachment;\x20filename=\x22CFNext\x22;\x20filename*=utf-8\x27\x27CFNext','assign','重置失败:\x20','104.17.195.184#优选IP-135','true','chrome','doh\x20fail','searchParams','104.18.133.24#优选IP-085','1505620bfqZCl','getWriter','PROXYIP','090227','104.18.178.193#优选IP-183','104.25.214.211#优选IP-055','current','104.17.24.252#优选IP-012','sourceURL','join','已重置：KV\x20已清空，面板还原为初始部署状态','IPv4','cloudflare.182682.xyz','ARN','188.114.99.14#优选IP-206','数据中心','SHA-256','104.27.27.106#优选IP-292','https://api.cloudflare.com/client/v4/graphql','addEventListener','\x20\x20\x20\x20password:\x20','西班牙','enqueue','proxyip.hk.cmliussss.net','AMS','104.27.40.81#优选IP-063','104.19.97.238#优选IP-139','shift','f3058171cad.002404.xyz','\x20\x20\x20\x20skip-cert-verify:\x20true','unreachable','BESTIP_AUTO','adminInit','104.25.169.144#优选IP-291','fromCharCode','172.66.199.166#优选IP-127','json','104.24.0.0/14','CFNext\x20明文版.js',',\x20tls=true,\x20skip-cert-verify=true,\x20sni=','ipType','open','url','AAAA','error','162.159.198.200#优选IP-245','values','CFNext\x20混淆版.js','fillCount','104.27.96.232#优选IP-282','162.159.44.215#优选IP-031','proxyip.nl.cmliussss.net','微测网\x20IPv6','subarray','172.67.165.245#优选IP-216','188.114.99.52#优选IP-013','ss-subkey','没有可测的\x20IP','223.5.5.5','Cookie','object','Mozilla/5.0','188.114.96.255#优选IP-082','forEach','162.159.43.85#优选IP-293','172.67.82.86#优选IP-162','104.25.18.216#优选IP-198','surge','CF_API_TOKEN','188.114.96.151#优选IP-223','subMode','https://www.cloudflare.com/ips-v6/','188.114.97.52#优选IP-124','abort','拉取失败:\x20','请先完成首次设置：设置管理密码后再访问面板','TROJAN','162.159.4.175#优选IP-049','104.16.68.175#优选IP-153','threads','text/html;\x20charset=utf-8','enableXhttp','172.64.81.44#优选IP-058','\x20=\x20','src','104.19.115.243#优选IP-096','162.159.19.201#优选IP-158','104.24.34.149#优选IP-279','188.114.96.116#优选IP-054','isp','172.65.118.85#优选IP-267','PATH','fill','subIncludeDefault',',\x20obfs=wss,\x20obfs-host=','nodeLimit','162.159.240.54#优选IP-233','\x0a\x0a[Rule]\x0aGEOIP,CN,DIRECT\x0aFINAL,🐟\x20漏网之鱼\x0a','&type=xhttp&mode=stream-one','订阅生成失败:\x20','_regionPool','method','172.64.34.109#优选IP-087','quanx','104.18.196.199#优选IP-069','104.17.2.7','preset','104.24.12.10','TXT','mixed-in','&fp=chrome&host=','原生地址','HTTP\x20代理\x20CONNECT\x20失败:\x20','阿根廷','162.159.0.1#优选IP-010','188.114.97.21#优选IP-229','OUTBOUND','172.67.131.200#优选IP-248','security=tls&sni=','exec','明文版','clash','https://stock.hostmonit.com/CloudFlareYes'];_0x5b3a=function(){return _0x5dcf7a;};return _0x5b3a();}const _0x193e21=_0x3b0b;(function(_0x41baba,_0x3c8f34){const _0x4f7e54=_0x3b0b,_0x3e4a89=_0x41baba();while(!![]){try{const _0x4a768f=-parseInt(_0x4f7e54(0x1ff))/0x1+-parseInt(_0x4f7e54(0x4ac))/0x2+parseInt(_0x4f7e54(0x3e9))/0x3+-parseInt(_0x4f7e54(0x2ad))/0x4+parseInt(_0x4f7e54(0x254))/0x5*(parseInt(_0x4f7e54(0x413))/0x6)+-parseInt(_0x4f7e54(0x1e0))/0x7*(-parseInt(_0x4f7e54(0x21d))/0x8)+-parseInt(_0x4f7e54(0x352))/0x9*(-parseInt(_0x4f7e54(0x490))/0xa);if(_0x4a768f===_0x3c8f34)break;else _0x3e4a89['push'](_0x3e4a89['shift']());}catch(_0x281b9a){_0x3e4a89['push'](_0x3e4a89['shift']());}}}(_0x5b3a,0x7cb2c));import{connect}from'cloudflare:sockets';const VERSION='2.1.0',DEPLOY_EDITION=_0x193e21(0x4aa);function deployKind(){const _0x9d57de=_0x193e21;try{return DEPLOY_EDITION==='混淆版'?_0x9d57de(0x424):_0x9d57de(0x1bc);}catch(_0x30897c){return _0x9d57de(0x1bc);}}const UPDATE_REPO=_0x193e21(0x36f);let UPDATE_CACHE=null;function parseVer(_0x3e1b5c){const _0x4194b3=_0x193e21,_0x5a7d77=String(_0x3e1b5c||'')[_0x4194b3(0x20f)](/(\d+)\.(\d+)\.(\d+)/);return _0x5a7d77?[parseInt(_0x5a7d77[0x1],0xa),parseInt(_0x5a7d77[0x2],0xa),parseInt(_0x5a7d77[0x3],0xa)]:null;}function cmpVer(_0x5e3436,_0x57e839){const _0x5d6505=parseVer(_0x5e3436),_0x211ee3=parseVer(_0x57e839);if(!_0x5d6505||!_0x211ee3)return 0x0;for(let _0x38a72c=0x0;_0x38a72c<0x3;_0x38a72c++){if(_0x5d6505[_0x38a72c]!==_0x211ee3[_0x38a72c])return _0x5d6505[_0x38a72c]<_0x211ee3[_0x38a72c]?-0x1:0x1;}return 0x0;}function extractVersion(_0x398306){const _0x40cc0e=_0x193e21,_0x354b31=_0x398306[_0x40cc0e(0x20f)](/const\s+VERSION\s*=\s*['"]([^'"]+)['"]/);return _0x354b31?_0x354b31[0x1]:null;}async function checkUpdate(_0x2f99fd){const _0x141f37=_0x193e21,_0x161687=Date[_0x141f37(0x3ad)]();if(UPDATE_CACHE&&_0x161687-UPDATE_CACHE['t']<0xea60)return UPDATE_CACHE['r'];const _0x1f5252=deployKind()===_0x141f37(0x424)?'混淆':'明文';let _0x574e3e=null,_0x41f0e3='',_0x135f64='';const _0x505940='https://raw.githubusercontent.com/'+UPDATE_REPO+_0x141f37(0x3f0)+encodeURIComponent(_0x141f37(0x2d3));try{const _0x35f93b=await fetch(_0x505940,{'headers':{'User-Agent':'Mozilla/5.0\x20(CFNext)'}});if(_0x35f93b['ok']){const _0x2786ba=await _0x35f93b[_0x141f37(0x370)](),_0x2b9191=extractVersion(_0x2786ba);if(_0x2b9191)_0x574e3e=_0x2b9191;}}catch(_0x2cf424){_0x135f64=_0x2cf424&&_0x2cf424[_0x141f37(0x28a)]||String(_0x2cf424);}if(_0x574e3e){const _0x14c3ae=_0x1f5252==='混淆'?'CFNext\x20混淆版.js':_0x141f37(0x2d3),_0x45b250=_0x141f37(0x460)+UPDATE_REPO+_0x141f37(0x3f0)+encodeURIComponent(_0x14c3ae);try{const _0x401614=await fetch(_0x45b250,{'headers':{'User-Agent':_0x141f37(0x420)}});if(_0x401614['ok'])_0x41f0e3=await _0x401614[_0x141f37(0x370)]();}catch(_0x41855d){}return UPDATE_CACHE={'t':_0x161687,'r':{'current':VERSION,'kind':_0x1f5252,'latest':_0x574e3e,'hasUpdate':cmpVer(_0x574e3e,VERSION)>0x0,'code':_0x41f0e3,'checkedAt':_0x161687}},UPDATE_CACHE['r'];}const _0x798358=_0x141f37(0x460)+UPDATE_REPO+'/main/'+encodeURIComponent(_0x141f37(0x2dc));try{const _0x5db43c=await fetch(_0x798358,{'headers':{'User-Agent':_0x141f37(0x420)}});if(_0x5db43c['ok']){const _0x5e3421=await _0x5db43c[_0x141f37(0x370)](),_0x3987cc=extractVersion(_0x5e3421);if(_0x3987cc)_0x574e3e=_0x3987cc;}}catch(_0x1b2a82){_0x135f64=_0x1b2a82&&_0x1b2a82[_0x141f37(0x28a)]||String(_0x1b2a82);}if(_0x574e3e)return UPDATE_CACHE={'t':_0x161687,'r':{'current':VERSION,'kind':_0x1f5252,'latest':_0x574e3e,'hasUpdate':cmpVer(_0x574e3e,VERSION)>0x0,'code':'','checkedAt':_0x161687}},UPDATE_CACHE['r'];return{'current':VERSION,'kind':_0x1f5252,'latest':null,'hasUpdate':![],'code':'','error':_0x135f64||_0x141f37(0x208)};}const CLASH_TEMPLATE=_0x193e21(0x340),CLOUDFLARE_CIDRS=[_0x193e21(0x38d),_0x193e21(0x3aa),_0x193e21(0x3ea),_0x193e21(0x4c1),_0x193e21(0x42e),_0x193e21(0x231),_0x193e21(0x38b),'188.114.96.0/20',_0x193e21(0x354),_0x193e21(0x410),'162.158.0.0/15',_0x193e21(0x423),_0x193e21(0x2d2),'172.64.0.0/13',_0x193e21(0x343)],REACHABLE_CIDRS=[_0x193e21(0x423),_0x193e21(0x2d2),_0x193e21(0x4f7),'162.158.0.0/15',_0x193e21(0x1ac)],CLOUDFLARE_CIDRS_V6=['2400:cb00::/32','2606:4700::/32',_0x193e21(0x3d7),_0x193e21(0x198),_0x193e21(0x1ee),_0x193e21(0x4b8),_0x193e21(0x334)],REACHABLE_CIDRS_V6=[_0x193e21(0x204),'2400:cb00::/32',_0x193e21(0x3d7),_0x193e21(0x4b8),_0x193e21(0x334)];let OFFICIAL_V6_CIDRS=CLOUDFLARE_CIDRS_V6['slice'](),OFFICIAL_V6_CIDRS_T=0x0;async function refreshOfficialV6CIDRs(){const _0x4dd29a=_0x193e21,_0x147bf3=Date['now']();if(OFFICIAL_V6_CIDRS_T&&_0x147bf3-OFFICIAL_V6_CIDRS_T<0x6*0x3c*0x3c*0x3e8)return;try{const _0x7e5974=await fetch(_0x4dd29a(0x2f4),{'signal':AbortSignal[_0x4dd29a(0x390)](0x2710)});if(!_0x7e5974['ok'])return;const _0x41b6e9=await _0x7e5974[_0x4dd29a(0x370)](),_0x30dfe7=String(_0x41b6e9)['split']('\x0a')['map'](_0x58c357=>_0x58c357['trim']())[_0x4dd29a(0x4c3)](_0x1fb29e=>/^[0-9a-fA-F:.]+\/\d+$/[_0x4dd29a(0x495)](_0x1fb29e)&&_0x1fb29e[_0x4dd29a(0x3df)](':')>=0x0);_0x30dfe7[_0x4dd29a(0x283)]>=0x3&&(OFFICIAL_V6_CIDRS=_0x30dfe7,OFFICIAL_V6_CIDRS_T=_0x147bf3);}catch(_0x3d064e){}}function ipInCidrV6(_0x4062dc,_0x3798bd){const _0x26a163=_0x193e21,[_0xb920c5,_0x3462c4]=_0x3798bd[_0x26a163(0x49e)]('/'),_0x2d1170=parseInt(_0x3462c4,0xa),_0x547e39=_0x197254=>{const _0x232519=_0x26a163,_0x6007d4=_0x197254[_0x232519(0x3df)]('::');let _0x4d062c;if(_0x6007d4>=0x0){const _0x2733d6=_0x197254[_0x232519(0x1ab)](0x0,_0x6007d4)[_0x232519(0x49e)](':')[_0x232519(0x4c3)](Boolean),_0xbec91e=_0x197254[_0x232519(0x1ab)](_0x6007d4+0x2)[_0x232519(0x49e)](':')[_0x232519(0x4c3)](Boolean),_0x28ba66=0x8-_0x2733d6[_0x232519(0x283)]-_0xbec91e[_0x232519(0x283)];_0x4d062c=[..._0x2733d6,...Array(_0x28ba66)[_0x232519(0x309)]('0'),..._0xbec91e];}else _0x4d062c=_0x197254[_0x232519(0x49e)](':');return _0x4d062c[_0x232519(0x209)](_0x40374e=>_0x40374e['padStart'](0x4,'0'));},_0x269b8c=_0x250a2c=>_0x250a2c['map'](_0x284c6a=>parseInt(_0x284c6a,0x10)[_0x26a163(0x3f8)](0x2)[_0x26a163(0x21f)](0x10,'0'))[_0x26a163(0x2b6)]('');return _0x269b8c(_0x547e39(_0x4062dc))[_0x26a163(0x1ab)](0x0,_0x2d1170)===_0x269b8c(_0x547e39(_0xb920c5))['slice'](0x0,_0x2d1170);}function isCloudflareIP(_0x330642){const _0x4cdf76=_0x193e21;_0x330642=String(_0x330642||'');if(!isValidIp(_0x330642))return![];if(_0x330642[_0x4cdf76(0x3df)](':')>=0x0)return CLOUDFLARE_CIDRS_V6[_0x4cdf76(0x3f4)](_0x457171=>ipInCidrV6(_0x330642,_0x457171));const _0x3a2b2b=_0x330642[_0x4cdf76(0x49e)]('.')['map'](Number),_0x4910f8=(_0x3a2b2b[0x0]<<0x18|_0x3a2b2b[0x1]<<0x10|_0x3a2b2b[0x2]<<0x8|_0x3a2b2b[0x3])>>>0x0;return CLOUDFLARE_RANGES[_0x4cdf76(0x3f4)](([_0x33601f,_0x2f0b88])=>_0x4910f8>=_0x33601f&&_0x4910f8<=_0x2f0b88);}const REGION_CN={'HK':'香港','TW':'台湾','MO':'澳门','JP':'日本','SG':'新加坡','US':'美国','KR':'韩国','DE':'德国','FR':'法国','GB':'英国','CA':'加拿大','AU':_0x193e21(0x4f5),'SE':'瑞典','NL':'荷兰','FI':'芬兰','NO':'挪威','DK':'丹麦','CH':'瑞士','IT':_0x193e21(0x40d),'ES':_0x193e21(0x2c2),'PT':_0x193e21(0x44a),'IE':'爱尔兰','BE':_0x193e21(0x219),'AT':_0x193e21(0x297),'PL':'波兰','CZ':'捷克','RO':_0x193e21(0x3fd),'HU':_0x193e21(0x28f),'GR':'希腊','RU':_0x193e21(0x466),'TR':_0x193e21(0x480),'UA':_0x193e21(0x246),'IN':'印度','TH':'泰国','MY':_0x193e21(0x361),'VN':'越南','PH':_0x193e21(0x428),'ID':'印尼','BR':'巴西','MX':'墨西哥','AR':_0x193e21(0x31e),'CL':'智利','ZA':'南非','EG':'埃及','AE':'阿联酋','IL':_0x193e21(0x4a9),'NZ':_0x193e21(0x459),'KZ':'哈萨克斯坦','SA':'沙特'},DEFAULT_REGION_POOLS=[_0x193e21(0x4bc),'https://bestcf.pages.dev/random-region/TW/100.txt',_0x193e21(0x296),_0x193e21(0x1e2),_0x193e21(0x3bd),_0x193e21(0x485)]['join']('\x0a'),TRUSTED_REGION_POOL_RE=/random-region\/[A-Z]{2,}\/\d+\.txt/i;function isTrustedRegionPool(_0x599864){const _0x52bd7a=_0x193e21;return TRUSTED_REGION_POOL_RE[_0x52bd7a(0x495)](String(_0x599864||''));}function regionPoolsFor(_0x56d275){const _0x1a8814=_0x193e21,_0x34a608=Array[_0x1a8814(0x266)](_0x56d275)?_0x56d275[_0x1a8814(0x4c3)](_0x4e776b=>_0x4e776b&&_0x4e776b!==_0x1a8814(0x384)):_0x56d275&&_0x56d275!==_0x1a8814(0x384)?[_0x56d275]:[];if(!_0x34a608[_0x1a8814(0x283)])return'';return String(DEFAULT_REGION_POOLS)['split'](/[\n,;]+/)[_0x1a8814(0x4c3)](_0x260a83=>{const _0x235fad=_0x1a8814,_0xd3053=String(_0x260a83)[_0x235fad(0x20f)](/random-region\/([A-Z]{2,})/i);return _0xd3053&&_0x34a608[_0x235fad(0x3f4)](_0x24bf53=>String(_0x24bf53)[_0x235fad(0x441)]()===_0xd3053[0x1]['toUpperCase']());})['join']('\x0a');}const DEFAULT_CONFIG={'uuid':'','path':'','admin':'','adminInit':![],'host':'','enableVless':!![],'enableTrojan':![],'trojanPassword':'','enableXhttp':![],'alpn':'','ech':![],'echHost':_0x193e21(0x3af),'echDns':'','tlsOnly':![],'nodeLimit':!![],'nodeLimitCount':0x1f4,'polling':![],'loadBalance':!![],'probeAlive':!![],'cfAccountId':'','cfApiToken':'','quotaAuto':![],'proxyIP':'','outboundProxy':'','outboundMode':'','preferredDomains':_0x193e21(0x36d),'preferredIPs':[],'optimizer':{'source':_0x193e21(0x4ca),'sourceURL':'','port':0x1bb,'threads':0x5,'count':0x14,'useCidr':!![],'fillCount':0x0,'subMode':'','subRandomCount':0x10,'subIncludeDefault':![]},'filter':{'region':_0x193e21(0x384),'ipType':[_0x193e21(0x2b8),'IPv6'],'isp':['移动','联通','电信']}},BUILTIN_OFFICIAL_DOMAINS=['cloudflare.com','www.cloudflare.com',_0x193e21(0x350)],BUILTIN_STABLE_IPS=[_0x193e21(0x3f6),'172.67.72.4','104.17.201.77',_0x193e21(0x200),_0x193e21(0x3ee),_0x193e21(0x4ab),_0x193e21(0x316),_0x193e21(0x37d),_0x193e21(0x462),'104.18.7.34',_0x193e21(0x427),_0x193e21(0x1f7),_0x193e21(0x3b4),_0x193e21(0x229),'104.21.23.1',_0x193e21(0x4b5),_0x193e21(0x318),_0x193e21(0x445),'104.26.1.1',_0x193e21(0x4d0)],BESTCF_REGION_URLS=[{'label':'香港','region':'HK','url':_0x193e21(0x4bc),'count':0xc},{'label':'日本','region':'JP','url':_0x193e21(0x296),'count':0xc},{'label':'美国','region':'US','url':_0x193e21(0x3bd),'count':0xc},{'label':_0x193e21(0x46e),'region':'SG','url':_0x193e21(0x1e2),'count':0xc},{'label':'台湾','region':'TW','url':_0x193e21(0x1a8),'count':0xc}],BUILTIN_PREFERRED_IPS=[_0x193e21(0x3ec),_0x193e21(0x4bb),_0x193e21(0x483),_0x193e21(0x481),_0x193e21(0x294),_0x193e21(0x25c),_0x193e21(0x454),_0x193e21(0x1be),_0x193e21(0x295),_0x193e21(0x31f),_0x193e21(0x386),_0x193e21(0x2b4),_0x193e21(0x2e4),'162.159.94.229#优选IP-014',_0x193e21(0x40e),_0x193e21(0x335),_0x193e21(0x1d5),_0x193e21(0x259),_0x193e21(0x299),'172.67.64.211#优选IP-020',_0x193e21(0x499),_0x193e21(0x447),_0x193e21(0x3cb),_0x193e21(0x373),'104.18.47.234#优选IP-025',_0x193e21(0x1c5),_0x193e21(0x215),'172.64.146.15#优选IP-028','104.17.185.207#优选IP-029','104.17.101.139#优选IP-030',_0x193e21(0x2df),_0x193e21(0x3e4),_0x193e21(0x211),_0x193e21(0x32c),_0x193e21(0x1ad),_0x193e21(0x261),_0x193e21(0x450),_0x193e21(0x269),_0x193e21(0x3d5),_0x193e21(0x372),_0x193e21(0x3c7),_0x193e21(0x3a9),_0x193e21(0x3e0),_0x193e21(0x4f4),'104.19.123.4#优选IP-045',_0x193e21(0x45a),_0x193e21(0x329),_0x193e21(0x461),_0x193e21(0x2fa),_0x193e21(0x3eb),_0x193e21(0x3fe),_0x193e21(0x222),_0x193e21(0x1a5),_0x193e21(0x305),_0x193e21(0x2b2),_0x193e21(0x35b),_0x193e21(0x465),_0x193e21(0x2ff),_0x193e21(0x464),'188.114.99.114#优选IP-060',_0x193e21(0x32f),'104.16.113.211#优选IP-062',_0x193e21(0x2c6),_0x193e21(0x4d8),_0x193e21(0x1c9),_0x193e21(0x1a7),_0x193e21(0x248),_0x193e21(0x228),_0x193e21(0x315),'104.24.155.234#优选IP-070',_0x193e21(0x4bf),_0x193e21(0x3de),_0x193e21(0x3cd),_0x193e21(0x49a),_0x193e21(0x1d9),_0x193e21(0x1ba),_0x193e21(0x400),_0x193e21(0x36e),'104.21.114.216#优选IP-079',_0x193e21(0x4ad),'172.65.145.187#优选IP-081',_0x193e21(0x2eb),_0x193e21(0x265),_0x193e21(0x23a),_0x193e21(0x2ac),'188.114.99.155#优选IP-086',_0x193e21(0x313),_0x193e21(0x408),'104.19.78.30#优选IP-089',_0x193e21(0x3c8),_0x193e21(0x20d),_0x193e21(0x3e5),_0x193e21(0x2a1),_0x193e21(0x396),_0x193e21(0x458),_0x193e21(0x302),_0x193e21(0x293),_0x193e21(0x238),_0x193e21(0x4b1),'104.25.20.146#优选IP-100',_0x193e21(0x36a),_0x193e21(0x1e7),'172.65.134.100#优选IP-103',_0x193e21(0x4ef),_0x193e21(0x407),'104.16.108.18#优选IP-106','172.64.233.36#优选IP-107',_0x193e21(0x32a),_0x193e21(0x422),'104.19.106.1#优选IP-110','104.27.72.4#优选IP-111',_0x193e21(0x273),_0x193e21(0x4ee),_0x193e21(0x378),_0x193e21(0x470),'162.159.230.149#优选IP-116','162.159.197.16#优选IP-117','172.67.103.87#优选IP-118',_0x193e21(0x1d2),'104.25.193.135#优选IP-120','104.18.141.27#优选IP-121',_0x193e21(0x341),_0x193e21(0x433),_0x193e21(0x2f5),_0x193e21(0x355),_0x193e21(0x1c7),_0x193e21(0x2d0),_0x193e21(0x4ae),_0x193e21(0x213),_0x193e21(0x3a2),_0x193e21(0x3ab),'172.67.173.89#优选IP-132',_0x193e21(0x47a),'188.114.97.91#优选IP-134',_0x193e21(0x2a7),_0x193e21(0x47b),_0x193e21(0x434),_0x193e21(0x41c),_0x193e21(0x2c7),_0x193e21(0x338),_0x193e21(0x4f3),_0x193e21(0x4ba),_0x193e21(0x3ba),'104.25.100.203#优选IP-144','104.19.23.222#优选IP-145','188.114.96.141#优选IP-146',_0x193e21(0x1ef),_0x193e21(0x1b8),_0x193e21(0x247),_0x193e21(0x46a),_0x193e21(0x35a),_0x193e21(0x498),_0x193e21(0x2fb),_0x193e21(0x3d9),_0x193e21(0x449),_0x193e21(0x37a),'162.159.143.225#优选IP-157',_0x193e21(0x303),_0x193e21(0x1b1),_0x193e21(0x278),_0x193e21(0x486),_0x193e21(0x2ee),'104.16.11.246#优选IP-163','188.114.97.61#优选IP-164','104.17.240.245#优选IP-165',_0x193e21(0x46f),_0x193e21(0x4e3),_0x193e21(0x34a),'104.18.123.15#优选IP-169','104.25.124.155#优选IP-170',_0x193e21(0x1d3),_0x193e21(0x34b),'104.17.46.187#优选IP-173','104.17.153.58#优选IP-174',_0x193e21(0x4b7),_0x193e21(0x3c2),'104.25.251.220#优选IP-177','104.27.195.79#优选IP-178','162.159.153.10#优选IP-179',_0x193e21(0x3d2),_0x193e21(0x3a1),_0x193e21(0x253),_0x193e21(0x2b1),_0x193e21(0x3b3),'104.18.63.107#优选IP-185',_0x193e21(0x1b5),_0x193e21(0x448),_0x193e21(0x239),_0x193e21(0x1fd),_0x193e21(0x4dd),'172.65.21.190#优选IP-191',_0x193e21(0x20c),_0x193e21(0x46b),_0x193e21(0x48a),_0x193e21(0x4d9),'162.159.43.223#优选IP-196',_0x193e21(0x218),_0x193e21(0x2ef),_0x193e21(0x42a),_0x193e21(0x3e8),_0x193e21(0x226),_0x193e21(0x4ce),_0x193e21(0x492),_0x193e21(0x380),_0x193e21(0x3c0),_0x193e21(0x2bb),'104.19.68.127#优选IP-207','162.159.10.45#优选IP-208',_0x193e21(0x425),_0x193e21(0x404),_0x193e21(0x496),_0x193e21(0x1cc),_0x193e21(0x28c),_0x193e21(0x446),_0x193e21(0x26c),_0x193e21(0x2e3),_0x193e21(0x357),_0x193e21(0x4e2),'188.114.97.63#优选IP-219','172.65.47.182#优选IP-220',_0x193e21(0x4cd),_0x193e21(0x227),_0x193e21(0x2f2),_0x193e21(0x476),_0x193e21(0x4d7),_0x193e21(0x39b),_0x193e21(0x37e),_0x193e21(0x207),_0x193e21(0x320),'162.159.9.18#优选IP-230',_0x193e21(0x210),_0x193e21(0x39a),_0x193e21(0x30d),'104.17.0.4#优选IP-234',_0x193e21(0x1cf),_0x193e21(0x4ed),_0x193e21(0x39d),_0x193e21(0x3a5),_0x193e21(0x1e6),_0x193e21(0x23b),_0x193e21(0x1dc),_0x193e21(0x49b),_0x193e21(0x39f),_0x193e21(0x369),_0x193e21(0x2da),'104.17.76.49#优选IP-246',_0x193e21(0x332),_0x193e21(0x322),_0x193e21(0x4e8),_0x193e21(0x35e),_0x193e21(0x199),_0x193e21(0x376),'162.159.90.82#优选IP-253',_0x193e21(0x49c),_0x193e21(0x40c),_0x193e21(0x456),'104.17.151.244#优选IP-257',_0x193e21(0x4f0),'104.18.144.168#优选IP-259',_0x193e21(0x358),_0x193e21(0x4c7),_0x193e21(0x270),_0x193e21(0x1d8),'104.20.17.160#优选IP-264',_0x193e21(0x48d),_0x193e21(0x235),_0x193e21(0x307),'104.19.83.33#优选IP-268','188.114.96.238#优选IP-269','162.159.42.67#优选IP-270',_0x193e21(0x29b),'104.25.126.144#优选IP-272',_0x193e21(0x1f1),_0x193e21(0x46d),_0x193e21(0x1c6),_0x193e21(0x23e),'104.25.238.28#优选IP-277','104.27.124.239#优选IP-278',_0x193e21(0x304),_0x193e21(0x241),'162.159.10.243#优选IP-281',_0x193e21(0x2de),_0x193e21(0x1da),_0x193e21(0x36c),'104.24.84.86#优选IP-285','104.25.238.237#优选IP-286',_0x193e21(0x33b),_0x193e21(0x1cb),_0x193e21(0x202),_0x193e21(0x475),_0x193e21(0x2ce),_0x193e21(0x2be),_0x193e21(0x2ed),_0x193e21(0x3ca),_0x193e21(0x42f),_0x193e21(0x1aa),_0x193e21(0x242),_0x193e21(0x4c4),_0x193e21(0x41d),_0x193e21(0x43b)],DEFAULT_PREFERRED_DOMAINS=[_0x193e21(0x2b9),'speed.marisalnc.com',_0x193e21(0x29d),'bestcf.top','cdn.2020111.xyz',_0x193e21(0x203),_0x193e21(0x33a),_0x193e21(0x416),_0x193e21(0x3e3),_0x193e21(0x39c),_0x193e21(0x41e),'cfip.1323123.xyz','cnamefuckxxs.yuchen.icu',_0x193e21(0x4b9),'115155.xyz',_0x193e21(0x1a3),_0x193e21(0x2c9),_0x193e21(0x3fc),_0x193e21(0x40f),'cf.877771.xyz','xn--b6gac.eu.org','bestcf.030101.xyz',_0x193e21(0x4dc),_0x193e21(0x29e),_0x193e21(0x403)][_0x193e21(0x2b6)]('\x0a'),HTTP_PORTS=new Set([0x50,0x1f90,0x22b0,0x804,0x822,0x826,0x82f]),OPTIMIZE_SOURCES={'wetest_v4':{'label':_0x193e21(0x1a4),'url':_0x193e21(0x22d)},'wetest_v6':{'label':_0x193e21(0x2e1),'url':_0x193e21(0x290)},'bestcf':{'label':_0x193e21(0x3bb),'url':_0x193e21(0x43c)},'hostmonit':{'label':_0x193e21(0x401),'url':'https://stock.hostmonit.com/CloudFlareYes'},'wetest_cname':{'label':_0x193e21(0x362),'url':_0x193e21(0x421)}},TE=new TextEncoder(),TD=new TextDecoder();function b64FromBytes(_0x157457){const _0xfe85a1=_0x193e21;let _0x597906='';const _0x2968ba=0x8000;for(let _0x14f26c=0x0;_0x14f26c<_0x157457[_0xfe85a1(0x283)];_0x14f26c+=_0x2968ba){_0x597906+=String[_0xfe85a1(0x2cf)](..._0x157457[_0xfe85a1(0x2e2)](_0x14f26c,_0x14f26c+_0x2968ba));}return btoa(_0x597906);}const MD5_S=[0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15],MD5_K=[0xd76aa478,0xe8c7b756,0x242070db,0xc1bdceee,0xf57c0faf,0x4787c62a,0xa8304613,0xfd469501,0x698098d8,0x8b44f7af,0xffff5bb1,0x895cd7be,0x6b901122,0xfd987193,0xa679438e,0x49b40821,0xf61e2562,0xc040b340,0x265e5a51,0xe9b6c7aa,0xd62f105d,0x2441453,0xd8a1e681,0xe7d3fbc8,0x21e1cde6,0xc33707d6,0xf4d50d87,0x455a14ed,0xa9e3e905,0xfcefa3f8,0x676f02d9,0x8d2a4c8a,0xfffa3942,0x8771f681,0x6d9d6122,0xfde5380c,0xa4beea44,0x4bdecfa9,0xf6bb4b60,0xbebfbc70,0x289b7ec6,0xeaa127fa,0xd4ef3085,0x4881d05,0xd9d4d039,0xe6db99e5,0x1fa27cf8,0xc4ac5665,0xf4292244,0x432aff97,0xab9423a7,0xfc93a039,0x655b59c3,0x8f0ccc92,0xffeff47d,0x85845dd1,0x6fa87e4f,0xfe2ce6e0,0xa3014314,0x4e0811a1,0xf7537e82,0xbd3af235,0x2ad7d2bb,0xeb86d391];function rotl32(_0xfd130b,_0x59719a){return(_0xfd130b<<_0x59719a|_0xfd130b>>>0x20-_0x59719a)>>>0x0;}function md5hex(_0x2b2731){const _0xde848a=_0x193e21,_0x1bdf16=TE[_0xde848a(0x379)](String(_0x2b2731)),_0x572476=_0x1bdf16['length']*0x8,_0x5a9cf4=(_0x1bdf16[_0xde848a(0x283)]+0x8>>0x6)+0x1<<0x6,_0x5a90d8=new Uint8Array(_0x5a9cf4);_0x5a90d8[_0xde848a(0x1f5)](_0x1bdf16),_0x5a90d8[_0x1bdf16[_0xde848a(0x283)]]=0x80;const _0x3704d9=new DataView(_0x5a90d8[_0xde848a(0x260)]);_0x3704d9[_0xde848a(0x24c)](_0x5a9cf4-0x8,_0x572476>>>0x0,!![]),_0x3704d9[_0xde848a(0x24c)](_0x5a9cf4-0x4,Math[_0xde848a(0x452)](_0x572476/0x100000000),!![]);let _0x373223=0x67452301,_0x58e0f9=0xefcdab89,_0x1086d4=0x98badcfe,_0xec9594=0x10325476;for(let _0x24de1d=0x0;_0x24de1d<_0x5a9cf4;_0x24de1d+=0x40){const _0x196b21=new Uint32Array(0x10);for(let _0x16c6f9=0x0;_0x16c6f9<0x10;_0x16c6f9++)_0x196b21[_0x16c6f9]=_0x3704d9[_0xde848a(0x4c9)](_0x24de1d+_0x16c6f9*0x4,!![]);let _0x95ed7f=_0x373223,_0x1405ff=_0x58e0f9,_0x22563f=_0x1086d4,_0x4d32e1=_0xec9594;for(let _0x20e9c1=0x0;_0x20e9c1<0x40;_0x20e9c1++){let _0x3233b9,_0x247b03;if(_0x20e9c1<0x10)_0x3233b9=_0x1405ff&_0x22563f|~_0x1405ff&_0x4d32e1,_0x247b03=_0x20e9c1;else{if(_0x20e9c1<0x20)_0x3233b9=_0x4d32e1&_0x1405ff|~_0x4d32e1&_0x22563f,_0x247b03=(0x5*_0x20e9c1+0x1)%0x10;else _0x20e9c1<0x30?(_0x3233b9=_0x1405ff^_0x22563f^_0x4d32e1,_0x247b03=(0x3*_0x20e9c1+0x5)%0x10):(_0x3233b9=_0x22563f^(_0x1405ff|~_0x4d32e1),_0x247b03=0x7*_0x20e9c1%0x10);}const _0x710b19=_0x95ed7f+_0x3233b9+MD5_K[_0x20e9c1]+_0x196b21[_0x247b03]>>>0x0,_0xb2f7f5=_0x1405ff+rotl32(_0x710b19,MD5_S[_0x20e9c1])>>>0x0;_0x95ed7f=_0x4d32e1,_0x4d32e1=_0x22563f,_0x22563f=_0x1405ff,_0x1405ff=_0xb2f7f5;}_0x373223=_0x373223+_0x95ed7f>>>0x0,_0x58e0f9=_0x58e0f9+_0x1405ff>>>0x0,_0x1086d4=_0x1086d4+_0x22563f>>>0x0,_0xec9594=_0xec9594+_0x4d32e1>>>0x0;}let _0x41d7a3='';for(const _0x310366 of[_0x373223,_0x58e0f9,_0x1086d4,_0xec9594]){_0x41d7a3+=(_0x310366&0xff)[_0xde848a(0x3f8)](0x10)['padStart'](0x2,'0'),_0x41d7a3+=(_0x310366>>>0x8&0xff)['toString'](0x10)['padStart'](0x2,'0'),_0x41d7a3+=(_0x310366>>>0x10&0xff)[_0xde848a(0x3f8)](0x10)[_0xde848a(0x21f)](0x2,'0'),_0x41d7a3+=(_0x310366>>>0x18&0xff)[_0xde848a(0x3f8)](0x10)[_0xde848a(0x21f)](0x2,'0');}return _0x41d7a3;}function uuidv4(){const _0xb46435=_0x193e21;if(crypto[_0xb46435(0x21e)])return crypto[_0xb46435(0x21e)]();const _0x4c9ebe=crypto[_0xb46435(0x1f6)](new Uint8Array(0x10));return _0x4c9ebe[0x6]=_0x4c9ebe[0x6]&0xf|0x40,_0x4c9ebe[0x8]=_0x4c9ebe[0x8]&0x3f|0x80,[..._0x4c9ebe][_0xb46435(0x209)]((_0x52505c,_0x3de158)=>(_0x3de158===0x4||_0x3de158===0x6||_0x3de158===0x8||_0x3de158===0xa?'-':'')+_0x52505c[_0xb46435(0x3f8)](0x10)['padStart'](0x2,'0'))[_0xb46435(0x2b6)]('');}function isUUID(_0x3cb742){const _0x217f6e=_0x193e21;return/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/[_0x217f6e(0x495)](_0x3cb742||'');}function parseHostPort(_0x2fd658,_0x419c8a=0x1bb){const _0x58cb15=_0x193e21;_0x2fd658=String(_0x2fd658||'')['trim']();if(!_0x2fd658)return{'host':'','port':_0x419c8a};if(_0x2fd658[_0x58cb15(0x1ec)]('[')){const _0xb041f5=_0x2fd658[_0x58cb15(0x20f)](/^\[([^\]]+)\](?::(\d+))?$/);return{'host':_0xb041f5?_0xb041f5[0x1]:_0x2fd658[_0x58cb15(0x411)](/^\[|\]$/g,''),'port':_0xb041f5&&_0xb041f5[0x2]?parseInt(_0xb041f5[0x2]):_0x419c8a};}const _0xe64354=_0x2fd658['lastIndexOf'](':');if(_0xe64354>0x0&&/^\d+$/[_0x58cb15(0x495)](_0x2fd658['slice'](_0xe64354+0x1)))return{'host':_0x2fd658[_0x58cb15(0x1ab)](0x0,_0xe64354),'port':parseInt(_0x2fd658['slice'](_0xe64354+0x1))};return{'host':_0x2fd658,'port':_0x419c8a};}function isValidIp(_0x855980){const _0x1961ee=_0x193e21;_0x855980=String(_0x855980||'')[_0x1961ee(0x34f)]();if(!_0x855980)return![];const _0x3ec7a8=_0x855980['match'](/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);if(_0x3ec7a8)return _0x3ec7a8[_0x1961ee(0x1ab)](0x1)[_0x1961ee(0x24f)](_0x37ecc1=>Number(_0x37ecc1)<=0xff);if(!/^[0-9a-fA-F:]+$/[_0x1961ee(0x495)](_0x855980))return![];if((_0x855980['match'](/::/g)||[])[_0x1961ee(0x283)]>0x1)return![];const _0x2c3f50=_0x855980[_0x1961ee(0x363)]('::'),_0xcd9d96=_0x855980[_0x1961ee(0x411)](/::/g,':')[_0x1961ee(0x49e)](':')['filter'](Boolean);if(!_0x2c3f50&&_0xcd9d96[_0x1961ee(0x283)]!==0x8)return![];if(_0x2c3f50&&(_0xcd9d96[_0x1961ee(0x283)]<0x1||_0xcd9d96[_0x1961ee(0x283)]>0x7))return![];return _0xcd9d96['every'](_0x1b73a1=>/^[0-9a-fA-F]{1,4}$/[_0x1961ee(0x495)](_0x1b73a1));}function formatIPv6(_0x1ccb2d){const _0x1dcb87=_0x193e21,_0x5634e7=[];for(let _0x239807=0x0;_0x239807<0x10;_0x239807+=0x2)_0x5634e7[_0x1dcb87(0x4bd)]((_0x1ccb2d[_0x239807]<<0x8|_0x1ccb2d[_0x239807+0x1])['toString'](0x10));let _0x53b21b=-0x1,_0x59a949=0x0,_0x391113=-0x1,_0x5b2f25=0x0;for(let _0x29b6c9=0x0;_0x29b6c9<0x8;_0x29b6c9++){if(_0x5634e7[_0x29b6c9]==='0'){if(_0x391113<0x0)_0x391113=_0x29b6c9,_0x5b2f25=0x1;else _0x5b2f25++;_0x5b2f25>_0x59a949&&(_0x59a949=_0x5b2f25,_0x53b21b=_0x391113);}else _0x391113=-0x1,_0x5b2f25=0x0;}if(_0x59a949>=0x2){const _0x58288d=_0x5634e7['slice'](0x0,_0x53b21b)[_0x1dcb87(0x2b6)](':'),_0x1f13df=_0x5634e7[_0x1dcb87(0x1ab)](_0x53b21b+_0x59a949)[_0x1dcb87(0x2b6)](':');return(_0x58288d?_0x58288d+'::':'::')+_0x1f13df;}return _0x5634e7[_0x1dcb87(0x2b6)](':');}function _0x3b0b(_0x289d76,_0x11c0f9){_0x289d76=_0x289d76-0x198;const _0x5b3a64=_0x5b3a();let _0x3b0b12=_0x5b3a64[_0x289d76];return _0x3b0b12;}function cidrToRange(_0x3d73b9){const _0x361532=_0x193e21,[_0x161fdc,_0x54545f]=_0x3d73b9[_0x361532(0x49e)]('/'),_0x3800db=_0x161fdc[_0x361532(0x49e)]('.')[_0x361532(0x209)](Number),_0x2709b1=(_0x3800db[0x0]<<0x18|_0x3800db[0x1]<<0x10|_0x3800db[0x2]<<0x8|_0x3800db[0x3])>>>0x0,_0x1ab905=_0x54545f>=0x20?0x0:0xffffffff<<0x20-_0x54545f>>>0x0,_0x18bb92=(_0x2709b1&_0x1ab905)>>>0x0,_0x53dec4=(_0x2709b1|~_0x1ab905>>>0x0)>>>0x0;return[_0x18bb92,_0x53dec4];}const CLOUDFLARE_RANGES=CLOUDFLARE_CIDRS[_0x193e21(0x209)](cidrToRange),_rangeCache=new Map();function cidrRangeCached(_0x2634a0){const _0x39a440=_0x193e21;let _0x295c55=_rangeCache[_0x39a440(0x415)](_0x2634a0);return!_0x295c55&&(_0x295c55=cidrToRange(_0x2634a0),_rangeCache[_0x39a440(0x1f5)](_0x2634a0,_0x295c55)),_0x295c55;}function randomIPFromCidr(_0x2cebc2){const _0x12aad3=_0x193e21;if(String(_0x2cebc2)[_0x12aad3(0x3df)](':')>=0x0)return randomIP6FromCidr(_0x2cebc2);const [_0x194f6a,_0x3db1d0]=cidrRangeCached(_0x2cebc2),_0x3eaddb=_0x194f6a+Math[_0x12aad3(0x452)](Math[_0x12aad3(0x426)]()*(_0x3db1d0-_0x194f6a>>>0x0));return(_0x3eaddb>>>0x18&0xff)+'.'+(_0x3eaddb>>>0x10&0xff)+'.'+(_0x3eaddb>>>0x8&0xff)+'.'+(_0x3eaddb&0xff);}function randomIP6FromCidr(_0x4c4416){const _0x34d374=_0x193e21,[_0x5e8d96,_0x3dd631]=_0x4c4416[_0x34d374(0x49e)]('/'),_0x771cf8=parseInt(_0x3dd631,0xa)||0x0,_0x1d0fea=_0x342e7b=>{const _0x522cb9=_0x34d374,_0x56d7a9=_0x342e7b[_0x522cb9(0x3df)]('::');let _0xd17f79;if(_0x56d7a9>=0x0){const _0x8bfb0c=_0x342e7b['slice'](0x0,_0x56d7a9)[_0x522cb9(0x49e)](':')[_0x522cb9(0x4c3)](Boolean),_0x2c61a6=_0x342e7b[_0x522cb9(0x1ab)](_0x56d7a9+0x2)[_0x522cb9(0x49e)](':')['filter'](Boolean),_0x5c7a91=0x8-_0x8bfb0c[_0x522cb9(0x283)]-_0x2c61a6[_0x522cb9(0x283)];_0xd17f79=[..._0x8bfb0c,...Array(_0x5c7a91)['fill']('0'),..._0x2c61a6];}else _0xd17f79=_0x342e7b['split'](':');return _0xd17f79['map'](_0x2bf760=>_0x2bf760[_0x522cb9(0x21f)](0x4,'0'));},_0x1bda37=_0x1d0fea(_0x5e8d96)[_0x34d374(0x209)](_0x20f05d=>parseInt(_0x20f05d,0x10));let _0x830818=0x0;for(let _0x3fca78=0x0;_0x3fca78<0x8;_0x3fca78++)for(let _0x61458e=0xf;_0x61458e>=0x0;_0x61458e--){if(_0x830818>=_0x771cf8)_0x1bda37[_0x3fca78]|=(Math[_0x34d374(0x426)]()<0.5?0x1:0x0)<<_0x61458e;_0x830818++;}return _0x1bda37[_0x34d374(0x209)](_0x5c0fb6=>_0x5c0fb6[_0x34d374(0x3f8)](0x10))['join'](':');}function ipv4ToEmbeddedV6(_0x40bdfd){const _0x4c68ee=_0x193e21,_0x53865d=String(_0x40bdfd||'')[_0x4c68ee(0x49e)]('.')[_0x4c68ee(0x209)](_0x1de031=>parseInt(_0x1de031,0xa)[_0x4c68ee(0x3f8)](0x10)['padStart'](0x2,'0'));if(_0x53865d[_0x4c68ee(0x283)]!==0x4||_0x53865d['some'](_0x3448c3=>_0x3448c3===_0x4c68ee(0x33c)))return null;return _0x4c68ee(0x419)+_0x53865d[0x0]+_0x53865d[0x1]+':'+_0x53865d[0x2]+_0x53865d[0x3];}function randomIPsFromCidrs(_0x38dcd9,_0x12322d){const _0x1461bb=_0x193e21,_0xb861d2=new Set(),_0x2824a8=[];let _0x5fa1d5=0x0;while(_0x2824a8[_0x1461bb(0x283)]<_0x12322d&&_0x5fa1d5++<_0x12322d*0x14){const _0x1ca6b8=randomIPFromCidr(_0x38dcd9[Math[_0x1461bb(0x452)](Math[_0x1461bb(0x426)]()*_0x38dcd9[_0x1461bb(0x283)])]);!_0xb861d2[_0x1461bb(0x32d)](_0x1ca6b8)&&(_0xb861d2[_0x1461bb(0x41a)](_0x1ca6b8),_0x2824a8['push'](_0x1ca6b8));}return _0x2824a8;}function parseIPList(_0x50de5b){const _0x411981=_0x193e21,_0xfe411e=[],_0x2f704b=new Set();return String(_0x50de5b||'')[_0x411981(0x49e)](/[\n,;]+/)[_0x411981(0x209)](_0x5afeaf=>_0x5afeaf['trim']())['filter'](Boolean)['forEach'](_0x4bdfa8=>{const _0x35c289=_0x411981;let _0x221bc8='';if(_0x4bdfa8[_0x35c289(0x363)]('#')){const [_0x21fc9c,_0x20750e]=_0x4bdfa8[_0x35c289(0x49e)]('#');_0x4bdfa8=_0x21fc9c,_0x221bc8=_0x20750e;}const {host:_0x57f316,port:_0x7943e5}=parseHostPort(_0x4bdfa8,0x1bb);_0x57f316&&isValidIp(_0x57f316)&&!_0x2f704b[_0x35c289(0x32d)](_0x57f316)&&(_0x2f704b['add'](_0x57f316),_0xfe411e[_0x35c289(0x4bd)]({'ip':_0x57f316,'port':_0x7943e5,'name':_0x221bc8}));}),_0xfe411e;}function parseProxyAddress(_0x1b4806){const _0x96d001=_0x193e21;if(!_0x1b4806)return null;let _0x177516='socks5',_0x2f3073=String(_0x1b4806)[_0x96d001(0x34f)]();const _0x3b344c=_0x2f3073[_0x96d001(0x20f)](/^(socks5|http|https|ss):\/\/(.+)$/i);_0x3b344c&&(_0x177516=_0x3b344c[0x1][_0x96d001(0x4d2)](),_0x2f3073=_0x3b344c[0x2]);if(_0x177516==='ss')return parseSsProxy(_0x2f3073);let _0x29ce92='',_0x2d065='';if(_0x2f3073[_0x96d001(0x363)]('@')){const [_0x1c8c7e,_0x27adc5]=_0x2f3073[_0x96d001(0x49e)]('@'),_0x44a22d=_0x39e660=>{try{return decodeURIComponent(_0x39e660);}catch(_0x21f7e5){return _0x39e660;}},_0x4f9324=_0x1c8c7e[_0x96d001(0x3df)](':');if(_0x4f9324>=0x0)_0x29ce92=_0x44a22d(_0x1c8c7e[_0x96d001(0x1ab)](0x0,_0x4f9324)),_0x2d065=_0x44a22d(_0x1c8c7e['slice'](_0x4f9324+0x1));else _0x29ce92=_0x44a22d(_0x1c8c7e);_0x2f3073=_0x27adc5;}const _0x3b14cc=_0x177516===_0x96d001(0x286)?0x50:_0x177516==='https'?0x1bb:0x438,{host:_0x352758,port:_0x320c69}=parseHostPort(_0x2f3073,_0x3b14cc);return{'type':_0x177516,'host':_0x352758,'port':_0x320c69,'user':_0x29ce92,'pass':_0x2d065};}function parseSsProxy(_0x59221f){const _0x17fcc4=_0x193e21;let _0x222dcf=_0x59221f,_0x43891f='';const _0xb3914a=_0x59221f[_0x17fcc4(0x3df)]('#');if(_0xb3914a>=0x0)_0x222dcf=_0x59221f['slice'](0x0,_0xb3914a);const _0x4542e1=_0x222dcf['lastIndexOf']('@');if(_0x4542e1>=0x0)_0x43891f=_0x222dcf[_0x17fcc4(0x1ab)](0x0,_0x4542e1),_0x222dcf=_0x222dcf[_0x17fcc4(0x1ab)](_0x4542e1+0x1);else{const _0x5a950c=b64ToUtf8(_0x222dcf);if(_0x5a950c&&_0x5a950c[_0x17fcc4(0x363)]('@')){const _0x261ba8=_0x5a950c[_0x17fcc4(0x1eb)]('@');_0x43891f=_0x5a950c[_0x17fcc4(0x1ab)](0x0,_0x261ba8),_0x222dcf=_0x5a950c[_0x17fcc4(0x1ab)](_0x261ba8+0x1);}}let _0x18cf5f='',_0x336754='';if(_0x43891f){let _0x2076a4=b64ToUtf8(_0x43891f)||_0x43891f;try{_0x2076a4=decodeURIComponent(_0x2076a4);}catch(_0x57c578){}const _0x512a7d=_0x2076a4[_0x17fcc4(0x3df)](':');if(_0x512a7d>0x0)_0x18cf5f=_0x2076a4[_0x17fcc4(0x1ab)](0x0,_0x512a7d),_0x336754=_0x2076a4[_0x17fcc4(0x1ab)](_0x512a7d+0x1);else _0x18cf5f=_0x2076a4;}const {host:_0x1c1bd6,port:_0x5dfb6d}=parseHostPort(_0x222dcf,0x20c4);return{'type':'ss','host':_0x1c1bd6,'port':_0x5dfb6d,'method':_0x18cf5f,'password':_0x336754};}function b64ToUtf8(_0x1470b3){const _0x4c68a9=_0x193e21;try{const _0x463000=atob(String(_0x1470b3)['replace'](/-/g,'+')[_0x4c68a9(0x411)](/_/g,'/')),_0x3669e3=new Uint8Array(_0x463000[_0x4c68a9(0x283)]);for(let _0x3ddda0=0x0;_0x3ddda0<_0x463000[_0x4c68a9(0x283)];_0x3ddda0++)_0x3669e3[_0x3ddda0]=_0x463000[_0x4c68a9(0x252)](_0x3ddda0);return new TextDecoder(_0x4c68a9(0x220))[_0x4c68a9(0x4de)](_0x3669e3);}catch(_0x27e3e5){return null;}}function json(_0x13bbc5,_0xb9af51){const _0x4615d0=_0x193e21;return new Response(JSON[_0x4615d0(0x44b)](_0x13bbc5),{'status':_0xb9af51||0xc8,'headers':{'Content-Type':'application/json;\x20charset=utf-8'}});}async function kvGetConfigCached(_0x30ddd1){const _0x25ba55=_0x193e21;try{return await _0x30ddd1['K'][_0x25ba55(0x415)](_0x25ba55(0x26f),{'cacheTtl':0x1e});}catch(_0x25363b){return null;}}function invalidateConfigCache(){}const INIT_POOL_TTL=0x6*0x3c*0x3c*0x3e8;async function kvGetInitPool(_0x4e783d){const _0x40a958=_0x193e21;if(!_0x4e783d||!_0x4e783d['K']||typeof _0x4e783d['K']['get']!=='function')return null;try{const _0x41b692=await _0x4e783d['K'][_0x40a958(0x415)]('initPool');if(!_0x41b692)return null;const _0x5a0def=JSON[_0x40a958(0x4e5)](_0x41b692);if(!_0x5a0def||!Array[_0x40a958(0x266)](_0x5a0def[_0x40a958(0x348)])||!_0x5a0def['ips']['length'])return null;if(Date[_0x40a958(0x3ad)]()-(_0x5a0def['at']||0x0)>INIT_POOL_TTL)return null;return _0x5a0def[_0x40a958(0x348)];}catch(_0xc0108f){return null;}}async function kvPutInitPool(_0x5e2d66,_0x14346d){const _0x3c2c05=_0x193e21;if(!_0x5e2d66||!_0x5e2d66['K']||typeof _0x5e2d66['K'][_0x3c2c05(0x4eb)]!==_0x3c2c05(0x28d))return;try{const _0x319e2a=(_0x14346d||[])[_0x3c2c05(0x4c3)](_0x25a97a=>_0x25a97a&&_0x25a97a['ip'])[_0x3c2c05(0x209)](_0x55961d=>({'ip':_0x55961d['ip'],'port':_0x55961d[_0x3c2c05(0x21c)]||0x1bb,'name':_0x55961d[_0x3c2c05(0x1d1)]||'','relay':!!_0x55961d[_0x3c2c05(0x1bd)]}))[_0x3c2c05(0x1ab)](0x0,0xfa);if(!_0x319e2a['length'])return;await _0x5e2d66['K'][_0x3c2c05(0x4eb)](_0x3c2c05(0x284),JSON[_0x3c2c05(0x44b)]({'at':Date[_0x3c2c05(0x3ad)](),'ips':_0x319e2a}));}catch(_0x2a382d){}}async function loadConfig(_0x5e9486){const _0xf59071=_0x193e21,_0x1e4abc=JSON[_0xf59071(0x4e5)](JSON['stringify'](DEFAULT_CONFIG));let _0x4e8cb9=![],_0x63b0e8=![];if(_0x5e9486['U'])_0x1e4abc[_0xf59071(0x3a7)]=String(_0x5e9486['U'])[_0xf59071(0x4d2)]();if(_0x5e9486['D']||_0x5e9486[_0xf59071(0x308)])_0x1e4abc[_0xf59071(0x4af)]=String(_0x5e9486['D']||_0x5e9486[_0xf59071(0x308)]);if(_0x5e9486[_0xf59071(0x45d)]||_0x5e9486[_0xf59071(0x3b0)])_0x1e4abc['admin']=String(_0x5e9486[_0xf59071(0x45d)]||_0x5e9486[_0xf59071(0x3b0)]);if(_0x5e9486[_0xf59071(0x267)])_0x1e4abc[_0xf59071(0x3bc)]=String(_0x5e9486['HOST'])['replace'](/^https?:\/\//,'')[_0xf59071(0x49e)]('/')[0x0];if(_0x5e9486[_0xf59071(0x2af)])_0x1e4abc[_0xf59071(0x258)]=String(_0x5e9486[_0xf59071(0x2af)]);if(_0x5e9486['S']||_0x5e9486[_0xf59071(0x321)])_0x1e4abc[_0xf59071(0x28b)]=String(_0x5e9486['S']||_0x5e9486[_0xf59071(0x321)]);if(_0x5e9486[_0xf59071(0x399)]==='true'||_0x5e9486[_0xf59071(0x399)]==='1')_0x1e4abc[_0xf59071(0x4d3)]=!![];if(_0x5e9486[_0xf59071(0x2f9)]===_0xf59071(0x2a8)||_0x5e9486['TROJAN']==='1')_0x1e4abc[_0xf59071(0x1c4)]=!![];if(_0x5e9486['TROJAN_PASSWORD'])_0x1e4abc['trojanPassword']=String(_0x5e9486[_0xf59071(0x1e8)]);if(_0x5e9486[_0xf59071(0x3c5)])_0x1e4abc[_0xf59071(0x1ca)]=String(_0x5e9486[_0xf59071(0x3c5)]);if(_0x5e9486['YX'])_0x1e4abc[_0xf59071(0x3cc)]=parseIPList(_0x5e9486['YX']);if(_0x5e9486[_0xf59071(0x44d)])_0x1e4abc['optimizer'][_0xf59071(0x2b5)]=String(_0x5e9486[_0xf59071(0x44d)]);if(_0x5e9486['PROBE_ALIVE']==='1'||_0x5e9486[_0xf59071(0x377)]===_0xf59071(0x2a8))_0x1e4abc['probeAlive']=!![];if(_0x5e9486[_0xf59071(0x377)]==='0'||_0x5e9486[_0xf59071(0x377)]==='false')_0x1e4abc[_0xf59071(0x349)]=![];if(_0x5e9486['K']&&typeof _0x5e9486['K'][_0xf59071(0x415)]===_0xf59071(0x28d))try{const _0x2e4315=await kvGetConfigCached(_0x5e9486);if(_0x2e4315){const _0x347c69=JSON[_0xf59071(0x4e5)](_0x2e4315);_0x63b0e8=!![];if(_0x347c69[_0xf59071(0x4e9)]!==undefined)_0x4e8cb9=!![];Object[_0xf59071(0x2a5)](_0x1e4abc,_0x347c69);if(_0x347c69[_0xf59071(0x3da)])_0x1e4abc[_0xf59071(0x3da)]=Object[_0xf59071(0x2a5)](JSON['parse'](JSON[_0xf59071(0x44b)](DEFAULT_CONFIG['optimizer'])),_0x347c69[_0xf59071(0x3da)]);if(_0x347c69[_0xf59071(0x3cc)]&&Array['isArray'](_0x347c69[_0xf59071(0x3cc)]))_0x1e4abc[_0xf59071(0x3cc)]=_0x347c69[_0xf59071(0x3cc)];if(_0x347c69[_0xf59071(0x3b0)])_0x1e4abc[_0xf59071(0x3b0)]=String(_0x347c69[_0xf59071(0x3b0)]);if(_0x347c69[_0xf59071(0x3a7)])_0x1e4abc[_0xf59071(0x3a7)]=String(_0x347c69[_0xf59071(0x3a7)])[_0xf59071(0x4d2)]();}}catch(_0x28b3db){}_0x1e4abc[_0xf59071(0x2cd)]=!!(_0x1e4abc[_0xf59071(0x2cd)]||_0x63b0e8),delete _0x1e4abc[_0xf59071(0x328)],delete _0x1e4abc['fragmentParam'],setProbeAlive(!!_0x1e4abc[_0xf59071(0x349)]),_0x1e4abc['uuid']=String(_0x1e4abc[_0xf59071(0x3a7)]||'')[_0xf59071(0x4d2)]();if(!isUUID(_0x1e4abc[_0xf59071(0x3a7)]))_0x1e4abc[_0xf59071(0x3a7)]=uuidv4();if(!_0x1e4abc[_0xf59071(0x4af)]||_0x1e4abc[_0xf59071(0x4af)]==='/'||_0x1e4abc[_0xf59071(0x4af)]==='')_0x1e4abc[_0xf59071(0x4af)]=_0x1e4abc[_0xf59071(0x3a7)];if(!Array[_0xf59071(0x266)](_0x1e4abc[_0xf59071(0x3cc)]))_0x1e4abc[_0xf59071(0x3cc)]=parseIPList(_0x1e4abc[_0xf59071(0x3cc)]);if(!_0x4e8cb9){const _0x2afd3f=Boolean(_0x1e4abc[_0xf59071(0x49f)]&&_0x1e4abc['cfApiToken']||_0x5e9486[_0xf59071(0x32b)]&&_0x5e9486[_0xf59071(0x2f1)]);if(_0x2afd3f)_0x1e4abc[_0xf59071(0x4e9)]=!![];}return _0x1e4abc;}async function saveConfig(_0x165c6a,_0x53abab){const _0x74149f=_0x193e21;if(!_0x165c6a['K']||typeof _0x165c6a['K'][_0x74149f(0x4eb)]!==_0x74149f(0x28d))return![];const _0x4178d1=JSON[_0x74149f(0x4e5)](JSON[_0x74149f(0x44b)](_0x53abab));if(_0x4178d1[_0x74149f(0x3b0)])_0x4178d1[_0x74149f(0x3b0)]=String(_0x4178d1['admin']);return await _0x165c6a['K'][_0x74149f(0x4eb)]('config',JSON[_0x74149f(0x44b)](_0x4178d1)),invalidateConfigCache(),!![];}let QUOTA_CACHE=null,QUOTA_BACKOFF=0x0;const QUOTA_LIMIT=0x186a0,QUOTA_TTL=0x493e0,QUOTA_BACKOFF_TTL=0xdbba0;async function getQuota(_0x286dc9,_0x391856){const _0x1b6c6b=_0x193e21,_0x387a63=String(_0x286dc9[_0x1b6c6b(0x32b)]||_0x391856&&_0x391856['cfAccountId']||'')['trim'](),_0x35c1db=String(_0x286dc9[_0x1b6c6b(0x2f1)]||_0x391856&&_0x391856['cfApiToken']||'')['trim']();if(!_0x387a63||!_0x35c1db)return{'configured':![]};const _0x4b9acb=Date['now']();if(_0x4b9acb<QUOTA_BACKOFF){if(QUOTA_CACHE&&QUOTA_CACHE['data'])return Object[_0x1b6c6b(0x2a5)]({},QUOTA_CACHE[_0x1b6c6b(0x1e9)],{'stale':!![],'error':_0x1b6c6b(0x49d)});return{'configured':!![],'error':'CF\x20API\x20限流(429)，请\x2015\x20分钟后再试'};}if(QUOTA_CACHE&&QUOTA_CACHE['at']&&_0x4b9acb-QUOTA_CACHE['at']<QUOTA_TTL)return QUOTA_CACHE[_0x1b6c6b(0x1e9)];try{const _0x156ea8=new Date();_0x156ea8[_0x1b6c6b(0x224)](0x0,0x0,0x0,0x0);const _0xc9ccd1=new Date(),_0x1c600d={'query':_0x1b6c6b(0x1fc),'variables':{'accountId':_0x387a63,'filter':{'datetime_geq':_0x156ea8[_0x1b6c6b(0x1fa)](),'datetime_leq':_0xc9ccd1[_0x1b6c6b(0x1fa)]()}}},_0x20d0d4=await fetch(_0x1b6c6b(0x2bf),{'method':_0x1b6c6b(0x47c),'headers':{'Content-Type':_0x1b6c6b(0x474),'Authorization':'Bearer\x20'+_0x35c1db},'body':JSON['stringify'](_0x1c600d)});if(!_0x20d0d4['ok'])throw new Error(_0x1b6c6b(0x1a2)+_0x20d0d4[_0x1b6c6b(0x24e)]);const _0x4d90e2=await _0x20d0d4[_0x1b6c6b(0x2d1)]();if(_0x4d90e2[_0x1b6c6b(0x39e)]&&_0x4d90e2[_0x1b6c6b(0x39e)][_0x1b6c6b(0x283)])throw new Error('GraphQL:\x20'+JSON[_0x1b6c6b(0x44b)](_0x4d90e2[_0x1b6c6b(0x39e)])[_0x1b6c6b(0x1ab)](0x0,0xc8));const _0x485d0e=_0x4d90e2&&_0x4d90e2[_0x1b6c6b(0x1e9)]&&_0x4d90e2[_0x1b6c6b(0x1e9)][_0x1b6c6b(0x38f)]&&_0x4d90e2[_0x1b6c6b(0x1e9)][_0x1b6c6b(0x38f)]['accounts']||[];if(!_0x485d0e['length'])throw new Error(_0x1b6c6b(0x27b));const _0x52c501=_0x485d0e[0x0],_0x478264=(_0x52c501['workersInvocationsAdaptive']||[])[0x0]||{},_0x422631=(_0x52c501[_0x1b6c6b(0x4c5)]||[])[_0x1b6c6b(0x25d)]((_0x5cbc49,_0x19f08b)=>_0x5cbc49+(_0x19f08b&&_0x19f08b[_0x1b6c6b(0x1b6)]&&_0x19f08b[_0x1b6c6b(0x1b6)][_0x1b6c6b(0x3ac)]||0x0),0x0),_0x5f74cc=(_0x478264[_0x1b6c6b(0x1b6)]&&_0x478264[_0x1b6c6b(0x1b6)][_0x1b6c6b(0x3ac)]||0x0)+_0x422631,_0x69ed7a=_0x478264[_0x1b6c6b(0x1a6)]&&_0x478264[_0x1b6c6b(0x1a6)][_0x1b6c6b(0x38c)]||0x0,_0x739300=_0x478264[_0x1b6c6b(0x1b6)]&&_0x478264['sum'][_0x1b6c6b(0x4d4)]||0x0,_0xf07531=QUOTA_LIMIT>0x0?Math[_0x1b6c6b(0x250)](_0x5f74cc/QUOTA_LIMIT*0x3e8)/0xa:0x0,_0x69b17b={'configured':!![],'limit':QUOTA_LIMIT,'today':{'requests':_0x5f74cc,'cpuTime':_0x69ed7a,'subrequests':_0x739300},'percent':_0xf07531,'remaining':Math[_0x1b6c6b(0x344)](0x0,QUOTA_LIMIT-_0x5f74cc),'updatedAt':_0xc9ccd1[_0x1b6c6b(0x1fa)]()};return QUOTA_CACHE={'at':_0x4b9acb,'data':_0x69b17b},_0x69b17b;}catch(_0x3d2875){const _0x2bc42a=_0x3d2875&&_0x3d2875[_0x1b6c6b(0x28a)]||String(_0x3d2875);if(_0x2bc42a[_0x1b6c6b(0x3df)]('429')>=0x0){QUOTA_BACKOFF=_0x4b9acb+QUOTA_BACKOFF_TTL;if(QUOTA_CACHE&&QUOTA_CACHE[_0x1b6c6b(0x1e9)])return Object[_0x1b6c6b(0x2a5)]({},QUOTA_CACHE['data'],{'stale':!![],'error':_0x1b6c6b(0x49d)});return{'configured':!![],'error':_0x1b6c6b(0x388)};}return{'configured':!![],'error':_0x2bc42a};}}function readAddress(_0x1b8832,_0x1efbb9,_0x2fc29e,_0x56fd42){const _0xb48aef=_0x193e21;if(_0x56fd42===0x1)return{'addr':_0x1efbb9[_0xb48aef(0x19e)](_0x2fc29e)+'.'+_0x1efbb9[_0xb48aef(0x19e)](_0x2fc29e+0x1)+'.'+_0x1efbb9[_0xb48aef(0x19e)](_0x2fc29e+0x2)+'.'+_0x1efbb9[_0xb48aef(0x19e)](_0x2fc29e+0x3),'len':0x4};if(_0x56fd42===0x2){const _0x22c1ec=_0x1efbb9[_0xb48aef(0x19e)](_0x2fc29e),_0x5c53e3=_0x1b8832['subarray'](_0x2fc29e+0x1,_0x2fc29e+0x1+_0x22c1ec);return{'addr':TD[_0xb48aef(0x4de)](_0x5c53e3),'len':0x1+_0x22c1ec};}if(_0x56fd42===0x3){const _0x484df2=_0x1b8832[_0xb48aef(0x2e2)](_0x2fc29e,_0x2fc29e+0x10);return{'addr':formatIPv6(_0x484df2),'len':0x10};}throw new Error(_0xb48aef(0x1d7));}function parseVlessHeader(_0x5e7aaf){const _0xcd1376=_0x193e21;if(!_0x5e7aaf||_0x5e7aaf[_0xcd1376(0x233)]<0x1)throw new Error(_0xcd1376(0x451));const _0x12751f=new DataView(_0x5e7aaf[_0xcd1376(0x260)],_0x5e7aaf[_0xcd1376(0x26b)],_0x5e7aaf[_0xcd1376(0x233)]);let _0x3c3f14=0x0;if(_0x12751f[_0xcd1376(0x19e)](0x0)!==0x0)throw new Error(_0xcd1376(0x1c0));_0x3c3f14+=0x1+0x10;if(_0x3c3f14>=_0x5e7aaf[_0xcd1376(0x233)])throw new Error('VLESS\x20头部过短');const _0x27e117=_0x12751f['getUint8'](_0x3c3f14);_0x3c3f14+=0x1,_0x3c3f14+=_0x27e117;if(_0x3c3f14+0x3>_0x5e7aaf[_0xcd1376(0x233)])throw new Error(_0xcd1376(0x451));const _0x4d3332=_0x12751f['getUint8'](_0x3c3f14);_0x3c3f14+=0x1;const _0x233d73=_0x12751f[_0xcd1376(0x3b6)](_0x3c3f14);_0x3c3f14+=0x2;const _0x204fec=_0x12751f['getUint8'](_0x3c3f14);_0x3c3f14+=0x1;const {addr:_0x559f1a,len:_0x272800}=readAddress(_0x5e7aaf,_0x12751f,_0x3c3f14,_0x204fec);return _0x3c3f14+=_0x272800,{'command':_0x4d3332,'port':_0x233d73,'addr':_0x559f1a,'headerLength':_0x3c3f14,'earlyData':_0x5e7aaf[_0xcd1376(0x2e2)](_0x3c3f14)};}function parseTrojanHeader(_0x36585b){const _0xd22b21=_0x193e21;if(!_0x36585b||_0x36585b[_0xd22b21(0x233)]<0x3a+0x8)throw new Error(_0xd22b21(0x230));const _0x25d4cb=new DataView(_0x36585b['buffer'],_0x36585b[_0xd22b21(0x26b)],_0x36585b[_0xd22b21(0x233)]);let _0x1adbcf=0x3a;const _0x1a195a=_0x25d4cb[_0xd22b21(0x19e)](_0x1adbcf);_0x1adbcf+=0x1;const _0x280ef7=_0x25d4cb[_0xd22b21(0x19e)](_0x1adbcf);_0x1adbcf+=0x1;let _0x86fae4,_0x3e6d9f;if(_0x280ef7===0x1)_0x86fae4=_0x25d4cb[_0xd22b21(0x19e)](_0x1adbcf)+'.'+_0x25d4cb[_0xd22b21(0x19e)](_0x1adbcf+0x1)+'.'+_0x25d4cb['getUint8'](_0x1adbcf+0x2)+'.'+_0x25d4cb['getUint8'](_0x1adbcf+0x3),_0x3e6d9f=0x4;else{if(_0x280ef7===0x3){const _0xca9904=_0x25d4cb[_0xd22b21(0x19e)](_0x1adbcf);_0x86fae4=TD[_0xd22b21(0x4de)](_0x36585b['subarray'](_0x1adbcf+0x1,_0x1adbcf+0x1+_0xca9904)),_0x3e6d9f=0x1+_0xca9904;}else{if(_0x280ef7===0x4)_0x86fae4=formatIPv6(_0x36585b[_0xd22b21(0x2e2)](_0x1adbcf,_0x1adbcf+0x10)),_0x3e6d9f=0x10;else throw new Error('无法识别的地址类型');}}_0x1adbcf+=_0x3e6d9f;const _0x2bfd96=_0x25d4cb[_0xd22b21(0x3b6)](_0x1adbcf);return _0x1adbcf+=0x2,_0x1adbcf+=0x2,{'command':_0x1a195a,'port':_0x2bfd96,'addr':_0x86fae4,'password':TD['decode'](_0x36585b[_0xd22b21(0x2e2)](0x0,0x38)),'headerLength':_0x1adbcf};}const SHA256_K=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0xfc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x6ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];function sha224hex(_0x168001){const _0x9a706=_0x193e21,_0x28a7f5=TE[_0x9a706(0x379)](String(_0x168001)),_0x2aa36c=_0x28a7f5[_0x9a706(0x283)]*0x8,_0x409e72=(_0x28a7f5[_0x9a706(0x283)]+0x8>>0x6)+0x1<<0x6,_0x52ea10=new Uint8Array(_0x409e72);_0x52ea10['set'](_0x28a7f5),_0x52ea10[_0x28a7f5['length']]=0x80;const _0x594ca=new DataView(_0x52ea10['buffer']);_0x594ca[_0x9a706(0x24c)](_0x409e72-0x8,Math[_0x9a706(0x452)](_0x2aa36c/0x100000000),![]),_0x594ca[_0x9a706(0x24c)](_0x409e72-0x4,_0x2aa36c>>>0x0,![]);let _0x952385=0xc1059ed8,_0x2cca7d=0x367cd507,_0x4c5fe4=0x3070dd17,_0x757bbe=0xf70e5939,_0x54cb31=0xffc00b31,_0x45cf1b=0x68581511,_0x4882b0=0x64f98fa7,_0x356663=0xbefa4fa4;const _0x4de6bd=(_0x2ed963,_0x5ebf2c)=>_0x2ed963>>>_0x5ebf2c|_0x2ed963<<0x20-_0x5ebf2c;for(let _0x1e1457=0x0;_0x1e1457<_0x409e72;_0x1e1457+=0x40){const _0xfe9801=new Uint32Array(0x40);for(let _0x3a8aa4=0x0;_0x3a8aa4<0x10;_0x3a8aa4++)_0xfe9801[_0x3a8aa4]=_0x594ca[_0x9a706(0x4c9)](_0x1e1457+_0x3a8aa4*0x4,![]);for(let _0xc1e0c5=0x10;_0xc1e0c5<0x40;_0xc1e0c5++){const _0xd5dde5=_0x4de6bd(_0xfe9801[_0xc1e0c5-0xf],0x7)^_0x4de6bd(_0xfe9801[_0xc1e0c5-0xf],0x12)^_0xfe9801[_0xc1e0c5-0xf]>>>0x3,_0x1db90a=_0x4de6bd(_0xfe9801[_0xc1e0c5-0x2],0x11)^_0x4de6bd(_0xfe9801[_0xc1e0c5-0x2],0x13)^_0xfe9801[_0xc1e0c5-0x2]>>>0xa;_0xfe9801[_0xc1e0c5]=_0xfe9801[_0xc1e0c5-0x10]+_0xd5dde5+_0xfe9801[_0xc1e0c5-0x7]+_0x1db90a>>>0x0;}let _0x43342c=_0x952385,_0x4c433b=_0x2cca7d,_0x87f924=_0x4c5fe4,_0x6db3fc=_0x757bbe,_0x2733c5=_0x54cb31,_0x1e05d8=_0x45cf1b,_0x49a90c=_0x4882b0,_0x3b6676=_0x356663;for(let _0x12d596=0x0;_0x12d596<0x40;_0x12d596++){const _0x54b0ed=_0x4de6bd(_0x2733c5,0x6)^_0x4de6bd(_0x2733c5,0xb)^_0x4de6bd(_0x2733c5,0x19),_0x28daf0=_0x2733c5&_0x1e05d8^~_0x2733c5&_0x49a90c,_0x255019=_0x3b6676+_0x54b0ed+_0x28daf0+SHA256_K[_0x12d596]+_0xfe9801[_0x12d596]>>>0x0,_0x344c0d=_0x4de6bd(_0x43342c,0x2)^_0x4de6bd(_0x43342c,0xd)^_0x4de6bd(_0x43342c,0x16),_0x48cfaf=_0x43342c&_0x4c433b^_0x43342c&_0x87f924^_0x4c433b&_0x87f924,_0x2a373b=_0x344c0d+_0x48cfaf>>>0x0;_0x3b6676=_0x49a90c,_0x49a90c=_0x1e05d8,_0x1e05d8=_0x2733c5,_0x2733c5=_0x6db3fc+_0x255019>>>0x0,_0x6db3fc=_0x87f924,_0x87f924=_0x4c433b,_0x4c433b=_0x43342c,_0x43342c=_0x255019+_0x2a373b>>>0x0;}_0x952385=_0x952385+_0x43342c>>>0x0,_0x2cca7d=_0x2cca7d+_0x4c433b>>>0x0,_0x4c5fe4=_0x4c5fe4+_0x87f924>>>0x0,_0x757bbe=_0x757bbe+_0x6db3fc>>>0x0,_0x54cb31=_0x54cb31+_0x2733c5>>>0x0,_0x45cf1b=_0x45cf1b+_0x1e05d8>>>0x0,_0x4882b0=_0x4882b0+_0x49a90c>>>0x0,_0x356663=_0x356663+_0x3b6676>>>0x0;}let _0x470563='';for(const _0x2bb9fc of[_0x952385,_0x2cca7d,_0x4c5fe4,_0x757bbe,_0x54cb31,_0x45cf1b,_0x4882b0]){_0x470563+=(_0x2bb9fc>>>0x18&0xff)[_0x9a706(0x3f8)](0x10)['padStart'](0x2,'0'),_0x470563+=(_0x2bb9fc>>>0x10&0xff)[_0x9a706(0x3f8)](0x10)[_0x9a706(0x21f)](0x2,'0'),_0x470563+=(_0x2bb9fc>>>0x8&0xff)[_0x9a706(0x3f8)](0x10)[_0x9a706(0x21f)](0x2,'0'),_0x470563+=(_0x2bb9fc&0xff)['toString'](0x10)['padStart'](0x2,'0');}return _0x470563;}let _trojanPassC='',_trojanHashC='';function trojanPasswordHash(_0x4e667f){return _0x4e667f!==_trojanPassC&&(_trojanPassC=_0x4e667f,_trojanHashC=sha224hex(_0x4e667f)),_trojanHashC;}function detectTrojan(_0x4580bc,_0x339be0){const _0x4188e8=_0x193e21;if(!_0x339be0[_0x4188e8(0x1c4)]||!_0x4580bc||_0x4580bc[_0x4188e8(0x233)]<0x3a)return![];const _0x5f502e=_0x4580bc[_0x4188e8(0x2e2)](0x0,0x38);if(TD[_0x4188e8(0x4de)](_0x5f502e)[_0x4188e8(0x4d2)]()===trojanPasswordHash(_0x339be0[_0x4188e8(0x268)]||_0x339be0[_0x4188e8(0x3a7)]))return!![];if(_0x4580bc[0x38]===0xd&&_0x4580bc[0x39]===0xa){for(let _0x13aa90=0x0;_0x13aa90<0x38;_0x13aa90++){const _0x12d892=_0x5f502e[_0x13aa90];if(!(_0x12d892>=0x30&&_0x12d892<=0x39||_0x12d892>=0x61&&_0x12d892<=0x66||_0x12d892>=0x41&&_0x12d892<=0x46))return![];}return!![];}return![];}const DOH_ENDPOINTS=['https://doh.pub/dns-query','https://dns.alidns.com/resolve',_0x193e21(0x1a0),_0x193e21(0x365),_0x193e21(0x1a1),_0x193e21(0x236)];function ipv6ToBytes(_0x58ec35){const _0x514153=_0x193e21,_0x40a088=String(_0x58ec35)[_0x514153(0x49e)]('::'),_0x3bdfaa=_0x40a088[0x0]?_0x40a088[0x0][_0x514153(0x49e)](':')[_0x514153(0x4c3)](Boolean):[],_0xc37704=_0x40a088[0x1]?_0x40a088[0x1][_0x514153(0x49e)](':')['filter'](Boolean):[],_0x24ce36=[..._0x3bdfaa,...Array(Math[_0x514153(0x344)](0x0,0x8-_0x3bdfaa[_0x514153(0x283)]-_0xc37704[_0x514153(0x283)]))[_0x514153(0x309)]('0'),..._0xc37704],_0x5a44f7=new Uint8Array(0x10);return _0x24ce36[_0x514153(0x2ec)]((_0x5896fc,_0x16492b)=>{const _0x20fae3=parseInt(_0x5896fc,0x10)||0x0;_0x5a44f7[_0x16492b*0x2]=_0x20fae3>>0x8&0xff,_0x5a44f7[_0x16492b*0x2+0x1]=_0x20fae3&0xff;}),_0x5a44f7;}async function dnsToDoH(_0x2b9ce8){const _0x4f4fc6=_0x193e21;if(!_0x2b9ce8||_0x2b9ce8[_0x4f4fc6(0x233)]<0x11)return null;const _0x954b7b=new DataView(_0x2b9ce8[_0x4f4fc6(0x260)],_0x2b9ce8['byteOffset'],_0x2b9ce8[_0x4f4fc6(0x233)]),_0x246936=_0x954b7b['getUint16'](0x0);if(_0x954b7b['getUint16'](0x2)&0x8000)return null;if(_0x954b7b['getUint16'](0x4)!==0x1)return null;let _0x4ecb91=0xc,_0xdfeb4b=[];while(_0x4ecb91<_0x2b9ce8[_0x4f4fc6(0x233)]){const _0x33a747=_0x954b7b['getUint8'](_0x4ecb91);if(_0x33a747===0x0){_0x4ecb91++;break;}if((_0x33a747&0xc0)===0xc0){_0x4ecb91+=0x2;break;}if(_0x4ecb91+0x1+_0x33a747>_0x2b9ce8['byteLength'])return null;_0xdfeb4b[_0x4f4fc6(0x4bd)](TD['decode'](_0x2b9ce8[_0x4f4fc6(0x2e2)](_0x4ecb91+0x1,_0x4ecb91+0x1+_0x33a747))),_0x4ecb91+=0x1+_0x33a747;}if(_0x4ecb91+0x4>_0x2b9ce8[_0x4f4fc6(0x233)]||_0xdfeb4b[_0x4f4fc6(0x283)]===0x0)return null;const _0x3fb6bc=_0x954b7b[_0x4f4fc6(0x3b6)](_0x4ecb91),_0x2291b2=_0x954b7b[_0x4f4fc6(0x3b6)](_0x4ecb91+0x2),_0x1bf6b8=_0x4ecb91+0x4;if(_0x3fb6bc!==0x1&&_0x3fb6bc!==0x1c)return null;const _0x38881f=_0xdfeb4b['join']('.'),_0x5743b7=_0x2b9ce8[_0x4f4fc6(0x2e2)](0xc,_0x1bf6b8);let _0x22135a=null;for(const _0x2cae66 of DOH_ENDPOINTS){try{const _0x2e683c=await fetchTimeout(_0x2cae66+_0x4f4fc6(0x43e)+encodeURIComponent(_0x38881f)+_0x4f4fc6(0x3a8)+_0x3fb6bc,{'headers':{'accept':_0x4f4fc6(0x489)}},0x1388);if(!_0x2e683c||!_0x2e683c['ok'])continue;const _0x42a125=await _0x2e683c[_0x4f4fc6(0x2d1)]();if(!_0x42a125||_0x42a125['Status']!==0x0)continue;const _0x5ce0e9=(_0x42a125[_0x4f4fc6(0x374)]||[])[_0x4f4fc6(0x4c3)](_0x142e2a=>_0x142e2a[_0x4f4fc6(0x40b)]===_0x3fb6bc&&(_0x142e2a[_0x4f4fc6(0x40b)]===0x1?isValidIp(String(_0x142e2a[_0x4f4fc6(0x1e9)])):/^[0-9a-fA-F:]+$/[_0x4f4fc6(0x495)](String(_0x142e2a[_0x4f4fc6(0x1e9)]))));if(_0x5ce0e9[_0x4f4fc6(0x283)]){_0x22135a=_0x5ce0e9;break;}}catch(_0x975a72){}}if(!_0x22135a)return null;const _0x1b225f=new Uint8Array(0xc),_0x57c656=new DataView(_0x1b225f['buffer']);_0x57c656[_0x4f4fc6(0x3db)](0x0,_0x246936),_0x57c656[_0x4f4fc6(0x3db)](0x2,0x8180),_0x57c656[_0x4f4fc6(0x3db)](0x4,0x1),_0x57c656['setUint16'](0x6,_0x22135a[_0x4f4fc6(0x283)]);const _0x333120=[_0x1b225f,_0x5743b7];for(const _0xc72afa of _0x22135a){const _0xded4c9=String(_0xc72afa[_0x4f4fc6(0x1e9)]),_0x391ea9=_0xc72afa[_0x4f4fc6(0x40b)]===0x1?Uint8Array[_0x4f4fc6(0x1bf)](_0xded4c9[_0x4f4fc6(0x49e)]('.')[_0x4f4fc6(0x209)](Number)):ipv6ToBytes(_0xded4c9);if(_0x391ea9[_0x4f4fc6(0x283)]!==(_0xc72afa['type']===0x1?0x4:0x10))continue;const _0x19edb7=new Uint8Array(0xa),_0x366ece=new DataView(_0x19edb7[_0x4f4fc6(0x260)]);_0x366ece[_0x4f4fc6(0x3db)](0x0,0xc00c),_0x366ece[_0x4f4fc6(0x3db)](0x2,_0xc72afa[_0x4f4fc6(0x40b)]),_0x366ece[_0x4f4fc6(0x3db)](0x4,_0x2291b2===0x0?0x1:_0x2291b2),_0x366ece[_0x4f4fc6(0x24c)](0x6,Number(_0xc72afa[_0x4f4fc6(0x371)])||0x12c),_0x333120[_0x4f4fc6(0x4bd)](_0x19edb7,new Uint8Array([_0x391ea9[_0x4f4fc6(0x283)]>>0x8&0xff,_0x391ea9['length']&0xff]),_0x391ea9);}let _0x1ac3f5=0x0;_0x333120['forEach'](_0x10cb54=>_0x1ac3f5+=_0x10cb54[_0x4f4fc6(0x233)]);const _0x5e2b1e=new Uint8Array(_0x1ac3f5);let _0x58b409=0x0;for(const _0x406c9b of _0x333120){_0x5e2b1e[_0x4f4fc6(0x1f5)](_0x406c9b,_0x58b409),_0x58b409+=_0x406c9b[_0x4f4fc6(0x233)];}return _0x5e2b1e;}function withTimeout(_0x1d143,_0x2adf1d,_0x2663b5){const _0x580411=_0x193e21;return Promise[_0x580411(0x221)]([_0x1d143,new Promise((_0xcb2e1b,_0x19e782)=>setTimeout(()=>_0x19e782(new Error(_0x2663b5||'操作超时')),_0x2adf1d||0x1770))]);}async function connectWithTimeout(_0x5f1bca,_0x56f8f2,_0x56765f){const _0x3720b9=_0x193e21,_0x1b23db=connect({'hostname':_0x5f1bca,'port':_0x56f8f2});try{await withTimeout(_0x1b23db[_0x3720b9(0x497)],_0x56765f||0x1770,_0x3720b9(0x48e));}catch(_0x2fd433){try{_0x1b23db[_0x3720b9(0x3fb)]();}catch(_0x3ca557){}throw _0x2fd433;}return _0x1b23db;}async function connectDirect(_0x698ff3,_0x257ac8){const _0x53d66d=_0x193e21;return connectWithTimeout(_0x698ff3['hostname'],_0x698ff3[_0x53d66d(0x21c)],_0x257ac8||0x1770);}async function connectViaSocks5(_0x4b3025,_0x463af2){const _0x4d773b=_0x193e21,_0x28d28e=await connectWithTimeout(_0x4b3025[_0x4d773b(0x3bc)],_0x4b3025['port'],0x1770),_0x484ffc=_0x28d28e['writable'][_0x4d773b(0x2ae)](),_0x38c206=_0x28d28e['readable'][_0x4d773b(0x1df)]();let _0x348757=new Uint8Array(0x0);const _0x32874a=async _0xe4a4ec=>{const _0x193417=_0x4d773b;while(_0x348757[_0x193417(0x283)]<_0xe4a4ec){const {done:_0x480549,value:_0x3d0493}=await _0x38c206['read']();if(_0x480549)throw new Error('连接被关闭');_0x348757=concatBytes(_0x348757,_0x3d0493);}const _0x5703b4=_0x348757[_0x193417(0x1ab)](0x0,_0xe4a4ec);return _0x348757=_0x348757[_0x193417(0x2e2)](_0xe4a4ec),_0x5703b4;},_0x4dbee8=_0x4b3025[_0x4d773b(0x22b)]?[0x5,0x2,0x0,0x2]:[0x5,0x1,0x0];await _0x484ffc[_0x4d773b(0x206)](new Uint8Array(_0x4dbee8));const _0x543f22=await _0x32874a(0x2);if(_0x543f22[0x0]!==0x5||_0x543f22[0x1]===0xff)throw new Error(_0x4d773b(0x3ef));if(_0x543f22[0x1]===0x2){if(!_0x4b3025[_0x4d773b(0x22b)])throw new Error(_0x4d773b(0x391));const _0x3de3d6=TE[_0x4d773b(0x379)](_0x4b3025[_0x4d773b(0x22b)]),_0x5c79f1=TE[_0x4d773b(0x379)](_0x4b3025[_0x4d773b(0x1d0)]),_0x43ec8f=new Uint8Array([0x1,_0x3de3d6['length'],..._0x3de3d6,_0x5c79f1[_0x4d773b(0x283)],..._0x5c79f1]);await _0x484ffc['write'](_0x43ec8f);const _0x2ff0ef=await _0x32874a(0x2);if(_0x2ff0ef[0x1]!==0x0)throw new Error(_0x4d773b(0x20b));}else{if(_0x543f22[0x1]!==0x0)throw new Error('SOCKS5\x20不支持的认证方法\x20'+_0x543f22[0x1]);}const _0x1035ee=TE['encode'](_0x463af2[_0x4d773b(0x4a7)]);let _0x3bcaab;/^\d+\.\d+\.\d+\.\d+$/[_0x4d773b(0x495)](_0x463af2[_0x4d773b(0x4a7)])?_0x3bcaab=new Uint8Array([0x5,0x1,0x0,0x1,..._0x463af2[_0x4d773b(0x4a7)][_0x4d773b(0x49e)]('.')[_0x4d773b(0x209)](Number),_0x463af2['port']>>0x8&0xff,_0x463af2['port']&0xff]):_0x3bcaab=new Uint8Array([0x5,0x1,0x0,0x3,_0x1035ee['length'],..._0x1035ee,_0x463af2[_0x4d773b(0x21c)]>>0x8&0xff,_0x463af2[_0x4d773b(0x21c)]&0xff]);await _0x484ffc[_0x4d773b(0x206)](_0x3bcaab);const _0x6b781c=await _0x32874a(0x4);if(_0x6b781c[0x1]!==0x0)throw new Error(_0x4d773b(0x33e)+_0x6b781c[0x1]);if(_0x6b781c[0x3]===0x1)await _0x32874a(0x6);else{if(_0x6b781c[0x3]===0x3){const _0x1224bb=(await _0x32874a(0x1))[0x0];await _0x32874a(_0x1224bb+0x2);}else{if(_0x6b781c[0x3]===0x4)await _0x32874a(0x12);}}if(_0x348757[_0x4d773b(0x233)]>0x0)_0x28d28e['_preamble']=_0x348757;return _0x484ffc[_0x4d773b(0x3c3)](),_0x38c206['releaseLock'](),_0x28d28e;}async function connectViaHttpProxy(_0x6018b3,_0x56467e){const _0x49535e=_0x193e21,_0xf7dc78=await connectWithTimeout(_0x6018b3[_0x49535e(0x3bc)],_0x6018b3[_0x49535e(0x21c)],0x1770),_0x12be43=_0xf7dc78['writable']['getWriter'](),_0xe2d4d8=_0xf7dc78[_0x49535e(0x457)][_0x49535e(0x1df)]();let _0x47de5d='';if(_0x6018b3['user'])_0x47de5d=_0x49535e(0x356)+b64FromBytes(TE['encode'](_0x6018b3[_0x49535e(0x22b)]+':'+_0x6018b3[_0x49535e(0x1d0)]))+'\x0d\x0a';const _0x108d78=_0x49535e(0x1f2)+_0x56467e[_0x49535e(0x4a7)]+':'+_0x56467e[_0x49535e(0x21c)]+_0x49535e(0x479)+_0x56467e[_0x49535e(0x4a7)]+':'+_0x56467e[_0x49535e(0x21c)]+'\x0d\x0a'+_0x47de5d+'\x0d\x0a';await _0x12be43[_0x49535e(0x206)](TE[_0x49535e(0x379)](_0x108d78));const {head:_0x20f1d1,leftover:_0x27c1e}=await readUntilCRLFCRLF(_0xe2d4d8);if(!/^HTTP\/\d\.\d\s+2\d\d/i[_0x49535e(0x495)](_0x20f1d1))throw new Error(_0x49535e(0x31d)+_0x20f1d1['split']('\x0d\x0a')[0x0]);if(_0x27c1e&&_0x27c1e[_0x49535e(0x233)]>0x0)_0xf7dc78[_0x49535e(0x440)]=_0x27c1e;return _0x12be43[_0x49535e(0x3c3)](),_0xe2d4d8[_0x49535e(0x3c3)](),_0xf7dc78;}function ssCipherAlgo(_0x2f5e07){const _0x163c92=_0x193e21,_0x5ada8b=String(_0x2f5e07||'')[_0x163c92(0x4d2)]()[_0x163c92(0x411)](/_/g,'-');if(_0x5ada8b==='aes-128-gcm'||_0x5ada8b===_0x163c92(0x35f))return{'name':_0x163c92(0x4a0),'keyLen':0x10};if(_0x5ada8b===_0x163c92(0x22f)||_0x5ada8b==='aes-256gcm')return{'name':_0x163c92(0x4a0),'keyLen':0x20};if(_0x5ada8b===_0x163c92(0x249)||_0x5ada8b===_0x163c92(0x35d)||_0x5ada8b===_0x163c92(0x21a))return{'name':'CHACHA20-POLY1305','keyLen':0x20};return null;}function sha1Bytes(_0x10cf7a){const _0x789bfe=_0x193e21,_0x12eaac=_0x10cf7a instanceof Uint8Array?_0x10cf7a:new Uint8Array(_0x10cf7a),_0x516824=_0x12eaac['length'],_0x382b3b=_0x516824*0x8,_0x28588a=new Uint8Array((_0x516824+0x8>>0x6)+0x1<<0x6);_0x28588a[_0x789bfe(0x1f5)](_0x12eaac),_0x28588a[_0x516824]=0x80;const _0x587640=new DataView(_0x28588a['buffer']);_0x587640[_0x789bfe(0x24c)](_0x28588a[_0x789bfe(0x283)]-0x8,Math[_0x789bfe(0x452)](_0x382b3b/0x100000000),![]),_0x587640[_0x789bfe(0x24c)](_0x28588a[_0x789bfe(0x283)]-0x4,_0x382b3b>>>0x0,![]);let _0x60532a=0x67452301,_0x30898c=0xefcdab89,_0x313c7c=0x98badcfe,_0x56dcd3=0x10325476,_0x4b5956=0xc3d2e1f0;const _0x52560f=new Uint32Array(0x50);for(let _0x16396e=0x0;_0x16396e<_0x28588a[_0x789bfe(0x283)];_0x16396e+=0x40){for(let _0x3c4351=0x0;_0x3c4351<0x10;_0x3c4351++)_0x52560f[_0x3c4351]=_0x587640['getUint32'](_0x16396e+_0x3c4351*0x4,![]);for(let _0x4fe9ec=0x10;_0x4fe9ec<0x50;_0x4fe9ec++)_0x52560f[_0x4fe9ec]=rotl32(_0x52560f[_0x4fe9ec-0x3]^_0x52560f[_0x4fe9ec-0x8]^_0x52560f[_0x4fe9ec-0xe]^_0x52560f[_0x4fe9ec-0x10],0x1);let _0x217aee=_0x60532a,_0x4c3e2e=_0x30898c,_0x3e3632=_0x313c7c,_0x24808c=_0x56dcd3,_0x58c66e=_0x4b5956;for(let _0x59621b=0x0;_0x59621b<0x50;_0x59621b++){let _0x32f20b,_0x268902;if(_0x59621b<0x14)_0x32f20b=_0x4c3e2e&_0x3e3632|~_0x4c3e2e&_0x24808c,_0x268902=0x5a827999;else{if(_0x59621b<0x28)_0x32f20b=_0x4c3e2e^_0x3e3632^_0x24808c,_0x268902=0x6ed9eba1;else _0x59621b<0x3c?(_0x32f20b=_0x4c3e2e&_0x3e3632|_0x4c3e2e&_0x24808c|_0x3e3632&_0x24808c,_0x268902=0x8f1bbcdc):(_0x32f20b=_0x4c3e2e^_0x3e3632^_0x24808c,_0x268902=0xca62c1d6);}const _0x1dde88=rotl32(_0x217aee,0x5)+_0x32f20b+_0x58c66e+_0x268902+_0x52560f[_0x59621b]>>>0x0;_0x58c66e=_0x24808c,_0x24808c=_0x3e3632,_0x3e3632=rotl32(_0x4c3e2e,0x1e),_0x4c3e2e=_0x217aee,_0x217aee=_0x1dde88;}_0x60532a=_0x60532a+_0x217aee>>>0x0,_0x30898c=_0x30898c+_0x4c3e2e>>>0x0,_0x313c7c=_0x313c7c+_0x3e3632>>>0x0,_0x56dcd3=_0x56dcd3+_0x24808c>>>0x0,_0x4b5956=_0x4b5956+_0x58c66e>>>0x0;}const _0x11b0ac=new Uint8Array(0x14),_0x53bf05=new DataView(_0x11b0ac[_0x789bfe(0x260)]);return _0x53bf05['setUint32'](0x0,_0x60532a,![]),_0x53bf05[_0x789bfe(0x24c)](0x4,_0x30898c,![]),_0x53bf05[_0x789bfe(0x24c)](0x8,_0x313c7c,![]),_0x53bf05[_0x789bfe(0x24c)](0xc,_0x56dcd3,![]),_0x53bf05['setUint32'](0x10,_0x4b5956,![]),_0x11b0ac;}function hmacSha1(_0x152582,_0x28718d){const _0x3379e9=_0x193e21,_0x22d2ef=0x40;let _0x429ecc=_0x152582;if(_0x429ecc[_0x3379e9(0x283)]>_0x22d2ef)_0x429ecc=sha1Bytes(_0x429ecc);const _0x439f35=new Uint8Array(_0x22d2ef),_0x5d2a5c=new Uint8Array(_0x22d2ef);for(let _0x452905=0x0;_0x452905<_0x22d2ef;_0x452905++){_0x439f35[_0x452905]=(_0x452905<_0x429ecc[_0x3379e9(0x283)]?_0x429ecc[_0x452905]:0x0)^0x36,_0x5d2a5c[_0x452905]=(_0x452905<_0x429ecc[_0x3379e9(0x283)]?_0x429ecc[_0x452905]:0x0)^0x5c;}return sha1Bytes(concatBytes(_0x5d2a5c,sha1Bytes(concatBytes(_0x439f35,_0x28718d))));}function hkdfSha1(_0x4be3c3,_0x15e755,_0x2c1b73){const _0x3dfeec=_0x193e21,_0x3a1339=hmacSha1(_0x15e755&&_0x15e755['length']?_0x15e755:new Uint8Array(0x14),_0x4be3c3);let _0x4dd03c=new Uint8Array(0x0),_0xb43db3=new Uint8Array(0x0);for(let _0x3ff845=0x1;_0xb43db3[_0x3dfeec(0x283)]<_0x2c1b73;_0x3ff845++){const _0x1194f5=new Uint8Array([_0x3ff845]);_0x4dd03c=hmacSha1(_0x3a1339,concatBytes(concatBytes(_0x4dd03c,TE[_0x3dfeec(0x379)](_0x3dfeec(0x2e5))),_0x1194f5)),_0xb43db3=concatBytes(_0xb43db3,_0x4dd03c);}return _0xb43db3[_0x3dfeec(0x1ab)](0x0,_0x2c1b73);}function chacha20Block(_0x3db02d,_0x42fc60,_0x4233c8){const _0x2cd193=_0x193e21,_0x2e738d=new Uint32Array(0x10);_0x2e738d[0x0]=0x61707865,_0x2e738d[0x1]=0x3320646e,_0x2e738d[0x2]=0x79622d32,_0x2e738d[0x3]=0x6b206574;const _0x392631=new DataView(_0x3db02d[_0x2cd193(0x260)],_0x3db02d[_0x2cd193(0x26b)],0x20);for(let _0x141bb8=0x0;_0x141bb8<0x8;_0x141bb8++)_0x2e738d[0x4+_0x141bb8]=_0x392631[_0x2cd193(0x4c9)](_0x141bb8*0x4,!![]);_0x2e738d[0xc]=_0x42fc60>>>0x0;const _0x36d696=new DataView(_0x4233c8[_0x2cd193(0x260)],_0x4233c8['byteOffset'],0xc);_0x2e738d[0xd]=_0x36d696[_0x2cd193(0x4c9)](0x0,!![]),_0x2e738d[0xe]=_0x36d696[_0x2cd193(0x4c9)](0x4,!![]),_0x2e738d[0xf]=_0x36d696['getUint32'](0x8,!![]);const _0x3cec0d=_0x2e738d[_0x2cd193(0x1ab)](),_0x237290=(_0x2c6b30,_0x2cd1d4,_0x4309dd,_0x1d49ec)=>{_0x3cec0d[_0x2c6b30]=_0x3cec0d[_0x2c6b30]+_0x3cec0d[_0x2cd1d4]>>>0x0,_0x3cec0d[_0x1d49ec]=rotl32(_0x3cec0d[_0x1d49ec]^_0x3cec0d[_0x2c6b30],0x10),_0x3cec0d[_0x4309dd]=_0x3cec0d[_0x4309dd]+_0x3cec0d[_0x1d49ec]>>>0x0,_0x3cec0d[_0x2cd1d4]=rotl32(_0x3cec0d[_0x2cd1d4]^_0x3cec0d[_0x4309dd],0xc),_0x3cec0d[_0x2c6b30]=_0x3cec0d[_0x2c6b30]+_0x3cec0d[_0x2cd1d4]>>>0x0,_0x3cec0d[_0x1d49ec]=rotl32(_0x3cec0d[_0x1d49ec]^_0x3cec0d[_0x2c6b30],0x8),_0x3cec0d[_0x4309dd]=_0x3cec0d[_0x4309dd]+_0x3cec0d[_0x1d49ec]>>>0x0,_0x3cec0d[_0x2cd1d4]=rotl32(_0x3cec0d[_0x2cd1d4]^_0x3cec0d[_0x4309dd],0x7);};for(let _0x4a3459=0x0;_0x4a3459<0xa;_0x4a3459++){_0x237290(0x0,0x4,0x8,0xc),_0x237290(0x1,0x5,0x9,0xd),_0x237290(0x2,0x6,0xa,0xe),_0x237290(0x3,0x7,0xb,0xf),_0x237290(0x0,0x5,0xa,0xf),_0x237290(0x1,0x6,0xb,0xc),_0x237290(0x2,0x7,0x8,0xd),_0x237290(0x3,0x4,0x9,0xe);}const _0xf76a17=new Uint8Array(0x40),_0x4a3f39=new DataView(_0xf76a17[_0x2cd193(0x260)]);for(let _0x1cce7b=0x0;_0x1cce7b<0x10;_0x1cce7b++){_0x3cec0d[_0x1cce7b]=_0x3cec0d[_0x1cce7b]+_0x2e738d[_0x1cce7b]>>>0x0,_0x4a3f39[_0x2cd193(0x24c)](_0x1cce7b*0x4,_0x3cec0d[_0x1cce7b],!![]);}return _0xf76a17;}function chacha20Xor(_0x3c8769,_0x5e75a1,_0x3f26ad,_0x2a2f13){const _0x3b7324=_0x193e21,_0x3613ce=_0x2a2f13[_0x3b7324(0x1ab)](),_0x1bb637=Math[_0x3b7324(0x3f1)](_0x2a2f13[_0x3b7324(0x283)]/0x40);for(let _0x24c496=0x0;_0x24c496<_0x1bb637;_0x24c496++){const _0x1f6e8f=chacha20Block(_0x3c8769,_0x3f26ad+_0x24c496,_0x5e75a1),_0x205bcc=_0x24c496*0x40,_0x20f639=Math['min'](0x40,_0x3613ce['length']-_0x205bcc);for(let _0xd7b5a7=0x0;_0xd7b5a7<_0x20f639;_0xd7b5a7++)_0x3613ce[_0x205bcc+_0xd7b5a7]^=_0x1f6e8f[_0xd7b5a7];}return _0x3613ce;}function poly1305(_0x20ccaa,_0x261c8b){const _0x34d832=_0x193e21;let _0x465e4b=0x0n,_0x42c55b=0x0n;for(let _0x424b53=0x0;_0x424b53<0x10;_0x424b53++){_0x465e4b|=BigInt(_0x20ccaa[_0x424b53])<<BigInt(0x8*_0x424b53),_0x42c55b|=BigInt(_0x20ccaa[0x10+_0x424b53])<<BigInt(0x8*_0x424b53);}_0x465e4b&=0xffffffc0ffffffc0ffffffc0fffffffn;let _0x3996c6=0x0n;const _0x3d4fd1=(0x1n<<0x82n)-0x5n;for(let _0x4eba3b=0x0;_0x4eba3b<_0x261c8b[_0x34d832(0x283)];_0x4eba3b+=0x10){const _0x5e22d2=Math[_0x34d832(0x281)](0x10,_0x261c8b['length']-_0x4eba3b);let _0x28c93f=0x1n;for(let _0x2f9598=_0x5e22d2-0x1;_0x2f9598>=0x0;_0x2f9598--)_0x28c93f=_0x28c93f<<0x8n|BigInt(_0x261c8b[_0x4eba3b+_0x2f9598]);_0x3996c6=(_0x3996c6+_0x28c93f)*_0x465e4b%_0x3d4fd1;}_0x3996c6=_0x3996c6+_0x42c55b&(0x1n<<0x80n)-0x1n;const _0x5710ba=new Uint8Array(0x10);for(let _0x45600d=0x0;_0x45600d<0x10;_0x45600d++)_0x5710ba[_0x45600d]=Number(_0x3996c6>>BigInt(0x8*_0x45600d)&0xffn);return _0x5710ba;}function chacha20Poly1305Seal(_0x5a8a23,_0xb038cd,_0xd748c5,_0x11566f){const _0x54a29e=_0x193e21,_0x10906f=_0x11566f||new Uint8Array(0x0),_0x48a257=chacha20Xor(_0x5a8a23,_0xb038cd,0x0,new Uint8Array(0x20)),_0x1fa400=chacha20Xor(_0x5a8a23,_0xb038cd,0x1,_0xd748c5),_0x4162d8=_0x4901b5=>new Uint8Array((0x10-_0x4901b5%0x10)%0x10),_0x57ae1a=_0x2350dd=>{const _0x2c07e6=_0x3b0b,_0x282cea=new Uint8Array(0x8),_0x3ed005=new DataView(_0x282cea['buffer']);return _0x3ed005[_0x2c07e6(0x24c)](0x0,_0x2350dd>>>0x0,!![]),_0x3ed005[_0x2c07e6(0x24c)](0x4,Math[_0x2c07e6(0x452)](_0x2350dd/0x100000000),!![]),_0x282cea;},_0xa66db7=concatBytes(_0x10906f,concatBytes(_0x4162d8(_0x10906f[_0x54a29e(0x283)]),concatBytes(_0x1fa400,concatBytes(_0x4162d8(_0x1fa400[_0x54a29e(0x283)]),concatBytes(_0x57ae1a(_0x10906f[_0x54a29e(0x283)]),_0x57ae1a(_0x1fa400[_0x54a29e(0x283)])))))),_0x5539fd=poly1305(_0x48a257,_0xa66db7);return concatBytes(_0x1fa400,_0x5539fd);}function chacha20Poly1305Open(_0x370cc6,_0x17d196,_0x4b6ac6,_0x504c48){const _0x259116=_0x193e21;if(_0x4b6ac6[_0x259116(0x283)]<0x10)throw new Error(_0x259116(0x389));const _0x2a8561=_0x4b6ac6[_0x259116(0x2e2)](0x0,_0x4b6ac6['length']-0x10),_0x5a1036=_0x4b6ac6[_0x259116(0x2e2)](_0x4b6ac6[_0x259116(0x283)]-0x10),_0x2f1743=_0x504c48||new Uint8Array(0x0),_0x4cbd3e=chacha20Xor(_0x370cc6,_0x17d196,0x0,new Uint8Array(0x20)),_0x515bb2=_0x4a6ced=>new Uint8Array((0x10-_0x4a6ced%0x10)%0x10),_0x49fb02=_0x502824=>{const _0xdc6255=_0x259116,_0x5483c4=new Uint8Array(0x8),_0x5e5a66=new DataView(_0x5483c4['buffer']);return _0x5e5a66[_0xdc6255(0x24c)](0x0,_0x502824>>>0x0,!![]),_0x5e5a66[_0xdc6255(0x24c)](0x4,Math[_0xdc6255(0x452)](_0x502824/0x100000000),!![]),_0x5483c4;},_0x95ba5c=concatBytes(_0x2f1743,concatBytes(_0x515bb2(_0x2f1743[_0x259116(0x283)]),concatBytes(_0x2a8561,concatBytes(_0x515bb2(_0x2a8561[_0x259116(0x283)]),concatBytes(_0x49fb02(_0x2f1743[_0x259116(0x283)]),_0x49fb02(_0x2a8561[_0x259116(0x283)])))))),_0x2b75c7=poly1305(_0x4cbd3e,_0x95ba5c);let _0x1674b1=0x0;for(let _0x7cd475=0x0;_0x7cd475<0x10;_0x7cd475++)_0x1674b1|=_0x2b75c7[_0x7cd475]^_0x5a1036[_0x7cd475];if(_0x1674b1!==0x0)return null;return chacha20Xor(_0x370cc6,_0x17d196,0x1,_0x2a8561);}async function newSsAead(_0x5243dc,_0x12e000){const _0x3666db=_0x193e21,_0x562ffc=new Uint8Array(0xc),_0x586ed9=()=>{const _0x3a7064=_0x3b0b,_0x5c0f48=_0x562ffc[_0x3a7064(0x1ab)]();for(let _0x35a217=0xb;_0x35a217>=0x0;_0x35a217--){_0x5c0f48[_0x35a217]++;if(_0x5c0f48[_0x35a217]!==0x0)break;}return _0x5c0f48;};if(_0x5243dc===_0x3666db(0x276))return{'seal'(_0x2df3db){return chacha20Poly1305Seal(_0x12e000,_0x586ed9(),_0x2df3db);},'open'(_0x1c9462){const _0x2dd3fe=_0x3666db,_0x234de7=chacha20Poly1305Open(_0x12e000,_0x586ed9(),_0x1c9462);if(!_0x234de7)throw new Error(_0x2dd3fe(0x1fb));return _0x234de7;}};const _0x463745=await crypto[_0x3666db(0x4e4)][_0x3666db(0x45f)](_0x3666db(0x1e5),_0x12e000,{'name':_0x5243dc},![],[_0x3666db(0x26e),_0x3666db(0x4a6)]);return{async 'seal'(_0x14069a){const _0x409a19=_0x3666db;return new Uint8Array(await crypto[_0x409a19(0x4e4)][_0x409a19(0x26e)]({'name':_0x5243dc,'iv':_0x586ed9()},_0x463745,_0x14069a));},async 'open'(_0x8e7efe){const _0x380122=_0x3666db;try{return new Uint8Array(await crypto[_0x380122(0x4e4)][_0x380122(0x4a6)]({'name':_0x5243dc,'iv':_0x586ed9()},_0x463745,_0x8e7efe));}catch(_0x5cb7b8){throw new Error(_0x380122(0x1fb));}}};}async function ssSealChunk(_0x4090e8,_0x2d17f8){const _0x139170=_0x193e21,_0x4548e1=new Uint8Array([_0x2d17f8[_0x139170(0x283)]>>0x8&0xff,_0x2d17f8[_0x139170(0x283)]&0xff]);return concatBytes(await _0x4090e8[_0x139170(0x223)](_0x4548e1),await _0x4090e8[_0x139170(0x223)](_0x2d17f8));}async function connectViaShadowsocks(_0x4a2db4,_0x56c938){const _0x5eb433=_0x193e21,_0x5e27df=ssCipherAlgo(_0x4a2db4['method']);if(!_0x5e27df)throw new Error(_0x5eb433(0x417)+(_0x4a2db4[_0x5eb433(0x312)]||_0x5eb433(0x25a)));if(!_0x4a2db4[_0x5eb433(0x4ec)])throw new Error('SS\x20出站缺少密码');const _0x3c91c2=await connectWithTimeout(_0x4a2db4[_0x5eb433(0x3bc)],_0x4a2db4[_0x5eb433(0x21c)],0x1770),_0x16a89c=_0x3c91c2[_0x5eb433(0x288)][_0x5eb433(0x2ae)](),_0x375fba=_0x3c91c2[_0x5eb433(0x457)][_0x5eb433(0x1df)]();let _0x2fdf1e=new Uint8Array(0x0);const _0x20b8cb=async _0x56a15a=>{const _0x5e0bb5=_0x5eb433;while(_0x2fdf1e[_0x5e0bb5(0x283)]<_0x56a15a){const {done:_0x1898fb,value:_0x1483d2}=await _0x375fba['read']();if(_0x1898fb)throw new Error(_0x5e0bb5(0x255));_0x2fdf1e=concatBytes(_0x2fdf1e,_0x1483d2);}const _0x18accd=_0x2fdf1e[_0x5e0bb5(0x1ab)](0x0,_0x56a15a);return _0x2fdf1e=_0x2fdf1e[_0x5e0bb5(0x2e2)](_0x56a15a),_0x18accd;},_0x44251a=new Uint8Array(await crypto[_0x5eb433(0x4e4)][_0x5eb433(0x225)](_0x5eb433(0x2bd),TE[_0x5eb433(0x379)](_0x4a2db4[_0x5eb433(0x4ec)]))),_0xc65859=crypto[_0x5eb433(0x1f6)](new Uint8Array(0x10)),_0x4f4f17=await newSsAead(_0x5e27df[_0x5eb433(0x1d1)],await hkdfSha1(_0x44251a,_0xc65859,_0x5e27df[_0x5eb433(0x471)]));await _0x16a89c[_0x5eb433(0x206)](_0xc65859),await _0x16a89c[_0x5eb433(0x206)](await ssSealChunk(_0x4f4f17,new Uint8Array(0x0)));const _0x4eab97=new ReadableStream({async 'start'(_0x3fbc12){const _0x4defae=_0x5eb433;try{const _0x47b2c8=await _0x20b8cb(0x10),_0x482702=await newSsAead(_0x5e27df[_0x4defae(0x1d1)],await hkdfSha1(_0x44251a,_0x47b2c8,_0x5e27df[_0x4defae(0x471)]));while(!![]){const _0x1d0275=await _0x482702[_0x4defae(0x2d6)](await _0x20b8cb(0x12)),_0x132794=_0x1d0275[0x0]<<0x8|_0x1d0275[0x1];if(_0x132794>0x4000)throw new Error(_0x4defae(0x4b3)+_0x132794);const _0x1a17f3=await _0x482702['open'](await _0x20b8cb(_0x132794+0x10));if(_0x132794>0x0)_0x3fbc12[_0x4defae(0x2c3)](_0x1a17f3);}}catch(_0x21c6c5){try{_0x3fbc12['error'](_0x21c6c5);}catch(_0xb0d09a){}}}}),_0x27e965=new WritableStream({async 'write'(_0x41698f){const _0x27e7ba=_0x5eb433,_0x283904=_0x41698f instanceof Uint8Array?_0x41698f:new Uint8Array(_0x41698f);for(let _0x563bef=0x0;_0x563bef<_0x283904[_0x27e7ba(0x283)];_0x563bef+=0x4000){await _0x16a89c[_0x27e7ba(0x206)](await ssSealChunk(_0x4f4f17,_0x283904['subarray'](_0x563bef,Math[_0x27e7ba(0x281)](_0x283904[_0x27e7ba(0x283)],_0x563bef+0x4000))));}},'close'(){const _0x59c97b=_0x5eb433;try{_0x16a89c[_0x59c97b(0x3fb)]();}catch(_0x5ce9af){}},'abort'(){const _0x1b40f3=_0x5eb433;try{_0x16a89c[_0x1b40f3(0x2f6)]();}catch(_0x5ae29c){}}});return{'readable':_0x4eab97,'writable':_0x27e965,'close'(){const _0x3ce718=_0x5eb433;try{_0x3c91c2[_0x3ce718(0x3fb)]();}catch(_0x572865){}}};}async function readN(_0x53980e,_0xe6b616){const _0x33c539=_0x193e21,_0x482ef4=new Uint8Array(_0xe6b616);let _0x523df2=0x0;while(_0x523df2<_0xe6b616){const {done:_0x4720e4,value:_0x79e071}=await _0x53980e[_0x33c539(0x24a)]();if(_0x4720e4)throw new Error(_0x33c539(0x47d));const _0x5f089a=_0xe6b616-_0x523df2;_0x482ef4[_0x33c539(0x1f5)](_0x79e071['subarray'](0x0,Math[_0x33c539(0x281)](_0x5f089a,_0x79e071[_0x33c539(0x283)])),_0x523df2),_0x523df2+=Math[_0x33c539(0x281)](_0x5f089a,_0x79e071[_0x33c539(0x283)]);}return _0x482ef4;}async function readUntilCRLFCRLF(_0x39e864){const _0x3bc545=_0x193e21;let _0x3a5468=new Uint8Array(0x0);while(_0x3a5468[_0x3bc545(0x283)]<0x10000){const {done:_0x9603f5,value:_0x3fd297}=await _0x39e864[_0x3bc545(0x24a)]();if(_0x9603f5)break;_0x3a5468=concatBytes(_0x3a5468,_0x3fd297);const _0xc20d60=findBytes(_0x3a5468,[0xd,0xa,0xd,0xa]);if(_0xc20d60>=0x0)return{'head':TD['decode'](_0x3a5468[_0x3bc545(0x2e2)](0x0,_0xc20d60)),'leftover':_0x3a5468['subarray'](_0xc20d60+0x4)};}return{'head':TD[_0x3bc545(0x4de)](_0x3a5468),'leftover':new Uint8Array(0x0)};}function concatBytes(_0x468613,_0x4b2a59){const _0x39d711=_0x193e21,_0x1bc085=new Uint8Array(_0x468613[_0x39d711(0x283)]+_0x4b2a59[_0x39d711(0x283)]);return _0x1bc085[_0x39d711(0x1f5)](_0x468613,0x0),_0x1bc085[_0x39d711(0x1f5)](_0x4b2a59,_0x468613[_0x39d711(0x283)]),_0x1bc085;}function findBytes(_0x3839d8,_0xcbb594){const _0x451946=_0x193e21;_0x30dbbd:for(let _0x474577=0x0;_0x474577<=_0x3839d8['length']-_0xcbb594[_0x451946(0x283)];_0x474577++){for(let _0x402ba2=0x0;_0x402ba2<_0xcbb594[_0x451946(0x283)];_0x402ba2++)if(_0x3839d8[_0x474577+_0x402ba2]!==_0xcbb594[_0x402ba2])continue _0x30dbbd;return _0x474577;}return-0x1;}const RELAY_DOMAINS={'HK':_0x193e21(0x2c4),'US':_0x193e21(0x45b),'SG':'proxyip.sg.cmliussss.net','JP':'proxyip.jp.cmliussss.net','KR':'proxyip.kr.cmliussss.net','DE':_0x193e21(0x48c),'SE':_0x193e21(0x435),'NL':_0x193e21(0x2e0),'FI':_0x193e21(0x4f6),'GB':_0x193e21(0x478),'Oracle':_0x193e21(0x4f1),'DigitalOcean':_0x193e21(0x26a),'Vultr':_0x193e21(0x264),'Multacom':_0x193e21(0x25e)};function selectRelayRegion(_0x4a1da8){const _0x1a2bb7=_0x193e21,_0x4d9004=(_0x4a1da8||'')[_0x1a2bb7(0x441)]();if(_0x4d9004[_0x1a2bb7(0x1ec)](_0x1a2bb7(0x382))||_0x4d9004['startsWith']('HK'))return'HK';if(_0x4d9004[_0x1a2bb7(0x1ec)](_0x1a2bb7(0x22c))||_0x4d9004[_0x1a2bb7(0x1ec)]('SG'))return'SG';if(_0x4d9004[_0x1a2bb7(0x1ec)](_0x1a2bb7(0x3cf))||_0x4d9004['startsWith']('KIX')||_0x4d9004[_0x1a2bb7(0x1ec)]('TYO')||_0x4d9004['startsWith']('OSA')||_0x4d9004[_0x1a2bb7(0x1ec)]('JP'))return'JP';if(_0x4d9004['startsWith']('ICN')||_0x4d9004[_0x1a2bb7(0x1ec)](_0x1a2bb7(0x38e))||_0x4d9004[_0x1a2bb7(0x1ec)]('KR'))return'KR';if(/^(HKG|SIN|NRT|KIX|ICN|TYO|OSA|SEL|HK|SG|JP|KR|SJC)/[_0x1a2bb7(0x495)](_0x4d9004))return'HK';if(_0x4d9004[_0x1a2bb7(0x1ec)](_0x1a2bb7(0x291))||_0x4d9004[_0x1a2bb7(0x1ec)](_0x1a2bb7(0x1c3))||_0x4d9004[_0x1a2bb7(0x1ec)](_0x1a2bb7(0x375))||_0x4d9004[_0x1a2bb7(0x1ec)](_0x1a2bb7(0x251))||_0x4d9004[_0x1a2bb7(0x1ec)](_0x1a2bb7(0x262))||_0x4d9004[_0x1a2bb7(0x1ec)](_0x1a2bb7(0x342))||_0x4d9004['startsWith']('DE'))return'DE';if(_0x4d9004[_0x1a2bb7(0x1ec)](_0x1a2bb7(0x2ba))||_0x4d9004[_0x1a2bb7(0x1ec)]('SE'))return'SE';if(_0x4d9004[_0x1a2bb7(0x1ec)](_0x1a2bb7(0x2c5))||_0x4d9004[_0x1a2bb7(0x1ec)]('NL'))return'NL';if(_0x4d9004['startsWith'](_0x1a2bb7(0x44e))||_0x4d9004[_0x1a2bb7(0x1ec)]('FI'))return'FI';if(_0x4d9004['startsWith'](_0x1a2bb7(0x3c6))||_0x4d9004[_0x1a2bb7(0x1ec)]('MAN')||_0x4d9004[_0x1a2bb7(0x1ec)]('GB')||_0x4d9004[_0x1a2bb7(0x1ec)]('UK'))return'GB';if(/^(FRA|ARN|AMS|HEL|LHR|MAN|CDG|MAD|VIE|ZRH|MXP|PRG|WAW|BER|MUC|DUS|HAM|STR|DE|SE|NL|FI|GB|UK|FR|ES|AT|CH|IT|CZ|PL)/['test'](_0x4d9004))return'DE';return'US';}const PROXYIP_CACHE=new Map();async function resolveProxyIPs(_0xa2b471,_0x57e3cc){const _0x4fe086=_0x193e21;_0x57e3cc=_0x57e3cc||0x1bb;if(isValidIp(_0xa2b471))return[{'hostname':_0xa2b471,'port':_0x57e3cc}];const _0x436905=_0xa2b471+':'+_0x57e3cc,_0x1c2e47=Date[_0x4fe086(0x3ad)](),_0x10e9f5=PROXYIP_CACHE[_0x4fe086(0x415)](_0x436905);if(_0x10e9f5&&_0x1c2e47-_0x10e9f5['t']<0x5*0x3c*0x3e8)return _0x10e9f5[_0x4fe086(0x348)];const _0x17991c=[_0x4fe086(0x236),_0x4fe086(0x1b2),'https://doh.pub/dns-query'],_0x5520a1=async(_0x154f52,_0x105538)=>{const _0x2ad05b=_0x4fe086,_0x10236e=_0x17991c[_0x2ad05b(0x209)](async _0x426893=>{const _0x34928a=_0x2ad05b,_0x14c875=await fetchTimeout(_0x426893+'?name='+encodeURIComponent(_0xa2b471)+_0x34928a(0x3a8)+_0x154f52,{'headers':{'accept':'application/dns-json'}},0xfa0);if(!_0x14c875||!_0x14c875['ok'])throw new Error(_0x34928a(0x2aa));const _0x3862f4=await _0x14c875[_0x34928a(0x2d1)]();return(_0x3862f4[_0x34928a(0x374)]||[])[_0x34928a(0x4c3)](_0x55c87d=>_0x55c87d[_0x34928a(0x40b)]===_0x105538)[_0x34928a(0x209)](_0x2d7639=>_0x2d7639['data']);});try{return await Promise[_0x2ad05b(0x3ce)](_0x10236e);}catch(_0x4ec0a8){return[];}},[_0x59b75d,_0x4a6839]=await Promise[_0x4fe086(0x384)]([_0x5520a1(_0x4fe086(0x319),0x10),_0x5520a1('A',0x1)]);let _0x270277=[];for(const _0x2e5230 of _0x59b75d){const _0x3a49d1=String(_0x2e5230)[_0x4fe086(0x411)](/^"|"$/g,'')['replace'](/\\010/g,',')[_0x4fe086(0x411)](/\n/g,',')[_0x4fe086(0x34f)]();if(!_0x3a49d1)continue;if(_0x3a49d1==='@edtunnel'){_0x270277=_0x4a6839[_0x4fe086(0x4c3)](_0x3e70ad=>/^\d+\.\d+\.\d+\.\d+$/[_0x4fe086(0x495)](_0x3e70ad))[_0x4fe086(0x209)](_0x193953=>({'hostname':_0x193953,'port':_0x57e3cc}));break;}const _0x2ad68f=_0x3a49d1[_0x4fe086(0x49e)](/[,;\s]+/)['map'](_0x3533fd=>_0x3533fd[_0x4fe086(0x34f)]())['filter'](Boolean),_0x3c9707=[];for(const _0x2e65bd of _0x2ad68f){const {host:_0x4971b4,port:_0x4a3fe6}=parseHostPort(_0x2e65bd,_0x57e3cc);if(isValidIp(_0x4971b4))_0x3c9707[_0x4fe086(0x4bd)]({'hostname':_0x4971b4,'port':_0x4a3fe6});}if(_0x3c9707[_0x4fe086(0x283)]){_0x270277=_0x3c9707;break;}}!_0x270277[_0x4fe086(0x283)]&&(_0x270277=_0x4a6839[_0x4fe086(0x4c3)](_0x3f0cf5=>/^\d+\.\d+\.\d+\.\d+$/['test'](_0x3f0cf5))[_0x4fe086(0x209)](_0x3574df=>({'hostname':_0x3574df,'port':_0x57e3cc})));if(!_0x270277[_0x4fe086(0x283)]){const _0x527e6f=await _0x5520a1('AAAA',0x1c);_0x270277=_0x527e6f[_0x4fe086(0x4c3)](_0x933543=>isValidIp(_0x933543))[_0x4fe086(0x209)](_0xa7f9e3=>({'hostname':_0xa7f9e3,'port':_0x57e3cc}));}const _0x3987d1=new Set(),_0xb9383=_0x270277['filter'](_0x2cd42d=>{const _0x556af5=_0x4fe086,_0xb18b24=_0x2cd42d[_0x556af5(0x4a7)]+':'+_0x2cd42d[_0x556af5(0x21c)];if(_0x3987d1[_0x556af5(0x32d)](_0xb18b24))return![];return _0x3987d1[_0x556af5(0x41a)](_0xb18b24),!![];});if(_0xb9383[_0x4fe086(0x283)])PROXYIP_CACHE[_0x4fe086(0x1f5)](_0x436905,{'t':_0x1c2e47,'ips':_0xb9383});return _0xb9383;}async function openOutbound(_0xee8ca5,_0x32d989,_0x126f24,_0x5dc683){const _0x4a6d39=_0x193e21,_0x4ec63b=parseProxyAddress(_0x32d989['outboundProxy']),_0x50c3b3=_0x32d989[_0x4a6d39(0x279)]||'',_0x42ae97=_0x4ec63b?_0x4ec63b[_0x4a6d39(0x40b)]==='http'||_0x4ec63b[_0x4a6d39(0x40b)]===_0x4a6d39(0x214)?_0xdb27a4=>connectViaHttpProxy(_0x4ec63b,_0xdb27a4):_0x4ec63b['type']==='ss'?_0x5ec402=>connectViaShadowsocks(_0x4ec63b,_0x5ec402):_0x3e1308=>connectViaSocks5(_0x4ec63b,_0x3e1308):null,_0xd7c31d=(_0x497f5e,_0x343471)=>{const _0x41b415=_0x4a6d39,_0x1d462a=[];if(_0x50c3b3===_0x41b415(0x1db))_0x1d462a['push'](_0x42ae97?()=>_0x42ae97(_0x497f5e):()=>connectDirect(_0x497f5e,_0x343471));else{if(_0x50c3b3==='no'){_0x1d462a['push'](()=>connectDirect(_0x497f5e,_0x343471));if(_0x42ae97)_0x1d462a['push'](()=>_0x42ae97(_0x497f5e));}else{if(_0x42ae97)_0x1d462a[_0x41b415(0x4bd)](()=>_0x42ae97(_0x497f5e));_0x1d462a[_0x41b415(0x4bd)](()=>connectDirect(_0x497f5e,_0x343471));}}return _0x1d462a;};let _0xf8a854;const _0x35eae3=async(_0x5f05ab,_0x16909e)=>{for(const _0x184694 of _0xd7c31d(_0x5f05ab,_0x16909e)){try{return await _0x184694();}catch(_0x201ca0){_0xf8a854=_0x201ca0;}}return null;},_0x5732d2=_0x32d989['proxyIP']?parseHostPort(_0x32d989[_0x4a6d39(0x258)],0x1bb):null;if(_0x5732d2&&_0x5732d2[_0x4a6d39(0x3bc)]){let _0x25ef7f=await resolveProxyIPs(_0x5732d2[_0x4a6d39(0x3bc)],_0x5732d2[_0x4a6d39(0x21c)]);if(!_0x25ef7f[_0x4a6d39(0x283)])_0x25ef7f=[{'hostname':_0x5732d2[_0x4a6d39(0x3bc)],'port':_0x5732d2[_0x4a6d39(0x21c)]}];for(const _0xa0b19 of _0x25ef7f){const _0x1ad08f=await _0x35eae3(_0xa0b19,0x1770);if(_0x1ad08f)return _0x1ad08f;}}const _0x4789f4=await _0x35eae3({'hostname':_0xee8ca5[_0x4a6d39(0x4a4)],'port':_0xee8ca5[_0x4a6d39(0x21c)]},0x1770);if(_0x4789f4)return _0x4789f4;{const _0x217ba6=selectRelayRegion(_0x126f24),_0x3bbd1d=[_0x217ba6,...Object['keys'](RELAY_DOMAINS)[_0x4a6d39(0x4c3)](_0x1e17c8=>_0x1e17c8!==_0x217ba6)][_0x4a6d39(0x1ab)](0x0,0x3);for(const _0x36caff of _0x3bbd1d){const _0x5b44dd=RELAY_DOMAINS[_0x36caff];if(!_0x5b44dd)continue;let _0x116ff9=[];try{_0x116ff9=await resolveProxyIPs(_0x5b44dd,0x1bb);}catch(_0x346855){}if(!_0x116ff9[_0x4a6d39(0x283)])continue;for(const _0x5e30ee of _0x116ff9){const _0x3718ee=await _0x35eae3(_0x5e30ee,0x1388);if(_0x3718ee)return _0x3718ee;}}}throw _0xf8a854||new Error('所有出站方式均失败');}async function pumpToReader(_0x1c628e,_0x487ec2,_0x49b841){const _0x119d87=_0x193e21;try{while(!![]){const {done:_0x16a3fd,value:_0x1894cd}=await _0x1c628e[_0x119d87(0x24a)]();if(_0x16a3fd)break;_0x487ec2(_0x1894cd);}}catch(_0x3dfe81){}try{if(_0x49b841)_0x49b841();}catch(_0x5e56c9){}}async function handleWebSocketProxy(_0x577e7b,_0x1e4838){const _0x1c5966=_0x193e21,_0x169bcd=new WebSocketPair(),[_0x1c2ada,_0x2d79d4]=Object[_0x1c5966(0x2db)](_0x169bcd);try{_0x2d79d4[_0x1c5966(0x467)]({'allowHalfOpen':!![]});}catch(_0x2ca56e){_0x2d79d4[_0x1c5966(0x467)]();}_0x2d79d4[_0x1c5966(0x43f)]=_0x1c5966(0x1fe);let _0x5b63af=null,_0x10a1a6=null,_0x30abc1=![],_0x2b29ab=null;const _0x26c361=_0x496ef1=>{const _0x52027f=_0x1c5966;try{_0x2d79d4[_0x52027f(0x3dd)](_0x496ef1);}catch(_0x129c55){}};_0x2d79d4[_0x1c5966(0x2c0)](_0x1c5966(0x28a),async _0x4f0223=>{const _0x1aa7ce=_0x1c5966;try{const _0xe4fe08=typeof _0x4f0223['data']===_0x1aa7ce(0x432)?TE[_0x1aa7ce(0x379)](_0x4f0223[_0x1aa7ce(0x1e9)]):new Uint8Array(_0x4f0223[_0x1aa7ce(0x1e9)]);if(!_0x30abc1){_0x2b29ab=_0x2b29ab?concatBytes(_0x2b29ab,_0xe4fe08):_0xe4fe08;if(_0x2b29ab['byteLength']>0x10000)throw new Error(_0x1aa7ce(0x3b5));let _0x5a8325,_0x49bd63;try{let _0x5d4b1d=detectTrojan(_0x2b29ab,_0x1e4838);if(!_0x5d4b1d&&_0x2b29ab[_0x1aa7ce(0x233)]>0x0&&_0x2b29ab[0x0]!==0x0&&_0x2b29ab[_0x1aa7ce(0x233)]<0x3a)return;_0x49bd63=!_0x5d4b1d,_0x5a8325=_0x5d4b1d?parseTrojanHeader(_0x2b29ab):parseVlessHeader(_0x2b29ab);}catch(_0x4edb2b){if(/头部过短/[_0x1aa7ce(0x495)](_0x4edb2b[_0x1aa7ce(0x28a)]||''))return;throw _0x4edb2b;}_0x30abc1=!![];if(_0x5a8325[_0x1aa7ce(0x4cc)]===0x2){try{const _0x280b55=_0x2b29ab[_0x1aa7ce(0x2e2)](_0x5a8325['headerLength']);if(_0x5a8325[_0x1aa7ce(0x21c)]===0x35&&_0x280b55['byteLength']>=0xc){const _0x7f156f=await dnsToDoH(_0x280b55);if(_0x7f156f)_0x26c361(_0x7f156f);}}catch(_0x2584a1){}try{_0x2d79d4['close'](0x3e8);}catch(_0x655bb0){}return;}const _0x2a64af=await openOutbound(_0x5a8325,_0x1e4838,_0x577e7b['cf']&&_0x577e7b['cf']['colo'],_0x49bd63);_0x5b63af=_0x2a64af,_0x10a1a6=_0x2a64af['writable'][_0x1aa7ce(0x2ae)]();if(_0x49bd63)_0x26c361(new Uint8Array([0x0,0x0]));if(_0x2a64af['_preamble']&&_0x2a64af['_preamble'][_0x1aa7ce(0x233)]>0x0)_0x26c361(_0x2a64af[_0x1aa7ce(0x440)]);if(_0x2b29ab&&_0x2b29ab[_0x1aa7ce(0x233)]>_0x5a8325[_0x1aa7ce(0x34d)])await _0x10a1a6[_0x1aa7ce(0x206)](_0x2b29ab['subarray'](_0x5a8325[_0x1aa7ce(0x34d)]));_0x2b29ab=null,pumpToReader(_0x2a64af[_0x1aa7ce(0x457)][_0x1aa7ce(0x1df)](),_0x26c361,()=>{const _0x507ccd=_0x1aa7ce;try{_0x2d79d4[_0x507ccd(0x3fb)](0x3e8);}catch(_0x4c6ed1){}});}else{if(_0x10a1a6)await _0x10a1a6['write'](_0xe4fe08);else _0x2b29ab=_0x2b29ab?concatBytes(_0x2b29ab,_0xe4fe08):_0xe4fe08;}}catch(_0x1f53ab){try{_0x2d79d4[_0x1aa7ce(0x3fb)](0x3f3,String(_0x1f53ab&&_0x1f53ab['message']||_0x1f53ab));}catch(_0x393bb2){}}});const _0x250d7a=()=>{if(_0x5b63af){try{_0x5b63af['close']();}catch(_0x2e8e1a){}_0x5b63af=null;}};return _0x2d79d4[_0x1c5966(0x2c0)](_0x1c5966(0x3fb),_0x250d7a),_0x2d79d4['addEventListener'](_0x1c5966(0x2d9),_0x250d7a),new Response(null,{'status':0x65,'webSocket':_0x1c2ada});}async function handleXhttpProxy(_0x4c5615,_0x55feb8){const _0x11c32b=_0x193e21,_0x200794=_0x4c5615['body'][_0x11c32b(0x1df)](),_0x2e5bf0=await _0x200794[_0x11c32b(0x24a)]();if(_0x2e5bf0[_0x11c32b(0x33f)])return new Response(_0x11c32b(0x4b2),{'status':0x190});const _0xe5a057=parseVlessHeader(_0x2e5bf0[_0x11c32b(0x3e1)]),_0x4b8e10=await openOutbound(_0xe5a057,_0x55feb8,_0x4c5615['cf']&&_0x4c5615['cf'][_0x11c32b(0x1e1)],!![]),_0x45bf12=_0x4b8e10[_0x11c32b(0x288)][_0x11c32b(0x2ae)]();await _0x45bf12['write'](_0x2e5bf0[_0x11c32b(0x3e1)][_0x11c32b(0x2e2)](_0xe5a057[_0x11c32b(0x34d)])),((async()=>{const _0x5952d6=_0x11c32b;try{while(!![]){const {done:_0x18a8a3,value:_0x1b5fca}=await _0x200794['read']();if(_0x18a8a3)break;await _0x45bf12[_0x5952d6(0x206)](_0x1b5fca);}}catch(_0x21cde5){}try{await _0x45bf12[_0x5952d6(0x3fb)]();}catch(_0x4a2843){}})());const _0x55ea13=new ReadableStream({async 'start'(_0x593b52){const _0x41770a=_0x11c32b;_0x593b52[_0x41770a(0x2c3)](new Uint8Array([0x0,0x0]));if(_0x4b8e10[_0x41770a(0x440)]&&_0x4b8e10[_0x41770a(0x440)]['byteLength']>0x0)_0x593b52[_0x41770a(0x2c3)](_0x4b8e10[_0x41770a(0x440)]);const _0x6ac2e8=_0x4b8e10[_0x41770a(0x457)][_0x41770a(0x1df)]();try{while(!![]){const {done:_0x1869c4,value:_0x2b30a5}=await _0x6ac2e8['read']();if(_0x1869c4)break;_0x593b52['enqueue'](_0x2b30a5);}}catch(_0x44d37b){}try{_0x593b52[_0x41770a(0x3fb)]();}catch(_0x2cd6a4){}try{_0x4b8e10[_0x41770a(0x3fb)]();}catch(_0x57f974){}},'cancel'(){const _0x551205=_0x11c32b;try{_0x4b8e10[_0x551205(0x3fb)]();}catch(_0x38c4bd){}}});return new Response(_0x55ea13,{'status':0xc8,'headers':{'content-type':_0x11c32b(0x477),'x-accel-buffering':'no','cache-control':_0x11c32b(0x48b)}});}function decodeUtf8OrGbk(_0xabc4a0){const _0x3c3605=_0x193e21,_0x57a64b=_0xabc4a0 instanceof Uint8Array?_0xabc4a0:new Uint8Array(_0xabc4a0);try{return new TextDecoder('utf-8',{'fatal':!![]})[_0x3c3605(0x4de)](_0x57a64b);}catch(_0x31d736){}try{return new TextDecoder(_0x3c3605(0x3d6))[_0x3c3605(0x4de)](_0x57a64b);}catch(_0xbad3cc){}return new TextDecoder()['decode'](_0x57a64b);}function extractCandidates(_0x457698){const _0x18a4bc=_0x193e21,_0xc49805=new Set(),_0x15a4ce=[],_0x115c1e=(_0x50dfb7,_0x4bdd01,_0x32a634)=>{const _0x4c34a2=_0x3b0b;if(!isValidIp(_0x50dfb7))return;if(_0xc49805[_0x4c34a2(0x32d)](_0x50dfb7))return;_0xc49805['add'](_0x50dfb7),_0x15a4ce[_0x4c34a2(0x4bd)]({'ip':_0x50dfb7,'port':_0x4bdd01||0x1bb,'name':_0x32a634||''});};parseIPList(_0x457698)[_0x18a4bc(0x2ec)](_0x17514e=>_0x115c1e(_0x17514e['ip'],_0x17514e[_0x18a4bc(0x21c)],_0x17514e[_0x18a4bc(0x1d1)]));const _0x8eb06a=/\b(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?\b/g;let _0x3e7ba1;while(_0x3e7ba1=_0x8eb06a[_0x18a4bc(0x324)](_0x457698)){const {host:_0x66587,port:_0x68d4af}=parseHostPort(_0x3e7ba1[0x0],0x1bb);if(_0x66587)_0x115c1e(_0x66587,_0x68d4af,'');}const _0x48204c=/[0-9a-fA-F:]+/g;while(_0x3e7ba1=_0x48204c['exec'](_0x457698)){const _0xefa18d=_0x3e7ba1[0x0];if(_0xefa18d[_0x18a4bc(0x363)](':')&&_0xefa18d[_0x18a4bc(0x49e)](':')[_0x18a4bc(0x283)]>=0x3&&isValidIp(_0xefa18d))_0x115c1e(_0xefa18d,0x1bb,'');}return _0x15a4ce;}function extractDomains(_0x3481bb){const _0x413d03=_0x193e21,_0x15abda=new Set(),_0x2480ab=[],_0x3e5988=/(?:\*\.)?(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}/gi;let _0xf713c4;while(_0xf713c4=_0x3e5988[_0x413d03(0x324)](_0x3481bb)){const _0x1445be=_0xf713c4[0x0][_0x413d03(0x4d2)]();!_0x15abda['has'](_0x1445be)&&(_0x1445be['includes'](_0x413d03(0x277))||_0x1445be['includes'](_0x413d03(0x45e))||_0x1445be[_0x413d03(0x363)](_0x413d03(0x347))||_0x1445be[_0x413d03(0x363)](_0x413d03(0x2b0))||_0x1445be['endsWith']('.xyz')||_0x1445be[_0x413d03(0x473)]('.top'))&&(_0x15abda[_0x413d03(0x41a)](_0x1445be),_0x2480ab[_0x413d03(0x4bd)](_0x1445be));}return _0x2480ab['slice'](0x0,0xa);}const SUBPREF_CACHE={'t':0x0,'ips':null};async function fetchLatestPreferredIPs(_0x14c3b9){const _0x55b7e8=_0x193e21;_0x14c3b9=Math[_0x55b7e8(0x344)](0x1,parseInt(_0x14c3b9)||0x96);if(Date['now']()-SUBPREF_CACHE['t']<0xa*0x3c*0x3e8)return SUBPREF_CACHE[_0x55b7e8(0x348)];const _0x5ddf0e=await fetchTimeout(_0x55b7e8(0x327),{'headers':{'User-Agent':_0x55b7e8(0x2ea)}},0x1770);if(_0x5ddf0e&&_0x5ddf0e['ok']){const _0x496a02=extractCandidates(await _0x5ddf0e['text']())[_0x55b7e8(0x4c3)](_0x36bba3=>_0x36bba3['ip']&&isCloudflareIP(_0x36bba3['ip'])),_0x17df8f=new Set(),_0x3c94f4=[];for(const _0x15c526 of _0x496a02){if(_0x17df8f[_0x55b7e8(0x32d)](_0x15c526['ip']))continue;_0x17df8f[_0x55b7e8(0x41a)](_0x15c526['ip']),_0x3c94f4[_0x55b7e8(0x4bd)](_0x15c526);if(_0x3c94f4['length']>=_0x14c3b9)break;}return SUBPREF_CACHE['t']=Date[_0x55b7e8(0x3ad)](),SUBPREF_CACHE['ips']=_0x3c94f4,_0x3c94f4;}return null;}async function collectCandidates(_0x5a7aaf){const _0x49e2d0=_0x193e21;_0x5a7aaf=_0x5a7aaf||{};const _0x113d5a=[],_0x2e295b={'preset':0x0,'presetErr':'','custom':0x0,'customErr':'','cidr':0x0},_0x17d05a=_0x383519=>{const _0xa3c4bd=_0x3b0b;if(_0x383519&&_0x383519['ip']&&isCloudflareIP(_0x383519['ip']))_0x113d5a[_0xa3c4bd(0x4bd)]({'ip':_0x383519['ip'],'port':_0x5a7aaf[_0xa3c4bd(0x21c)]||_0x383519[_0xa3c4bd(0x21c)]||0x1bb,'name':_0x383519[_0xa3c4bd(0x1d1)]||''});};if(_0x5a7aaf[_0x49e2d0(0x2a0)]&&OPTIMIZE_SOURCES[_0x5a7aaf[_0x49e2d0(0x2a0)]]){const _0x27719a=await fetchTimeout(OPTIMIZE_SOURCES[_0x5a7aaf['source']][_0x49e2d0(0x2d7)],{'headers':{'User-Agent':_0x49e2d0(0x2ea)}},0x1770);if(_0x27719a&&_0x27719a['ok']){const _0x3ca620=extractCandidates(await _0x27719a[_0x49e2d0(0x370)]());_0x3ca620[_0x49e2d0(0x2ec)](_0x17d05a),_0x2e295b[_0x49e2d0(0x317)]=_0x3ca620[_0x49e2d0(0x283)];}else _0x2e295b[_0x49e2d0(0x3ae)]=_0x27719a?'HTTP\x20'+_0x27719a[_0x49e2d0(0x24e)]:_0x49e2d0(0x1b3);}if(_0x5a7aaf[_0x49e2d0(0x2b5)]){const _0x3d785d=await fetchTimeout(_0x5a7aaf['sourceURL'],{'headers':{'User-Agent':_0x49e2d0(0x2ea)}},0x1770);if(_0x3d785d&&_0x3d785d['ok']){const _0x4acf9f=extractCandidates(await _0x3d785d[_0x49e2d0(0x370)]());_0x4acf9f[_0x49e2d0(0x2ec)](_0x17d05a),_0x2e295b['custom']=_0x4acf9f[_0x49e2d0(0x283)];}else _0x2e295b[_0x49e2d0(0x482)]=_0x3d785d?_0x49e2d0(0x25f)+_0x3d785d[_0x49e2d0(0x24e)]:_0x49e2d0(0x1b3);}const _0x44d7f5=new Set(),_0x47c8ce=[];for(const _0x4c1a4e of _0x113d5a){if(_0x44d7f5[_0x49e2d0(0x32d)](_0x4c1a4e['ip']))continue;_0x44d7f5[_0x49e2d0(0x41a)](_0x4c1a4e['ip']),_0x47c8ce[_0x49e2d0(0x4bd)](_0x4c1a4e);}if(_0x47c8ce[_0x49e2d0(0x283)]<(_0x5a7aaf[_0x49e2d0(0x19f)]||0x14)){let _0x25881a=(_0x5a7aaf[_0x49e2d0(0x19f)]||0x14)-_0x47c8ce[_0x49e2d0(0x283)];try{const _0x31d306=await fetchBestcfPool();for(const _0x519949 of _0x31d306){if(_0x25881a<=0x0)break;if(_0x44d7f5[_0x49e2d0(0x32d)](_0x519949['ip']))continue;if(!isCloudflareIP(_0x519949['ip']))continue;_0x44d7f5['add'](_0x519949['ip']),_0x47c8ce[_0x49e2d0(0x4bd)]({'ip':_0x519949['ip'],'port':_0x5a7aaf['port']||_0x519949[_0x49e2d0(0x21c)]||0x1bb,'name':_0x519949[_0x49e2d0(0x1d1)]||''}),_0x25881a--;}}catch(_0xed2300){}_0x2e295b[_0x49e2d0(0x45e)]=(_0x5a7aaf['count']||0x14)-_0x47c8ce['length']-_0x25881a;}if(_0x5a7aaf[_0x49e2d0(0x493)]!==![]&&_0x47c8ce[_0x49e2d0(0x283)]<(_0x5a7aaf[_0x49e2d0(0x19f)]||0x14)){const _0x16b34a=(_0x5a7aaf[_0x49e2d0(0x19f)]||0x14)-_0x47c8ce[_0x49e2d0(0x283)],_0x511829=randomIPsFromCidrs(CLOUDFLARE_CIDRS,_0x16b34a*0x3);let _0x6ce64b=0x0;for(const _0x177deb of _0x511829){if(_0x6ce64b>=_0x16b34a)break;if(_0x44d7f5['has'](_0x177deb))continue;_0x44d7f5[_0x49e2d0(0x41a)](_0x177deb),_0x47c8ce[_0x49e2d0(0x4bd)]({'ip':_0x177deb,'port':_0x5a7aaf[_0x49e2d0(0x21c)]||0x1bb,'name':''}),_0x6ce64b++;}_0x2e295b['cidr']=_0x6ce64b;}return{'candidates':_0x47c8ce,'stats':_0x2e295b};}function testOneLatency(_0x40b9f4,_0xc3f691,_0x29771b){return new Promise(_0x4355b2=>{const _0x3d11c0=_0x3b0b,_0x3a34db=Date['now']();let _0x1d8bf4,_0x1597ca=![];const _0x418613=(_0x623686,_0x148085)=>{if(_0x1597ca)return;_0x1597ca=!![],clearTimeout(_0x1f74a4);try{if(_0x1d8bf4)_0x1d8bf4['close']();}catch(_0x152c64){}_0x4355b2({'ip':_0x40b9f4,'port':_0xc3f691,'ok':_0x623686,'latency':_0x148085});},_0x1f74a4=setTimeout(()=>_0x418613(![],-0x1),_0x29771b);try{_0x1d8bf4=connect({'hostname':_0x40b9f4,'port':_0xc3f691});}catch(_0x51709c){return _0x418613(![],-0x1);}_0x1d8bf4[_0x3d11c0(0x497)][_0x3d11c0(0x4a5)](()=>_0x418613(!![],Date[_0x3d11c0(0x3ad)]()-_0x3a34db))[_0x3d11c0(0x45c)](()=>_0x418613(![],-0x1));});}async function runLatencyTest(_0x41f4ee,_0x4477d0,_0x1b1ded){const _0x4c0f67=_0x193e21;_0x4477d0=Math[_0x4c0f67(0x344)](0x1,Math[_0x4c0f67(0x281)](0x32,Number(_0x4477d0)||0x5)),_0x1b1ded=Math[_0x4c0f67(0x344)](0x1f4,Number(_0x1b1ded)||0x1388);const _0x3b4176=[];let _0x5ea7bc=0x0;async function _0x158b1b(){const _0x26edc0=_0x4c0f67;while(_0x5ea7bc<_0x41f4ee[_0x26edc0(0x283)]){const _0x226ed1=_0x41f4ee[_0x5ea7bc++],_0xbfe541=await testOneLatency(_0x226ed1['ip'],_0x226ed1[_0x26edc0(0x21c)],_0x1b1ded);_0x3b4176[_0x26edc0(0x4bd)](_0xbfe541);}}return await Promise['all'](Array[_0x4c0f67(0x1bf)]({'length':_0x4477d0},_0x158b1b)),_0x3b4176[_0x4c0f67(0x1e4)]((_0x4019c9,_0x5ebe12)=>(_0x4019c9['latency']<0x0?0x3b9aca00:_0x4019c9[_0x4c0f67(0x292)])-(_0x5ebe12['latency']<0x0?0x3b9aca00:_0x5ebe12[_0x4c0f67(0x292)])),_0x3b4176;}function xhttpPadding(_0xb34374){const _0x2d0577=_0x193e21,_0x29e546=_0xb34374['uuid']||'';return{'xPaddingObfsMode':!![],'xPaddingMethod':_0x2d0577(0x37b),'xPaddingPlacement':_0x2d0577(0x26d),'xPaddingHeader':_0x29e546['slice'](0x1,0x7),'xPaddingKey':'_'+_0x29e546[_0x2d0577(0x1ab)](0x19,0x1f)};}function uriFragName(_0x3b0d45){const _0x29de77=_0x193e21;return String(_0x3b0d45)['replace'](/%/g,_0x29de77(0x4c8))[_0x29de77(0x411)](/#/g,_0x29de77(0x22e))['replace'](/\?/g,_0x29de77(0x4e0))['replace'](/ /g,_0x29de77(0x444));}function protoNames(_0x57a824,_0x35f7e7,_0x549a7d,_0x2ddbc9){const _0x3fd128=(_0x35f7e7?0x1:0x0)+(_0x549a7d?0x1:0x0)+(_0x2ddbc9?0x1:0x0);if(_0x3fd128<=0x1)return{'v':_0x57a824,'t':_0x57a824,'x':_0x57a824};return{'v':_0x57a824,'t':_0x57a824+'.T','x':_0x57a824+'.X'};}function vlessNode(_0x4bed27,_0x900d6c,_0x29dc65,_0xbd0e32,_0x400770={}){const _0x307a04=_0x193e21,_0x13485a=_0x4bed27[_0x307a04(0x3bc)],_0x373eaa=_0x900d6c['includes'](':')&&!_0x900d6c[_0x307a04(0x1ec)]('[')?'['+_0x900d6c+']':_0x900d6c,_0x2c3504=!HTTP_PORTS[_0x307a04(0x32d)](Number(_0x29dc65)),_0x49c670=encodeURIComponent;let _0xb72b4c=_0x307a04(0x3f2);if(_0x2c3504)_0xb72b4c+=_0x307a04(0x201)+_0x49c670(_0x13485a)+_0x307a04(0x256);else _0xb72b4c+=_0x307a04(0x438);_0xb72b4c+=_0x307a04(0x34c)+_0x49c670(_0x13485a);if(_0x400770[_0x307a04(0x40b)]===_0x307a04(0x25b)&&_0x2c3504)_0xb72b4c+=_0x307a04(0x30f),_0xb72b4c+=_0x307a04(0x234)+_0x49c670(JSON[_0x307a04(0x44b)](xhttpPadding(_0x4bed27)));else _0xb72b4c+='&type=ws';_0xb72b4c+=_0x307a04(0x35c)+_0x49c670('/'+_0x4bed27[_0x307a04(0x4af)]);if(_0x4bed27[_0x307a04(0x1ca)])_0xb72b4c+=_0x307a04(0x4b4)+_0x49c670(_0x4bed27[_0x307a04(0x1ca)]);return _0x4bed27['ech']&&(_0xb72b4c+=_0x307a04(0x3b8)+_0x49c670((_0x4bed27[_0x307a04(0x240)]||_0x307a04(0x3af))+'+'+(_0x4bed27[_0x307a04(0x24b)]||_0x307a04(0x3e6)))),_0x307a04(0x429)+_0x4bed27[_0x307a04(0x3a7)]+'@'+_0x373eaa+':'+_0x29dc65+'?'+_0xb72b4c+'#'+uriFragName(_0xbd0e32);}function trojanNode(_0x45c881,_0x4ff60b,_0x457f40,_0x5bfb49){const _0x3e8901=_0x193e21,_0x25a2a8=_0x45c881[_0x3e8901(0x3bc)],_0x3c50aa=_0x4ff60b[_0x3e8901(0x363)](':')&&!_0x4ff60b[_0x3e8901(0x1ec)]('[')?'['+_0x4ff60b+']':_0x4ff60b,_0x22744c=encodeURIComponent,_0x394da3=!HTTP_PORTS[_0x3e8901(0x32d)](Number(_0x457f40));let _0x2fccdf=_0x394da3?_0x3e8901(0x323)+_0x22744c(_0x25a2a8)+_0x3e8901(0x31b)+_0x22744c(_0x25a2a8)+'&type=ws&path='+_0x22744c('/'+_0x45c881[_0x3e8901(0x4af)]):_0x3e8901(0x3fa)+_0x22744c(_0x25a2a8)+_0x3e8901(0x4d5)+_0x22744c('/'+_0x45c881[_0x3e8901(0x4af)]);if(_0x45c881[_0x3e8901(0x1ca)]&&_0x394da3)_0x2fccdf+=_0x3e8901(0x4b4)+_0x22744c(_0x45c881[_0x3e8901(0x1ca)]);if(_0x45c881[_0x3e8901(0x4d3)]&&_0x394da3)_0x2fccdf+='&ech='+_0x22744c((_0x45c881[_0x3e8901(0x240)]||_0x3e8901(0x3af))+'+'+(_0x45c881[_0x3e8901(0x24b)]||_0x3e8901(0x3e6)));return _0x3e8901(0x3f9)+(_0x45c881[_0x3e8901(0x268)]||_0x45c881[_0x3e8901(0x3a7)])+'@'+_0x3c50aa+':'+_0x457f40+'?'+_0x2fccdf+'#'+uriFragName(_0x5bfb49);}const DNH_CACHE=new Map();function fetchTimeout(_0x530fba,_0x28e397,_0x5861d4){return new Promise(_0x3c0c9=>{const _0xa897c2=_0x3b0b,_0x5e6fee=new AbortController(),_0x16fde8=setTimeout(()=>_0x5e6fee['abort'](),_0x5861d4);fetch(_0x530fba,Object[_0xa897c2(0x2a5)]({},_0x28e397,{'signal':_0x5e6fee[_0xa897c2(0x40a)]}))[_0xa897c2(0x4a5)](_0x20d09b=>{clearTimeout(_0x16fde8),_0x3c0c9(_0x20d09b);})['catch'](()=>{clearTimeout(_0x16fde8),_0x3c0c9(null);});});}async function resolvePreferredDomains(_0x181217,_0x5ecbda=0x64,_0x460373=0x12c,_0x50b5d7=![],_0x55b236=!![],_0x347a4e=![]){const _0x11dec7=_0x193e21,_0x17a36b=String(_0x181217||'')['split'](/[\n,;]+/)['map'](_0x326fbf=>_0x326fbf[_0x11dec7(0x34f)]()['replace'](/^\*\./,''))[_0x11dec7(0x4c3)](Boolean),_0x5566ff=Date[_0x11dec7(0x3ad)](),_0x1ac22f=[_0x11dec7(0x236),'https://dns.alidns.com/resolve'],_0x37dc27=async(_0x3c3d2f,_0x3d83e7,_0x2a7273)=>{const _0x4f4697=_0x11dec7,_0x45d0=_0x1ac22f[_0x4f4697(0x209)](async _0x372e9c=>{const _0x28ccc6=_0x4f4697,_0x4a16e4=await fetchTimeout(_0x372e9c+_0x28ccc6(0x43e)+encodeURIComponent(_0x3c3d2f)+_0x28ccc6(0x3a8)+_0x3d83e7,{'headers':{'accept':_0x28ccc6(0x489)}},0xfa0);if(!_0x4a16e4||!_0x4a16e4['ok'])throw new Error(_0x28ccc6(0x494));const _0x17ccc5=await _0x4a16e4[_0x28ccc6(0x2d1)](),_0x5c27b4=(_0x17ccc5[_0x28ccc6(0x374)]||[])['filter'](_0x6994f0=>_0x6994f0['type']===_0x2a7273&&(_0x3d83e7==='A'?/^\d+\.\d+\.\d+\.\d+$/['test'](_0x6994f0[_0x28ccc6(0x1e9)]):/^[0-9a-fA-F:]+$/[_0x28ccc6(0x495)](_0x6994f0[_0x28ccc6(0x1e9)])))[_0x28ccc6(0x209)](_0x48831c=>_0x48831c[_0x28ccc6(0x1e9)]);if(!_0x5c27b4[_0x28ccc6(0x283)])throw new Error('no\x20answer');return _0x5c27b4;});try{return await Promise[_0x4f4697(0x3ce)](_0x45d0);}catch(_0x18896a){return[];}},_0xeab9a7=await Promise[_0x11dec7(0x384)](_0x17a36b[_0x11dec7(0x209)](async _0x348622=>{const _0x47df54=_0x11dec7;if(_0x348622[_0x47df54(0x363)](_0x47df54(0x3c1))){if(_0x348622['startsWith'](_0x47df54(0x27f))){let _0x119318=_0x348622[_0x47df54(0x1ab)](0x6);if(/^[A-Za-z0-9+/=]+$/['test'](_0x119318)&&_0x119318[_0x47df54(0x283)]%0x4===0x0)try{const _0x2abc0e=atob(_0x119318);if(/^https?:\/\//i[_0x47df54(0x495)](_0x2abc0e))_0x119318=_0x2abc0e;}catch(_0x43a4c9){}if(!/^https?:\/\//i['test'](_0x119318))_0x119318=_0x47df54(0x44f)+_0x119318;_0x348622=_0x119318;}const _0x44fe29='url:'+_0x348622+(_0x50b5d7?_0x47df54(0x360):'')+(_0x55b236?'':_0x47df54(0x43a)),_0x496079=DNH_CACHE[_0x47df54(0x415)](_0x44fe29);if(_0x496079&&_0x5566ff-_0x496079['t']<0xa*0x3c*0x3e8)return _0x496079[_0x47df54(0x348)]['slice'](0x0,_0x5ecbda);try{const _0x5502dc=await fetchTimeout(_0x348622,{},0x1770);if(!_0x5502dc||!_0x5502dc['ok'])throw new Error(_0x47df54(0x2cb));const _0x2e09fc=decodeUtf8OrGbk(await _0x5502dc[_0x47df54(0x395)]());let _0x50fa05=_0x2e09fc;if(/^[A-Za-z0-9+/=\s]{40,}$/[_0x47df54(0x495)](_0x50fa05[_0x47df54(0x1ab)](0x0,0x7d0))&&_0x50fa05['replace'](/\s+/g,'')[_0x47df54(0x283)]%0x4===0x0)try{const _0x12abd2=atob(_0x50fa05[_0x47df54(0x411)](/\s+/g,''));_0x50fa05=decodeUtf8OrGbk(Uint8Array[_0x47df54(0x1bf)](_0x12abd2,_0x204097=>_0x204097[_0x47df54(0x252)](0x0)));}catch(_0x24139f){}const _0x415834=new Set(),_0x58606e={},_0x2e7f3d=[],_0x1cf982=isTrustedRegionPool(_0x348622),_0x1e9452=_0x36efc2=>!_0x55b236||isCloudflareIP(_0x36efc2)||_0x1cf982,_0x14f22b=_0x50fa05[_0x47df54(0x34f)]()[_0x47df54(0x49e)](/\r?\n/)[_0x47df54(0x209)](_0x597640=>_0x597640['trim']())[_0x47df54(0x4c3)](Boolean);if(_0x14f22b[_0x47df54(0x283)]>0x1&&_0x14f22b[0x0][_0x47df54(0x363)](',')){const _0x43569d=_0x14f22b[0x0]['split'](',')['map'](_0x5c3467=>_0x5c3467[_0x47df54(0x34f)]()),_0x335c72=_0x43569d[_0x47df54(0x363)](_0x47df54(0x4e6))&&_0x43569d[_0x47df54(0x363)]('端口'),_0x23244e=_0x43569d[_0x47df54(0x3f4)](_0x5bea1e=>_0x5bea1e['includes']('IP'))&&_0x43569d[_0x47df54(0x3f4)](_0x5cc45f=>_0x5cc45f[_0x47df54(0x363)]('延迟'))&&_0x43569d['some'](_0x305bd2=>_0x305bd2[_0x47df54(0x363)](_0x47df54(0x455)));if(_0x335c72||_0x23244e){const _0x428c1f=_0x43569d[_0x47df54(0x20a)](_0x5af401=>_0x5af401[_0x47df54(0x363)]('IP')),_0x41a85d=_0x43569d[_0x47df54(0x3df)]('端口'),_0x245801=_0x43569d[_0x47df54(0x20a)](_0xbfb644=>_0xbfb644['includes']('延迟')),_0x2ef51d=_0x43569d[_0x47df54(0x20a)](_0x4491dc=>_0x4491dc[_0x47df54(0x363)]('下载速度')),_0x1a1afe=_0x43569d[_0x47df54(0x3df)]('国家')>-0x1?_0x43569d[_0x47df54(0x3df)]('国家'):_0x43569d[_0x47df54(0x3df)]('城市')>-0x1?_0x43569d['indexOf']('城市'):_0x43569d['indexOf'](_0x47df54(0x2bc)),_0x3fe950=_0x43569d[_0x47df54(0x3df)](_0x47df54(0x4df));for(const _0x53e8b5 of _0x14f22b[_0x47df54(0x1ab)](0x1)){if(_0x2e7f3d['length']>=_0x5ecbda)break;const _0x264dcc=_0x53e8b5[_0x47df54(0x49e)](',')['map'](_0x27d617=>_0x27d617[_0x47df54(0x34f)]());if(_0x3fe950!==-0x1&&_0x264dcc[_0x3fe950]&&_0x264dcc[_0x3fe950][_0x47df54(0x4d2)]()!==_0x47df54(0x2a8))continue;const _0x328eb5=_0x264dcc[_0x428c1f]||'',_0x22139f=_0x328eb5['match'](/(\[[0-9a-fA-F:]+\]|\d{1,3}(?:\.\d{1,3}){3})/);if(!_0x22139f)continue;const _0x1051f9=_0x22139f[0x1][_0x47df54(0x411)](/^\[|\]$/g,''),_0x1f6422=_0x41a85d!==-0x1&&_0x264dcc[_0x41a85d]?parseInt(_0x264dcc[_0x41a85d]):0x1bb,_0x1f1270=_0x1051f9+':'+_0x1f6422;if(_0x415834[_0x47df54(0x32d)](_0x1f1270))continue;if(!_0x1e9452(_0x1051f9))continue;_0x415834[_0x47df54(0x41a)](_0x1f1270);let _0x314eaf=_0x1a1afe!==-0x1&&_0x264dcc[_0x1a1afe]?_0x264dcc[_0x1a1afe]:'';if(!_0x314eaf&&_0x245801!==-0x1&&_0x2ef51d!==-0x1)_0x314eaf=_0x47df54(0x1b9)+(_0x264dcc[_0x245801]||'')+_0x47df54(0x4ea)+(_0x264dcc[_0x2ef51d]||'')+'MB/s';if(_0x314eaf)_0x58606e[_0x314eaf]=(_0x58606e[_0x314eaf]||0x0)+0x1,_0x2e7f3d[_0x47df54(0x4bd)]({'ip':_0x1051f9,'port':_0x1f6422,'name':_0x314eaf+'-'+String(_0x58606e[_0x314eaf])[_0x47df54(0x21f)](0x2,'0'),..._0x1cf982?{'relay':!![]}:{}});else _0x2e7f3d[_0x47df54(0x4bd)]({'ip':_0x1051f9,'port':_0x1f6422,'name':'',..._0x1cf982?{'relay':!![]}:{}});}return DNH_CACHE[_0x47df54(0x1f5)](_0x44fe29,{'t':_0x5566ff,'ips':_0x2e7f3d}),_0x2e7f3d[_0x47df54(0x1ab)]();}}if(_0x50fa05[_0x47df54(0x363)](_0x47df54(0x406))&&_0x50fa05['includes'](_0x47df54(0x4c6))){for(const _0x18b87e of _0x50fa05[_0x47df54(0x20f)](/<tr[\s\S]*?<\/tr>/g)||[]){if(_0x2e7f3d['length']>=_0x5ecbda)break;const _0x1bf48e={};for(const _0x4d58f2 of _0x18b87e[_0x47df54(0x20f)](/<td[^>]*>[\s\S]*?<\/td>/g)||[]){const _0x454dcb=_0x4d58f2[_0x47df54(0x20f)](/data-label="([^"]*)"[^>]*>([\s\S]*?)<\/td>/);if(_0x454dcb)_0x1bf48e[_0x454dcb[0x1]]=_0x454dcb[0x2][_0x47df54(0x411)](/<[^>]+>/g,'')[_0x47df54(0x34f)]();}const _0x35293c=(_0x1bf48e[_0x47df54(0x381)]||'')['match'](/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?/);if(!_0x35293c)continue;const _0x497667=_0x35293c[0x1],_0x2af322=_0x35293c[0x2]?parseInt(_0x35293c[0x2]):0x1bb,_0x510011=_0x497667+':'+_0x2af322;if(_0x415834[_0x47df54(0x32d)](_0x510011))continue;if(!_0x1e9452(_0x497667))continue;_0x415834['add'](_0x510011);const _0x43c194=(_0x1bf48e[_0x47df54(0x3bf)]||_0x1bf48e[_0x47df54(0x2bc)]||'线路')['trim']();if(_0x43c194)_0x58606e[_0x43c194]=(_0x58606e[_0x43c194]||0x0)+0x1,_0x2e7f3d[_0x47df54(0x4bd)]({'ip':_0x497667,'port':_0x2af322,'name':_0x43c194+'-'+String(_0x58606e[_0x43c194])['padStart'](0x2,'0'),..._0x1cf982?{'relay':!![]}:{}});else _0x2e7f3d[_0x47df54(0x4bd)]({'ip':_0x497667,'port':_0x2af322,'name':'',..._0x1cf982?{'relay':!![]}:{}});}return DNH_CACHE['set'](_0x44fe29,{'t':_0x5566ff,'ips':_0x2e7f3d}),_0x2e7f3d[_0x47df54(0x1ab)]();}for(const _0x8635d6 of _0x50fa05['split'](/\r?\n/)){if(_0x2e7f3d['length']>=_0x5ecbda)break;const _0x3daeb4=_0x8635d6[_0x47df54(0x20f)](/(?:vless|trojan):\/\/[^@\s/]+@(\[[0-9a-fA-F:]+\]|[A-Za-z0-9.-]+)(?::(\d{1,5}))?/);if(!_0x3daeb4)continue;const _0x3f625c=_0x3daeb4[0x1]['replace'](/^\[|\]$/g,''),_0xf91a72=_0x3daeb4[0x2]?parseInt(_0x3daeb4[0x2]):0x1bb,_0x32b818=_0x3f625c+':'+_0xf91a72;if(_0x415834['has'](_0x32b818))continue;if(!_0x1e9452(_0x3f625c))continue;_0x415834['add'](_0x32b818);let _0xa677f0='';const _0x28cb0a=_0x8635d6[_0x47df54(0x3df)]('#');if(_0x28cb0a>=0x0)try{_0xa677f0=decodeURIComponent(_0x8635d6['slice'](_0x28cb0a+0x1)[_0x47df54(0x34f)]());}catch(_0x2b7a91){_0xa677f0=_0x8635d6[_0x47df54(0x1ab)](_0x28cb0a+0x1)[_0x47df54(0x34f)]();}if(_0xa677f0)_0x58606e[_0xa677f0]=(_0x58606e[_0xa677f0]||0x0)+0x1,_0x2e7f3d[_0x47df54(0x4bd)]({'ip':_0x3f625c,'port':_0xf91a72,'name':_0xa677f0+'-'+String(_0x58606e[_0xa677f0])[_0x47df54(0x21f)](0x2,'0'),..._0x1cf982?{'relay':!![]}:{}});else _0x2e7f3d[_0x47df54(0x4bd)]({'ip':_0x3f625c,'port':_0xf91a72,'name':'',..._0x1cf982?{'relay':!![]}:{}});}for(const _0x1a639b of _0x50fa05['split'](/\r?\n/)){if(_0x2e7f3d[_0x47df54(0x283)]>=_0x5ecbda)break;const _0x123eb0=_0x1a639b[_0x47df54(0x20f)](/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?(?:#([^\r\n]*))?/);if(!_0x123eb0)continue;const _0x4664c5=_0x123eb0[0x1],_0x5c55ab=_0x123eb0[0x2]?parseInt(_0x123eb0[0x2]):0x1bb,_0x302596=_0x4664c5+':'+_0x5c55ab;if(_0x415834[_0x47df54(0x32d)](_0x302596))continue;if(!_0x1e9452(_0x4664c5))continue;_0x415834['add'](_0x302596);const _0x195991=(_0x123eb0[0x3]||'')[_0x47df54(0x34f)]();if(_0x195991&&!/[\u4e00-\u9fa5]/[_0x47df54(0x495)](_0x195991)&&!_0x195991[_0x47df54(0x363)]('|')){_0x2e7f3d[_0x47df54(0x4bd)]({'ip':_0x4664c5,'port':_0x5c55ab,'name':_0x195991,..._0x1cf982?{'relay':!![]}:{}});continue;}let _0x245f8f='';if(_0x123eb0[0x3]){const _0x37b928=_0x123eb0[0x3][_0x47df54(0x20f)](/^\s*[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}/);if(_0x37b928){const _0x5c3586=_0x37b928[0x0][_0x47df54(0x20f)](/[\u4e00-\u9fa5]{2,5}/);if(_0x5c3586)_0x245f8f=_0x5c3586[0x0];}else{const _0x4804b4=_0x123eb0[0x3][_0x47df54(0x49e)]('|')[_0x47df54(0x209)](_0x76cd35=>_0x76cd35[_0x47df54(0x34f)]()),_0x43d70a=_0x4804b4['find'](_0x1f20f6=>/^[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}$/[_0x47df54(0x495)](_0x1f20f6));if(_0x43d70a){const _0x4a03ed=_0x43d70a[_0x47df54(0x20f)](/[\u4e00-\u9fa5]{2,5}/);if(_0x4a03ed)_0x245f8f=_0x4a03ed[0x0];}else{const _0x3996b0=_0x4804b4[_0x47df54(0x366)](_0x22968c=>/^[\u4e00-\u9fa5]{2,5}$/[_0x47df54(0x495)](_0x22968c)&&!/^(地区随机|随机优选|官方优选|优选|CF优选)$/['test'](_0x22968c));if(_0x3996b0)_0x245f8f=_0x3996b0;else{const _0x4bb245=_0x123eb0[0x3][_0x47df54(0x20f)](/\b([A-Z]{2})\b/);if(_0x4bb245)_0x245f8f=REGION_CN[_0x4bb245[0x1]]||_0x4bb245[0x1];}}}}if(_0x245f8f)_0x58606e[_0x245f8f]=(_0x58606e[_0x245f8f]||0x0)+0x1,_0x2e7f3d['push']({'ip':_0x4664c5,'port':_0x5c55ab,'name':_0x245f8f+'-'+String(_0x58606e[_0x245f8f])[_0x47df54(0x21f)](0x2,'0'),..._0x1cf982?{'relay':!![]}:{}});else _0x2e7f3d[_0x47df54(0x4bd)]({'ip':_0x4664c5,'port':_0x5c55ab,'name':'',..._0x1cf982?{'relay':!![]}:{}});}if(!_0x2e7f3d[_0x47df54(0x283)]&&_0x50b5d7){const _0x43839f=(String(_0x348622)[_0x47df54(0x20f)](/\/([A-Z]{2})\//)||[])[0x1]||String(_0x348622)[_0x47df54(0x411)](/^https?:\/\//,'')[_0x47df54(0x49e)]('.')[0x0];if(REGION_CN[_0x43839f]){const _0x2edc29=randomIPsFromCidrs(_0x347a4e?REACHABLE_CIDRS_V6:REACHABLE_CIDRS,_0x5ecbda);_0x2edc29[_0x47df54(0x2ec)]((_0x198643,_0x839fcc)=>_0x2e7f3d[_0x47df54(0x4bd)]({'ip':_0x198643,'port':0x1bb,'name':REGION_CN[_0x43839f]+'-'+String(_0x839fcc+0x1)[_0x47df54(0x21f)](0x2,'0')}));}}return DNH_CACHE[_0x47df54(0x1f5)](_0x44fe29,{'t':_0x5566ff,'ips':_0x2e7f3d}),_0x2e7f3d[_0x47df54(0x1ab)]();}catch(_0x10e337){const _0x36c80a=DNH_CACHE['get'](_0x44fe29);if(_0x36c80a&&_0x36c80a[_0x47df54(0x348)]&&_0x36c80a[_0x47df54(0x348)]['length'])return _0x36c80a[_0x47df54(0x348)][_0x47df54(0x1ab)](0x0,_0x5ecbda);return[];}}if(!_0x348622[_0x47df54(0x363)](_0x47df54(0x3c1))&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i[_0x47df54(0x495)](_0x348622)){const _0x5329b9=_0x348622[_0x47df54(0x20f)](/^(\[?[0-9a-fA-F:]+\]?|\d{1,3}(?:\.\d{1,3}){3}|[a-z0-9.-]+\.[a-z]{2,})(?::(\d{1,5}))?(?:#([^\r\n]*))?$/i);if(!_0x5329b9)return[];const _0x104476=_0x5329b9[0x1][_0x47df54(0x411)](/^\[|\]$/g,''),_0x2867fd=_0x5329b9[0x2]?parseInt(_0x5329b9[0x2]):0x1bb,_0x303366=(_0x5329b9[0x3]||'')[_0x47df54(0x34f)](),_0x2f8c13=isValidIp(_0x104476);if(!_0x2f8c13&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i[_0x47df54(0x495)](_0x104476))return[];if(_0x55b236&&_0x2f8c13&&!isCloudflareIP(_0x104476))return[];if(_0x303366)return[{'ip':_0x104476,'port':_0x2867fd,'name':_0x303366}];if(_0x2f8c13)return[{'ip':_0x104476,'port':_0x2867fd,'name':''}];}const _0x4e8022=DNH_CACHE[_0x47df54(0x415)](_0x348622);if(_0x4e8022&&_0x5566ff-_0x4e8022['t']<0xa*0x3c*0x3e8)return _0x4e8022[_0x47df54(0x348)][_0x47df54(0x1ab)](0x0,_0x5ecbda)[_0x47df54(0x209)]((_0x5b6abb,_0x116bd9)=>({'ip':_0x5b6abb,'port':0x1bb,'name':_0x348622+'-'+(_0x116bd9+0x1)}));const _0x4de829=await _0x37dc27(_0x348622,'A',0x1);let _0x5a4456=_0x55b236?_0x4de829['filter'](isCloudflareIP):_0x4de829;if(_0x347a4e){const _0x71c13a=await _0x37dc27(_0x348622,_0x47df54(0x2d8),0x1c);_0x5a4456=[...new Set(_0x4de829['concat'](_0x71c13a))][_0x47df54(0x4c3)](_0x582cd5=>_0x55b236?isCloudflareIP(_0x582cd5):!![]);}_0x5a4456=_0x5a4456[_0x47df54(0x1ab)](0x0,_0x5ecbda);if(!_0x5a4456[_0x47df54(0x283)]){if(_0x4e8022&&_0x4e8022[_0x47df54(0x348)]&&_0x4e8022[_0x47df54(0x348)][_0x47df54(0x283)])return _0x4e8022['ips'][_0x47df54(0x1ab)](0x0,_0x5ecbda)[_0x47df54(0x209)]((_0x5a6781,_0x54493a)=>({'ip':_0x5a6781,'port':0x1bb,'name':_0x348622+'-'+(_0x54493a+0x1)}));return[];}return DNH_CACHE['set'](_0x348622,{'t':_0x5566ff,'ips':_0x5a4456}),_0x5a4456[_0x47df54(0x209)]((_0x14f418,_0x3729d5)=>({'ip':_0x14f418,'port':0x1bb,'name':_0x348622+'-'+(_0x3729d5+0x1)}));})),_0x10a49f=[];let _0x3b67c2=0x0;while(_0x3b67c2<_0x460373){let _0x1f16ae=![];for(const _0xb6ed59 of _0xeab9a7){if(_0x3b67c2>=_0x460373)break;_0xb6ed59['length']&&(_0x10a49f[_0x11dec7(0x4bd)](_0xb6ed59[_0x11dec7(0x2c8)]()),_0x3b67c2++,_0x1f16ae=!![]);}if(!_0x1f16ae)break;}return _0x10a49f;}async function buildNodes(_0x20e674,_0x49fef1=0x320,_0x2ab1a2=null){const _0x5c9856=_0x193e21,_0x3c313f=[],_0x3713cb=new Set(),_0x549d5d=_0x20e674[_0x5c9856(0x3da)]&&_0x20e674['optimizer'][_0x5c9856(0x2f3)]||'',_0x45ba8d=_0x20e674[_0x5c9856(0x4c3)]&&_0x20e674[_0x5c9856(0x4c3)][_0x5c9856(0x2d5)]||[],_0x5b38b6=_0x45ba8d[_0x5c9856(0x363)](_0x5c9856(0x442)),_0x5d20f2=_0x45ba8d[_0x5c9856(0x283)]===0x1&&_0x45ba8d[0x0]===_0x5c9856(0x442),_0x2c2f13=_0x5d20f2?OFFICIAL_V6_CIDRS:_0x5b38b6?[...REACHABLE_CIDRS,...OFFICIAL_V6_CIDRS]:REACHABLE_CIDRS,_0x270091=_0x549d5d===_0x5c9856(0x244)&&!(_0x20e674['optimizer']&&_0x20e674[_0x5c9856(0x3da)][_0x5c9856(0x30a)]),_0x3b0bf3=_0x549d5d===_0x5c9856(0x244)||_0x549d5d===_0x5c9856(0x426),_0x743d56=(_0x2ca922,_0x25e706,_0x798014,_0x4dddc7)=>{const _0x391143=_0x5c9856;if(_0x3c313f[_0x391143(0x283)]>=_0x49fef1)return;if(isValidIp(_0x2ca922)&&!isCloudflareIP(_0x2ca922)&&!_0x270091&&!_0x4dddc7)return;const _0x58a1e6=_0x20e674[_0x391143(0x349)]?_0x2ca922+':'+_0x25e706:_0x2ca922;if(_0x3713cb[_0x391143(0x32d)](_0x58a1e6))return;_0x3713cb[_0x391143(0x41a)](_0x58a1e6);const _0x1d1f80=!HTTP_PORTS['has'](Number(_0x25e706));if(_0x20e674[_0x391143(0x3f5)]&&!_0x1d1f80)return;const _0x4c2099=Number(_0x25e706),_0x36d5b3=protoNames(_0x798014,!!_0x20e674[_0x391143(0x34e)],!!_0x20e674[_0x391143(0x1c4)],!!(_0x20e674[_0x391143(0x2fe)]&&_0x1d1f80));if(_0x20e674['enableVless'])_0x3c313f[_0x391143(0x4bd)](vlessNode(_0x20e674,_0x2ca922,_0x4c2099,_0x36d5b3['v']));if(_0x20e674[_0x391143(0x1c4)]&&(_0x20e674[_0x391143(0x349)]||_0x1d1f80))_0x3c313f[_0x391143(0x4bd)](trojanNode(_0x20e674,_0x2ca922,_0x1d1f80?_0x4c2099:Number(_0x25e706),_0x36d5b3['t']));if(_0x20e674['enableXhttp']&&_0x1d1f80)_0x3c313f['push'](vlessNode(_0x20e674,_0x2ca922,_0x4c2099,_0x36d5b3['x'],{'type':_0x391143(0x25b)}));},_0xa0c609=(_0x487c54,_0x302470,_0x42747a,_0x26f3f3)=>{_0x743d56(_0x487c54,Number(_0x302470)||0x1bb,_0x42747a,_0x26f3f3);};if(_0x549d5d===_0x5c9856(0x426)){let _0x2de3fc=Math[_0x5c9856(0x281)](Math[_0x5c9856(0x344)](parseInt(_0x20e674[_0x5c9856(0x3da)][_0x5c9856(0x263)])||0x10,0x1),Math[_0x5c9856(0x281)](0x63,_0x49fef1));if(_0x20e674[_0x5c9856(0x30c)]){const _0xbcb5f4=parseInt(_0x20e674['nodeLimitCount'])||0x0;if(_0xbcb5f4>0x0)_0x2de3fc=Math[_0x5c9856(0x281)](Math[_0x5c9856(0x344)](_0x2de3fc,_0xbcb5f4),_0x49fef1);}const _0x578412=(_0x20e674['enableVless']?0x1:0x0)+(_0x20e674[_0x5c9856(0x1c4)]?0x1:0x0)+(_0x20e674[_0x5c9856(0x2fe)]?0x1:0x0)||0x1;let _0x3f4c16=0x0;const _0x2879e7=(_0x20e674['_regionPool']||[])['filter'](_0x2caa1e=>_0x2caa1e&&_0x2caa1e['ip']);let _0x470ed4=0x0;while(_0x3f4c16<_0x2de3fc&&_0x470ed4<_0x2879e7[_0x5c9856(0x283)]){const _0x472bd5=_0x2879e7[_0x470ed4++];if(_0x2ab1a2&&_0x2ab1a2[_0x5c9856(0x32d)](_0x472bd5['ip']))continue;const _0x5b3f66=protoNames(_0x472bd5['name']||_0x5c9856(0x1dd)+String(_0x3f4c16+0x1)['padStart'](0x2,'0'),!!_0x20e674['enableVless'],!!_0x20e674[_0x5c9856(0x1c4)],!!_0x20e674[_0x5c9856(0x2fe)]);_0x20e674['enableVless']&&(_0x3c313f[_0x5c9856(0x4bd)](vlessNode(_0x20e674,_0x472bd5['ip'],_0x472bd5[_0x5c9856(0x21c)]||0x1bb,_0x5b3f66['v'])),_0x3f4c16++);if(_0x3f4c16>=_0x2de3fc)break;_0x20e674[_0x5c9856(0x1c4)]&&(_0x3c313f['push'](trojanNode(_0x20e674,_0x472bd5['ip'],_0x472bd5[_0x5c9856(0x21c)]||0x1bb,_0x5b3f66['t'])),_0x3f4c16++);if(_0x3f4c16>=_0x2de3fc)break;_0x20e674['enableXhttp']&&(_0x3c313f[_0x5c9856(0x4bd)](vlessNode(_0x20e674,_0x472bd5['ip'],_0x472bd5[_0x5c9856(0x21c)]||0x1bb,_0x5b3f66['x'],{'type':_0x5c9856(0x25b)})),_0x3f4c16++);}const _0x19aecd=randomIPsFromCidrs(_0x2c2f13,Math[_0x5c9856(0x3f1)](_0x2de3fc/_0x578412)*0x3);let _0x4d51a5=_0x19aecd;if(_0x2ab1a2){const _0x148210=_0x19aecd['filter'](_0x226a6b=>!_0x2ab1a2[_0x5c9856(0x32d)](_0x226a6b)),_0x18ff20=_0x19aecd['filter'](_0x1fb14d=>_0x2ab1a2['has'](_0x1fb14d));_0x4d51a5=[..._0x148210,..._0x18ff20];}for(const _0x99cac8 of _0x4d51a5){if(_0x3f4c16>=_0x2de3fc)break;const _0x58e104=_0x5c9856(0x1dd)+String(_0x3f4c16+0x1)[_0x5c9856(0x21f)](0x2,'0'),_0x49946f=protoNames(_0x58e104,!!_0x20e674['enableVless'],!!_0x20e674[_0x5c9856(0x1c4)],!!_0x20e674[_0x5c9856(0x2fe)]);_0x20e674['enableVless']&&(_0x3c313f['push'](vlessNode(_0x20e674,_0x99cac8,0x1bb,_0x49946f['v'])),_0x3f4c16++);if(_0x3f4c16>=_0x2de3fc)break;_0x20e674[_0x5c9856(0x1c4)]&&(_0x3c313f['push'](trojanNode(_0x20e674,_0x99cac8,0x1bb,_0x49946f['t'])),_0x3f4c16++);if(_0x3f4c16>=_0x2de3fc)break;_0x20e674['enableXhttp']&&(_0x3c313f[_0x5c9856(0x4bd)](vlessNode(_0x20e674,_0x99cac8,0x1bb,_0x49946f['x'],{'type':'xhttp'})),_0x3f4c16++);}return _0x3c313f;}const _0x283d1c=String(_0x20e674[_0x5c9856(0x331)]||'')[_0x5c9856(0x49e)](/[\n,;]+/)['map'](_0x399e61=>_0x399e61[_0x5c9856(0x34f)]())['filter'](_0x1328a9=>_0x1328a9&&!_0x1328a9[_0x5c9856(0x363)](_0x5c9856(0x3c1)));_0x283d1c[_0x5c9856(0x2ec)]((_0x48e824,_0x2b1fc6)=>{const _0x87dd09=_0x5c9856,_0x5c1403=_0x48e824[_0x87dd09(0x3df)]('#'),_0x369dda=(_0x5c1403>=0x0?_0x48e824[_0x87dd09(0x1ab)](0x0,_0x5c1403):_0x48e824)[_0x87dd09(0x34f)](),_0x4bd3da=(_0x5c1403>=0x0?_0x48e824[_0x87dd09(0x1ab)](_0x5c1403+0x1):'')[_0x87dd09(0x34f)](),_0x58afe9=parseHostPort(_0x369dda,0x1bb);if(_0x58afe9[_0x87dd09(0x3bc)]['startsWith']('*.'))return;_0xa0c609(_0x58afe9[_0x87dd09(0x3bc)],_0x58afe9['port'],_0x4bd3da||_0x87dd09(0x1dd)+String(_0x2b1fc6+0x1)[_0x87dd09(0x21f)](0x2,'0'));});let _0x50326a=_0x20e674[_0x5c9856(0x3cc)]||[];if(_0x5b38b6&&!_0x5d20f2&&_0x50326a[_0x5c9856(0x283)]>0x1){const _0x4f3c7a=[],_0x5a3f40=[];for(const _0xdf6928 of _0x50326a)(String(_0xdf6928['ip'])[_0x5c9856(0x3df)](':')>=0x0?_0x5a3f40:_0x4f3c7a)[_0x5c9856(0x4bd)](_0xdf6928);const _0x56c45b=[],_0x5ddf73=Math[_0x5c9856(0x344)](_0x4f3c7a[_0x5c9856(0x283)],_0x5a3f40['length']);for(let _0x2f4d1a=0x0;_0x2f4d1a<_0x5ddf73;_0x2f4d1a++){if(_0x2f4d1a<_0x4f3c7a[_0x5c9856(0x283)])_0x56c45b['push'](_0x4f3c7a[_0x2f4d1a]);if(_0x2f4d1a<_0x5a3f40[_0x5c9856(0x283)])_0x56c45b['push'](_0x5a3f40[_0x2f4d1a]);}_0x50326a=_0x56c45b;}_0x50326a[_0x5c9856(0x2ec)]((_0x3b9611,_0x589a58)=>{const _0x2d6fdb=_0x5c9856;_0xa0c609(_0x3b9611['ip'],_0x3b9611['port']||0x1bb,_0x3b9611[_0x2d6fdb(0x1d1)]||_0x2d6fdb(0x1dd)+String(_0x589a58+0x1)['padStart'](0x2,'0'),_0x3b9611[_0x2d6fdb(0x1bd)]===!![]);});if(_0x549d5d===_0x5c9856(0x244)&&!(_0x20e674[_0x5c9856(0x3da)]&&_0x20e674[_0x5c9856(0x3da)]['subIncludeDefault']))return _0x3c313f;!_0x283d1c['length']&&!(_0x20e674[_0x5c9856(0x3cc)]||[])[_0x5c9856(0x283)]&&(parseIPList(BUILTIN_PREFERRED_IPS['join']('\x0a'))[_0x5c9856(0x2ec)](_0x3a8928=>_0xa0c609(_0x3a8928['ip'],_0x3a8928[_0x5c9856(0x21c)]||0x1bb,_0x3a8928[_0x5c9856(0x1d1)]||'0')),BUILTIN_OFFICIAL_DOMAINS['forEach']((_0xcda343,_0x27f5a7)=>_0xa0c609(_0xcda343,0x1bb,_0x5c9856(0x33d)+String(_0x27f5a7+0x1)['padStart'](0x2,'0'))));const _0x1fcbb1=Math[_0x5c9856(0x281)](Math[_0x5c9856(0x344)](parseInt(_0x20e674[_0x5c9856(0x3da)]&&_0x20e674[_0x5c9856(0x3da)][_0x5c9856(0x2dd)]||0x0)||0x0,0x0),0x1388),_0x293e19=Math[_0x5c9856(0x281)](_0x1fcbb1,_0x49fef1)-_0x3713cb[_0x5c9856(0x3b2)];if(_0x293e19>0x0){const _0x54549d=_0x2ab1a2?BUILTIN_STABLE_IPS[_0x5c9856(0x4c3)](_0x18cc6c=>!_0x2ab1a2[_0x5c9856(0x32d)](_0x18cc6c)):BUILTIN_STABLE_IPS[_0x5c9856(0x1ab)](),_0x3a0b34=randomIPsFromCidrs(_0x2c2f13,_0x293e19*0x3),_0x2c5ec6=_0x2ab1a2?_0x3a0b34['filter'](_0x58d538=>!_0x2ab1a2[_0x5c9856(0x32d)](_0x58d538)):_0x3a0b34;let _0x3edff8=[..._0x54549d,..._0x2c5ec6];if(_0x3edff8[_0x5c9856(0x283)]<_0x293e19)_0x3edff8=[...BUILTIN_STABLE_IPS,..._0x3a0b34];if(_0x3edff8['length']>0x0){const _0x96a27f=Math[_0x5c9856(0x281)](_0x3edff8[_0x5c9856(0x283)],Math[_0x5c9856(0x344)](_0x293e19,0x14),0x3c),_0x2309a5=_0x3edff8['slice'](0x0,_0x96a27f),_0x1d00e5=_0x3b0bf3?_0x2309a5[_0x5c9856(0x209)](()=>!![]):await probeAll(_0x2309a5,_0xf12f7f=>testProxyAlive(_0xf12f7f,0x1bb,0x5dc)),_0x1dff3b=_0x2309a5['filter']((_0x5a8e73,_0x5462d3)=>_0x1d00e5[_0x5462d3]),_0x38141a=_0x3edff8[_0x5c9856(0x1ab)](_0x96a27f);_0x3edff8=[..._0x1dff3b,..._0x38141a][_0x5c9856(0x1ab)](0x0,_0x293e19);}let _0x593304=0x0;for(const _0x1fdd4b of _0x3edff8){if(_0x3c313f[_0x5c9856(0x283)]>=_0x49fef1)break;_0x593304++,_0xa0c609(_0x1fdd4b,0x1bb,_0x5c9856(0x1dd)+String(_0x593304)[_0x5c9856(0x21f)](0x3,'0'));}}return _0x3c313f;}function parseNodeServer(_0x2920a0){const _0x2b381b=_0x193e21,_0x2ab04c=_0x2920a0[_0x2b381b(0x3df)]('@'),_0x238553=_0x2920a0[_0x2b381b(0x3df)]('?',_0x2ab04c),_0x173fab=_0x238553>_0x2ab04c&&_0x2ab04c>=0x0?_0x2920a0[_0x2b381b(0x1ab)](_0x2ab04c+0x1,_0x238553):_0x2920a0[_0x2b381b(0x1ab)](_0x2ab04c+0x1);if(_0x173fab[_0x2b381b(0x1ec)]('[')){const _0x10f7f1=_0x173fab[_0x2b381b(0x3df)](']'),_0x175d30=_0x10f7f1>0x0?_0x173fab[_0x2b381b(0x1ab)](0x1,_0x10f7f1):_0x173fab,_0x15652a=_0x173fab['slice'](_0x10f7f1+0x1),_0x49a030=_0x15652a[_0x2b381b(0x1ec)](':')?parseInt(_0x15652a['slice'](0x1)):0x1bb;return{'host':_0x175d30,'port':isNaN(_0x49a030)?0x1bb:_0x49a030};}const _0x1f5766=_0x173fab[_0x2b381b(0x1eb)](':');if(_0x1f5766>0x0){const _0x209f74=parseInt(_0x173fab[_0x2b381b(0x1ab)](_0x1f5766+0x1));return{'host':_0x173fab[_0x2b381b(0x1ab)](0x0,_0x1f5766),'port':isNaN(_0x209f74)?0x1bb:_0x209f74};}return{'host':_0x173fab,'port':0x1bb};}function getParam(_0x13e59b,_0xc1c524){const _0x4b856d=_0x193e21,_0x49933d=_0x13e59b[_0x4b856d(0x3df)]('?');if(_0x49933d<0x0)return null;const _0x42ac23=_0x13e59b[_0x4b856d(0x3df)]('#',_0x49933d),_0x45eb09=_0x42ac23>_0x49933d?_0x13e59b[_0x4b856d(0x1ab)](_0x49933d+0x1,_0x42ac23):_0x13e59b[_0x4b856d(0x1ab)](_0x49933d+0x1);for(const _0x5876c2 of _0x45eb09[_0x4b856d(0x49e)]('&')){const _0x52b589=_0x5876c2['indexOf']('='),_0x190c60=_0x52b589>0x0?_0x5876c2['slice'](0x0,_0x52b589):_0x5876c2;if(_0x190c60===_0xc1c524)return _0x52b589>0x0?decodeURIComponent(_0x5876c2[_0x4b856d(0x1ab)](_0x52b589+0x1)):'';}return null;}function parseShareNode(_0x4e55fa,_0x51c2d9){const _0x2cc181=_0x193e21,{host:_0x2f7540,port:_0x5d0e43}=parseNodeServer(_0x4e55fa),_0x439e7f=_0x2f7540,_0x5cdc85=_0x4e55fa['indexOf']('#');let _0x2659bf='节点'+(_0x51c2d9+0x1);if(_0x5cdc85>=0x0)try{_0x2659bf=decodeURIComponent(_0x4e55fa[_0x2cc181(0x1ab)](_0x5cdc85+0x1))||_0x2659bf;}catch(_0x15d6b9){}const _0x4d101e=_0x4e55fa[_0x2cc181(0x3df)]('@');let _0x4010c0='';if(_0x4d101e>=0x0){const _0x35b02b=_0x4e55fa[_0x2cc181(0x3df)](_0x2cc181(0x3c1)),_0x2f8113=_0x35b02b>=0x0?_0x35b02b+0x3:0x0;try{_0x4010c0=decodeURIComponent(_0x4e55fa[_0x2cc181(0x1ab)](_0x2f8113,_0x4d101e));}catch(_0x320e1b){_0x4010c0=_0x4e55fa[_0x2cc181(0x1ab)](_0x2f8113,_0x4d101e);}}const _0x4d5919=_0x4e55fa[_0x2cc181(0x1ec)](_0x2cc181(0x3f9)),_0x1c1eaa=_0x4d5919||(getParam(_0x4e55fa,_0x2cc181(0x1e3))||_0x2cc181(0x19b))===_0x2cc181(0x19b);return{'srv':_0x439e7f,'prt':_0x5d0e43,'name':_0x2659bf,'user':_0x4010c0,'isTrojan':_0x4d5919,'tls':_0x1c1eaa};}const REGION_TAGS={'HK':['HK','香港'],'TW':['TW','台湾'],'US':['US','美国'],'SG':['SG','新加坡'],'JP':['JP','日本'],'KR':['KR','韩国'],'DE':['DE','德国']},ISP_TAGS={'移动':['移动','CM',_0x193e21(0x437)],'联通':['联通','CU',_0x193e21(0x397)],'电信':['电信','CT',_0x193e21(0x346)]},FILTER_ISPS=['移动','联通','电信'],FILTER_IPTYPES=[_0x193e21(0x2b8),_0x193e21(0x442)];function filterNodes(_0x23932b,_0x31e417){const _0x355a2e=_0x193e21;if(!_0x31e417||!_0x31e417[_0x355a2e(0x4a2)]&&!_0x31e417['ipType']&&!_0x31e417['isp'])return _0x23932b;const _0x1e2192=_0x31e417['region']||_0x355a2e(0x384),_0x3a78a7=_0x31e417[_0x355a2e(0x2d5)]||FILTER_IPTYPES,_0x482e6f=_0x31e417[_0x355a2e(0x306)]||FILTER_ISPS,_0x705654=_0x23932b[_0x355a2e(0x209)](_0x34403a=>{const _0x105b7f=_0x355a2e,{host:_0x3bd54b}=parseNodeServer(_0x34403a);let _0x5ebf44='';try{const _0x363d5c=_0x34403a[_0x105b7f(0x3df)]('#');if(_0x363d5c>=0x0)_0x5ebf44=decodeURIComponent(_0x34403a[_0x105b7f(0x1ab)](_0x363d5c+0x1)||'');}catch(_0x47e444){_0x5ebf44='';}return{'host':_0x3bd54b,'name':_0x5ebf44,'up':_0x5ebf44[_0x105b7f(0x441)]()};}),_0x396146=_0x705654[_0x355a2e(0x3f4)](_0x15d88a=>_0x15d88a['up']&&Object['keys'](ISP_TAGS)[_0x355a2e(0x3f4)](_0x22fc99=>(ISP_TAGS[_0x22fc99]||[_0x22fc99])[_0x355a2e(0x3f4)](_0x48f12c=>_0x15d88a['up'][_0x355a2e(0x363)](_0x48f12c[_0x355a2e(0x441)]())))),_0x14d313=(_0x16b36b,_0x41cf44,_0x2c72bd)=>{const _0x4fc111=_0x355a2e,_0x2ea183=Array[_0x4fc111(0x266)](_0x16b36b)?_0x16b36b[_0x4fc111(0x283)]===0x0||_0x16b36b['includes']('all')?null:_0x16b36b['flatMap'](_0x7e94c1=>REGION_TAGS[_0x7e94c1]||[]):_0x16b36b!==_0x4fc111(0x384)?REGION_TAGS[_0x16b36b]||[]:null,_0x3e48cb=_0x2c72bd[_0x4fc111(0x283)]>0x0&&_0x2c72bd[_0x4fc111(0x283)]<FILTER_ISPS[_0x4fc111(0x283)];return _0x23932b[_0x4fc111(0x4c3)]((_0x82cdda,_0x2aa3cd)=>{const _0x33f242=_0x4fc111,_0x348a1c=_0x705654[_0x2aa3cd],_0x47cccb=_0x348a1c[_0x33f242(0x3bc)][_0x33f242(0x3df)](':')>=0x0;if(!_0x348a1c[_0x33f242(0x1d1)])return![];if(_0x2ea183&&!_0x2ea183[_0x33f242(0x3f4)](_0x55e858=>_0x348a1c['up'][_0x33f242(0x363)](_0x55e858[_0x33f242(0x441)]()))){if(!/^(优选IP|域名)-\d+/[_0x33f242(0x495)](_0x348a1c['name'])&&_0x348a1c['name']!==_0x33f242(0x31c))return![];}if(_0x41cf44[_0x33f242(0x283)]===0x1){if(_0x41cf44[0x0]===_0x33f242(0x2b8)&&_0x47cccb)return![];if(_0x41cf44[0x0]===_0x33f242(0x442)&&!_0x47cccb)return![];}if(_0x3e48cb&&_0x396146&&!_0x2c72bd[_0x33f242(0x3f4)](_0x329ab0=>(ISP_TAGS[_0x329ab0]||[_0x329ab0])[_0x33f242(0x3f4)](_0x157010=>_0x348a1c['up'][_0x33f242(0x363)](_0x157010[_0x33f242(0x441)]()))))return![];return!![];});};let _0x2bd1a9=_0x14d313(_0x1e2192,_0x3a78a7,_0x482e6f);if(!_0x2bd1a9[_0x355a2e(0x283)])_0x2bd1a9=_0x14d313(_0x1e2192,_0x3a78a7,FILTER_ISPS);if(!_0x2bd1a9[_0x355a2e(0x283)])_0x2bd1a9=_0x14d313(_0x1e2192,FILTER_IPTYPES,FILTER_ISPS);if(!_0x2bd1a9[_0x355a2e(0x283)])_0x2bd1a9=_0x14d313('all',FILTER_IPTYPES,FILTER_ISPS);return _0x2bd1a9;}function yamlVal(_0x128fc2){const _0x517fb3=_0x193e21;if(typeof _0x128fc2===_0x517fb3(0x1a9)||typeof _0x128fc2==='number')return String(_0x128fc2);const _0x3814c5=String(_0x128fc2);return/^[\w.\-/\u4e00-\u9fa5]+$/['test'](_0x3814c5)?_0x3814c5:JSON[_0x517fb3(0x44b)](_0x3814c5);}function clashProxyYaml(_0xf5557b){const _0x171b12=_0x193e21,_0x5adcbc=[];_0x5adcbc[_0x171b12(0x4bd)](_0x171b12(0x20e)+yamlVal(_0xf5557b[_0x171b12(0x1d1)])),_0x5adcbc[_0x171b12(0x4bd)](_0x171b12(0x4d6)+_0xf5557b[_0x171b12(0x40b)]),_0x5adcbc[_0x171b12(0x4bd)](_0x171b12(0x3c4)+yamlVal(_0xf5557b[_0x171b12(0x3d4)])),_0x5adcbc[_0x171b12(0x4bd)](_0x171b12(0x453)+_0xf5557b[_0x171b12(0x21c)]);if(_0xf5557b['type']===_0x171b12(0x1b4))_0x5adcbc['push']('\x20\x20\x20\x20uuid:\x20'+yamlVal(_0xf5557b[_0x171b12(0x3a7)]));else _0x5adcbc['push'](_0x171b12(0x2c1)+yamlVal(_0xf5557b[_0x171b12(0x4ec)]));_0x5adcbc[_0x171b12(0x4bd)](_0x171b12(0x4b6)+_0xf5557b['network']),_0x5adcbc['push'](_0x171b12(0x2a3));if(_0xf5557b[_0x171b12(0x19b)]){_0x5adcbc[_0x171b12(0x4bd)](_0x171b12(0x3c9)),_0x5adcbc[_0x171b12(0x4bd)](_0x171b12(0x2ca)),_0x5adcbc[_0x171b12(0x4bd)](_0xf5557b[_0x171b12(0x4db)]===_0x171b12(0x25b)?_0x171b12(0x359):_0x171b12(0x4a3)),_0x5adcbc[_0x171b12(0x4bd)](_0x171b12(0x3b9)+yamlVal(_0xf5557b[_0x171b12(0x330)]));if(_0xf5557b[_0x171b12(0x40b)]===_0x171b12(0x367))_0x5adcbc['push'](_0x171b12(0x472)+yamlVal(_0xf5557b[_0x171b12(0x330)]));_0x5adcbc['push'](_0x171b12(0x484)),_0xf5557b['ech-opts']&&(_0x5adcbc[_0x171b12(0x4bd)](_0x171b12(0x487)),_0x5adcbc['push']('\x20\x20\x20\x20\x20\x20enable:\x20'+yamlVal(_0xf5557b['ech-opts'][_0x171b12(0x488)])),_0x5adcbc[_0x171b12(0x4bd)](_0x171b12(0x1c2)+yamlVal(_0xf5557b[_0x171b12(0x4e7)]['query-server-name'])));}if(_0xf5557b[_0x171b12(0x4db)]==='ws')_0x5adcbc[_0x171b12(0x4bd)](_0x171b12(0x47f)),_0x5adcbc[_0x171b12(0x4bd)](_0x171b12(0x337)+yamlVal(_0xf5557b[_0x171b12(0x41f)][_0x171b12(0x4af)])),_0x5adcbc['push']('\x20\x20\x20\x20\x20\x20headers:'),_0x5adcbc[_0x171b12(0x4bd)](_0x171b12(0x282)+yamlVal(_0xf5557b[_0x171b12(0x41f)][_0x171b12(0x368)][_0x171b12(0x1de)]));else{if(_0xf5557b[_0x171b12(0x4db)]==='xhttp'){const _0x5267a9=_0xf5557b[_0x171b12(0x333)];_0x5adcbc[_0x171b12(0x4bd)](_0x171b12(0x4f8)),_0x5adcbc[_0x171b12(0x4bd)](_0x171b12(0x337)+yamlVal(_0x5267a9['path'])),_0x5adcbc[_0x171b12(0x4bd)](_0x171b12(0x3d8)+yamlVal(_0x5267a9[_0x171b12(0x28e)])),_0x5adcbc['push'](_0x171b12(0x42c)+yamlVal(_0x5267a9[_0x171b12(0x3bc)])),_0x5adcbc['push']('\x20\x20\x20\x20\x20\x20x-padding-obfs-mode:\x20'+yamlVal(_0x5267a9[_0x171b12(0x3ed)])),_0x5adcbc[_0x171b12(0x4bd)]('\x20\x20\x20\x20\x20\x20x-padding-method:\x20'+yamlVal(_0x5267a9[_0x171b12(0x414)])),_0x5adcbc[_0x171b12(0x4bd)](_0x171b12(0x245)+yamlVal(_0x5267a9[_0x171b12(0x217)])),_0x5adcbc[_0x171b12(0x4bd)](_0x171b12(0x392)+yamlVal(_0x5267a9['x-padding-header'])),_0x5adcbc['push'](_0x171b12(0x2a2)+yamlVal(_0x5267a9[_0x171b12(0x275)]));}}return _0x5adcbc[_0x171b12(0x2b6)]('\x0a');}function generateClash(_0x192c9f,_0x260740){const _0x399e63=_0x193e21,_0x549f92=_0x192c9f['host'],_0x49c76e='/'+_0x192c9f[_0x399e63(0x4af)],_0x27130c=new Set(),_0x504399=_0x260740[_0x399e63(0x209)](_0x26d057=>{const _0xbd5031=_0x399e63,{user:_0x3cec1d,srv:_0x256257,prt:_0x10c348,name:_0x3ccf88,isTrojan:_0x40259e,tls:_0x5d3515}=parseShareNode(_0x26d057,0x0);let _0x5ca2a9=_0x3ccf88;const _0x21bbc4=getParam(_0x26d057,'type')||'ws';if(_0x27130c['has'](_0x5ca2a9)){const _0x1225fc=_0x40259e?'T':_0x21bbc4===_0xbd5031(0x25b)?'X':'W';let _0x35a20f=_0x5ca2a9+'·'+_0x1225fc,_0x4a47bd=0x2;while(_0x27130c[_0xbd5031(0x32d)](_0x35a20f)){_0x35a20f=_0x5ca2a9+'·'+_0x1225fc+_0x4a47bd,_0x4a47bd++;}_0x5ca2a9=_0x35a20f;}_0x27130c[_0xbd5031(0x41a)](_0x5ca2a9);const _0x5bfac3={'name':_0x5ca2a9,'server':_0x256257,'port':_0x10c348,'udp':!![],..._0x5d3515?{'tls':!![],'skip-cert-verify':!![],'servername':_0x549f92,'client-fingerprint':'chrome','alpn':[_0xbd5031(0x19d)]}:{},..._0x192c9f[_0xbd5031(0x4d3)]&&_0x5d3515?{'ech-opts':{'enable':!![],'query-server-name':_0x192c9f[_0xbd5031(0x240)]||'cloudflare-ech.com'}}:{}};if(_0x40259e)return{..._0x5bfac3,'type':_0xbd5031(0x367),'password':_0x3cec1d,'network':'ws','ws-opts':{'path':_0x49c76e,'headers':{'Host':_0x549f92}}};if(_0x21bbc4===_0xbd5031(0x25b)){let _0x8b0d0d={};try{_0x8b0d0d=JSON[_0xbd5031(0x4e5)](getParam(_0x26d057,'extra')||'{}');}catch(_0x2a0a5c){}return{..._0x5bfac3,'type':_0xbd5031(0x1b4),'uuid':_0x3cec1d,'network':_0xbd5031(0x25b),'alpn':['h2'],'xhttp-opts':{'path':_0x49c76e,'mode':_0xbd5031(0x412),'host':_0x549f92,'x-padding-obfs-mode':_0x8b0d0d[_0xbd5031(0x1ea)]!==undefined?_0x8b0d0d[_0xbd5031(0x1ea)]:!![],'x-padding-method':_0x8b0d0d['xPaddingMethod']||_0xbd5031(0x37b),'x-padding-placement':_0x8b0d0d[_0xbd5031(0x289)]||'queryInHeader','x-padding-header':_0x8b0d0d['xPaddingHeader']||'','x-padding-key':_0x8b0d0d['xPaddingKey']||''}};}return{..._0x5bfac3,'type':_0xbd5031(0x1b4),'uuid':_0x3cec1d,'network':'ws','ws-opts':{'path':_0x49c76e,'headers':{'Host':_0x549f92}}};});_0x504399['sort']((_0x2488aa,_0x245b95)=>(_0x2488aa[_0x399e63(0x21c)]===0x1bb?0x0:0x1)-(_0x245b95[_0x399e63(0x21c)]===0x1bb?0x0:0x1));const _0x21c519='#\x20CFNext\x20订阅\x0atest-url:\x20\x27http://www.gstatic.com/generate_204\x27\x0aproxies:\x0a'+_0x504399[_0x399e63(0x209)](_0x6d7833=>clashProxyYaml(_0x6d7833))[_0x399e63(0x2b6)]('\x0a')+'\x0a'+CLASH_TEMPLATE+'\x0a';return _0x21c519;}function generateSurfboard(_0x5a3b7e,_0x1e9cad){const _0x3b0892=_0x193e21,_0x5eb658=_0x5a3b7e['host'],_0x55d3e2='/'+_0x5a3b7e[_0x3b0892(0x4af)],_0xc379d3=[];for(const _0xc4335c of _0x1e9cad){if(_0xc4335c[_0x3b0892(0x1ec)](_0x3b0892(0x3f9))&&_0xc4335c[_0x3b0892(0x3df)](_0x3b0892(0x29a))<0x0)_0xc379d3[_0x3b0892(0x4bd)](_0xc4335c);else{if(_0xc4335c[_0x3b0892(0x1ec)](_0x3b0892(0x429))&&_0xc4335c[_0x3b0892(0x3df)](_0x3b0892(0x1b7))<0x0&&_0xc4335c['indexOf'](_0x3b0892(0x29a))<0x0)_0xc379d3['push'](_0xc4335c[_0x3b0892(0x411)](/^vless:\/\//,_0x3b0892(0x3f9))['replace'](_0x3b0892(0x393),''));}}const _0x16fcaa=_0xc379d3[_0x3b0892(0x209)]((_0x10decb,_0x5b7649)=>{const _0x6781e0=_0x3b0892,{user:_0x97a3f7,srv:_0x1e5e29,prt:_0x457f77,name:_0x12438a}=parseShareNode(_0x10decb,_0x5b7649);return _0x12438a+_0x6781e0(0x383)+_0x1e5e29+',\x20'+_0x457f77+',\x20password='+_0x97a3f7+_0x6781e0(0x364)+_0x55d3e2+_0x6781e0(0x345)+_0x5eb658+',\x20tls=true,\x20skip-cert-verify=true,\x20sni='+_0x5eb658;});return _0x3b0892(0x439)+_0x16fcaa['join']('\x0a')+_0x3b0892(0x4d1)+_0x16fcaa[_0x3b0892(0x209)](_0x48c0cf=>_0x48c0cf['split'](_0x3b0892(0x300))[0x0])[_0x3b0892(0x2b6)](',\x20')+_0x3b0892(0x4be);}function generateSingbox(_0x1d3637,_0x58a588){const _0x5a9624=_0x193e21,_0x260e60=_0x1d3637[_0x5a9624(0x3bc)],_0x518909='/'+_0x1d3637['path'],_0x5bfeff=new Map(),_0x30bfb8=_0x58a588[_0x5a9624(0x209)]((_0x163b1d,_0x546c2b)=>{const _0x436357=_0x5a9624,{user:_0x4fbf50,srv:_0x148a6c,prt:_0x55b439,name:_0x374a87,isTrojan:_0x54e732,tls:_0x37bc11}=parseShareNode(_0x163b1d,_0x546c2b),_0x3b7178=getParam(_0x163b1d,'type')||'ws',_0x3e18e5=_0x374a87||_0x436357(0x1d4)+(_0x546c2b+0x1),_0x17c8b4=(_0x5bfeff[_0x436357(0x415)](_0x3e18e5)||0x0)+0x1;_0x5bfeff[_0x436357(0x1f5)](_0x3e18e5,_0x17c8b4);const _0x41bb96=_0x17c8b4===0x1?_0x3e18e5:_0x3e18e5+'-'+_0x17c8b4,_0x35a1e2=_0x37bc11?_0x3b7178===_0x436357(0x25b)?{'enabled':!![],'server_name':_0x260e60,'insecure':!![],'alpn':['h2']}:{'enabled':!![],'server_name':_0x260e60,'insecure':!![],'alpn':[_0x436357(0x19d)],'utls':{'enabled':!![],'fingerprint':_0x436357(0x2a9)}}:{'enabled':![]},_0xb20f6a=_0x3b7178===_0x436357(0x25b)?{'type':_0x436357(0x25b),'mode':_0x436357(0x412),'path':_0x518909}:_0x37bc11?{'type':'ws','path':_0x518909,'headers':{'Host':_0x260e60},'max_early_data':0x800,'early_data_header_name':_0x436357(0x23c)}:{'type':'ws','path':_0x518909,'headers':{'Host':_0x260e60}};if(_0x54e732)return{'type':_0x436357(0x367),'tag':_0x41bb96,'server':_0x148a6c,'server_port':_0x55b439,'password':_0x4fbf50,'tls':_0x35a1e2,'transport':_0xb20f6a};return{'type':_0x436357(0x1b4),'tag':_0x41bb96,'server':_0x148a6c,'server_port':_0x55b439,'uuid':_0x4fbf50,'packet_encoding':'xudp','tls':_0x35a1e2,'transport':_0xb20f6a};}),_0x17a520=_0x30bfb8[_0x5a9624(0x209)](_0x4f82dc=>_0x4f82dc['tag']),_0x16e1df={'log':{'level':_0x5a9624(0x42b)},'dns':{'servers':[{'address':_0x5a9624(0x2e7)},{'address':'119.29.29.29'}]},'inbounds':[{'type':_0x5a9624(0x4a8),'tag':_0x5a9624(0x31a),'listen':'127.0.0.1','listen_port':0x820}],'outbounds':[..._0x30bfb8,{'type':_0x5a9624(0x27c),'tag':_0x5a9624(0x27c)},{'type':_0x5a9624(0x405),'tag':'block'},{'type':'selector','tag':_0x5a9624(0x271),'outbounds':_0x17a520},{'type':_0x5a9624(0x431),'tag':_0x5a9624(0x4b0),'outbounds':[_0x5a9624(0x27c)]},{'type':_0x5a9624(0x431),'tag':_0x5a9624(0x463),'outbounds':['🚀\x20节点选择',_0x5a9624(0x4b0)]}],'route':{'rules':[{'geoip':['cn'],'outbound':'direct'},{'outbound':_0x5a9624(0x463)}]}};return JSON['stringify'](_0x16e1df,null,0x2);}function generateSurge(_0x5f6aa7,_0xa5c465){const _0x17eecd=_0x193e21,_0x4ff5e9=_0x5f6aa7[_0x17eecd(0x3bc)],_0x46ddbe='/'+_0x5f6aa7[_0x17eecd(0x4af)],_0x19b26b=_0xa5c465['map']((_0x47354f,_0x17805c)=>{const _0x4f9ee8=_0x17eecd,{user:_0x47af7f,srv:_0x527014,prt:_0x1bfe0d,name:_0x444c22,isTrojan:_0x5b7155,tls:_0x47915d}=parseShareNode(_0x47354f,_0x17805c),_0x319665=_0x47915d?_0x4f9ee8(0x2d4)+_0x4ff5e9:_0x4f9ee8(0x19c);return _0x5b7155?_0x444c22+_0x4f9ee8(0x383)+_0x527014+',\x20'+_0x1bfe0d+',\x20password='+_0x47af7f+_0x4f9ee8(0x364)+_0x46ddbe+_0x4f9ee8(0x345)+_0x4ff5e9+_0x319665:_0x444c22+_0x4f9ee8(0x4f2)+_0x527014+',\x20'+_0x1bfe0d+_0x4f9ee8(0x3b1)+_0x47af7f+_0x4f9ee8(0x364)+_0x46ddbe+_0x4f9ee8(0x345)+_0x4ff5e9+_0x319665;});return _0x17eecd(0x439)+_0x19b26b[_0x17eecd(0x2b6)]('\x0a')+_0x17eecd(0x4d1)+_0x19b26b['map'](_0x500933=>_0x500933[_0x17eecd(0x49e)](_0x17eecd(0x300))[0x0])['join'](',\x20')+_0x17eecd(0x4be);}function generateLoon(_0x735e43,_0x187906){const _0x4d255b=_0x193e21,_0x1b1772=_0x735e43[_0x4d255b(0x3bc)],_0x20b6ca='/'+_0x735e43['path'],_0x448437=_0x187906[_0x4d255b(0x209)]((_0x43abd8,_0xadaf64)=>{const _0xf51933=_0x4d255b,{user:_0x3df1b6,srv:_0x375513,prt:_0x463699,name:_0x2bb650,isTrojan:_0x2c87ba,tls:_0x35b71f}=parseShareNode(_0x43abd8,_0xadaf64),_0x5e98e3=_0x35b71f?_0xf51933(0x2d4)+_0x1b1772:',\x20tls=false';return _0x2c87ba?_0x2bb650+_0xf51933(0x383)+_0x375513+',\x20'+_0x463699+_0xf51933(0x243)+_0x3df1b6+_0xf51933(0x364)+_0x20b6ca+_0xf51933(0x345)+_0x1b1772+_0x5e98e3:_0x2bb650+_0xf51933(0x4f2)+_0x375513+',\x20'+_0x463699+_0xf51933(0x3b1)+_0x3df1b6+',\x20ws=true,\x20ws-path='+_0x20b6ca+_0xf51933(0x345)+_0x1b1772+_0x5e98e3;}),_0xe68dca=_0x448437[_0x4d255b(0x209)](_0x338685=>_0x338685['split'](_0x4d255b(0x300))[0x0])[_0x4d255b(0x2b6)](',\x20');return _0x4d255b(0x205)+_0x448437[_0x4d255b(0x2b6)]('\x0a')+_0x4d255b(0x4d1)+_0xe68dca+_0x4d255b(0x1c8)+_0xe68dca+_0x4d255b(0x30e);}function generateQuanX(_0x1e5f74,_0x589df8){const _0x32608e=_0x193e21,_0x45a463=_0x1e5f74[_0x32608e(0x3bc)],_0x40783a='/'+_0x1e5f74['path'],_0x451d59=_0x19bf30=>_0x19bf30[_0x32608e(0x3df)](':')>=0x0?'['+_0x19bf30+']':_0x19bf30,_0x2d54e1=_0x589df8[_0x32608e(0x209)]((_0x4d10be,_0xdbca87)=>{const _0xc286f7=_0x32608e,{user:_0x37995d,srv:_0x5945ae,prt:_0x58b04e,name:_0x139440}=parseShareNode(_0x4d10be,_0xdbca87);if(_0x4d10be[_0xc286f7(0x1ec)](_0xc286f7(0x3f9)))return'trojan='+_0x451d59(_0x5945ae)+':'+_0x58b04e+_0xc286f7(0x243)+_0x37995d+_0xc286f7(0x1ae)+_0x45a463+_0xc286f7(0x30b)+_0x45a463+_0xc286f7(0x37f)+_0x40783a+_0xc286f7(0x216)+_0x139440;const _0x2f1b4d=(getParam(_0x4d10be,_0xc286f7(0x1e3))||_0xc286f7(0x19b))===_0xc286f7(0x19b);return _0xc286f7(0x32e)+_0x451d59(_0x5945ae)+':'+_0x58b04e+',\x20method=none,\x20password='+_0x37995d+',\x20obfs='+(_0x2f1b4d?'wss':'ws')+_0xc286f7(0x394)+_0x45a463+_0xc286f7(0x37f)+_0x40783a+(_0x2f1b4d?',\x20tls-verification=true,\x20tls13=true':'')+_0xc286f7(0x27d)+_0x139440;}),_0x141e50=_0x589df8[_0x32608e(0x209)]((_0x31193d,_0x270726)=>{const _0x141829=_0x32608e,_0x1b2276=_0x31193d[_0x141829(0x3df)]('#');if(_0x1b2276<0x0)return'节点'+(_0x270726+0x1);try{return decodeURIComponent(_0x31193d[_0x141829(0x1ab)](_0x1b2276+0x1))||'节点'+(_0x270726+0x1);}catch(_0x3cf046){return'节点'+(_0x270726+0x1);}})['join'](',\x20');return'[general]\x0anetwork_check_url=http://www.gstatic.com/generate_204\x0aserver_check_url=http://www.gstatic.com/generate_204\x0adns_exclusion_list=*.cmpassport.com,\x20*.qq.com,\x20*.weibo.com,\x20*.icloud.com\x0a[dns]\x0aserver=223.5.5.5\x0aserver=119.29.29.29\x0a[server_local]\x0a'+_0x2d54e1[_0x32608e(0x2b6)]('\x0a')+'\x0a[policy]\x0astatic=🚀\x20节点选择,\x20'+_0x141e50+_0x32608e(0x287);}let PROBE_ALIVE_ENABLED=![];function setProbeAlive(_0x706e32){const _0x13d669=_0x193e21;PROBE_ALIVE_ENABLED=_0x706e32===!![]||_0x706e32===_0x13d669(0x2a8)||_0x706e32==='1'||_0x706e32===0x1;}const PROBE_CONCURRENCY=0x4;let probeRunning=0x0;const probeWaiters=[];function probeLimit(){const _0xa313b6=_0x193e21;if(probeRunning<PROBE_CONCURRENCY)return probeRunning++,Promise['resolve']();return new Promise(_0x55e8c8=>probeWaiters[_0xa313b6(0x4bd)](_0x55e8c8));}function probeRelease(){const _0x3aa8f=_0x193e21,_0x9fca75=probeWaiters[_0x3aa8f(0x2c8)]();if(_0x9fca75)_0x9fca75();else probeRunning--;}async function probeAll(_0x5b73eb,_0x32be41){const _0x5c6652=_0x193e21,_0x25d6b3=[];let _0x23b89b=0x0;const _0x596303=Array['from']({'length':Math['min'](PROBE_CONCURRENCY,_0x5b73eb['length'])},async()=>{const _0x5ea49e=_0x3b0b;while(_0x23b89b<_0x5b73eb[_0x5ea49e(0x283)]){const _0x2b6b60=_0x23b89b++;await probeLimit();try{_0x25d6b3[_0x2b6b60]=await _0x32be41(_0x5b73eb[_0x2b6b60],_0x2b6b60);}catch(_0x18443a){_0x25d6b3[_0x2b6b60]=![];}finally{probeRelease();}}});return await Promise[_0x5c6652(0x384)](_0x596303),_0x25d6b3;}async function testProxyAlive(_0x1eec48,_0x42ebba,_0x2ae22f){const _0x434602=_0x193e21;if(!PROBE_ALIVE_ENABLED)return!![];if(isCloudflareIP(_0x1eec48))return!![];const _0x1197f4=_0x2ae22f||0x7d0;try{const _0x4e39e0=connect({'hostname':_0x1eec48,'port':_0x42ebba});await Promise[_0x434602(0x221)]([_0x4e39e0[_0x434602(0x497)],new Promise((_0x4dbaff,_0x456529)=>setTimeout(()=>_0x456529(new Error('proxy\x20timeout')),_0x1197f4))]);try{_0x4e39e0[_0x434602(0x3fb)]();}catch(_0x25122b){}return!![];}catch(_0x5ddf7c){return![];}}async function testRelayAlive(_0x110f94,_0x352c4c,_0x1a4720){if(!PROBE_ALIVE_ENABLED)return!![];return testRelayAliveRaw(_0x110f94,_0x352c4c,_0x1a4720);}async function testRelayAliveRaw(_0x44ab54,_0x38f0c4,_0x45afe4){const _0x5bf3c2=_0x193e21,_0x262031=_0x45afe4||0x9c4;try{const _0x2333d6=connect({'hostname':_0x44ab54,'port':_0x38f0c4});await Promise[_0x5bf3c2(0x221)]([_0x2333d6['opened'],new Promise((_0x5ce0aa,_0x391c16)=>setTimeout(()=>_0x391c16(new Error(_0x5bf3c2(0x4c2))),_0x262031))]);const _0x2b18e7=_0x2333d6[_0x5bf3c2(0x288)][_0x5bf3c2(0x2ae)](),_0x113e53=_0x2333d6['readable'][_0x5bf3c2(0x1df)]();await _0x2b18e7[_0x5bf3c2(0x206)](new TextEncoder()[_0x5bf3c2(0x379)](_0x5bf3c2(0x4a1)+_0x44ab54+_0x5bf3c2(0x1d6)));const _0x11a3c2=await Promise[_0x5bf3c2(0x221)]([_0x113e53[_0x5bf3c2(0x24a)](),new Promise((_0x40d82b,_0xe86110)=>setTimeout(()=>_0xe86110(new Error(_0x5bf3c2(0x257))),_0x262031))]);try{_0x2333d6[_0x5bf3c2(0x3fb)]();}catch(_0x3e17a2){}const _0xed1fee=new TextDecoder()[_0x5bf3c2(0x4de)](_0x11a3c2[_0x5bf3c2(0x3e1)]||new Uint8Array(0x0));return/^HTTP\/1\\.[01] (200|204)/[_0x5bf3c2(0x495)](_0xed1fee);}catch(_0x37d771){return![];}}async function dohFirstCF(_0x51b2aa){const _0xbb9e5f=_0x193e21;try{const _0x532e77=await fetchTimeout(_0xbb9e5f(0x339)+encodeURIComponent(_0x51b2aa)+_0xbb9e5f(0x285),{'headers':{'accept':'application/dns-json'}},0xfa0);if(!_0x532e77||!_0x532e77['ok'])return null;const _0x1c4c82=await _0x532e77[_0xbb9e5f(0x2d1)](),_0x491bb9=(_0x1c4c82[_0xbb9e5f(0x374)]||[])['filter'](_0x46172e=>_0x46172e[_0xbb9e5f(0x40b)]===0x1&&/^\d+\.\d+\.\d+\.\d+$/[_0xbb9e5f(0x495)](_0x46172e['data']))['map'](_0xbf4ee7=>_0xbf4ee7[_0xbb9e5f(0x1e9)]);return _0x491bb9['filter'](isCloudflareIP)[0x0]||null;}catch(_0x48314e){return null;}}const DOMAIN_ALIVE_CACHE={'t':0x0,'list':null};async function filterAliveDomains(_0x335087){const _0x233437=_0x193e21;if(!PROBE_ALIVE_ENABLED)return String(_0x335087||'')['split'](/[\n,;]+/)[_0x233437(0x209)](_0x4ccdc2=>_0x4ccdc2[_0x233437(0x34f)]()[_0x233437(0x411)](/^\*\./,''))['filter'](Boolean)[_0x233437(0x2b6)]('\x0a');if(Date['now']()-DOMAIN_ALIVE_CACHE['t']<0xa*0x3c*0x3e8&&DOMAIN_ALIVE_CACHE[_0x233437(0x3a3)]!==null)return DOMAIN_ALIVE_CACHE[_0x233437(0x3a3)];const _0x38b97e=String(_0x335087||'')['split'](/[\n,;]+/)[_0x233437(0x209)](_0x2d7d67=>_0x2d7d67[_0x233437(0x34f)]()['replace'](/^\*\./,''))[_0x233437(0x4c3)](Boolean),_0x3a66bf=await probeAll(_0x38b97e,async _0x198e92=>{const _0x40ec28=await dohFirstCF(_0x198e92);if(!_0x40ec28||!isCloudflareIP(_0x40ec28))return{'d':_0x198e92,'ok':![]};return{'d':_0x198e92,'ok':await testProxyAlive(_0x40ec28,0x1bb)};}),_0x2525c7=_0x3a66bf[_0x233437(0x209)]((_0x540142,_0x512f8b)=>_0x540142&&_0x540142['ok']?_0x38b97e[_0x512f8b]:null)[_0x233437(0x4c3)](Boolean);return DOMAIN_ALIVE_CACHE['t']=Date[_0x233437(0x3ad)](),DOMAIN_ALIVE_CACHE['list']=_0x2525c7['join']('\x0a'),DOMAIN_ALIVE_CACHE[_0x233437(0x3a3)];}const bestcfCache={'list':null,'at':0x0};async function fetchBestcfPool(){const _0x1713c5=_0x193e21;if(bestcfCache['list']&&Date[_0x1713c5(0x3ad)]()-bestcfCache['at']<0xa*0x3c*0x3e8)return bestcfCache[_0x1713c5(0x3a3)];const _0x522719=[],_0x4a5f70=BESTCF_REGION_URLS[_0x1713c5(0x209)](async _0x5ac192=>{const _0x5b4ff7=_0x1713c5;try{const _0x57436f=await fetchTimeout(_0x5ac192[_0x5b4ff7(0x2d7)],{'headers':{'User-Agent':'Mozilla/5.0'}},0x1f40);if(!_0x57436f['ok'])return;const _0x2c00ac=await _0x57436f[_0x5b4ff7(0x370)](),_0x3c1989=[];for(const _0x5b08fc of _0x2c00ac[_0x5b4ff7(0x49e)](/[\r\n]+/)){const _0x5d74ee=_0x5b08fc[_0x5b4ff7(0x34f)]()['match'](/^(\d{1,3}(?:\.\d{1,3}){3})(?::(\d+))?$/);if(_0x5d74ee&&_0x3c1989[_0x5b4ff7(0x283)]<_0x5ac192[_0x5b4ff7(0x19f)])_0x3c1989[_0x5b4ff7(0x4bd)]({'ip':_0x5d74ee[0x1],'port':_0x5d74ee[0x2]?parseInt(_0x5d74ee[0x2],0xa):0x1bb,'name':_0x5ac192['label']+'-'+String(_0x3c1989[_0x5b4ff7(0x283)]+0x1)['padStart'](0x2,'0')});}_0x3c1989['forEach'](_0x3a0fb1=>_0x522719[_0x5b4ff7(0x4bd)](_0x3a0fb1));}catch(_0x53417a){}});return await Promise[_0x1713c5(0x384)](_0x4a5f70),bestcfCache[_0x1713c5(0x3a3)]=_0x522719,bestcfCache['at']=Date[_0x1713c5(0x3ad)](),_0x522719;}function appendStableNodes(_0x2bfbdd,_0x2ca093,_0x317cd5){const _0x48cc85=_0x193e21;if(_0x2bfbdd[_0x48cc85(0x283)]>=_0x317cd5)return;const _0x226d6a=new Set();for(const _0x1296b0 of _0x2bfbdd){try{_0x226d6a[_0x48cc85(0x41a)](parseNodeServer(_0x1296b0)[_0x48cc85(0x3bc)]);}catch(_0x832d9){}}let _0xc85729=0x0;for(const _0x3644d7 of BUILTIN_STABLE_IPS){if(_0x2bfbdd[_0x48cc85(0x283)]>=_0x317cd5)break;if(_0x226d6a[_0x48cc85(0x32d)](_0x3644d7))continue;_0x226d6a[_0x48cc85(0x41a)](_0x3644d7),_0xc85729++;const _0x4e4c29=_0x48cc85(0x232)+String(_0xc85729)[_0x48cc85(0x21f)](0x2,'0'),_0x1cf2bc=protoNames(_0x4e4c29,!!_0x2ca093[_0x48cc85(0x34e)],!!_0x2ca093[_0x48cc85(0x1c4)],!!_0x2ca093[_0x48cc85(0x2fe)]);if(_0x2ca093[_0x48cc85(0x34e)])_0x2bfbdd['push'](vlessNode(_0x2ca093,_0x3644d7,0x1bb,_0x1cf2bc['v']));if(_0x2bfbdd[_0x48cc85(0x283)]>=_0x317cd5)break;if(_0x2ca093[_0x48cc85(0x1c4)])_0x2bfbdd[_0x48cc85(0x4bd)](trojanNode(_0x2ca093,_0x3644d7,0x1bb,_0x1cf2bc['t']));if(_0x2bfbdd['length']>=_0x317cd5)break;if(_0x2ca093[_0x48cc85(0x2fe)])_0x2bfbdd[_0x48cc85(0x4bd)](vlessNode(_0x2ca093,_0x3644d7,0x1bb,_0x1cf2bc['x'],{'type':_0x48cc85(0x25b)}));}}function appendFallbackNodes(_0x204d5c,_0x25a81a,_0x3d2c53,_0x9a36f6){const _0x2771a5=_0x193e21;if(_0x204d5c[_0x2771a5(0x283)]>=_0x3d2c53)return;const _0x504cc9=new Set();for(const _0x5462a6 of _0x204d5c){try{_0x504cc9[_0x2771a5(0x41a)](parseNodeServer(_0x5462a6)['host']);}catch(_0x4de723){}}const _0x31d81a=(_0x23a659,_0x4aec3e)=>{const _0x4aa32a=_0x2771a5;if(_0x204d5c[_0x4aa32a(0x283)]>=_0x3d2c53)return;if(_0x504cc9['has'](_0x23a659))return;_0x504cc9[_0x4aa32a(0x41a)](_0x23a659);const _0x490242=protoNames(_0x4aec3e,!!_0x25a81a[_0x4aa32a(0x34e)],!!_0x25a81a[_0x4aa32a(0x1c4)],!!_0x25a81a['enableXhttp']);if(_0x25a81a[_0x4aa32a(0x34e)])_0x204d5c[_0x4aa32a(0x4bd)](vlessNode(_0x25a81a,_0x23a659,0x1bb,_0x490242['v']));if(_0x25a81a[_0x4aa32a(0x1c4)])_0x204d5c[_0x4aa32a(0x4bd)](trojanNode(_0x25a81a,_0x23a659,0x1bb,_0x490242['t']));if(_0x25a81a[_0x4aa32a(0x2fe)])_0x204d5c['push'](vlessNode(_0x25a81a,_0x23a659,0x1bb,_0x490242['x'],{'type':_0x4aa32a(0x25b)}));};_0x25a81a['src']&&_0x25a81a[_0x2771a5(0x301)]['native']===!![]&&_0x31d81a(_0x25a81a[_0x2771a5(0x3bc)],'原生地址');}async function generateSubscription(_0x3a4d48,_0x12fea2,_0x5f1c80,_0x3b5e1a,_0x2cd69f,_0x21b7b3){const _0x5cfd59=_0x193e21;if(!_0x3a4d48[_0x5cfd59(0x4af)]||_0x3a4d48[_0x5cfd59(0x4af)]==='/'||_0x3a4d48[_0x5cfd59(0x4af)]==='')_0x3a4d48[_0x5cfd59(0x4af)]=_0x3a4d48[_0x5cfd59(0x3a7)];const _0x43eeb4=new URL(_0x12fea2)[_0x5cfd59(0x2ab)]['get'](_0x5cfd59(0x4a2));if(_0x43eeb4){const _0x5f4fd7=String(_0x43eeb4)['split'](/[,\s]+/)[_0x5cfd59(0x209)](_0x5ea4d8=>_0x5ea4d8[_0x5cfd59(0x34f)]()[_0x5cfd59(0x441)]())[_0x5cfd59(0x4c3)](Boolean);if(_0x5f4fd7['length']){const _0x1f037a=_0x3a4d48[_0x5cfd59(0x4c3)]||{};_0x3a4d48=Object[_0x5cfd59(0x2a5)]({},_0x3a4d48,{'filter':Object['assign']({},_0x1f037a,{'region':_0x5f4fd7})});}}const _0x51e9b4=_0x3a4d48[_0x5cfd59(0x4c3)]&&_0x3a4d48[_0x5cfd59(0x4c3)][_0x5cfd59(0x2d5)]||[];if(_0x51e9b4[_0x5cfd59(0x363)](_0x5cfd59(0x442)))await refreshOfficialV6CIDRs();const _0x2fcaa4=_0x3a4d48[_0x5cfd59(0x3da)]&&_0x3a4d48[_0x5cfd59(0x3da)][_0x5cfd59(0x2f3)]||'';if(_0x2fcaa4===''&&_0x3a4d48['probeAlive']&&(!_0x3a4d48['preferredIPs']||_0x3a4d48[_0x5cfd59(0x3cc)][_0x5cfd59(0x283)]<0x50)){let _0x1f8930=![];try{const _0x2b3936=await kvGetInitPool(_0x21b7b3);if(_0x2b3936&&_0x2b3936[_0x5cfd59(0x283)]){const _0x25b9c7=new Set((_0x3a4d48['preferredIPs']||[])[_0x5cfd59(0x209)](_0x2f7533=>_0x2f7533['ip'])),_0x2fbafc=_0x2b3936[_0x5cfd59(0x4c3)](_0x4e37e3=>_0x4e37e3&&_0x4e37e3['ip']&&!_0x25b9c7['has'](_0x4e37e3['ip']));if(_0x2fbafc['length'])_0x3a4d48[_0x5cfd59(0x3cc)]=[..._0x3a4d48[_0x5cfd59(0x3cc)]||[],..._0x2fbafc];_0x1f8930=!![];}}catch(_0x47fcc2){}if(!_0x1f8930)try{const [_0x573725,_0x22a92a,_0x60f652]=await Promise[_0x5cfd59(0x384)]([fetchBestcfPool()[_0x5cfd59(0x45c)](()=>[]),fetchLatestPreferredIPs(0xc8)[_0x5cfd59(0x45c)](()=>null),Promise[_0x5cfd59(0x1b0)](parseIPList(BUILTIN_PREFERRED_IPS[_0x5cfd59(0x2b6)]('\x0a')))]),_0x3951d9=[],_0x236539=[],_0x5d35f6=new Set((_0x3a4d48['preferredIPs']||[])['map'](_0x395baf=>_0x395baf['ip']));for(const _0x2ee19c of[..._0x3a4d48['preferredIPs']||[],..._0x573725||[],..._0x22a92a||[],..._0x60f652]){if(!_0x2ee19c||!_0x2ee19c['ip']||_0x5d35f6['has'](_0x2ee19c['ip']))continue;_0x5d35f6[_0x5cfd59(0x41a)](_0x2ee19c['ip']);const _0x318976={'ip':_0x2ee19c['ip'],'port':_0x2ee19c[_0x5cfd59(0x21c)]||0x1bb,'name':_0x2ee19c[_0x5cfd59(0x1d1)]||'','relay':!!_0x2ee19c[_0x5cfd59(0x1bd)]};if(_0x318976[_0x5cfd59(0x1bd)]||!isCloudflareIP(_0x318976['ip']))_0x236539[_0x5cfd59(0x4bd)](_0x318976);else _0x3951d9[_0x5cfd59(0x4bd)](_0x318976);}const _0x3855a7=_0x236539[_0x5cfd59(0x1ab)](0x0,0x64),_0xf7afb1=_0x3951d9[_0x5cfd59(0x1ab)](0x0,0x96),[_0x4b9502,_0x5c94e5]=await Promise[_0x5cfd59(0x384)]([probeAll(_0x3855a7,_0x3eb4f3=>testRelayAlive(_0x3eb4f3['ip'],_0x3eb4f3[_0x5cfd59(0x21c)]||0x1bb,0x9c4)),probeAll(_0xf7afb1,_0xf9012d=>testProxyAlive(_0xf9012d['ip'],_0xf9012d[_0x5cfd59(0x21c)]||0x1bb,0x9c4))]),_0xa27c2a=_0x3855a7[_0x5cfd59(0x4c3)]((_0x265773,_0x55e093)=>_0x4b9502[_0x55e093]),_0x3fda7e=_0xf7afb1[_0x5cfd59(0x4c3)]((_0x3f3976,_0x17d2c7)=>_0x5c94e5[_0x17d2c7]),_0x17d1d3=_0x3fda7e[_0x5cfd59(0x1ab)](0x0,0xd2),_0x398a6b=_0xa27c2a[_0x5cfd59(0x1ab)](0x0,0x28);_0x3a4d48['preferredIPs']=[..._0x3a4d48[_0x5cfd59(0x3cc)]||[],..._0x17d1d3,..._0x398a6b][_0x5cfd59(0x1ab)](0x0,0xfa),kvPutInitPool(_0x21b7b3,_0x3a4d48[_0x5cfd59(0x3cc)]);}catch(_0x225b3c){}}const _0x222c68=!/\.workers\.dev$/i[_0x5cfd59(0x495)](new URL(_0x12fea2)[_0x5cfd59(0x4a7)]),_0x5b45b2=Object['assign']({},_0x3a4d48,{'host':_0x3a4d48[_0x5cfd59(0x3bc)]||new URL(_0x12fea2)[_0x5cfd59(0x4a7)]});_0x222c68&&(_0x5b45b2['tlsOnly']=!![]);const _0xaf284e=_0x3a4d48[_0x5cfd59(0x3da)]&&_0x3a4d48[_0x5cfd59(0x3da)]['subMode']||'';let _0x37e0be=[];const _0x14cf80=_0x3a4d48[_0x5cfd59(0x4c3)]&&_0x3a4d48['filter'][_0x5cfd59(0x2d5)]||[],_0x40580b=_0x14cf80[_0x5cfd59(0x363)](_0x5cfd59(0x442)),_0x90aac0=_0x14cf80[_0x5cfd59(0x283)]===0x1&&_0x14cf80[0x0]==='IPv6',_0x1ea36d=_0x90aac0?OFFICIAL_V6_CIDRS:_0x40580b?[...REACHABLE_CIDRS,...OFFICIAL_V6_CIDRS]:REACHABLE_CIDRS,_0xdef9f0=parseIPList(BUILTIN_PREFERRED_IPS['join']('\x0a'))[_0x5cfd59(0x209)](_0x333e9f=>({'ip':_0x333e9f['ip'],'port':_0x333e9f['port']||0x1bb,'name':_0x333e9f[_0x5cfd59(0x1d1)]||_0x5cfd59(0x1dd)+String(BUILTIN_PREFERRED_IPS[_0x5cfd59(0x3df)](_0x333e9f)+0x1)['padStart'](0x2,'0')})),_0x44b4f2=_0x3a4d48[_0x5cfd59(0x4c3)]||{},_0x372d82=_0x44b4f2[_0x5cfd59(0x4a2)],_0x4a1529=Array[_0x5cfd59(0x266)](_0x372d82)?_0x372d82[_0x5cfd59(0x283)]===0x0||_0x372d82['includes'](_0x5cfd59(0x384)):!_0x372d82||_0x372d82==='all';_0x5b45b2[_0x5cfd59(0x311)]=[];if(!_0x4a1529&&!_0x90aac0)try{const _0x5650b1=regionPoolsFor(_0x372d82);if(_0x5650b1)_0x5b45b2[_0x5cfd59(0x311)]=await resolvePreferredDomains(_0x5650b1,0x64,0x258,!![],!![],![]);}catch(_0x26aa9d){_0x5b45b2[_0x5cfd59(0x311)]=[];}if(_0xaf284e===_0x5cfd59(0x244)){const _0x53bf1d=!!(_0x3a4d48[_0x5cfd59(0x3da)]&&_0x3a4d48[_0x5cfd59(0x3da)][_0x5cfd59(0x30a)]),_0x1c0ad2=!_0x53bf1d;_0x37e0be=await resolvePreferredDomains(_0x3a4d48[_0x5cfd59(0x331)]||'',_0x1c0ad2?0xc8:0x28,_0x1c0ad2?0x7d0:0x12c,_0x53bf1d,_0x53bf1d,_0x40580b);if(_0x53bf1d){const _0x270938=await resolvePreferredDomains(DEFAULT_PREFERRED_DOMAINS,0x28,0xf0,![],!![],_0x40580b),_0x5cea2a=new Set(_0x270938[_0x5cfd59(0x209)](_0x1d65c9=>_0x1d65c9['ip']));_0x37e0be=[..._0x270938,..._0x37e0be[_0x5cfd59(0x4c3)](_0x3ce4a3=>!_0x5cea2a['has'](_0x3ce4a3['ip']))],_0x5b45b2[_0x5cfd59(0x3cc)]=[..._0x5b45b2[_0x5cfd59(0x3cc)]||[],..._0xdef9f0];if(!_0x5b45b2['optimizer'])_0x5b45b2['optimizer']={};_0x5b45b2[_0x5cfd59(0x3da)][_0x5cfd59(0x2dd)]=Math[_0x5cfd59(0x344)](parseInt(_0x5b45b2['optimizer'][_0x5cfd59(0x2dd)])||0x0,0x320);}}else{if(_0xaf284e===''){const _0x42629f=_0x3a4d48[_0x5cfd59(0x301)]||{},_0x1f9de6=_0x42629f['native']===!![],_0x8dfdd4=_0x42629f[_0x5cfd59(0x387)]!==![],_0x8d334c=_0x42629f[_0x5cfd59(0x3e2)]!==![],_0x2d0890=_0x42629f[_0x5cfd59(0x1f4)]===!![];_0x1f9de6&&!_0x90aac0&&(_0x5b45b2[_0x5cfd59(0x331)]=(_0x5b45b2['preferredDomains']?_0x5b45b2[_0x5cfd59(0x331)]+'\x0a':'')+_0x5b45b2['host']+'#原生地址');if(!_0x2d0890)_0x5b45b2['preferredIPs']=[];const _0x4d25e5=_0x3a4d48[_0x5cfd59(0x4c3)]||{},_0x46384c=_0x4d25e5['region'],_0x4366bb=Array[_0x5cfd59(0x266)](_0x46384c)?_0x46384c[_0x5cfd59(0x283)]===0x0||_0x46384c['includes'](_0x5cfd59(0x384)):!_0x46384c||_0x46384c===_0x5cfd59(0x384);if(_0x4366bb){_0x37e0be=[];if(_0x8dfdd4&&!_0x90aac0){const _0x346778=await filterAliveDomains(DEFAULT_PREFERRED_DOMAINS);if(_0x346778)_0x5b45b2[_0x5cfd59(0x331)]=(_0x5b45b2['preferredDomains']?_0x5b45b2[_0x5cfd59(0x331)]+'\x0a':'')+_0x346778;}if(_0x8d334c&&!_0x90aac0){const _0x325574=await fetchLatestPreferredIPs(0x96);if(_0x325574&&_0x325574['length'])_0x5b45b2['preferredIPs']=[..._0x5b45b2[_0x5cfd59(0x3cc)]||[],..._0x325574];try{const _0x9c25a9=await resolvePreferredDomains(DEFAULT_REGION_POOLS,0x64,0x258,!![],!![],![]);if(_0x9c25a9&&_0x9c25a9[_0x5cfd59(0x283)])_0x5b45b2[_0x5cfd59(0x3cc)]=[..._0x5b45b2[_0x5cfd59(0x3cc)]||[],..._0x9c25a9];}catch(_0x472324){}}if(_0x40580b&&_0x8dfdd4)try{const _0x280c3f=DEFAULT_PREFERRED_DOMAINS+(_0x90aac0?'\x0a'+BUILTIN_OFFICIAL_DOMAINS['join']('\x0a'):''),_0x24f5df=await resolvePreferredDomains(_0x280c3f,0x28,_0x90aac0?0x320:0xf0,![],!![],!![]);if(_0x24f5df&&_0x24f5df['length'])_0x5b45b2[_0x5cfd59(0x3cc)]=[..._0x5b45b2[_0x5cfd59(0x3cc)]||[],..._0x24f5df];}catch(_0x18c637){}}else{_0x8dfdd4&&(_0x37e0be=await resolvePreferredDomains(DEFAULT_PREFERRED_DOMAINS,0x64,0x12c,![],!![],_0x40580b));if((_0x5b45b2['_regionPool']||[])[_0x5cfd59(0x283)])_0x5b45b2[_0x5cfd59(0x3cc)]=[..._0x5b45b2[_0x5cfd59(0x3cc)]||[],..._0x5b45b2['_regionPool']];}if(_0x8d334c){if(_0x90aac0){const _0x374495=_0xdef9f0['map'](_0x412fbd=>({'ip':ipv4ToEmbeddedV6(_0x412fbd['ip']),'port':_0x412fbd['port']||0x1bb,'name':_0x412fbd[_0x5cfd59(0x1d1)]}))[_0x5cfd59(0x4c3)](_0x15c089=>_0x15c089['ip']);_0x5b45b2['preferredIPs']=[..._0x5b45b2[_0x5cfd59(0x3cc)]||[],..._0x374495];}else{if(_0x40580b){const _0x1a0fb7=_0xdef9f0[_0x5cfd59(0x209)](_0x1d5f00=>({'ip':ipv4ToEmbeddedV6(_0x1d5f00['ip']),'port':_0x1d5f00[_0x5cfd59(0x21c)]||0x1bb,'name':_0x1d5f00[_0x5cfd59(0x1d1)]}))[_0x5cfd59(0x4c3)](_0x435e97=>_0x435e97['ip']);_0x5b45b2[_0x5cfd59(0x3cc)]=[..._0x5b45b2[_0x5cfd59(0x3cc)]||[],..._0xdef9f0,..._0x1a0fb7];}else _0x5b45b2['preferredIPs']=[..._0x5b45b2['preferredIPs']||[],..._0xdef9f0];}}if(!_0x1f9de6&&!_0x8dfdd4&&!_0x8d334c&&!_0x2d0890){if(_0x90aac0){const _0x1f66cb=_0xdef9f0[_0x5cfd59(0x209)](_0x21ee1a=>({'ip':ipv4ToEmbeddedV6(_0x21ee1a['ip']),'port':_0x21ee1a[_0x5cfd59(0x21c)]||0x1bb,'name':_0x21ee1a[_0x5cfd59(0x1d1)]}))[_0x5cfd59(0x4c3)](_0x5e126e=>_0x5e126e['ip']);_0x5b45b2[_0x5cfd59(0x3cc)]=[..._0x5b45b2[_0x5cfd59(0x3cc)]||[],..._0x1f66cb];}else _0x5b45b2[_0x5cfd59(0x3cc)]=[..._0x5b45b2[_0x5cfd59(0x3cc)]||[],..._0xdef9f0];}if(_0x90aac0&&_0x5b45b2[_0x5cfd59(0x3cc)])_0x5b45b2[_0x5cfd59(0x3cc)]=_0x5b45b2[_0x5cfd59(0x3cc)][_0x5cfd59(0x4c3)](_0x5aa091=>String(_0x5aa091['ip'])[_0x5cfd59(0x3df)](':')>=0x0);if(!_0x5b45b2['optimizer'])_0x5b45b2[_0x5cfd59(0x3da)]={};_0x5b45b2[_0x5cfd59(0x3da)][_0x5cfd59(0x2dd)]=Math[_0x5cfd59(0x344)](parseInt(_0x5b45b2[_0x5cfd59(0x3da)][_0x5cfd59(0x2dd)])||0x0,_0x90aac0?0x0:0x3e8);if(_0x3a4d48[_0x5cfd59(0x349)]&&_0x5b45b2[_0x5cfd59(0x3cc)]&&_0x5b45b2[_0x5cfd59(0x3cc)]['length']){const _0x4c4ae6=BUILTIN_STABLE_IPS[_0x5cfd59(0x209)]((_0x437412,_0x2b59e3)=>({'ip':_0x437412,'port':0x1bb,'name':_0x5cfd59(0x3be)+String(_0x2b59e3+0x1)[_0x5cfd59(0x21f)](0x2,'0')})),_0x5de83b=new Set(_0x4c4ae6[_0x5cfd59(0x209)](_0x3690c3=>_0x3690c3['ip']));_0x5b45b2[_0x5cfd59(0x3cc)]=[..._0x4c4ae6,..._0x5b45b2[_0x5cfd59(0x3cc)]['filter'](_0x1ff72c=>!_0x5de83b[_0x5cfd59(0x32d)](_0x1ff72c['ip']))];}}}const _0x1bdeb0=_0x3a4d48['_skipIssued']&&_0x3a4d48[_0x5cfd59(0x3f3)][_0x5cfd59(0x3b2)]?_0x3a4d48[_0x5cfd59(0x3f3)]:null;if(_0x37e0be[_0x5cfd59(0x283)]){let _0x142d11=_0x37e0be;if(_0x1bdeb0){const _0x2ea2da=_0x37e0be[_0x5cfd59(0x4c3)](_0x23f389=>!_0x1bdeb0[_0x5cfd59(0x32d)](_0x23f389['ip'])),_0x2e26b5=_0x37e0be['filter'](_0x149024=>_0x1bdeb0[_0x5cfd59(0x32d)](_0x149024['ip']));_0x142d11=[..._0x2ea2da,..._0x2e26b5];}const _0x15eefb=(_0x5b45b2[_0x5cfd59(0x3cc)]||[])[_0x5cfd59(0x283)];_0x142d11=_0x142d11[_0x5cfd59(0x209)]((_0x27aef0,_0x1787d9)=>/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}-\d+$/[_0x5cfd59(0x495)](_0x27aef0['name']||'')?Object[_0x5cfd59(0x2a5)]({},_0x27aef0,{'name':_0x5cfd59(0x1dd)+String(_0x15eefb+_0x1787d9+0x1)[_0x5cfd59(0x21f)](0x2,'0')}):_0x27aef0),_0x5b45b2[_0x5cfd59(0x3cc)]=[..._0x5b45b2['preferredIPs']||[],..._0x142d11];}if(_0x90aac0&&_0x5b45b2[_0x5cfd59(0x3cc)])_0x5b45b2['preferredIPs']=_0x5b45b2['preferredIPs'][_0x5cfd59(0x4c3)](_0x5a2eea=>String(_0x5a2eea['ip'])['indexOf'](':')>=0x0);_0x3b5e1a=(_0x3b5e1a||'')[_0x5cfd59(0x4d2)]();const _0x29c893=(_0x5f1c80||'')[_0x5cfd59(0x4d2)](),_0x56c3cd=['clash','singbox',_0x5cfd59(0x469),_0x5cfd59(0x2f0),'surfboard',_0x5cfd59(0x4c0),'quanx',_0x5cfd59(0x409)][_0x5cfd59(0x363)](_0x29c893)||/clash|singbox|sing-box|surge|surfboard|loon|quantumult/[_0x5cfd59(0x495)](_0x3b5e1a);let _0x2b23d2=_0x56c3cd?0x12c:0x320;if(_0xaf284e===_0x5cfd59(0x244)&&_0x3a4d48[_0x5cfd59(0x3da)]&&_0x3a4d48[_0x5cfd59(0x3da)][_0x5cfd59(0x30a)])_0x2b23d2=_0x56c3cd?Math[_0x5cfd59(0x344)](_0x2b23d2,0x12c):Math[_0x5cfd59(0x344)](_0x2b23d2,0x320);if(_0xaf284e===_0x5cfd59(0x244)&&!(_0x3a4d48[_0x5cfd59(0x3da)]&&_0x3a4d48['optimizer'][_0x5cfd59(0x30a)]))_0x2b23d2=_0x56c3cd?Math['max'](_0x2b23d2,0x320):Math[_0x5cfd59(0x344)](_0x2b23d2,0x7d0);if(_0x3a4d48['polling']===![])_0x2b23d2=0x2710;if(_0x3a4d48[_0x5cfd59(0x30c)]){const _0x2f9304=parseInt(_0x3a4d48[_0x5cfd59(0x272)])||0x0;if(_0x2f9304>0x0)_0x2b23d2=Math[_0x5cfd59(0x281)](_0x2f9304,0x3e8);}if(_0x3a4d48[_0x5cfd59(0x351)])_0x2b23d2=Math['min'](_0x2b23d2,_0x3a4d48['_quotaCap']);const _0x146d31=_0xaf284e===_0x5cfd59(0x426)?Object[_0x5cfd59(0x2a5)]({},_0x3a4d48[_0x5cfd59(0x4c3)],{'region':_0x5cfd59(0x384)}):_0x3a4d48['filter'];let _0x13cc73=filterNodes(await buildNodes(_0x5b45b2,_0x2b23d2,_0x1bdeb0),_0x146d31);const _0x18a9b3=_0xaf284e==='custom'&&!(_0x3a4d48[_0x5cfd59(0x3da)]&&_0x3a4d48[_0x5cfd59(0x3da)]['subIncludeDefault']);if(!_0x18a9b3&&!_0x90aac0)appendFallbackNodes(_0x13cc73,_0x5b45b2,_0x2b23d2,_0x2cd69f);if(_0x3a4d48[_0x5cfd59(0x349)]&&!_0x90aac0&&!(_0x18a9b3&&_0x13cc73[_0x5cfd59(0x283)]>0x0))appendStableNodes(_0x13cc73,_0x5b45b2,_0x2b23d2);if(_0x3a4d48['nodeLimit']&&_0xaf284e&&!_0x18a9b3&&_0x13cc73['length']<_0x2b23d2){const _0x383107=_0x2b23d2-_0x13cc73[_0x5cfd59(0x283)],_0x4727d8=new Set();for(const _0x43caa7 of _0x13cc73){try{_0x4727d8[_0x5cfd59(0x41a)](parseNodeServer(_0x43caa7)[_0x5cfd59(0x3bc)]);}catch(_0x4d8298){}}const _0x5447ce=(_0x4a644e,_0x1104a3,_0x26945a)=>{const _0x2f1771=_0x5cfd59;if(_0x13cc73['length']>=_0x2b23d2)return;if(_0x4727d8[_0x2f1771(0x32d)](_0x4a644e))return;_0x4727d8['add'](_0x4a644e),_0x13cc73['push'](vlessNode(_0x5b45b2,_0x4a644e,_0x1104a3||0x1bb,_0x26945a));};let _0x4c1f08=0x0;try{const _0x3e135d=await fetchBestcfPool(),_0x45ab94=_0x1bdeb0?_0x3e135d['filter'](_0x36ed49=>!_0x1bdeb0[_0x5cfd59(0x32d)](_0x36ed49['ip'])):_0x3e135d,_0x25473e=_0x45ab94[_0x5cfd59(0x283)]>=_0x383107?_0x45ab94:_0x3e135d;for(const _0x29cd1f of _0x25473e){_0x5447ce(_0x29cd1f['ip'],_0x29cd1f[_0x5cfd59(0x21c)],_0x29cd1f['name']||_0x5cfd59(0x1dd)+String(_0x29cd1f[_0x5cfd59(0x21c)]));if(_0x13cc73[_0x5cfd59(0x283)]>=_0x2b23d2)break;}}catch(_0x212c8f){}if(_0x13cc73[_0x5cfd59(0x283)]<_0x2b23d2){const _0x2d1620=_0x2b23d2-_0x13cc73[_0x5cfd59(0x283)],_0x2ebb14=OFFICIAL_V6_CIDRS,_0x4f881b=_0x90aac0?_0x2ebb14:_0x40580b?[...REACHABLE_CIDRS,..._0x2ebb14]:REACHABLE_CIDRS,_0x7b27a4=randomIPsFromCidrs(_0x4f881b,_0x2d1620*0x3),_0x395fc0=_0x1bdeb0?_0x7b27a4['filter'](_0x1a3d1b=>!_0x1bdeb0[_0x5cfd59(0x32d)](_0x1a3d1b)):_0x7b27a4,_0x1f3a68=_0x395fc0[_0x5cfd59(0x283)]>=_0x2d1620?_0x395fc0:_0x7b27a4;for(const _0x3c6844 of _0x1f3a68){if(_0x13cc73[_0x5cfd59(0x283)]>=_0x2b23d2)break;_0x4c1f08++,_0x5447ce(_0x3c6844,0x1bb,_0x5cfd59(0x1dd)+String(_0x4c1f08)['padStart'](0x3,'0'));}}}if(_0x13cc73['length']>_0x2b23d2)_0x13cc73[_0x5cfd59(0x283)]=_0x2b23d2;if(_0x3a4d48['loadBalance']!==![]&&_0x13cc73[_0x5cfd59(0x283)]>0x1&&_0xaf284e!==_0x5cfd59(0x426))for(let _0x5b7484=_0x13cc73[_0x5cfd59(0x283)]-0x1;_0x5b7484>0x0;_0x5b7484--){const _0x28ad45=Math['floor'](Math['random']()*(_0x5b7484+0x1)),_0x35d57c=_0x13cc73[_0x5b7484];_0x13cc73[_0x5b7484]=_0x13cc73[_0x28ad45],_0x13cc73[_0x28ad45]=_0x35d57c;}const _0x1cd1d2=[],_0x39d65f=new Set();for(const _0x589e98 of _0x13cc73){try{const {host:_0x521882}=parseNodeServer(_0x589e98);isValidIp(_0x521882)&&!_0x39d65f[_0x5cfd59(0x32d)](_0x521882)&&(_0x39d65f[_0x5cfd59(0x41a)](_0x521882),_0x1cd1d2['push'](_0x521882));}catch(_0x54fdb8){}}let _0x40263b,_0x54486f;if(_0x29c893===_0x5cfd59(0x326))_0x40263b=_0x5cfd59(0x212),_0x54486f=generateClash(_0x5b45b2,_0x13cc73);else{if(_0x29c893==='singbox'||_0x29c893==='sing-box')_0x40263b=_0x5cfd59(0x474),_0x54486f=generateSingbox(_0x5b45b2,_0x13cc73);else{if(_0x29c893===_0x5cfd59(0x2f0))_0x40263b=_0x5cfd59(0x3d3),_0x54486f=generateSurge(_0x5b45b2,_0x13cc73);else{if(_0x29c893===_0x5cfd59(0x47e))_0x40263b=_0x5cfd59(0x3d3),_0x54486f=generateSurfboard(_0x5b45b2,_0x13cc73);else{if(_0x29c893==='loon')_0x40263b=_0x5cfd59(0x3d3),_0x54486f=generateLoon(_0x5b45b2,_0x13cc73);else{if(_0x29c893===_0x5cfd59(0x314)||_0x29c893===_0x5cfd59(0x409))_0x40263b=_0x5cfd59(0x3d3),_0x54486f=generateQuanX(_0x5b45b2,_0x13cc73);else{if(_0x29c893===_0x5cfd59(0x1bc)||_0x29c893===_0x5cfd59(0x1e5))_0x40263b=_0x5cfd59(0x3d3),_0x54486f=_0x13cc73[_0x5cfd59(0x2b6)]('\x0a');else{if(_0x29c893===_0x5cfd59(0x29c)||_0x29c893==='v2rayn'||_0x29c893===_0x5cfd59(0x3d1)||_0x29c893===_0x5cfd59(0x24d)||_0x29c893===_0x5cfd59(0x36b))_0x40263b=_0x5cfd59(0x3d3),_0x54486f=_0x13cc73['join']('\x0a');else{if(_0x3b5e1a['includes'](_0x5cfd59(0x326))||_0x3b5e1a['includes'](_0x5cfd59(0x36b)))_0x40263b=_0x5cfd59(0x212),_0x54486f=generateClash(_0x5b45b2,_0x13cc73);else{if(_0x3b5e1a[_0x5cfd59(0x363)](_0x5cfd59(0x469)))_0x40263b=_0x5cfd59(0x474),_0x54486f=generateSingbox(_0x5b45b2,_0x13cc73);else{if(_0x3b5e1a[_0x5cfd59(0x363)](_0x5cfd59(0x2f0)))_0x40263b='text/plain',_0x54486f=generateSurge(_0x5b45b2,_0x13cc73);else{if(_0x3b5e1a[_0x5cfd59(0x363)](_0x5cfd59(0x47e)))_0x40263b=_0x5cfd59(0x3d3),_0x54486f=generateSurfboard(_0x5b45b2,_0x13cc73);else{if(_0x3b5e1a['includes']('loon'))_0x40263b='text/plain',_0x54486f=generateLoon(_0x5b45b2,_0x13cc73);else _0x3b5e1a[_0x5cfd59(0x363)](_0x5cfd59(0x1af))?(_0x40263b=_0x5cfd59(0x3d3),_0x54486f=generateQuanX(_0x5b45b2,_0x13cc73)):(_0x40263b='text/plain',_0x54486f=_0x13cc73[_0x5cfd59(0x2b6)]('\x0a'));}}}}}}}}}}}}return{'type':_0x40263b,'body':_0x54486f,'issued':_0x1cd1d2};}const PANEL_HTML=String[_0x193e21(0x1e5)]`
<!DOCTYPE html>
<html lang="zh-CN" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CFNext · Cloudflare 隧道面板</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E">
<script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js"></script>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#0b0f14;--bg2:#0f141b;--card:#131a23;--card2:#182130;--border:#243041;
  --text:#e8eef6;--dim:#8fa3ba;--faint:#5c6f86;
  --accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);
  --ok:#34c98e;--ok-dim:rgba(52,201,142,.13);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13);--warn:#ffb454;
  --sb-bg:#0d131b;--sb-text:#9fb0c5;--sb-dim:#5c6f86;--sb-border:#1c2737;
  --sb-active-bg:rgba(246,130,31,.13);--sb-active-text:#ffa14d;--sb-active-bar:#f6821f;
  --shadow:0 10px 30px rgba(0,0,0,.28);
}
[data-theme="light"]{
  --bg:#f3f5f9;--bg2:#e9edf3;--card:#ffffff;--card2:#f6f8fb;--border:#dde4ee;
  --text:#1b2634;--dim:#5d6b7d;--faint:#93a1b3;
  --accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);
  --ok:#1f9d6a;--ok-dim:rgba(31,157,106,.12);--err:#d94848;--err-dim:rgba(217,72,72,.10);--warn:#c07c1e;
  --sb-bg:#ffffff;--sb-text:#5d6b7d;--sb-dim:#a2aec0;--sb-border:#e7ebf2;
  --sb-active-bg:rgba(232,114,14,.09);--sb-active-text:#c96408;--sb-active-bar:#e8720e;
  --shadow:0 10px 28px rgba(30,45,70,.10);
}
html,body{height:100%}
body{background:var(--bg);color:var(--text);font-family:"PingFang SC","Microsoft YaHei","Segoe UI",system-ui,sans-serif;font-size:14px;line-height:1.55}
.app{display:flex;min-height:100vh}
a{color:var(--accent);text-decoration:none}
a:hover{text-decoration:underline}

/* ===== 侧边栏 ===== */
.sidebar{width:236px;flex:0 0 236px;background:var(--sb-bg);border-right:1px solid var(--sb-border);display:flex;flex-direction:column;position:sticky;top:0;height:100vh;z-index:50;transition:background .25s,border-color .25s}
.brand{display:flex;align-items:center;gap:10px;padding:18px 18px 14px}
.mark{width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;flex:0 0 34px;box-shadow:0 4px 12px var(--accent-dim)}
.mark svg{width:18px;height:18px}
.mark path{stroke:#0d131b}
.brand .bt{display:flex;flex-direction:column;line-height:1.2}
.brand .bt b{font-size:15px;letter-spacing:.3px;color:var(--text)}
.brand .bt span{font-size:11px;color:var(--sb-dim)}
.nav{flex:1;padding:6px 10px 12px;overflow-y:auto}
.nav-item{display:flex;align-items:center;gap:10px;padding:9px 12px;margin:2px 0;border-radius:8px;color:var(--sb-text);cursor:pointer;border:none;background:transparent;width:100%;text-align:left;font-size:13.5px;position:relative;transition:background .15s,color .15s}
.nav-item svg{width:17px;height:17px;flex:0 0 17px;stroke:currentColor}
.nav-item:hover{background:var(--sb-active-bg);color:var(--sb-active-text)}
.nav-item.on{background:var(--sb-active-bg);color:var(--sb-active-text);font-weight:600}
.nav-item.on::before{content:"";position:absolute;left:-10px;top:8px;bottom:8px;width:3px;border-radius:0 3px 3px 0;background:var(--sb-active-bar)}
.side-foot{padding:12px 18px;border-top:1px solid var(--sb-border);display:flex;align-items:center;justify-content:space-between;font-size:11.5px;color:var(--sb-dim)}
.ver-chip{font-family:ui-monospace,Consolas,monospace;background:var(--accent-dim);color:var(--sb-active-text);padding:2px 8px;border-radius:6px;font-size:11px;border:1px solid transparent;cursor:pointer;transition:border-color .15s,color .15s,background .15s}
.ver-chip:hover{color:var(--accent);border-color:var(--accent)}
.ver-chip.has-update{color:var(--accent);background:var(--accent-dim);border-color:var(--accent)}
.ver-chip.checking{opacity:.7;pointer-events:none}

/* ===== 主区 ===== */
.main{flex:1;min-width:0;display:flex;flex-direction:column}
.topbar{display:flex;align-items:center;gap:14px;padding:14px 26px;border-bottom:1px solid var(--border);background:var(--bg);position:sticky;top:0;z-index:40}
.topbar h1{font-size:17px;font-weight:600;flex:1;min-width:0}
.pill{display:inline-flex;align-items:center;gap:6px;font-size:12px;padding:4px 10px;border-radius:20px;background:var(--ok-dim);color:var(--ok);white-space:nowrap}
.pill.off{background:var(--err-dim);color:var(--err)}
.pill .dot{width:6px;height:6px;border-radius:50%;background:currentColor}
.icon-btn{width:34px;height:34px;border-radius:8px;border:1px solid var(--border);background:var(--card);color:var(--text);cursor:pointer;display:flex;align-items:center;justify-content:center;flex:0 0 34px}
.icon-btn:hover{border-color:var(--accent);color:var(--accent)}
.icon-btn svg{width:16px;height:16px;stroke:currentColor}
.hamb{display:none}
.wdwarn{display:none;background:rgba(59,130,246,.10);border-bottom:1px solid rgba(59,130,246,.35);color:var(--accent2);padding:9px 26px;font-size:12.5px;line-height:1.6;text-align:center}
[data-theme="light"] .wdwarn{color:var(--accent);background:rgba(29,95,168,.06);border-bottom-color:rgba(29,95,168,.35)}

.content{padding:22px 26px 96px;max-width:1180px;width:100%;margin:0 auto}
.view{display:none}
.view.on{display:block;animation:fade .18s ease}
@keyframes fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
.view-head{margin-bottom:16px}
.view-head h2{font-size:20px;font-weight:700}
.view-head p{color:var(--dim);font-size:13px;margin-top:4px}

/* ===== 卡片 ===== */
.grid2{display:grid;grid-template-columns:repeat(auto-fit,minmax(330px,1fr));gap:16px}
.grid3{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px}
.filter-region{display:flex;align-items:center;gap:14px;padding:2px 0 14px;border-bottom:1px solid var(--border);margin-bottom:14px;flex-wrap:wrap}
.filter-region-label{font-size:13px;font-weight:600;white-space:nowrap}
.filter-row{display:flex;flex-wrap:wrap}
.filter-group{flex:0 1 auto;min-width:180px;padding:0 14px;border-left:1px solid var(--border)}
.filter-group:first-child{border-left:none;padding-left:0}
.filter-group-title{font-size:12px;font-weight:600;color:var(--dim);margin-bottom:9px;letter-spacing:.3px}
.pills{display:flex;flex-wrap:wrap;gap:8px}
.pills.nowrap{flex-wrap:nowrap;white-space:nowrap}
.pills.nowrap .spill span{padding:5px 10px;font-size:12px}
.spill input{position:absolute;opacity:0;pointer-events:none}
.spill span{display:inline-block;padding:5px 14px;border:1px solid var(--border);border-radius:999px;font-size:12.5px;color:var(--dim);cursor:pointer;background:var(--card);transition:border-color .15s,color .15s,background .15s;user-select:none;line-height:1.5}
.spill:hover span{border-color:var(--accent);color:var(--accent)}
.spill input:checked + span{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600;border-radius:999px}.card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:18px;margin-bottom:16px}
.card h3{font-size:14px;font-weight:600;margin-bottom:14px;display:flex;align-items:center;gap:8px}
.card h3 .tick{width:3px;height:14px;border-radius:2px;background:var(--accent)}
.card .sub{font-size:12px;color:var(--dim);font-weight:400;margin-left:auto}
.kv{display:flex;justify-content:space-between;gap:12px;padding:7px 0;border-bottom:1px dashed var(--border);font-size:13px}
.kv:last-child{border-bottom:none}
.kv .k{color:var(--dim);white-space:nowrap}
.kv .v{text-align:right;word-break:break-all;font-family:ui-monospace,Consolas,monospace;font-size:12.5px}
.kv .v.ok{color:var(--ok)}.kv .v.bad{color:var(--err)}.kv .v.warn{color:var(--warn)}

/* ===== 表单 ===== */
.field{margin-bottom:12px}
.field>label{display:block;font-size:12.5px;color:var(--dim);margin-bottom:6px;font-weight:500}
input[type=text],input[type=password],input[type=number],select,textarea{
  width:100%;background:var(--card2);border:1px solid var(--border);color:var(--text);
  border-radius:8px;padding:8px 11px;font-size:13.5px;outline:none;transition:border-color .15s,box-shadow .15s;
  font-family:inherit;
}
input:focus,select:focus,textarea:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-dim)}
textarea{resize:vertical;line-height:1.5;font-family:ui-monospace,Consolas,monospace;font-size:12.5px}
select{cursor:pointer;-webkit-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%238fa3ba' stroke-width='1.6' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;padding-right:30px}
[data-theme="light"] select{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%235d6b7d' stroke-width='1.6' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")}
input[type=checkbox]{accent-color:var(--accent);width:15px;height:15px;cursor:pointer}
.hint{font-size:12px;color:var(--dim);margin-top:6px;line-height:1.6}
.inrow{display:flex;gap:8px;align-items:flex-start}
.inrow>div{flex:1}
.inrow .btn{margin-top:1px;white-space:nowrap}
.checkline{display:flex;align-items:center;gap:20px;padding:5px 0;font-size:13px;cursor:pointer}
.checkline input{margin:0;flex:0 0 auto;vertical-align:middle}
.checkline span{line-height:1.5}
.proto-row{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px dashed var(--border);font-size:13.5px}
.proto-row:last-child{border-bottom:none}

/* 开关 */
.switch{position:relative;display:inline-block;width:40px;height:22px;flex:0 0 40px}
.switch input{opacity:0;width:0;height:0}
.sl{position:absolute;inset:0;background:var(--border);border-radius:22px;cursor:pointer;transition:background .18s}
.sl::before{content:"";position:absolute;width:16px;height:16px;left:3px;top:3px;background:#fff;border-radius:50%;transition:transform .18s}
.switch input:checked+.sl{background:var(--accent)}
.switch input:checked+.sl::before{transform:translateX(18px)}

/* 按钮 */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--border);background:var(--card2);color:var(--text);border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer;transition:border-color .15s,background .15s,transform .05s;font-family:inherit;white-space:nowrap}
.btn:hover{border-color:var(--accent);color:var(--accent)}
.btn:active{transform:translateY(1px)}
.btn:disabled{opacity:.55;cursor:not-allowed}
.btn.primary{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;color:#201308;font-weight:600}
.btn.primary:hover{filter:brightness(1.06);color:#201308}
.btn.danger{background:var(--err-dim);border-color:transparent;color:var(--err)}
.btn.danger:hover{border-color:var(--err)}
.btn.sm{padding:4px 10px;font-size:12px;border-radius:6px}
.btn .dirty-dot{display:none;width:6px;height:6px;border-radius:50%;background:var(--warn)}
.btn.dirty .dirty-dot{display:inline-block}
.row{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.row .grow{flex:1;min-width:140px}

/* 表格 */
.tbl-wrap{overflow-x:auto}
table{width:100%;border-collapse:collapse;table-layout:fixed}
th,td{text-align:left;padding:9px 10px;font-size:13px;border-bottom:1px solid var(--border);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
th{color:var(--dim);font-weight:500;font-size:12px;background:var(--card2)}
td .ip{font-family:ui-monospace,Consolas,monospace;font-size:12.5px}
.badge{display:inline-block;padding:2px 8px;border-radius:10px;font-size:11.5px}
.badge.g{background:var(--ok-dim);color:var(--ok)}
.badge.r{background:var(--err-dim);color:var(--err)}
.mono{font-family:ui-monospace,Consolas,monospace;font-size:12.5px}

/* 消息与提示 */
.msg{display:none;margin-top:12px;padding:9px 12px;border-radius:8px;font-size:12.5px;line-height:1.6}
.msg.show{display:block}
.msg.ok{background:var(--ok-dim);color:var(--ok)}
.msg.err{background:var(--err-dim);color:var(--err)}
.msg.info{background:var(--accent-dim);color:var(--accent2)}
[data-theme="light"] .msg.info{color:#c96408}
pre.code{background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:12px;font-size:11.5px;line-height:1.55;font-family:ui-monospace,Consolas,monospace;overflow:auto;max-height:260px;white-space:pre-wrap;word-break:break-all;color:var(--dim)}

/* 悬浮操作栏 */
.fbar{position:fixed;right:22px;bottom:22px;display:flex;gap:10px;z-index:60;align-items:center}
.fbar .btn{box-shadow:var(--shadow)}
.saved-at{font-size:11.5px;color:var(--faint);background:var(--card);border:1px solid var(--border);border-radius:8px;padding:5px 10px;box-shadow:var(--shadow);white-space:nowrap}
.toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(80px);background:var(--card);border:1px solid var(--border);color:var(--text);padding:10px 20px;border-radius:10px;font-size:13px;opacity:0;transition:all .25s;z-index:100;box-shadow:var(--shadow);pointer-events:none;max-width:86vw}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.toast.ok{border-color:var(--ok);color:var(--ok)}
.toast.err{border-color:var(--err);color:var(--err)}
.toast.warn{border-color:var(--warn);color:var(--warn)}

/* 分区 */
.sec-title{font-size:12px;color:var(--faint);letter-spacing:1px;margin:20px 0 10px;font-weight:600}
.danger-zone{border:1px solid var(--err);border-radius:12px;padding:16px;background:var(--err-dim)}
.qrbox{display:flex;justify-content:center;padding:12px 0 4px}
.qrbox img{width:168px;height:168px;image-rendering:pixelated;border-radius:8px}
.note-box{background:var(--card2);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:8px;padding:12px 14px;font-size:12.5px;color:var(--dim);line-height:1.7;margin-bottom:12px}
.steps{list-style:none;counter-reset:st}
.steps li{counter-increment:st;position:relative;padding:0 0 14px 34px;font-size:13px;color:var(--dim)}
.steps li::before{content:counter(st);position:absolute;left:0;top:0;width:22px;height:22px;border-radius:50%;background:var(--accent-dim);color:var(--accent2);display:flex;align-items:center;justify-content:center;font-size:11.5px;font-weight:700}
[data-theme="light"] .steps li::before{color:#c96408}
.steps li b{color:var(--text)}

/* ===== 响应式 ===== */
@media (min-width:1100px){
  /* 右侧避让右下角浮动保存栏（尚未保存/重置/保存全部），避免遮挡筛选勾选项 */
  .filter-grid{padding-right:200px}
}
@media (max-width:960px){
  .sidebar{position:fixed;left:0;top:0;transform:translateX(-100%);transition:transform .22s ease;box-shadow:var(--shadow)}
  .sidebar.open{transform:translateX(0)}
  .hamb{display:flex}
  .content{padding:16px 16px 96px}
  .topbar{padding:12px 16px}
  .grid2,.grid3{grid-template-columns:1fr}
}
@media (max-width:560px){
  th,td{padding:8px 8px}
}
</style>
</head>
<body>
<div class="app">

<!-- ===== 侧边栏 ===== -->
<aside class="sidebar" id="sidebar">
  <div class="brand">
    <div class="mark"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h4l3-7 4 14 3-7h2"/></svg></div>
    <div class="bt"><b>CFNext</b><span>Cloudflare 隧道面板</span></div>
  </div>
  <nav class="nav" id="nav"></nav>
  <div class="side-foot">
    <span>部署版本</span>
    <span class="ver-chip" id="sideVer" title="点击检测更新" onclick="checkUpdate()">v—</span>
  </div>
</aside>

<!-- ===== 主区 ===== -->
<div class="main">
  <div class="topbar">
    <button class="icon-btn hamb" id="hamb" title="菜单"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    <h1 id="pageTitle">仪表盘</h1>
    <span class="pill" id="connPill"><span class="dot"></span><span id="connText">连接中</span></span>
    <button class="icon-btn" id="themeBtn" title="切换日间 / 夜间"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path id="themeIcon" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></button>
  </div>
  <div class="wdwarn" id="wdwarn">当前运行在 *.workers.dev 域名上：订阅与节点下发功能正常；若遇连接不稳或访问受限，建议在 Cloudflare 面板绑定自定义域名后使用。</div>

  <div class="content" id="content">
    <!-- ===== 视图：仪表盘 ===== -->
    <section class="view" data-view="dashboard">
      <div class="view-head"><h2>仪表盘</h2><p>快速开始、订阅管理、配额速览与运行状态</p></div>
      <div class="card">
        <h3><span class="tick"></span>快速开始</h3>
        <ol class="steps">
          <li><b>部署即用</b>：绑定域名后客户端订阅即可获得海量节点（内置 300 条优选 IP 与地区域名源），默认已配好大陆直连分流（大陆应用、微软、苹果直连，国外服务走代理）。</li>
          <li><b>调优节点</b>：在「优选配置」在线测速，把最优 IP 加入优选列表（自定义订阅模式内置常用订阅源，可自行增删，可追加内置优选池与默认节点）。</li>
          <li><b>保障额度</b>：在「配额安全」开启用量监控与自动调节，防止免费额度超支（需在面板设置中配置 Cloudflare 账户 ID 与 API 令牌）。</li>
        </ol>
      </div>
      <div class="card">
        <h3><span class="tick"></span>订阅地址</h3>
        <div class="row" style="margin-bottom:12px">
          <div class="field grow" style="margin:0"><label>订阅格式</label>
            <select id="subFmt">
              <option value="auto">自动识别</option>
              <option value="clash">Clash / Mihomo</option>
              <option value="singbox">Sing-box</option>
              <option value="surge">Surge</option>
              <option value="surfboard">Surfboard</option>
              <option value="loon">Loon</option>
              <option value="quanx">Quantumult X</option>
              <option value="v2ray">v2rayN / Shadowrocket</option>
              <option value="stash">Stash</option>
              <option value="plain">明文 vless</option>
            </select>
          </div>
        </div>
        <div class="field"><label>订阅链接</label>
          <div class="inrow">
            <input type="text" id="subUrl" readonly onclick="this.select()">
            <button class="btn sm" onclick="copySub()">复制</button>
            <button class="btn sm" onclick="toggleQR()">二维码</button>
            <button class="btn sm" onclick="downloadSub()">下载</button>
            <button class="btn sm primary" onclick="previewSub()">预览</button>
          </div>
        </div>
        <div id="qrWrap" style="display:none"></div>
        <p class="hint" style="margin-top:12px" id="subHint"></p>
        <div id="subPrev" style="display:none;margin-top:12px">
          <div class="kv"><span class="k">订阅类型</span><span class="v" id="prevType">—</span></div>
          <div class="kv"><span class="k">节点数量</span><span class="v" id="prevCount">—</span></div>
          <pre class="code" id="prevBody" style="margin-top:10px"></pre>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>地区与线路筛选</h3>
        <div class="filter-region">
          <span class="filter-region-label">节点地区</span>
          <div class="pills">
            <label class="spill"><input type="checkbox" id="fl-region-all" checked><span>全部地区</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-HK"><span>香港</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-TW"><span>台湾</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-US"><span>美国</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-SG"><span>新加坡</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-JP"><span>日本</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-KR"><span>韩国</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-DE"><span>德国</span></label>
          </div>
        </div>
        <div class="filter-row">
          <div class="filter-group">
            <div class="filter-group-title">IP 类型</div>
            <div class="pills">
              <label class="spill"><input type="checkbox" id="fl-ip4" checked><span>IPv4</span></label>
              <label class="spill"><input type="checkbox" id="fl-ip6" checked><span>IPv6</span></label>
            </div>
          </div>
          <div class="filter-group">
            <div class="filter-group-title">运营商偏好</div>
            <div class="pills">
              <label class="spill"><input type="checkbox" id="fl-isp-m" checked><span>移动</span></label>
              <label class="spill"><input type="checkbox" id="fl-isp-c" checked><span>联通</span></label>
              <label class="spill"><input type="checkbox" id="fl-isp-t" checked><span>电信</span></label>
            </div>
          </div>
          <div class="filter-group">
            <div class="filter-group-title">地址来源</div>
            <div class="pills nowrap">
              <label class="spill"><input type="checkbox" id="fl-native"><span>原生地址</span></label>
              <label class="spill"><input type="checkbox" id="fl-pref-domain" checked><span>优选域名</span></label>
              <label class="spill"><input type="checkbox" id="fl-pref-ip" checked><span>优选 IP</span></label>
              <label class="spill"><input type="checkbox" id="fl-custom-pref"><span>自定义优选</span></label>
              <label class="spill"><input type="checkbox" id="fl-random-pref"><span>随机优选</span></label>
            </div>
          </div>
        </div>
        <p class="hint" style="margin-top:12px">筛选按 地区 → IP 类型 → 运营商 逐级放宽，任一维度无节点时自动放宽，保证订阅始终非空。「运营商偏好」按节点名称中的运营商标记过滤（移动=移动/CM/CHINAMOBILE、联通=联通/CU/UNICOM、电信=电信/CT/CHINATELECOM），三个全选或节点池无任何运营商标记时不生效。「节点地区」支持多选，仅剔除明确标记为其它地区的节点。「地址来源」控制下发节点的来源：原生地址（工作器域名）、优选域名（第三方优选域名列表）、优选 IP（内置与实时拉取的优选 IP）、自定义优选（「优选配置」保存的优选列表）、随机优选（「优选配置」随机优选模式，与自定义优选互斥）。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>配额速览 <span class="sub" id="dbSub">未配置监控</span></h3>
        <div id="dbWrap" style="display:none">
          <div class="kv"><span class="k">当日请求量</span><span class="v" id="dbReq">—</span></div>
          <div style="margin:10px 0 6px;height:8px;border-radius:6px;background:var(--card2);overflow:hidden">
            <div id="dbBar" style="height:100%;width:0%;border-radius:6px;background:linear-gradient(90deg,var(--ok),var(--accent));transition:width .5s"></div>
          </div>
          <div class="kv"><span class="k">已用额度</span><span class="v" id="dbPct">—</span></div>
        </div>
        <p class="hint" style="margin-top:10px">免费计划 100,000 次/日。在「面板设置」配置 Cloudflare 监控选项后即可在此查看当日用量；详细策略与自动调节见「配额安全」。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>运行状态</h3>
        <div class="kv"><span class="k">协议</span><span class="v" id="stProto">—</span></div>
        <div class="kv"><span class="k">KV 持久化</span><span class="v" id="stKv">—</span></div>
        <div class="kv"><span class="k">面板入口</span><span class="v" id="stEntry">—</span></div>
      </div>
    </section>

    <!-- ===== 视图：节点配置（协议 / TLS / ECH / 落地出站） ===== -->
    <section class="view" data-view="nodes">
      <div class="view-head"><h2>节点配置</h2><p>代理协议、TLS/ECH、节点测活、负载均衡与落地出站（保存后立即生效）</p></div>
      <div class="grid2">
        <div class="card">
          <h3><span class="tick"></span>协议开关</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-vless" checked><span class="sl"></span></label><span>VLESS 协议（默认开启）</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-trojan"><span class="sl"></span></label><span>Trojan 协议（支持Mihomo内核）</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-xhttp"><span class="sl"></span></label><span>XHTTP 协议（支持Mihomo内核，须绑定自定义域名并开启gRPC）</span></div>
          <div class="field" style="margin-top:12px"><label>Trojan 密码（留空使用 UUID）</label><input type="text" id="tp-pass" placeholder="Trojan 密码" autocomplete="off"></div>
        </div>
        <div class="card">
          <h3><span class="tick"></span>TLS 与传输</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="tls-only"><span class="sl"></span></label><span>仅 TLS 端口（跳过 80/8080 等明文端口）</span></div>
          <div class="field" style="margin-top:12px"><label>ALPN 协商（h2 / http/1.1，逗号分隔）</label><input type="text" id="alpn" placeholder="留空自动，如 h2,http/1.1" autocomplete="off"></div>
          <p class="hint">明文端口节点（80/8080/8880/2052/2082/2086/2095）在开启「仅 TLS」后将从订阅中剔除。</p>
        </div>
      </div>
      <div class="grid2">
        <div class="card">
          <h3><span class="tick"></span>节点测活</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-probe-on"><span class="sl"></span></label><span>节点测活（TCP 探测）</span></div>
          <p class="hint" style="margin-top:12px">关闭：不做任何 TCP 握手 / HTTP 探测与剔除，节点的下发策略、出入站方式、ProxyIP 等节点相关均按 V1.x版本处理方式处理——按数据源原始顺序全量下发，客户端自行择优。<br>开启：对候选地址做 TCP 探测并剔除判死项（含精选池 / 优选 IP / 域名预检 / ProxyIP 兜底）；Cloudflare 运行时禁止出站连接 CF IP 段，故对 CF 段 IP 跳过探测、直接视为可用（内置精选池实测 97% 可用，不会被误判清空），仅对非 CF 段（反代 / ProxyIP）真实测活剔除死节点。自定义订阅 / 随机优选模式不测活。</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>负载均衡</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-lb-on"><span class="sl"></span></label><span>负载均衡（打乱下发顺序）</span></div>
          <p class="hint" style="margin-top:12px">每次订阅请求对节点顺序做随机轮换（Fisher-Yates），客户端连接分散到整批节点，避免全部集中踩同一批头部「最优 IP」导致拥塞变慢；关闭则保持固定顺序（头部为最稳节点）。</p>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>ECH 加密（可选）</h3>
        <div class="proto-row"><label class="switch"><input type="checkbox" id="ech-on"><span class="sl"></span></label><span>启用 ECH 加密（需绑定自定义域名）</span></div>
        <div class="grid2" style="margin-top:12px">
          <div class="field" style="margin-bottom:0"><label>ECH 域名（留空用默认 cloudflare-ech.com）</label><input type="text" id="ech-host" placeholder="cloudflare-ech.com" autocomplete="off"></div>
          <div class="field" style="margin-bottom:0"><label>自定义 ECH DNS（DoH 地址，留空用客户端默认）</label><input type="text" id="ech-dns" placeholder="https://223.5.5.5/dns-query" autocomplete="off"></div>
        </div>
        <p class="hint">开启后订阅节点将附带 ech 参数与 alpn 协商，客户端需支持 ECH 才能生效。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>落地与出站</h3>
        <div class="field"><label>反代 / 落地 IP（填写后作为固定出口优先使用；留空则直连失败后由内置地区反代兜底，格式 host 或 host:port）</label><input type="text" id="s-proxyIP" placeholder="留空则直连失败后走内置地区反代" autocomplete="off"></div>
        <div class="field"><label>出站代理（可选）</label><input type="text" id="s-outbound" placeholder="socks5://user:pass@1.2.3.4:1080 或 ss://chacha20-ietf-poly1305:密码@1.2.3.4:8388" autocomplete="off"></div>
        <p class="hint">支持 socks5://（可带 user:pass@）、http(s)://、ss:// 或 host:port（默认按 socks5，端口 1080）。SS 加密支持 aes-128-gcm / aes-256-gcm / chacha20-ietf-poly1305。</p>
        <div class="field" style="margin-bottom:0"><label>出站方式</label>
          <select id="s-outmode">
            <option value="">默认（优先代理，失败直连）</option>
            <option value="no">直连优先（no）</option>
            <option value="only">仅走代理（only）</option>
          </select>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>保存与生效</h3>
        <div class="note-box" style="margin:0">所有配置修改后点击右下角「保存全部」才会写入 KV 并生效，保存成功后订阅地址与节点构成立即更新；「重置」将清空 KV 中全部数据并还原为初始部署状态。</div>
      </div>
    </section>

    <!-- ===== 视图：优选配置 ===== -->
    <section class="view" data-view="optimizer">
      <div class="view-head"><h2>优选配置</h2><p>拉取候选 IP → 本地测速 → 最优节点加入订阅</p></div>
      <div class="card">
        <h3><span class="tick"></span>在线优选</h3>
        <div class="grid3">
          <div class="field" style="grid-column:span 2;margin:0"><label>数据源</label>
            <select id="o-source">
              <option value="wetest_v4">微测网 IPv4</option>
              <option value="wetest_v6">微测网 IPv6</option>
              <option value="bestcf">优选 IP 列表（bestcf）</option>
              <option value="hostmonit">HostMonit 优选</option>
              <option value="cidr">内置 Cloudflare 地址段</option>
              <option value="custom">自定义 URL</option>
            </select>
          </div>
          <div class="field" style="margin:0"><label>测速端口</label>
            <select id="o-port" onchange="onPortSel()">
              <optgroup label="HTTPS"><option value="443">443</option><option value="2053">2053</option><option value="2083">2083</option><option value="2087">2087</option><option value="2096">2096</option><option value="8443">8443</option></optgroup>
              <optgroup label="HTTP"><option value="80">80</option><option value="8080">8080</option><option value="8880">8880</option><option value="2052">2052</option><option value="2082">2082</option><option value="2086">2086</option><option value="2095">2095</option></optgroup>
              <option value="custom">自定义…</option>
            </select>
            <input type="text" id="o-portC" style="display:none;margin-top:8px" placeholder="自定义端口号" autocomplete="off">
          </div>
        </div>
        <div class="field" id="o-customWrap" style="display:none"><label>自定义数据源 URL</label><input type="text" id="o-sourceURL" placeholder="https://example.com/ip.txt" autocomplete="off"></div>
        <div class="grid3" style="margin-top:6px">
          <div class="field" style="margin:0"><label>并发线程（1-50）</label><input type="number" id="o-threads" min="1" max="50" value="5"></div>
          <div class="field" style="margin:0"><label>候选数量</label><input type="number" id="o-count" min="1" value="20"></div>
          <div class="field" style="margin:0"><label>随机补足（0 关闭）</label><input type="number" id="o-fill" min="0" value="0"></div>
        </div>
        <div class="row" style="margin-top:14px">
          <label class="switch"><input type="checkbox" id="o-useCidr" checked><span class="sl"></span></label>
          <span style="font-size:13px;color:var(--dim)">候选不足时用 Cloudflare 地址段随机补足</span>
          <span style="flex:1"></span>
          <button class="btn primary" onclick="runPick()">开始优选</button>
          <button class="btn" onclick="addAllBest()">全部加入最优</button>
        </div>
        <div class="msg" id="oMsg"></div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>测速结果 <span class="sub">本地（浏览器）→ 目标 IP</span></h3>
        <div class="tbl-wrap">
          <table><colgroup><col style="width:42%"><col style="width:18%"><col style="width:16%"><col style="width:24%"></colgroup>
          <thead><tr><th>IP : 端口</th><th>延迟</th><th>状态</th><th>操作</th></tr></thead>
          <tbody id="oTableBody"><tr><td colspan="4" style="text-align:center;color:var(--faint)">尚未测速 — 点击「开始优选」拉取候选</td></tr></tbody></table>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>优选节点</h3>
        <div class="grid2">
          <div class="field" style="margin:0"><label>订阅模式</label>
            <select id="o-submode" onchange="onSubMode()">
              <option value="">关闭（使用面板默认节点池）</option>
              <option value="custom">自定义订阅（支持汇聚）</option>
              <option value="random">随机优选模式（官方接口）</option>
            </select>
          </div>
          <div class="field" style="margin:0"><label>自定义模式下追加默认节点</label>
            <select id="o-subinc">
              <option value="0">关闭（仅自定义节点）</option>
              <option value="1">开启（追加内置优选池与默认地区源）</option>
            </select>
          </div>
        </div>
        <div class="field" id="sm-custom" style="margin-top:14px;display:none">
          <label>优选节点（域名 / 优选 API / IP，每行一个；IP 格式 IP:端口#名称）</label>
          <textarea id="f-preferred" rows="6" placeholder="*.cloudflare.182682.xyz&#10;104.25.246.53:443#香港&#10;https://bestcf.pages.dev/random-region/HK/100.txt"></textarea>
          <div class="hint">开启「自定义订阅」后生效；域名与优选 API 保存后自动解析为可用 IP 下发。测速结果里的「加入优选」会把最优 IP 写入此列表，保存全部后生效。</div>
          <button class="btn sm" style="margin-top:8px" onclick="fetchDomains()">拉取微测网优选域名</button>
        </div>
        <div class="field" id="sm-random" style="margin-top:14px;display:none">
          <label>随机优选数量（1-99）</label>
          <input type="number" id="o-rand" min="1" max="99" value="16">
          <div class="hint">从 Cloudflare 地址段随机生成指定数量的优选节点直接下发，不经域名解析。</div>
        </div>
      </div>
    </section>

    <!-- ===== 视图：配额安全 ===== -->
    <section class="view" data-view="quota">
      <div class="view-head"><h2>配额安全</h2><p>监控 Cloudflare 账户当日用量，按免费额度自动调节下发规模（需在面板设置中配置 Cloudflare 账户 ID 及 API 令牌）</p></div>
      <div class="card">
        <h3><span class="tick"></span>Cloudflare 用量监控 <span class="sub" id="qQuotaSub">未配置</span></h3>
        <div id="qQuotaWrap">
          <div class="kv"><span class="k">当日请求量</span><span class="v" id="qReq">—</span></div>
          <div style="margin:10px 0 6px;height:10px;border-radius:6px;background:var(--card2);overflow:hidden">
            <div id="qBar" style="height:100%;width:0%;border-radius:6px;background:linear-gradient(90deg,var(--ok),var(--accent));transition:width .5s"></div>
          </div>
          <div class="kv"><span class="k">已用额度</span><span class="v" id="qPct">—</span></div>
          <div class="kv"><span class="k">剩余额度</span><span class="v" id="qRemain">—</span></div>
          <div class="kv"><span class="k">CPU 时间</span><span class="v" id="qCpu">—</span></div>
          <div class="kv"><span class="k">子请求数</span><span class="v" id="qSub">—</span></div>
          <div class="kv"><span class="k">数据更新</span><span class="v" id="qAt">—</span></div>
        </div>
        <div id="qQuotaEmpty" style="display:none">
          <div class="note-box" style="margin:0">尚未配置 Cloudflare 监控：在「面板设置」填写 Cloudflare 账户 ID 与 API 令牌（或部署时配置环境变量 CF_ACCOUNT_ID / CF_API_TOKEN），即可实时查看当日请求量并启用自动调节。</div>
        </div>
        <div id="qQuotaErr" style="display:none">
          <div class="note-box" style="margin:0;border-left-color:var(--err)" id="qQuotaErrText">用量查询失败</div>
        </div>
        <div class="row" style="margin-top:14px">
          <label class="switch"><input type="checkbox" id="q-auto-on"><span class="sl"></span></label>
          <span style="font-size:13px">自动调节：当日用量 ≥ 60% 时按比例收缩节点上限（保护账户免费额度）</span>
          <span style="flex:1"></span>
          <button class="btn sm" onclick="refreshQuota()">刷新用量</button>
        </div>
        <p class="hint">自动调节：当日用量达到免费额度 60% 后，节点上限按比例收缩（基准上限 1000 条）——60% 时下发 1000 条、70% 时 750 条、80% 时 500 条、90% 时 250 条、100% 时 100 条（保底下限），用量越高下发越少，保护账户免费额度。</p>
      </div>
      <div class="grid2">
        <div class="card">
          <h3><span class="tick"></span>下发控制</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-nl-on"><span class="sl"></span></label><span>精确节点数量控制</span></div>
          <div class="field" style="margin-top:10px"><label>精确节点上限（1-1000）</label><input type="number" id="q-nl-count" min="1" max="1000" value="500"></div>
          <p class="hint">默认开启：所有格式订阅精确下发到设定数量（默认 500，范围 1-1000），替代原轮询模式的 300/800 分档上限；勾选三种协议时节点总数仍为设定值（不再按协议 3 倍膨胀）。</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>轮询换新</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-poll-on"><span class="sl"></span></label><span>启用轮询（默认关闭）</span></div>
          <p class="hint" style="margin-top:12px">默认关闭：一次性下发全部节点，不受 300/800 上限限制；开启后按格式上限轮换下发新 IP（200 条去重窗口，避免重复下发）；端口固定 443（1.0.6 机制），换新通过 IP 轮换实现。</p>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>当前下发策略</h3>
        <div class="grid3">
          <div class="field" style="margin:0"><div class="kv"><span class="k">节点数量控制</span><span class="v" id="qNl">—</span></div><div class="kv"><span class="k">精确节点上限</span><span class="v" id="qNlCount">—</span></div></div>
          <div class="field" style="margin:0"><div class="kv"><span class="k">节点测活</span><span class="v" id="qProbe">—</span></div><div class="kv"><span class="k">轮询换新机制</span><span class="v" id="qPoll">—</span></div><div class="kv"><span class="k">负载均衡</span><span class="v" id="qLb">—</span></div></div>
          <div class="field" style="margin:0"><div class="kv"><span class="k">行式格式上限</span><span class="v">800 节点</span></div><div class="kv"><span class="k">结构化格式上限</span><span class="v">300 节点</span></div></div>
        </div>
        <p class="hint" style="margin-top:10px">每次订阅请求都会消耗 Worker 的 CPU 时间（免费计划 10ms/请求）。面板按「免费额度 → 格式 → 节点数」逐层设防，保证稳定运行。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>保护机制说明</h3>
        <div class="note-box">四道防线（按生效优先级从高到低）：① 用量监控——查看当日请求量，为自动调节提供数据；② 自动调节——用量 ≥60% 时按比例收缩节点上限，位于计算链末端以 min 收敛，只收紧、永不放大，优先级最高且与轮询状态无关；③ 数量上限（下发控制）——按设定值精确限制，全局生效（轮询开/关均受限）；④ 格式分档与轮询去重——结构化/行式格式上限与轮询去重换新。各层上限冲突时取较小值，让订阅生成的 CPU 消耗始终处于免费额度内。</div>
      </div>
    </section>

    <!-- ===== 视图：面板设置 ===== -->
    <section class="view" data-view="account">
      <div class="view-head"><h2>面板设置</h2><p>部署基础信息：UUID、面板路径、管理密码与绑定域名</p></div>
      <div class="card">
        <h3><span class="tick"></span>基础配置</h3>
        <div class="field"><label>UUID（订阅节点身份）</label>
          <div class="inrow">
            <input type="text" id="a-uuid" placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" autocomplete="off">
            <button class="btn sm" onclick="genUuid()">生成</button>
          </div>
        </div>
        <div class="field"><label>面板路径（访问入口，留空用 UUID）</label><input type="text" id="a-path" placeholder="留空自动使用 UUID" autocomplete="off"></div>
        <div class="field"><label>自定义订阅路径（只填 UUID/别名段，如 AAZ；留空用面板路径）</label><input type="text" id="a-suburl" placeholder="AAZ" autocomplete="off"></div>
        <div class="field"><label>管理密码（留空则面板免登录）</label><input type="password" id="a-admin" placeholder="设置后访问面板需登录" autocomplete="new-password"></div>
        <p class="hint" style="margin-top:4px">部署后首次访问面板会强制要求先设置管理密码；设置完成后，此处留空并保存即可恢复免登录。</p>
        <div class="field" style="margin-bottom:0"><label>绑定域名（留空使用 *.workers.dev）</label><input type="text" id="a-host" placeholder="node.example.com" autocomplete="off"></div>
        <p class="hint" style="margin-top:10px">「绑定域名」仅用于订阅节点主机名（XHTTP 协议要求绑定自定义域名），不负责域名解析。自定义域名访问面板需先在 Cloudflare 面板 → Workers 与 Pages → 该 Worker → Domains &amp; Routes 添加自定义域名（DNS 由 Cloudflare 托管，证书自动签发），此字段留空即使用 *.workers.dev。KV 未绑定时配置只在内存中生效，重置后回到默认值。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>Cloudflare 监控选项（可选）</h3>
        <div class="grid2">
          <div class="field" style="margin:0"><label>账户 ID（Account Tag）</label><input type="text" id="a-cfid" placeholder="32 位十六进制 ID，位于 dash.cloudflare.com 右侧栏「账户 ID」" autocomplete="off"></div>
          <div class="field" style="margin:0"><label>API 令牌（Bearer）</label><input type="password" id="a-cftoken" placeholder="40 位令牌（My Profile → API Tokens 创建）" autocomplete="new-password"></div>
        </div>
        <p class="hint" style="margin-top:10px">账户 ID 是 32 位十六进制字符串（<b>不是邮箱</b>），打开并登录Cloudflare账户后，点击「左侧栏」→「管理账户」→「帐户 API 令牌」→「创建令牌」。查询失败提示 401 时请检查这两项是否填错。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>备份与恢复</h3>
        <p class="hint" style="margin-top:0;margin-bottom:12px">以 JSON 格式导出全部面板设置（含协议、优选、筛选、配额监控），可保存到本地或迁移到其他部署；导入后请点右下角「保存全部」生效。</p>
        <div class="inrow">
          <button class="btn" onclick="exportConfig()">导出配置</button>
          <button class="btn" onclick="$('importFile').click()">导入配置</button>
          <input type="file" id="importFile" accept=".json,application/json" style="display:none" onchange="importConfig(this)">
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>运行信息</h3>
        <div class="kv"><span class="k">面板版本</span><span class="v" id="aVer">—</span></div>
        <div class="kv"><span class="k">KV 持久化</span><span class="v" id="aKv">—</span></div>
        <div class="kv"><span class="k">轮询窗口</span><span class="v">最近 200 条</span></div>
        <div class="kv"><span class="k">构建日期</span><span class="v">2026-09-21</span></div>
      </div>
      <div class="danger-zone">
        <h3 style="margin-bottom:8px;color:var(--err)">危险操作</h3>
        <p style="font-size:13px;color:var(--dim);margin-bottom:12px">重置将清空 KV 中全部数据（面板配置 + 已下发节点记录），面板还原为初始部署状态，不可恢复。</p>
        <button class="btn danger" onclick="resetAll()">重置全部数据</button>
      </div>
    </section>

    <!-- ===== 视图：关于 ===== -->
    <section class="view" data-view="about">
      <div class="view-head"><h2>关于项目</h2><p>CFNext — Cloudflare 全新代理管理面板（独立界面 + 独立实现）</p></div>
      <div class="card">
        <h3><span class="tick"></span>相关链接</h3>
        <p style="font-size:13px;color:var(--dim)">YouTube @数字派：<a href="https://www.youtube.com/@PAI_CN" target="_blank" rel="noopener">youtube.com/@PAI_CN</a></p>
        <p style="font-size:13px;color:var(--dim);margin-top:6px">Telegram 交流群：<a href="https://t.me/SZ_PAI" target="_blank" rel="noopener">t.me/SZ_PAI</a></p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>特别鸣谢</h3>
        <p style="font-size:13px;color:var(--dim);margin-bottom:10px">本面板为全新独立设计/全新编写：后端代理、订阅与优选逻辑参考以下开源项目的功能清单</p>
        <div class="tbl-wrap"><table>
          <colgroup><col style="width:34%"><col style="width:66%"></colgroup>
          <thead><tr><th>参考仓库</th><th>地址</th></tr></thead>
          <tbody>
            <tr><td>cmliu/edgetunnel</td><td><a href="https://github.com/cmliu/edgetunnel" target="_blank" rel="noopener">github.com/cmliu/edgetunnel</a></td></tr>
            <tr><td>zizifn/edgetunnel</td><td><a href="https://github.com/zizifn/edgetunnel" target="_blank" rel="noopener">github.com/zizifn/edgetunnel</a></td></tr>
            <tr><td>6Kmfi6HP/EDtunnel</td><td><a href="https://github.com/6Kmfi6HP/EDtunnel" target="_blank" rel="noopener">github.com/6Kmfi6HP/EDtunnel</a></td></tr>
            <tr><td>IonRh/Cloudflare-BestIP</td><td><a href="https://github.com/IonRh/Cloudflare-BestIP" target="_blank" rel="noopener">github.com/IonRh/Cloudflare-BestIP</a></td></tr>
            <tr><td>zvos/CF-Workers-Monitor</td><td><a href="https://github.com/zvos/CF-Workers-Monitor" target="_blank" rel="noopener">github.com/zvos/CF-Workers-Monitor</a></td></tr>
            <tr><td>MetaCubeX/meta-rules-dat</td><td><a href="https://github.com/MetaCubeX/meta-rules-dat" target="_blank" rel="noopener">github.com/MetaCubeX/meta-rules-dat</a></td></tr>
            <tr><td>666OS/rules</td><td><a href="https://github.com/666OS/rules" target="_blank" rel="noopener">github.com/666OS/rules</a></td></tr>
            <tr><td>DustinWin/ruleset_geodata</td><td><a href="https://github.com/DustinWin/ruleset_geodata" target="_blank" rel="noopener">github.com/DustinWin/ruleset_geodata</a></td></tr>
            <tr><td>blackmatrix7/ios_rule_script</td><td><a href="https://github.com/blackmatrix7/ios_rule_script" target="_blank" rel="noopener">github.com/blackmatrix7/ios_rule_script</a></td></tr>
            <tr><td>TG-Twilight/AWAvenue-Ads-Rule</td><td><a href="https://github.com/TG-Twilight/AWAvenue-Ads-Rule" target="_blank" rel="noopener">github.com/TG-Twilight/AWAvenue-Ads-Rule</a></td></tr>
            <tr><td>Koolson/Qure</td><td><a href="https://github.com/Koolson/Qure" target="_blank" rel="noopener">github.com/Koolson/Qure</a></td></tr>
          </tbody>
        </table></div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>调用接口</h3>
        <div class="tbl-wrap"><table>
          <colgroup><col style="width:40%"><col style="width:60%"></colgroup>
          <thead><tr><th>用途</th><th>接口</th></tr></thead>
          <tbody>
            <tr><td>HostMonit 优选</td><td class="mono">stock.hostmonit.com/CloudFlareYes</td></tr>
            <tr><td>优选 IP 列表</td><td class="mono">cf.090227.xyz/ip.164746.xyz</td></tr>
            <tr><td>bestcf 地区优选池</td><td class="mono">bestcf.pages.dev/random-region/{HK|TW|JP|SG|US|KR}/100.txt</td></tr>
            <tr><td>DoH 解析</td><td class="mono">cloudflare-dns.com / dns.alidns.com / doh.pub</td></tr>
            <tr><td>Cloudflare 用量监控（GraphQL）</td><td class="mono">api.cloudflare.com/client/v4/graphql</td></tr>
            <tr><td>版本更新检测</td><td class="mono">raw.githubusercontent.com/PAICNI/CFNext/...</td></tr>
            <tr><td>远程规则集（sing-box / Clash）</td><td class="mono">raw.githubusercontent.com/MetaCubeX/meta-rules-dat/...</td></tr>
            <tr><td>面板二维码库</td><td class="mono">cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js</td></tr>
          </tbody>
        </table></div>
      </div>
    </section>
  </div>
</div>
</div>

<div class="fbar">
  <span class="saved-at" id="savedAt">尚未保存</span>
  <button class="btn danger" id="resetBtn" onclick="resetAll()">重置</button>
  <button class="btn primary" id="saveBtn" onclick="saveAll()"><span class="dirty-dot"></span>保存全部</button>
</div>
<div class="toast" id="toast"></div>

<script>
/* ===== 基础 ===== */
var APIPATH = location.pathname.replace(/\/+$/, '');
var CFG = null;
var LAST = [];
var toastTimer = null;
function $(id){ return document.getElementById(id); }
function api(p, opts){
  return fetch(APIPATH + '/api/' + p, opts).then(function(r){ return r.json(); });
}
function toast(t, ty){
  var el = $('toast');
  el.textContent = t;
  el.className = 'toast show ' + (ty || '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ el.className = 'toast'; }, 2600);
}
function showMsg(id, t, ty){
  var el = $(id);
  el.textContent = t;
  el.className = 'msg show ' + (ty || 'info');
}
function copyText(t){
  var done = false;
  function fin(ok2){
    if (done) return; done = true;
    toast(ok2 ? '已复制' : '复制失败，请手动复制', ok2 ? 'ok' : 'err');
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    var p = null;
    try { p = navigator.clipboard.writeText(t); } catch (e) { fin(fallbackCopy(t)); return; }
    if (p && typeof p.then === 'function') {
      p.then(function(){ fin(true); }, function(){ fin(fallbackCopy(t)); });
      setTimeout(function(){ fin(fallbackCopy(t)); }, 600); // 剪贴板 API 悬空（无权限等）时回退
    } else { fin(true); }
  } else {
    fin(fallbackCopy(t));
  }
}
function fallbackCopy(t){
  var ta = document.createElement('textarea');
  ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  var ok2 = false;
  try { ok2 = document.execCommand('copy'); } catch (e) { ok2 = false; }
  document.body.removeChild(ta);
  return ok2;
}
function copySub(){ copyText($('subUrl').value || makeSub()); }
function markDirty(){
  $('saveBtn').classList.add('dirty');
  $('savedAt').textContent = '有未保存的修改';
}

/* ===== 导航 ===== */
var NAV = [
  { id:'dashboard', name:'仪表盘', icon:'<path d="M4 4h7v7H4zM13 4h7v4h-7zM4 13h7v7H4zM13 11h7v9h-7z"/>' },
  { id:'nodes', name:'节点配置', icon:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12L4 7.5"/>' },
  { id:'optimizer', name:'优选配置', icon:'<path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM12 8v4l2.5 2.5M3 3l3 3"/>' },
  { id:'quota', name:'配额安全', icon:'<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6zM9 12l2 2 4-4"/>' },
  { id:'account', name:'面板设置', icon:'<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-3.5 3.6-6 8-6s8 2.5 8 6"/>' },
  { id:'about', name:'关于项目', icon:'<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01"/>' }
];
var TITLES = { dashboard:'仪表盘', nodes:'节点配置', optimizer:'优选配置', quota:'配额安全', account:'面板设置', about:'关于项目' };
function buildNav(){
  var html = '';
  NAV.forEach(function(n){
    html += '<button class="nav-item" data-v="' + n.id + '" onclick="switchView(\'' + n.id + '\')"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + n.icon + '</svg>' + n.name + '</button>';
  });
  $('nav').innerHTML = html;
}
function switchView(id){
  document.querySelectorAll('.nav-item').forEach(function(b){
    b.classList.toggle('on', b.getAttribute('data-v') === id);
  });
  document.querySelectorAll('.view').forEach(function(x){
    x.classList.toggle('on', x.getAttribute('data-view') === id);
  });
  $('pageTitle').textContent = TITLES[id] || '';
  $('sidebar').classList.remove('open');
}
$('hamb').addEventListener('click', function(){ $('sidebar').classList.toggle('open'); });

/* ===== 主题 ===== */
function systemIsLight(){ return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches; }
function storedTheme(){ var t = 'dark'; try { t = localStorage.getItem('tp_theme') || 'dark'; } catch(e) {} return t; }
function resolveTheme(t){ if (t === 'auto') return systemIsLight() ? 'light' : 'dark'; return t; }
function setThemeIcon(t){
  var p = document.getElementById('themeIcon');
  if (!p) return;
  if (t === 'light') p.setAttribute('d', 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4');
  else p.setAttribute('d', 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z');
}
function applyTheme(){
  var t = resolveTheme(storedTheme());
  document.documentElement.setAttribute('data-theme', t);
  setThemeIcon(t);
}
function setTheme(t){
  try { localStorage.setItem('tp_theme', t); } catch(e) {}
  applyTheme();
  toast(t === 'auto' ? '已切换为跟随系统' : (t === 'light' ? '已切换为日间模式' : '已切换为夜间模式'), 'ok');
}
$('themeBtn').addEventListener('click', function(){
  var cur = storedTheme();
  var next = (cur === 'light') ? 'dark' : 'light';
  setTheme(next);
});
applyTheme();

/* ===== 更新检测 ===== */
var topVerText = 'v—';
function legacyCopy(t){
  try {
    var ta = document.createElement('textarea');
    ta.value = t;
    ta.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    var ok2 = false;
    try { ok2 = document.execCommand('copy'); } catch (e) { ok2 = false; }
    document.body.removeChild(ta);
    return ok2;
  } catch (e) { return false; }
}
function copyClipboard(t){
  return new Promise(function(ok){
    var done = false;
    function finish(v){ if (done) return; done = true; ok(v); }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        var p = null;
        try { p = navigator.clipboard.writeText(t); } catch (e) { finish(legacyCopy(t)); return; }
        if (p && typeof p.then === 'function') {
          p.then(function(){ finish(true); }, function(){ finish(legacyCopy(t)); });
          setTimeout(function(){ finish(legacyCopy(t)); }, 600); // 剪贴板 API 悬空（无权限等）时回退
        } else { finish(true); }
      } else {
        finish(legacyCopy(t));
      }
    } catch (e) { finish(legacyCopy(t)); }
  });
}
function checkUpdate(){
  var sv = $('sideVer');
  if (sv.classList.contains('checking')) return;
  sv.classList.add('checking');
  sv.textContent = '检测中…';
  api('update').then(function(r){
    sv.classList.remove('checking');
    if (!r || !r.ok || !r.data) { sv.textContent = topVerText; toast('检测更新失败，请稍后重试', 'err'); return; }
    var d = r.data;
    var kindName = (d.kind === '混淆') ? '混淆版' : '明文版';
    topVerText = 'v' + d.current + ' ' + kindName;
    sv.textContent = topVerText;
    if (d.hasUpdate && d.code) {
      sv.classList.add('has-update');
      var kind = (d.kind === '混淆') ? '混淆' : '明文';
      copyClipboard(d.code).then(function(copied){
        toast(copied ? '检测到更新，已复制最新' + kind + '代码到剪贴板' : '检测到更新（v' + d.latest + '），复制失败，请前往仓库获取', copied ? 'ok' : 'err');
      });
    } else if (d.hasUpdate) {
      toast('检测到更新（v' + d.latest + '），但未能获取代码', 'err');
    } else if (d.latest) {
      sv.classList.remove('has-update');
      toast('已是最新版本（v' + d.current + ' ' + kindName + '）', 'ok');
    } else {
      toast('检测更新失败：' + (d.error || '仓库暂不可达'), 'err');
    }
  }).catch(function(){
    sv.classList.remove('checking');
    sv.textContent = topVerText;
    toast('检测更新失败，请稍后重试', 'err');
  });
}

/* ===== 配置加载与回填 ===== */
function loadAll(){
  if (/\.workers\.dev$/i.test(location.hostname)) $('wdwarn').style.display = 'block';
  api('status').then(function(r){
    if (r && r.ok) renderStatus(r.data);
  }).catch(function(){});
  api('config').then(function(r){
    if (r && r.ok){
      CFG = r.data;
      fillForm();
      renderAll();
      makeSub(false);
      setConn(true);
      refreshQuota();
      toast('配置已加载', 'ok');
    } else if (r && r.status === 403) {
      location.href = '/login?next=' + encodeURIComponent(APIPATH);
    } else {
      setConn(false);
      toast('无法连接服务器', 'err');
    }
  }).catch(function(){
    setConn(false);
    toast('无法连接服务器', 'err');
  });
}
function setConn(ok){
  var p = $('connPill');
  p.className = 'pill ' + (ok ? '' : 'off');
  $('connText').textContent = ok ? '运行中' : '无法连接';
}
function renderStatus(d){
  $('stEntry').textContent = location.origin + '/' + (d.path || '');
  var wd = !!(d.workersDev) || /\.workers\.dev$/i.test(location.hostname);
  $('wdwarn').style.display = wd ? 'block' : 'none';
  $('subHint').textContent = wd
    ? '当前为 *.workers.dev 域名：Cloudflare 可能限制该域名直连，若客户端更新订阅失败（提示无效订阅），请在客户端开启系统代理或「更新订阅使用代理」后重试；节点连接不受影响（直连优选 IP）。'
    : '';
  var kv = d.kv;
  var kvTxt = kv ? '已绑定（配置持久化）' : '未绑定（配置仅内存）';
  $('stKv').textContent = kvTxt;
  $('stKv').className = 'v ' + (kv ? 'ok' : 'bad');
  $('aKv').textContent = kvTxt;
  $('aKv').className = 'v ' + (kv ? 'ok' : 'bad');
  var v = d.version || '—';
  var kindName = (d.kind === '混淆版') ? '混淆版' : '明文版';   // 部署形态（明文版 / 混淆版），由后端自检
  $('sideVer').textContent = 'v' + v + ' ' + kindName;
  topVerText = 'v' + v + ' ' + kindName;
  $('aVer').textContent = v + ' ' + kindName;
}
function protoText(){
  if (!CFG) return '—';
  var a = [];
  if (CFG.enableVless !== false) a.push('VLESS');
  if (CFG.enableTrojan) a.push('Trojan');
  if (CFG.enableXhttp) a.push('XHTTP');
  return a.length ? a.join(' / ') : '未启用';
}
function renderAll(){
  $('stProto').textContent = protoText();
  renderQuota();
}
function renderQuota(){
  var nl = !!(CFG && CFG.nodeLimit);
  $('qNl').textContent = nl ? '已开启' : '关闭（默认分档上限）';
  $('qNl').className = 'v ' + (nl ? 'ok' : '');
  $('qNlCount').textContent = nl ? (CFG.nodeLimitCount || 500) + ' 节点' : '—';
  var po = !(CFG && CFG.polling === false);
  $('qPoll').textContent = po ? '已开启（每轮换新 IP）' : '关闭（每次下发全部）';
  $('qPoll').className = 'v ' + (po ? 'ok' : '');
  // 节点测活：开启 = 红字提醒（会误杀 CF 段精选池），关闭 = 绿字（推荐状态，对齐 V1.0.6）
  var pa = !!(CFG && CFG.probeAlive);
  $('qProbe').textContent = pa ? '已开启（剔除死节点，体感更快）' : '关闭（不测活，按 V1.x 原序下发）';
  $('qProbe').className = 'v ' + (pa ? 'warn' : 'ok');
  var lb = !(CFG && CFG.loadBalance === false);
  $('qLb').textContent = lb ? '已开启（随机轮换）' : '关闭（固定顺序）';
  $('qLb').className = 'v ' + (lb ? 'ok' : 'ok');
}
function fmtNum(n){
  if (n == null || isNaN(n)) return '—';
  n = Number(n);
  if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'k';
  return String(n);
}
function showQuotaState(kind, text){
  $('qQuotaWrap').style.display = (kind === 'data') ? '' : 'none';
  $('qQuotaEmpty').style.display = (kind === 'empty') ? '' : 'none';
  $('qQuotaErr').style.display = (kind === 'err') ? '' : 'none';
  if (kind === 'err') $('qQuotaErrText').textContent = quotaErrText(text);
  if (kind === 'data'){ $('qQuotaEmpty').style.display = 'none'; }
}
function quotaErrText(e){
  var m = String(e || '');
  if (m.indexOf('401') >= 0) return '认证失败（CF API 401）：请检查账户 ID 是否为 32 位十六进制、API 令牌是否有效且勾选 Account Analytics 读取权限';
  if (m.indexOf('403') >= 0) return '无权限（CF API 403）：API 令牌缺少账户 Analytics 读取权限';
  if (m.indexOf('429') >= 0) return 'CF API 限流（429）：已自动退避 15 分钟，期间沿用缓存数据';
  if (m.indexOf('未找到账户') >= 0) return m + '：请核对 dash.cloudflare.com 右侧栏的 32 位账户 ID';
  return m || '用量查询失败';
}
function renderQuotaData(d){
  updDbQuota(d);
  if (!d || !d.configured){
    $('qQuotaSub').textContent = '未配置';
    showQuotaState('empty');
    return;
  }
  if (d.error && !d.stale){
    $('qQuotaSub').textContent = '查询失败';
    showQuotaState('err', d.error);
    return;
  }
  $('qQuotaSub').textContent = d.stale ? '缓存数据' : '已连接';
  showQuotaState('data');
  $('qReq').textContent = fmtNum(d.today.requests) + ' / ' + fmtNum(d.limit);
  var p = d.percent || 0;
  $('qBar').style.width = Math.min(100, p) + '%';
  $('qBar').style.background = p >= 90 ? 'linear-gradient(90deg,var(--err),var(--warn))' : (p >= 60 ? 'linear-gradient(90deg,var(--warn),var(--accent))' : 'linear-gradient(90deg,var(--ok),var(--accent))');
  $('qPct').textContent = p + '%';
  $('qPct').className = 'v ' + (p >= 90 ? 'bad' : (p >= 60 ? '' : 'ok'));
  $('qRemain').textContent = fmtNum(d.remaining != null ? d.remaining : (d.limit - d.today.requests));
  $('qCpu').textContent = (d.today.cpuTime != null) ? (d.today.cpuTime / 1000).toFixed(2) + ' s' : '—';
  $('qSub').textContent = fmtNum(d.today.subrequests);
  $('qAt').textContent = (d.updatedAt ? String(d.updatedAt).replace('T', ' ').replace('Z', '') + ' UTC' : '—') + (d.stale ? '（限流缓存）' : '');
}
function updDbQuota(d){
  if (!d || !d.configured){ $('dbSub').textContent = '未配置监控'; $('dbWrap').style.display = 'none'; return; }
  if (d.error && !d.stale){ $('dbSub').textContent = '查询失败'; $('dbWrap').style.display = 'none'; return; }
  $('dbSub').textContent = d.stale ? '缓存数据' : '已连接';
  $('dbWrap').style.display = '';
  $('dbReq').textContent = fmtNum(d.today.requests) + ' / ' + fmtNum(d.limit);
  var p = d.percent || 0;
  $('dbBar').style.width = Math.min(100, p) + '%';
  $('dbBar').style.background = p >= 90 ? 'linear-gradient(90deg,var(--err),var(--warn))' : (p >= 60 ? 'linear-gradient(90deg,var(--warn),var(--accent))' : 'linear-gradient(90deg,var(--ok),var(--accent))');
  $('dbPct').textContent = p + '%';
  $('dbPct').className = 'v ' + (p >= 90 ? 'bad' : (p >= 60 ? '' : 'ok'));
}
function refreshQuota(){
  $('qQuotaSub').textContent = '查询中…';
  api('quota').then(function(r){
    if (r && r.ok) renderQuotaData(r.data);
    else { $('qQuotaSub').textContent = '查询失败'; showQuotaState('err', (r && r.msg) || '查询失败'); }
  }).catch(function(){ $('qQuotaSub').textContent = '查询失败'; showQuotaState('err', '无法连接服务器'); });
}
function parseIps(t){
  var out = [];
  String(t || '').split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){
    var name = '';
    if (s.indexOf('#') >= 0){ var a = s.split('#'); s = a[0]; name = a[1]; }
    var m;
    if ((m = s.match(/^\[([0-9a-fA-F:]+)\](?::(\d+))?$/))){ out.push({ ip: m[1], port: parseInt(m[2]) || 443, name: name }); return; }
    if ((m = s.match(/^(\d+\.\d+\.\d+\.\d+)(?::(\d+))?$/))){ out.push({ ip: m[1], port: parseInt(m[2]) || 443, name: name }); }
  });
  return out;
}
function renderPreferred(){
  if (!CFG) return;
  var lines = [];
  String(CFG.preferredDomains || '').split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){ lines.push(s); });
  (CFG.preferredIPs || []).forEach(function(x){
    lines.push((String(x.ip).indexOf(':') >= 0 ? '[' + x.ip + ']' : x.ip) + ':' + (x.port || 443) + (x.name ? ('#' + x.name) : ''));
  });
  $('f-preferred').value = lines.join('\n');
}
function fillPort(pv){
  pv = String(pv == null ? 443 : pv);
  var sel = $('o-port');
  var found = false;
  for (var i = 0; i < sel.options.length; i++){ if (sel.options[i].value === pv){ found = true; break; } }
  if (found){ sel.value = pv; $('o-portC').style.display = 'none'; }
  else { sel.value = 'custom'; $('o-portC').value = pv; $('o-portC').style.display = ''; }
}
function fillForm(){
  if (!CFG) return;
  $('en-vless').checked = CFG.enableVless !== false;
  $('en-trojan').checked = !!CFG.enableTrojan;
  $('tp-pass').value = CFG.trojanPassword || '';
  $('en-xhttp').checked = !!CFG.enableXhttp;
  $('tls-only').checked = !!CFG.tlsOnly;
  $('alpn').value = CFG.alpn || '';
  $('ech-on').checked = !!CFG.ech;
  $('ech-host').value = CFG.echHost || '';
  $('ech-dns').value = CFG.echDns || '';
  var fl = CFG.filter || {};
  var region = fl.region || 'all';
  var regionArr = Array.isArray(region) ? region : (region === 'all' ? ['all'] : [region]);
  $('fl-region-all').checked = regionArr.indexOf('all') >= 0;
  ['HK', 'TW', 'US', 'SG', 'JP', 'KR', 'DE'].forEach(function(r){ $('fl-region-' + r).checked = regionArr.indexOf(r) >= 0; });
  var ipType = fl.ipType || ['IPv4', 'IPv6'];
  $('fl-ip4').checked = ipType.indexOf('IPv4') >= 0;
  $('fl-ip6').checked = ipType.indexOf('IPv6') >= 0;
  var isp = fl.isp || ['移动', '联通', '电信'];
  $('fl-isp-m').checked = isp.indexOf('移动') >= 0;
  $('fl-isp-c').checked = isp.indexOf('联通') >= 0;
  $('fl-isp-t').checked = isp.indexOf('电信') >= 0;
  var src = CFG.src || {};
  $('fl-native').checked = src.native === true;
  $('fl-pref-domain').checked = src.prefDomain !== false;
  $('fl-pref-ip').checked = src.prefIp !== false;
  $('fl-custom-pref').checked = src.customPref === true;
  var o = CFG.optimizer || {};
  $('o-source').value = o.source || 'wetest_v4';
  $('o-sourceURL').value = o.sourceURL || '';
  fillPort(o.port);
  $('o-threads').value = o.threads || 5;
  $('o-count').value = o.count || 20;
  $('o-fill').value = (o.fillCount == null ? 0 : o.fillCount);
  $('o-useCidr').checked = o.useCidr !== false;
  $('o-submode').value = o.subMode || '';
  $('o-subinc').value = (o.subIncludeDefault ? '1' : '0');
  $('o-rand').value = o.subRandomCount == null ? 16 : o.subRandomCount;
  $('q-nl-on').checked = !!CFG.nodeLimit;
  $('q-nl-count').value = CFG.nodeLimitCount || 500;
  $('q-poll-on').checked = CFG.polling !== false;
  $('q-lb-on').checked = CFG.loadBalance !== false;
  $('q-probe-on').checked = !!CFG.probeAlive;
  $('q-auto-on').checked = !!CFG.quotaAuto;
  $('a-uuid').value = CFG.uuid || '';
  $('a-path').value = CFG.path || '';
  $('a-suburl').value = CFG.subUrl || '';
  $('a-admin').value = CFG.admin || '';
  $('a-host').value = CFG.host || '';
  $('a-cfid').value = CFG.cfAccountId || '';
  $('a-cftoken').value = CFG.cfApiToken || '';
  $('s-proxyIP').value = CFG.proxyIP || '';
  $('s-outbound').value = CFG.outboundProxy || '';
  $('s-outmode').value = CFG.outboundMode || '';
  renderPreferred();
  bindRegionPills();
  onSubMode();
  $('o-customWrap').style.display = ($('o-source').value === 'custom') ? '' : 'none';
}
// 节点地区多选互斥：勾选具体地区时取消「全部地区」；全部取消时自动恢复「全部地区」（保证筛选非空）
function bindRegionPills(){
  if (window.__regionPillsBound) return;
  window.__regionPillsBound = true;
  var codes = ['HK', 'TW', 'US', 'SG', 'JP', 'KR', 'DE'];
  var all = $('fl-region-all');
  all.addEventListener('change', function(){
    if (all.checked) codes.forEach(function(r){ $('fl-region-' + r).checked = false; });
  });
  codes.forEach(function(c){
    $('fl-region-' + c).addEventListener('change', function(){
      if ($('fl-region-' + c).checked) all.checked = false;
      var any = codes.some(function(r){ return $('fl-region-' + r).checked; });
      if (!any) all.checked = true;
    });
  });
}
function collectForm(){
  if (!CFG) return null;
  var ipLines = [], domLines = [];
  String($('f-preferred').value).split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){
    if (parseIps(s).length) ipLines.push(s); else domLines.push(s);
  });
  var ips = [], seen = {};
  ipLines.forEach(function(s){
    var p = parseIps(s);
    if (!p.length) return;
    var k = p[0].ip + ':' + (p[0].port || 443);
    if (seen[k]) return;
    seen[k] = 1;
    ips.push(p[0]);
  });
  return {
    uuid: $('a-uuid').value.trim(),
    path: $('a-path').value.trim() || $('a-uuid').value.trim(),
    subUrl: $('a-suburl').value.trim(),
    admin: $('a-admin').value,
    host: $('a-host').value.trim(),
    alpn: $('alpn').value,
    ech: $('ech-on').checked,
    echHost: $('ech-host').value.trim() || 'cloudflare-ech.com',
    echDns: $('ech-dns').value.trim(),
    tlsOnly: $('tls-only').checked,
    nodeLimit: $('q-nl-on').checked,
    nodeLimitCount: parseInt($('q-nl-count').value) || 500,
    polling: $('q-poll-on').checked,
    loadBalance: $('q-lb-on').checked,
    probeAlive: $('q-probe-on').checked,
    cfAccountId: $('a-cfid').value.trim(),
    cfApiToken: $('a-cftoken').value.trim(),
    quotaAuto: $('q-auto-on').checked,
    enableVless: $('en-vless').checked,
    enableTrojan: $('en-trojan').checked,
    trojanPassword: $('tp-pass').value,
    enableXhttp: $('en-xhttp').checked,
    proxyIP: $('s-proxyIP').value.trim(),
    outboundProxy: $('s-outbound').value.trim(),
    outboundMode: $('s-outmode').value,
    preferredDomains: domLines.join('\n'),
    preferredIPs: ips,
    optimizer: {
      source: $('o-source').value,
      sourceURL: $('o-sourceURL').value.trim(),
      port: parseInt($('o-port').value === 'custom' ? $('o-portC').value : $('o-port').value) || 443,
      threads: parseInt($('o-threads').value) || 5,
      count: parseInt($('o-count').value) || 20,
      fillCount: parseInt($('o-fill').value) || 0,
      useCidr: $('o-useCidr').checked,
      subMode: $('o-submode').value,
      subRandomCount: parseInt($('o-rand').value) || 16,
      subIncludeDefault: $('o-subinc').value === '1'
    },
    filter: {
      region: (function(){
        if ($('fl-region-all').checked) return ['all'];
        var a = [];
        ['HK', 'TW', 'US', 'SG', 'JP', 'KR', 'DE'].forEach(function(r){ if ($('fl-region-' + r).checked) a.push(r); });
        return a.length ? a : ['all'];
      })(),
      ipType: (function(){ var a = []; if ($('fl-ip4').checked) a.push('IPv4'); if ($('fl-ip6').checked) a.push('IPv6'); return a; })(),
      isp: (function(){ var a = []; if ($('fl-isp-m').checked) a.push('移动'); if ($('fl-isp-c').checked) a.push('联通'); if ($('fl-isp-t').checked) a.push('电信'); return a; })()
    },
    src: {
      native: $('fl-native').checked,
      prefDomain: $('fl-pref-domain').checked,
      prefIp: $('fl-pref-ip').checked,
      customPref: $('fl-custom-pref').checked
    }
  };
}
function saveAll(){
  if (!CFG){ toast('配置尚未加载', 'err'); return; }
  var body = collectForm();
  var btn = $('saveBtn');
  btn.disabled = true;
  api('config', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    .then(function(r){
      if (r && r.ok){
        CFG = r.data;
        fillForm();
        renderAll();
        makeSub(false);
        refreshQuota();
        btn.classList.remove('dirty');
        $('savedAt').textContent = '已保存：' + new Date().toLocaleTimeString();
        toast('已保存并生效', 'ok');
      } else toast((r && r.msg) || '保存失败', 'err');
    })
    .catch(function(){ toast('保存失败：无法连接服务器', 'err'); })
    .then(function(){ btn.disabled = false; });
}
function resetAll(){
  if (!confirm('确定重置？将清空 KV 中全部面板配置与节点记录，面板还原为初始部署状态。此操作不可恢复！')) return;
  var btn = $('resetBtn');
  btn.disabled = true;
  api('reset', { method: 'POST' })
    .then(function(r){
      if (r && r.ok){ toast(r.msg || '已重置', 'ok'); setTimeout(function(){ location.reload(); }, 900); }
      else toast((r && r.msg) || '重置失败', 'err');
    })
    .catch(function(){ toast('重置失败：无法连接服务器', 'err'); })
    .then(function(){ btn.disabled = false; });
}
function genUuid(){
  var u = '';
  if (window.crypto && crypto.randomUUID){ u = crypto.randomUUID(); }
  else {
    var tpl = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    u = tpl.replace(/[xy]/g, function(c){
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 3 | 8);
      return v.toString(16);
    });
  }
  $('a-uuid').value = u;
  markDirty();
  toast('已生成新 UUID', 'ok');
}
// 备份：把当前面板表单值收集成 JSON 下载（与保存配置同一套字段，恢复后可直接保存）
function exportConfig(){
  try {
    var data = collectForm();
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    var ts = new Date();
    var pad = function(n){ return String(n).padStart(2, '0'); };
    a.download = 'cfnext-backup-' + ts.getFullYear() + pad(ts.getMonth()+1) + pad(ts.getDate()) + '-' + pad(ts.getHours()) + pad(ts.getMinutes()) + '.json';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function(){ URL.revokeObjectURL(a.href); }, 1000);
    toast('配置已导出为 JSON', 'ok');
  } catch (e) { toast('导出失败：' + e.message, 'err'); }
}
// 恢复：读取 JSON 填充表单，标记未保存，由用户点「保存全部」写盘
function importConfig(input){
  var file = input.files && input.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(){
    try {
      var data = JSON.parse(reader.result);
      CFG = Object.assign({}, CFG, data);
      fillForm();
      renderAll();
      markDirty();
      toast('配置已导入，请点「保存全部」生效', 'ok');
    } catch (e) { toast('导入失败：JSON 格式不正确', 'err'); }
    input.value = '';
  };
  reader.readAsText(file, 'utf-8');
}
document.querySelectorAll('input,select,textarea').forEach(function(el){
  var id = el.id || '';
  var prefixes = ['f-', 'o-', 'a-', 's-', 'q-', 'e-', 't-', 'fl-', 'en-'];
  for (var i = 0; i < prefixes.length; i++){ if (id.indexOf(prefixes[i]) === 0){ el.addEventListener('change', markDirty); break; } }
});

/* ===== 订阅 ===== */
function subUrlOf(fmt){
  // 自定义订阅路径优先：自动保留当前域名（location.origin），只替换路径段；
  // 用户只填 UUID/别名段（如 AAZ），拼成 https://当前域名/AAZ/sub；留空用面板路径。
  // 填了 /sub 结尾或带前后斜杠时自动归一，格式后缀（clash/singbox 等）拼为 /sub/<格式>
  var custom = (window.CFG && CFG.subUrl) ? String(CFG.subUrl).trim().replace(/^\/+/, '').replace(/\/sub$/, '').replace(/\/+$/, '') : '';
  var base = custom ? (location.origin + '/' + custom) : (location.origin + APIPATH);
  var u = base + '/sub';
  return fmt ? (u + '/' + fmt) : u;
}
function makeSub(showQR){
  var fmt = $('subFmt').value;
  var url = subUrlOf(fmt === 'auto' ? '' : fmt);
  $('subUrl').value = url;
  if (showQR) showQRCode(url);
}
$('subFmt').addEventListener('change', function(){ makeSub(false); });
function toggleQR(){
  var w = $('qrWrap');
  if (w.style.display === 'block'){ w.style.display = 'none'; return; }
  showQRCode($('subUrl').value || subUrlOf(''));
}
function showQRCode(url){
  var w = $('qrWrap');
  w.style.display = 'block';
  if (typeof qrcode === 'undefined'){ w.innerHTML = '<div class="hint">二维码库加载失败，请直接复制链接</div>'; return; }
  try {
    var fmt = ($('subFmt') && $('subFmt').value) || 'auto';
    var q = qrcode(0, 'M');
    q.addData(qrPayloadOf(fmt, url));
    q.make();
    w.innerHTML = '<div class="qrbox">' + q.createImgTag(4, 10) + '</div>';
  } catch(e) { w.innerHTML = '<div class="hint">二维码生成失败：' + e.message + '</div>'; }
}
// 二维码内容随订阅格式（客户端）联动：
// Clash/Mihomo、Stash → clash://install-config（FlyClash / Clash Verge / Stash 扫码装订阅，配置名取订阅响应头 filename=CFNext）
// Sing-box → sing-box://import-remote-profile?url=...#CFNext（官方 scheme，# 后为配置文件名称）
// Surge → surge:///install-config（Surge 官方 scheme）
// auto / v2rayN+Shadowrocket / Loon / Quantumult X / 明文 → 直接使用订阅链接（Shadowrocket / Loon / QuanX 扫码识别）
function qrPayloadOf(fmt, url){
  var enc = encodeURIComponent(url);
  if (fmt === 'clash' || fmt === 'stash') return 'clash://install-config?url=' + enc;
  if (fmt === 'singbox') return 'sing-box://import-remote-profile?url=' + enc + '#CFNext';
  if (fmt === 'surge') return 'surge:///install-config?url=' + enc;
  return url;
}
function downloadSub(){
  var fmt = $('subFmt').value;
  var a = document.createElement('a');
  a.href = subUrlOf(fmt === 'auto' ? '' : fmt);
  a.download = 'cfnext-sub.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
}
function previewSub(){
  var fmt = $('subFmt').value;
  var box = $('subPrev');
  box.style.display = 'block';
  $('prevType').textContent = '请求中…';
  $('prevCount').textContent = '—';
  $('prevBody').textContent = '';
  api('sub?fmt=' + encodeURIComponent(fmt === 'auto' ? '' : fmt))
    .then(function(r){
      if (!r || !r.ok){ $('prevType').textContent = '预览失败'; $('prevBody').textContent = (r && r.msg) || '未知错误'; return; }
      var body = r.body || '';
      var type = r.type || '';
      $('prevType').textContent = type || '—';
      var n = 0;
      if (/clash|yaml/i.test(type)) n = (body.match(/- name:/g) || []).length;
      else if (/json/i.test(type)) n = (body.match(/"tag"/g) || []).length;
      else {
        var t = body;
        if (!/^(vless|trojan|ss|xhttp):\/\//m.test(t)) {
          try { t = atob(t); } catch (e) { /* 保持原样 */ }
        }
        n = t.split('\n').filter(function(l){ return /^(vless|trojan|ss|xhttp):\/\//.test(l.trim()); }).length;
      }
      $('prevCount').textContent = n + ' 个节点';
      $('prevBody').textContent = body.length > 2600 ? body.slice(0, 2600) + '\n…（已截断，完整内容请下载）' : body;
    })
    .catch(function(){ $('prevType').textContent = '预览失败：无法连接服务器'; $('prevBody').textContent = ''; });
}

/* ===== 优选配置 ===== */
function onPortSel(){
  var sel = $('o-port');
  var c = $('o-portC');
  c.style.display = sel.value === 'custom' ? '' : 'none';
}
function onSubMode(){
  var m = $('o-submode').value;
  $('sm-custom').style.display = (m === 'custom') ? '' : 'none';
  $('sm-random').style.display = (m === 'random') ? '' : 'none';
  // 「追加内置优选池与默认地区源」仅在自定义订阅 / 随机优选模式下可选；
  // 订阅模式关闭（使用面板默认节点池）时强制为关闭并禁用，避免默认模式下误开追加导致行为不符
  if (m === '') {
    $('o-subinc').value = '0';
    $('o-subinc').disabled = true;
  } else {
    $('o-subinc').disabled = false;
  }
  // 订阅模式与仪表盘「地址来源」胶囊互斥同步（三态全部明确跟随）：
  // custom → 自定义优选开、随机优选关；random → 随机优选开、自定义优选关；关闭 → 两个胶囊都关
  if (m === 'custom') {
    $('fl-custom-pref').checked = true;
    $('fl-random-pref').checked = false;
  } else if (m === 'random') {
    $('fl-custom-pref').checked = false;
    $('fl-random-pref').checked = true;
  } else {
    $('fl-custom-pref').checked = false;
    $('fl-random-pref').checked = false;
  }
}
// 仪表盘「地址来源 → 自定义优选」与优选配置「订阅模式」联动：
// 勾选 → 订阅模式切为「自定义订阅（支持汇聚）」并关闭随机优选；取消 → 订阅模式关闭（使用面板默认节点池）
$('fl-custom-pref').addEventListener('change', function(){
  if (this.checked) {
    $('fl-random-pref').checked = false;   // 与随机优选互斥
    $('o-submode').value = 'custom';
  } else {
    if ($('o-submode').value === 'custom') $('o-submode').value = '';
  }
  onSubMode();
});
// 仪表盘「地址来源 → 随机优选」与优选配置「订阅模式 → 随机优选模式（官方接口）」联动：
// 勾选 → 订阅模式切为 random 并关闭自定义优选；取消 → 订阅模式关闭（若当前为 random）
$('fl-random-pref').addEventListener('change', function(){
  if (this.checked) {
    $('fl-custom-pref').checked = false;   // 与自定义优选互斥
    $('o-submode').value = 'random';
  } else {
    if ($('o-submode').value === 'random') $('o-submode').value = '';
  }
  onSubMode();
});
$('o-source').addEventListener('change', function(){
  $('o-customWrap').style.display = ($('o-source').value === 'custom') ? '' : 'none';
});
function pingIp(ip, port, timeout){
  var t0 = Date.now();
  var addr = ip.indexOf(':') >= 0 ? '[' + ip + ']' : ip;
  var proto = (port === 80 || port === 8080 || port === 8880 || port === 2052 || port === 2082 || port === 2086 || port === 2095) ? 'http' : 'https';
  var ctrl = new AbortController();
  var timer = setTimeout(function(){ ctrl.abort(); }, timeout);
  return fetch(proto + '://' + addr + ':' + port + '/', { mode: 'no-cors', cache: 'no-store', redirect: 'manual', signal: ctrl.signal })
    .then(function(){ clearTimeout(timer); return { ok: true, latency: Date.now() - t0 }; })
    .catch(function(){
      clearTimeout(timer);
      var ms = Date.now() - t0;
      if (proto === 'http' && ms < 100) return pingHttps(ip, port, timeout);
      return { ok: ms < timeout, latency: ms };
    });
}
function pingHttps(ip, port, timeout){
  var t0 = Date.now();
  var addr = ip.indexOf(':') >= 0 ? '[' + ip + ']' : ip;
  var ctrl = new AbortController();
  var timer = setTimeout(function(){ ctrl.abort(); }, timeout);
  return fetch('https://' + addr + ':' + port + '/', { mode: 'no-cors', cache: 'no-store', redirect: 'manual', signal: ctrl.signal })
    .then(function(){ clearTimeout(timer); return { ok: true, latency: Date.now() - t0 }; })
    .catch(function(){ clearTimeout(timer); var ms = Date.now() - t0; return { ok: ms < timeout, latency: ms }; });
}
function localTest(cands, threads, timeout){
  var results = [], idx = 0, pending = 0;
  return new Promise(function(resolve){
    function next(){
      while (pending < threads && idx < cands.length) {
        (function(c){
          pending++;
          pingIp(c.ip, c.port, timeout).then(function(r){
            pending--;
            results.push({ ip: c.ip, port: c.port, ok: r.ok, latency: r.latency });
            if (results.length === cands.length) resolve(results);
            else next();
          });
        })(cands[idx++]);
      }
    }
    next();
  });
}
function runPick(){
  if (!CFG){ toast('配置尚未加载', 'err'); return; }
  var o = collectForm().optimizer;
  showMsg('oMsg', '正在拉取候选 IP…', 'info');
  api('candidates', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(o) })
    .then(function(r){
      if (!r || !r.ok){ showMsg('oMsg', (r && r.msg) || '拉取失败', 'err'); return; }
      var cands = r.data || [];
      if (!cands.length){ showMsg('oMsg', (r && r.msg) || '没有可测的 IP，请换一个数据源', 'err'); return; }
      var st = r.stats || {};
      var parts = [];
      if (st.preset) parts.push('预设源 ' + st.preset + ' 条');
      if (st.presetErr) parts.push('预设源失败(' + st.presetErr + ')');
      if (st.custom) parts.push('自定义源 ' + st.custom + ' 条');
      if (st.customErr) parts.push('自定义源失败(' + st.customErr + ')');
      if (st.cidr) parts.push('CF 补足 ' + st.cidr + ' 条');
      showMsg('oMsg', '拉取 ' + cands.length + ' 条（' + (parts.join('，') || '无') + '），本地测速中…', 'info');
      localTest(cands, o.threads || 5, 3000).then(function(results){
        results.sort(function(a, b){ return (a.latency < 0 ? 1e9 : a.latency) - (b.latency < 0 ? 1e9 : b.latency); });
        renderResults(results);
        var okc = results.filter(function(x){ return x.ok; }).length;
        showMsg('oMsg', '测速完成：' + okc + '/' + results.length + ' 可用（本地 → 目标）', okc ? 'ok' : 'err');
      });
    })
    .catch(function(){ showMsg('oMsg', '拉取失败：无法连接服务器', 'err'); });
}
function renderResults(list){
  var seen = {};
  var dedup = [];
  (list || []).forEach(function(r){
    if (seen[r.ip]) return;
    seen[r.ip] = 1;
    dedup.push(r);
  });
  LAST = dedup;
  var tb = $('oTableBody');
  tb.innerHTML = '';
  if (!LAST.length){ tb.innerHTML = '<tr><td colspan="4" style="text-align:center;color:var(--faint)">没有可用结果</td></tr>'; return; }
  LAST.forEach(function(r, i){
    var tr = document.createElement('tr');
    var ok = r.ok;
    var lag = ok ? (r.latency + 'ms') : '超时';
    var badge = '<span class="badge ' + (ok ? 'g' : 'r') + '">' + (ok ? '可用' : '超时') + '</span>';
    var btn = ok ? '<button class="btn sm primary" onclick="useIp(' + i + ')">加入优选</button>' : '<span style="color:var(--faint)">—</span>';
    tr.innerHTML = '<td class="ip">' + r.ip + ':' + r.port + '</td><td>' + lag + '</td><td>' + badge + '</td><td>' + btn + '</td>';
    tb.appendChild(tr);
  });
}
function useIp(i){
  var r = LAST[i];
  if (!r) return;
  var ta = $('f-preferred');
  var line = r.ip + ':' + r.port + (r.name ? ('#' + r.name) : '');
  var exists = false;
  String(ta.value || '').split(/[\n,;]+/).forEach(function(s){
    var p = parseIps(s);
    if (p.length && p[0].ip === r.ip) exists = true;
  });
  if (exists){ toast('该 IP 已在优选列表中', 'warn'); return; }
  var s = ta.value.trim();
  ta.value = s ? (s + '\n' + line) : line;
  markDirty();
  toast('已加入优选列表，点击「保存全部」下发', 'ok');
}
function addAllBest(){
  var n = parseInt($('o-count').value) || 20;
  var seen = {};
  var list = [];
  LAST.filter(function(r){ return r.ok; }).forEach(function(r){
    if (seen[r.ip] || list.length >= n) return;
    seen[r.ip] = 1;
    list.push(r);
  });
  if (!list.length){ toast('没有可用结果', 'err'); return; }
  var arr = [];
  list.forEach(function(r, i){ arr.push(r.ip + ':' + r.port + '#优选' + (i + 1)); });
  $('f-preferred').value = arr.join('\n');
  markDirty();
  toast('已加入最快的 ' + list.length + ' 个优选 IP，点击「保存全部」下发', 'ok');
}
function fetchDomains(){
  api('domains').then(function(r){
    if (r && r.ok && r.data && r.data.length){ $('f-preferred').value = r.data.join('\n'); markDirty(); toast('已拉取优选域名', 'ok'); }
    else toast((r && r.msg) || '拉取失败', 'err');
  }).catch(function(){ toast('拉取失败：无法连接服务器', 'err'); });
}

/* ===== 启动 ===== */
buildNav();
var initView = 'dashboard';
try {
  var qv = new URLSearchParams(location.search).get('v');
  if (qv && TITLES[qv]) initView = qv;
} catch(e) {}
switchView(initView);
loadAll();
</script>
</body>
</html>

`,loginHTML=_0x193e21(0x1bb),setupHTML=_0x193e21(0x48f);function needSetup(_0x177e66,_0x231099){const _0x142b49=_0x193e21;return!_0x177e66[_0x142b49(0x3b0)]&&!_0x177e66[_0x142b49(0x2cd)]&&!!(_0x231099['K']&&typeof _0x231099['K'][_0x142b49(0x415)]===_0x142b49(0x28d));}function isBrowserUA(_0x50cfb3){const _0x3b170d=_0x193e21;return(_0x50cfb3||'')['toLowerCase']()[_0x3b170d(0x363)](_0x3b170d(0x3ff));}async function requireAuth(_0x5c9d7a,_0x2a571e){const _0x5c748c=_0x193e21;if(!_0x2a571e[_0x5c748c(0x3b0)])return!![];const _0x7074d1=_0x5c9d7a[_0x5c748c(0x368)][_0x5c748c(0x415)](_0x5c748c(0x2e8))||'',_0x37bb45=_0x7074d1['match'](/(?:^|;\s*)luma_auth=([^;]+)/);return!!(_0x37bb45&&_0x37bb45[0x1]===md5hex(String(_0x2a571e[_0x5c748c(0x3b0)])));}async function handleRequest(_0x1fce60,_0x2f9c35){const _0x96c5de=_0x193e21,_0x38c270=new URL(_0x1fce60[_0x96c5de(0x2d7)]),_0x5bd335=_0x1fce60[_0x96c5de(0x368)][_0x96c5de(0x415)](_0x96c5de(0x3a0))||'',_0x40e93a=(_0x1fce60[_0x96c5de(0x368)][_0x96c5de(0x415)](_0x96c5de(0x3e7))||'')[_0x96c5de(0x4d2)]();if(_0x38c270['protocol']===_0x96c5de(0x430))return Response['redirect'](_0x38c270[_0x96c5de(0x43d)][_0x96c5de(0x411)]('http://',_0x96c5de(0x44f)),0x12d);const _0xd8a3b7=await loadConfig(_0x2f9c35),_0x2ac766=_0xd8a3b7[_0x96c5de(0x4af)]||_0xd8a3b7['uuid'],_0x2752ae=_0x38c270[_0x96c5de(0x1cd)][_0x96c5de(0x411)](/^\/+|\/+$/g,''),_0x3fa86b=_0x2752ae['split']('/');if(_0x3fa86b[0x0]==='version')return json({'version':VERSION});if(_0x3fa86b[0x0]===_0x96c5de(0x1f9)){const _0x1f8dbd=!_0xd8a3b7[_0x96c5de(0x3b0)]&&needSetup(_0xd8a3b7,_0x2f9c35);if(_0x1fce60['method']===_0x96c5de(0x47c)){const _0x1192ba=await _0x1fce60['text'](),_0x474d83=new URLSearchParams(_0x1192ba);if(_0x1f8dbd){const _0x40ee2a=String(_0x474d83[_0x96c5de(0x415)](_0x96c5de(0x4ec))||'');if(_0x40ee2a[_0x96c5de(0x283)]<0x4)return json({'ok':![],'msg':'密码至少\x204\x20位'},0x190);const _0x38e20e=JSON[_0x96c5de(0x4e5)](JSON['stringify'](_0xd8a3b7));_0x38e20e[_0x96c5de(0x3b0)]=_0x40ee2a,_0x38e20e['adminInit']=!![];if(!await saveConfig(_0x2f9c35,_0x38e20e))return json({'ok':![],'msg':'未绑定\x20KV\x20命名空间，无法保存管理密码'},0x1f4);const _0x435136=md5hex(_0x40ee2a);return new Response(JSON[_0x96c5de(0x44b)]({'ok':!![],'next':_0x474d83['get']('next')||'/'}),{'status':0xc8,'headers':{'Content-Type':_0x96c5de(0x27a),'Set-Cookie':_0x96c5de(0x44c)+_0x435136+';\x20Path=/;\x20Max-Age=86400;\x20HttpOnly;\x20Secure;\x20SameSite=Lax'}});}if(_0x474d83['get'](_0x96c5de(0x4ec))===_0xd8a3b7['admin']){const _0x5e4110=md5hex(String(_0xd8a3b7[_0x96c5de(0x3b0)]));return new Response(JSON[_0x96c5de(0x44b)]({'ok':!![],'next':_0x474d83[_0x96c5de(0x415)](_0x96c5de(0x443))||'/'}),{'status':0xc8,'headers':{'Content-Type':'application/json;\x20charset=utf-8','Set-Cookie':_0x96c5de(0x44c)+_0x5e4110+_0x96c5de(0x1ed)}});}return json({'ok':![],'msg':_0x96c5de(0x23d)},0x193);}if(_0xd8a3b7[_0x96c5de(0x3b0)])return new Response(loginHTML,{'status':0xc8,'headers':{'Content-Type':_0x96c5de(0x2fd)}});if(_0x1f8dbd)return new Response(setupHTML,{'status':0xc8,'headers':{'Content-Type':_0x96c5de(0x2fd)}});return Response['redirect'](new URL('/'+_0x2ac766,_0x1fce60[_0x96c5de(0x2d7)])[_0x96c5de(0x43d)],0x12e);}const _0x289e64=String(_0xd8a3b7[_0x96c5de(0x3f7)]||'')[_0x96c5de(0x34f)]()['replace'](/^\/+/,'')[_0x96c5de(0x411)](/\/+$/,''),_0xffb095=_0x3fa86b[0x0]===_0x2ac766||!!_0x289e64&&_0x3fa86b[0x0]===_0x289e64;if(_0x3fa86b[0x0]===''&&isBrowserUA(_0x5bd335))return Response[_0x96c5de(0x29f)](new URL('/'+_0x2ac766,_0x1fce60[_0x96c5de(0x2d7)])[_0x96c5de(0x43d)],0x12e);if(_0xffb095&&_0x3fa86b['length']===0x1){if(_0x40e93a==='websocket')return handleWebSocketProxy(_0x1fce60,_0xd8a3b7);if(_0x1fce60[_0x96c5de(0x312)]===_0x96c5de(0x47c)){if(_0xd8a3b7[_0x96c5de(0x2fe)])try{return await handleXhttpProxy(_0x1fce60,_0xd8a3b7);}catch(_0x5a69b4){return json({'ok':![],'msg':_0x96c5de(0x3dc)+(_0x5a69b4[_0x96c5de(0x28a)]||_0x5a69b4)},0x1f4);}}}if(_0xffb095&&(_0x3fa86b[0x1]===_0x96c5de(0x237)||_0x3fa86b[_0x96c5de(0x283)]===0x1&&!isBrowserUA(_0x5bd335)&&!_0x5bd335[_0x96c5de(0x1ec)](_0x96c5de(0x1f3)))){const _0x344c23=_0x3fa86b['length']>=0x3?_0x3fa86b[0x2]:'';try{let _0x1259dc=null;if(_0xd8a3b7[_0x96c5de(0x353)]!==![]&&_0x2f9c35['K']&&typeof _0x2f9c35['K'][_0x96c5de(0x415)]===_0x96c5de(0x28d))try{const _0x31bb04=await _0x2f9c35['K'][_0x96c5de(0x415)](_0x96c5de(0x3d0));if(_0x31bb04){const _0x12e93f=JSON[_0x96c5de(0x4e5)](_0x31bb04);if(Array[_0x96c5de(0x266)](_0x12e93f[_0x96c5de(0x348)])&&_0x12e93f['ips']['length'])_0x1259dc=new Set(_0x12e93f[_0x96c5de(0x348)]);}}catch(_0x187c76){}const _0x2ed9d6=_0x1259dc?Object[_0x96c5de(0x2a5)]({},_0xd8a3b7,{'_skipIssued':_0x1259dc}):_0xd8a3b7;if(_0xd8a3b7[_0x96c5de(0x4e9)])try{const _0x6cda49=await getQuota(_0x2f9c35,_0xd8a3b7);if(_0x6cda49['configured']&&_0x6cda49[_0x96c5de(0x468)]&&_0x6cda49[_0x96c5de(0x468)][_0x96c5de(0x3ac)]>=Math['round'](QUOTA_LIMIT*0.6)){const _0x1f830d=_0x6cda49[_0x96c5de(0x468)][_0x96c5de(0x3ac)]/_0x6cda49[_0x96c5de(0x19a)],_0x32d9bb=Math[_0x96c5de(0x344)](0.1,(0x1-_0x1f830d)/0.4);_0x2ed9d6['_quotaCap']=Math['max'](0x14,Math[_0x96c5de(0x250)](0x3e8*_0x32d9bb));}}catch(_0x714a2f){}const _0x266ad6=await generateSubscription(_0x2ed9d6,_0x1fce60[_0x96c5de(0x2d7)],_0x344c23,_0x5bd335,_0x1fce60['cf']&&_0x1fce60['cf']['colo'],_0x2f9c35);if(_0xd8a3b7[_0x96c5de(0x353)]!==![]&&_0x2f9c35['K']&&typeof _0x2f9c35['K'][_0x96c5de(0x4eb)]===_0x96c5de(0x28d)&&_0x266ad6[_0x96c5de(0x3d0)]&&_0x266ad6[_0x96c5de(0x3d0)][_0x96c5de(0x283)]){const _0x408540=_0x1259dc?Array['from'](_0x1259dc):[],_0x12af6d=[...new Set([..._0x266ad6[_0x96c5de(0x3d0)],..._0x408540])][_0x96c5de(0x1ab)](0x0,0xc8),_0x9fe831=_0x12af6d[_0x96c5de(0x283)]!==_0x408540[_0x96c5de(0x283)]||_0x12af6d[_0x96c5de(0x3f4)]((_0x5955cd,_0x49f0e8)=>_0x5955cd!==_0x408540[_0x49f0e8]);if(_0x9fe831){const _0x3ba056=JSON['stringify']({'t':Date['now'](),'ips':_0x12af6d});if(_0x2f9c35['_ctx']&&typeof _0x2f9c35[_0x96c5de(0x3b7)]['waitUntil']===_0x96c5de(0x28d))_0x2f9c35[_0x96c5de(0x3b7)][_0x96c5de(0x3a4)](_0x2f9c35['K'][_0x96c5de(0x4eb)](_0x96c5de(0x3d0),_0x3ba056)['catch'](()=>{}));else await _0x2f9c35['K']['put'](_0x96c5de(0x3d0),_0x3ba056)[_0x96c5de(0x45c)](()=>{});}}return new Response(_0x266ad6['body'],{'status':0xc8,'headers':{'Content-Type':_0x266ad6[_0x96c5de(0x40b)]+_0x96c5de(0x46c),'Cache-Control':_0x96c5de(0x48b),'Content-Disposition':_0x96c5de(0x2a4)}});}catch(_0x4b31e9){return new Response(_0x96c5de(0x310)+(_0x4b31e9&&_0x4b31e9[_0x96c5de(0x28a)]||_0x4b31e9),{'status':0x1f4,'headers':{'Content-Type':'text/plain;\x20charset=utf-8'}});}}if(_0xffb095&&_0x3fa86b['length']===0x1&&isBrowserUA(_0x5bd335)){if(needSetup(_0xd8a3b7,_0x2f9c35))return Response[_0x96c5de(0x29f)](new URL(_0x96c5de(0x41b)+encodeURIComponent('/'+_0x2ac766),_0x1fce60[_0x96c5de(0x2d7)])[_0x96c5de(0x43d)],0x12e);if(!await requireAuth(_0x1fce60,_0xd8a3b7))return Response[_0x96c5de(0x29f)](new URL(_0x96c5de(0x23f)+encodeURIComponent('/'+_0x2ac766),_0x1fce60[_0x96c5de(0x2d7)])[_0x96c5de(0x43d)],0x12e);return new Response(PANEL_HTML,{'status':0xc8,'headers':{'Content-Type':_0x96c5de(0x2fd)}});}if(_0xffb095&&_0x3fa86b[0x1]===_0x96c5de(0x3a6)){const _0x3889e5=_0x3fa86b[0x2]||'';if(needSetup(_0xd8a3b7,_0x2f9c35))return json({'ok':![],'status':0x193,'msg':_0x96c5de(0x2f8)},0x193);const _0x1d2258=await requireAuth(_0x1fce60,_0xd8a3b7);if(!_0x1d2258)return json({'ok':![],'status':0x193,'msg':_0x96c5de(0x4e1)},0x193);if(_0x3889e5==='config'){if(_0x1fce60[_0x96c5de(0x312)]==='GET')return json({'ok':!![],'data':Object[_0x96c5de(0x2a5)]({},_0xd8a3b7,{'version':VERSION})});if(_0x1fce60[_0x96c5de(0x312)]===_0x96c5de(0x47c))try{const _0x186677=await _0x1fce60['json']();let _0x2e059b=![];if(_0x2f9c35['K']&&typeof _0x2f9c35['K'][_0x96c5de(0x415)]===_0x96c5de(0x28d))try{const _0x1eef41=await _0x2f9c35['K'][_0x96c5de(0x415)](_0x96c5de(0x26f),{'cacheTtl':0x1e});if(_0x1eef41){const _0x244e5e=JSON[_0x96c5de(0x4e5)](_0x1eef41);if(_0x244e5e[_0x96c5de(0x4e9)]!==undefined)_0x2e059b=!![];}}catch(_0x4cdc7a){}const _0x2211bf=Object[_0x96c5de(0x2a5)](JSON[_0x96c5de(0x4e5)](JSON['stringify'](_0xd8a3b7)),_0x186677);if(!_0x2e059b&&_0x2211bf[_0x96c5de(0x4e9)]===![]){const _0x5c3ca5=Boolean(_0x2211bf['cfAccountId']&&_0x2211bf[_0x96c5de(0x22a)]||_0x2f9c35[_0x96c5de(0x32b)]&&_0x2f9c35[_0x96c5de(0x2f1)]);if(_0x5c3ca5)_0x2211bf[_0x96c5de(0x4e9)]=!![];}if(_0x186677['optimizer']&&typeof _0x186677[_0x96c5de(0x3da)]===_0x96c5de(0x2e9))_0x2211bf[_0x96c5de(0x3da)]=Object['assign'](_0x2211bf[_0x96c5de(0x3da)],_0x186677[_0x96c5de(0x3da)]);if(_0x186677[_0x96c5de(0x3cc)]&&Array['isArray'](_0x186677[_0x96c5de(0x3cc)]))_0x2211bf['preferredIPs']=_0x186677[_0x96c5de(0x3cc)];await saveConfig(_0x2f9c35,_0x2211bf);const _0x39a40d=await loadConfig(_0x2f9c35,_0x1fce60['url']);return json({'ok':!![],'data':Object[_0x96c5de(0x2a5)]({},_0x39a40d,{'version':VERSION}),'msg':_0x96c5de(0x336)});}catch(_0x719259){return json({'ok':![],'msg':'保存失败:\x20'+(_0x719259[_0x96c5de(0x28a)]||_0x719259)},0x1f4);}}if(_0x3889e5==='reset'){if(_0x1fce60['method']!==_0x96c5de(0x47c))return json({'ok':![],'msg':_0x96c5de(0x274)},0x195);try{if(!_0x2f9c35['K']||typeof _0x2f9c35['K'][_0x96c5de(0x21b)]!=='function')return json({'ok':![],'msg':_0x96c5de(0x1ce)},0x190);return await _0x2f9c35['K'][_0x96c5de(0x21b)](_0x96c5de(0x26f)),await _0x2f9c35['K'][_0x96c5de(0x21b)](_0x96c5de(0x3d0)),invalidateConfigCache(),json({'ok':!![],'msg':_0x96c5de(0x2b7)});}catch(_0x378573){return json({'ok':![],'msg':_0x96c5de(0x2a6)+(_0x378573[_0x96c5de(0x28a)]||_0x378573)},0x1f4);}}if(_0x3889e5==='status')return json({'ok':!![],'data':{'version':VERSION,'kind':deployKind()==='obfuscated'?'混淆版':_0x96c5de(0x325),'host':_0x38c270[_0x96c5de(0x4a7)],'path':_0x2ac766,'region':_0x1fce60['cf']&&_0x1fce60['cf'][_0x96c5de(0x1e1)]||_0x96c5de(0x4da),'kv':!!(_0x2f9c35['K']&&typeof _0x2f9c35['K'][_0x96c5de(0x415)]===_0x96c5de(0x28d)),'workersDev':/\.workers\.dev$/i[_0x96c5de(0x495)](_0x38c270['hostname'])}});if(_0x3889e5===_0x96c5de(0x42d))try{const _0xe0e017=await checkUpdate(_0x2f9c35),_0x9e87d7={'current':_0xe0e017[_0x96c5de(0x2b3)],'latest':_0xe0e017[_0x96c5de(0x38a)],'hasUpdate':_0xe0e017[_0x96c5de(0x4cb)],'kind':_0xe0e017[_0x96c5de(0x436)],'error':_0xe0e017[_0x96c5de(0x2d9)]||''};if(_0xe0e017[_0x96c5de(0x4cb)]&&_0xe0e017['code'])_0x9e87d7[_0x96c5de(0x280)]=_0xe0e017[_0x96c5de(0x280)];return json({'ok':!![],'data':_0x9e87d7});}catch(_0x4c5d18){return json({'ok':![],'msg':_0x96c5de(0x1c1)+(_0x4c5d18[_0x96c5de(0x28a)]||_0x4c5d18)},0x1f4);}if(_0x3889e5===_0x96c5de(0x385))try{const _0x592d04=await getQuota(_0x2f9c35,_0xd8a3b7);return json({'ok':!![],'data':_0x592d04});}catch(_0x153030){return json({'ok':![],'msg':_0x96c5de(0x37c)+(_0x153030[_0x96c5de(0x28a)]||_0x153030)},0x1f4);}if(_0x3889e5===_0x96c5de(0x237)){const _0x13b173=_0x38c270[_0x96c5de(0x2ab)][_0x96c5de(0x415)](_0x96c5de(0x491))||'';try{const _0x2d1223=await generateSubscription(_0xd8a3b7,_0x1fce60[_0x96c5de(0x2d7)],_0x13b173,_0x5bd335,_0x1fce60['cf']&&_0x1fce60['cf'][_0x96c5de(0x1e1)],_0x2f9c35);return json({'ok':!![],'type':_0x2d1223[_0x96c5de(0x40b)],'body':_0x2d1223[_0x96c5de(0x418)]});}catch(_0x5349fd){return json({'ok':![],'msg':'订阅生成失败:\x20'+(_0x5349fd[_0x96c5de(0x28a)]||_0x5349fd)},0x1f4);}}if(_0x3889e5==='candidates'){if(_0x1fce60[_0x96c5de(0x312)]!==_0x96c5de(0x47c))return json({'ok':![],'msg':_0x96c5de(0x274)},0x195);try{const _0x4b0f92=await _0x1fce60[_0x96c5de(0x2d1)]()['catch'](()=>({})),_0x44ae14=await collectCandidates(Object['assign']({},_0xd8a3b7[_0x96c5de(0x3da)],_0x4b0f92));if(!_0x44ae14[_0x96c5de(0x27e)][_0x96c5de(0x283)]){const _0x4b1bc1=_0x44ae14[_0x96c5de(0x1f0)]||{},_0x2bfa68=[_0x4b1bc1[_0x96c5de(0x3ae)]&&_0x96c5de(0x402)+_0x4b1bc1[_0x96c5de(0x3ae)],_0x4b1bc1[_0x96c5de(0x482)]&&'自定义源:\x20'+_0x4b1bc1[_0x96c5de(0x482)]]['filter'](Boolean)[_0x96c5de(0x2b6)]('；');return json({'ok':![],'msg':_0x96c5de(0x2e6)+(_0x2bfa68?'（'+_0x2bfa68+'）':_0x96c5de(0x4cf))},0x190);}return json({'ok':!![],'data':_0x44ae14[_0x96c5de(0x27e)],'stats':_0x44ae14['stats']});}catch(_0x1e768f){return json({'ok':![],'msg':_0x96c5de(0x2f7)+(_0x1e768f['message']||_0x1e768f)},0x1f4);}}if(_0x3889e5==='domains')try{const _0x64f970=OPTIMIZE_SOURCES[_0x38c270[_0x96c5de(0x2ab)][_0x96c5de(0x415)](_0x96c5de(0x2a0))||_0x96c5de(0x298)]||OPTIMIZE_SOURCES[_0x96c5de(0x298)],_0xaad3d8=await fetch(_0x64f970['url'],{'headers':{'User-Agent':_0x96c5de(0x2ea)}});if(!_0xaad3d8['ok'])return json({'ok':![],'msg':'拉取失败\x20HTTP\x20'+_0xaad3d8[_0x96c5de(0x24e)]});const _0x216f9c=extractDomains(await _0xaad3d8[_0x96c5de(0x370)]());return json({'ok':!![],'data':_0x216f9c});}catch(_0x931c25){return json({'ok':![],'msg':'拉取失败:\x20'+(_0x931c25[_0x96c5de(0x28a)]||_0x931c25)},0x1f4);}return json({'ok':![],'msg':_0x96c5de(0x1f8)+_0x3889e5},0x194);}return new Response(_0x96c5de(0x398),{'status':0x194});}async function handleScheduled(_0x265b36,_0x5bbfbf,_0x5200d7){const _0x351c5a=_0x193e21,_0x509662=String(_0x5bbfbf[_0x351c5a(0x2cc)]||'')[_0x351c5a(0x4d2)]();if(_0x509662!=='1'&&_0x509662!==_0x351c5a(0x2a8))return;try{const _0xad1afb=await loadConfig(_0x5bbfbf),_0x3260c1=await collectCandidates(_0xad1afb[_0x351c5a(0x3da)]),_0x2c465a=_0x3260c1[_0x351c5a(0x27e)]||[];if(!_0x2c465a[_0x351c5a(0x283)])return;const _0x397fa5=await runLatencyTest(_0x2c465a,_0xad1afb['optimizer'][_0x351c5a(0x2fc)]||0x5,0x1388),_0x3f5201=_0x397fa5[_0x351c5a(0x4c3)](_0x11231e=>_0x11231e['ok'])['slice'](0x0,_0xad1afb[_0x351c5a(0x3da)][_0x351c5a(0x19f)]||0x14);if(!_0x3f5201[_0x351c5a(0x283)])return;const _0x115d55=_0x3f5201[_0x351c5a(0x209)](_0x96e6bf=>({'ip':_0x96e6bf['ip'],'port':_0x96e6bf[_0x351c5a(0x21c)]||0x1bb,'name':''})),_0x2edf96=new Set((_0xad1afb[_0x351c5a(0x3cc)]||[])[_0x351c5a(0x209)](_0x4412c1=>_0x4412c1['ip'])),_0x2ad123=new Set(_0x115d55[_0x351c5a(0x209)](_0x1f96f0=>_0x1f96f0['ip']));if(_0x2edf96['size']===_0x2ad123[_0x351c5a(0x3b2)]&&[..._0x2ad123]['every'](_0x6ef11=>_0x2edf96[_0x351c5a(0x32d)](_0x6ef11)))return;_0xad1afb[_0x351c5a(0x3cc)]=_0x115d55,await saveConfig(_0x5bbfbf,_0xad1afb);}catch(_0x58f083){}}export default{async 'fetch'(_0x587037,_0x2ea70f,_0x327044){const _0x4e271e=_0x193e21;return handleRequest(_0x587037,Object[_0x4e271e(0x2a5)]({},_0x2ea70f,{'_ctx':_0x327044}));},async 'scheduled'(_0x382ca8,_0x26505f,_0x4f22d5){return handleScheduled(_0x382ca8,_0x26505f,_0x4f22d5);}};