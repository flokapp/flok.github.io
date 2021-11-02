const sessionSearch = window.location.search;
if (sessionSearch) {
  // window.location.href = 'flok://app' + sessionSearch;
  window.location.href = 'exp://192.168.10.146:19000' + sessionSearch;
}
