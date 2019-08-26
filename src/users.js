const matches = [];
const mentorWaiting = [];
const newbieWaiting = [];

module.exports.matchUser = async user => {
  const userIsMentor = user.role === "mentor";
  const hisWaitingRoom = userIsMentor ? newbieWaiting : mentorWaiting;

  if (hisWaitingRoom.length) {
    const myMatch = hisWaitingRoom.shift();

    const matchForUser = {
      me: user,
      him: myMatch
    };

    const match = {
      mentor: userIsMentor ? user : myMatch,
      newbie: !userIsMentor ? user : myMatch
    };

    matches.push(match);

    return matchForUser;
  } else {
    const myWaitingRoom = userIsMentor ? mentorWaiting : newbieWaiting;

    myWaitingRoom.push(user);
    return;
  }
};

module.exports.removeUser = async idToRemove => {
  let index = matches.findIndex(
    match => match.mentor.id === idToRemove || match.newbie.id === idToRemove
  );

  if (index != -1) {
    const removedMatch = matches.splice(index, 1)[0];

    return removedMatch.mentor.id === idToRemove
      ? removedMatch.newbie.id
      : removedMatch.mentor.id;
  }

  index = mentorWaiting.findIndex(mentor => mentor.id === idToRemove);

  if (index != -1) {
    mentorWaiting.splice(index, 1);
    return;
  }

  index = newbieWaiting.findIndex(newbie => newbie.id === idToRemove);

  if (index != -1) {
    newbieWaiting.splice(index, 1);
    return;
  }
};

module.exports.getRooms = () => {
  return {
    matches,
    mentorWaiting,
    newbieWaiting
  };
};
