module.exports = {
    navigation: [
        {
            group: 'Instalación',
            children: [
                {
                    title: 'Start',
                    url: { name: 'home' }
                },
                {
                    title: 'Customization',
                    url: { name: 'test' }
                }
            ]
        },
        {
            group: 'Componentes',
            children: [
                {
                    title: 'Button',
                    url: { name: 'test' }
                },
                {
                    title: 'Collapse',
                    url: { name: 'test' }
                },
                {
                    title: 'Form controls',
                    url: { name: 'test' },
                    children: [
                        {
                            title: 'Autocomplete',
                            url: { name: 'test', hash: '#caca' }
                        },
                        {
                            title: 'Checkbox',
                            url: { name: 'test', hash: '#caca2' }
                        },
                        {
                            title: 'Clockpicker',
                            url: { name: 'test', hash: '#caca3' }
                        }
                    ]
                },
                {
                    title: 'Icon',
                    url: { name: 'test' }
                },
                {
                    title: 'Loading',
                    url: { name: 'test' }
                }
            ]
        }
    ]
}
