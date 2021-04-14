const ax = require('axios');
const url="http://vue.api.comcto.com/api/helloworld.php"
ax.get(url).then(function(d){
  console.log(d.status)
  console.log(d.data)
})

