export function sortContacts(contacts) {
  return contacts?.slice().sort((a, b) => {
    const firstNameComparison = a.firstName
      .toLowerCase()
      .localeCompare(b.firstName.toLowerCase());
    if (firstNameComparison !== 0) {
      return firstNameComparison;
    } else {
      return a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase());
    }
  });
}
