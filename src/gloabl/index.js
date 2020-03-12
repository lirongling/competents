// 用来注册全局组件
import Vue from 'vue'
import LButton from '../components/button/LButton'
import Menu from '../components/com/Menu'
import MenuItem from '../components/com/MenuItem'
import Divider from '../components/Divider'
import Trends from '../components/Trend'
import Input from '../components/com/Input'
Vue.component('LButton', LButton)
Vue.component('Menus', Menu)
Vue.component('MenuItems', MenuItem)
Vue.component('Dividers', Divider)
Vue.component('Trends', Trends)
Vue.component('Inputs', Input)