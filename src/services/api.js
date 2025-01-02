export const fetchCompanies = async () => {
    // Simulate fetching companies from a backend
    return [
        {
            id: 1,
            name: 'ABC Corp',
            location: 'New York, NY',
            linkedin: 'https://www.linkedin.com/company/abc-corp',
            emails: 'contact@abccorp.com',
            phoneNumbers: '+1 123 456 7890',
            comments: 'Potential partner.',
            communicationPeriodicity: '2 weeks',
        },
        {
            id: 2,
            name: 'XYZ Inc',
            location: 'San Francisco, CA',
            linkedin: 'https://www.linkedin.com/company/xyz-inc',
            emails: 'info@xyzinc.com',
            phoneNumbers: '+1 987 654 3210',
            comments: 'Follow-up needed.',
            communicationPeriodicity: '1 month',
        },
    ];
};

export const saveCompany = async (company) => {
    // Simulate saving company data to a backend
    return { success: true, company };
};
