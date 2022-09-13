export interface Question {
  id: number;
  category: Categories;
  question: string;
  answer: string;
  difficulty: Difficulty;
}

export enum Difficulty {
  SHOWALLDIFFICULTIES = 'Show all Difficulties',
  JUNIOR = 'Junior',
  REGULAR = 'Regular',
  SENIOR = 'Senior',
  LEAD = 'Lead',
}

export enum Categories {
  SHOWALLCATEGORIES = 'Show all Categories',
  HARDSKILLSGENERIC = 'Hard Skills Generic',
  JSANDES6 = 'JS and ES6+',
  HTMLCSS = 'HTML and CSS',
  TESTING = 'Testing',
  REACT = 'React',
  ANGULAR = 'Angular',
  NODEJS = 'Nodejs',
  SOFTSKILLS = 'Soft Skills',
}
