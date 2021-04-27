export function Char(charName, charKeywords, normal, exalted, gloryRule) {
  return {
    charName: charName,
    charKeywords: charKeywords,
    normal: normal,
    exalted: exalted,
    gloryRule: gloryRule,
  };
}

export function Rule(name, text) {
  return {
    name: name,
    text: text,
  };
}

export function Profile(
  mouvement,
  agility,
  defense,
  vitality,
  attacks,
  aptitudes
) {
  return {
    mouvement: mouvement,
    agility: agility,
    defense: defense,
    vitality: vitality,
    attacks: attacks,
    aptitudes: aptitudes,
  };
}

export function AttackProfile(name, type, dice, dmg) {
  return {
    name: name,
    type: type,
    dice: dice,
    dmg: dmg,
  };
}
