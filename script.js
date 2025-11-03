userObject = {
  response: {
    users: [
      {
        id: 0,
        name: "Asia",
        email: "asia@devpipeline.com",
        password: "cat123",
      },
      {
        id: 1,
        name: "Karanda",
        email: "karanda@devpipeline.com",
        password: "hi123",
      },
      {
        id: 2,
        name: "Seth",
        email: "seth@devpipeline.com",
        password: "dog123",
      },
    ],
  },
};

const userGreeting = (users) => {
  users.forEach((user) => {
    console.log(`Hello ${user.name}, your email is ${user.email}`);
  });
};
userGreeting(userObject.response.users);


const myPromise = (personId) => {
  return new Promise((resolve, reject) => {
    const requestObject = new XMLHttpRequest();
    requestObject.open("GET", `https://www.swapi.tech/api/people/${personId}`);
    requestObject.responseType = "json";

    requestObject.onload = () => {
      if (requestObject.status === 200) {
        resolve(requestObject.response);
      } else {
        reject(`Error: ${requestObject.status}`);
      }
    };

    requestObject.onerror = () => reject("Network error");
    requestObject.send();
  });
};

const personId = prompt("Enter a person ID that is between 1-83:");

const peoplePromise = myPromise(personId);

peoplePromise
  .then(data => {
    console.log(data);
    alert(`Person ID: ${personId}`);
    return data;
  })
  .then(data => {
    console.log(data.result.properties.name);
    alert(`Person name: ${data.result.properties.name}`);
  })
  .catch(error => {
    console.error(error);
    alert(error);
  });
