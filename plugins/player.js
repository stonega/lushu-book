import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

function seconds(time) {
  const [hour, min, sec] = time.split(":");
  return parseInt(hour) * 3600 + parseInt(min) * 60 + parseInt(sec);
}

const initPlayer = () => {
  const player = document.querySelector("pod-player");
  const buttons = document.querySelectorAll(".timestamp");
  if (player) {
    player.addEventListener("progress", (value) => {
      console.log(value.detail);
    });
  }
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const seconds = button.getAttribute("data");
      console.log(seconds);
      if (player) player.setAttribute("time", seconds);
    });
  });
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname === previousLocation?.pathname) return;
  initPlayer();
}

if (ExecutionEnvironment.canUseDOM) {
  // We also need to setCodeRevealTriggers when the page first loads; otherwise,
  // after reloading the page, these triggers will not be set until the user
  // navigates somewhere.
  window.addEventListener("load", () => {
    setTimeout(initPlayer, 1000);
  });
}
