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
                  buildHookId: '5dd5191c7299ea1ded3b8640',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-hoxpxtqi',
                  apiId: '9ecedf72-fbb3-4bb8-8d29-de580d812fca'
                },
                {
                  buildHookId: '5dd5191d75838f8d41381824',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-nmz2d3nb',
                  apiId: 'ddd5432e-3dc4-48bc-a95b-0bb9f6bf83c0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jankc/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-nmz2d3nb.netlify.com',
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
