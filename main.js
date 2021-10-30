const sessionSearch = window.location.search;
if (sessionSearch) {
  // window.location.href = 'flok:/path/to/app';
  window.location.href = 'exp://192.168.10.146:19000' + sessionSearch;
}
