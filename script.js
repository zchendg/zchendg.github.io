const year = document.querySelector("#year");
const lastUpdated = document.querySelector("#last-updated");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (lastUpdated) {
  lastUpdated.textContent = new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric"
  }).format(new Date());
}
