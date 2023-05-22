<script lang="ts">
    const figure1Loc = '../assets/figure1_v2.svg';
</script>

<main>
    <div class="flex flex-col p-4">
        <div class="relative w-full max-h-full">

            <div class="relative rounded-lg shadow bg-surface-500">
                <div class="py-4 px-2 border-b rounded-t">
                    <div class="pl-4">
                        <p class="pb-1 text-xl font-medium leading-8 text-surface-300">
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
                        <p class="pb-1 text-xl font-medium leading-8 text-surface-300">
                            Spatial & Temporal Context
                        </p>
                        <p class="text-sm font-medium">

                        </p>
                    </div>
                </div>

                <div class="py-4 px-2 border-b rounded-t">
                    <div class="pl-4">
                        <p class="pb-1 text-xl font-medium leading-8 text-surface-300">
                            Communication Types
                        </p>
                        <p class="text-sm font-medium">

                        </p>
                    </div>
                </div>
                
                <div class="py-4 px-2">
                    <div class="pl-4">
                        <p class="pb-1 text-xl font-medium leading-8 text-surface-300">
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