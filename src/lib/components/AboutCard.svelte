<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import AboutSectionText from '$lib/components/AboutSectionText.svelte';
	import AboutSubSection from '$lib/components/AboutSubSection.svelte';
	import AboutSubSectionText from '$lib/components/AboutSubSectionText.svelte';
	import BibliographyTable from '$lib/components/BibliographyTable.svelte';
	import BibliographyTableItem from '$lib/components/BibliographyTableItem.svelte';

	import { citationAPA, citationBibtex } from '$lib/utils/constants.svelte';

	const figure1Loc: string = '../assets/figure1_v2.svg';

	const diverLoc: string = '../assets/diver.svg';
	const auvLoc: string = '../assets/auv.svg';
	const surfaceLoc: string = '../assets/surface.svg';

	const colocatedLoc: string = '../assets/colocated.svg';
	const remoteLoc: string = '../assets/remote.svg';
	const syncLoc: string = '../assets/sync.svg';
	const asyncLoc: string = '../assets/async.svg';

	const writingSlateLoc: string = '../assets/writing_slate.svg';
	const linePullingLoc: string = '../assets/line_pulling.svg';
	const handSignalingLoc: string = '../assets/hand_signaling.svg';
	const flagsBuoysLoc: string = '../assets/flags_buoys.svg';
	const lightSignalingLoc: string = '../assets/light_signaling.svg';
	const soundSignalingLoc: string = '../assets/sound_signaling.svg';
	const lineMarkerLoc: string = '../assets/line_marker.svg';
	const bodyLanguageLoc: string = '../assets/body_language.svg';
	const voiceCommunicationLoc: string = '../assets/voice_comm.svg';
	const textCommunicationLoc: string = '../assets/text_comm.svg';
	const touchContactLoc: string = '../assets/touch_contact.svg';

	let tabSet: number = 0;
</script>

<main>
	<div class="flex flex-col p-4">
		<div class="w-full max-h-full">
			<div class="rounded-lg shadow bg-surface-100-800-token">
				<AboutSection sectionTitle={'About'}>
					<AboutSectionText>
						This website collects, organizes, and showcases documented information, in terms of the
						specific messages, that various underwater and surface actors may need to exchange
						during a recreational or professional dive (Figure 1). The messages that need to or can
						be conveyed depend on the location and time of the specific actor sending and/or
						receiving the message. Furthermore, the messages can be exchanged through various
						communication methods such as body language, flags & buoys, hand signals, light signals,
						etc. In the following sections, we thus describe these aspects to introduce the various
						criteria by which we organize the messages exchanged by various actors.

						<div class="pt-8 photo-wrapper">
							<figure>
								<img class="rounded-lg" width="400px" src={figure1Loc} alt="figure1" />
								<figcaption class="text-sm font-medium">
									Figure 1: An illustration of the different actors that may need to communicate
									during a dive. Surface supporting personnel is typically located on a ship above
									the surface, while divers operate below the surface. Professional dive missions
									may also be supported by a Geographical Positioning System (GPS), Autonomous
									Surface Vehicles (ASVs), and Autonomous Underwater Vehicles (AUVs).
								</figcaption>
							</figure>
						</div>
					</AboutSectionText>
				</AboutSection>

				<AboutSection sectionTitle={'Message Encoders & Decoders'}>
					<AboutSectionText>
						Communication involves a sender who encodes a message (the message encoder) and a
						receiver who decodes that message (the message decoder). In this context, the message is
						the information or meaning conveyed from the sender to the receiver. Thus the sender
						must use a common language for the message to be understood by the receiver. In the
						context of Figure 1, we can identify relevant actors that typically exchange messages,
						i.e., encode or decode messages. In the following, we describe the most relevant ones in
						more detail.
					</AboutSectionText>

					<AboutSubSection
						subSectionTitle={'Divers'}
						subSectionIconPath={diverLoc}
						iconAltText={'Divers'}
					>
						<AboutSubSectionText>
							Divers are underwater personnel trained in diving techniques and equipped with diving
							gear making them capable of working in an aquatic environment. Diver's activities span
							from recreational to professional activities that may involve conducting scientific
							research, underwater inspections, maintenance, and search and rescue operations. In
							these various activities, divers may want to communicate with each other to ensure
							safety and enable task coordination. Additionally, they might want to exchange
							information about the environment they are exploring.
						</AboutSubSectionText>
					</AboutSubSection>

					<AboutSubSection
						subSectionTitle={'Autonomous Underwater Vehicles'}
						subSectionIconPath={auvLoc}
						iconAltText={'Autonomous Underwater Vehicles'}
					>
						<AboutSubSectionText>
							Autonomous Underwater Vehicles (AUVs) are unmanned robotic vehicles designed for
							underwater operations and can work alongside professional divers carrying out specific
							tasks. AUVs are equipped with various sensors, instruments, and propulsion systems and
							perform various tasks like collecting data or mapping the seafloor. Divers may need to
							communicate with AUVs to perform cooperative tasks by providing instructions, setting
							waypoints, or modifying parameters. The communication and interaction between divers
							and AUVs can facilitate underwater exploration, data acquisition, and access to
							challenging or hazardous areas.
						</AboutSubSectionText>
					</AboutSubSection>

					<AboutSubSection
						subSectionTitle={'Surface-Supporting Personnel'}
						subSectionIconPath={surfaceLoc}
						iconAltText={'Surface-Supporting Personnel'}
					>
						<AboutSubSectionText>
							Surface-supporting personnel oversee and assist divers' activities. Their tasks
							involve monitoring divers' safety, providing logistical support, and coordinating
							operations from the surface. In this context, divers need to communicate with
							surface-supporting personnel for monitoring and support purposes. They report
							progress, provide updates on their condition, and request assistance when necessary.
							Communication is essential for surface personnel to ensure divers' well-being, respond
							promptly to emergencies, and maintain effective operational support.
						</AboutSubSectionText>
					</AboutSubSection>
				</AboutSection>

				<AboutSection sectionTitle={'Spatial & Temporal Context'}>
					<AboutSectionText>
						The spatial and temporal aspects of communication occurring between underwater and/or
						surface-supporting personnel can be described in terms of the Computer Supported
						Cooperative Work (CSCW) time-place matrix theory [JR88], which describes patterns of
						collaboration and coordination in work environments. The CSCW time-place matrix
						describes two dimensions: (i) The first dimension pertains to whether the exchange of
						information between individuals can occur at the same time (synchronous) or at different
						times (asynchronous). (ii) The second dimension pertains to whether colocated or remote
						individuals are considered. Conclusively, methods of communication can be categorized
						into four distinct categories: Colocated and synchronous, remote and synchronous,
						colocated and asynchronous, and remote and asynchronous. We will provide more details on
						the individual components of the two dimensions in the following.
					</AboutSectionText>

					<!-- Spatial Aspect -->
					<AboutSubSection
						subSectionTitle={'Colocated'}
						subSectionIconPath={colocatedLoc}
						iconAltText={'Colocated'}
					>
						<AboutSubSectionText>
							Colocated communication refers to individuals being physically present in the same
							location during their interaction. It allows for direct observation of body language,
							facial expressions, and non-verbal cues, enhancing understanding and conveying
							emotions effectively. In addition, colocated communication facilitates immediate
							feedback and real-time adjustments.
						</AboutSubSectionText>
					</AboutSubSection>

					<AboutSubSection
						subSectionTitle={'Remote'}
						subSectionIconPath={remoteLoc}
						iconAltText={'Remote'}
					>
						<AboutSubSectionText>
							Remote communication refers to the exchange of information and interaction between
							physically separated individuals. Remote communication allows for collaboration and
							interaction across distances, enabling flexibility but involves challenges related to
							coordination and interpreting non-verbal cues.
						</AboutSubSectionText>
					</AboutSubSection>

					<!-- Temporal Aspect -->
					<AboutSubSection
						subSectionTitle={'Synchronous'}
						subSectionIconPath={syncLoc}
						iconAltText={'Synchronous'}
					>
						<AboutSubSectionText>
							Synchronous communication refers to real-time exchanges where individuals are actively
							engaged and respond immediately. This mode is useful for time-sensitive situations,
							quick decision-making, and immediate coordination. However, this mode relies on
							individuals being available at the same time for effective engagement.
						</AboutSubSectionText>
					</AboutSubSection>

					<AboutSubSection
						subSectionTitle={'Asynchronous'}
						subSectionIconPath={asyncLoc}
						iconAltText={'Asynchronous'}
					>
						<AboutSubSectionText>
							Asynchronous communication involves a delay between sending and receiving messages,
							such as with email or discussion boards. This mode of communication allows for more
							thoughtful and composed responses, and it is beneficial in less time-sensitive
							situations.
						</AboutSubSectionText>
					</AboutSubSection>
				</AboutSection>

				<AboutSection sectionTitle={'Communication Methods'}>
					<AboutSectionText>
						Various methods exist when communication between divers and/or surface personnel is
						necessary. In the following, we will give a comprehensive overview of possible
						communication methods and their characteristics and use. The methods we describe have a
						set of standard use cases and signals with agreed-upon meanings. However, many methods
						allow the definition of other signals with possibly new meanings. Agreeing on the
						signals and their meanings is typically established during dive planning to ensure clear
						communication and prompt responses.
					</AboutSectionText>

					<AboutSubSection
						subSectionTitle={'Body Language'}
						subSectionIconPath={bodyLanguageLoc}
						iconAltText={'Body Language'}
					>
						<AboutSubSectionText>
							Body language is an extension of hand signaling, allowing divers to convey messages
							and emotions through physical movements and positions involving or engaging body parts
							beyond just the hands. For example, body language gestures may include nodding to
							indicate agreement, shaking the head to convey disagreement, or shrugging to express
							uncertainty. Body language may also refer to how posture and orientation can indicate
							direction or how eye contact and gaze can be used to draw attention.
						</AboutSubSectionText>
					</AboutSubSection>

					<AboutSubSection
						subSectionTitle={'Flags & Buoys'}
						subSectionIconPath={flagsBuoysLoc}
						iconAltText={'Flags & Buoys'}
					>
						<AboutSubSectionText>
							Flags and buoys are visual tools used for communication in underwater and surface
							environments and are vital tools for divers to engage with surface-supporting
							personnel. They come in various colors, shapes, and patterns, each representing a
							specific message or indicating a particular situation. By deploying and holding a
							signaling device like a surface marker buoy, divers can signal their presence and the
							need for attention or assistance.
						</AboutSubSectionText>
					</AboutSubSection>

					<AboutSubSection
						subSectionTitle={'Hand Signals'}
						subSectionIconPath={handSignalingLoc}
						iconAltText={'Hand Signals'}
					>
						<AboutSubSectionText>
							Hand signals are a system of gestures divers use to communicate in real-time to convey
							information quickly and efficiently underwater. It requires both parties to be present
							and actively engaged. Divers utilize a set of standardized hand signals, although
							gestures can vary informally between diving teams or regions, allowing for flexibility
							in communication. While some common gestures are universally understood, they don't
							follow a specific template or format, providing divers with adaptability in conveying
							messages.
						</AboutSubSectionText>
					</AboutSubSection>

					<AboutSubSection
						subSectionTitle={'Light Signals'}
						subSectionIconPath={lightSignalingLoc}
						iconAltText={'Light Signals'}
					>
						<AboutSubSectionText>
							Light signaling is a technique that divers can use to communicate by turning them on
							and off, shining them in specific patterns, or directing the light toward a person or
							object. Essential light signals convey whether a diver is OK or needs attention. More
							advanced light signaling includes using Morse code which can also be adapted for
							underwater communication, with divers quickly turning the light on and off to
							represent dots and dashes.
						</AboutSubSectionText>
					</AboutSubSection>

					<AboutSubSection
						subSectionTitle={'Line Markers'}
						subSectionIconPath={lineMarkerLoc}
						iconAltText={'Line Markers'}
					>
						<AboutSubSectionText>
							Line markers are visual indicators used in underwater communication to enhance
							navigation, safety, and coordination. They are placed along underwater lines and
							consist of colored bands, knots, or distinctive shapes. These markers serve as
							reference points for divers, helping them maintain position, gauge distance, and
							navigate accurately.
						</AboutSubSectionText>
					</AboutSubSection>

					<AboutSubSection
						subSectionTitle={'Line Pulling'}
						subSectionIconPath={linePullingLoc}
						iconAltText={'Line Pulling'}
					>
						<AboutSubSectionText>
							Line or rope pulling is a (typically secondary) communication technique used in
							conditions of low visibility or when primary communication methods, such as voice
							communication, fail. It involves connecting a diver to another person, either another
							diver or a line tender on the surface. Divers can convey messages and coordinate
							actions through predetermined signals or tugs on the line providing a clear and
							consistent way to convey information. However, the range of possible messages is
							limited.
						</AboutSubSectionText>
					</AboutSubSection>

					<AboutSubSection
						subSectionTitle={'Sound Signals'}
						subSectionIconPath={soundSignalingLoc}
						iconAltText={'Sound Signals'}
					>
						<AboutSubSectionText>
							Sound signaling is a method of communication used in underwater and surface
							environments to convey messages through audible signals. For example, divers
							underwater can create sounds by tapping on tanks, while divers on the surface can use,
							e.g., whistles. These sounds alert others, indicate direction or emergencies, and
							facilitate coordination. Sound signaling is particularly valuable in low visibility
							conditions and when visual communication is limited.
						</AboutSubSectionText>
					</AboutSubSection>

					<AboutSubSection
						subSectionTitle={'Text Communication'}
						subSectionIconPath={textCommunicationLoc}
						iconAltText={'Text Communication'}
					>
						<AboutSubSectionText>
							Text communication is a method of communication used in both underwater and surface
							environments to convey messages through written or typed text. Beyond underwater
							writing slates, specialized digital devices can be used in text-based underwater
							communication. Digital devices include dive computers or underwater tablets equipped
							with text messaging capabilities, allowing divers to send and receive text messages
							underwater. Underwater text messaging can be enabled through wireless acoustic or
							optical communication systems. In this context, text communication provides a written
							record, ensures clarity, and allows communication in situations where other methods
							may not be feasible or desirable.
						</AboutSubSectionText>
					</AboutSubSection>

					<AboutSubSection
						subSectionTitle={'Touch Contact'}
						subSectionIconPath={touchContactLoc}
						iconAltText={'Touch Contact'}
					>
						<AboutSubSectionText>
							Touch contract is a method divers use to communicate underwater through tactile
							signals. It involves establishing physical contact with another diver and conveying
							messages through touches, such as taps, nudges, or squeezes. Since the messages that
							can be conveyed are often limited, the signals typically indicate important
							information like the need to stop, go up or down, point out something of interest, or
							signal a problem or emergency.
						</AboutSubSectionText>
					</AboutSubSection>

					<AboutSubSection
						subSectionTitle={'Voice Communication'}
						subSectionIconPath={voiceCommunicationLoc}
						iconAltText={'Voice Communication'}
					>
						<AboutSubSectionText>
							Voice communication is a direct method of communication used in both underwater and
							surface environments to convey messages through spoken words. In underwater
							communication, specialized diving masks or full-face masks with integrated
							communication systems allow divers and/or surface personnel to talk and hear each
							other. These systems use wired or wireless technology to transmit and receive voice
							data.
						</AboutSubSectionText>
					</AboutSubSection>

					<AboutSubSection
						subSectionTitle={'Writing Slates'}
						subSectionIconPath={writingSlateLoc}
						iconAltText={'Writing Slates'}
					>
						<AboutSubSectionText>
							Underwater writing slates are compact and waterproof boards divers use for
							communication and note-taking underwater. They have a smooth surface for writing with
							specialized underwater pencils or markers and a clip or loop for attachment to dive
							gear. Divers hold the slate underwater with one hand while using the other to write or
							draw. They are commonly used to communicate with dive buddies, record dive plans,
							depth readings, and observations. In addition, writing slates can be easily wiped
							clean for reuse.
						</AboutSubSectionText>
					</AboutSubSection>
				</AboutSection>

				<AboutSection sectionTitle={'Message Categories'}>
					<AboutSectionText>
						The various collected messages have been categorized according to a set of categories
						generated through an initial inspection of the collected messages. The categories unveil
						general patterns and trends regarding the messages exchanged and allow for a further
						systematic examination rather than navigating a disjointed array of messages.
					</AboutSectionText>

					<AboutSubSection subSectionTitle={'(EE) Emotions & Expressions'}>
						<AboutSubSectionText>
							Messages in this category relate to or convey human emotions and expressions during a
							dive. Since face-to-face communication is limited underwater, and traditional
							communication methods might not encompass every sentiment a diver wants to express,
							this category helps divers communicate feelings like joy, discomfort, amazement, or
							unease.
						</AboutSubSectionText>
					</AboutSubSection>

					<AboutSubSection subSectionTitle={'(EC) Environmental Conditions'}>
						<AboutSubSectionText>
							Messages in this category provide information about the surrounding environment, i.e.,
							the messages in this category may help divers understand and communicate the current
							state of the water, visibility, and other environmental factors.
						</AboutSubSectionText>
					</AboutSubSection>

					<AboutSubSection subSectionTitle={'(ECM) Equipment & Communication'}>
						<AboutSubSectionText>
							Messages in this category relate to equipment and auxiliary information related to
							equipment and include messages about the status or problems related to diving gear.
						</AboutSubSectionText>
					</AboutSubSection>

					<AboutSubSection subSectionTitle={'(NP) Navigation & Positioning'}>
						<AboutSubSectionText>
							Proper navigation is essential, especially in unfamiliar terrains. Messages in this
							category assist divers in conveying their positions, directions, or any landmarks
							they've encountered.
						</AboutSubSectionText>
					</AboutSubSection>

					<AboutSubSection subSectionTitle={'(SE) Safety & Emergency'}>
						<AboutSubSectionText>
							Messages in this category relate to information that is vital for a safe operation
							underwater, the signaling of danger or the immediate request for assistance.
						</AboutSubSectionText>
					</AboutSubSection>

					<AboutSubSection subSectionTitle={'(WS) Wildlife Sightings'}>
						<AboutSubSectionText>
							Messages in this category allow divers to share their wildlife encounters, which can
							be both for enjoyment and safety purposes.
						</AboutSubSectionText>
					</AboutSubSection>

					<AboutSubSection subSectionTitle={'(QI) Quantitative Information'}>
						<AboutSubSectionText>
							Quantitative information is crucial in many diving scenarios. Messages in this
							category relate to conveying numeric data such as depth, air supply level, time spent
							underwater, size, or distance.
						</AboutSubSectionText>
					</AboutSubSection>
				</AboutSection>

				<AboutSection sectionTitle={'Bibliography'}>
					<BibliographyTable>
						<BibliographyTableItem
							refName={'BL23'}
							author={'Behnke, Lars'}
							year={'2023'}
							title={'Scuba Diving Hand Signals: Underwater Communication Pocket Companion for Recreational Scuba Divers'}
							publisher={'CreateSpace Independent Publishing Platform'}
							note={'2nd Black & White Edition'}
						/>

						<BibliographyTableItem
							refName={'NOAA01'}
							author={'NOAA Diving Program (U.S.)'}
							year={'2001'}
							title={'NOAA Diving Manual: Diving for Science and Technology'}
							publisher={'The National Oceanic and Atmospheric Administration (NOAA) & U.S. Department of Commerce'}
							note={'4th Edition'}
						/>

						<BibliographyTableItem
							refName={'USND16'}
							author={'U.S. Navy Diving'}
							year={'2016'}
							title={'U.S. Navy Diving Manual'}
							publisher={'Direction of Commander, Naval Sea Systems Command'}
						/>

						<BibliographyTableItem
							refName={'PG90'}
							author={'Prosser, Joe and Grey, H. V'}
							year={'1990'}
							title={'Cave Diving Communications'}
							publisher={'Branford, Florida: Cave Diving Section of the National Speleological Society'}
						/>

						<BibliographyTableItem
							refName={'RD07'}
							author={'Richardson, Drew et al'}
							year={'2007'}
							title={'PADI Open Water Diver Manual'}
							publisher={'Rancho Santa Margarita, California: PADI'}
							note={'Version 2.09'}
						/>

						<BibliographyTableItem
							refName={'RD04'}
							author={'Richardson, Drew et al'}
							year={'2004'}
							title={'PADI Adventures in Diving'}
							publisher={'Rancho Santa Margarita, California: PADI'}
							note={'Version 2.4'}
						/>

						<BibliographyTableItem
							refName={'PADI16'}
							author={'PADI'}
							year={'2016'}
							title={'PADI Advanced Open Water Diver Manual'}
							publisher={'Rancho Santa Margarita, California: PADI'}
							note={'Version 1.0'}
						/>

						<BibliographyTableItem
							refName={'RSTC05'}
							author={'Recreational Scuba Training Council (RSTC), Inc'}
							year={'2016'}
							title={'Common Hand Signals for Scuba Diving'}
							publisher={'Florida, Jackonville: Recreational Scuba Training Council (RSTC), Inc'}
						/>

						<BibliographyTableItem
							refName={'BJ06'}
							author={'Bevan, John'}
							year={'2006'}
							title={"The Professional Diver's Handbook"}
							publisher={'Submex Limited'}
							note={'2nd Edition'}
						/>

						<BibliographyTableItem
							refName={'ERDI22'}
							author={'Emergency Response Diving International (ERDI)'}
							year={'2022'}
							title={'ERDI Standards and Procedures. Part 2: ERDI Diver Standards'}
							publisher={'Emergency Response Diving International (ERDI)'}
						/>

						<BibliographyTableItem
							refName={'SD09'}
							author={'van Stijn, Dave and Harterink, Mike'}
							year={'2009'}
							title={'Scubasigns: The Guide to All Diving Hand Signals'}
							publisher={'Scubasigns Foundation'}
						/>

						<BibliographyTableItem
							refName={'DJ14'}
							author={'DeMarco, K. J. and West, M. E. and Howard, A. M'}
							year={'2014'}
							title={'Underwater Human-Robot Communication: A Case Study with Human Divers'}
							journal={'2014 IEEE International Conference on Systems, Man, and Cybernetics (SMC), San Diego, CA, USA, 2014'}
							pageNumbers={'pp. 3738-3743'}
							doi={'10.1109/SMC.2014.6974512'}
						/>

						<BibliographyTableItem
							refName={'ND21'}
							author={'Nađ, Ð. et al'}
							year={'2021'}
							title={'Diver-Robot Communication Using Earable Sensing Diver Glove'}
							journal={'OCEANS 2021: San Diego - Porto, San Diego, CA, USA, 2021'}
							pageNumbers={'pp. 1-6'}
							doi={'10.23919/OCEANS44145.2021.9706117'}
						/>

						<!-- Supporting Material -->
						<BibliographyTableItem
							refName={'JR88'}
							author={'Johansen, Robert'}
							year={'1988'}
							title={'Groupware: Computer Support for Business Teams'}
							publisher={'New York City, New York: The Free Press'}
						/>
					</BibliographyTable>
				</AboutSection>

				<AboutSection sectionTitle={'Citing This Website'}>
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
								<CodeBlock
									background="bg-surface-500"
									button=""
									language="plaintext"
									code={citationAPA}
								/>
							{:else if tabSet === 1}
								<CodeBlock
									background="bg-surface-500"
									button=""
									language="bibtex"
									code={citationBibtex}
								/>
							{/if}
						</svelte:fragment>
					</TabGroup>
				</AboutSection>

				<AboutSection sectionTitle={'Website Source Code'} bottomBorder={false}>
					<AboutSectionText>
						The source code and underlying data is available under a
						<a class="hover:underline" href="https://creativecommons.org/licenses/by/4.0/"
							>CC-BY-4.0</a
						>
						license on
						<a class="hover:underline" href="https://github.com/NicklasXYZ/uw_comms">Github</a>.
					</AboutSectionText>
				</AboutSection>
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
