import { useState, useEffect } from "react";

export const useUserPrefHook = () => {
  const [userPref, setUserPref] = useState({});

  useEffect(() => {
    retrieveUserPref();
  }, []);

  const retrieveUserPref = async () => {
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
    const duration = [
      {
        type: 10,
        check: false,
      },
      {
        type: 20,
        check: false,
      },
      {
        type: 30,
        check: false,
      },
      {
        type: 999,
        check: true,
      },
    ];

    setUserPref({ exerciseType, duration });
  };

  return {
    userPref,
    setUserPref,
  };
};
