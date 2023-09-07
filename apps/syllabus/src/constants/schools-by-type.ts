enum School {
  SILS = "SILS",
  PSE = "PSE",
  SSS = "SSS",
  FSE = "FSE",
  ASE = "ASE",
  CSE = "CSE",
  LAW = "LAW",
  CMS = "CMS",
  HSS = "HSS",
  EDU = "EDU",
  SOC = "SOC",
  HUM = "HUM",
  SPS = "SPS",
  G_ASE = "G_ASE",
  G_CSE = "G_CSE",
  G_EDU = "G_EDU",
  G_FSE = "G_FSE",
  G_SAPS = "G_SAPS",
  G_ITS = "G_ITS",
  G_SA = "G_SA",
  G_SC = "G_SC",
  G_E = "G_E",
  G_SJAL = "G_SJAL",
  G_SICCS = "G_SICCS",
  G_PS = "G_PS",
  G_SSS = "G_SSS",
  G_HUM = "G_HUM",
  G_IPS = "G_IPS",
  G_LAS = "G_LAS",
  G_LAW = "G_LAW",
  G_SPS = "G_SPS",
  G_WBS = "G_WBS",
  G_WLS = "G_WLS",
  G_SEEE = "G_SEEE",
  ART = "ART",
  CJL = "CJL",
  CIE = "CIE",
  GEC = "GEC",
}

export const undergradSchools = [
  School.SILS,
  School.PSE,
  School.SSS,
  School.FSE,
  School.CSE,
  School.ASE,
  School.LAW,
  School.CMS,
  School.HSS,
  School.EDU,
  School.SOC,
  School.HUM,
  School.SPS,
]

export const gradSchools = [
  School.G_PS,
  School.G_E,
  School.G_LAW,
  School.G_LAS,
  School.G_SC,
  School.G_EDU,
  School.G_HUM,
  School.G_SSS,
  School.G_SAPS,
  School.G_ITS,
  School.G_SJAL,
  School.G_IPS,
  School.G_WLS,
  School.G_SA,
  School.G_SPS,
  School.G_FSE,
  School.G_CSE,
  School.G_ASE,
  School.G_SEEE,
  School.G_SICCS,
  School.G_WBS,
]

export const otherSchools = [School.CJL, School.GEC, School.CIE, School.ART]

export const allSchools = {
  ...undergradSchools,
  ...gradSchools,
  ...otherSchools,
}

export default allSchools