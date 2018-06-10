import * as got from 'got';

const url = "<YOUR URL HERE>";

// keep the track of the   links
let listLinks: Set<string> = new Set();

// keep the track of the urls that we already fetch
let listFetchedLink: Set<string> = new Set();

// keep the track of the urls that havent't fetch yet
let listLinksToFetch: Set<string> = new Set();

const getLinksList = async (currentLink) => {
  
  try {
    const response = await got(currentLink); 
    const linksRegex = /<a[^>]+?href=["'].*?["']/gmi;
    const links = response.body.match(linksRegex) || [];
  
    // add the current url to the fetched list
    listFetchedLink.add(currentLink)
  
    // remove the current link from the list of links to fetch
    listLinksToFetch.delete(currentLink);
  
    // strip of the link of unwanted data
    await links.map(async (link) => {
      const mapLink: string = await cleanUpLink(link);
      // if the link is an internal link
      if (mapLink.includes(url)) {
        // add fetched link to the list of links
        listLinks.add(mapLink);
        // if link is not on list of fetched add to the list to fetch
        if (!listFetchedLink.has(mapLink)){
          listLinksToFetch.add(mapLink);
        }
      }
      return mapLink;
    })
    return links; 
  } catch (error) {
    // add the current url to the fetched list
    listFetchedLink.add(currentLink)
  
    // remove the current link from the list of links to fetch
    listLinksToFetch.delete(currentLink);
  }
}

// strip of the url out of the anchor and html wrapper
const cleanUpLink = (link: string) => {
  const start = link.indexOf('href=');
  const subStringHelper = link.substring(start + 6)
  const end = subStringHelper.indexOf(link[start + 5]);
  const finalLink = subStringHelper.substring(0, end);
  return finalLink;
}

( async ()=> {

  listLinksToFetch.add(url);

  await getLinksList(url);

  do{
    const currentUrl = listLinksToFetch.values().next(); // get the next link to fetch
    await getLinksList(currentUrl.value);
  } while(listLinksToFetch.size > 0) // while there are links to fetch

  console.log("listLinks-->", listLinks);
})()