"use strict";

const exercises = [
  {
    duration: 10,
    intensity: "Low",
    exerciseType: "Yoga",
    source: "youtube",
    tag: "4pKly2JojMw",
    title: "Yoga Basic Stretch",
    needEquipment: false,
  },
  {
    duration: 10,
    intensity: "Low",
    exerciseType: "Kids",
    source: "youtube",
    tag: "N5gX--B1jIc",
    title: "Burn Fats Workout",
    needEquipment: false,
  },
  {
    duration: 30,
    intensity: "High",
    exerciseType: "Kids",
    source: "youtube",
    tag: "A0dkwlrC6ok",
    title: "Kids Morning Workout",
    needEquipment: false,
  },
  {
    duration: 10,
    intensity: "Low",
    exerciseType: "Kids",
    source: "youtube",
    tag: "eNuZN3GSm8U",
    title: "Baby Sharks Workout",
    needEquipment: false,
  },
  {
    duration: 10,
    intensity: "Low",
    exerciseType: "Kids",
    source: "youtube",
    tag: "tYyNM9pmOlA",
    title: "Fun Cardio",
    needEquipment: false,
  },
  {
    duration: 14,
    intensity: "Low",
    exerciseType: "Kids",
    source: "youtube",
    tag: "Wsy2L9VvX90",
    title: "Mindfulness",
    needEquipment: false,
  },
  {
    duration: 9,
    intensity: "Moderate",
    exerciseType: "Abs",
    source: "youtube",
    tag: "3p8EBPVZ2Iw",
    title: "Six Pack Abs Workout",
    needEquipment: false,
  },
  {
    duration: 10,
    intensity: "High",
    exerciseType: "Abs",
    source: "youtube",
    tag: "QsG25Rr09JY",
    title: "Lower Abs and Intense Belly Fat Burn",
    needEquipment: false,
  },
  {
    duration: 10,
    intensity: "Moderate",
    exerciseType: "Abs",
    source: "youtube",
    tag: "ZtnWJNkOy5w",
    title: "Core and Legs Band Workout",
    needEquipment: true,
  },
  {
    duration: 10,
    intensity: "Moderate",
    exerciseType: "Abs",
    source: "youtube",
    tag: "1f8yoFFdkcY",
    title: "Beginner Abs Workout",
    needEquipment: false,
  },
  {
    duration: 10,
    intensity: "Moderate",
    exerciseType: "Abs",
    source: "youtube",
    tag: "iV8JGYFnOqk",
    title: "Side Abs and Muffin Top Workout",
    needEquipment: false,
  },
  {
    duration: 10,
    intensity: "Moderate",
    exerciseType: "Barre",
    source: "youtube",
    tag: "3320EhbImLY",
    title: "Flat-Belly Barre",
    needEquipment: false,
  },
  {
    duration: 30,
    intensity: "High",
    exerciseType: "Barre",
    source: "youtube",
    tag: "sAapLQCASOE",
    title: "Barre Sculpting",
    needEquipment: false,
  },
  {
    duration: 30,
    intensity: "Low",
    exerciseType: "Barre",
    source: "youtube",
    tag: "Hb2-7HWoT9c",
    title: "Low Impact Barre",
    needEquipment: false,
  },
  {
    duration: 30,
    intensity: "High",
    exerciseType: "Cardio Dance",
    source: "youtube",
    tag: "8DZktowZo_k",
    title: "Cardio Latin Dance",
    needEquipment: false,
  },
  {
    duration: 15,
    intensity: "Low",
    exerciseType: "Cardio Dance",
    source: "youtube",
    tag: "ILUZz0nGEBI",
    title: "80s Edition Dance",
    needEquipment: false,
  },
  {
    duration: 30,
    intensity: "High",
    exerciseType: "HIIT",
    source: "youtube",
    tag: "W4eKVKwf3rQ",
    title: "Full Body Fat Burn HIIT",
    needEquipment: false,
  },
  {
    duration: 10,
    intensity: "High",
    exerciseType: "HIIT",
    source: "youtube",
    tag: "wGZYbAZrDxw",
    title: "High Intensity Interval Training ",
    needEquipment: false,
  },
  {
    duration: 20,
    intensity: "Moderate",
    exerciseType: "Kickboxing",
    source: "youtube",
    tag: "wXOEE2EgAEM",
    title: "Knockout Ab Workout",
    needEquipment: false,
  },
  {
    duration: 30,
    intensity: "Moderate",
    exerciseType: "Kickboxing",
    source: "youtube",
    tag: "lk5G1WEcntA",
    title: "Below-the-Belt Boxing and Kickboxing",
    needEquipment: false,
  },
  {
    duration: 45,
    intensity: "High",
    exerciseType: "Kickboxing",
    source: "youtube",
    tag: "lujcE3FGL_U",
    title: "Epic Cardio Boxing",
    needEquipment: false,
  },
  {
    duration: 5,
    intensity: "Low",
    exerciseType: "KpopX Fitness",
    source: "youtube",
    tag: "BIMGR1j-LOY",
    title: "Dance Workout to Mr Chu Apink",
    needEquipment: false,
  },
  {
    duration: 5,
    intensity: "Moderate",
    exerciseType: "KpopX Fitness",
    source: "youtube",
    tag: "mkfZNY76uEI",
    title: "Dance Workout to BTS Fire",
    needEquipment: false,
  },
  {
    duration: 7,
    intensity: "Low",
    exerciseType: "KpopX Fitness",
    source: "youtube",
    tag: "t2Q0Iw_yraE",
    title: "Dance Workout to Wonder Girls Nobody",
    needEquipment: false,
  },
  {
    duration: 10,
    intensity: "Moderate",
    exerciseType: "KpopX Fitness",
    source: "youtube",
    tag: "DfqlRzHWuD0",
    title: "Family Dance Workout",
    needEquipment: false,
  },
  {
    duration: 15,
    intensity: "Moderate",
    exerciseType: "KpopX Fitness",
    source: "youtube",
    tag: "2gZ-TMkrKBE",
    title: "Family Dance Workout",
    needEquipment: false,
  },
  {
    duration: 10,
    intensity: "Moderate",
    exerciseType: "Lower Body",
    source: "youtube",
    tag: "NTsQjy_s1Fo",
    title: "Butt and Thigh Burnout With Weights",
    needEquipment: false,
  },
  {
    duration: 30,
    intensity: "Low",
    exerciseType: "Pilates",
    source: "youtube",
    tag: "zsaGmHsIGy8",
    title: "Pilates for Lean Legs and Toned Core",
    needEquipment: false,
  },
  {
    duration: 10,
    intensity: "Low",
    exerciseType: "Stretch",
    source: "youtube",
    tag: "f6RGHvp2oCA",
    title: "Stretch In Bed",
    needEquipment: false,
  },
  {
    duration: 10,
    intensity: "Low",
    exerciseType: "Upper Body",
    source: "youtube",
    tag: "jXm0y-csiuE",
    title: "Stretch for Shoulders, Neck and Collarbone Area",
    needEquipment: false,
  },
  {
    duration: 10,
    intensity: "Low",
    exerciseType: "Upper Body",
    source: "youtube",
    tag: "uNILu4KSHQM",
    title: "Sitting Arm and Shoulder Workout",
    needEquipment: false,
  },
  {
    duration: 10,
    intensity: "Low",
    exerciseType: "Yoga",
    source: "youtube",
    tag: "X3-gKPNyrTA",
    title: "Neck, Shoulders and Upper Back",
    needEquipment: false,
  },
  {
    duration: 20,
    intensity: "Low",
    exerciseType: "Yoga",
    source: "youtube",
    tag: "J-05m7bboK0",
    title: "Lower Back",
    needEquipment: false,
  },
  {
    duration: 20,
    intensity: "Low",
    exerciseType: "Yoga",
    source: "youtube",
    tag: "LqXZ628YNj4",
    title: "Yoga Morning Flow",
    needEquipment: false,
  },
  {
    duration: 50,
    intensity: "Moderate",
    exerciseType: "Yoga",
    source: "youtube",
    tag: "bQR0Rfd8Gik",
    title: "Yoga Basic and Stretches",
    needEquipment: false,
  },
  {
    duration: 20,
    intensity: "Low",
    exerciseType: "Yoga",
    source: "youtube",
    tag: "y6RQQhupPpY",
    title: "Yin Yoga",
    needEquipment: false,
  },
  {
    duration: 4,
    intensity: "Moderate",
    exerciseType: "Zumba",
    source: "youtube",
    tag: "0gfGlyoyVcM",
    title: "Dance Workout to Despacito",
    needEquipment: false,
  },
  {
    duration: 30,
    intensity: "Low",
    exerciseType: "Zumba Gold",
    source: "youtube",
    tag: "yjOmp6HleM8",
    title: "Zumba for Seniors",
    needEquipment: false,
  },
  {
    duration: 50,
    intensity: "Moderate",
    exerciseType: "Zumba Gold",
    source: "youtube",
    tag: "OkJK77bkpeg",
    title: "Zumba for Seniors",
    needEquipment: false,
  },
  {
    duration: 30,
    intensity: "Low",
    exerciseType: "Pilates",
    source: "youtube",
    tag: "K56Z12XNQ5c",
    title: "Pilates for beginner",
    needEquipment: false,
  },
  {
    duration: 20,
    intensity: "Low",
    exerciseType: "Tabata",
    source: "youtube",
    tag: "dRBp7o2sKcc",
    title: "Tabata for beginner",
    needEquipment: false,
  },
  {
    duration: 10,
    intensity: "Low",
    exerciseType: "Mindfulness",
    source: "youtube",
    tag: "O-6f5wQXSu8",
    title: "Meditation for Anxiety",
    needEquipment: false,
  },
  {
    duration: 5,
    intensity: "Low",
    exerciseType: "Mindfulness",
    source: "youtube",
    tag: "inpok4MKVLM",
    title: "Meditation You Can Do Anywhere",
    needEquipment: false,
  },
  {
    duration: 10,
    intensity: "Low",
    exerciseType: "Yoga",
    source: "youtube",
    tag: "UEEsdXn8oG8",
    title: "Wake Up Yoga",
    needEquipment: false,
  },
  {
    duration: 10,
    intensity: "Low",
    exerciseType: "Yoga",
    source: "youtube",
    tag: "dcqW72d5JjI",
    title: "Yoga for Weight Loss",
    needEquipment: false,
  },
  {
    duration: 10,
    intensity: "Low",
    exerciseType: "Yoga",
    source: "youtube",
    tag: "T41mYCmtWls",
    title: "Morning Yoga Stretch for Beginners",
    needEquipment: false,
  },
  {
    duration: 10,
    intensity: "High",
    exerciseType: "HIIT",
    source: "youtube",
    tag: "zr08J6wB53Y",
    title: "High Intensity Interval Training ",
    needEquipment: true,
  },
  {
    duration: 10,
    intensity: "Moderate",
    exerciseType: "HIIT",
    source: "youtube",
    tag: "EfJ4aB_enVE",
    title: "SixPack Workout",
    needEquipment: true,
  },
  {
    duration: 30,
    intensity: "HIGH",
    exerciseType: "HIIT",
    source: "youtube",
    tag: "DOtr16U8V2M",
    title: "Fat Burning and Strengthening Workout ",
    needEquipment: true,
  },
];
const exercisesWithTimestamp = exercises.map((exercise) => ({
  ...exercise,
  createdAt: new Date(),
  updatedAt: new Date(),
}));
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Exercises", exercisesWithTimestamp);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Exercises", null, {});
  },
};
