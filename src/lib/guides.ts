import { getCollection } from 'astro:content';

export async function getSortedGuides() {
  const guides = await getCollection('guides');
  return guides.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
