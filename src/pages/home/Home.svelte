<script>
    import { invoke } from '@tauri-apps/api'
    import { WiredCalendar } from 'wired-elements/lib/wired-calendar.js';
    import moment from 'moment'

    const handleClick = async (e) => {
        console.log(e.value, e.target.value)
        // const res = await invoke('hello')
    }

    const format = (date) => {
        return moment(date).format('YYYY-MM-DD')
    }

    console.log(`->`,moment)

    console.log(WiredCalendar)
</script>
<main>
    <div class="bg-hex-b2a8bb">111</div>
    <wired-calendar selected="2022-10-21" elevation="2" locale="zh-CN" on:selected={handleClick} format={format} ></wired-calendar>
</main>

