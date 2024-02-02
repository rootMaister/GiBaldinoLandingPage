const iframeAction = () => {
  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById("embed-iframe");
    const options = {
      uri: "spotify:episode:2AzvBrzASU1LGyKfDcL31S",
    };
    const callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };
};

iframeAction();
