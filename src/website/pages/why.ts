import type { Page } from '@safidea_/engine'
import { footer } from './shared/footer'
import { header } from './shared/header'
import type { Translation } from '../translations'
import { head } from './shared/head'

export const why = (t: Translation): Page => ({
  name: 'home',
  path: t.path + '/why',
  head: {
    title: t.why.pageTitle,
    metas: [
      {
        name: 'description',
        content: t.why.pageDescription,
      },
    ],
    links: head?.links,
  },
  body: [
    header(t),
    {
      component: 'Container',
      center: true,
      className: 'max-w-5xl',
      children: [
        {
          component: 'Hero',
          className: 'my-16',
          title: {
            text: t.why.heroTitle,
          },
          paragraph: {
            text: t.why.heroParagraph,
          },
          buttons: [
            {
              label: t.why.heroCustomerButtonLabel,
              href: t.path + '/requests',
              variant: 'secondary',
            },
            {
              label: t.why.heroContributorButtonLabel,
              href: t.path + '/contribute',
              variant: 'secondary',
            },
          ],
        },
        {
          component: 'Container',
          className: 'my-16',
          children: [
            {
              component: 'Title',
              text: t.why.toCustomers,
              size: 'xs',
            },
            {
              component: 'Title',
              text: t.why.firstCustomersStatement,
            },
            {
              component: 'Paragraph',
              text: t.why.firstCustomersStatementDescription,
              size: 'xl',
            },
            {
              component: 'Title',
              text: t.why.secondCustomersStatement,
            },
            {
              component: 'Paragraph',
              text: t.why.secondCustomersStatementDescription,
              size: 'xl',
            },
            {
              component: 'Title',
              text: t.why.thirdCustomersStatement,
            },
            {
              component: 'Paragraph',
              text: t.why.thirdCustomersStatementDescription,
              size: 'xl',
            },
          ],
        },
        {
          component: 'Container',
          className: 'my-16',
          children: [
            {
              component: 'Title',
              text: t.why.toContributors,
              size: 'xs',
            },
            {
              component: 'Title',
              text: t.why.firstContributorsStatement,
            },
            {
              component: 'Paragraph',
              text: t.why.firstContributorsStatementDescription,
              size: 'xl',
            },
            {
              component: 'Title',
              text: t.why.secondContributorsStatement,
            },
            {
              component: 'Paragraph',
              text: t.why.secondContributorsStatementDescription,
              size: 'xl',
            },
            {
              component: 'Title',
              text: t.why.thirdContributorsStatement,
            },
            {
              component: 'Paragraph',
              text: t.why.thirdContributorsStatementDescription,
              size: 'xl',
            },
          ],
        },
      ],
    },
    footer(t),
  ],
})
