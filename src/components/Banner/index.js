import Banner from './Banner.vue'
import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Banner)
    }
}

use(Plugin)

export default Plugin
