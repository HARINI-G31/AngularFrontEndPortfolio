
import { Component } from '@angular/core';

interface WorkExperience {
  role: string;
  organization?: string;
  period: string;
  location: string;
  points: string[];
}

interface Certification {
  name: string;
  provider: string;
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {

  heading = 'Experience & Education';

  introduction =
    'My learning journey, professional experiences and certifications that have helped me grow as a software developer.';

  experiences: WorkExperience[] = [
    {
      role: 'Data Science Intern',
      organization: 'Pantech Solutions',
      period: 'July 2025 – August 2025',
      location: 'Chennai, India',
      points: [
        'Processed and analyzed datasets containing over 1,000 records using Python, Pandas and NumPy.',
        'Created more than five interactive dashboards using Power BI and Matplotlib.',
        'Worked on feature engineering, evaluation logic and data visualization.',
        'Improved trend identification by 35% through data analysis.'
      ]
    },
    {
      role: 'Cloud Engineer',
      period: 'July 2026',
      location: 'Coimbatore, India',
      points: [
        'Explored AWS cloud architecture, virtualization and IaaS, PaaS and SaaS models.',
        'Worked with AWS services including EC2, S3, VPC, IAM, RDS and CloudWatch.',
        'Learned cloud networking, security, storage and monitoring concepts.',
        'Studied Auto Scaling, Elastic Load Balancing, Route 53 and DevOps practices.'
      ]
    },
    {
      role: 'Python Developer Intern',
      organization: 'Cybernaut',
      period: 'August 2024 – December 2024',
      location: 'Remote',
      points: [
        'Developed Python automation scripts and data extraction pipelines using BeautifulSoup.',
        'Collected and structured over 500 records with 95% accuracy.',
        'Built REST-based extraction workflows processing over 200 records per run.',
        'Improved data retrieval efficiency by 40% using batching and pagination.'
      ]
    }
  ];

  education = {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'PSNA College of Engineering and Technology',
    period: 'September 2023 – May 2027',
    location: 'Dindigul, Tamil Nadu',
    status: 'Expected Graduation: May 2027',
    coursework: [
      'Machine Learning',
      'Data Structures and Algorithms',
      'Cloud Computing',
      'Database Management Systems',
      'Software Engineering'
    ]
  };

  certifications: Certification[] = [
    { name: 'Machine Learning in Azure', provider: 'Microsoft Azure' },
    { name: 'Data Science 101', provider: 'IBM' },
    { name: 'Automation Development', provider: 'UiPath' },
    { name: 'Foundations', provider: 'Celonis' },
    { name: 'Gemini AI Certified', provider: 'Google' },
    { name: 'Generative AI', provider: 'Great Learning' },
    { name: 'Technology Job Simulation', provider: 'Deloitte' },
    { name: 'Cloud Computing', provider: 'NPTEL' },
    { name: 'IoT & Digital Transformation', provider: 'Cisco' },
    { name: 'Atlas Authentication', provider: 'MongoDB' }
  ];

  languages = [
    { name: 'Tamil', level: 'Native' },
    { name: 'English', level: 'Proficient' },
    { name: 'Hindi', level: 'Advanced' }
  ];
}
