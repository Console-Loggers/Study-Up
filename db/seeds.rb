# Seeds

# Creating a User
# user = User.create! email: 'mina@test.com', password: 'test123', password_confirmation: 'test123'




users = [
    {
		email: 'amanda@email.com',
		password: 'password',
	},
	{
		email: 'alan@email.com',
		password: 'password',
	},
	{
		email: 'chris@email.com',
		password: 'password',
	},
	{
		email: 'matt@email.com',
		password: 'password',
	}
]

users.each do |attributes|
  User.create attributes
  puts "creating user #{attributes}"
end

decks = [
	{
		title: 'Javascript Terms',
		description: 'Study terms to learn about javascript',
        user_id: 1
	},
	{
		title: 'Disney Princesses',
		description: 'Study up!',
        user_id: 2
    },
    {
		title: 'Shapes',
		description: 'Make sure to know different shapes',
        user_id: 3
    },
    {
		title: 'Animal Sightings',
		description: 'Animals have many sightings',
        user_id: 3
    }
]

decks.each do |attributes|
  Deck.create attributes
  puts "creating deck #{attributes}"
end

cards = [
    # title: 'Javascript Terms',
    # description: 'Study terms to learn about javascript',
    # user_id: 1
    {
        term: 'Component',
		definition:
			'A class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.',
		deck_id: 1
	},
	{
		term: 'Function',
		definition: 'A reusable block of code that performs a specific action.',
		deck_id: 1
	},
	{
		term: 'Comparison Operator',
		definition:
			'Comparison operators are used in logical statements to determine equality or difference between variables or values.',
		deck_id: 1
    },
# title: 'Disney Princesses',
# description: 'Study up!',
# user_id: 2
    {
		term: 'Ariel',
        definition: 'princess who lives under the sea',
        deck_id: 4
	},
	{
		term: 'Moana',
        definition: 'top favorite sea fairing princess of Motunui',
        deck_id: 4
	},
	{
		term: 'Elsa',
        definition: 'Let it go!',
        deck_id: 4
    },
    {
		term: 'Belle',
        definition: 'princess who sees inner beauty in the beast and enjoys a good book',
        deck_id: 4
    },
# title: 'Shapes',
# description: 'Make sure to know different shapes',
# user_id: 3
    {
        term: 'Square',
        definition: 'the one with 4 pointy corners',
        deck_id: 3
    },
    {
        term: 'Circle',
        definition: 'the one without any pointy corners',
        deck_id: 3
    },
# title: 'Animal Sightings',
# description: 'Animals have many sightings',
# user_id: 3
    {
        term: 'Monkey',
        definition: 'fuzzy creature that swings in trees',
        deck_id: 3
    },
    {
        term: 'Pig',
        definition: 'pink omnivore found on the island of Motunui',
        deck_id: 3
    }
]

cards.each do |attributes|
  Card.create attributes
  puts "creating card #{attributes}"
end