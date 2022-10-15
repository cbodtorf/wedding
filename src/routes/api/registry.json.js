import { request, gql } from 'graphql-request';

const query = gql`
	query Page($type: PageType!, $slug: Slug) {
		page(type: $type, slug: $slug) {
      id
      title
      slug
      owner {
        id
        name
      }
      allowFundraising
      relationships {
        beneficiaries(first: 1) {
          totalCount
          nodes {
            ... on Charity {
              impactStatement
              id
              legacyId
              logo
              name
              profilePageUrl
              registrationNumber
              slug
              countryCode
            }
          }
        }
        parents {
          type
          page {
            id
            slug
            title
            avatar
            logo
            product {
              name
            }
            type
          }
        }
      }
      targetWithCurrency {
        value
        currencyCode
      }
      donationSummary {
        totalAmount {
          value
        }
      }
		}
	}
`;

const url = 'https://graphql.justgiving.com/';


export const get = async ({ params, locals }) => {

  let error = false;
  
  const pagesIds = [
    'caleb-bodtorf-1658592867986', // Carolina Youth Development Center
    'caleb-bodtorf-1658710083174', // Hallie Hill Animal Sanctuary
    'caleb-bodtorf-1658710241037', // Loveland Foundation Inc
  ]

  const altLogos = {
    halliehillanimalsanctuary: 'https://dl5zpyw5k3jeb.cloudfront.net/organization-photos/44405/2/?bust=1579194441&width=350',
    833421375: 'https://d1fdloi71mui9q.cloudfront.net/mvmnBxtZQAqupD6phOBL_0001-7791823588.png'
  }

  const altStatements = {
    halliehillanimalsanctuary: 'Hallie Hill is a 501c(3) non-profit organization that provides sanctuary for abandoned, abused, or neglected animals – a home with food, shelter, love, and medical care.',
    833421375: 'Loveland Foundation is committed to showing up for communities of color in unique and powerful ways, with a particular focus on Black women and girls. Our resources and initiatives are collaborative and they prioritize opportunity, access, validation, and healing. We are becoming the ones we’ve been waiting for.'
  }
  console.log(pagesIds.length)
  let pages = await Promise.all(
    pagesIds.map(async (id) => {
      const { page } = await request(url, query, {
        type: 'ONE_PAGE',
        slug: `page/${id}`
      });

      if (page) {
        const charity = page.relationships.beneficiaries.nodes[0];
        charity.logo = charity.logo === 'https://images.justgiving.com/image/' ? altLogos[charity.slug] : charity.logo;
        charity.impactStatement = (charity.impactStatement || '').length < 25 ? altStatements[charity.slug] : charity.impactStatement;
      }
      return page;
    })
  )

  pages = pages.filter((page) => page !== null);
  
	if (pages.length) {
		return {
			body: {
				data: {
          pages
        }
			}
		};
	} else {
		return {
			body: {
				data: null,
				error
			}
		};
	}
};