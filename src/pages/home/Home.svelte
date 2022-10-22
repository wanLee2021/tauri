<script>
    import { invoke } from '@tauri-apps/api'

    const handleClick = async () => {
        console.log('effect')
        const res = await invoke('hello')
        console.log(res)
    }
</script>
<main>
    Hello Home

    <button on:click={handleClick}>click!</button>
</main>

