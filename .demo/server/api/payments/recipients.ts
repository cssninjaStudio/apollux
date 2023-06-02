export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const perPage = parseInt((query.perPage as string) || '5', 10)
  const page = parseInt((query.page as string) || '1', 10)
  const filter = (query.filter as string) || ''

  if (perPage >= 150) {
    // Create an artificial delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  const data = await getDemoData()

  return {
    total: data.length,
    data: filterDemoData(data, filter, page, perPage),
  }
})

function filterDemoData(
  data: any[],
  filter: string,
  page: number,
  perPage: number,
) {
  const offset = (page - 1) * perPage
  if (!filter) {
    return data.slice(offset, offset + perPage)
  }
  const filterRe = new RegExp(filter, 'i')
  return data
    .filter((item) => {
      return [item.name, item.category].some((item) => item.match(filterRe))
    })
    .slice(offset, offset + perPage)
}

async function getDemoData() {
  return Promise.resolve([
    {
      id: 1,
      type: 'company',
      name: 'Airbnb',
      slug: 'airbnb',
      category: 'Housing company',
      picture: '/img/logos/companies/airbnb.svg',
    },
    {
      id: 2,
      type: 'person',
      name: 'Jackie Strauss',
      slug: 'jackie-strauss',
      category: 'Freelance worker',
      picture: '/img/avatars/12.svg',
    },
    {
      id: 3,
      type: 'company',
      name: 'AT&T',
      slug: 'att',
      category: 'Phone company',
      picture: '/img/logos/companies/att.svg',
    },
    {
      id: 4,
      type: 'company',
      name: 'Gitlab',
      slug: 'gitlab',
      category: 'Software company',
      picture: '/img/logos/companies/gitlab.svg',
    },
    {
      id: 5,
      type: 'company',
      name: 'Amazon',
      slug: 'amazon',
      category: 'Commerce company',
      picture: '/img/logos/companies/amazon.svg',
    },
    {
      id: 6,
      type: 'person',
      name: 'Hermann Mayer',
      slug: 'hermann-mayer',
      category: 'Freelance worker',
      picture: '/img/avatars/16.svg',
    },
    {
      id: 7,
      type: 'person',
      name: 'Clark Smith',
      slug: 'clark-smith',
      category: 'Freelance worker',
      picture: '/img/avatars/3.svg',
    },
    {
      id: 8,
      type: 'person',
      name: 'Aaron Patterson',
      slug: 'aaron-patterson',
      category: 'Freelance worker',
      picture: '/img/avatars/13.svg',
    },
    {
      id: 9,
      type: 'person',
      name: 'John Baxter',
      slug: 'john-baxter',
      category: 'Freelance worker',
      picture: '/img/avatars/8.svg',
    },
    {
      id: 10,
      type: 'person',
      name: 'Clarissa Miller',
      slug: 'clarisa-miller',
      category: 'Freelance worker',
      picture: '/img/avatars/5.svg',
    },
    {
      id: 11,
      type: 'person',
      name: 'Howard Streim',
      slug: 'howard-streim',
      category: 'Freelance worker',
      picture: '/img/avatars/20.svg',
    },
    {
      id: 12,
      type: 'person',
      name: 'Anna Lopez',
      slug: 'anna-lopez',
      category: 'Freelance worker',
      picture: '/img/avatars/24.svg',
    },
    {
      id: 13,
      type: 'company',
      name: 'Atlassian',
      slug: 'atlassian',
      category: 'Software company',
      picture: '/img/logos/companies/atlassian.svg',
    },
    {
      id: 14,
      type: 'company',
      name: 'Monday',
      slug: 'monday',
      category: 'Software company',
      picture: '/img/logos/companies/monday.svg',
    },
    {
      id: 15,
      type: 'company',
      name: 'UPS',
      slug: 'ups',
      category: 'Software company',
      picture: '/img/logos/companies/ups.svg',
    },
    {
      id: 16,
      type: 'company',
      name: 'Spotify',
      slug: 'spotify',
      category: 'Software company',
      picture: '/img/logos/companies/spotify.svg',
    },
  ])
}
