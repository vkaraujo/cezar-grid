import {
  FaBolt,
  FaHardHat,
  FaProjectDiagram,
  FaPuzzlePiece,
  FaUsers,
  FaHandshake,
  FaLanguage,
} from 'react-icons/fa';
import { MdOutlineEngineering } from 'react-icons/md';

export const technicalSkills = (t) => [
  { label: t('skills.spda'), icon: FaBolt },
  { label: t('skills.substations'), icon: FaHardHat },
  { label: t('skills.automation'), icon: MdOutlineEngineering },
  { label: t('skills.projectMgmt'), icon: FaProjectDiagram },
];

export const softSkills = (t) => [
  { label: t('skills.problemSolving'), icon: FaPuzzlePiece },
  { label: t('skills.teamwork'), icon: FaUsers },
  { label: t('skills.negotiation'), icon: FaHandshake },
  { label: t('skills.english'), icon: FaLanguage },
];
