import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'siw7j9mu',
  dataset: 'produciton',
  apiVersion: '2021-03-25',
  token:
    'skDXkwe9A8sYsaaxzxjO9kgh6F0s5jC5pceQOm0usFb7lbtrUu4nOjUyUNAA2MnoObMKhCb1ffUNHfI3C54jpeL3wGwbmBGFC5DRnHrA8gmzrJBO6DtIw17YxwiZ6UZR3knO0J4VDPh48oEsY2ec9Bp2vLe0aWgvcEJehMA8NHOgfPdEg0Yq',
  useCdn: false,
})
