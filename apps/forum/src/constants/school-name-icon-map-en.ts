import artIcon from "@app/assets/syllabus-icons/art.png";
import aseIcon from "@app/assets/syllabus-icons/ase.png";
import cieIcon from "@app/assets/syllabus-icons/cie.png";
import cjlIcon from "@app/assets/syllabus-icons/cjl.png";
import cmsIcon from "@app/assets/syllabus-icons/cms.png";
import cseIcon from "@app/assets/syllabus-icons/cse.png";
import eduIcon from "@app/assets/syllabus-icons/edu.png";
import fseIcon from "@app/assets/syllabus-icons/fse.png";
import gAseIcon from "@app/assets/syllabus-icons/g_ase.png";
import gCseIcon from "@app/assets/syllabus-icons/g_cse.png";
import gEIcon from "@app/assets/syllabus-icons/g_e.png";
import gEduIcon from "@app/assets/syllabus-icons/g_edu.png";
import gFseIcon from "@app/assets/syllabus-icons/g_fse.png";
import gHumIcon from "@app/assets/syllabus-icons/g_hum.png";
import gIpsIcon from "@app/assets/syllabus-icons/g_ips.png";
import gItsIcon from "@app/assets/syllabus-icons/g_its.png";
import gLasIcon from "@app/assets/syllabus-icons/g_las.png";
import gLawIcon from "@app/assets/syllabus-icons/g_law.png";
import gPsIcon from "@app/assets/syllabus-icons/g_ps.png";
import gSaIcon from "@app/assets/syllabus-icons/g_sa.png";
import gSapsIcon from "@app/assets/syllabus-icons/g_saps.png";
import gScIcon from "@app/assets/syllabus-icons/g_sc.png";
import gSeeeIcon from "@app/assets/syllabus-icons/g_seee.png";
import gSiccsIcon from "@app/assets/syllabus-icons/g_siccs.png";
import gSjalIcon from "@app/assets/syllabus-icons/g_sjal.png";
import gSpsIcon from "@app/assets/syllabus-icons/g_sps.png";
import gSssIcon from "@app/assets/syllabus-icons/g_sss.png";
import gWbsIcon from "@app/assets/syllabus-icons/g_wbs.png";
import gWlsIcon from "@app/assets/syllabus-icons/g_wls.png";
import gecIcon from "@app/assets/syllabus-icons/gec.png";
import hssIcon from "@app/assets/syllabus-icons/hss.png";
import humIcon from "@app/assets/syllabus-icons/hum.png";
import lawIcon from "@app/assets/syllabus-icons/law.png";
import pseIcon from "@app/assets/syllabus-icons/pse.png";
import silsIcon from "@app/assets/syllabus-icons/sils.png";
import socIcon from "@app/assets/syllabus-icons/soc.png";
import spsIcon from "@app/assets/syllabus-icons/sps.png";
import sssIcon from "@app/assets/syllabus-icons/sss.png";

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

type SchoolNameIconMapType = {
  [school: string]: string;
};

export const undergradSchoolNameIconMap: SchoolNameIconMapType = {
  [School.SILS]: silsIcon,
  [School.PSE]: pseIcon,
  [School.SSS]: sssIcon,
  [School.FSE]: fseIcon,
  [School.CSE]: cseIcon,
  [School.ASE]: aseIcon,
  [School.LAW]: lawIcon,
  [School.CMS]: cmsIcon,
  [School.HSS]: hssIcon,
  [School.EDU]: eduIcon,
  [School.SOC]: socIcon,
  [School.HUM]: humIcon,
  [School.SPS]: spsIcon,
};

export const gradSchoolNameIconMap: SchoolNameIconMapType = {
  [School.G_PS]: gPsIcon,
  [School.G_E]: gEIcon,
  [School.G_LAW]: gLawIcon,
  [School.G_LAS]: gLasIcon,
  [School.G_SC]: gScIcon,
  [School.G_EDU]: gEduIcon,
  [School.G_HUM]: gHumIcon,
  [School.G_SSS]: gSssIcon,
  [School.G_SAPS]: gSapsIcon,
  [School.G_ITS]: gItsIcon,
  [School.G_SJAL]: gSjalIcon,
  [School.G_IPS]: gIpsIcon,
  [School.G_WLS]: gWlsIcon,
  [School.G_SA]: gSaIcon,
  [School.G_SPS]: gSpsIcon,
  [School.G_FSE]: gFseIcon,
  [School.G_CSE]: gCseIcon,
  [School.G_ASE]: gAseIcon,
  [School.G_SEEE]: gSeeeIcon,
  [School.G_SICCS]: gSiccsIcon,
  [School.G_WBS]: gWbsIcon,
};

export const otherSchoolNameIconMap: SchoolNameIconMapType = {
  [School.CJL]: cjlIcon,
  [School.GEC]: gecIcon,
  [School.CIE]: cieIcon,
  [School.ART]: artIcon,
};

export const allSchoolNameIconMap: SchoolNameIconMapType = {
  ...undergradSchoolNameIconMap,
  ...gradSchoolNameIconMap,
  ...otherSchoolNameIconMap,
};

export default allSchoolNameIconMap;
