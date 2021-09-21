import { useState, useEffect } from "react";

export const useUserPrefHook = () => {
  const [userPref, setUserPref] = useState({});

  useEffect(() => {
    retrieveUserPref();
  }, []);

  const retrieveUserPref = async () => {
    const exerciseType = [
      { type: "Yoga", display: "Yoga", check: true },
      { type: "HIIT", display: "HIIT", check: true },
      { type: "Kids", display: "Kids", check: true },
      { type: "Cardio Dance", display: "Cardio Dance", check: true },
      { type: "Abs", display: "Abs", check: true },
      { type: "Barre", display: "Barre", check: true },
      { type: "Kickboxing", display: "Kickboxing", check: true },
      { type: "Lower Body", display: "Lower Body", check: true },
      { type: "Upper Body", display: "Upper Body", check: true },
      { type: "Stretch", display: "Stretch", check: true },
      { type: "Pilates", display: "Pilates", check: true },
      { type: "Zumba", display: "Zumba", check: true },
      { type: "Zumba Gold", display: "Zumba Gold", check: true },
      { type: "Mindfulness", display: "Mindfulness", check: true },
      { type: "Tabata", display: "Tabata", check: true },
      { type: "KpopX Fitness", display: "KpopX Fitness", check: true },
    ];
    const duration = [
      {
        type: 10,
        display: "10 Mins",
        check: false,
      },
      {
        type: 20,
        display: "20 Mins",
        check: false,
      },
      {
        type: 30,
        display: "30 Mins",
        check: false,
      },
      {
        type: 999,
        display: "All Durations",
        check: true,
      },
    ];

    const needEquipment = [
      {
        type: false,
        display: "Without Equipment",
        check: false,
      },
    ];
    setUserPref({ exerciseType, duration, needEquipment });
  };

  return {
    userPref,
    setUserPref,
  };
};
