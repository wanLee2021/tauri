<script lang="ts">
  import { WebviewWindow } from '@tauri-apps/api/window'
  import { emit } from '@tauri-apps/api/event'
  import Router, { push } from 'svelte-spa-router'
  import routes, { RouteConfigBase } from './route'
  import {WiredButton} from 'wired-elements'

  const handleClick = async () => {
    console.log('click')
    const res = await emit('hello')
    console.log(res)
    // const webview = new WebviewWindow('wanlee11', {
    //   url: '../test.html',
    // })
    // since the webview window is created asynchronously,
    // Tauri emits the `tauri://created` and `tauri://error` to notify you of the creation response
    // webview.once('tauri://created', function () {
    //   // webview window successfully created
    // })
    // webview.once('tauri://error', function (e) {
    //   console.error(e)
      // an error happened creating the webview window
    // })

    // webview.setFocus()
  }

  const handleRoute = () => {
    push('/dev')
  }
</script>

<main class="container">

  <aside class="nav">
    {#each RouteConfigBase as item}
      <wired-button class={"active"} on:click={() => push(item.path)}>{item.name}</wired-button>
    {/each}

  </aside>
  <article class="content">
    <Router {routes} />
  </article>
</main>

<style>
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container .nav {
    width: 88px;
    height: 100%;
    border-right: 1px solid #ccc;
  }

  .container .content {
    height: 100%;
    flex: 1;
  }

  .active {
    background: yellow;
    color: red;
  }
</style>