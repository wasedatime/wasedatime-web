export function register() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register(`${process.env.PUBLIC_URL}/sw.js`)
        .then(function (registration) {
          const installingWorker = registration.installing;
          if (installingWorker) {
            var refreshing;
            installingWorker.onstatechange = () => {
              if (installingWorker.state === "installed") {
                if (navigator.serviceWorker.controller) {
                  const waitingWorker = registration.waiting;
                  if (waitingWorker) {
                    waitingWorker.postMessage({ type: "SKIP_WAITING" });
                    if (refreshing) return;
                    refreshing = true;
                    window.location.reload();
                  }
                }
              }
            };
          }
        })
        .catch((error) => {
          console.error("Error during service worker registration:", error);
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
