const constants = {
  BASE_URL:
    "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=fc095fc36700a13369004746bc67c545&per_page=10&format=json&nojsoncallback=1&safe_search=3",
  SEARCH_BASE_URL:
    "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=fc095fc36700a13369004746bc67c545&per_page=20&safe_search=3",
  STORAGE_KEY: "flicker_search_queries",
};

export default constants;
