import Vue from 'vue'
import App from './App.vue'

let VueFormGenerator = require("vue-form-generator");
// Fix between local and exported project
if (VueFormGenerator.default) {
	VueFormGenerator = VueFormGenerator.default;
}

const { fieldChecklist } = VueFormGenerator.fieldsLoader;

Vue.use(VueFormGenerator, {
	fields: [fieldChecklist]
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
