import "../styles.css";
import logicController from "./controllers/LogicController";
import DomController from "./controllers/DomController";

DomController.initialiseEventListeners();
DomController.renderSidebar();
DomController.renderContent();