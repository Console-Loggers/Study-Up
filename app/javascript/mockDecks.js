let decks = [
	{
		id: 1,
		title: 'JavaScript',
		description: 'JS terminology',
		user_id: 1,
		cards: [
			{
				id: 1,
				term: 'Function',
				definition: 'A reusable block of code that performs a specific action.',
				deck_id: 1,
			},
			{
				id: 2,
				term: 'Comparison Operator',
				definition:
					'Comparison operators are used in logical statements to determine equality or difference between variables or values.',
				deck_id: 1,
			},
		],
	},
	{
		id: 2,
		title: 'React JS',
		description: 'React JS terminology',
		user_id: 1,
		cards: [
			{
				id: 1,
				term: 'Component',
				definition:
					'Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.',
				deck_id: 2,
			},
			{
				id: 2,
				term: 'Lifecycle Methods',
				definition:
					'What are React lifecycle methods? You can think of React lifecycle methods as the series of events that happen from the birth of a React component to its death. Every component in React goes through a lifecycle of events. I like to think of them as going through a cycle of birth, growth, and death.',
				deck_id: 2,
			},
		],
	},
]

export default decks
