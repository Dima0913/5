//Task 1
// function getDateInfo(year, month, day) {
//     const date = new Date(year, month - 1, day);
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const months = [
//         'January', 'February', 'March', 'April', 'May', 'June',
//         'July', 'August', 'September', 'October', 'November', 'December'
//     ];
//     const dayOfWeek = daysOfWeek[date.getDay()];
//     const monthName = months[date.getMonth()];
//     console.log(`Date: ${dayOfWeek}, ${monthName} ${day}, ${year}`);
// }
//Task 2
// function calculateFiles(flashSizeGB) {
//     const fileSizeMB = 820;
//     const flashSizeMB = flashSizeGB * 1024;
//     const fileCount = Math.floor(flashSizeMB / fileSizeMB);
//     console.log(`Number of files that fit: ${fileCount}`);
// }
//Task 3
// function formatRGB(r, g, b) {
//     console.log(`rgb(${r},${g},${b})`);
// }

// getDateInfo(2024, 6, 8);
// calculateFiles(4);
// formatRGB(25, 76, 100);