
import { Component } from '@angular/core';

interface Project {
  title: string;
  category: string;
  date: string;
  description: string;
  technologies: string[];
  icon: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  heading = 'Projects & Work';
  introduction =
    'A selection of applications and solutions I have developed using full-stack technologies, AI and modern web development tools.';

  projectList: Project[] = [

    {
      title: 'SumaiyaOils',
      category: 'Full-Stack E-Commerce Platform',
      date: 'April 2026 – May 2026',
      description:
        'Developed a full-stack e-commerce platform for a natural oils and wellness brand, including product discovery, authentication, inventory, cart and order management.',
      technologies: [
        'React.js',
        'Node.js',
        'REST APIs',
        'Database',
        'Responsive UI',
        'SEO'
      ],
      icon: 'bi bi-cart3',
      liveUrl: 'https://sumaiyaoils.in'
    },

    {
      title: 'Aarohi',
      category: 'Mental Health Web Application',
      date: 'March 2026',
      description:
        'Built a mental health web application with a React frontend and Django REST API backend. It includes a recommendation engine that provides personalized suggestions.',
      technologies: [
        'Python',
        'Django',
        'React.js',
        'REST APIs',
        'SQLite'
      ],
      icon: 'bi bi-heart-pulse'
    },

    {
      title: 'AI Fake News Detection',
      category: 'Full-Stack NLP Application',
      date: 'October 2025',
      description:
        'Developed a machine learning application to classify text and identify potentially fake news using NLP techniques and machine learning models.',
      technologies: [
        'Python',
        'Django',
        'Scikit-learn',
        'TF-IDF',
        'Transformers',
        'REST APIs'
      ],
      icon: 'bi bi-shield-check'
    },

    {
      title: 'E-Voting Platform',
      category: 'Secure Distributed Web System',
      date: 'August 2025',
      description:
        'Created a secure online voting platform with OTP-based two-factor authentication and blockchain-backed vote storage.',
      technologies: [
        'React.js',
        'Node.js',
        'MongoDB',
        'Blockchain',
        'OTP Authentication',
        'Docker'
      ],
      icon: 'bi bi-check2-square'
    }

  ];
}
