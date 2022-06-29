import sanityClient  from '@sanity/client'

export const client = sanityClient({
    projectId: '9fx9v2jn',
    dataset: 'production',
    apiVersion: '2022-06-28',
    token: 'skcBEP0W7Db16eZbJ7WfHnhWxP0j0tJCfQ7Yg57bonJNtBHr02uT2n5el9gXbwNs8e7Jcwe3ghfEXTjV9pnZQQNiEFhf4bBJ3YJWuJ0k77GXIm04RS0SaAG3QKY4fRONEicK7ZeqY1BGLoMh0M66H2bi2Xt7I2x2EShaEn0wepLO5PuPJtdo',
    useCdn: false
})