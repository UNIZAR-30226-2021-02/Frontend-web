<template>
    <component :is="routedComponent"></component>
</template>

<script>
import SingIn from './HelloWorld';
import SingUp from './singUp';

const routes = {
    "/HelloWorld": SingIn,
    "/singUp": SingUp
};

export default {
    data(){
        return {current: window.location.pathname};
    }, computed: {
        routedComponent(){
            return routes[this.current];
        }
    },
    render(createElement){
        return createElement(this.routedComponent);
    }
};

</script>
