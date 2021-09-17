import { useState, useEffect } from "react";

export const useUserPrefHook = () => {
  const [userPref, setUserPref] = useState({});

  useEffect(() => {
    retrieveUserPref();
  }, []);

  const retrieveUserPref = async () => {
    console.log("inside Hook");
    const exerciseType = [
      { type: "Yoga", check: true },
      { type: "HIIT", check: true },
      { type: "Kids", check: true },
      { type: "Cardio Dance", check: true },
      { type: "Abs", check: true },
      { type: "Barre", check: true },
      { type: "Kickboxing", check: true },
      { type: "Lower Body", check: true },
      { type: "Upper Body", check: true },
      { type: "Stretch", check: true },
      { type: "Pilates", check: true },
      { type: "Zumba", check: true },
      { type: "Zumba Gold", check: true },
      { type: "Mindfulness", check: true },
      { type: "Tabata", check: true },
      { type: "KpopX Fitness", check: true },
    ];

    setUserPref({ exerciseType });
  };

  return {
    userPref,
    setUserPref,
  };
};
