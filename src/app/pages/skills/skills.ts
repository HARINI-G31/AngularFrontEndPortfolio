
import { Component } from '@angular/core';

interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  heading: string = 'Technical Skills & Expertise';

  introduction: string =
    'A combination of programming knowledge, full-stack development, cloud technologies and AI/ML concepts used to build practical digital solutions.';

  skillCategories: SkillCategory[] = [

    {
      title: 'Programming Languages',
      icon: 'bi bi-code-slash',
      description: 'Languages used for application development and problem solving.',
      technologies: [
        'Python',
        'JavaScript (ES6+)',
        'Java',
        'C',
        'C++',
        'Shell / Bash'
      ]
    },

    {
      title: 'Frontend Development',
      icon: 'bi bi-window',
      description: 'Building responsive and interactive user interfaces.',
      technologies: [
        'React.js',
        'JavaScript (ES6+)',
        'Responsive UI Development'
      ]
    },

    {
      title: 'Backend Development',
      icon: 'bi bi-server',
      description: 'Developing backend applications and RESTful services.',
      technologies: [
        'Django',
        'Flask',
        'Node.js',
        'Express.js',
        'REST APIs',
        'Microservices'
      ]
    },

    {
      title: 'AI & Machine Learning',
      icon: 'bi bi-robot',
      description: 'Working with machine learning concepts and intelligent technologies.',
      technologies: [
        'Machine Learning',
        'NLP',
        'Scikit-learn',
        'Generative AI',
        'LLMs'
      ]
    },

    {
      title: 'Databases',
      icon: 'bi bi-database',
      description: 'Managing relational and NoSQL database systems.',
      technologies: [
        'MongoDB',
        'MySQL',
        'SQLite',
        'Redis'
      ]
    },

    {
      title: 'Cloud & DevOps',
      icon: 'bi bi-cloud',
      description: 'Cloud platforms, containerization and development workflows.',
      technologies: [
        'AWS',
        'Microsoft Azure',
        'Docker',
        'CI/CD Pipelines',
        'Git',
        'GitHub',
        'Linux'
      ]
    },

    {
      title: 'Tools & Platforms',
      icon: 'bi bi-tools',
      description: 'Tools for API testing, analytics and data visualization.',
      technologies: [
        'Postman',
        'Power BI',
        'Tableau',
        'Pandas',
        'NumPy',
        'Matplotlib'
      ]
    }

  ];

}
