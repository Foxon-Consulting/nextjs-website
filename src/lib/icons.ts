import { 
  faProjectDiagram, 
  faUsers, 
  faCodeBranch, 
  faAward,
  faServer,
  faDatabase,
  faGraduationCap,
  faCheckCircle,
  faLightbulb,
  faRobot,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";

/**
 * Récupère l'icône FontAwesome correspondant à son nom
 * @param iconName Nom de l'icône (par exemple "faServer")
 * @returns L'objet icône FontAwesome correspondant
 */
export function getIconByName(iconName: string) {
  switch (iconName) {
    case 'faProjectDiagram':
      return faProjectDiagram;
    case 'faUsers':
      return faUsers;
    case 'faCodeBranch':
      return faCodeBranch;
    case 'faAward':
      return faAward;
    case 'faServer':
      return faServer;
    case 'faDatabase':
      return faDatabase;
    case 'faGraduationCap':
      return faGraduationCap;
    case 'faCheckCircle':
      return faCheckCircle;
    case 'faLightbulb':
      return faLightbulb;
    case 'faRobot':
      return faRobot;
    case 'faChartLine':
      return faChartLine;
    default:
      return faCheckCircle; // Icône par défaut
  }
} 