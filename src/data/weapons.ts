export const weaponsTypes = [
    "swords",
    "sabres",
    "lances",
    "pistols",
    "shotguns",
    "thrown weapons",
    "bow-and-arrows",
    "smoothbore-carbines",
    "smoothbore-muskets",
    "rifled-carbines",
    "rifled-muskets",
    "breech-loading-carbines",
    "breech-loading-rifles",
    "bolt-action-carbines",
    "bolt-action-rifles",
    "light-smoothbore-artillery",
    "smoothbore-artillery",
    "smoothbore-battalion-guns",
    "smoothbore-horse-artillery",
    "smoothbore-foot-artillery",
    "smoothbore-siege-artillery",
    "rifled-horse-artillery",
    "rifled-foot-artillery",
    "rifled-siege-artillery"
] as const;

export const artilleryWeapons = [
    "light-smoothbore-artillery",
    "smoothbore-artillery",
    "smoothbore-battalion-guns",
    "smoothbore-horse-artillery",
    "smoothbore-foot-artillery",
    "smoothbore-siege-artillery",
    "rifled-horse-artillery",
    "rifled-foot-artillery",
    "rifled-siege-artillery"
] as const;

export const rangedWeapons = [
    "pistol",
    "shotgun",
    "thrown weapon",
    "bow-and-arrow",
    "smoothbore-carbines",
    "smoothbore-muskets",
    "rifled-carbines",
    "rifled-muskets",
    "breech-loading-carbines",
    "breech-loading-rifles",
    "bolt-action-carbines",
    "bolt-action-rifles",
];

export type WeaponType = typeof weaponsTypes[number];

export const weaponsRange = {
    "pistols": 6,
    "shotguns": 6,
    "thrown weapons": 6,
    "bow-and-arrows": 12,
    "smoothbore-carbines": 12,
    "smoothbore-muskets": 18,
    "rifled-carbines": 18,
    "rifled-muskets": 24,
    "breech-loading-carbines": 24,
    "breech-loading-rifles": 30,
    "bolt-action-carbines": 30,
    "bolt-action-rifles": 36,
    "light-smoothbore-artillery": 36,
    "smoothbore-artillery": 48,
    "smoothbore-battalion-guns": 24,
    "smoothbore-horse-artillery": 36,
    "smoothbore-foot-artillery": 48,
    "smoothbore-siege-artillery": 60,
    "rifled-horse-artillery": 48,
    "rifled-foot-artillery": 60,
    "rifled-siege-artillery": 72
} as const;