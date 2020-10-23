export interface ILink {
    id: number,
    link?: string,
    label: string,
    fragment?: string,
    children?: ILinks,
    numbering?: string,
}
export interface ILinks extends Array<ILink> { }

export const AppLinks: ILinks = [
    {
        id: 1,
        link: '',
        label: 'Features',
    },
    {
        id: 2,
        link: 'installation',
        label: 'Installation',
        children: [
            {
                id: 201,
                fragment: 'install',
                label: 'Installation',
            },
            {
                id: 202,
                fragment: 'basic-usage',
                label: 'Basic Usage',
            }
        ]
    },
    {
        id: 3,
        link: 'concepts',
        label: 'Concepts',
        children: [
            {
                id: 301,
                label: 'Basic Examples',
                children: [
                    {
                        id: 3001,
                        fragment: 'minimal',
                        label: 'Minimal Example',
                    },
                    {
                        id: 3002,
                        fragment: 'components',
                        label: 'Components',
                    },
                    {
                        id: 3003,
                        fragment: 'basic-form',
                        label: 'Basic Form',
                    },
                ]
            },
            {
                id: 302,
                label: 'Layout',
                link: 'layout'
            },
            {
                id: 303,
                label: 'Tables',
                link: 'tables'
            },
            {
                id: 304,
                label: 'Validation',
                link: 'validation',
                children: [
                    {
                        id: 3041,
                        label: 'Validation Properties',
                        fragment: 'properties'
                    },
                    {
                        id: 3042,
                        label: 'Error Panel',
                        fragment: 'panel'
                    },

                ]
            },
        ]
    },
    {
        id: 4,
        link: 'api',
        label: 'API',
    },
]