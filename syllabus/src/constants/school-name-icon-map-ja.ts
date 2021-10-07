import fseIcon_jp from "../assets/img/syllabus-icons/fse_jp.png";
import cseIcon_jp from "../assets/img/syllabus-icons/cse_jp.png";
import aseIcon_jp from "../assets/img/syllabus-icons/ase_jp.png";
import pseIcon_jp from "../assets/img/syllabus-icons/pse_jp.png";
import silsIcon_jp from "../assets/img/syllabus-icons/sils_jp.png";
import sssIcon_jp from "../assets/img/syllabus-icons/sss_jp.png";
import humIcon_jp from "../assets/img/syllabus-icons/hum_jp.png";
import lawIcon_jp from "../assets/img/syllabus-icons/law_jp.png";
import spsIcon_jp from "../assets/img/syllabus-icons/sps_jp.png";
import cmsIcon_jp from "../assets/img/syllabus-icons/cms_jp.png";
import hssIcon_jp from "../assets/img/syllabus-icons/hss_jp.png";
import socIcon_jp from "../assets/img/syllabus-icons/soc_jp.png";
import eduIcon_jp from "../assets/img/syllabus-icons/edu_jp.png";

import gPsIcon_jp from "../assets/img/syllabus-icons/g_ps_jp.png";
import gEIcon_jp from "../assets/img/syllabus-icons/g_e_jp.png";
import gLawIcon_jp from "../assets/img/syllabus-icons/g_law_jp.png";
import gLasIcon_jp from "../assets/img/syllabus-icons/g_las_jp.png";
import gScIcon_jp from "../assets/img/syllabus-icons/g_sc_jp.png";
import gEduIcon_jp from "../assets/img/syllabus-icons/g_edu_jp.png";
import gHumIcon_jp from "../assets/img/syllabus-icons/g_hum_jp.png";
import gSssIcon_jp from "../assets/img/syllabus-icons/g_sss_jp.png";
import gSapsIcon_jp from "../assets/img/syllabus-icons/g_saps_jp.png";
import gItsIcon_jp from "../assets/img/syllabus-icons/g_its_jp.png";
import gSjalIcon_jp from "../assets/img/syllabus-icons/g_sjal_jp.png";
import gIpsIcon_jp from "../assets/img/syllabus-icons/g_ips_jp.png";
import gWlsIcon_jp from "../assets/img/syllabus-icons/g_wls_jp.png";
import gSaIcon_jp from "../assets/img/syllabus-icons/g_sa_jp.png";
import gSpsIcon_jp from "../assets/img/syllabus-icons/g_sps_jp.png";
import gFseIcon_jp from "../assets/img/syllabus-icons/g_fse_jp.png";
import gCseIcon_jp from "../assets/img/syllabus-icons/g_cse_jp.png";
import gAseIcon_jp from "../assets/img/syllabus-icons/g_ase_jp.png";
import gSeeeIcon_jp from "../assets/img/syllabus-icons/g_seee_jp.png";
import gSiccsIcon_jp from "../assets/img/syllabus-icons/g_siccs_jp.png";
import gWbsIcon_jp from "../assets/img/syllabus-icons/g_wbs_jp.png";

import artIcon_jp from "../assets/img/syllabus-icons/art_jp.png";
import cjlIcon_jp from "../assets/img/syllabus-icons/cjl_jp.png";
import cieIcon_jp from "../assets/img/syllabus-icons/cie_jp.png";
import gecIcon_jp from "../assets/img/syllabus-icons/gec_jp.png";

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
  GEC = "GEC"
}

export const undergradSchoolNameIconMap = {
  [School.SILS]: silsIcon_jp,
  [School.PSE]: pseIcon_jp,
  [School.SSS]: sssIcon_jp,
  [School.FSE]: fseIcon_jp,
  [School.CSE]: cseIcon_jp,
  [School.ASE]: aseIcon_jp,
  [School.LAW]: lawIcon_jp,
  [School.CMS]: cmsIcon_jp,
  [School.HSS]: hssIcon_jp,
  [School.EDU]: eduIcon_jp,
  [School.SOC]: socIcon_jp,
  [School.HUM]: humIcon_jp,
  [School.SPS]: spsIcon_jp,
};

export const gradSchoolNameIconMap = {
  [School.G_PS]: gPsIcon_jp,
  [School.G_E]: gEIcon_jp,
  [School.G_LAW]: gLawIcon_jp,
  [School.G_LAS]: gLasIcon_jp,
  [School.G_SC]: gScIcon_jp,
  [School.G_EDU]: gEduIcon_jp,
  [School.G_HUM]: gHumIcon_jp,
  [School.G_SSS]: gSssIcon_jp,
  [School.G_SAPS]: gSapsIcon_jp,
  [School.G_ITS]: gItsIcon_jp,
  [School.G_SJAL]: gSjalIcon_jp,
  [School.G_IPS]: gIpsIcon_jp,
  [School.G_WLS]: gWlsIcon_jp,
  [School.G_SA]: gSaIcon_jp,
  [School.G_SPS]: gSpsIcon_jp,
  [School.G_FSE]: gFseIcon_jp,
  [School.G_CSE]: gCseIcon_jp,
  [School.G_ASE]: gAseIcon_jp,
  [School.G_SEEE]: gSeeeIcon_jp,
  [School.G_SICCS]: gSiccsIcon_jp,
  [School.G_WBS]: gWbsIcon_jp,
};

export const otherSchoolNameIconMap = {
  [School.CJL]: cjlIcon_jp,
  [School.GEC]: gecIcon_jp,
  [School.CIE]: cieIcon_jp,
  [School.ART]: artIcon_jp,
};

export const allSchoolNameIconMap = {
  ...undergradSchoolNameIconMap,
  ...gradSchoolNameIconMap,
  ...otherSchoolNameIconMap,
};

export default allSchoolNameIconMap;