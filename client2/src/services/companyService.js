const baseUrl = 'http://localhost:5000/api/companies'; // Adjust to your backend server's address

export const getAllCompanies = async () => {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

export const createCompany = async (companyData) => {
  // Logic to POST new data
};

export const updateCompany = async (id, updatedData) => {
  // Logic to PUT (update) data
};

export const deleteCompany = async (id) => {
  // Logic to DELETE data
};
