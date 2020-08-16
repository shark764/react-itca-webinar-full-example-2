import * as contentful from 'contentful';

const SPACE_ID = 'srlpekq85luo';
const ACCESS_TOKEN = 'evMFF1eK--2PX6Qqrlq8glrKOurVH1pdvaI-FRgmufU';

export const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

export function getRecords(query) {
  return client
    .getEntries(query)
    .then(result => result.items)
    .then(items => dataTransformer(items))
    .catch(err => {
      console.error(err);
      return [];
    });
}

function dataTransformer(data) {
  return data.map(({ fields, sys }) => ({
    ...fields,
    image: fields.image.fields.file.url,
    id: sys.id,
    createdAt: sys.createdAt,
    tracklist: fields.tracklist.map(track => ({
      ...track.fields,
      id: track.sys.id,
    })),
  }));
}
