<script lang="ts">
  import { getContext } from 'svelte'
  const { getGraphInstance } = getContext('graphSharedState')
  const [ graphInstance ] = getGraphInstance()
  import { random } from 'graphology-layout';
  import circular from 'graphology-layout/circular';
  // import forceAtlas2 from 'graphology-layout-forceatlas2';
  // import ForceSupervisor from "graphology-layout-force/worker";


  export let nodes

  $: if (graphInstance) {
    graphInstance.clear()
    for (let index = 0; index < nodes.length; index++) {
      if (!graphInstance._nodes.has(nodes[index].id)) {
        graphInstance.addNode(
          nodes[index].id,
        {
            x: 0,
            y: 0,
            size: 10,
            label: nodes[index].message,
          }
      )
    }
    const positions = random(graphInstance);
  	random.assign(graphInstance);

    // const positions = circular(graphInstance);
    // const positions = circular(graph, {scale: 100});
    // To directly assign the positions to the nodes:
    // circular.assign(graphInstance);

    // const positions = forceAtlas2(graphInstance, {iterations: 50});
    // forceAtlas2.assign(graphInstance);


  }

  // console.log("Removing nodes...")
  //   for (let index = 0; index < toRemove.length; index++) {
  //     if (cyInstance._nodes.has(toRemove[index])) {
  //       cyInstance.dropNode(toRemove[index])
  //   }
  // }
  }
</script>
