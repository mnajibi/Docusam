import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Docusam/blog',
    component: ComponentCreator('/Docusam/blog', '30b'),
    exact: true
  },
  {
    path: '/Docusam/blog/archive',
    component: ComponentCreator('/Docusam/blog/archive', '60f'),
    exact: true
  },
  {
    path: '/Docusam/blog/first-blog-post',
    component: ComponentCreator('/Docusam/blog/first-blog-post', '11a'),
    exact: true
  },
  {
    path: '/Docusam/blog/long-blog-post',
    component: ComponentCreator('/Docusam/blog/long-blog-post', '795'),
    exact: true
  },
  {
    path: '/Docusam/blog/mdx-blog-post',
    component: ComponentCreator('/Docusam/blog/mdx-blog-post', '0f7'),
    exact: true
  },
  {
    path: '/Docusam/blog/tags',
    component: ComponentCreator('/Docusam/blog/tags', '366'),
    exact: true
  },
  {
    path: '/Docusam/blog/tags/docusaurus',
    component: ComponentCreator('/Docusam/blog/tags/docusaurus', '102'),
    exact: true
  },
  {
    path: '/Docusam/blog/tags/facebook',
    component: ComponentCreator('/Docusam/blog/tags/facebook', 'a85'),
    exact: true
  },
  {
    path: '/Docusam/blog/tags/hello',
    component: ComponentCreator('/Docusam/blog/tags/hello', 'b3d'),
    exact: true
  },
  {
    path: '/Docusam/blog/tags/hola',
    component: ComponentCreator('/Docusam/blog/tags/hola', 'b6c'),
    exact: true
  },
  {
    path: '/Docusam/blog/welcome',
    component: ComponentCreator('/Docusam/blog/welcome', '292'),
    exact: true
  },
  {
    path: '/Docusam/markdown-page',
    component: ComponentCreator('/Docusam/markdown-page', '9de'),
    exact: true
  },
  {
    path: '/Docusam/docs',
    component: ComponentCreator('/Docusam/docs', '2ee'),
    routes: [
      {
        path: '/Docusam/docs/category/tutorial---basics',
        component: ComponentCreator('/Docusam/docs/category/tutorial---basics', 'c98'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusam/docs/category/tutorial---extras',
        component: ComponentCreator('/Docusam/docs/category/tutorial---extras', '1df'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusam/docs/intro',
        component: ComponentCreator('/Docusam/docs/intro', '0be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusam/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/Docusam/docs/tutorial-basics/congratulations', '233'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusam/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/Docusam/docs/tutorial-basics/create-a-blog-post', '36e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusam/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/Docusam/docs/tutorial-basics/create-a-document', '4a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusam/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/Docusam/docs/tutorial-basics/create-a-page', 'c2a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusam/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/Docusam/docs/tutorial-basics/deploy-your-site', '291'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusam/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/Docusam/docs/tutorial-basics/markdown-features', '8fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusam/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/Docusam/docs/tutorial-extras/manage-docs-versions', 'c75'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Docusam/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/Docusam/docs/tutorial-extras/translate-your-site', 'ecd'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/Docusam/',
    component: ComponentCreator('/Docusam/', 'b2a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
