import {defineConfig, type DefaultTheme} from 'vitepress'

export default defineConfig({
    title: 'consulo.help',
    description: 'The primary source of help documentation for using Consulo and its plugins.',
    cleanUrls: true,
    sitemap: {
        hostname: 'https://consulo.help'
    },

    head: [
        ['link', {rel: 'icon', href: '/art/icon16.svg', type: 'image/svg+xml'}]
    ],

    themeConfig: {
        logo: '/art/icon16.svg',

        nav: [
            {text: 'Home', link: '/'},
            {text: 'For Platform', link: '/platform/'},
            {text: 'For Plugins', link: '/plugins/consulo.unity3d/'}
        ],

        sidebar: {
            '/': homeSidebar(),
            '/platform/': platformSidebar(),
            '/plugins/': pluginsSidebar()
        },

        outline: {
            level: [2, 3]
        },

        editLink: {
            pattern: 'https://github.com/consulo/consulo-help.github.io/edit/master/docs/:path'
        },

        search: {
            provider: 'local'
        }
    }
})

function homeSidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Help',
            items: [
                {text: 'Welcome', link: '/'}
            ]
        }
    ]
}

function platformSidebar(): DefaultTheme.SidebarItem[] {
    return [
        {text: 'Overview', link: '/platform/'},
        {
            text: 'Settings / Preferences',
            collapsed: false,
            items: [
                {
                    text: 'Project',
                    collapsed: false,
                    items: [
                        {text: 'Overview', link: '/platform/settings/project/'},
                        {text: 'Artifacts', link: '/platform/settings/project/artifacts'},
                        {text: 'Libraries', link: '/platform/settings/project/libraries'},
                        {text: 'Modules', link: '/platform/settings/project/modules'}
                    ]
                },
                {
                    text: 'General',
                    collapsed: false,
                    items: [
                        {text: 'Keymap', link: '/platform/settings/general/keymap'}
                    ]
                },
                {
                    text: 'Platform and Plugins',
                    collapsed: false,
                    items: [
                        {text: 'Overview', link: '/platform/settings/platformAndPlugins/'},
                        {text: 'Experimental Features', link: '/platform/settings/platformAndPlugins/eap'},
                        {text: 'Update Settings', link: '/platform/settings/platformAndPlugins/updateSettings'},
                        {text: 'External Services', link: '/platform/settings/platformAndPlugins/externalServices'}
                    ]
                },
                {text: 'SDKs / Bundles / Tools', link: '/platform/settings/sdks.list'}
            ]
        },
        {
            text: 'Keymap',
            collapsed: false,
            items: [
                {text: 'Overview', link: '/platform/keymap/overview'},
                {text: 'Windows | Linux', link: '/platform/keymap/windows_linux'},
                {text: 'macOS', link: '/platform/keymap/mac'}
            ]
        }
    ]
}

function pluginsSidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Unity',
            collapsed: false,
            items: [
                {text: 'Overview', link: '/plugins/consulo.unity3d/'},
                {text: 'Setup', link: '/plugins/consulo.unity3d/setup'},
                {text: 'Debugging', link: '/plugins/consulo.unity3d/debugging'},
                {text: 'Using Consulo as Editor inside Unity', link: '/plugins/consulo.unity3d/using_consulo_as_external_editor'}
            ]
        },
        {
            text: 'Terminal',
            collapsed: false,
            items: [
                {text: 'Settings', link: '/plugins/org.jetbrains.plugins.terminal/settings'}
            ]
        }
    ]
}
