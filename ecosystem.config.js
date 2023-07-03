// eslint-disable-next-line no-undef
module.exports ={ 
  "apps":
  [{
    "name"      : "entregable",
    "script"    : "src/index.js",
    "instances" : 2,
    "exec_mode" : "cluster",
    "watch"     : true
  }]
}

