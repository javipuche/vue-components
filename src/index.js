import * as components from './components'

const ComponentLibrary = {
    install (Vue, options = {}) {
        for (const componentName in components) {
            const component = components[componentName]
            Vue.use(component)
        }
    }
}

export * from './components'
export default ComponentLibrary

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(ComponentLibrary)
}
