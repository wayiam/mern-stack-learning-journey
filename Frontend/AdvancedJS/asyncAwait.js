function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: 'wayiam', url: 'https://github.com/wayiam' })
    }, 3000);
  })
}


async function getUserData() {
  try {
    console.log('Getting Data....');
    const userdata = await fetchUserData();
    console.log(`Username is: ${userdata.name} and user's url is ${userdata.url}`);
    
  }
  catch (error) {
    console.log('Error');
   
  }
}

getUserData();