module.exports = {
    navigation: [
        {
            title: 'Guide',
            url: { name: 'home' },
            children: [
                {
                    title: 'Introduction',
                    url: { name: 'test' },
                    children: [
                        { title: 'How It Works', url: { name: 'test', hash: '#how' } },
                        { title: 'Faturfeaes', url: { name: 'test', hash: '#faturfeaes' } },
                        { title: 'Features', url: { name: 'test', hash: '#features' } }
                    ]
                },
                {
                    title: 'Getting Started',
                    url: { name: 'home' },
                    children: [
                        { title: 'Global Installation', url: { name: 'home' } },
                        { title: 'Inside an Existing Project', url: { name: 'home' } }
                    ]
                }
            ]
        },
        {
            title: 'Maria',
            url: { name: 'test' },
            children: [
                {
                    title: 'Cristobal',
                    url: { name: 'home' },
                    children: [
                        { title: 'Loli', url: { name: 'home' } },
                        { title: 'Juan', url: { name: 'home' } }
                    ]
                },
                {
                    title: 'Vicenta',
                    url: { name: 'home' },
                    children: [
                        { title: 'Globalizacion', url: { name: 'home' } },
                        { title: 'Pokemon', url: { name: 'home' } }
                    ]
                }
            ]
        }
    ]
}
