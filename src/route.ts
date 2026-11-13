export type EnemyKind = "drone" | "dart" | "turret" | "lancer";

export type Wave = {
  count: number;
  kind: EnemyKind;
  spawnTime: (i: number) => number;
  xPosition: (i: number) => number;
  yPosition: (i: number) => number;
  direction: (i: number) => number;
  hp: number;
  speed: number;
  radius: number;
  dropChance: number;
  firstFlag?: boolean;
};

export type Sector = {
  name: string;
  subtitle: string;
  advanceAt?: number;
  forceAt?: number;
  boss?: boolean;
  waves: Wave[];
};

const top = () => -30;
const alternating = (i: number) => i % 2 === 0 ? 1 : -1;
const sides = (i: number) => i % 2 === 0 ? -30 : 510;
const sideY = (i: number) => 70 + Math.floor(i / 2) * 50;

const drone = {
  kind: "drone" as const,
  hp: 2,
  speed: 100,
  radius: 13,
  dropChance: 0.015,
};

const dart = {
  kind: "dart" as const,
  hp: 1,
  speed: 150,
  radius: 12,
  dropChance: 0.015,
  firstFlag: false,
};

const turret = {
  kind: "turret" as const,
  hp: 12,
  speed: 400,
  radius: 19,
  dropChance: 0.3,
};

const lancer = {
  kind: "lancer" as const,
  hp: 4,
  speed: 250,
  radius: 15,
  dropChance: 0.06,
};

export const ROUTE: Sector[] = [
  {
    name: "Outer Drift",
    subtitle: "Scouts ahead",
    advanceAt: 1560,
    forceAt: 1800,
    waves: [
      {
        ...drone,
        count: 4,
        spawnTime: () => 60,
        xPosition: (i) => 240 + (i - 1.5) * 64,
        yPosition: top,
        direction: alternating,
      },
      {
        ...drone,
        count: 5,
        spawnTime: (i) => 360 + Math.abs(i - 2) * 10,
        xPosition: (i) => 168 + (i - 2) * 44,
        yPosition: top,
        direction: alternating,
      },
      {
        ...drone,
        count: 5,
        spawnTime: (i) => 660 + Math.abs(i - 2) * 10,
        xPosition: (i) => 312 + (i - 2) * 44,
        yPosition: top,
        direction: alternating,
      },
      {
        ...drone,
        count: 6,
        spawnTime: () => 960,
        xPosition: (i) => 240 + (i - 2.5) * 64,
        yPosition: top,
        direction: alternating,
      },
      {
        ...drone,
        count: 4,
        spawnTime: (i) => 1200 + i * 24,
        xPosition: () => 120,
        yPosition: top,
        direction: alternating,
      },
      {
        ...drone,
        count: 4,
        spawnTime: (i) => 1260 + i * 24,
        xPosition: () => 360,
        yPosition: top,
        direction: alternating,
      },
    ],
  },
  {
    name: "Shatter Belt",
    subtitle: "Divers incoming",
    advanceAt: 1800,
    forceAt: 2040,
    waves: [
      {
        ...drone,
        count: 6,
        spawnTime: (i) => 60 + Math.abs(i - 2.5) * 10,
        xPosition: (i) => 240 + (i - 2.5) * 44,
        yPosition: top,
        direction: alternating,
      },
      {
        ...dart,
        count: 4,
        spawnTime: () => 300,
        xPosition: (i) => 240 + (i - 1.5) * 64,
        yPosition: top,
        direction: alternating,
      },
      {
        ...dart,
        count: 5,
        spawnTime: (i) => 600 + i * 24,
        xPosition: () => 144,
        yPosition: top,
        direction: alternating,
      },
      {
        ...dart,
        count: 5,
        spawnTime: (i) => 720 + i * 24,
        xPosition: () => 336,
        yPosition: top,
        direction: alternating,
      },
      {
        ...drone,
        count: 7,
        spawnTime: () => 1020,
        xPosition: (i) => 240 + (i - 3) * 64,
        yPosition: top,
        direction: alternating,
      },
      {
        ...dart,
        count: 5,
        spawnTime: (i) => 1140 + Math.abs(i - 2) * 10,
        xPosition: (i) => 240 + (i - 2) * 44,
        yPosition: top,
        direction: alternating,
      },
      {
        ...dart,
        count: 6,
        spawnTime: () => 1440,
        xPosition: (i) => 240 + (i - 2.5) * 64,
        yPosition: top,
        direction: alternating,
      },
    ],
  },
  {
    name: "Gun Lanes",
    subtitle: "Turrets online",
    advanceAt: 1920,
    forceAt: 2160,
    waves: [
      {
        ...turret,
        count: 1,
        spawnTime: () => 60,
        xPosition: (i) => 240 + (i - 0) * 64,
        yPosition: top,
        direction: alternating,
      },
      {
        ...drone,
        count: 6,
        spawnTime: (i) => 240 + Math.abs(i - 2.5) * 10,
        xPosition: (i) => 240 + (i - 2.5) * 44,
        yPosition: top,
        direction: alternating,
      },
      {
        ...turret,
        count: 2,
        spawnTime: () => 540,
        xPosition: (i) => 240 + (i - 0.5) * 64,
        yPosition: top,
        direction: alternating,
      },
      {
        ...dart,
        count: 6,
        spawnTime: (i) => 840 + i * 24,
        xPosition: () => 240,
        yPosition: top,
        direction: alternating,
      },
      {
        ...turret,
        count: 2,
        spawnTime: () => 1080,
        xPosition: (i) => 240 + (i - 0.5) * 64,
        yPosition: top,
        direction: alternating,
      },
      {
        ...drone,
        count: 6,
        spawnTime: () => 1140,
        xPosition: (i) => 240 + (i - 2.5) * 64,
        yPosition: top,
        direction: alternating,
      },
      {
        ...turret,
        count: 3,
        spawnTime: () => 1500,
        xPosition: (i) => 240 + (i - 1) * 64,
        yPosition: top,
        direction: alternating,
      },
    ],
  },
  {
    name: "Lancer Gate",
    subtitle: "Crossfire",
    advanceAt: 1920,
    forceAt: 2160,
    waves: [
      {
        ...lancer,
        count: 4,
        spawnTime: (i) => 60 + Math.floor(i / 2) * 30,
        xPosition: sides,
        yPosition: sideY,
        direction: alternating,
      },
      {
        ...dart,
        count: 6,
        spawnTime: (i) => 360 + Math.abs(i - 2.5) * 10,
        xPosition: (i) => 240 + (i - 2.5) * 44,
        yPosition: top,
        direction: alternating,
      },
      {
        ...lancer,
        count: 6,
        spawnTime: (i) => 600 + Math.floor(i / 2) * 30,
        xPosition: sides,
        yPosition: sideY,
        direction: alternating,
      },
      {
        ...turret,
        count: 2,
        spawnTime: () => 780,
        xPosition: (i) => 240 + (i - 0.5) * 64,
        yPosition: top,
        direction: alternating,
      },
      {
        ...lancer,
        count: 6,
        spawnTime: (i) => 1140 + Math.floor(i / 2) * 30,
        xPosition: sides,
        yPosition: sideY,
        direction: alternating,
      },
      {
        ...drone,
        count: 8,
        spawnTime: (i) => 1260 + Math.abs(i - 3.5) * 10,
        xPosition: (i) => 240 + (i - 3.5) * 44,
        yPosition: top,
        direction: alternating,
      },
      {
        ...dart,
        count: 8,
        spawnTime: () => 1560,
        xPosition: (i) => 240 + (i - 3.5) * 64,
        yPosition: top,
        direction: alternating,
      },
    ],
  },
  {
    name: "Last Approach",
    subtitle: "Everything they have",
    advanceAt: 2040,
    forceAt: 2280,
    waves: [
      {
        ...turret,
        count: 3,
        spawnTime: () => 60,
        xPosition: (i) => 240 + (i - 1) * 64,
        yPosition: top,
        direction: alternating,
      },
      {
        ...lancer,
        count: 6,
        spawnTime: (i) => 180 + Math.floor(i / 2) * 30,
        xPosition: sides,
        yPosition: sideY,
        direction: alternating,
      },
      {
        ...dart,
        count: 6,
        spawnTime: (i) => 540 + i * 24,
        xPosition: () => 120,
        yPosition: top,
        direction: alternating,
      },
      {
        ...dart,
        count: 6,
        spawnTime: (i) => 540 + i * 24,
        xPosition: () => 360,
        yPosition: top,
        direction: alternating,
      },
      {
        ...drone,
        count: 9,
        spawnTime: (i) => 900 + Math.abs(i - 4) * 10,
        xPosition: (i) => 240 + (i - 4) * 44,
        yPosition: top,
        direction: alternating,
      },
      {
        ...turret,
        count: 2,
        spawnTime: () => 1020,
        xPosition: (i) => 240 + (i - 0.5) * 64,
        yPosition: top,
        direction: alternating,
      },
      {
        ...lancer,
        count: 8,
        spawnTime: (i) => 1320 + Math.floor(i / 2) * 30,
        xPosition: sides,
        yPosition: sideY,
        direction: alternating,
      },
      {
        ...dart,
        count: 8,
        spawnTime: (i) => 1560 + Math.abs(i - 3.5) * 10,
        xPosition: (i) => 240 + (i - 3.5) * 44,
        yPosition: top,
        direction: alternating,
      },
    ],
  },
  {
    name: "The Warden",
    subtitle: "The Warden approaches",
    boss: true,
    waves: [],
  },
];
