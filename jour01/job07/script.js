function jourTravaille(date) {
    // List of public holidays in France for 2024 (Month is 0-indexed in JS Dates)
    const holidays2024 = [
        new Date(2024, 0, 1).getTime(),   // New Year
        new Date(2024, 3, 1).getTime(),   // Easter Monday
        new Date(2024, 4, 1).getTime(),   // Labor Day
        new Date(2024, 4, 8).getTime(),   // WWII Victory
        new Date(2024, 4, 9).getTime(),   // Ascension
        new Date(2024, 4, 20).getTime(),  // Whit Monday
        new Date(2024, 6, 14).getTime(),  // Bastille Day
        new Date(2024, 7, 15).getTime(),  // Assumption
        new Date(2024, 10, 1).getTime(),  // All Saints' Day
        new Date(2024, 10, 11).getTime(), // Armistice
        new Date(2024, 11, 25).getTime()  // Christmas
    ];

    // Options to format the date output beautifully in French
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const dateString = date.toLocaleDateString('fr-FR', options);

    const dateTime = date.getTime();
    const dayOfWeek = date.getDay(); // 0 is Sunday, 6 is Saturday

    // Check if the date is a holiday
    if (holidays2024.includes(dateTime)) {
        console.log(`Le ${dateString} est un jour férié`);
    } 
    // Check if the date is a weekend (Saturday or Sunday)
    else if (dayOfWeek === 0 || dayOfWeek === 6) {
        console.log(`Non, ${dateString} est un week-end`);
    } 
    // Otherwise, it's a regular workday
    else {
        console.log(`Oui, ${dateString} est un jour travaillé`);
    }
}


jourTravaille(new Date(2024, 4, 1)); // Fête du travail
jourTravaille(new Date(2024, 6, 20)); // Un samedi