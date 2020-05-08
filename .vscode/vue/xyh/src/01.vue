<div id ="vue">
  <h1>
    site:{{site}};
    url:{{url}};
    {{details()}};
  </h1>
</div>
<script>
    var vm = new Vue({
        el:'#vuedet',
        data:{
            site:"cn",
            url:"www",
            alexa:"10000"
        },
        methods:{
            details:function(){
                return this.site+"dream";
            }
        }
    })
</script>