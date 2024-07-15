import { controlPageToDisplay } from '../functions/handleShowPages';

export const RenderNavIcons = (props: {
  functionArg: string;
  iconSrc: string;
  iconName: boolean;
  setGeneralDetails: React.Dispatch<React.SetStateAction<boolean>>;
  setDocuments: React.Dispatch<React.SetStateAction<boolean>>;
  setBankDetails: React.Dispatch<React.SetStateAction<boolean>>;
  setLoans: React.Dispatch<React.SetStateAction<boolean>>;
  setSavings: React.Dispatch<React.SetStateAction<boolean>>;
  setAppsAndSystems: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <img
    src={props.iconSrc}
    className={'' + (props.iconName && 'active')}
    onClick={() =>
      controlPageToDisplay(
        props.functionArg,
        props.setGeneralDetails,
        props.setDocuments,
        props.setBankDetails,
        props.setLoans,
        props.setSavings,
        props.setAppsAndSystems
      )
    }
  />
);

export const RenderNavBtns = (props: {
  btnTitle: string;
  btnName: boolean;
  setGeneralDetails: React.Dispatch<React.SetStateAction<boolean>>;
  setDocuments: React.Dispatch<React.SetStateAction<boolean>>;
  setBankDetails: React.Dispatch<React.SetStateAction<boolean>>;
  setLoans: React.Dispatch<React.SetStateAction<boolean>>;
  setSavings: React.Dispatch<React.SetStateAction<boolean>>;
  setAppsAndSystems: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <div
    onClick={() =>
      controlPageToDisplay(
        props.btnTitle,
        props.setGeneralDetails,
        props.setDocuments,
        props.setBankDetails,
        props.setLoans,
        props.setSavings,
        props.setAppsAndSystems
      )
    }
    className={'nav-btn ' + (props.btnName && 'active')}
  >
    {props.btnTitle}
  </div>
);
