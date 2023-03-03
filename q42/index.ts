  
// Define the function Make_great() to add "the Great" to each magician's name
function Make_great(magician: string[]): string[] {
    const gret_magician = magician.map(magician => `${magician} the Great`);
    return gret_magician;
  }
  
  // Define the function show_magician() to display the array of magician' names
  function show_magician(magician: string[]): void {
    console.log(magician);
  }
  
  // Define an array of magician' names
  const magician = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];
  
  // Call Make_great() with a copy of the array and store the new array in a separate variable
  const gret_magician = Make_great([...magician]);
  
  // Call show_magician() with each array to display the original and new arrays
  console.log("Original Magicians:");
  show_magician(magician);
  
  console.log("Great Magicians:");
  show_magician(gret_magician);
  


 