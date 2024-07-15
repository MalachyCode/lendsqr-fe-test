export const controlPageToDisplay = (
  pageName: string,
  setGeneralDetails: React.Dispatch<React.SetStateAction<boolean>>,
  setDocuments: React.Dispatch<React.SetStateAction<boolean>>,
  setBankDetails: React.Dispatch<React.SetStateAction<boolean>>,
  setLoans: React.Dispatch<React.SetStateAction<boolean>>,
  setSavings: React.Dispatch<React.SetStateAction<boolean>>,
  setAppsAndSystems: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (pageName === 'General Details') {
    setGeneralDetails(true);
    setDocuments(false);
    setBankDetails(false);
    setLoans(false);
    setSavings(false);
    setAppsAndSystems(false);
  } else if (pageName === 'Documents') {
    setGeneralDetails(false);
    setDocuments(true);
    setBankDetails(false);
    setLoans(false);
    setSavings(false);
    setAppsAndSystems(false);
  } else if (pageName === 'Bank Details') {
    setGeneralDetails(false);
    setDocuments(false);
    setBankDetails(true);
    setLoans(false);
    setSavings(false);
    setAppsAndSystems(false);
  } else if (pageName === 'Loans') {
    setGeneralDetails(false);
    setDocuments(false);
    setBankDetails(false);
    setLoans(true);
    setSavings(false);
    setAppsAndSystems(false);
  } else if (pageName === 'Savings') {
    setGeneralDetails(false);
    setDocuments(false);
    setBankDetails(false);
    setLoans(false);
    setSavings(true);
    setAppsAndSystems(false);
  } else {
    setGeneralDetails(false);
    setDocuments(false);
    setBankDetails(false);
    setLoans(false);
    setSavings(false);
    setAppsAndSystems(true);
  }
};
