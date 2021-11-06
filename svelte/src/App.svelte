<script>
  import { Colors, Meetup } from 'dmt-frontend-components';

  import imgDMTSymbol from '@img/dmt-symbol.png';
  import imgMeetupBg from '@img/dmt_section_bg.png';

  export let connected;
  export let state;

  export let errorStore;
  export let logStore;

  $: dmtVersion = $state.dmtVersion;

  function meetupClickHandler() {
    console.log("Clicked on meetup link!");
  }

</script>

<main>

    {#if $errorStore.errors.length > 0}
      <section class="errors">
        {JSON.stringify($errorStore.errors, null, 2)}
      </section>
    {/if}

    <img src="img/banners/banner.png" class="section_image top">

    <section class="main_section">

      <Meetup {state} {meetupClickHandler} padding="20px" bg={imgMeetupBg} />

    </section>

    <section class="footer">
      <p>

        <!-- DMT ENGINE -->
        <img src="{imgDMTSymbol}" class="icon_symbol">
        <a class="dmt_engine" href="https://github.com/uniqpath/dmt">DMT ENGINE</a>

        <!-- connected -->
        {#if !$connected}<span class="disconnected">✖</span>{/if}

        <!-- by uniqpath -->
        <span class="bright_cyan">—</span> <span class="silver">by</span>
        <a href="https://uniqpath.com"> uniqpath</a>

        <!-- dmtVersion -->
        {#if dmtVersion && $connected}
          <span class="version">
            <div>
              <span class="line version_num">
                  v{dmtVersion}
              </span>
            </div>
          </span>
        {/if}

      </p>
    </section>

</main>

<style>

  :global(a) {
    color: white;
  }

  :global(a:hover) {
    opacity: 0.8;
  }

  section,
  .section_image {
    width: 100%;
    background-color: #222;
    opacity: 0.9;
    color: #777;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
  }

  .section_image {
    padding: 0;
  }

  .section_image.top {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  h2.title {
    color: var(--dmt-system-cyan);
  }

  /* fix weird padding between section blocks */
  /* warning: also breaks a lot of things! todo: figure out how to only target sections ... !*/
  /*for now other images have to set inline block */
  img {
    display: block;
    /*margin: 0 auto;*/
  }

  main {
    width: 100%;
    text-align: center;
  }

  p {
    line-height: 1.4;
  }

  main {
    margin: 0 auto;
    max-width: 800px;
    padding: 20px;
    box-sizing: border-box;
    color: #00fff1;
    text-align: justify;
  }

  section.footer {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: var(--dmt-magenta);
    color: var(--dmt-light-magenta);
    padding: 10px;
  }

  section.footer {
    text-align: center;
  }

  section.footer img.icon_symbol {
    display: inline-block; /*to revert the global reset (dangerous), see about img: display: block;*/

    width: 20px;
    padding-bottom: 4px;
    vertical-align: middle;
  }

  section.footer img.icon_symbol.discord {
    width: 18px;
    margin-right: 2px;
  }

  section.footer a img:hover {
    opacity: 0.8;
  }

  section.footer a {
    color: white;
  }

  section.footer a.dmt_engine {
    color: var(--dmt-bright-cyan);
  }

  section.footer {
    color: white;
    font-size: 0.8rem;
  }

  section.footer .disconnected {
    color: #ED2F6F;
  }

  section.footer .version {
    color: #999;
    /*font-size: 0.8em;*/
  }

  .version .version_num {
    font-size: 0.8rem;
    color: var(--dmt-silver);
  }

  section.errors {
    color: red;
  }

  section.main_section {
    background-size: cover;
    background-repeat: no-repeat;

    font-size: 0.8rem;
    color: #ddd;

    text-align: justify;
  }

  .principles {
    margin-top: 40px;
  }

  .principles h1 {
    text-align: left;
  }

  .principles ul li {
    margin: 5px 0;
  }

  h1 {
    color: var(--dmt-green);
    text-align: center;
  }

  h2 {
    text-align: center;
  }

  span.bright_cyan {
    color: var(--dmt-bright-cyan);
  }

  span.silver {
    color: var(--dmt-silver);
  }

  section h1 a {
    color: yellow;
  }

  section h1 a:hover {
    color: yellow;
    opacity: 0.9;
  }

  img {
    padding: 0;
    margin: 0;
  }

  /* proper line break point */
  span.line {
    display: inline-block;
  }

  /*mobile*/
  @media only screen and (max-width: 768px) {
    main {
      width: 100%;
      text-align: left;
      padding: 0;
    }
  }


</style>
