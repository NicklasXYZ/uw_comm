<script lang="ts">
  import { onMount, setContext } from 'svelte'
  import Sigma from 'sigma';
  import Graph from 'graphology';
  // import cytoscape from 'cytoscape'
  // import dagre from 'cytoscape-dagre'
  // import GraphStyles from './GraphStyles.js'
	// import GraphNode from '$lib/components/GraphNode.svelte';
	// import GraphEdge from '$lib/components/GraphEdge.svelte';
  import forceAtlas2 from 'graphology-layout-forceatlas2';

  import { random } from 'graphology-layout';
  // Alternatively, to load only the relevant code:
  // import random from 'graphology-layout/random';


  // export let filteredMessages;


  
  let refElement: HTMLElement = null
  let cyInstance = null
  let renderer = null

  setContext('graphSharedState', {
    getCyInstance: () => [renderer, refElement, cyInstance]
  })

  // let container: HTMLElement;
  // function addNodes(graphInstance, dataIn) {
  //   console.log("Graph instance:")
  //   console.log(graphInstance)
  //   console.log("Data in: ")
  //   console.log(dataIn)
  //   for (let i = 0; i < dataIn.length; i++) {
  //     graphInstance.addNode(
  //       dataIn[i].id,
  //       {
  //         x: 0,
  //         y: 0,
  //         size: 20,
  //         color: "red",
  //         label: dataIn[i].id,
  //       }
  //     ) 
  //   }
  //   // return graphInstance
  // }
  onMount(() => {

    // const container1 =  document.getElementById("sigma-container");
    
    

    cyInstance = new Graph();

    // graph.addNode("John", { x: 0, y: 10, size: 15, label: "John", color: "blue" });
    // graph.addNode("Mary", { x: 10, y: 0, size: 10, label: "Mary", color: "green" });
    // graph.addNode("Thomas", { x: 7, y: 9, size: 20, label: "Thomas", color: "red" });
    // graph.addNode("Hannah", { x: -7, y: -6, size: 25, label: "Hannah", color: "teal" });

    // cyInstance.addNode("John", {x: 0, y: 10, label: "John", size: 20, color: "red"})
    // cyInstance.addNode("Mary", {x: 0, y: 10, label: "Mary", size: 20, color: "red"})
    // cyInstance.addNode("Thomas", {x: 0, y: 10, label: "Thomas", size: 20, color: "red"})
    // cyInstance.addNode("Hannah", {x: 0, y: 10, label: "Hannah", size: 20, colro: "red"})


    // addNodes(cyInstance, filteredMessages)


    // graph.addEdge("John", "Mary");
    // graph.addEdge("John", "Thomas");
    // graph.addEdge("John", "Hannah");
    // graph.addEdge("Hannah", "Thomas");
    // graph.addEdge("Hannah", "Mary");

  // const positions = forceAtlas2(graph, {iterations: 50});
  // const positions = forceAtlas2(graph, {iterations: 50});
  // forceAtlas2.assign(graph, {iterations: 50});

  // const positions = random(cyInstance);
  // random.assign(cyInstance);

  // const positions = random(graph, {dimensions: ['x', 'y', 'z']});


  // const positions = random(graph, {rng: customRngFunction});

  // const renderer = new Sigma(graph, container1);
  // const renderer = new Sigma(cyInstance, refElement);
  if (!renderer){
    renderer = new Sigma(cyInstance, refElement);
  }

  
    // cytoscape.use(dagre)

  //   cyInstance = cytoscape({
  //     container: refElement,
  //     style: GraphStyles
  //   })

  //   cyInstance.on('add', () => {
  //     cyInstance
  //       .makeLayout({
  //         name: 'grid',
  //         rankDir: 'TB',
  //         nodeSep: 200
  //       })
  //       .run()
  //   })

  })

</script>

<h1> Sigma graph exemple</h1>
<!-- <div id="sigma-container" /> -->
<div style="height: calc(100vh - 215px)" bind:this={refElement} class="container">
<!-- <div style="height: 100px" bind:this={container} class="container" /> -->
  {#if cyInstance}
    <!-- <p> -->
      <!-- Hello {filteredMessages.length} -->
    <!-- <p/> -->
    <!-- <slot></slot> -->
    <!-- {#each filteredMessages as node}
      <GraphNode {node}/>
    {/each} -->
    <!-- <GraphNode {filteredMessages}/> -->
    <slot></slot>
  {/if}

</div>

<!-- <div style="height: calc(100vh - 215px)" class="graph" bind:this={refElement}> -->
    <!-- {filteredMessages.length} -->
    <!-- {cyInstance} -->
  <!-- {#if cyInstance} -->
    <!-- <p> -->
      <!-- Hello {filteredMessages.length} -->
    <!-- <p/> -->
    <!-- <slot></slot> -->
    <!-- {#each filteredMessages as node}
      <GraphNode {node}/>
    {/each} -->
    <!-- <GraphNode {filteredMessages}/> -->
  <!-- {/if} -->
<!-- </div> -->