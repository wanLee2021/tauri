<style lang="less">
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .content {
  height: 100%;
  flex: 1;
}

.container .nav {
  width: 88px;
  height: 100%;
  border-right: 1px solid #ccc;
}

.nav .link {
  margin-top: 12px;
}

.nav .link.active {
  background: yellow;
  color: red;
}
</style>

<script lang="ts">
import { WebviewWindow } from "@tauri-apps/api/window";
import { emit } from "@tauri-apps/api/event";
import Router, { push, location } from "svelte-spa-router";
import routes, { RouteConfigBase } from "./route";
import { WiredButton } from "wired-elements";

const handleClick = async () => {
  console.log("click");
  const res = await emit("hello");
  console.log(res);
};

const handleRoute = () => {
  push("/dev");
};
</script>

<main class="container">
  <aside class="nav">
    {#each RouteConfigBase as item}
      <wired-button
        elevation="4"
        class="link"
        class:active="{item.path === $location}"
        on:click="{() => push(item.path)}">{item.name}</wired-button>
    {/each}
  </aside>

  <article class="content">
    <Router routes="{routes}" />
  </article>
</main>
