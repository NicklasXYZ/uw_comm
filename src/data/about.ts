export interface AboutSubsection {
	title: string;
	icon?: string;
	iconAlt?: string;
	body: string[];
}

export interface AboutSection {
	title: string;
	body?: string[];
	figure?: {
		src: string;
		alt: string;
		caption: string;
	};
	subsections?: AboutSubsection[];
}

export interface BibliographyEntry {
	refName: string;
	author: string;
	year: string;
	title: string;
	publisher?: string;
	journal?: string;
	pageNumbers?: string;
	doi?: string;
	note?: string;
}

export const citationAPA =
	'Andersen, N. S. (2023). Underwater Communication. URL: https://uwcomm.infonest.xyz/. DOI: https://doi.org/10.5281/zenodo.7966369.';

export const citationBibtex = `@misc{uwcomm2023,
   title        = {Underwater Communication},
   author       = {Andersen, N. S.},
   year         = {2023},
   howpublished = {URL:~\\url{https://uwcomm.infonest.xyz/}. DOI:~\\url{https://doi.org/10.5281/zenodo.7966369}},
}`;

export const aboutSections: AboutSection[] = [
	{
		title: 'About',
		body: [
			'This website collects, organizes, and showcases documented information, in terms of the specific messages, that various underwater and surface actors may need to exchange during a recreational or professional dive (Figure 1). The messages that need to or can be conveyed depend on the location and time of the specific actor sending and/or receiving the message. Furthermore, the messages can be exchanged through various communication methods such as body language, flags & buoys, hand signals, light signals, etc. In the following sections, we describe these aspects to then introduce the various criteria by which we organize the messages exchanged by various actors.'
		],
		figure: {
			src: '/assets/figure1_v2.svg',
			alt: 'An illustration of the different actors that may need to communicate during a dive.',
			caption:
				'Figure 1: An illustration of the different actors that may need to communicate during a dive. Surface supporting personnel is typically located on a ship above the surface, while divers operate below the surface. Professional diving activities may also be supported by a Geographical Positioning System (GPS), Autonomous Surface Vehicles (ASVs), and Autonomous Underwater Vehicles (AUVs).'
		}
	},
	{
		title: 'Message Encoders & Decoders',
		body: [
			'Communication involves a sender who encodes a message (the message encoder) and a receiver who decodes that message (the message decoder). In this context, the message is the information or meaning conveyed from the sender to the receiver. Thus the sender must use a common language for the message to be understood by the receiver. In the context of Figure 1, we can identify relevant actors that typically exchange messages, i.e., encode or decode messages. In the following, we describe the most relevant ones in more detail.'
		],
		subsections: [
			{
				title: 'Divers',
				icon: '/assets/diver.svg',
				iconAlt: 'Divers',
				body: [
					"Divers are underwater personnel trained in diving techniques and equipped with diving gear making them capable of working in an aquatic environment. Divers' activities span from recreational to professional activities that may involve conducting scientific research, underwater inspections, maintenance, search and rescue operations, etc. In these various activities, divers may want to communicate with each other or other actors to ensure safety and enable task coordination. Additionally, they might want to exchange information about the environment they are exploring."
				]
			},
			{
				title: 'Autonomous Underwater Vehicles',
				icon: '/assets/auv.svg',
				iconAlt: 'Autonomous Underwater Vehicles',
				body: [
					'Autonomous Underwater Vehicles (AUVs) are unmanned robotic vehicles designed for underwater operations and can work alongside professional divers carrying out specific tasks. AUVs are equipped with various sensors, instruments, and propulsion systems and perform various tasks like collecting data or mapping the seafloor. Divers may need to communicate with AUVs to perform cooperative tasks by providing instructions, setting waypoints, or modifying parameters. The communication and interaction between divers and AUVs can facilitate underwater exploration, data acquisition, and access to challenging or hazardous areas.'
				]
			},
			{
				title: 'Surface-Supporting Personnel',
				icon: '/assets/surface.svg',
				iconAlt: 'Surface-Supporting Personnel',
				body: [
					"Surface-supporting personnel oversee and assist divers' activities. Their tasks involve monitoring divers' safety, providing logistical support, and coordinating operations from the surface. In this context, divers need to communicate with surface-supporting personnel for monitoring and support purposes. They report progress, provide updates on their condition, and request assistance when necessary. Communication is essential for surface personnel to ensure divers' well-being, respond promptly to emergencies, and maintain effective operational support."
				]
			}
		]
	},
	{
		title: 'Spatial & Temporal Context',
		body: [
			'The spatial and temporal aspects of communication occurring between underwater and/or surface-supporting personnel can be described in terms of the Computer Supported Cooperative Work (CSCW) time-place matrix theory [JR88], which describes patterns of collaboration and coordination in work environments. The CSCW time-place matrix describes two dimensions: (i) The first dimension pertains to whether the exchange of information between individuals can occur at the same time (synchronous) or at different times (asynchronous). (ii) The second dimension pertains to whether colocated or remote individuals are considered. Conclusively, methods of communication can be categorized into four distinct categories: Colocated and synchronous, remote and synchronous, colocated and asynchronous, and remote and asynchronous. We will provide more details on the individual components of the two dimensions in the following.'
		],
		subsections: [
			{
				title: 'Colocated',
				icon: '/assets/colocated.svg',
				iconAlt: 'Colocated',
				body: [
					'Colocated communication refers to individuals being physically present in the same location during their interaction. It allows for direct observation of body language, facial expressions, and non-verbal cues, enhancing understanding and conveying emotions effectively. In addition, colocated communication facilitates immediate feedback and real-time adjustments.'
				]
			},
			{
				title: 'Remote',
				icon: '/assets/remote.svg',
				iconAlt: 'Remote',
				body: [
					'Remote communication refers to the exchange of information and interaction between physically separated individuals. Remote communication allows for collaboration and interaction across distances, enabling flexibility but involves challenges related to coordination and interpreting non-verbal cues.'
				]
			},
			{
				title: 'Synchronous',
				icon: '/assets/sync.svg',
				iconAlt: 'Synchronous',
				body: [
					'Synchronous communication refers to real-time exchanges where individuals are actively engaged and respond immediately. This mode of communication is useful for time-sensitive situations, quick decision-making, and immediate coordination. However, this mode relies on individuals being available at the same time for effective engagement.'
				]
			},
			{
				title: 'Asynchronous',
				icon: '/assets/async.svg',
				iconAlt: 'Asynchronous',
				body: [
					'Asynchronous communication involves a delay between sending and receiving messages, such as with, e.g., email or discussion boards. This mode of communication allows for more thoughtful and composed responses, and it is beneficial in less time-sensitive situations.'
				]
			}
		]
	},
	{
		title: 'Communication Methods',
		body: [
			'Various methods exist when communication between divers and/or surface personnel is necessary. In the following, we will give a comprehensive overview of possible communication methods and their characteristics and use. The methods we describe have a set of standard use cases and signals with agreed-upon meanings. However, many methods allow the definition of other signals with possibly new meanings. Agreeing on the signals and their meanings is typically established during dive planning to ensure clear communication and prompt responses.'
		],
		subsections: [
			{
				title: 'Body Language',
				icon: '/assets/body_language.svg',
				iconAlt: 'Body Language',
				body: [
					'Body language is an extension of hand signaling, allowing divers to convey messages through physical movements and positions involving or engaging body parts beyond just the hands. For example, body language gestures may include nodding to indicate agreement, shaking the head to convey disagreement, or shrugging to express uncertainty. Body language may also refer to how posture and orientation can indicate direction or how eye contact and gaze can be used to draw attention.'
				]
			},
			{
				title: 'Flags & Buoys',
				icon: '/assets/flags_buoys.svg',
				iconAlt: 'Flags & Buoys',
				body: [
					'Flags and buoys are visual tools used for communication in a surface environment and are vital tools for divers to engage with surface-supporting personnel. They come in various colors, shapes, and patterns, each representing a specific message or indicating a particular situation. By deploying and holding a signaling device like a surface marker buoy, divers can signal their presence and the need for attention or assistance.'
				]
			},
			{
				title: 'Hand Signals',
				icon: '/assets/hand_signaling.svg',
				iconAlt: 'Hand Signals',
				body: [
					"Hand signals are a system of gestures divers use to communicate in real-time to convey information quickly and efficiently underwater. It requires both parties to be present and actively engaged. Divers utilize a set of standardized hand signals, although gestures can vary informally between diving teams or regions, allowing for flexibility in communication. While some common gestures are universally understood, they don't follow a specific template or format, providing divers with adaptability in conveying messages."
				]
			},
			{
				title: 'Light Signals',
				icon: '/assets/light_signaling.svg',
				iconAlt: 'Light Signals',
				body: [
					'Light signaling is a technique that divers can use to communicate by turning them on and off, shining them in specific patterns, or directing the light toward a person or object. Essential light signals convey whether a diver is OK or needs attention.'
				]
			},
			{
				title: 'Line Markers',
				icon: '/assets/line_marker.svg',
				iconAlt: 'Line Markers',
				body: [
					'Line markers are visual indicators used in underwater communication to enhance navigation, safety, and coordination. They are placed along underwater lines and consist of colored bands, knots, or distinctive shapes. These markers serve as reference points for divers, helping them maintain position, gauge distance, and navigate accurately.'
				]
			},
			{
				title: 'Line Pulling',
				icon: '/assets/line_pulling.svg',
				iconAlt: 'Line Pulling',
				body: [
					'Line or rope pulling is a (typically secondary) communication technique used in conditions of low visibility or when primary communication methods, such as voice communication, fail. It involves connecting a diver to another person, either another diver or a line tender on the surface. Divers can convey messages and coordinate actions through predetermined signals or tugs on the line providing a clear and consistent way to convey information. However, the range of possible messages is limited.'
				]
			},
			{
				title: 'Sound Signals',
				icon: '/assets/sound_signaling.svg',
				iconAlt: 'Sound Signals',
				body: [
					'Sound signaling is a method of communication used in underwater and surface environments to convey messages through audible signals. For example, divers underwater can create sounds by tapping on tanks, while divers on the surface can use, e.g., whistles. These sounds alert others, indicate direction or emergencies, and facilitate coordination. Sound signaling is particularly valuable in low visibility conditions and when visual communication is limited.'
				]
			},
			{
				title: 'Text Communication',
				icon: '/assets/text_comm.svg',
				iconAlt: 'Text Communication',
				body: [
					'Text communication is a method of communication used in both underwater and surface environments to convey messages through written or typed text. Beyond underwater writing slates, specialized digital devices can be used in text-based underwater communication. Digital devices include dive computers or underwater tablets equipped with text messaging capabilities, allowing divers to send and receive text messages underwater. Underwater text messaging can be enabled through wireless acoustic or optical communication systems. In this context, text communication provides a written record, ensures clarity, and allows communication in situations where other methods may not be feasible or desirable.'
				]
			},
			{
				title: 'Touch Contact',
				icon: '/assets/touch_contact.svg',
				iconAlt: 'Touch Contact',
				body: [
					'Touch contact is a method divers use to communicate underwater through tactile signals. It involves establishing physical contact with another diver and conveying messages through touches, such as taps, nudges, or squeezes. Since the messages that can be conveyed are often limited, the signals typically indicate important information like the need to stop, go up or down, point out something of interest, or signal a problem or emergency.'
				]
			},
			{
				title: 'Voice Communication',
				icon: '/assets/voice_comm.svg',
				iconAlt: 'Voice Communication',
				body: [
					'Voice communication is a direct method of communication used in both underwater and surface environments to convey messages through spoken words. In underwater communication, specialized diving masks or full-face masks with integrated communication systems allow divers and/or surface personnel to talk and hear each other. These systems use wired or wireless technology to transmit and receive voice data.'
				]
			},
			{
				title: 'Writing Slates',
				icon: '/assets/writing_slate.svg',
				iconAlt: 'Writing Slates',
				body: [
					'Underwater writing slates are compact and waterproof boards divers use for communication and note-taking underwater. They have a smooth surface for writing with specialized underwater pencils or markers and a clip or loop for attachment to equipped dive gear. Divers hold the slate underwater with one hand while using the other to write or draw. They are commonly used to communicate with dive buddies, record dive plans, depth readings, and observations. In addition, writing slates can be easily wiped clean for reuse.'
				]
			}
		]
	},
	{
		title: 'Message Categories',
		body: [
			'The various messages documented in the literature and research collected on this website have been categorized according to a set of categories generated through an initial inspection of the collected messages. The categories unveil general patterns and trends regarding the messages exchanged and allow for a further systematic examination rather than navigating a disjointed array of messages.'
		],
		subsections: [
			{
				title: '(CO) Coordination',
				body: [
					'Messages in this category pertain to the logistical aspects of a recreational or professional dive, aimed at ensuring seamless operation among divers/surface attendants/AUVs. Coordination messages are versatile messages that can be adapted and used in various contexts. Thet help harmonize the actions of everyone involved, allowing for a more efficient and safe operation.'
				]
			},
			{
				title: '(EE) Emotions & Expressions',
				body: [
					'Messages in this category relate to or convey human emotions and expressions. Since most communication methods described earlier might not encompass every sentiment a diver/surface attendant wants to express, this category of messages helps divers and/or surface attendants communicate feelings like joy, discomfort, amazement, or unease.'
				]
			},
			{
				title: '(EC) Environmental Conditions',
				body: [
					'Messages in this category provide information about the surrounding environment, i.e., they may help divers understand and communicate the current state of the water, visibility, and other environmental factors.'
				]
			},
			{
				title: '(ECM) Equipment & Communication',
				body: [
					'Messages in this category relate to equipment or other auxiliary information related to equipment and include messages about the status or problems related to diving gear.'
				]
			},
			{
				title: '(NP) Navigation & Positioning',
				body: [
					'Proper navigation is essential, especially in unfamiliar terrains. Messages in this category assist divers/surface attendants/AUVs in conveying positions, directions, orientation, or, e.g., landmarks for coordination or purely informational purposes.'
				]
			},
			{
				title: '(SE) Safety & Emergency',
				body: [
					'Messages in this category relate to information that is vital for a safe operation underwater, the current status of a diver, the signaling of danger or the immediate request for assistance.'
				]
			},
			{
				title: '(WS) Wildlife Sightings',
				body: [
					'Messages in this category allow divers/surface attendants to share wildlife encounters, which can be both for enjoyment and safety purposes.'
				]
			},
			{
				title: '(QI) Quantitative Information',
				body: [
					'Quantitative information is crucial in many diving scenarios. Messages in this category relate to conveying numeric data such as depth, air supply level, time spent underwater, size, or distance.'
				]
			}
		]
	}
];

export const bibliography: BibliographyEntry[] = [
	{
		refName: 'BL23',
		author: 'Behnke, Lars',
		year: '2023',
		title:
			'Scuba Diving Hand Signals: Underwater Communication Pocket Companion for Recreational Scuba Divers',
		publisher: 'CreateSpace Independent Publishing Platform',
		note: '2nd Black & White Edition'
	},
	{
		refName: 'NOAA01',
		author: 'NOAA Diving Program (U.S.)',
		year: '2001',
		title: 'NOAA Diving Manual: Diving for Science and Technology',
		publisher:
			'The National Oceanic and Atmospheric Administration (NOAA) & U.S. Department of Commerce',
		note: '4th Edition'
	},
	{
		refName: 'USND16',
		author: 'U.S. Navy Diving',
		year: '2016',
		title: 'U.S. Navy Diving Manual',
		publisher: 'Direction of Commander, Naval Sea Systems Command'
	},
	{
		refName: 'PG90',
		author: 'Prosser, Joe and Grey, H. V',
		year: '1990',
		title: 'Cave Diving Communications',
		publisher: 'Branford, Florida: Cave Diving Section of the National Speleological Society'
	},
	{
		refName: 'RD07',
		author: 'Richardson, Drew et al',
		year: '2007',
		title: 'PADI Open Water Diver Manual',
		publisher: 'Rancho Santa Margarita, California: PADI',
		note: 'Version 2.09'
	},
	{
		refName: 'RD04',
		author: 'Richardson, Drew et al',
		year: '2004',
		title: 'PADI Adventures in Diving',
		publisher: 'Rancho Santa Margarita, California: PADI',
		note: 'Version 2.4'
	},
	{
		refName: 'PADI16',
		author: 'PADI',
		year: '2016',
		title: 'PADI Advanced Open Water Diver Manual',
		publisher: 'Rancho Santa Margarita, California: PADI',
		note: 'Version 1.0'
	},
	{
		refName: 'RSTC05',
		author: 'Recreational Scuba Training Council (RSTC), Inc',
		year: '2016',
		title: 'Common Hand Signals for Scuba Diving',
		publisher: 'Florida, Jackonville: Recreational Scuba Training Council (RSTC), Inc'
	},
	{
		refName: 'BJ06',
		author: 'Bevan, John',
		year: '2006',
		title: "The Professional Diver's Handbook",
		publisher: 'Submex Limited',
		note: '2nd Edition'
	},
	{
		refName: 'ERDI22',
		author: 'Emergency Response Diving International (ERDI)',
		year: '2022',
		title: 'ERDI Standards and Procedures. Part 2: ERDI Diver Standards',
		publisher: 'Emergency Response Diving International (ERDI)'
	},
	{
		refName: 'SD09',
		author: 'van Stijn, Dave and Harterink, Mike',
		year: '2009',
		title: 'Scubasigns: The Guide to All Diving Hand Signals',
		publisher: 'Scubasigns Foundation'
	},
	{
		refName: 'DJ14',
		author: 'DeMarco, K. J. and West, M. E. and Howard, A. M',
		year: '2014',
		title: 'Underwater Human-Robot Communication: A Case Study with Human Divers',
		journal:
			'2014 IEEE International Conference on Systems, Man, and Cybernetics (SMC), San Diego, CA, USA, 2014',
		pageNumbers: 'pp. 3738-3743',
		doi: '10.1109/SMC.2014.6974512'
	},
	{
		refName: 'ND21',
		author: 'Nađ, Ð. et al',
		year: '2021',
		title: 'Diver-Robot Communication Using Earable Sensing Diver Glove',
		journal: 'OCEANS 2021: San Diego - Porto, San Diego, CA, USA, 2021',
		pageNumbers: 'pp. 1-6',
		doi: '10.23919/OCEANS44145.2021.9706117'
	},
	{
		refName: 'JR88',
		author: 'Johansen, Robert',
		year: '1988',
		title: 'Groupware: Computer Support for Business Teams',
		publisher: 'New York City, New York: The Free Press'
	}
];
