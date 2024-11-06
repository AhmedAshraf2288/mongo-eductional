export function setFavIcon(url) {
  const existingFavicon = document.getElementById("dynamic-favicon");
  if (existingFavicon) {
    existingFavicon.remove();
  }

  const faviconLink = document.createElement("link");
  faviconLink.id = "dynamic-favicon";
  faviconLink.rel = "shortcut icon";
  faviconLink.href = url;

  document.head.appendChild(faviconLink);
}

export function getTimeFromSeconds(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(remainingSeconds).padStart(2, "0")}`;
}

export function getTimeDifference(startDate, endDate) {
  const startMilliseconds = new Date(startDate).getTime();
  const endMilliseconds = new Date(endDate).getTime();
  const difference = Math.abs(endMilliseconds - startMilliseconds);
  return Math.floor(difference / 1000); // Convert milliseconds to seconds
}

const letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export function getLetter(order){
  const tens = parseInt(order / 26);
  let numbering = "";
  for(let i = 0; i < tens; i++){
    numbering += 'a';
  }
  return numbering + letters[order - 1];
}