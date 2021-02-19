export function register() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(function (reg) {
          var refreshing;
          navigator.serviceWorker.addEventListener(
            "controllerchange",
            function () {
              if (refreshing) return;
              if (
                window.confirm(
                  "New update available! Please confirm to refresh"
                )
              ) {
                window.location.reload();
                refreshing = true;
              }
            }
          );
        });
    });
  }
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
