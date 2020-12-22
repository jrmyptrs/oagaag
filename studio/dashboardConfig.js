export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe1d4b9adab37f20565bb3b',
                  title: 'Sanity Studio',
                  name: 'oagaag-studio',
                  apiId: '9a7d3201-f75b-4acf-96da-2a0b9c38ab89'
                },
                {
                  buildHookId: '5fe1d4b9b08b8700c41b407a',
                  title: 'Portfolio Website',
                  name: 'oagaag',
                  apiId: '140430af-5e50-43a0-bcd8-ad1ab02e4706'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jrmyptrs/oagaag',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://oagaag.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
