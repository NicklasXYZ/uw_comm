<script lang="ts">
	import { filter } from "@skeletonlabs/skeleton";
	import MessageCardHorizontal from "./messageCardHorizontal.svelte";
  export let filteredMessages
  export let state

  let displayInfo = state.clickedNode
  let cardData = undefined

  $: if (displayInfo) {
    if (state.clickedNode) {
        displayInfo = state.clickedNode
        for (let index = 0; index < filteredMessages.length; index++) {
            const element = filteredMessages[index];
            if (displayInfo == element.id) {
                cardData = filteredMessages[index]
            }
        }
    }
    else {
        displayInfo = ""
        cardData = undefined
    }
  }


</script>
  
<!-- <p>Hello World!</p> -->

<!-- <div bind:this={infoRefElement}> -->
    <div style="position: relative; left: 0px; top: 0; z-index: 1;">

    <!-- <div style="position: absolute; left: 0; top: 0; z-index: 1;"> -->
        <h2>
      <!-- {title}{" "} -->
      <!-- <button type="button" onClick={() => setIsDeployed((v) => !v)}> -->
    <!-- <button type="button"> -->
        <!-- {displayInfo} -->
            <!-- {isDeployed ? <MdExpandLess /> : <MdExpandMore />} -->
      <!-- </button> -->
      <!-- Display this info: {displayInfo} -->
    </h2>
    <!-- <AnimateHeight duration={DURATION} height={isDeployed ? "auto" : 0}> -->
      <!-- {children} -->
    <!-- </AnimateHeight> -->
    {#if cardData}
        <MessageCardHorizontal messageObject={cardData}/>
    {/if}
  </div>