<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
    import { CodeBlock } from '@skeletonlabs/skeleton';

    const figure1Loc = '../assets/figure1_v2.svg';

    const diverLoc = '../assets/diver.svg'
    const auvLoc = '../assets/auv.svg'
    const surfaceLoc = '../assets/surface.svg'

    const writingSlateLoc = '../assets/writing_slate.svg';
    const linePullingLoc = '../assets/line_pulling.svg';
    const handSignalingLoc = '../assets/hand_signaling.svg';
    const flagsBuoysLoc = '../assets/flags_buoys.svg';
    const lightSignalingLoc = '../assets/light_signaling.svg';
    const soundSignalingLoc = '../assets/sound_signaling.svg';
    const lineMarkerLoc = '../assets/line_marker.svg'
    const bodyLanguageLoc = '../assets/body_language.svg';
    const voiceCommunicationLoc = '../assets/voice_comm.svg'
    const textCommunicationLoc = '../assets/text_comm.svg'
    const touchContactLoc = '../assets/touch_contact.svg'

    // const incomingMailLoc = '../assets/incoming_mail.svg'
    // const outgoingMailLoc = '../assets/outgoing_mail.svg'

    const colocatedLoc = '../assets/colocated.svg'
    const remoteLoc = '../assets/remote.svg'
    const syncLoc = '../assets/sync.svg'
    const asyncLoc = '../assets/async.svg'

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
                            This website collects, organizes, and showcases documented information, in terms of the specific messages, that various underwater and surface actors may need to exchange during a recreational or professional dive (Figure 1). The messages that need to or can be conveyed depend on the location and time of the specific actor sending and/or receiving the message. Furthermore, the messages can be exchanged through various communication methods such as body language, flags & buoys, hand signals, light signals, etc. In the following sections, we thus describe these aspects to introduce the various criteria by which we organize the messages exchanged by various actors.                                                     
                        </p>

                        <div class="pt-8 photo-wrapper">
                            <figure>
                                <img class="rounded-lg" width=400px src={figure1Loc} alt="figure1"/>
                                <figcaption class="text-sm font-medium">
                                    Figure 1: An illustration of the different actors that may need to communicate during a dive. Surface supporting personnel is typically located on a ship above the surface, while divers operate below the surface. Professional dive missions may also be supported by Geographical Information Systems (GPS), Autonomous Surface Vehicles (ASVs), and Autonomous Underwater Vehicles (AUVs).
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>

                <div class="py-4 px-2 border-b rounded-t">
                    <div class="pl-4 pr-4">
                        <p class="pb-1 text-xl font-medium leading-8">
                            Message Encoders & Decoders
                        </p>
                        <p class="text-sm font-medium">
                            Communication involves a sender who encodes a message (the message encoder) and a receiver who decodes that message (the message decoder). In this context, the message is the information or meaning conveyed from the sender to the receiver. Thus the sender must use a common language for the message to be understood by the receiver. In the context of Figure 1, we can identify relevant actors that typically exchange messages, i.e., encode or decode messages. In the following, we describe the most relevant ones in more detail.
                        </p>

                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            <img class="mx-2" src={diverLoc} width="28" height="28" alt="Message" /> 
                            Divers
                        </p>
                        <p class="flex p-2 mx-2 text-sm font-medium">
                            Divers are underwater personnel trained in diving techniques and equipped with diving gear making them capable of working in an aquatic environment. Diver's activities span from recreational to professional activities that may involve conducting scientific research, underwater inspections, maintenance, and search and rescue operations. In these various activities, divers may want to communicate with each other to ensure safety and enable task coordination. Additionally, they might want to exchange information about the environment they are exploring.
                        </p>

                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            <img class="mx-2" src={auvLoc} width="28" height="28" alt="Message" /> 
                            Autonomous Underwater Vehicles
                        </p>
                        <p class="flex p-2 mx-2 text-sm font-medium">                  
                            Autonomous Underwater Vehicles (AUVs) are unmanned robotic vehicles designed for underwater operations and can work alongside professional divers carrying out specific tasks. AUVs are equipped with various sensors, instruments, and propulsion systems and perform various tasks like collecting data or mapping the seafloor. Divers may need to communicate with AUVs to perform cooperative tasks by providing instructions, setting waypoints, or modifying parameters. The communication and interaction between divers and AUVs can facilitate underwater exploration, data acquisition, and access to challenging or hazardous areas.
                        </p>

                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            <img class="mx-2" src={surfaceLoc} width="28" height="28" alt="Message" /> 
                            Surface-Supporting Personnel
                        </p>
                        <p class="flex p-2 mx-2 text-sm font-medium">                  
                            Surface-supporting personnel oversee and assist divers' activities. Their tasks involve monitoring divers' safety, providing logistical support, and coordinating operations from the surface. In this context, divers need to communicate with surface-supporting personnel for monitoring and support purposes. They report progress, provide updates on their condition, and request assistance when necessary. Communication is essential for surface personnel to ensure divers' well-being, respond promptly to emergencies, and maintain effective operational support.
                        </p>
                    </div>
                </div>

                <div class="py-4 px-2 border-b rounded-t">
                    <div class="pl-4 pr-4">
                        <p class="pb-1 text-xl font-medium leading-8">
                            Spatial & Temporal Context
                        </p>
                        <p class="text-sm font-medium">
                            The spatial and temporal aspects of communication occurring between underwater and/or surface-supporting personnel can be described in terms of the Computer Supported Cooperative Work (CSCW) time-place matrix theory [JR88], which describes patterns of collaboration and coordination in work environments. The CSCW time-place matrix describes two dimensions: (i) The first dimension pertains to whether the exchange of information between individuals can occur at the same time (synchronous) or at different times (asynchronous). (ii) The second dimension pertains to whether colocated or remote individuals are considered. Conclusively, methods of communication can be categorized into four distinct categories: Colocated and synchronous, remote and synchronous, colocated and asynchronous, and remote and asynchronous. We will provide more details on the individual components of the two dimensions in the following.
                        </p>

                        <!-- Spatial Aspect -->
                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            <img class="mx-2" src={colocatedLoc} width="28" height="28" alt="Message" /> 
                            Colocated
                        </p>
                        <p class="flex p-2 mx-2 text-sm font-medium">             
                            Colocated communication refers to individuals being physically present in the same location during their interaction. It allows for direct observation of body language, facial expressions, and non-verbal cues, enhancing understanding and conveying emotions effectively. In addition, colocated communication facilitates immediate feedback and real-time adjustments.
                        </p>

                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            <img class="mx-2" src={remoteLoc} width="28" height="28" alt="Message" /> 
                            Remote
                        </p>
                        <p class="flex p-2 mx-2 text-sm font-medium">
                            Remote communication refers to the exchange of information and interaction between physically separated individuals. Remote communication allows for collaboration and interaction across distances, enabling flexibility but involves challenges related to coordination and interpreting non-verbal cues.                 
                        </p>

                        <!-- Temporal Aspect -->
                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            <img class="mx-2" src={syncLoc} width="28" height="28" alt="Message" /> 
                            Synchronous
                        </p>
                        <p class="flex p-2 mx-2 text-sm font-medium">                  
                            Synchronous communication refers to real-time exchanges where individuals are actively engaged and respond immediately. This mode is useful for time-sensitive situations, quick decision-making, and immediate coordination. However, this mode relies on individuals being available at the same time for effective engagement.
                        </p>


                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            <img class="mx-2" src={asyncLoc} width="28" height="28" alt="Message" /> 
                            Asynchronous
                        </p>
                        <p class="flex p-2 mx-2 text-sm font-medium">                  
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
                            Various methods exist when communication between divers and/or surface personnel is necessary. In the following, we will give a comprehensive overview of possible communication methods and their characteristics and use. The methods we describe have a set of standard use cases and signals with agreed-upon meanings. However, many methods allow the definition of other signals with possibly new meanings. Agreeing on the signals and their meanings is typically established during dive planning to ensure clear communication and prompt responses.
                        </p>

                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            <img class="mx-2" src={bodyLanguageLoc} width="28" height="28" alt="Message" />
                            Body Language                           
                        </p>           
                        <p class="flex p-2 mx-2 text-sm font-medium">                  
                            Body language is an extension of hand signaling, allowing divers to convey messages and emotions through physical movements and positions involving or engaging body parts beyond just the hands. For example, body language gestures may include nodding to indicate agreement, shaking the head to convey disagreement, or shrugging to express uncertainty. Body language may also refer to how posture and orientation can indicate direction or how eye contact and gaze can be used to draw attention.                            
                        </p>

                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            <img class="mx-2" src={flagsBuoysLoc} width="28" height="28" alt="Message" /> 
                            Flags & Buoys
                        </p>
                        <p class="flex p-2 mx-2 text-sm font-medium">
                            Flags and buoys are visual tools used for communication in underwater and surface environments and are vital tools for divers to engage with surface-supporting personnel. They come in various colors, shapes, and patterns, each representing a specific message or indicating a particular situation. By deploying and holding a signaling device like a surface marker buoy, divers can signal their presence and the need for attention or assistance.               
                        </p>

                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            <img class="mx-2" src={handSignalingLoc} width="28" height="28" alt="Message" /> 
                            Hand Signals
                        </p>           
                        <p class="flex p-2 mx-2 text-sm font-medium">                  
                            Hand signals are a system of gestures divers use to communicate in real-time to convey information quickly and efficiently underwater. It requires both parties to be present and actively engaged. Divers utilize a set of standardized hand signals, although gestures can vary informally between diving teams or regions, allowing for flexibility in communication. While some common gestures are universally understood, they don't follow a specific template or format, providing divers with adaptability in conveying messages.                            
                        </p>

                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            <img class="mx-2" src={lightSignalingLoc} width="28" height="28" alt="Message" /> 
                            Light Signals
                        </p>               
                        <p class="flex p-2 mx-2 text-sm font-medium">
                            Light signaling is a technique that divers can use to communicate by turning them on and off, shining them in specific patterns, or directing the light toward a person or object. Essential light signals convey whether a diver is OK or needs attention. More advanced light signaling includes using Morse code which can also be adapted for underwater communication, with divers quickly turning the light on and off to represent dots and dashes.
                        </p>

                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            <img class="mx-2" src={lineMarkerLoc} width="28" height="28" alt="Message" /> 
                            Line Markers
                        </p>               
                        <p class="flex p-2 mx-2 text-sm font-medium">  
                            Line markers are visual indicators used in underwater communication to enhance navigation, safety, and coordination. They are placed along underwater lines and consist of colored bands, knots, or distinctive shapes. These markers serve as reference points for divers, helping them maintain position, gauge distance, and navigate accurately. 
                        </p>

                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            <img class="mx-2" src={linePullingLoc} width="28" height="28" alt="Message" /> 
                            Line Pulling
                        </p>
                        <p class="flex p-2 mx-2 text-sm font-medium">
                            Line or rope pulling is a (typically secondary) communication technique used in conditions of low visibility or when primary communication methods, such as voice communication, fail. It involves connecting a diver to another person, either another diver or a line tender on the surface. Divers can convey messages and coordinate actions through predetermined signals or tugs on the line providing a clear and consistent way to convey information. However, the range of possible messages is limited.
                        </p>
                
                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            <img class="mx-2" src={soundSignalingLoc} width="28" height="28" alt="Message" /> 
                            Sound Signals
                        </p>               
                        <p class="flex p-2 mx-2 text-sm font-medium">
                            Sound signaling is a method of communication used in underwater and surface environments to convey messages through audible signals. For example, divers underwater can create sounds by tapping on tanks, while divers on the surface can use, e.g., whistles. These sounds alert others, indicate direction or emergencies, and facilitate coordination. Sound signaling is particularly valuable in low visibility conditions and when visual communication is limited.
                        </p>

                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            <img class="mx-2" src={textCommunicationLoc} width="28" height="28" alt="Message" /> 
                            Text Communication
                        </p>
                        <p class="flex p-2 mx-2 text-sm font-medium">                  
                            Text communication is a method of communication used in both underwater and surface environments to convey messages through written or typed text. Beyond underwater writing slates, specialized digital devices can be used in text-based underwater communication. Digital devices include dive computers or underwater tablets equipped with text messaging capabilities, allowing divers to send and receive text messages underwater. Underwater text messaging can be enabled through wireless acoustic or optical communication systems. In this context, text communication provides a written record, ensures clarity, and allows communication in situations where other methods may not be feasible or desirable.
                        </p>    

                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            <img class="mx-2" src={touchContactLoc} width="28" height="28" alt="Message" /> 
                            Touch Contact
                        </p>
                        <p class="flex p-2 mx-2 text-sm font-medium">                  
                            Touch contract is a method divers use to communicate underwater through tactile signals. It involves establishing physical contact with another diver and conveying messages through touches, such as taps, nudges, or squeezes. Since the messages that can be conveyed are often limited, the signals typically indicate important information like the need to stop, go up or down, point out something of interest, or signal a problem or emergency.
                        </p>    

                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            <img class="mx-2" src={voiceCommunicationLoc} width="28" height="28" alt="Message" /> 
                            Voice Communication
                        </p>               
                        <p class="flex p-2 mx-2 text-sm font-medium">
                            Voice communication is a direct method of communication used in both underwater and surface environments to convey messages through spoken words. In underwater communication, specialized diving masks or full-face masks with integrated communication systems allow divers and/or surface personnel to talk and hear each other. These systems use wired or wireless technology to transmit and receive voice data.
                        </p>

                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            <img class="mx-2" src={writingSlateLoc} width="28" height="28" alt="Message" /> 
                            Writing Slates
                        </p>
                        <p class="flex p-2 mx-2 text-sm font-medium">                  
                            Underwater writing slates are compact and waterproof boards divers use for communication and note-taking underwater. They have a smooth surface for writing with specialized underwater pencils or markers and a clip or loop for attachment to dive gear. Divers hold the slate underwater with one hand while using the other to write or draw. They are commonly used to communicate with dive buddies, record dive plans, depth readings, and observations. In addition, writing slates can be easily wiped clean for reuse.
                        </p>
                    </div>
                </div>

                <div class="py-4 px-2 border-b rounded-t">
                    <div class="pl-4 pr-4">
                        <p class="pb-1 text-xl font-medium leading-8">
                            Message Categories
                        </p>
                        <p class="text-sm font-medium">                          
                            TODO: ...
                        </p>

                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            Emotions & Expressions (EE)
                        </p>           
                        <p class="flex p-2 mx-2 text-sm font-medium">                  
                            TODO: ...
                        </p>

                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            Environmental Conditions (EC)
                        </p>           
                        <p class="flex p-2 mx-2 text-sm font-medium">                  
                            TODO: ...
                        </p>

                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            Equipment & Communication (ECM)
                        </p>           
                        <p class="flex p-2 mx-2 text-sm font-medium">                  
                            TODO: ...
                        </p>

                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            Navigation & Positioning (NP)
                        </p>           
                        <p class="flex p-2 mx-2 text-sm font-medium">                  
                            TODO: ...
                        </p>

                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            Safety & Emergency (SE)
                        </p>           
                        <p class="flex p-2 mx-2 text-sm font-medium">                  
                            TODO: ...
                        </p>

                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            Wildlife Sightings (WS)
                        </p>           
                        <p class="flex p-2 mx-2 text-sm font-medium">                  
                            TODO: ...
                        </p>

                        <p class="flex items-center p-2 pb-0 pt-2 text-l font-medium leading-8">
                            Quantitative Information (QI)
                        </p>           
                        <p class="flex p-2 mx-2 text-sm font-medium">                  
                            TODO: ...
                        </p>
                    </div>
                </div>



                <div class="py-4 px-2 border-b rounded-t">
                    <div class="pl-4 pr-4">
                        <p class="pb-1 text-xl font-medium leading-8">
                            Bibliography
                        </p>

                        <table class="text-sm font-medium border-separate border-spacing-2">
                            <!-- Communication Methods and Messages -->
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
                                <td>[PADI16]</td>
                                <td class="pl-4">
                                    <p> PADI. <cite>PADI Advanced Open Water Diver Manual</cite>, Version 1.0, (2016). Published by: Rancho Santa Margarita, California: PADI.</p> 
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

                            <tr>
                                <td>[DJ14]</td>
                                <td class="pl-4">
                                    <p> DeMarco, K. J. and West, M. E. and Howard, A. M. <cite> Underwater Human-Robot Communication: A Case Study with Human Divers </cite> 2014 IEEE International Conference on Systems, Man, and Cybernetics (SMC), San Diego, CA, USA, 2014, pp. 3738-3743, doi: 10.1109/SMC.2014.6974512.</p>                
                                </td>
                            </tr>

                            <!-- Supporting Material -->
                            <tr>
                                <td>[JR88]</td>
                                <td class="pl-4">
                                    <p>  Johansen, Robert. <cite>Groupware: Computer support for business teams</cite>, (2022). Published by: The Free Press.</p>                
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
    
                        <!-- Citation Styles: View Tabs -->
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
                            The source code and underlying data is available under a 
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