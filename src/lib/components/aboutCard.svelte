<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
    import { CodeBlock } from '@skeletonlabs/skeleton';

    const figure1Loc = '../assets/figure1_v2.svg';

	let tabSet: number = 0;
    let citationAPA = [
        'Andersen, N. S. (2023).',
        ' Underwater Communication.',
        ' URL: https://uwcomm.infonest.xyz/.',
        ' DOI: https://doi.org/10.5281/zenodo.7966369',
        '.',
    ]
    .map(line => line + '')
    .join('');

    let citationBibtex = [
        '@misc{uwcomm2023,',
        '   title        = {Underwater Communication},',
        '   author       = {Andersen, N. S.},',
        '   year         = {2023},',
        '   month        = {6},',
        '   howpublished = {URL:~\\url{https://uwcomm.infonest.xyz/}. DOI:~\\url{https://doi.org/10.5281/zenodo.7966369},',
        '}',
    ]    
    .map(line => line + '\n')
    .join('');
</script>

<main>
    <div class="flex flex-col p-4">
        <div class="w-full max-h-full">

            <div class="rounded-lg shadow bg-surface-100-800-token">
                <div class="py-4 px-2 border-b rounded-t">
                    <div class="pl-4 pr-4">
                        <p class="pb-1 text-xl font-medium leading-8">
                            About
                        </p>

                        <p class="text-sm font-medium">
                            This website aims to collect, organize and showcase documented information, in
                            terms of the specific messages, that divers underwater and/or surface-supporting
                            personnel exchange during a recreational or professional dive (Figure 1). The
                            messages that need to or can be conveyed depend on the location and time of the
                            person sending and/or receiving the message. Furthermore, the message can be
                            exchanged through various communication methods such as body language, rope
                            pulling, hand signals, light signals, sound signals, etc. In the following
                            sections, we thus describe these aspects to introduce the various criteria by
                            which we organize the messages exchanged by divers and/or surface-supporting
                            personnel.                                                     
                        </p>

                        <div class="pt-8 photo-wrapper">
                            <figure>
                                <img class="rounded-lg" width=400px src={figure1Loc} alt="figure1"/>
                                <figcaption class="text-sm font-medium">
                                    Figure 1: An illustration of the different actors that may need to communicate
                                    during a dive. Surface supporting personnel is typically located on a ship above
                                    the surface, while divers operate below the surface. Professional dive missions
                                    may also be supported by Geographical Information Systems (GPS), Autonomous
                                    Surface Vehicles (ASVs), and Autonomous Underwater Vehicles (AUVs).
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                
                <div class="py-4 px-2 border-b rounded-t">
                    <div class="pl-4">
                        <p class="pb-1 text-xl font-medium leading-8">
                            Spatial & Temporal Context
                        </p>
                        <p class="text-sm font-medium">
                            The spatial and temporal characteristics of communication between underwater and/or surface-supporting personnel can be described in terms of the Computer Supported Cooperative Work (CSCW) time-place matrix theory. The CSCW time-place matrix describes two dimensions: (i) The first dimension pertains to whether the exchange of information between individuals can occur at the same time (synchronous) or at different times (asynchronous). (ii) The second dimension pertains to whether colocated or remote individuals are considered. Conclusively, methods of communication can be categorized into four distinct categories: Colocated and synchronous, remote and synchronous, co-located and asynchronous, and remote and asynchronous. We more details on the individual components of the two dimensions in the following.
                        </p>
                        <p class="pb-0 pt-2 text-l font-medium leading-8">
                            Colocated:
                        </p>
                        <p class="text-sm font-medium">                          
                        </p>

                        <p class="pb-0 pt-2 text-l font-medium leading-8">
                            Remote:
                        </p>
                        <p class="text-sm font-medium">                          
                        </p>


                        <p class="pb-0 pt-2 text-l font-medium leading-8">
                            Synchronous:
                        </p>
                        <p class="text-sm font-medium">                          
                            Synchronous communication refers to real-time exchanges where individuals are actively engaged and respond immediately, like in a live chat or instant messaging platform. This mode is useful for time-sensitive situations, quick decision-making, and immediate coordination.
                        </p>


                        <p class="pb-0 pt-2 text-l font-medium leading-8">
                            Asynchronous:
                        </p>
                        <p class="text-sm font-medium">                          
                            Asynchronous communication involves a delay between sending and receiving messages, such as with email or discussion boards. This mode of communication allows for more thoughtful and composed responses, and it is beneficial in less time-sensitive situations.
                        </p>


                    </div>
                </div>

                <div class="py-4 px-2 border-b rounded-t">
                    <div class="pl-4 pr-4">
                        <p class="pb-1 text-xl font-medium leading-8">
                            Communication Methods
                        </p>
                        <p class="text-sm font-medium">                          
                            Various methods exist when communication between divers and/or surface personnel is necessary. In the following, a comprehensive overview of possible communication methods and their characteristics are described.
                        </p>


                        <p class="pb-0 pt-2 text-l font-medium leading-8">
                            Writing Slates: TODO...
                        </p>
                        <p class="text-sm font-medium">                  
                            <!-- Divers can use underwater writing slates to write messages to each other underwater. Writing slates are particularly useful in situations where hand signals may not be visible or effective, such as in low visibility conditions. -->
                        </p>


                        <p class="pb-0 pt-2 text-l font-medium leading-8">
                            Hand Signals: TODO...
                        </p>           
                        <p class="text-sm font-medium">
                            <!-- Hand signals is a real-time, visual method of communication that requires both parties to be present and actively engaged. Divers use a set of standardized hand signals to convey information quickly and efficiently to each other underwater [PG90]. Gestures are generally informal and can vary between diving teams or regions. While some common gestures are universally understood, they do not follow a specific template or format, allowing for flexibility in communication.                             -->
                        </p>


                        <p class="pb-0 pt-2 text-l font-medium leading-8">
                            Line Pulling: TODO...
                        </p>
                        <p class="text-sm font-medium">                          
                            <!-- Line pulling, involves sending messages by tugging on a rope connecting the diver and the surface personnel. Rope pulling uses a predefined set of signals, where a specific number of tugs or a certain pattern corresponds to a particular message. This provides a clear and consistent way to convey information, although the range of possible messages is limited. This method also requires both parties to be present and engaged in real-time communication. -->
                        </p>


                        <p class="pb-0 pt-2 text-l font-medium leading-8">
                            Flags & Buoys: TODO...
                        </p>
                        <p class="text-sm font-medium">
                            <!-- Surface marker buoys (SMBs) or delayed surface marker buoys (DSMBs) can be used to communicate with people on the surface. Divers can signal their location, indicate distress, or communicate other information to surface support personnel by inflating the buoy and sending it to the surface. -->
                        </p>
                            
                            
                        <p class="pb-0 pt-2 text-l font-medium leading-8">
                            Light Signals: TODO...
                        </p>               
                        <p class="text-sm font-medium">                          
                            <!-- Divers can use a dive light to communicate with each other by flashing it in a specific pattern. This method can be useful in situations where visibility is low or when diving at night. -->
                        </p>


                        <p class="pb-0 pt-2 text-l font-medium leading-8">
                            Sound Signals: TODO...
                        </p>               
                        <p class="text-sm font-medium">                          
                            <!-- Sound Signals Divers can use underwater noisemakers to communicate with each other. Sound signals are typically indicate things like "attention," or "emergency". -->
                        </p>


                        <p class="pb-0 pt-2 text-l font-medium leading-8">
                            Line Markers: TODO...
                        </p>               
                        <p class="text-sm font-medium">                          
                            <!-- In some diving scenarios, divers use guidelines or lines to maintain a connection with each other or their starting point. They may use different knots or markers on the line to communicate specific information or instructions. -->
                        </p>


                        <p class="pb-0 pt-2 text-l font-medium leading-8">
                            Voice Communication: TODO...
                        </p>               
                        <p class="text-sm font-medium">                          
                            <!-- Divers can use full-face diving masks that are equipped with built-in devices that enable them to speak directly with one another underwater. These devices are typically enabled by a hardwired communication line to the surface integrated into their umbilical system. This setup can provide synchronous voice or data communication between the diver and the surface team. Just like radio communication, hardwired communications can be either structured or unstructured, depending on the context. -->
                        </p>


                        <p class="pb-0 pt-2 text-l font-medium leading-8">
                            Text Communication: TODO...
                        </p>               
                        <p class="text-sm font-medium">                          
                            <!-- Specific devices, such as dive computers or underwater tablets, are equipped with text messaging capabilities, allowing divers to send and receive text messages underwater. Depending on the specific device, communication mode, and need, these messages can be exchanged and accessed synchronously or asynchronously. Text messages can also be structured or unstructured, depending on the context. The communication of text messages can be enabled through a hardwired communication line to the surface but also wirelessly through acoustic communication systems due to text messages typically being very small in size. -->
                        </p>                           
                    </div>
                </div>
                
                <!-- <div class="py-4 px-2"> -->
                    <div class="py-4 px-2 border-b rounded-t">
                        <div class="pl-4 pr-4">
                        <p class="pb-1 text-xl font-medium leading-8">
                            Bibliography
                        </p>

                        <table class="text-sm font-medium border-separate border-spacing-2">
                            <tr>
                                <td>[LB23]</td>
                                <td class="pl-4">
                                    <p> Behnke, Lars. <cite>Scuba Diving Hand Signals</cite>, 2nd Black & White Edition, (2023). Published by: Independent publication. </p>
                                </td>
                            </tr>

                            <tr>
                                <td>[NOAA01]</td> 
                                <td class="pl-4">
                                    <p> NOAA Diving Program (U.S.). <cite>NOAA Diving Manual: Diving for Science and Technology</cite>, 4th Edition, (2001). Published by: The National Oceanic and Atmospheric Administration (NOAA) & U.S. Department of Commerce and Best Publishing Company.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>[USND16]</td>
                                <td class="pl-4">
                                    <p> U.S. Navy Diving. <cite>U.S. Navy Diving Manual</cite>, Revision 7, (2016). Published by: Direction of Commander, Naval Sea Systems Command.</p>
                                </td>
                            </tr>

                            <tr>
                                <td>[PG90]</td>
                                <td class="pl-4">
                                    <p> Prosser, Joe and Grey, H.V. <cite>Cave Diving Communications</cite>, 1st Edition, (1990). Published by: Branford, Florida: Cave Diving Section of the National Speleological Society.</p> 
                                </td>
                            </tr>

                            <tr>
                                <td>[RD07]</td>
                                <td class="pl-4">
                                    <p> Richardson, Drew et al. <cite>PADI Open Water Diver Manual</cite>, Version 2.09, (2007). Published by: Rancho Santa Margarita, California: PADI.</p> 
                                </td>
                            </tr>

                            <tr>
                                <td>[RD04]</td>
                                <td class="pl-4">
                                    <p> Richardson, Drew et al. <cite>PADI Adventures in Diving</cite>, Version 2.4, (2004). Published by: Rancho Santa Margarita, California: PADI.</p> 
                                </td>
                            </tr>

                            <tr>
                                <td>[RSTC05]</td>
                                <td class="pl-4">
                                    <p> Recreational Scuba Training Council (RSTC), Inc. <cite>Common Hand Signals for Scuba Diving</cite>, (2005). Published by: Florida, Jackonville: Recreational Scuba Training Council (RSTC), Inc.</p> 
                                </td>
                            </tr>

                            <tr>
                                <td>[BJ06]</td>
                                <td class="pl-4">
                                    <p> Bevan, John. <cite>The Professional Diver's Handbook</cite>, 2nd Edition, (2006). Published by: Submex Limited.</p> 
                                </td>
                            </tr>

                            <tr>
                                <td>[ERDI22]</td>
                                <td class="pl-4">
                                    <p> Emergency Response Diving International (ERDI). <cite>ERDI Standards and Procedures. Part 2: ERDI Diver Standards</cite>, Version 0123, (2022). Published by: Emergency Response Diving International (ERDI).</p>                
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="py-4 px-2 border-b rounded-t">
                    <div class="pl-4 pr-4">
                        <p class="pb-1 text-xl font-medium leading-8">
                            Citing This Website
                        </p>
    
                        <!-- Citation styles View Tabs -->
                        <TabGroup 
                        hover="hover:bg-surface-600"
                        justify="justify-left"
                        regionPanel=""
                        class="pb-2 rounded-lg"
                        padding="px-4 py-2"
                        >
                            <Tab bind:group={tabSet} name="tab1" value={0}>APA</Tab>
                            <Tab bind:group={tabSet} name="tab2" value={1}>BibTeX</Tab>

                            <!-- Tab Panels --->
                            <svelte:fragment slot="panel">
                                {#if tabSet === 0}
                                    <CodeBlock background="bg-surface-500" button="" language="plaintext" code={citationAPA}></CodeBlock>
                                {:else if tabSet === 1}
                                    <CodeBlock background="bg-surface-500" button="" language="bibtex" code={citationBibtex}></CodeBlock>
                                {/if}
                            </svelte:fragment>
                        </TabGroup>
                    </div>
                </div>


                <div class="py-4 px-2">
                    <div class="pl-4 pr-4">
                        <p class="pb-1 text-xl font-medium leading-8">
                            Website Source Code
                        </p>
                        <p class="text-sm font-medium">
                            The source code and data is available under a 
                            <a class="hover:underline" href="https://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a> license on
                            <a class="hover:underline" href="https://github.com/NicklasXYZ/uw_comms">Github</a>.
                        </p>  
                    </div>
                </div>





            </div>        
        </div>
    </div>
</main>


<style>
figure {
	display: flex;
	flex-direction: column;
	width: max-content;
	max-width: 100%;
	margin: auto;
	max-height: 100%;
}
figcaption {
	flex-shrink: 0;
	padding: 1em 0;
	width: 0;
	min-width: 100%;
}
</style>