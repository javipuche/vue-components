export default {
    methods: {
        trimTabs (s) {
            return s.replace(new RegExp(/^((?:\d+\.)? +)/mg), '')
        },
        stringToSlug (str) {
            str = str.replace(/^\s+|\s+$/g, '') // trim
            str = str.toLowerCase()

            const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
            const to = 'aaaaeeeeiiiioooouuuunc------'

            for (var i = 0, l = from.length; i < l; i++) {
                str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
            }

            str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
                .replace(/\s+/g, '-') // collapse whitespace and replace by -
                .replace(/-+/g, '-') // collapse dashes

            return str
        }
    }
}
