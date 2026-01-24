/**
 * Calculate years of experience based on start year
 * @param startYear - The year you started your career
 * @returns Experience string with + suffix (e.g., "6+")
 */
export const calculateExperience = (startYear: number): string => {
  const currentYear = new Date().getFullYear()
  const yearsOfExperience = currentYear - startYear
  return `${yearsOfExperience}+`
}
