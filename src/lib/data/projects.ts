type ProjectsInYear = {
	year: number;
	projects: Project[];
};

export type Project = {
	name: string;
	role: string;
	media?: string;
	description: string;
	footer: {
		info: string;
		link: {
			title: string;
			url: string;
		};
	};
	priority: number;
};

export const projects: ProjectsInYear[] = [
	{
		year: 2025,
		projects: [
			{
				name: 'Twin Pulse',
				role: 'Sole Developer',
				description: 'A highly performant, competitive rhythm game built from scratch in C#.',
				footer: {
					info: 'More info coming soon!',
					link: {
						title: '',
						url: ''
					}
				},
				priority: 1
			},
			{
				name: 'Fully Automatic Remote Tournament',
				role: 'WebUI Developer',
				description:
					'A standings viewer for StepmaniaX online tournaments. F.A.R.T (Fully Automatic Remote Tournament) runs gauntlet style events for the SMX community with minimal human intervention needed.',
				footer: {
					info: 'Check out the website!: ',
					link: {
						title: 'Website',
						url: 'https://fart-webui.vercel.app/'
					}
				},
				priority: 1
			}
		]
	},
	{
		year: 2024,
		projects: [
			{
				name: 'toverlay',
				role: 'Sole Developer',
				description: 'A custom tournament manager tool for OBS.',
				footer: {
					info: 'Check out the Github repo here: ',
					link: {
						title: 'GitHub',
						url: 'https://github.com/AlexMassenzio/toverlay'
					}
				},
				priority: -1
			}
		]
	},
	{
		year: 2023,
		projects: [
			{
				name: "Mr. Puffles' Day Out",
				role: 'Gameplay Systems / Audio Integrator',
				media: 'https://img.itch.zone/aW1hZ2UvMjE1NTUyNy8xMjcxNDk1NS5wbmc=/original/tgAQLi.png',
				description:
					'A walk in the park. Ranked 180th out of 6,700+ entries in the 2023 GMTK Game Jam.',
				footer: {
					info: 'Play the game jam submission here!: ',
					link: {
						title: 'Play',
						url: 'https://alexmassenzio.itch.io/mr-puffles-day-out'
					}
				},
				priority: 1
			},
			{
				name: 'RhythmTools',
				role: 'Sole Developer',
				description:
					'A set of simple Unity tools to create rhythm based mechanics and visual effects.',
				footer: {
					info: 'Check out the Github repo here: ',
					link: {
						title: 'GitHub',
						url: 'https://github.com/AlexMassenzio/RhythmTools'
					}
				},
				priority: 1
			}
		]
	},
	{
		year: 2022,
		projects: [
			{
				name: 'Wordchain',
				role: 'Sole Developer',
				media: '/wordchain.png',
				description:
					'Connect the Wordchain! A fun webgame inspired from the Wordle and other similar games.',
				footer: {
					info: 'Play Wordchain: ',
					link: {
						title: 'Play',
						url: 'https://www.wordcha.in/'
					}
				},
				priority: 0
			},
			{
				name: 'Get That Bread!',
				role: 'Gameplay Systems / Audio Integrator',
				media: 'https://img.itch.zone/aW1nLzk1MzI4MDAucG5n/315x250%23c/1XOqtz.png',
				description:
					'A board game RPG about a park goose in search of some delicious bread. Ranked 107th out of 6,000+ in the 2022 GMTK Game Jam.',
				footer: {
					info: 'Check out the GMTK Game Jam submission page: ',
					link: {
						title: 'itch.io',
						url: 'https://itch.io/jam/gmtk-jam-2022/rate/1616588'
					}
				},
				priority: 1
			}
		]
	},
	{
		year: 2019,
		projects: [
			{
				name: 'Engineer Arena',
				role: 'Technical Lead',
				media:
					'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1118950/header.jpg?t=1565798542',
				description:
					'Upgrade on the fly and come out of the arena on top in this frantic split-screen arena shooter!',
				footer: {
					info: 'Visit our Steam page!: ',
					link: {
						title: 'Steam',
						url: 'https://store.steampowered.com/app/1118950/Engineer_Arena/'
					}
				},
				priority: 1
			},
			{
				name: 'BansPage',
				role: 'Co-Founder',
				media: '/banspage.png',
				description:
					"The Bans Page was designed as an answer to the heated debate surrounding Super Smash Bros. Ultimate's tournament-legal stagelist. The website was designed to allow anyone to create and share custom stagelists. Since its launch, it has become a tool that is widely used by tournament organizers across the competitive scene to post their official tournament rulesets.",
				footer: {
					info: 'Come visit the website at : ',
					link: {
						title: 'bans.page',
						url: 'https://bans.page/'
					}
				},
				priority: 1
			}
		]
	},
	{
		year: 2018,
		projects: [
			{
				name: 'Intrepid Musem Growler Exhibits',
				role: 'Programmer, Audio/Video Integrator',
				media: '/Sonar.jpg',
				description:
					'I was a major contributor in the creation of two interactive exhibitions for the Intrepid Museum in New York City. The first exhibit displayed and simulated the sounds of the interior of a Growler Submarine at the Intrepid Museum, and the second exhibit was an interactive console in which users can guess underwater sounds. My responsibility was to program the user interface and the backend code that required me to integrate my code with 8 channel audio, multiple displays, and touch controls.',
				footer: {
					info: 'You can visit them at the Growler submarine pavillion: ',
					link: {
						title: 'Growler Exhibit',
						url: 'https://www.intrepidmuseum.org/growler'
					}
				},
				priority: 0
			},
			{
				name: 'Welcome to Radiation Valley',
				role: 'Programmer',
				media: 'https://img.itch.zone/aW1hZ2UvMjczMjUyLzEzMjIxNzguanBn/original/6iHbzD.jpg',
				description:
					"Play as a farmer in the midwest United States near a city that's a potential nuclear target -- do you live life as normal, or do you take every possible precaution against the inevitable?",
				footer: {
					info: 'Check out the itch.io page here: ',
					link: {
						title: 'itch.io',
						url: 'https://har494.itch.io/welcome-to-radiation-valley'
					}
				},
				priority: -1
			},
			{
				name: 'Altotude',
				role: 'Creator',
				description:
					'An experiment that allows to control the enviorment with your microphone. Use your pitch to move around the ball!',
				footer: {
					info: 'Download the game here: ',
					link: {
						title: 'Altotude',
						url: 'https://alexmassenzio.itch.io/altotude'
					}
				},
				priority: -1
			}
		]
	},
	{
		year: 2017,
		projects: [
			{
				name: 'Souloist',
				role: 'Game Mechanics/Programmer',
				media: 'https://img.itch.zone/aW1hZ2UvMTc4MzMxLzgzMzY5My5wbmc=/original/qXYBFA.png',
				description: 'Co-op rhythm game! Developed for the 2017 Music Game Jam.',
				footer: {
					info: 'Check out the itch.io submission here: ',
					link: {
						title: 'itch.io',
						url: 'https://waveparadigm.itch.io/souloist'
					}
				},
				priority: -1
			},
			{
				name: 'Unraveling Toxic Behavior in Online  Games',
				role: 'Author',
				description:
					'A technical paper on toxic behavior in gaming, the reasons it arises in competitive games, and long-term solutions that game developers can implement in their games.',
				footer: {
					info: 'Read the article here: ',
					link: {
						title: 'PDF',
						url: './ToxicityAlexMassenzio.pdf'
					}
				},
				priority: -1
			},
			{
				name: 'Kujira',
				role: 'Programming',
				media: 'https://gfycat.com/ifr/FeistyMeatyCrocodileskink',
				description:
					"A whale has been infected with a horrible disease, and it's up to you to find the antidote! This castlevania-esque adventure game was make for SGDC's Summer Jam 4 and won first place!",
				footer: {
					info: 'Download the game here: ',
					link: {
						title: 'itch.io',
						url: 'https://ckuras.itch.io/kujira'
					}
				},
				priority: -1
			},
			{
				name: 'Kinect Synthesizer',
				role: 'Creator',
				media: 'https://gfycat.com/ifr/TinyHeavenlyGilamonster',
				description:
					'Use your body to make sound! The Kinect Synthesizer was made as a final project for one of my Music & Technology courses. The project utilized SynapseForKinect for tracking body movements, Supercollider for prototyping, and PureData(pd) for converting the tracking data into sound.',
				footer: {
					info: 'Watch the demonstration here: ',
					link: {
						title: 'YouTube',
						url: 'https://youtu.be/3lVhU3V50gs'
					}
				},
				priority: 2
			}
		]
	},
	{
		year: 2016,
		projects: [
			{
				name: 'Audio Tour of Hoboken',
				role: 'Programmer',
				media: 'https://gfycat.com/ifr/AbsoluteForkedBlueandgoldmackaw',
				description:
					'Recording samples were taken from various parts of Hoboken, NJ. Audio was mapped by location to a midi controller called a Launchpad. Audio mapping was achieved using SuperCollider, and midi lighting was made possible through the Launchpad.py library.',
				footer: {
					info: 'Watch the demonstration here: ',
					link: {
						title: 'YouTube',
						url: 'https://youtu.be/Pqw1Fj6YOdE'
					}
				},
				priority: -1
			},
			{
				name: 'Tangent',
				role: 'Creator',
				media: 'https://gfycat.com/ifr/WellmadeSlimyAmericancicada',
				description:
					"Currently in development! 2D Unity game originally created for SGDC's Game Jam X and GitHub's Game-Off 2016!",
				footer: {
					info: 'Play the GitHub Game-Off submission here: [OLD: 0.1.0]: ',
					link: {
						title: 'Signups',
						url: './Tangent/index.html'
					}
				},
				priority: -1
			},
			{
				name: 'RedBot',
				role: 'Lead Developer / Creator',
				description:
					'RedBot is a open source project with the goal to create an easy to manage Discord bot bundled with an array of useful commands.',
				footer: {
					info: 'The link to the GitHub repository can be found here: ',
					link: {
						title: 'Github',
						url: 'https://github.com/AlexMassenzio/RedBot'
					}
				},
				priority: -1
			},
			{
				name: 'Pakij',
				role: 'Visual Effects & Sound Design',
				media: 'https://gfycat.com/ifr/DefenselessGrippingChicken',
				description:
					"Pakij is a game where you (a rejected package) try to escape the factory that seems to be created to soley crush you. The game snagged 1st place in the Stevens Game Development Club's Game Jam IX.",
				footer: {
					info: 'Download and play here! ',
					link: {
						title: 'Pakij',
						url: 'https://tehpilot.itch.io/pakij'
					}
				},
				priority: -1
			},
			{
				name: 'Stevens Overwatch League',
				role: 'Head Organizer / Founder',
				description:
					'With two season ran, the Stevens Overwatch League is an on-campus eSports league dedicated to getting more gamers on campus to team up and face each other in a fun, but competitive format. Each season pulls in around 50 Stevens students.',
				footer: {
					info: 'Season 2 Playoffs: ',
					link: {
						title: 'Challonge',
						url: 'http://c2gs.challonge.com/sol2'
					}
				},
				priority: -1
			}
		]
	},
	{
		year: 2015,
		projects: [
			{
				name: 'Project HiWay',
				role: 'Creator',
				description:
					"Project HiWay was a project I started to explore the VR Rhythm Game genre. The game won 3rd place in the Stevens Game Development Club's Game Jam VII",
				footer: {
					info: 'Get the game here: ',
					link: {
						title: 'itch.io',
						url: 'https://alexmassenzio.itch.io/project-hiway'
					}
				},
				priority: -1
			},
			{
				name: 'alexmassenzio.com',
				role: 'Creator',
				description: 'Created this website to showcase projects I have done over time!',
				footer: {
					info: "You're already here, so here's a empty hyperlink to click on!:",
					link: {
						title: 'Click me!',
						url: ''
					}
				},
				priority: 3
			}
		]
	},
	{
		year: 2014,
		projects: [
			{
				name: 'GravBall',
				role: 'Creator',
				description:
					'My very first game I have designed from the ground up! It somehow managed to get 2nd place in a small game jam on-campus.',
				footer: {
					info: 'Download and play here!: ',
					link: {
						title: 'GravBall',
						url: './GravBall.zip'
					}
				},
				priority: 3
			}
		]
	}
];
