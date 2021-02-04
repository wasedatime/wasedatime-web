import { School } from "@bit/wasedatime.syllabus.ts.constants.syllabus-data";

import fseIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.fse";
import cseIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.cse";
import aseIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.ase";
import pseIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.pse";
import silsIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.sils";
import sssIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.sss";
import humIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.hum";
import lawIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.law";
import spsIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.sps";
import cmsIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.cms";
import hssIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.hss";
import socIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.soc";
import eduIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.edu";

import gPsIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.g_ps";
import gEIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.g_e";
import gLawIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.g_law";
import gLasIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.g_las";
import gScIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.g_sc";
import gEduIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.g_edu";
import gHumIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.g_hum";
import gSssIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.g_sss";
import gSapsIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.g_saps";
import gItsIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.g_its";
import gSjalIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.g_sjal";
import gIpsIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.g_ips";
import gWlsIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.g_wls";
import gSaIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.g_sa";
import gSpsIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.g_sps";
import gFseIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.g_fse";
import gCseIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.g_cse";
import gAseIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.g_ase";
import gSeeeIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.g_seee";
import gSiccsIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.g_siccs";
import gWbsIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.g_wbs";

import artIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.art";
import cjlIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.cjl";
import cieIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.cie";
import gecIcon from "@bit/wasedatime.syllabus.assets.img.syllabus-icons.gec";

export const undergradSchoolNameIconMap = {
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

export const gradSchoolNameIconMap = {
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

export const otherSchoolNameIconMap = {
  [School.CJL]: cjlIcon,
  [School.GEC]: gecIcon,
  [School.CIE]: cieIcon,
  [School.ART]: artIcon,
};

export const allSchoolNameIconMap = {
  ...undergradSchoolNameIconMap,
  ...gradSchoolNameIconMap,
  ...otherSchoolNameIconMap,
};

export default allSchoolNameIconMap;
