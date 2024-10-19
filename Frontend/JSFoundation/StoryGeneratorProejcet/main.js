const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

let baseStory = "In the busy city of Bangalore, :character: was excited for the big cricket match between :teamA: and :teamB:. It was a hot day at :location:, and everyone was watching closely. Suddenly, :character: saw their favorite player, :player:, hit an amazing six! But then, :event:. Even :witness:, who usually stays calm, was shocked!";

let characters = ['Raj', 'Ved', 'Neha'];
let teams = ['Royal Challengers Bangalore', 'Chennai Super Kings', 'Mumbai Indians'];
let players = ['Virat Kohli', 'MS Dhoni', 'Rohit Sharma'];
let events = ['the power went out', 'it started raining', 'the game was paused for a surprise announcement'];
let locations = ['a local cafe', 'an office', 'the stadium'];
let witnesses = ['Rahul'];

randomize.addEventListener('click', generateStory);

function generateStory() {
    let newStory = baseStory;

    let selectedCharacter = randomValueFromArray(characters);
    let selectedTeamA = randomValueFromArray(teams);
    let selectedTeamB = randomValueFromArray(teams);
    while (selectedTeamA === selectedTeamB) {
        selectedTeamB = randomValueFromArray(teams); // Ensure teams are different
    }
    let selectedPlayer = randomValueFromArray(players);
    let selectedEvent = randomValueFromArray(events);
    let selectedLocation = randomValueFromArray(locations);
    let selectedWitness = randomValueFromArray(witnesses);

    newStory = newStory.replaceAll(':character:', selectedCharacter);
    newStory = newStory.replaceAll(':teamA:', selectedTeamA);
    newStory = newStory.replaceAll(':teamB:', selectedTeamB);
    newStory = newStory.replaceAll(':player:', selectedPlayer);
    newStory = newStory.replaceAll(':event:', selectedEvent);
    newStory = newStory.replaceAll(':location:', selectedLocation);
    newStory = newStory.replaceAll(':witness:', selectedWitness);

    if (customName.value !== '') {
        const customCharacterName = customName.value;
        newStory = newStory.replaceAll(selectedCharacter, customCharacterName);
    }

    newStory = newStory.replaceAll(':temperature:', '34°F'); // Keeping it simple

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
