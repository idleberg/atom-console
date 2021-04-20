<script>

    import { afterUpdate, onDestroy, onMount } from 'svelte';
    import store from '../store';
    import { handleOverflow, initStatusBarHeight, mapLevel } from '../utils';


    let lines;
    const unsubscribe = store.subscribe(state => {
      switch (state.action) {
        case 'log':
          lines = [
            ...state.lines
          ];
          break;

        case 'clear':
          lines = [];
          break;

        default:
          break;
        }

      return lines;
    });

    let div;

    afterUpdate(() => {
      div.scrollTo({
        left: 0,
        top: div.scrollHeight,
        behaviour: 'smooth'
      });
    });

    const scrollToTop = () => {
      div.scrollTo({
        top: 0,
        left: 0,
        behaviour: 'smooth'
      });
    };

    let wordWrap;
    atom.config.observe('console.wordWrap', newValue => {
      wordWrap = newValue
    });

    let showTimestamp;
    atom.config.observe('console.showTimestamp', newValue => {
      showTimestamp = newValue
    });

    let coloredBadges;
    atom.config.observe('console.coloredBadges', newValue => {
      coloredBadges = newValue
        ? 'badge'
        : 'text';
    });

    let filters = [];
    const filterHandler = event => {
      event.target.classList.toggle('selected');

      const filter = event.target.innerText.toLowerCase();

      store.update(state => {
        if (state.filters.includes(filter)) {
          const index = state.filters.indexOf(filter);
          state.filters.splice(index, 1);
        } else {
          state.filters.push(filter);
        }

        filters = state.filters;

        return state;
      });
    }

    onMount(() => initStatusBarHeight());
    onDestroy(unsubscribe);
</script>

<div class='block'>
  <div class='btn-group'>
    <button class="btn icon icon-quote" on:click={filterHandler}>Log</button>
    <button class="btn icon icon-info" on:click={filterHandler}>Info</button>
    <button class="btn icon icon-issue-opened" on:click={filterHandler}>Warning</button>
    <button class="btn icon icon-flame" on:click={filterHandler}>Error</button>
  </div>
</div>

<div class="panel-body scrollable" bind:this={div}>
    <div class="console-lines" tabindex="-1">
      {#if lines?.length}
        {#each lines as {level, message, timestamp}}
          <p hidden={filters.length && !filters.includes(level)}>
            {#if typeof message === 'string'}
              {#if showTimestamp}
                <div class="timestamp {mapLevel(level).text}">
                  <pre class="badge {coloredBadges}-{mapLevel(level).text} icon {mapLevel(level).icon}" on:click={scrollToTop}>
                    <span title={timestamp.tooltip}>{timestamp.visible}</span>
                  </pre>
                </div>
              {/if}
              <pre class="message" style={wordWrap && handleOverflow()}>{message}</pre>
            {:else}
              {message}
            {/if}
          </p>
        {/each}
      {/if}
    </div>
</div>

<style type="text/scss">
  .scrollable {
    height: 100%;
    overflow: auto;
    width: 100%;
  }

  .panel-body {
    background-color: var(--inset-panel-background-color);
    cursor: text;
    height: 100%;
  }

  .console-lines {
    &:empty {
      padding: 0;
    }

    overflow: visible;
  }

  p {
    display: flex;
    margin: 0;

    &[hidden] {
      display: none;
    }

    .timestamp {
      border-left: 5px solid;
      padding: 5px;
      margin-bottom: 5px;
      user-select: none;

      &.error {
        border-color: var(--text-color-error);
      }

      &.info {
        border-color: var(--text-color-info);
      }

      &.warning {
        border-color: var(--text-color-warning);
      }
    }

    .badge {
      cursor: pointer;
      font-size: 11px;
      position: sticky;
      top: 5px;
    }

    .message {
      font-size: unset;
      flex-grow: 1;
      margin-bottom: var(--status-bar-height);

      &::selection {
        background-color: var(--background-color-selected);
        color: var(--text-color-selected);
      }
    }
  }
</style>
