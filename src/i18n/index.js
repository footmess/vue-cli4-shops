import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
const i18n = new VueI18n({
	local: 'cn',
	// this.$i18n.locale
	// 通过切换locale的值来实现语言切换
	messages: {
		cn: require('@/lang/cn.js'),
		en: require('@/lang/en.js')
	}
});

export default i18n;
